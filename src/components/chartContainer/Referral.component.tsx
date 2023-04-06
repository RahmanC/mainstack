/* eslint-disable array-callback-return */
import { PropsWithChildren } from "react";
import style from "./Container.module.scss";
import DoughnutChart from "components/chart/Doughnut.component";
import { ReactComponent as Google } from "assets/svg/twitter.svg";
import { ReactComponent as Facebook } from "assets/svg/facebook.svg";
import { ReactComponent as Instagram } from "assets/svg/instagram.svg";
import { ReactComponent as Linkedin } from "assets/svg/linkedin.svg";
import { ReferralProps } from "utils/types";

export function LegendComponent(props: any) {
  const { flag, source, percent, color } = props;
  return (
    <div key={source} className={style.main_bottom_legends_legend}>
      {flag}

      <div>
        {source} {percent}%{" "}
      </div>
      <span
        style={{ background: color }}
        className={style.main_bottom_legends_legend_color}
      ></span>
    </div>
  );
}

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
        <div>Page Views</div>
        <p>View Full Reports</p>
      </div>

      <div className={style.main_bottom}>
        <div className={style.main_bottom_legends}>
          {topLocations.map((d) => {
            switch (d.source) {
              case "google":
                return (
                  <LegendComponent flag={<Google />} color="#599eea" {...d} />
                );

              case "instagram":
                return (
                  <LegendComponent
                    flag={<Instagram />}
                    color="#844ff6"
                    {...d}
                  />
                );

              case "facebook":
                return (
                  <LegendComponent flag={<Facebook />} color="#0fb77a" {...d} />
                );

              case "linkedin":
                return (
                  <LegendComponent flag={<Linkedin />} color="#fab70a" {...d} />
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
