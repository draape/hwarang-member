import { MdPlayCircleOutline } from "react-icons/md";

export default {
  name: "video",
  title: "Videoer",
  type: "document",
  icon: MdPlayCircleOutline,
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
      name: "category",
      title: "Kategori",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "videoId",
      title: "Video ID",
      description: "Vimeo video id",
      type: "number",
      validation: (Rule) => Rule.required(),
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
