import React, { FC } from "react";
import cn from "classnames";

export enum TagColor {
  White = 1,
  Yellow = 2,
  Green = 3,
  Blue = 4,
  Red = 5,
  Black = 6,
}

type TagProps = {
  color: TagColor;
};

export const Tag: FC<TagProps> = ({ color, children }) => (
  <div className={cn("tag", `tag--${TagColor[color].toLowerCase()}`)}>
    {children}
  </div>
);
