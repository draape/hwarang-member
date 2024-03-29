import { MdSettings } from "react-icons/md";

const excludedTypes = ["siteSettings"];

export default (S) =>
  S.list()
    .title("Innhold")
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !excludedTypes.includes(listItem.getId())
      ),
      S.divider(),
      S.listItem()
        .title("Innstillinger")
        .icon(MdSettings)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
    ]);
