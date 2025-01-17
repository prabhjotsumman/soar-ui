import React from "react";

import AvatarCard from "../components/AvatarCard";
import Icon from "../components/Icon";

import user1 from "../assets/users/user1.png";
import user2 from "../assets/users/user2.png";
import user3 from "../assets/users/user3.png";

const QuickTransfer = () => {
  return (
    <div className="bg-white px-quick-transfer-card-x-padding-mobile lg:px-quick-transfer-card-x-padding py-quick-transfer-card-y-padding-mobile lg:py-quick-transfer-card-y-padding rounded-3xl w-full">
      {/* Contacts Quick Transfer section */}
      <div className="flex flex-row justify-between items-center">
        <AvatarCard
          name="Livia Bator"
          designation="CEO"
          picture={user1}
          selected
        />
        <AvatarCard name="Randy Press" designation="Director" picture={user2} />
        <AvatarCard name="WorkMan" designation="Designer" picture={user3} />
        <div className="w-icon-dimensions-mobile h-icon-dimensions-mobile lg:w-icon-dimensions lg:h-icon-dimensions flex items-center justify-center radius-full rounded-full shadow-xl ">
          <Icon name="chevron" />
        </div>
      </div>

      {/* Send Money section */}
      <div className="flex items-center justify-between space-x-7 mt-quick-transfer-amount-section-top-distance">
        <p className="text-card-details-title-gray font-inter text-xs md:text-base lg:text-base">
          Write Amount
        </p>
        <div className="relative flex flex-1">
          {/* Input field */}
          <input
            className="h-12 py-4 pl-quick-transfer-input-field-padding-left-mobile lg:pl-quick-transfer-input-field-padding-left pr-32 md:pr-36 lg:pr-36 text-card-details-title-gray bg-input-field rounded-3xl w-full text-xs lg:text-base"
            aria-label="enter amount to send"
          />

          {/* Send Button */}
          <div className="absolute right-0 h-full">
            <button
              aria-label="Send money"
              className={`bg-black text-white rounded-full px-6 h-full flex items-center justify-center hover:bg-slate-800`}
            >
              <div className="mr-2.5 text-sm lg:text-base">Send</div>
              <Icon name="send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
