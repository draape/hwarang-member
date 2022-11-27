import React, { FC } from "react";

type RadioButtonProps = {
  name: string;
  value: string;
  label: string;
};

export const RadioButton: FC<RadioButtonProps> = ({ name, value, label }) => (
  <label className="radio-button">
    <input
      className="radio-button__input"
      type="radio"
      name={name}
      value={value}
    />
    <span className="radio-button__checkmark"></span>
    {label}
  </label>
);
