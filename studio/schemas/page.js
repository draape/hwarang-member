import { MdWebAsset } from "react-icons/md";

export default {
  name: "page",
  title: "Sider",
  type: "document",
  icon: MdWebAsset,
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: (doc, options) => options.parent.title,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Undertittel",
      type: "string",
      validation: (Rule) => Rule.max(80),
    },
    {
      name: "image",
      title: "Bilde",
      type: "extendedImage",
    },
    {
      name: "text",
      type: "array",
      title: "Tekst",
      of: [
        {
          type: "block",
        },
        {
          type: "extendedImage",
        },
      ],
    },
  ],
};
