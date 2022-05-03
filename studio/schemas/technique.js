import { GiPunch } from "react-icons/gi";

export default {
  name: "technique",
  title: "Teknikker",
  type: "document",
  icon: GiPunch,
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (_, options) => options.parent.name,
      },
      validation: (Rule) => Rule.required(),
    },

    // short description for dictionary listing
    // long description for use on a page
    // image/video for use on a pages
  ],
};
