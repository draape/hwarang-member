import React, { useState, createContext, FC } from "react";

const MenuContext = createContext({
  isOpen: false,
  setIsOpen: (_: boolean) => {},
});

const MenuProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };
