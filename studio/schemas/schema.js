import SiteSettings from "./documents/site-settings";
import Page from "./documents/page";
import ExtendedImage from "./extended-image";
import Video from "./documents/video";
import Category from "./documents/category";
import Technique from "./documents/technique";
import Quiz from "./documents/quiz";
import { player, quizAttempts, answer } from "./documents/player";

import Choice from "./objects/choice";
import Question from "./objects/question";
import MatchChoice from "./objects/match-choice";
import MatchQuestion from "./objects/match-question";
import Gwe from "./objects/gwe";

export default [
  SiteSettings,
  Page,
  ExtendedImage,
  Video,
  Category,
  Technique,
  Quiz,
  player,
  Choice,
  Question,
  MatchChoice,
  MatchQuestion,
  Gwe,

  quizAttempts,
  answer,
];
