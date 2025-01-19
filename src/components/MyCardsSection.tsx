import React from "react";
import useStore from "../hooks/useStore";
import Card from "./Card";

const MyCardsSection = ({ ...props }) => {
  const store = useStore();
  const allCardsData = store?.allCards || [];
  return (
    <div {...props}>
      <div className="flex w-full space-x-7 overflow-auto pb-4">
        {allCardsData &&
          allCardsData?.map((card, index) => {
            return (
              <Card
                key={card.maskedCardNumber}
                balance={`${card.balance}`}
                cardHolder={card.cardHolderName}
                validThru={card.validThru}
                cardNumber={card.maskedCardNumber}
                selected={index === 0}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MyCardsSection;
