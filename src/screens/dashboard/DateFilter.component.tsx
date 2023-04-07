import * as React from "react";
import { DateProps } from "utils/types";
import style from "./Dashboard.module.scss";

const DateFilter: React.FC<DateProps> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  return (
    <div className={style.main_pill_datePicker}>
      <div className={style.main_pill_datePicker_from}>
        <label>From</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className={style.main_pill_datePicker_from_input}
        />
      </div>
      <div className={style.main_pill_datePicker_from}>
        <label>To</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className={style.main_pill_datePicker_from_input}
        />
      </div>
    </div>
  );
};

export default DateFilter;
