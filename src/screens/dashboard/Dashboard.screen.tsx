import View from "components/chart/View.component";
import Pill from "components/pill/Pill.component";
import { TimeHook } from "hooks/TimeHook";
import style from "./Dashboard.module.scss";
import { ReactComponent as Info } from "assets/svg/info.svg";
import LocationContainer from "components/chartContainer/Location.component";

const Dashboard = () => {
  const graph_data = {
    "2022-07-31": 1,
    "2022-08-01": 3,
    "2022-08-02": 3,
    "2022-08-03": 7,
    "2022-08-04": 8,
    "2022-08-05": 5,
    "2022-08-06": 20,
    "2022-08-07": 50,
    "2022-08-08": 100,
    "2022-08-09": 2,
  };

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

      <div className={style.main_chart}>
        <div className={style.main_chart_head}>
          <div>Page Views</div>
          <Info />
        </div>
        <p>All time</p>
        <p className={style.main_chart_count}>500</p>
        <View data={graph_data} />
      </div>

      <div className={style.main_donuts}>
        <LocationContainer />
      </div>
    </div>
  );
};

export default Dashboard;
