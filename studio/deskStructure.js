import S from "@sanity/desk-tool/structure-builder";

import { MdSettings } from "react-icons/md";

const excludedTypes = ["siteSettings"];

export default () =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem()
        .title("Innstillinger")
        .icon(MdSettings)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !excludedTypes.includes(listItem.getId())
      ),
    ]);
