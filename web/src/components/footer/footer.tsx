import React, { FC } from "react";

import { Link } from "../link/link";

export const Footer: FC = () => (
  <footer className="footer">
    <p>
      Har du funnet feil på siden eller har tilbakemeldinger på innholdet? Send
      en melding til{" "}
      <Link href="mailto:dankomite@hwarang.no" text="dankomite@hwarang.no" />.
    </p>
    <p>© {new Date().getFullYear()} Hwa Rang Norge</p>
  </footer>
);
