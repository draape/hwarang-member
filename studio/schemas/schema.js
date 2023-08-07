import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import SiteSettings from "./documents/site-settings";
import Page from "./documents/page";
import ExtendedImage from "./extended-image";
import Video from "./documents/video";
import Category from "./documents/category";
import Technique from "./documents/technique";
import Quiz from "./documents/quiz";
import Player from "./documents/player";

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
