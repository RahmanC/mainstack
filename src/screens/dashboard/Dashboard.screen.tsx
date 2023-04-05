import Pill from "components/pill/Pill.component";
import { TimeHook } from "hooks/TimeHook";
import style from "./Dashboard.module.scss";

const Dashboard = () => {
  const { timeOfDay } = TimeHook();
  return (
    <div className={style.main}>
      <div className={style.main_header}>
        <div className={style.main_header_greeting}>
          <p>Good {timeOfDay}</p>
          <p>Check out your dashboard summary.</p>
        </div>

        <div className={style.main_header_analytic}>View analytics</div>
      </div>
      <Pill />
    </div>
  );
};

export default Dashboard;
