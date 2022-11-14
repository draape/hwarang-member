import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import SiteSettings from "./site-settings";
import Page from "./page";
import ExtendedImage from "./extended-image";
import Video from "./video";
import Category from "./category";
import Technique from "./technique";
import Quiz from "./quiz";
import Player from "./player";

import Answer from "./objects/answer";
import Choice from "./objects/choice";
import Question from "./objects/question";
import MatchChoice from "./objects/match-choice";
import MatchQuestion from "./objects/match-question";
import Gwe from "./objects/gwe";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    SiteSettings,
    Page,
    ExtendedImage,
    Video,
    Category,
    Technique,
    Quiz,
    Player,
    Answer,
    Choice,
    Question,
    MatchChoice,
    MatchQuestion,

    Gwe,
  ]),
});
