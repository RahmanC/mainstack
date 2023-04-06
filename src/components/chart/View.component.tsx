import * as React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Props } from "utils/types";

const View: React.FC<Props> = ({ data }) => {
  const series: ApexAxisChartSeries = [
    { name: "views", data: Object.values(data ?? {}), color: "#FF5403" },
  ];
  const options: ApexOptions = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: Object.keys(data ?? {}),
    },
  };

  return <Chart options={options} series={series} type="area" height={400} />;
};

export default View;
