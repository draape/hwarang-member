const SINGLE_CHOICE_TITLE = "Enkelt valg";
const SINGLE_CHOICE_VALUE = "single-choice";
const MATCH_CHOICE_TITLE = "Sett sammen";
const MATCH_CHOICE_VALUE = "match-choice";

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
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: SINGLE_CHOICE_TITLE, value: SINGLE_CHOICE_VALUE },
          { title: MATCH_CHOICE_TITLE, value: MATCH_CHOICE_VALUE },
        ],
        layout: "radio",
      },
      initialValue: SINGLE_CHOICE_VALUE,
    },
    {
      name: "choices",
      title: "Alternativer",
      type: "array",
      of: [{ type: "choice" }],
      hidden: ({ parent }) => parent.type === MATCH_CHOICE_VALUE,
      validation: choiceValidation,
    },
    {
      name: "matchChoices",
      title: "Alternativer",
      type: "array",
      of: [{ type: "matchChoice" }],
      hidden: ({ parent }) => parent.type === SINGLE_CHOICE_VALUE,
      validation: choiceValidation,
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      type: "type",
    },
    prepare({ title, media, type }) {
      return {
        title,
        media,
        subtitle: {
          SINGLE_CHOICE_VALUE: SINGLE_CHOICE_TITLE,
          MATCH_CHOICE_VALUE: MATCH_CHOICE_TITLE,
        }[type],
      };
    },
  },
};

const choiceValidation = (Rule) =>
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
  });
