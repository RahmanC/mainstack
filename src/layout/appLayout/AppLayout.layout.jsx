import Navbar from "layout/navbar/Navbar.component";
import Sidebar from "layout/sidebar/Sidebar.component";
import { Outlet } from "react-router-dom";
import style from "./AppLayout.module.scss";

const AppLayout = () => {
  return (
    <div className={style.layout}>
      <div className={style.layout_menu}>
        <Sidebar />
      </div>
      <div className={style.layout_main}>
        <Navbar />
        <div className={style.layout_content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
