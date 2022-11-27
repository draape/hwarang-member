import React, { FC } from "react";
import { FormGroup } from "../form-group/form-group";
import { Dropdown } from "../dropdown/dropdown";
import { MatchQuestionChoice } from "./quiz-wizard";

type MatchQuestionChoicesProps = {
  id: string;
  choices: Array<MatchQuestionChoice>;
};

export const MatchQuestionOptions: FC<MatchQuestionChoicesProps> = ({
  id,
  choices,
}) => {
  const allChoices = choices.map((choice) => ({
    name: choice.match,
    value: choice.match,
  }));

  return (
    <FormGroup spaced>
      {choices.map((choice, idx) => (
        <Dropdown key={idx} label={choice.value} options={allChoices} />
      ))}
    </FormGroup>
  );
};
