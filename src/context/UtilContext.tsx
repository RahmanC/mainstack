import * as React from "react";
import { useClickOutside } from "hooks/UseClickOutside";
import { useMediaQuery } from "hooks/useMediaQuery";
import { GeneralProps, UtilContextProps } from "utils/types";

export const UtilContext = React.createContext<UtilContextProps>(
  {} as UtilContextProps
);

export const UtilProvider: React.FC<GeneralProps> = ({ children }) => {
  const [showHamburger, setShowHamburger] = React.useState(false);
  const { ref, visible, setVisible } = useClickOutside();
  const isMobile = useMediaQuery();

  // toggle hamburger on smaller screens
  const toggleHamburger = () => {
    setShowHamburger((prevS) => !prevS);

    setTimeout(() => {
      if (!showHamburger && isMobile) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, 100);
  };

  const showFilter = () => {
    setVisible((prevS) => !prevS);
  };

  const closeFilter = () => {
    setVisible(false);
  };

  return (
    <UtilContext.Provider
      value={{
        toggleHamburger,
        showHamburger,
        ref,
        visible,
        showFilter,
        closeFilter,
        isMobile,
      }}
    >
      {children}
    </UtilContext.Provider>
  );
};
