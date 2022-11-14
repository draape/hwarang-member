export default {
  name: "matchChoice",
  title: "Par alternativ",
  type: "object",
  fields: [
    {
      name: "value",
      title: "Verdi",
      type: "string",
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) {
            return "Verdi må være oppgitt";
          }
          if (value.length > 300) {
            return `Et alternativ kan ikke har mer enn 300 tegn. Denne har ${value.length}`;
          }
          return true;
        }),
    },
    {
      name: "match",
      title: "Motsvarende verdi",
      type: "string",
      validation: (Rule) =>
        Rule.custom((match) => {
          if (!match) {
            return "Motsvarende verdi må være oppgitt";
          }
          if (match.length > 300) {
            return `Et alternativ kan ikke har mer enn 300 tegn. Denne har ${match.length}`;
          }
          return true;
        }),
    },
  ],

  preview: {
    select: {
      value: "value",
      match: "match",
    },
    prepare({ value, match }) {
      return {
        title: `${value} ➡️ ${match}`,
      };
    },
  },
};
