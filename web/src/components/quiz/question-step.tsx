import React, { FC } from "react";
import { MatchQuestionOptions } from "./match-question-option";
import { QuestionChoices } from "./question-choices";

import {
  Question,
  MatchQuestion,
  QuestionChoice,
  MatchQuestionChoice,
} from "./quiz-wizard";

type QuestionProps = {
  question: Question | MatchQuestion;
};

export const QuestionStep: FC<QuestionProps> = ({ question }) => (
  <div>
    <h2>{question.title}</h2>
    {/* TODO description */}
    {/* TODO image */}
    {
      {
        question: (
          <QuestionChoices
            id="test"
            choices={question.choices as Array<QuestionChoice>}
          />
        ),
        matchQuestion: (
          <MatchQuestionOptions
            id="test"
            choices={question.choices as Array<MatchQuestionChoice>}
          />
        ),
      }[question._type]
    }
  </div>
);
