import React, { useState, useContext } from "react";
import { MenuContext } from "../../contexts/menu-context";

const GweBurger: React.FC = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  return (
    <button
      className={`gwe-burger ${isOpen ? "gwe-burger--is-active" : ""}`}
      type="button"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <span className="gwe-burger__a"></span>
      <span className="gwe-burger__b"></span>
      <span className="gwe-burger__c"></span>
    </button>
  );
};

export default GweBurger;
