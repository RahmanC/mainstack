import { PillProps, StateProps } from "utils/types";
import style from "./Pill.module.scss";

const Pill = ({ active, setActive }: StateProps) => {
  const options: PillProps[] = [
    {
      value: "1",
      label: "1 day",
    },
    {
      value: "3",
      label: "3 days",
    },
    {
      value: "7",
      label: "7 days",
    },
    {
      value: "30",
      label: "30 days",
    },
    {
      value: "all",
      label: "All time",
    },
    {
      value: "custom",
      label: "Custom Date",
    },
  ];

  return (
    <div className={style.main}>
      {options.map((option) => {
        return (
          <div
            className={
              active === option.value ? style.main_activePill : style.main_pill
            }
            key={option.value}
            onClick={() => setActive(option.value)}
          >
            {option.label}
          </div>
        );
      })}
    </div>
  );
};

export default Pill;
