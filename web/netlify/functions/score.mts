import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: "2021-03-25",
  useCdn: false,
});

export default async (event) => {
  const request = await streamToString(event.body);
  console.log("Received request", request);

  // Get the guiz from Sanity
  const quiz = await sanityClient.fetch(
    `*[_type == "quiz" && slug.current == "${request.quiz}"][0] {
      _id,
      questions [] {
        _key,
        choices,
        matchChoices
      }
    }`
  );

  // Compare request with correct answers, give one point per correct answer
  const correctAnswersMap = quiz.questions.reduce((map, question) => {
    const correctChoice = question.choices?.find((choice) => choice.isCorrect);
    if (correctChoice) {
      map[question._key] = correctChoice.value;
      return map;
    }

    for (const matchChoice of question.matchChoices) {
      map[matchChoice.value] = matchChoice.matchValue;
    }

    return map;
  }, {});

  // Find correct answers for the given answers
  const correctAnswers = request.answers
    .map((answer) => {
      const correct = correctAnswersMap[answer.id];
      return {
        id: answer.id,
        value: answer.value,
        isCorrect: answer.value === correct,
      };
    })
    .flat();

  const questionCount = Object.keys(correctAnswersMap).length;
  const correctCount = correctAnswers.filter((a) => a.isCorrect).length;
  const score = Math.ceil((correctCount / questionCount) * 100) ?? 0;

  await createUser(request.user);
  await addAttempt(quiz._id, request.user, score, correctAnswers);

  return new Response(
    JSON.stringify({
      questions: questionCount,
      correct: correctCount,
      percentage: correctCount / questionCount,
      score: score,
    })
  );
};

async function streamToString(readableStream) {
  const reader = readableStream.getReader();
  let result = "";
  let chunk;

  while (!(chunk = await reader.read()).done) {
    result += new TextDecoder("utf-8").decode(chunk.value);
  }

  return JSON.parse(result);
}

const createUser = async (user: { email: string; name: string }) => {
  console.log("Create user", user);
  await sanityClient.createIfNotExists({
    _id: user.email.replace("@", "__"),
    _type: "player",
    name: user.name,
  });
};

const addAttempt = async (quizId, user, score, answers) => {
  await sanityClient
    .patch(user.email.replace("@", "__"))
    .setIfMissing({ quizAttempts: [] })
    .insert("after", "quizAttempts[-1]", [
      {
        quiz: { _ref: quizId },
        submittedAt: new Date(),
        score: score,
        answers: answers,
      },
    ])
    .commit({
      autoGenerateArrayKeys: true,
    });
};
