import React, { FC, ReactNode } from "react";
import cn from "classnames";

type FormGroupProps = {
  spaced?: boolean;
  children: ReactNode;
};

export const FormGroup: FC<FormGroupProps> = ({ spaced = false, children }) => (
  <div className={cn("form-group", { "form-group--spaced": spaced })}>
    {children}
  </div>
);
