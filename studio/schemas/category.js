import { MdViewModule } from "react-icons/md";

export default {
  name: "category",
  title: "Kategorier",
  type: "document",
  icon: MdViewModule,
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
  ],
};
