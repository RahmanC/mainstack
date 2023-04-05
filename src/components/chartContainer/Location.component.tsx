/* eslint-disable array-callback-return */
import React from "react";
import style from "./Container.module.scss";
import Location from "components/chart/Location.component";
import { ReactComponent as Nigeria } from "assets/svg/nigeria.svg";
import { ReactComponent as Ghana } from "assets/svg/andora.svg";
import { ReactComponent as Germany } from "assets/svg/usa.svg";
import { ReactComponent as Finland } from "assets/svg/holland.svg";

export function LegendComponent(props: any) {
  const { flag, country, percent, color } = props;
  return (
    <div key={country} className={style.main_bottom_legends_legend}>
      {flag}

      <div>
        {country} {percent}%{" "}
      </div>
      <span
        style={{ background: color }}
        className={style.main_bottom_legends_legend_color}
      ></span>
    </div>
  );
}

const LocationContainer = () => {
  const data = [
    {
      country: "Nigeria",
      count: 68,
      percent: 34,
    },
    {
      country: "Germany",
      count: 37,
      percent: 19,
    },
    {
      country: "Ghana",
      count: 50,
      percent: 25,
    },
    {
      country: "Finland",
      count: 40,
      percent: 20,
    },
    {
      country: "United Kingdom",
      count: 4,
      percent: 2,
    },
  ];

  const topLocations = data.slice(0, 4);

  // Calculate the total count of all countries
  const totalCount = data.reduce((acc, curr) => acc + curr.count, 0);

  // Calculate the count of "Others" countries
  const otherCount =
    totalCount - topLocations.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className={style.main}>
      <div className={style.main_head}>
        <div>Page Views</div>
        <p>View Full Reports</p>
      </div>

      <div className={style.main_bottom}>
        <div className={style.main_bottom_legends}>
          {topLocations.map((d) => {
            switch (d.country) {
              case "Nigeria":
                return (
                  <LegendComponent flag={<Nigeria />} color='#599eea' {...d} />
                );

              case "Germany":
                return (
                  <LegendComponent flag={<Germany />} color='#844ff6' {...d} />
                );

              case "Ghana":
                return (
                  <LegendComponent flag={<Ghana />} color='#0fb77a' {...d} />
                );

              case "Finland":
                return (
                  <LegendComponent flag={<Finland />} color='#fab70a' {...d} />
                );

              default:
                break;
            }
          })}

          <div className={style.main_bottom_legends_legend}>
            <div>others {otherCount}% </div>
            <span
              style={{ background: "#f09468" }}
              className={style.main_bottom_legends_legend_color}
            ></span>
          </div>
        </div>
        <Location data={data} />
      </div>
    </div>
  );
};

export default LocationContainer;
