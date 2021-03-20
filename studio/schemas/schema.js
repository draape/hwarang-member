import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import SiteSettings from "./site-settings";
import Page from "./page";
import ExtendedImage from "./extended-image";
import Video from "./video";
import Category from "./category";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    SiteSettings,
    Page,
    ExtendedImage,
    Video,
    Category,
  ]),
});
