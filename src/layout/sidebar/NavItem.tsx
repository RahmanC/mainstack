import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.scss";

type NavProps = {
  title: string;
  icon: JSX.Element;
  path: string;
};

const NavItem = (props: NavProps) => {
  return (
    <div className={style.item}>
      <NavLink
        to={props.path}
        className={({ isActive }) =>
          isActive ? style.item_active : style.item_link
        }
      >
        <div className={style.item_icon}>{props.icon}</div>
        <span className={style.item_label}>{props.title}</span>
      </NavLink>
    </div>
  );
};

export default NavItem;
