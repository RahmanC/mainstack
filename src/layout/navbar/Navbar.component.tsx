import swapTitle from "layout/swapTitle";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Hamburger from "./hamburger/Hamburger.component";
import style from "./Navbar.module.scss";

import { ReactComponent as MainStack } from "assets/svg/logo.svg";
import { UtilContext } from "context/UtilContext";

const Navbar = () => {
  const { isMobile } = React.useContext(UtilContext);

  const [navTitle, setNavTitle] = useState<string>("");

  const location = useLocation();

  const pathname: string = location.pathname;

  useEffect(() => {
    setNavTitle(pathname);
  }, [pathname]);

  return (
    <div className={style.nav}>
      <div>{swapTitle[navTitle]}</div>
      {isMobile && (
        <div className={style.main_logo}>
          <MainStack />
        </div>
      )}

      <div className={style.nav_menu}>
        <Hamburger />
      </div>
    </div>
  );
};

export default Navbar;
