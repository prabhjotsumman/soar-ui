import React from "react";
// import { ICONS } from "../../assets/icons/icons";
import { formatCurrency } from "../utils";
import Icon from "./Icon";
// import Icon from "../Icon/Icon";

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
  // const IconBg = {
  //   [ICONS.CARD]: "bg-amber-light",
  //   [ICONS.PAYPAL]: "bg-purple-light",
  //   [ICONS.DOLLAR]: "bg-green-light",
  // };

  return (
    <div className="flex flex-row  items-center  ">
      <div className="rounded-full w-icon-width h-icon-height bg-orange-50 mr-4 flex items-center justify-center">
        {source === "card" ? (
          <Icon name="finance" />
        ) : source === "person" ? (
          <Icon name="dollar" />
        ) : (
          <Icon name="dollar" />
        )}
      </div>
      <div className="mx-2 grow">
        <p className="font-medium text-base">{name}</p>
        <p className="text-date-light-blue text-card-details font-normal">{date}</p>
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
