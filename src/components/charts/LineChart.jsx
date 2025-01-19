// components/LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import useStore from "../../hooks/useStore";

function LineChart({ ...props }) {
  const store = useStore(); //useStore();
  const balanceHistoryData = store?.balanceHistory || [
    120, 350, 210, 450, 800, 233, 600, 210, 610,
  ];

  const labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];

  const DATA = {
    labels: labels,
    datasets: [
      {
        data: balanceHistoryData,
        borderColor: "#1814F3",
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(45, 96, 255, 0.25)");
          gradient.addColorStop(1, "rgba(45, 96, 255, 0)");
          return gradient;
        },
        lineTension: 0.44,
      },
    ],
  };

  return (
    <Line
      data={DATA}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: {
              maxTicksLimit: 5, // Show only 5 labels
            },
            grid: {
              borderDash: [4, 10], // Create a dotted effect ([dash length, space length])
              color: "rgba(0, 0, 0, 0.1)", // Color of the grid lines
              drawOnChartArea: true, // Make sure grid lines are drawn inside the chart area
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}
export default LineChart;
