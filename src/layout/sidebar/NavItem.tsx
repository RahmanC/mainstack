import * as React from "react";
import { UtilContext } from "context/UtilContext";
import { NavLink } from "react-router-dom";
import { TLink } from "utils/types";
import style from "./Sidebar.module.scss";

const NavItem = (props: TLink) => {
  const { title, icon } = props;
  const { toggleHamburger } = React.useContext(UtilContext);

  return (
    <div className={style.item}>
      <NavLink
        to={title?.toLocaleLowerCase()}
        className={({ isActive }) =>
          isActive ? style.item_active : style.item_link
        }
        onClick={toggleHamburger}
      >
        <div className={style.item_inner}>
          <div className={style.item_inner_icon}>{icon}</div>
          <span className={style.item_inner_label}>{title}</span>
        </div>
      </NavLink>
    </div>
  );
};

export default NavItem;
