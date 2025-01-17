import React from "react";
import profilePic from "../assets/images/profile-pic.jpeg";
import Icon from "./Icon";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between h-navbar-height px-6 max-w-container-fixed mx-auto">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Page Title */}
          <div className="text-heading-one font-semibold text-gray-800 font-inter text-2xl leading-[2.118rem] underline-from-font decoration-skip-ink-none">
            Overview
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <div className="relative w-search-width">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Icon name="magnifying" />
            </div>
            <input
              type="text"
              placeholder="Search for something"
              className="pl-12 pr-4 py-2 w-full h-search-height bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Fixed Dimension Circles */}
          <div className="flex items-center space-x-4">
            <div className="w-icon-dimensions h-icon-dimensions flex items-center justify-center bg-gray-100 rounded-full text-blue-600 cursor-pointer hover:bg-gray-200">
              <Icon name="settings" />
            </div>
            <div className="w-icon-dimensions h-icon-dimensions flex items-center justify-center bg-gray-100 rounded-full text-blue-600 cursor-pointer hover:bg-gray-200">
              <i className="fas fa-bell"></i>
              <Icon name="notification" />
            </div>
          </div>

          {/* Profile Image */}
          <div>
            <img
              src={profilePic}
              alt="Profile"
              className="w-profile-width h-profile-height rounded-full object-cover cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
