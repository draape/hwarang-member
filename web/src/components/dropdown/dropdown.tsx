import React, { FC } from "react";

type DropdownProps = {
  label: string;
  options: { value: string; name: string }[];
};

export const Dropdown: FC<DropdownProps> = ({ label, options }) => (
  <label className="dropdown">
    {label}
    <select className="dropdown__select">
      {options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  </label>
);
