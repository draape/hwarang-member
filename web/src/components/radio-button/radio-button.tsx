import React, { ChangeEventHandler, FC } from "react";

type RadioButtonProps = {
  name: string;
  value: string;
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const RadioButton: FC<RadioButtonProps> = ({
  name,
  value,
  label,
  onChange,
}) => (
  <label className="radio-button">
    <input
      className="radio-button__input"
      type="radio"
      name={name}
      value={value}
      onChange={onChange}
    />
    <span className="radio-button__checkmark"></span>
    {label}
  </label>
);
