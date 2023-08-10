import React, { FC } from "react";
import cn from "classnames";

type FormGroupProps = {
  spaced?: boolean;
};

export const FormGroup: FC<FormGroupProps> = ({ spaced = false, children }) => (
  <div className={cn("form-group", { "form-group--spaced": spaced })}>
    {children}
  </div>
);
