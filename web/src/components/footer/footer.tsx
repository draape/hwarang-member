import React, { FC } from "react";

import { Link } from "../link/link";

type FooterProps = {
  className?: string;
};

export const Footer: FC<FooterProps> = ({ className }) => (
  <footer className={`footer ${className}`}>
    <p>
      Har du funnet feil på siden eller har tilbakemeldinger på innholdet? Send
      en melding til{" "}
      <Link href="mailto:dankomite@hwarang.no" text="dankomite@hwarang.no" />.
    </p>
    <p>© {new Date().getFullYear()} Hwa Rang Norge</p>
  </footer>
);
