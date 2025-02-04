import React from "react";
import "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import useScreenSize from "../../hooks/useScreenSize";

import useStore from "../../hooks/useStore";

const PieChart = () => {
  const device = useScreenSize();
  const store = useStore();
  const expensesData = store?.expenses || [25, 15, 30, 30];
  const labels = ["Bill Expense", "Others", "Investment", "Entertainment"];

  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: ["#FC7900", "#232323", "#396AFF", "#343C6A"],
        data: expensesData,
        borderWidth: 5,
        spacing: 3,
        color: "white",
      },
    ],
  };

  const chartOptions = {
    plugins: {
      responsive: true,
      maintainAspectRatio: false,
      datalabels: {
        anchor: "center", 
        align: "center",
        clip: true,
        clamp: true,
        color: "white",
        font: {
          size: device === "desktop" ? 15 : 12,
        },
        textAlign: "center",
        formatter: function (value, context) {
          return value + "% \n" + context.chart.data.labels[context.dataIndex];
        },
      },
      legend: {
        display: false,
      },
    },
    hover: {
      mode: "nearest", // Highlight the nearest segment when hovering
      onHover: function (event, chartElement) {
        const chart = this; 
        if (chartElement && chartElement.length > 0) {
          const index = chartElement[0].index; // Get the index of the hovered section
          chart.data.datasets[0].data = adjustedExpensesData.map(
            (value, idx) => {
              return idx === index ? value * 1.5 : value; // Scale the hovered section
            }
          );
          chart.update();
        }
      },
    },
  };
  return <Pie data={data} options={chartOptions} plugins={[ChartDataLabels]} />;
};
export default React.memo(PieChart);
