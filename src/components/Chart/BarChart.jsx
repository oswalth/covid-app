import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData }) => {
  return (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [
              chartData.confirmed.value,
              chartData.recovered.value,
              chartData.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ` },
      }}
    ></Bar>
  );
};

export default BarChart;
