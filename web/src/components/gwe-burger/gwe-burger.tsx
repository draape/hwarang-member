import React, { useState } from "react";

const GweBurger: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      className={`gwe-burger ${isActive ? "gwe-burger--is-active" : ""}`}
      type="button"
      onClick={() => setIsActive(!isActive)}
    >
      <span className="gwe-burger__a"></span>
      <span className="gwe-burger__b"></span>
      <span className="gwe-burger__c"></span>
    </button>
  );
};

export default GweBurger;
