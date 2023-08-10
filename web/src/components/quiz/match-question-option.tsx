import React, { FC } from "react";
import { FormGroup } from "../form-group/form-group";
import { Dropdown } from "../dropdown/dropdown";
import { MatchQuestionChoice } from "./quiz-wizard";

type MatchQuestionChoicesProps = {
  id: string;
  choices: MatchQuestionChoice[];
};

export const MatchQuestionOptions: FC<MatchQuestionChoicesProps> = ({
  id,
  choices,
}) => (
  // Update context on load and on select, context should be persisted
  <FormGroup spaced>
    {choices.map((choice, idx) => (
      <Dropdown
        key={choice.value}
        label={choice.title}
        id={choice.value}
        options={choices}
      />
    ))}
  </FormGroup>
);
