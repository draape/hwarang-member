import React, { FC } from "react";
import { navigate } from "gatsby";
import { Button, ButtonTheme } from "../button/button";

type BreadcrumbProps = {
  title: string;
  href: string;
};

export const Breadcrumb: FC<BreadcrumbProps> = ({ title, href }) => (
  <Button
    className="breadcrumb"
    theme={ButtonTheme.PillSelected}
    onClick={() => {
      navigate(href);
    }}
  >
    Tilbake til {title.toLowerCase()}
  </Button>
);
