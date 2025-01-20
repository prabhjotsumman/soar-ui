import TransactionCard from "./TransactionCard";
import useStore from "../hooks/useStore";
import React from "react";

const RecentTransactions = () => {
  const store = useStore();
  const transactions = store?.transactions || [];

  return (
    <div className="bg-white rounded-3xl h-card-height min-w-container p-recent-transaction-card-padding-mobile tablet:p-6 space-y-2.5 flex flex-col justify-between overflow-auto">
      {transactions?.length === undefined && <div className="flex items-center justify-center p-4 font-medium">Loading...</div>}
      {transactions?.length === 0 && <div className="flex items-center justify-center p-4 font-medium">No Recent Transactions.</div>}
      {transactions &&
        transactions.map((transaction) => {
          return (
            <TransactionCard
              key={transaction?.id + transaction?.amount}
              name={(() => {
                if (transaction?.amount < 0) {
                  return `Debited by ${transaction?.source}`;
                } else {
                  return `Credited by ${transaction?.source}`;
                }
              })()}
              source={transaction?.source as "card" | "paypal" | "person" | undefined}
              amount={transaction?.amount}
              date={transaction?.date}
            />
          );
        })}
    </div>
  );
};

export default React.memo(RecentTransactions);
