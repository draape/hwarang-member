import React, { FC } from "react";
import { MatchQuestionOptions } from "./match-question-option";
import { QuestionOptions } from "./question-options";
import { SanityQuestion } from "./types";

type QuestionProps = {
  model: SanityQuestion;
  current: boolean;
};

export const Question: FC<QuestionProps> = ({ model, current }) =>
  current ? (
    <div>
      <h2>{model.title}</h2>
      {
        {
          "single-choice": (
            <QuestionOptions id={model.id} options={model.choices} />
          ),
          "match-choice": <MatchQuestionOptions choices={model.matchChoices} />,
        }[model.type]
      }
    </div>
  ) : null;
