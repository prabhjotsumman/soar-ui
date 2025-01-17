import React from "react";
import Icon from "./Icon";

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
  // className,
  ...props
}: CardProps) => {
  const selectedBg = selected
    ? "bg-gradient-to-r from-black to-gray-800 text-white"
    : "bg-white text-black border border-card-border";

  return (
    <div
      className={`relative p-6 rounded-3xl w-card-width h-card-height ${selectedBg}`}
      {...props}
    >
      <div className=" flex justify-between">
        <div className="">
          <p
            className={`font-lato text-xs ${
              selected ? "text-white" : "text-card-details-title-gray"
            }`}
          >
            Balance
          </p>
          <p className="text-xl font-lato font-normals">${balance}</p>
        </div>
        <div className="">
          <Icon name={selected ? "chip" : "chipBlack"} />
        </div>
      </div>
      <div className="flex pt-6">
        <div>
          <p
            className={`"font-lato text-xs font-normal  leading-details-title ${
              selected
                ? "text-card-details-title"
                : "text-card-details-title-gray"
            }`}
          >
            CARD HOLDER
          </p>
          <p className="font-lato text-card-details">{cardHolder}</p>
        </div>
        <div className="ml-16">
          <p
            className={`"font-lato text-xs font-normal leading-details-title ${
              selected
                ? "text-card-details-title"
                : "text-card-details-title-gray"
            }`}
          >
            VALID THRU
          </p>
          <p className="font-lato text-card-details leading-card-details">
            {validThru}
          </p>
        </div>
      </div>
      <div
        className={`absolute left-0 pl-6 bottom-0 py-4 px-0 align-middle flex justify-between  h-card-number-height w-full ${
          selected ? "bg-card-gradient" : "border-t  border-t-card-border"
        }`}
      >
        <div className="font-lato text-card-number font-normal flex items-center">
          {cardNumber}
        </div>
        <div className="mr-4 flex">
          <Icon name={selected ? "ellipse" : "ellipseGray"} />
          <div className="-ml-4">
            <Icon name={selected ? "ellipse" : "ellipseGray"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
