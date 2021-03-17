export default {
  name: "extendedImage",
  title: "Bilde",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      title: "Alternativ tekst",
      type: "string",
      description: "Beskriv hva man kan se på bildet",
      validation: (Rule) =>
        Rule.required().error("Alternativ tekst må være oppgitt."),
      options: {
        isHighlighted: true,
      },
    },
  ],
};
