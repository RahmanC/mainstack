import { useState } from "react";
import { TLink } from "utils/types";
import NavItem from "./NavItem";
import style from "./Sidebar.module.scss";

const NavSubItem = (props: TLink) => {
  const { subRoutes, heading } = props;
  const [visible, setVisible] = useState<Boolean>(false);

  return (
    <div className={style.sub_item}>
      <div
        className={style.sub_item_link}
        onClick={() => setVisible((prev) => !prev)}
      >
        <div className={style.sub_item_link_label}>{heading}</div>
      </div>

      {visible &&
        subRoutes?.map(({ title, icon }) => (
          <NavItem key={title} title={title} icon={icon} />
        ))}
    </div>
  );
};

export default NavSubItem;
