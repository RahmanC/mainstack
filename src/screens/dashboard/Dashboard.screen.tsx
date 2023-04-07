import * as React from "react";
import View from "components/chart/View.component";
import Pill from "components/pill/Pill.component";
import { TimeHook } from "hooks/TimeHook";
import style from "./Dashboard.module.scss";
import { ReactComponent as Info } from "assets/svg/info.svg";
import LocationContainer from "components/chartContainer/Location.component";
import ReferralContainer from "components/chartContainer/Referral.component";
import { useContext } from "react";
import { DataContext } from "context/DataContext";
import Loader from "components/loader/Loader.component";
import DateFilter from "./DateFilter.component";

const Dashboard = () => {
  const [active, setActive] = React.useState<string>("all");

  // get responses from data context
  const { loading, records, locations, sources } = useContext(DataContext);

  const graph_data = records?.views;

  // dynamic greeting message, depending on the time of the day
  const { timeOfDay } = TimeHook();

  const [startDate, setStartDate] = React.useState<string>("2022-07-31");
  const [endDate, setEndDate] = React.useState<string>("2022-08-03");

  const filteredData = filterData(graph_data, startDate, endDate);

  const allCount: any = Object.values(graph_data ?? {}).reduce(
    (total: any, value: any) => total + value,
    0
  );

  const customCount: any = Object.values(filteredData ?? {}).reduce(
    (total: any, value: any) => total + value,
    0
  );

  return loading ? (
    <Loader />
  ) : (
    <div className={style.main}>
      <div className={style.main_header}>
        <div className={style.main_header_greeting}>
          <p>Good {timeOfDay}</p>
          <p>Check out your dashboard summary.</p>
        </div>

        <div className={style.main_header_analytic}>View analytics</div>
      </div>
      <div className={style.main_pill}>
        <Pill active={active} setActive={setActive} />

        {/* show date picker only if custom date was selected */}
        {active === "custom" && (
          <DateFilter
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        )}
      </div>

      <div className={style.main_chart}>
        <div className={style.main_chart_head}>
          <div>Page Views</div>
          <Info />
        </div>
        <p>{active === "custom" ? startDate + " to " + endDate : "All time"}</p>
        <p className={style.main_chart_count}>
          {/* display the date range views if custom date was selected, otherwise display all views */}
          {active === "custom" ? customCount : allCount}
        </p>

        {active === "custom" ? (
          // if custom date was passed
          <View data={graph_data} filteredData={filteredData} />
        ) : (
          // otherwise use this
          <View data={graph_data} />
        )}
      </div>

      <div className={style.main_donuts}>
        <LocationContainer data={locations} />
        <ReferralContainer data={sources} />
      </div>
    </div>
  );
};

export default Dashboard;

// function to handle date filtering
const filterData = (
  data: { [key: string]: number },
  startDate: string,
  endDate: string
) => {
  return Object.fromEntries(
    Object.entries(data ?? {}).filter(
      ([date]) => date >= startDate && date <= endDate
    )
  );
};
