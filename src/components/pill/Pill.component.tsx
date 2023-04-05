import { useState } from "react";
import style from "./Pill.module.scss";

type PillProps = {
  value: string;
  label: string;
};

const Pill = () => {
  const [active, setActive] = useState<string>("all");
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
