import React, { useState } from "react";
import Icon from "./Icon";

// SidebarItem component to handle each sidebar item with icon and text
const SidebarItem: React.FC<{
    icon: string;
    label: string;
    link: string;
    className?: string;
  }> = ({ icon, label, link, className }) => (
    <li className={`flex hover:text-sidebar-text-selected ${className} p-2.5`}>
      <Icon name={icon} />
      <a className="ml-4 text-lg font-normal font-inter" href={link}>
        {label}
      </a>
    </li>
  );
  

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50">
      {/* Hamburger Icon */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md focus:outline-none"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? "X" : "O"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-sidebar-height w-sidebar-width bg-white text-sidebar-text shadow-md transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:w-sidebar-width`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold h-navbar-height"><Icon name="logo"/></h1>
          <ul className="space-y-4 text-sidebar-text">
            <SidebarItem
              icon="home"
              label="Dashboard"
              className="text-black"
              link="/dashboard"
            />
            <SidebarItem
              icon="transfer"
              label="Transactions"
              link="/transactions"
            />
            <SidebarItem icon="user" label="Accounts" link="/accounts" />
            <SidebarItem
              icon="investment"
              label="Investments"
              link="/investments"
            />
            <SidebarItem
              icon="credit"
              label="Credit Cards"
              link="/credit-cards"
            />
            <SidebarItem icon="loan" label="Loans" link="/loans" />
            <SidebarItem icon="service" label="Services" link="/services" />
            <SidebarItem
              icon="econometrics"
              label="My Privileges"
              link="/privileges"
            />
            <SidebarItem
              icon="settingsSolid"
              label="Setting"
              link="/settings"
            />
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Sidebar;
