import React from "react";
import { useLocation } from "react-router-dom";

import SidebarItem from "./SidebarItem";
import { LogoIcon } from "../../assets/icons";
import { MENU_ITEMS } from './constants';

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
        } lg:translate-x-0 lg:relative lg:w-sidebar-width overflow-y-auto`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold h-navbar-height mt-2">
            <LogoIcon />
          </h1>
          <ul className="space-y-4 text-sidebar-text">
            {MENU_ITEMS.map(({ label, link, Icon }) => (
              <SidebarItem
                key={label}
                label={label}
                link={link}
                Icon={Icon}
                isActive={location.pathname === link}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
