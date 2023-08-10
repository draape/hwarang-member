import React, { FC } from "react";

import { getEnumKey } from "../../utils/get-enum-key";

export enum ButtonTheme {
  Button = 1,
  Pill = 2,
  PillSelected = 3,
  Link = 4,
}

type ButtonProps = {
  className?: string;
  theme?: ButtonTheme;
  type: "button" | "submit";
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
  className,
  theme = ButtonTheme.Button,
  type = "button",
  children,
  onClick,
}) => (
  <button
    className={`button button--${getEnumKey(ButtonTheme, theme)} ${className}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);
