/* eslint-disable array-callback-return */
import { PropsWithChildren } from "react";
import style from "./Container.module.scss";
import DoughnutChart from "components/chart/Doughnut.component";
import { ReactComponent as Google } from "assets/svg/google.svg";
import { ReactComponent as Facebook } from "assets/svg/facebook.svg";
import { ReactComponent as Instagram } from "assets/svg/instagram.svg";
import { ReactComponent as Linkedin } from "assets/svg/linkedin.svg";
import { ReferralProps } from "utils/types";
import LegendComponent from "components/legend/Legend.component";

const ReferralContainer = ({
  data,
}: PropsWithChildren<{ data: ReferralProps[] }>) => {
  const topLocations = data?.slice(0, 4);

  // Calculate the total count of all countries
  const totalCount = data?.reduce((acc, curr) => acc + curr.count, 0);

  // Calculate the count of "Others" countries
  const otherCount =
    totalCount - topLocations.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className={style.main}>
      <div className={style.main_head}>
        <div>Top Referral source</div>
        <p>View Full Reports</p>
      </div>

      <div className={style.main_bottom}>
        <div className={style.main_bottom_legends}>
          {topLocations.map((d: any, index: number) => {
            switch (d.source) {
              case "google":
                return (
                  <LegendComponent
                    key={index}
                    flag={<Google />}
                    color="#599eea"
                    {...d}
                  />
                );

              case "instagram":
                return (
                  <LegendComponent
                    key={index}
                    flag={<Instagram />}
                    color="#844ff6"
                    {...d}
                  />
                );

              case "facebook":
                return (
                  <LegendComponent
                    key={index}
                    flag={<Facebook />}
                    color="#0fb77a"
                    {...d}
                  />
                );

              case "linkedin":
                return (
                  <LegendComponent
                    key={index}
                    flag={<Linkedin />}
                    color="#fab70a"
                    {...d}
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
        <DoughnutChart
          data={data}
          countKey="count"
          labelKey="source"
          sourceKey="percent"
        />
      </div>
    </div>
  );
};

export default ReferralContainer;
