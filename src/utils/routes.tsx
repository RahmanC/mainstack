import { ReactComponent as DashboardIcon } from "assets/svg/dashboard.svg";
import { ReactComponent as Edit } from "assets/svg/pen.svg";
import { ReactComponent as Users } from "assets/svg/users.svg";
import { ReactComponent as Glass } from "assets/svg/hourGlass.svg";
import { ReactComponent as Camera } from "assets/svg/camera.svg";
import { ReactComponent as Trash } from "assets/svg/trash.svg";
import { ReactComponent as Subscribe } from "assets/svg/subscribe.svg";
import { ReactComponent as Attachment } from "assets/svg/attachment.svg";
import { ReactComponent as Clock } from "assets/svg/clock.svg";

export const navRoutes = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
  },
  {
    icon: <Edit />,
    title: "item1",
  },
  {
    icon: <Users />,
    title: "item2",
  },
  {
    icon: <Glass />,
    title: "item3",
  },
];

export const other1 = [
  {
    icon: <Camera />,
    title: "item4",
  },
  {
    icon: <Trash />,
    title: "item5",
  },
];

export const other2 = [
  {
    icon: <Subscribe />,
    title: "item6",
  },
  {
    icon: <Attachment />,
    title: "item7",
  },
  {
    icon: <Clock />,
    title: "item8",
  },
];
