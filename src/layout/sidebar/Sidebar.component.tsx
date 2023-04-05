import React from "react";
import style from "./Sidebar.module.scss";
import navRoutes from "utils/routes";

import { ReactComponent as MainStack } from "assets/svg/logo.svg";
import { ReactComponent as More } from "assets/svg/more.svg";
import avatar from "assets/png/user.png";
import NavSubItem from "./NavSubItem";
import NavItem from "./NavItem";

const Sidebar = () => {
  const links = [
    navRoutes.sidebar.dashboard,
    navRoutes.sidebar.item1,
    navRoutes.sidebar.item2,
    navRoutes.sidebar.item3,
    {
      title: "others1",
      subRoutes: [navRoutes.sidebar.item4, navRoutes.sidebar.item5],
    },
    {
      title: "others2",
      subRoutes: [
        navRoutes.sidebar.item6,
        navRoutes.sidebar.item7,
        navRoutes.sidebar.item8,
      ],
    },
  ];

  return (
    <div className={style.main}>
      <div className={style.main_logo}>
        <MainStack />
      </div>

      <div className={style.main_items}>
        <div className={style.main_items_menu}>
          {links.map((route) => {
            return <NavItem key={route.title} {...route} />;
          })}
        </div>

        <div className={style.main_items_user}>
          <img
            src={avatar}
            alt='Blessing'
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
