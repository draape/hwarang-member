import { uuid } from "@sanity/uuid";

const titleValidation = (Rule) =>
  Rule.custom((title) => {
    if (!title) {
      return "Tittelen må ha en verdi";
    }
    if (title.length > 300) {
      return `Et alternativ kan ikke har mer enn 300 tegn. Denne har ${title.length}`;
    }
    return true;
  });

export default {
  name: "matchChoice",
  title: "Alternativ",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: titleValidation,
    },
    {
      name: "value",
      title: "Verdi",
      type: "string",
      initialValue: () => uuid(),
      readOnly: true,
      hidden: true,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "matchTitle",
      title: "Settes sammen med",
      type: "string",
      validation: titleValidation,
    },
    {
      name: "matchValue",
      title: "Verdi",
      type: "string",
      initialValue: () => uuid(),
      readOnly: true,
      hidden: true,
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      matchTitle: "matchTitle",
    },
    prepare({ title, matchTitle }) {
      return {
        title: `${title} ➡️ ${matchTitle}`,
      };
    },
  },
};
