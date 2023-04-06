import React from "react";
import ReactApexChart from "react-apexcharts";

interface DoughnutChartProps<T> {
  data: T[];
  countKey: string;
  labelKey: string;
  sourceKey: string;
}

const DoughnutChart = <T extends Record<string, any>>({
  data,
  countKey,
  labelKey,
  sourceKey,
}: DoughnutChartProps<T>) => {
  // Only show the first 4 data in the chart
  const topData = data?.slice(0, 4);

  // Calculate the total count of all data
  const totalCount = data?.reduce((acc, curr) => acc + curr[countKey], 0);

  // Calculate the count of "Others" data
  const otherCount =
    totalCount - topData?.reduce((acc, curr) => acc + curr[countKey], 0);

  const labels = topData?.map((data) => data[labelKey]);
  labels.push("Others");
  const dataPoints = [...topData?.map((data) => data[countKey]), otherCount];

  // Set the chart options
  const options = {
    legend: {
      show: false,
    },
    labels: labels,
    dataLabels: {
      enabled: false,
    },
    colors: ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468"],
  };

  // Set the chart series data
  const series = dataPoints;

  return (
    <ReactApexChart
      type="donut"
      options={options}
      series={series}
      height={250}
    />
  );
};

export default DoughnutChart;
