import React, { ChangeEventHandler, FC } from "react";

type RadioButtonProps = {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const RadioButton: FC<RadioButtonProps> = ({
  name,
  value,
  label,
  checked,
  onChange,
}) => (
  <label className="radio-button">
    <input
      className="radio-button__input"
      type="radio"
      name={name}
      value={value}
      checked={checked ?? false}
      onChange={onChange}
    />
    <span className="radio-button__checkmark"></span>
    {label}
  </label>
);
