export default {
  name: "choice",
  title: "Alternativ",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (Rule) =>
        Rule.custom((title) => {
          if (!title) {
            return "Tittelen må ha en verdi";
          }
          if (title.length > 300) {
            return `Et alternativ kan ikke har mer enn 300 tegn. Denne har ${title.length}`;
          }
          return true;
        }),
    },
    {
      name: "isCorrect",
      title: "Riktig svar",
      type: "boolean",
    },
  ],

  preview: {
    select: {
      title: "title",
      isCorrect: "isCorrect",
    },
    prepare({ title, isCorrect }) {
      return {
        title: `${isCorrect ? "✅" : "❌"} ${title}`,
      };
    },
  },
};
