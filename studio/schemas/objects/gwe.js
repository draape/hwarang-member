export default {
  name: "gwe",
  title: "GWE",
  type: "object",
  fields: [
    {
      name: "description",
      title: "Beskrivelse",
      type: "text",
    },
    {
      name: "image",
      title: "Bilde",
      type: "extendedImage",
    },
  ],
  preview: {
    select: {
      title: "description",
      media: "image",
    },
  },
};
