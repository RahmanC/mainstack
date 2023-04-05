import swapTitle from "layout/swapTitle";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import style from "./Navbar.module.scss";

const Navbar = () => {
  const [navTitle, setNavTitle] = useState<string>("");

  const location = useLocation();

  const pathname: string = location.pathname;

  useEffect(() => {
    setNavTitle(pathname);
  }, [pathname]);

  return <div className={style.nav}>{swapTitle[navTitle]}</div>;
};

export default Navbar;
