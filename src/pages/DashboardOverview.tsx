import React from "react";
import Card from "../components/Card";
import RecentTransactions from "../components/RecentTransactions";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import LineChart from "../components/charts/LineChart";
import QuickTransfer from "../components/QuickTransfer";
import useScreenSize from "../hooks/useScreenSize";

const DashboardOverview: React.FC = () => {
  const currentDevice = useScreenSize();

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <section aria-labelledby="my-cards-section" className="col-span-2">
          <h2 id="my-cards-section" className="text-lg font-semibold mb-4">
            My Cards
          </h2>
          <div
            className="flex flex-row justify-between space-x-6 overflow-x-scroll"
            role="list"
          >
            <div className="w-full" role="listitem">
              <Card
                selected
                balance="5,756"
                cardHolder="Eddy Cusuma"
                validThru="12/22"
                cardNumber="3778 **** **** 1234"
              />
            </div>
            <div className="w-full" role="listitem">
              <Card
                balance="5,756"
                cardHolder="Eddy Cusuma"
                validThru="12/22"
                cardNumber="3778 **** **** 1234"
              />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="recent-transactions-section"
          className="col-span-2 lg:col-span-1 md:col-span-1"
        >
          <h2
            id="recent-transactions-section"
            className="text-lg font-semibold mb-4"
          >
            Recent Transactions
          </h2>
          <div className="w-full">
            <RecentTransactions />
          </div>
        </section>

        <section
          aria-labelledby="weekly-activity-section"
          className="col-span-2 md:col-span-2"
        >
          <h2
            id="weekly-activity-section"
            className="text-lg font-semibold mb-4"
          >
            Weekly Activity
          </h2>
          <div className="bg-white shadow-sm rounded-lg h-bar-chart-container-height p-5">
            <div className="w-full h-full">
              <BarChart device={currentDevice} />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="expense-statistics-section"
          className="col-span-2 lg:col-span-1 md:col-span-1"
        >
          <h2
            id="expense-statistics-section"
            className="text-lg font-semibold mb-4"
          >
            Expense Statistics
          </h2>
          <div className="bg-white shadow-sm rounded-lg flex lg:w-pie-chart-container-width h-pie-chart-container-height">
            <div className="w-full flex justify-center items-center p-5">
              <PieChart />
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-6">
        <section
          aria-labelledby="quick-transfer-section"
          className="md:w-quick-transfer-card-container-width lg:w-quick-transfer-card-container-width"
        >
          <h2
            id="quick-transfer-section"
            className="text-lg font-semibold mb-6"
          >
            Quick Transfer
          </h2>
          <div className="flex w-full items-center justify-between">
            <QuickTransfer />
          </div>
        </section>

        <section
          aria-labelledby="balance-history-section"
          className="lg:w-line-chart-container-width"
        >
          <h2
            id="balance-history-section"
            className="text-lg font-semibold mb-6 mt-6 lg:mt-0 md:mt-0"
          >
            Balance History
          </h2>
          <div className="rounded-3xl bg-white p-5 h-line-chart-container-height">
            <div className="w-full h-full">
              <LineChart />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardOverview;
