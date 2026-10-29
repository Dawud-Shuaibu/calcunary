import { useState, createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const MenuContext = createContext(null);

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={[
        { isMenuOpen, setIsMenuOpen },
        { isAboutOpen, setIsAboutOpen },
      ]}
    >
      {children}
    </MenuContext.Provider>
  );
};
