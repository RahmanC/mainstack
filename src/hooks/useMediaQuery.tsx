import * as React from "react";

export const useMediaQuery = (): boolean => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 900);

    const handleEvent = (): void => {
      setIsMobile(window.innerWidth < 900);
      if (window.innerWidth > 900) {
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleEvent);
    return () => {
      window.removeEventListener("resize", handleEvent);
    };
  }, []);

  return isMobile;
};
