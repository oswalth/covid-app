import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ chartData }) => {
  return (
    <Line
      data={{
        labels: chartData.map((day) => day.reportDate),
        datasets: [
          {
            data: chartData.map((day) => day.confirmed.total),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: chartData.map((day) => day.deaths.total),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, .5)",
            fill: true,
          },
        ],
      }}
    ></Line>
  );
};

export default LineChart;
