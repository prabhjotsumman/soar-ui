import React from "react";
import profilePic from "../assets/images/profile-pic.jpeg";
import SearchIcon from "../assets/icons/SearchIcon";
import HamburgerIcon from "../assets/icons/HamburgerIcon";
import NotificationIcon from "../assets/icons/NotificationIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
// import Icon from "./common/Icon";

interface NavbarProps {
  onHamburgerClick: () => void;
  sidebarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onHamburgerClick, sidebarOpen }) => {
  return (
    <header className=" bg-white shadow-md z-40">
      <div className="flex items-center justify-between h-navbar-height px-6">
        {!sidebarOpen && (
          <div
            className="md:hidden lg:hidden xl:hidden z-50 bg-white p-1"
            onClick={onHamburgerClick}
          >
            {/* <Icon name="hamburger" /> */}
            <HamburgerIcon/>
          </div>
        )}
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Page Title */}
          <div className="text-heading-one font-semibold text-gray-800 font-inter text-2xl leading-[2.118rem] underline-from-font decoration-skip-ink-none">
            Overview
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex lg:relative lg:w-search-width">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              {/* <Icon name="magnifying" /> */}
              <SearchIcon/>
            </div>
            <input
              type="text"
              placeholder="Search for something"
              className="pl-12 pr-4 py-2 w-full h-search-height bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Fixed Dimension Circles */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="w-icon-dimensions h-icon-dimensions flex items-center justify-center bg-gray-100 rounded-full text-blue-600 cursor-pointer hover:bg-gray-200">
              {/* <Icon name="settings" /> */}
              <SettingsIcon/>

            </div>
            <div className="w-icon-dimensions h-icon-dimensions flex items-center justify-center bg-gray-100 rounded-full text-blue-600 cursor-pointer hover:bg-gray-200">
              <i className="fas fa-bell"></i>
              {/* <Icon name="notification" /> */}
              <NotificationIcon/>
            </div>
          </div>

          {/* Profile Image */}
          <div>
            <img
              src={profilePic}
              alt="Profile"
              className="w-profile-width-mobile h-profile-width-mobile lg:w-profile-width lg:h-profile-height rounded-full object-cover cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden md:hidden lg:relative lg:w-search-width px-6 pb-5">
        <div className="relative flex flex-1">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            {/* <Icon name="magnifying" /> */}
            <SearchIcon/>
          </div>
          <input
            type="text"
            placeholder="Search for something"
            className="pl-12 pr-4 py-2 w-full h-search-height bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
