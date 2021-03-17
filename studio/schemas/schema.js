import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import Page from "./page";
import ExtendedImage from "./extendedImage";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([Page, ExtendedImage]),
});
