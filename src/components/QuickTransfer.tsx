import React from "react";
import AvatarCard from "../components/AvatarCard";
import { user1, user2, user3 } from "../assets/images";
import { ChevronIcon, SendIcon } from "../assets/icons";

const QuickTransfer = () => {
  return (
    <div
      className="bg-white rounded-3xl md:min-w-quick-transfer-card-container-width
      px-quick-transfer-card-x-padding-mobile py-quick-transfer-card-y-padding-mobile 
      lg:px-quick-transfer-card-x-padding lg:py-quick-transfer-card-y-padding "
      role="region"
      aria-labelledby="quick-transfer-title"
    >
      {/* Contacts Quick Transfer section */}
      <div
        className="flex flex-row justify-between items-center"
        role="group"
        aria-labelledby="contacts-section"
      >
        <h2 id="contacts-section" className="sr-only">
          Contacts Quick Transfer
        </h2>
        <AvatarCard
          name="Livia Bator"
          designation="CEO"
          picture={user1}
          selected
        />
        <AvatarCard name="Randy Press" designation="Director" picture={user2} />
        <AvatarCard name="WorkMan" designation="Designer" picture={user3} />
        <div
          className="w-icon-dimensions-mobile h-icon-dimensions-mobile lg:w-icon-dimensions lg:h-icon-dimensions flex items-center justify-center radius-full rounded-full shadow-xl"
          role="button"
          aria-label="More options"
          tabIndex={0}
        >
          <ChevronIcon />
        </div>
      </div>

      {/* Send Money section */}
      <div
        className="flex items-center justify-between mt-quick-transfer-amount-section-top-distance"
        role="group"
        aria-labelledby="send-money-section"
      >
        <h2 id="send-money-section" className="sr-only">
          Send Money
        </h2>
        <label
          htmlFor="amount-input"
          className="text-card-details-title-gray font-inter text-xs md:text-base lg:text-base mr-7"
        >
          Write Amount
        </label>
        <div className="relative flex flex-1">
          {/* Input field */}
          <input
            id="amount-input"
            className="h-12 py-4 pl-quick-transfer-input-field-padding-left-mobile lg:pl-quick-transfer-input-field-padding-left pr-32 md:pr-36 lg:pr-36 text-card-details-title-gray bg-input-field rounded-3xl w-full text-xs lg:text-base"
            aria-label="Enter amount to send"
          />

          {/* Send Button */}
          <div className="absolute right-0 h-full">
            <button
              aria-label="Send money"
              className="bg-black text-white rounded-full px-6 h-full flex items-center justify-center hover:bg-slate-800"
            >
              <div className="mr-2.5 text-sm lg:text-base">Send</div>
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
