import { TLink } from "utils/types";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.scss";

// type NavProps = {
//   label: string;
//   subRoutes: any;
// };

const NavSubItem = (props: any) => {
  const { subRoutes, title } = props;
  const [visible, setVisible] = useState<Boolean>(false);

  return (
    <div className={style.sub_item}>
      <div
        className={style.sub_item_link}
        onClick={() => setVisible((prev) => !prev)}
      >
        <div className={style.sub_item_link_label}>{title}</div>
      </div>

      {visible && (
        <ul className={style.item_list}>
          {subRoutes.map((subRoute: any) => {
            return (
              <li key={subRoute.title}>
                <NavLink
                  to={subRoute.path}
                  className={({ isActive }) =>
                    isActive ? style.item_active : style.item_link
                  }
                >
                  <div className={style.item_icon}>{subRoute.icon}</div>
                  <span className={style.item_label}>{subRoute.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavSubItem;
