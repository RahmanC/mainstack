import * as React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Props } from "utils/types";

const View: React.FC<Props> = ({ data, filteredData }) => {
  const series: ApexAxisChartSeries = [
    {
      name: "views",
      data: Object.values(filteredData ?? data ?? {}), //if filteredData is unavailable, fallback to data or fallback to empty object
      color: "#FF5403",
    },
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
      categories: Object.keys(filteredData ?? data ?? {}),
    },
  };

  return <Chart options={options} series={series} type="area" height={400} />;
};

export default View;
