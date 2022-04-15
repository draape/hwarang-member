import React, { FC } from "react";

type LinkProps = {
  href: string;
  text: string;
};

export const Link: FC<LinkProps> = ({ href, text }) => (
  <a className="link" href={href}>
    {text}
  </a>
);
