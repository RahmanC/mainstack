import View from "components/chart/View.component";
import Pill from "components/pill/Pill.component";
import { TimeHook } from "hooks/TimeHook";
import style from "./Dashboard.module.scss";
import { ReactComponent as Info } from "assets/svg/info.svg";
import LocationContainer from "components/chartContainer/Location.component";
import ReferralContainer from "components/chartContainer/Referral.component";
import { useContext } from "react";
import { DataContext } from "context/DataContext";

const Dashboard = () => {
  // get responses from data context
  const { records, locations, sources } = useContext(DataContext);

  const graph_data = records?.views;

  // dynamic greeting message, depending on the time of the day
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
        <LocationContainer data={locations} />
        <ReferralContainer data={sources} />
      </div>
    </div>
  );
};

export default Dashboard;
