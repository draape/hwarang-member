import React, { FC, useContext, useMemo } from "react";
import { FormGroup } from "../form-group/form-group";
import { Dropdown } from "../dropdown/dropdown";
import { MatchQuestionChoice } from "./types";
import { QuizContext, QuizDispatchContext } from "./quiz-context";
import { shuffleArray } from "../../utils/array";

type MatchQuestionChoicesProps = {
  choices: MatchQuestionChoice[];
};

export const MatchQuestionOptions: FC<MatchQuestionChoicesProps> = ({
  choices,
}) => {
  const { save } = useContext(QuizDispatchContext);
  const { answers } = useContext(QuizContext);
  const shuffledOptions = useMemo(() => shuffleArray(choices), [choices]);

  shuffledOptions.find((option) => answers.indexOf(option));

  // const selectedValue = answers.map(
  //   (answer) =>
  //     shuffledOptions.find((option) => option.value === answer.id) ?? null
  // );

  console.log("answers", answers);
  console.log("choices", choices);
  // console.log("selected", selectedValue);

  return (
    <FormGroup spaced>
      {choices.map((choice) => {
        const selectedValue = answers.find(
          (answer) => answer.id === choice.value
        );

        return (
          <Dropdown
            key={choice.value}
            id={choice.value}
            label={choice.title}
            options={shuffledOptions}
            value={selectedValue?.value}
            initialEmpty={true}
            onChange={(e) => save({ id: choice.value, value: e.target.value })}
          />
        );
      })}
    </FormGroup>
  );
};
