import React, { FC } from "react";
import { MatchQuestionChoice } from "../quiz/quiz-wizard";

type DropdownProps = {
  id: string;
  label: string;
  options: MatchQuestionChoice[];
};

export const Dropdown: FC<DropdownProps> = ({ label, options, id }) => (
  <label className="dropdown">
    {label}
    <select className="dropdown__select" id={id}>
      {options.map((option, idx) => (
        <option key={idx} value={option.matchValue}>
          {option.matchTitle}
        </option>
      ))}
    </select>
  </label>
);
