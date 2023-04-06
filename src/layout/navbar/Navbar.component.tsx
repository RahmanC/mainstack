import swapTitle from "layout/swapTitle";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Hamburger from "./hamburger/Hamburger.component";
import style from "./Navbar.module.scss";

const Navbar = () => {
  const [navTitle, setNavTitle] = useState<string>("");

  const location = useLocation();

  const pathname: string = location.pathname;

  useEffect(() => {
    setNavTitle(pathname);
  }, [pathname]);

  return (
    <div className={style.nav}>
      <div>{swapTitle[navTitle]}</div>
      <div className={style.nav_menu}>
        <Hamburger />
      </div>
    </div>
  );
};

export default Navbar;
