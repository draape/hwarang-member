export default {
  name: "answer",
  title: "Svar",
  type: "object",
  fields: [
    {
      name: "questionKey",
      title: "Spørsmål",
      type: "string",
      description: "Nøkkel til Spørsmål (i quiz.questions[])",
    },
    {
      name: "selectedChoiceKey",
      title: "Svaralternativ",
      type: "string",
      description: "Nøkkel til Alternativ (i question.choices[])",
    },
    {
      name: "player",
      title: "Spiller",
      type: "reference",
      to: [{ type: "player" }],
    },
    {
      name: "submittedAt",
      title: "Dato innsendt",
      type: "datetime",
    },
  ],

  preview: {
    select: {
      questionKey: "questionKey",
      selectedChoiceKey: "selectedChoiceKey",
      playerName: "player.name",
    },
    prepare({ questionKey, selectedChoiceKey, playerName }) {
      return {
        title: playerName,
        subtitle: `${questionKey} / ${selectedChoiceKey}`,
      };
    },
  },
};
