import React from "react";
import { formatCurrency } from "../api/utils";
import { PaypalIcon, DollarIcon, FinanceIcon } from "../assets/icons";

interface TransactionCardProps {
  name: string;
  source?: "card" | "paypal" | "person";
  amount: number;
  date: string;
}

const IconsBg = {
  card: "bg-light-orange",
  paypal: "bg-light-purple",
  person: "bg-light-green",
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

const TransactionCard: React.FC<TransactionCardProps> = ({
  name,
  amount,
  source = "card",
  date,
}) => {
  const formattedAmount = amount < 0 ? `-$${-amount}` : `+$${formatCurrency(amount)}`;
  const amountClass = amount < 0 ? "text-amount-red" : "text-amount-green";

  return (
    <div className="flex flex-row items-center" tabIndex={0} role="button" aria-label={`Transaction card for ${name} on ${date} with amount ${formattedAmount}`}>
      <div
        className={`rounded-full w-icon-width h-icon-height mr-4 flex items-center justify-center ${IconsBg[source]}`}
        aria-hidden="true"
      >
        {getSourceIcon(source)}
      </div>
      <div className="mx-2 grow">
        <p className="font-medium text-sm tablet:text-base" aria-label={`Transaction name: ${name}`}>
          {name}
        </p>
        <p className="text-date-light-blue text-xs tablet:text-card-details font-normal" aria-label={`Transaction date: ${date}`}>
          {date}
        </p>
      </div>
      <div className={`${amountClass} font-medium text-xs tablet:text-base font-inter`} aria-label={`Transaction amount: ${formattedAmount}`}>
        {formattedAmount}
      </div>
    </div>
  );
};

export default React.memo(TransactionCard);
