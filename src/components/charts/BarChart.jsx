import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import useStore from '../../hooks/useStore';

const BarChart = ({device}) => {
  const store = useStore();
  const weeklyActivityData = store.weeklyActivity;
  const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  const withDrawData = weeklyActivityData?.withdraw || [
    450, 300, 290, 460, 120, 390, 350,
  ];
  const depositedData = weeklyActivityData?.deposit || [
    250, 120, 230, 390, 210, 230, 320,
  ];

  const barThickness = device === 'desktop' ? 15 : 7;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Withdraw",
        backgroundColor: "#232323",
        data: withDrawData,
        borderRadius: 50,
        borderSkipped: false,
        barThickness,
      },
      {
        label: "Deposit",
        backgroundColor: "#396AFF",
        data: depositedData,
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
        stacked: false, // Ensure bars are side-by-side
        grid: {
          display: false,
        },
        categoryPercentage: 0.5, // Adjust spacing between groups of bars
        barPercentage: 0.9, // Adjust spacing between bars within the group
      },
      y: {
        ticks: {
          maxTicksLimit: 6, // Limit the number of ticks on the Y-axis
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
    },
  };

  return <Bar data={data} options={chartOptions} />;
};

export default BarChart;
