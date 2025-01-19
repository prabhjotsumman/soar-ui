import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import useStore from '../../hooks/useStore';

const BarChart = ({device}) => {
  const store = useStore();
  const weeklyActivityData = store?.weeklyActivity;
  const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  const withDrawData = weeklyActivityData?.withdraw || [
    450, 300, 290, 460, 120, 390, 350,
  ];
  const depositedData = weeklyActivityData?.deposit || [
    250, 120, 230, 390, 210, 230, 320,
  ];

  const memoizedWithDrawData = React.useMemo(() => withDrawData, [withDrawData]);
  const memoizedDepositedData = React.useMemo(() => depositedData, [depositedData]);

  const barThickness = device === 'desktop' ? 15 : 7;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Withdraw",
        backgroundColor: "#232323",
        data: memoizedWithDrawData,
        borderRadius: 50,
        borderSkipped: false,
        barThickness,
      },
      {
        label: "Deposit",
        backgroundColor: "#396AFF",
        data: memoizedDepositedData,
        borderRadius: 50,
        borderSkipped: false,
        barThickness,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          padding: 10,
          usePointStyle: true,
          font: {
            size: 15,
          },
        },
      },
    },
    scales: {
      x: {
        stacked: false,
        grid: {
          display: false,
        },
        categoryPercentage: 0.5,
        barPercentage: 0.9,
      },
      y: {
        ticks: {
          maxTicksLimit: 6,
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
    },
  };

  return <Bar data={data} options={chartOptions} />;
};

export default React.memo(BarChart);
