import React, { FC, useContext } from "react";
import { RadioButton } from "../radio-button/radio-button";
import { FormGroup } from "../form-group/form-group";
import { QuestionChoice } from "./types";
import { QuizDispatchContext } from "./quiz-context";

type QuestionOptionsProps = {
  id: string;
  options: QuestionChoice[];
};

export const QuestionOptions: FC<QuestionOptionsProps> = ({ id, options }) => {
  const { save } = useContext(QuizDispatchContext);
  return (
    // Update context on load and on select, context should be persisted
    <FormGroup>
      {options.map((option, idx) => (
        <RadioButton
          key={idx}
          label={option.title}
          name={id}
          value={option.value}
          onChange={() =>
            save({ id, values: [{ id: id, value: option.value }] })
          }
        />
      ))}
    </FormGroup>
  );
};
