export default {
  name: "siteSettings",
  title: "Innstillinger",
  type: "document",
  fields: [
    {
      name: "menu",
      title: "Meny",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "page" }, { type: "category" }],
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({
      title: "Innstillinger",
    }),
  },
};
