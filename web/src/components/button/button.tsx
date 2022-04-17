import React, { FC } from "react";

type ButtonProps = {
  className?: string;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ className, children, onClick }) => (
  <button className={`button ${className}`} type="button" onClick={onClick}>
    {children}
  </button>
);
