import React from "react";
import {
  ChipIcon,
  ChipBlackIcon,
} from "../../assets/icons";

import EllipseIcons from './EllipseIcons';

interface CardProps {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  selected?: boolean;
  className?: string;
}

const Card = ({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  selected = false,
  ...props
}: CardProps) => {
  const selectedBg = selected
    ? "bg-gradient-to-r from-black to-gray-800 text-white"
    : "bg-white text-black border border-card-border";

  const textColor = selected ? "text-white" : "text-card-details-title-gray";
  const cardDetailsColor = selected ? "text-card-details-title" : "text-card-details-title-gray";

  return (
    <div
      className={`relative px-5 py-4 md:p-6 tablet:p-6 rounded-3xl 
        min-w-card-width-mobile 
        tablet:min-w-card-width
        w-card-width-mobile h-card-height-mobile 
        sm:w-card-width-mobile sm:h-card-height-mobile 
        md:w-card-width-mobile md:h-card-height-mobile md:min-w-card-width-mobile md:min-h-card-height-mobile
        tablet:w-card-width tablet:h-card-height 
        lg:w-card-width lg:h-card-height 
        ${selectedBg}`}
      role="region"
      aria-label={`Card for ${cardHolder}`}
      tabIndex={0}
      {...props}
    >
      <div className="flex justify-between">
        <div>
          <p className={`font-lato text-xs ${textColor}`}>Balance</p>
          <p className="text-base tablet:text-xl font-lato font-normal">${balance}</p>
        </div>
        <div>
          {selected ? (
            <ChipIcon aria-label="Chip Icon" />
          ) : (
            <ChipBlackIcon aria-label="Chip Black Icon" />
          )}
        </div>
      </div>
      <div className="flex pt-6 md:pt-4 tablet:pt-8">
        <div>
          <p className={`font-lato text-card-details-title-mobile tablet:text-xs font-normal tablet:leading-details-title ${cardDetailsColor}`}>
            CARD HOLDER
          </p>
          <p className="font-lato text-card-details-details-mobile tablet:text-card-details">
            {cardHolder}
          </p>
        </div>
        <div className="ml-16">
          <p className={`font-lato text-card-details-title-mobile tablet:text-xs font-normal tablet:leading-details-title ${cardDetailsColor}`}>
            VALID THRU
          </p>
          <p className="font-lato text-card-details-details-mobile tablet:text-card-details leading-card-details">
            {validThru}
          </p>
        </div>
      </div>
      <div
        className={`absolute left-0 pl-6 bottom-0 py-4 px-0 align-middle flex justify-between 
          h-card-number-height-mobile 
          md:h-card-number-height-mobile 
          tablet:h-card-number-height
           w-full ${
          selected ? "bg-card-gradient" : "border-t border-t-card-border"
        }`}
      >
        <div className="font-lato text-card-details md:text-card-number-mobile tablet:text-card-number font-normal flex items-center">
          {cardNumber}
        </div>
        <div className="mr-4 flex items-center justify-center">
          <EllipseIcons selected={selected} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
