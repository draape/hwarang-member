import React, { FC } from "react";
import { RadioButton } from "../radio-button/radio-button";
import { FormGroup } from "../form-group/form-group";
import { QuestionChoice } from "./quiz-wizard";

type QuestionOptionsProps = {
  id: string;
  options: QuestionChoice[];
};

export const QuestionOptions: FC<QuestionOptionsProps> = ({ id, options }) => (
  // Update context on load and on select, context should be persisted
  <FormGroup>
    {options.map((option, idx) => (
      <RadioButton
        key={idx}
        label={option.title}
        name={id}
        value={option.value}
      />
    ))}
  </FormGroup>
);
