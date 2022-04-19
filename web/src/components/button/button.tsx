import React, { FC } from "react";

import { getEnumKey } from "../../utils/get-enum-key";

export enum ButtonTheme {
  Button = 1,
  Pill = 2,
  PillSelected = 3,
}

type ButtonProps = {
  className?: string;
  theme?: ButtonTheme;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
  className,
  theme = ButtonTheme.Button,
  children,
  onClick,
}) => (
  <button
    className={`button button--${getEnumKey(ButtonTheme, theme)} ${className}`}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);
