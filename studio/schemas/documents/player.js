import { MdFace } from "react-icons/md";

export const player = {
  name: "player",
  title: "Spiller",
  type: "document",
  icon: MdFace,
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
    },
    {
      name: "quizAttempts",
      title: "Besvarelser",
      type: "array",
      of: [{ type: "quizAttempts" }],
    },
  ],
};

export const quizAttempts = {
  name: "quizAttempts",
  title: "Besvarelser",
  type: "object",
  fields: [
    {
      name: "quiz",
      title: "Quiz",
      type: "reference",
      to: [{ type: "quiz" }],
    },
    {
      name: "submittedAt",
      title: "Dato innsendt",
      type: "datetime",
    },
    {
      name: "score",
      title: "Poeng",
      type: "number",
    },
    {
      name: "answers",
      title: "Svar",
      type: "array",
      of: [{ type: "answer" }],
    },
  ],
  preview: {
    select: {
      score: "score",
      date: "submittedAt",
      title: "quiz.title",
    },
    prepare({ title, date, score }) {
      return {
        title: `${title} - ${score} poeng`,
        subtitle: new Date(date).toLocaleDateString("no-NB"),
      };
    },
  },
};

export const answer = {
  name: "answer",
  title: "Svar",
  type: "object",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "string",
    },
    {
      name: "value",
      title: "Verdi",
      type: "string",
    },
    {
      name: "isCorrect",
      title: "Riktig",
      type: "boolean",
    },
  ],
};
