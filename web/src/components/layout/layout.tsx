import React, { useContext } from "react";
import { Helmet } from "react-helmet";

import Header from "../header/header";
import { Footer } from "../footer/footer";
import { MenuContext } from "../../contexts/menu-context";

import favicon from "../../images/favicon.svg";
import "../../styles/site.scss";

const Layout: React.FC = ({ children }) => {
  const { isOpen } = useContext(MenuContext);
  return (
    <div className={`layout ${isOpen ? "layout--blur" : ""}`}>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <main className="layout__content">{children}</main>
      <Footer className="layout__footer" />
    </div>
  );
};

export default Layout;
