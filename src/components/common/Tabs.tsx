import React from "react";
import { useState } from "react";

interface TabsProps {
  tabs: React.ReactNode[];
  content: React.ReactNode[];
}
const Tabs = ({ tabs, content }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      {/* Tab headers */}
      <div className="space-x-0 md:space-x-10 lg:space-x-10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 text-center py-2 ${
              activeTab === index
                ? "border-b-4 border-charcoal text-charcoal font-medium"
                : "text-gray-500 hover:text-charcoal"
            }`}
          >
            <p className="text-tabs-heading-mobile lg:text-base md:text-base px-4">{tab}</p>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="lg:m-settings-tab-padding mt-tabs-top-padding mr-0">
        <div className="text-gray-700 ">{content[activeTab]}</div>
      </div>
    </div>
  );
};

export default Tabs;
