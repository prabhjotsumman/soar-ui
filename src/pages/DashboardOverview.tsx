import React from "react";

import DashboardLayout from "../layouts/DashboardLayout";
// import Icon from "../components/Icon";
import Card from "../components/Card";
import RecentTransactions from "../components/RecentTransactions";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import LineChart from "../components/charts/LineChart";
import QuickTransfer from "../components/QuickTransfer";

const DashboardOverview: React.FC = () => {
  return (
    <DashboardLayout>
      <div className=" bg-gray-100 min-h-screen w-full">
        {/* Layout for 6 Boxes (Stacked on Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* My Cards Section */}
          <div className="col-span-2 ">
            <h2 className="text-lg font-semibold mb-4">My Cards</h2>
            <div className="flex flex-row md:flex-row justify-between">
              {/* Card 1 */}
              <Card
                selected
                balance="5,756"
                cardHolder="Eddy Cusuma"
                validThru="12/22"
                cardNumber="3778 **** **** 1234"
              />
              <Card
                balance="5,756"
                cardHolder="Eddy Cusuma"
                validThru="12/22"
                cardNumber="3778 **** **** 1234"
              />
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
            <RecentTransactions />
          </div>

          {/* Weekly Activity */}
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Weekly Activity</h2>
            <div className="bg-white shadow-sm rounded-lg h-bar-chart-container-height p-5">
              {/* Placeholder for Bar Chart */}
              <div className="w-full h-full">
                <BarChart />
              </div>
            </div>
          </div>
          {/* Expense Statistics */}
          <div className="">
            <h2 className="text-lg font-semibold mb-4">Expense Statistics</h2>
            <div className="bg-white shadow-sm rounded-lg flex w-pie-chart-container-width h-pie-chart-container-height">
              {/* Placeholder for Pie Chart */}
              <div className="w-full flex justify-center items-center p-5">
                <PieChart />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          {/* Quick Transfer */}
          <div className="w-quick-transfer-card-container-width">
            <h2 className="text-lg font-semibold mb-6">Quick Transfer</h2>
            <div className="flex w-full items-center justify-between">
              <QuickTransfer />
            </div>
          </div>

          {/* Balance History */}
          <div className="w-full md:w-line-chart-container-width">
            <h2 className="text-lg font-semibold mb-6">Balance History</h2>
            <div className="h-line-chart-container-height rounded-3xl bg-white p-5">
              <div className="w-full h-full">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardOverview;