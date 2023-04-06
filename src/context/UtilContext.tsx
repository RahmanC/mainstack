import * as React from "react";
import { useClickOutside } from "hooks/UseClickOutside";
import { useMediaQuery } from "hooks/useMediaQuery";

interface UtilContextProps {
  toggleHamburger: () => void;
  showHamburger: boolean;
  ref: React.RefObject<HTMLDivElement>;
  ref1: React.RefObject<HTMLDivElement>;
  visible: boolean;
  showFilter: () => void;
  closeFilter: () => void;
  isMobile: boolean;
}

interface GeneralProps {
  children: React.ReactNode;
}

export const UtilContext = React.createContext<UtilContextProps>(
  {} as UtilContextProps
);

export const UtilProvider: React.FC<GeneralProps> = ({ children }) => {
  const [showHamburger, setShowHamburger] = React.useState(false);
  const { ref, ref1, visible, setVisible } = useClickOutside();
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
        ref1,
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
