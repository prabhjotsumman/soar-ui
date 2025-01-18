import React from "react";
import { formatCurrency } from "../utils";

import { PaypalIcon, DollarIcon, FinanceIcon } from "../assets/icons";

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
  const IconsBg = {
    card: 'bg-light-orange',
    paypal: 'bg-light-purple',
    person: 'bg-light-green'
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case "card":
        return <FinanceIcon aria-label="Card Transaction" />;
      case "paypal":
        return <PaypalIcon aria-label="Paypal Transaction" />;
      default:
        return <DollarIcon aria-label="Cash Transaction" />;
    }
  };

  return (
    <div className="flex flex-row items-center" role="listitem" tabIndex={0}>
      <div
        className={`rounded-full w-icon-width h-icon-height mr-4 flex items-center justify-center ${IconsBg[source]}`}
        aria-hidden="true"
      >
        {getSourceIcon(source)}
      </div>
      <div className="mx-2 grow">
        <p className="font-medium text-base" aria-label={`Transaction name: ${name}`}>{name}</p>
        <p className="text-date-light-blue text-card-details font-normal" aria-label={`Transaction date: ${date}`}>
          {date}
        </p>
      </div>
      <div
        className={`${
          amount < 0 ? "text-amount-red" : "text-amount-green"
        } font-medium text-base font-inter`}
        aria-label={`Transaction amount: ${amount < 0 ? "-$" + -1 * amount : "+$" + formatCurrency(amount)}`}
      >
        {amount < 0 ? "-$" + -1 * amount : "+$" + formatCurrency(amount)}
      </div>
    </div>
  );
};

export default TransactionCard;
