import { MdQuestionAnswer } from "react-icons/md";

export default {
  name: "quiz",
  title: "Quiz",
  type: "document",
  icon: MdQuestionAnswer,
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "text",
    },
    {
      name: "questions",
      title: "Spørsmål",
      type: "array",
      validation: (Rule) =>
        Rule.min(1).error("En quiz må ha minst ett spørsmål"),
      of: [{ type: "question" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      questions: "questions",
    },
    prepare({ title, questions = [] }) {
      const numberOfQuestions = questions.length;
      return {
        title: title || "uten navn 😢",
        subtitle: `${numberOfQuestions} spørsmål`,
      };
    },
  },
};
