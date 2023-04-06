/* eslint-disable array-callback-return */
import { PropsWithChildren } from "react";
import style from "./Container.module.scss";
import DoughnutChart from "components/chart/Doughnut.component";
import { ReactComponent as Nigeria } from "assets/svg/nigeria.svg";
import { ReactComponent as Ghana } from "assets/svg/ghana.svg";
import { ReactComponent as Germany } from "assets/svg/germany.svg";
import { ReactComponent as Finland } from "assets/svg/finland.svg";
import { LocationProps } from "utils/types";
import LegendComponent from "components/legend/Legend.component";

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
        <div>Top Locations</div>
        <p>View Full Reports</p>
      </div>

      <div className={style.main_bottom}>
        <div className={style.main_bottom_legends}>
          {topLocations.map((d: any, index: number) => {
            switch (d.country) {
              case "Nigeria":
                return (
                  <LegendComponent
                    key={index}
                    flag={<Nigeria />}
                    color="#599eea"
                    {...d}
                    source={d.country}
                  />
                );

              case "Germany":
                return (
                  <LegendComponent
                    key={index}
                    flag={<Germany />}
                    color="#844ff6"
                    {...d}
                    source={d.country}
                  />
                );

              case "Ghana":
                return (
                  <LegendComponent
                    key={index}
                    flag={<Ghana />}
                    color="#0fb77a"
                    {...d}
                    source={d.country}
                  />
                );

              case "Finland":
                return (
                  <LegendComponent
                    key={index}
                    flag={<Finland />}
                    color="#fab70a"
                    {...d}
                    source={d.country}
                  />
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
