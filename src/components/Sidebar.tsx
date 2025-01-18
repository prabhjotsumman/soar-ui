import React from "react";
import Icon from "./Icon";
import { Link, useLocation } from "react-router-dom";
import { SIDEBAR_ICONS, Icons } from "../assets/SidebarIcons";

// SidebarItem component to handle each sidebar item with icon and text
const SidebarItem: React.FC<{
  label: string;
  link?: string;
  className?: string;
  isActive?: boolean;
  IconComponent: React.ElementType;
}> = ({ label, link = "/", className, isActive = false, IconComponent }) => {
  return (
    <li
      className={`flex hover:text-sidebar-text-selected ${className} p-2 md:p-2.5 lg:p-2.5`}
    >
      <IconComponent
        color={isActive ? `black` : undefined}
        className="hover:text-black"
      />
      <Link
        className={`ml-4 text-sm lg:text-lg font-normal font-inter ${
          isActive ? "text-black font-medium" : ""
        }`}
        to={link}
      >
        {label}
      </Link>
    </li>
  );
};

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();

  return (
    <div className="relative z-50">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-sidebar-height w-sidebar-width bg-white text-sidebar-text shadow-md transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:w-sidebar-width overflow-x-scroll`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold h-navbar-height">
            <Icon name="logo" />
          </h1>
          <ul className="space-y-4 text-sidebar-text">
            <SidebarItem
              label="Dashboard"
              isActive={location.pathname === "/"}
              IconComponent={Icons[SIDEBAR_ICONS.Home]}
            />
            <SidebarItem
              label="Transactions"
              IconComponent={Icons[SIDEBAR_ICONS.Transfer]}
            />
            <SidebarItem
              label="Accounts"
              IconComponent={Icons[SIDEBAR_ICONS.User]}
            />
            <SidebarItem
              label="Investments"
              IconComponent={Icons[SIDEBAR_ICONS.EconomicInvestment]}
            />
            <SidebarItem
              label="Credit Cards"
              IconComponent={Icons[SIDEBAR_ICONS.CreditCard]}
            />
            <SidebarItem
              label="Loans"
              link="/loans"
              IconComponent={Icons[SIDEBAR_ICONS.Loan]}
            />
            <SidebarItem
              label="Services"
              IconComponent={Icons[SIDEBAR_ICONS.Service]}
            />
            <SidebarItem
              label="My Privileges"
              IconComponent={Icons[SIDEBAR_ICONS.Econometrics]}
            />
            <SidebarItem
              label="Setting"
              link="/settings"
              isActive={location.pathname === "/settings"}
              IconComponent={Icons[SIDEBAR_ICONS.SettingsSolid]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
