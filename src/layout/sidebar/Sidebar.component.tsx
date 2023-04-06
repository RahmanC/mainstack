import * as React from "react";
import style from "./Sidebar.module.scss";
import { navRoutes, other1, other2 } from "utils/routes";

import { ReactComponent as MainStack } from "assets/svg/logo.svg";
import { ReactComponent as More } from "assets/svg/more.svg";
import avatar from "assets/png/user.png";
import NavSubItem from "./NavSubItem";
import NavItem from "./NavItem";
import { UtilContext } from "context/UtilContext";

const Sidebar = () => {
  const { isMobile, showHamburger } = React.useContext(UtilContext);

  console.log("ah", showHamburger);
  return (
    <div
      className={` ${isMobile && showHamburger ? style.show_side : style.main}`}
    >
      {!isMobile && (
        <div className={style.main_logo}>
          <MainStack />
        </div>
      )}

      <div className={style.main_items}>
        <div className={style.main_items_menu}>
          {navRoutes.map((route) => (
            <NavItem key={route.title} {...route} />
          ))}
          <NavSubItem heading="other1" subRoutes={other1} title="" />
          <NavSubItem heading="other2" subRoutes={other2} title="" />
        </div>

        <div className={style.main_items_user}>
          <img
            src={avatar}
            alt="Blessing"
            className={style.main_items_user_img}
          />{" "}
          <p>Blessing Daniels</p>
          <More />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
