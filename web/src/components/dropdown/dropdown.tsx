import React, { ChangeEventHandler, FC } from "react";
import { MatchQuestionChoice } from "../quiz/types";

type DropdownProps = {
  id: string;
  label: string;
  options: MatchQuestionChoice[];
  initialEmpty: boolean;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

export const Dropdown: FC<DropdownProps> = ({
  label,
  options,
  id,
  initialEmpty = true,
  onChange,
}) => (
  <label className="dropdown">
    {label}
    <select className="dropdown__select" id={id} onChange={onChange}>
      {initialEmpty && <option value=""></option>}
      {options.map((option, idx) => (
        <option key={idx} value={option.matchValue}>
          {option.matchTitle}
        </option>
      ))}
    </select>
  </label>
);
