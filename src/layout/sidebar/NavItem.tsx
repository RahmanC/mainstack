import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.scss";

// type NavProps = {
//   title: string;
//   icon: JSX.Element;
//   path: string;
// };

const NavItem = (props: any) => {
  return (
    <div className={style.item}>
      <NavLink
        to={props.path}
        className={({ isActive }) =>
          isActive ? style.item_active : style.item_link
        }
      >
        <div className={style.item_inner}>
          <div className={style.item_inner_icon}>{props.icon}</div>
          <span className={style.item_inner_label}>{props.title}</span>
        </div>
      </NavLink>
    </div>
  );
};

export default NavItem;
