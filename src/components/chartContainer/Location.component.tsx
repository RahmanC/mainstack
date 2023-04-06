/* eslint-disable array-callback-return */
import { PropsWithChildren } from "react";
import style from "./Container.module.scss";
import DoughnutChart from "components/chart/Doughnut.component";
import { ReactComponent as Nigeria } from "assets/svg/nigeria.svg";
import { ReactComponent as Ghana } from "assets/svg/andora.svg";
import { ReactComponent as Germany } from "assets/svg/usa.svg";
import { ReactComponent as Finland } from "assets/svg/holland.svg";
import { LocationProps } from "utils/types";

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

const LocationContainer = ({
  data,
}: PropsWithChildren<{ data: LocationProps[] }>) => {
  const topLocations = data?.slice(0, 4);

  // Calculate the total count of all countries
  const totalCount = data?.reduce((acc: any, curr: any) => acc + curr.count, 0);

  // Calculate the count of "Others" countries
  const otherCount =
    totalCount -
    topLocations.reduce((acc: any, curr: any) => acc + curr.count, 0);

  return (
    <div className={style.main}>
      <div className={style.main_head}>
        <div>Page Views</div>
        <p>View Full Reports</p>
      </div>

      <div className={style.main_bottom}>
        <div className={style.main_bottom_legends}>
          {topLocations.map((d: any) => {
            switch (d.country) {
              case "Nigeria":
                return (
                  <LegendComponent flag={<Nigeria />} color="#599eea" {...d} />
                );

              case "Germany":
                return (
                  <LegendComponent flag={<Germany />} color="#844ff6" {...d} />
                );

              case "Ghana":
                return (
                  <LegendComponent flag={<Ghana />} color="#0fb77a" {...d} />
                );

              case "Finland":
                return (
                  <LegendComponent flag={<Finland />} color="#fab70a" {...d} />
                );

              default:
                break;
            }
          })}
          {data?.length > 4 && (
            <div className={style.main_bottom_legends_legend}>
              <div>others {otherCount}% </div>
              <span
                style={{ background: "#f09468" }}
                className={style.main_bottom_legends_legend_color}
              ></span>
            </div>
          )}
        </div>
        <div
          style={{
            maxWidth: "500px",
          }}
        >
          <DoughnutChart
            data={data}
            countKey="count"
            labelKey="country"
            sourceKey="percent"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationContainer;
