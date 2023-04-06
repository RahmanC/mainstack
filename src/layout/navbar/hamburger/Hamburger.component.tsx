import * as React from "react";
import { UtilContext } from "context/UtilContext";

import style from "./Hamburger.module.scss";

const Hamburger = () => {
  const { showHamburger, toggleHamburger } = React.useContext(UtilContext);

  return (
    <label htmlFor="check" className={style.bar} onClick={toggleHamburger}>
      <span
        className={`${style.bar_top} ${
          showHamburger ? style.bar_transform : ""
        }`}
      ></span>
      <span
        className={`${style.bar_middle} ${
          showHamburger ? style.bar_transform : ""
        }`}
      ></span>
      <span
        className={`${style.bar_bottom} ${
          showHamburger ? style.transform : ""
        }`}
      ></span>
    </label>
  );
};

export default Hamburger;
