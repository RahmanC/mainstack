import React from "react";
import ReactApexChart from "react-apexcharts";

interface DoughnutChartProps {
  data: {
    country: string;
    count: number;
    percent: number;
  }[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data }) => {
  // Only show the first 4 countries data in the chart
  const topLocations = data.slice(0, 4);

  // Calculate the total count of all countries
  const totalCount = data.reduce((acc, curr) => acc + curr.count, 0);

  // Calculate the count of "Others" countries
  const otherCount =
    totalCount - topLocations.reduce((acc, curr) => acc + curr.count, 0);

  // Create the labels and data arrays for the chart
  const labels = topLocations.map((location) => location.country);
  labels.push("Others");
  const dataPoints = [
    ...topLocations.map((location) => location.count),
    otherCount,
  ];

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
      type='donut'
      options={options}
      series={series}
      height={350}
    />
  );
};

export default DoughnutChart;
