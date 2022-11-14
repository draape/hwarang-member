export default {
  name: "question",
  title: "Spørsmål",
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
            return `Et spørsmål kan kun ha 300 tegn. Denne har ${title.length}`;
          }
          return true;
        }),
    },
    {
      name: "image",
      title: "Bilde",
      type: "extendedImage",
    },
    {
      name: "choices",
      title: "Alternativer",
      type: "array",
      of: [{ type: "choice" }],
      validation: (Rule) =>
        Rule.custom((choices) => {
          if (!choices) {
            return true;
          }
          if (choices.length < 2) {
            return "Et spørsmål må ha minst 2 alternativer";
          }
          if (choices.length > 10) {
            return "Et spørsmål kan ikke ha mer enn 10 alternativer";
          }
          return true;
        }),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      };
    },
  },
};
