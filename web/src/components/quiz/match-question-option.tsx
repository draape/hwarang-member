import React, { FC, useContext, useMemo } from "react";
import { FormGroup } from "../form-group/form-group";
import { Dropdown } from "../dropdown/dropdown";
import { MatchQuestionChoice } from "./types";
import { QuizDispatchContext } from "./quiz-context";
import { shuffleArray } from "../../utils/array";

type MatchQuestionChoicesProps = {
  id: string;
  choices: MatchQuestionChoice[];
};

export const MatchQuestionOptions: FC<MatchQuestionChoicesProps> = ({
  id,
  choices,
}) => {
  const { save } = useContext(QuizDispatchContext);
  const shuffledOptions = useMemo(() => shuffleArray(choices), [choices]);
  return (
    <FormGroup spaced>
      {choices.map((choice) => (
        <Dropdown
          key={choice.value}
          id={choice.value}
          label={choice.title}
          options={shuffledOptions}
          initialEmpty={true}
          onChange={(e) =>
            save({ id, values: [{ id: choice.value, value: e.target.value }] })
          }
        />
      ))}
    </FormGroup>
  );
};
