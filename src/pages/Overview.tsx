import React, { Suspense } from "react";

const BarChart = React.lazy(() => import("../components/charts/BarChart"));
const PieChart = React.lazy(() => import("../components/charts/PieChart"));
const LineChart = React.lazy(() => import("../components/charts/LineChart"));

import {
  QuickTransfer,
  SectionHeading,
  RecentTransactions,
  MyCardsSection,
  Loading,
} from "../components";

import useScreenSize from "../hooks/useScreenSize";

const Overview = () => {
  const currentDevice = useScreenSize();

  return (
    <div className="bg-gray-100 h-full w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 tablet:grid-cols-12 lg:grid-cols-12 gap-6">
        {/* My Cards Section */}
        <section
          aria-labelledby="my-cards-section"
          className="col-span-2 md:col-span-2 tablet:col-span-7 lg:col-span-7"
        >
          <div className="flex justify-between">
            <SectionHeading title="My Cards" />
            <SectionHeading
              title="See All"
              className="text-lg hover:text-black hover:cursor-pointer hover:bg-orange-50"
            />
          </div>
          <MyCardsSection />
        </section>

        {/* Recent Transactions Section */}
        <section
          aria-labelledby="recent-transactions-section"
          className="col-span-2 lg:col-span-5 md:col-span-1 tablet:col-span-5 w-full"
        >
          <SectionHeading title="Recent Transactions" />
          <RecentTransactions />
        </section>

        {/* Weekly Activity Section */}
        <section
          aria-labelledby="weekly-activity-section"
          className="col-span-2 md:col-span-2 tablet:col-span-7 lg:col-span-7"
        >
          <SectionHeading title="Weekly Activity" />
          <div className="bg-white shadow-sm rounded-lg h-bar-chart-container-height p-5">
            <div className="w-full h-full">
              <Suspense fallback={<Loading />}>
                <BarChart device={currentDevice} />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Expense Statistics Section */}
        <section
          aria-labelledby="expense-statistics-section"
          className="col-span-2 lg:col-span-5 md:col-span-2 tablet:col-span-5"
        >
          <SectionHeading title="Expense Statistics" />
          <div className="bg-white shadow-sm rounded-lg flex lg:w-pie-chart-container-width h-pie-chart-container-height">
            <div className="w-full flex justify-center items-center p-5">
              <Suspense fallback={<Loading />}>
                <PieChart />
              </Suspense>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col tablet:flex-row justify-between gap-x-6 mt-6">
        {/* Quick Transfer Section */}
        <section
          aria-labelledby="quick-transfer-section"
          className="tablet:min-w-quick-transfer-card-container-width tablet:w-quick-transfer-card-container-width"
        >
          <SectionHeading title="Quick Transfer" />
          <div className="flex w-full items-center justify-between">
            <QuickTransfer />
          </div>
        </section>

        {/* Balance History Section */}
        <section
          aria-labelledby="balance-history-section"
          className=" w-full"
        >
          <SectionHeading title="Balance History" />
          <div className="rounded-3xl bg-white p-5 card-height tablet:h-line-chart-container-height">
            <div className="w-full h-full">
              <Suspense fallback={<Loading />}>
                <LineChart />
              </Suspense>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Overview;
