import React, { FC } from "react";
import { RadioButton } from "../radio-button/radio-button";
import { FormGroup } from "../form-group/form-group";
import { QuestionChoice } from "./quiz-wizard";

type QuestionChoicesProps = {
  id: string;
  choices: Array<QuestionChoice>;
};

export const QuestionChoices: FC<QuestionChoicesProps> = ({ id, choices }) => (
  <FormGroup>
    {choices.map((choice, idx) => (
      <RadioButton
        key={idx}
        label={choice.title}
        name={id}
        value={choice.value}
      />
    ))}
  </FormGroup>
);
