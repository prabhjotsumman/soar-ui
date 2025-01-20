import { useState } from "react";
import AvatarCard from "../components/AvatarCard";
import { ChevronIcon, SendIcon } from "../assets/icons";
import { user1, user2, user3 } from "../assets/images";

const QuickTransfer = () => {
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSendClick = () => {
    // Show feedback message
    setFeedback("Money sent!");

    // Hide feedback after 3 seconds
    setTimeout(() => {
      setFeedback(null);
    }, 3000);
  };

  return (
    <div
      className="bg-white rounded-3xl 
       w-full
      md:min-w-quick-transfer-card-container-width
      px-quick-transfer-card-x-padding-mobile py-quick-transfer-card-y-padding-mobile 
      tablet:px-quick-transfer-card-x-padding tablet:py-quick-transfer-card-y-padding "
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
          className="ml-0"
        />
        <AvatarCard name="Randy Press" designation="Director" picture={user2} />
        <AvatarCard name="WorkMan" designation="Designer" picture={user3} />
        <div
          className="w-icon-dimensions-mobile h-icon-dimensions-mobile tablet:w-icon-dimensions tablet:h-icon-dimensions flex items-center justify-center radius-full rounded-full shadow-xl"
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
          className="text-card-details-title-gray font-inter text-xs md:text-base tablet:text-base mr-7"
        >
          Write Amount
        </label>
        <div className="relative flex flex-1">
          {/* Input field */}
          <input
            id="amount-input"
            className="h-12 py-4 pl-quick-transfer-input-field-padding-left-mobile tablet:pl-quick-transfer-input-field-padding-left pr-32 md:pr-36 tablet:pr-36 text-card-details-title-gray bg-input-field rounded-3xl w-full text-xs tablet:text-base"
            aria-label="Enter amount to send"
          />

          {/* Send Button */}
          <div className="relative">
            {/* Send Button */}
            <div className="absolute right-0 h-full">
              <button
                aria-label="Send money"
                onClick={handleSendClick}
                className={` text-white rounded-full px-6 h-full flex items-center justify-center hover:bg-slate-800 ${
                  feedback
                    ? "bg-green-500 cursor-not-allowed hover:bg-green-500 animate-pulse"
                    : "bg-black"
                }`}
              >
                <div className="mr-2.5 text-sm tablet:text-base">
                  {feedback ? "Sent!" : "Send"}
                </div>
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
