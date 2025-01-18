import React from "react";
import ChipIcon from "../assets/icons/ChipIcon";
import ChipBlackIcon from "../assets/icons/ChipBlackIcon";
import EllipseIcon from "../assets/icons/EllipseIcon";
import EllipseGrayIcon from "../assets/icons/EllipseGrayIcon";

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
      className={`relative px-5 py-4 md:p-6 lg:p-6 rounded-3xl w-card-width-mobile h-card-height-mobile lg:w-card-width lg:h-card-height ${selectedBg}`}
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
          <p className="text-base lg:text-xl font-lato font-normals">
            ${balance}
          </p>
        </div>
        <div className="">{selected ? <ChipIcon /> : <ChipBlackIcon />}</div>
      </div>
      <div className="flex pt-6 md:pt-8 lg:pt-8">
        <div>
          <p
            className={`font-lato text-card-details-title-mobile md:text-xs lg:text-xs font-normal lg:leading-details-title ${
              selected
                ? "text-card-details-title"
                : "text-card-details-title-gray"
            }`}
          >
            CARD HOLDER
          </p>
          <p className="font-lato text-card-details-details-mobile lg:text-card-details">
            {cardHolder}
          </p>
        </div>
        <div className="ml-16">
          <p
            className={`"font-lato text-card-details-title-mobile md:text-xs lg:text-xs font-normal lg:leading-details-title ${
              selected
                ? "text-card-details-title"
                : "text-card-details-title-gray"
            }`}
          >
            VALID THRU
          </p>
          <p className="font-lato text-card-details-details-mobile lg:text-card-details leading-card-details">
            {validThru}
          </p>
        </div>
      </div>
      <div
        className={`absolute left-0 pl-6 bottom-0 py-4 px-0 align-middle flex justify-between  h-card-number-height-mobile lg:h-card-number-height w-full ${
          selected ? "bg-card-gradient" : "border-t  border-t-card-border"
        }`}
      >
        <div className="font-lato text-card-details md:text-card-number lg:text-card-number font-normal flex items-center">
          {cardNumber}
        </div>
        <div className="mr-4 flex items-center justify-center">
          <div className="w-card-ellipse-mobile lg:w-full">
            {selected ? <EllipseIcon /> : <EllipseGrayIcon />}
          </div>
          <div className="-ml-7 lg:-ml-4 w-card-ellipse-mobile lg:w-full">
            {selected ? <EllipseIcon /> : <EllipseGrayIcon />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
