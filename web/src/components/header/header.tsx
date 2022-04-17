import React, { useContext } from "react";

import { MenuContext } from "../../contexts/menu-context";

import GweBurger from "../gwe-burger/gwe-burger";

import Logo from "../../images/logo-web.svg";
import { Menu } from "../menu/menu";

const Header: React.FC = () => {
  const { isOpen } = useContext(MenuContext);

  return (
    <header className="header">
      <a
        className={`header__logo ${isOpen ? "header__logo--blur" : ""}`}
        href="/"
      >
        <img
          className="header__logo-image"
          src={Logo}
          alt="Hwa Rang Taekwondo Medlemssider"
        />
      </a>
      <nav className="header__navigation">
        <GweBurger />
        <Menu />
      </nav>
    </header>
  );
};

export default Header;
