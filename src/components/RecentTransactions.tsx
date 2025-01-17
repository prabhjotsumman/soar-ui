import React from "react";
import TransactionCard from "./TransactionCard";
// import Icon from "./Icon";
// import { ICONS } from "../../assets/icons/icons";
// import useStore from "../hooks/useStore";

const RecentTransactions = () => {
  // const store = useStore();
  const transactions = [
    { id: 1, amount: -850, source: "card", date: "28 January 2021" },
    { id: 2, amount: 2500, source: "person", date: "28 January 2021" },
    { id: 3, amount: 5400, source: "card", date: "28 January 2021" },
  ];

  return (
    <div className="bg-white rounded-3xl w-card-width h-card-height p-6 flex flex-col justify-between ">
      {transactions &&
        transactions.map((transaction) => {
          return (
            <TransactionCard
              key={transaction.id}
              name={(() => {
                if (transaction.amount < 0) {
                  return `Debited by ${transaction.source}`;
                } else {
                  return `Credited by ${transaction.source}`;
                }
              })()}
              source={transaction.source}
              amount={transaction.amount}
              date={transaction.date}
            />
          );
        })}
    </div>
  );
};

export default RecentTransactions;
