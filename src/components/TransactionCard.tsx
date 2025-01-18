import React from "react";
import { formatCurrency } from "../utils";
import FinanceIcon from "../assets/icons/FinanceIcon";
import DollarIcon from "../assets/icons/DollarIcon";

interface TransactionCardProps {
  name: string;
  source: string;
  amount: number;
  date: string;
}

const TransactionCard = ({
  name,
  amount,
  source,
  date,
}: TransactionCardProps) => {
  return (
    <div className="flex flex-row  items-center  ">
      <div className="rounded-full w-icon-width h-icon-height bg-orange-50 mr-4 flex items-center justify-center">
        {source === "card" ? (
          <FinanceIcon />
        ) : source === "person" ? (
          <DollarIcon />
        ) : (
          <DollarIcon />
        )}
      </div>
      <div className="mx-2 grow">
        <p className="font-medium text-base">{name}</p>
        <p className="text-date-light-blue text-card-details font-normal">
          {date}
        </p>
      </div>
      <div
        className={`${
          amount < 0 ? "text-amount-red" : "text-amount-green"
        } font-medium text-base font-inter`}
      >
        {amount < 0 ? "-$" + -1 * amount : "+$" + formatCurrency(amount)}
      </div>
    </div>
  );
};

export default TransactionCard;
