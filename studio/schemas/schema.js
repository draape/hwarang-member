import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import SiteSettings from "./site-settings";
import Page from "./page";
import ExtendedImage from "./extended-image";
import Video from "./video";
import Category from "./category";
import Quiz from "./quiz";
import Player from "./player";
import Answer from "./answer";
import Choice from "./choice";
import Question from "./question";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    SiteSettings,
    Page,
    ExtendedImage,
    Video,
    Category,
    Quiz,
    Player,
    Answer,
    Choice,
    Question,
  ]),
});
