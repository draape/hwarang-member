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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc, options) => options.parent.title,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Bilde",
      type: "extendedImage",
    },
    {
      name: "text",
      title: "Tekst",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "extendedImage",
        },
        {
          type: "table",
        },
      ],
    },
    {
      name: "category",
      title: "Kategori",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
};
