import { ReactComponent as DashboardIcon } from "assets/svg/dashboard.svg";
import { ReactComponent as Edit } from "assets/svg/pen.svg";
import { ReactComponent as Users } from "assets/svg/users.svg";
import { ReactComponent as Glass } from "assets/svg/hourGlass.svg";
import { ReactComponent as Camera } from "assets/svg/camera.svg";
import { ReactComponent as Trash } from "assets/svg/trash.svg";
import { ReactComponent as Subscribe } from "assets/svg/subscribe.svg";
import { ReactComponent as Attachment } from "assets/svg/attachment.svg";
import { ReactComponent as Clock } from "assets/svg/clock.svg";

import { TLink } from "./types";

const navRoutes = {
  sidebar: {
    dashboard: {
      icon: <DashboardIcon />,
      title: "Dashboard",
      path: "/dashboard",
    },
    item1: {
      icon: <Edit />,
      title: "item1",
      path: "/item1",
    },
    item2: {
      icon: <Users />,
      title: "item2",
      path: "/item2",
    },
    item3: {
      icon: <Glass />,
      title: "item3",
      path: "/item3",
    },
    item4: {
      icon: <Camera />,
      title: "item4",
      path: "/item4",
    },
    item5: {
      icon: <Trash />,
      title: "item5",
      path: "/item5",
    },
    item6: {
      icon: <Subscribe />,
      title: "item6",
      path: "/item6",
    },
    item7: {
      icon: <Attachment />,
      title: "item7",
      path: "/item7",
    },
    item8: {
      icon: <Clock />,
      title: "item8",
      path: "/item8",
    },
  },
};

export default Object.freeze(navRoutes);
