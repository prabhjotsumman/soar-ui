import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar";
import { ROUTE_TITLE } from "./constants";

const DashboardLayout: React.FC<{ children?: React.ReactNode }> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex bg-gray-100 w-full">
      <Sidebar isOpen={isOpen} />
      {/* Main Content */}
      <div className="flex flex-1 flex-col w-screen max-w-screen">

        {/* Navbar */}
        <Navbar
          onHamburgerClick={toggleSidebar}
          sidebarOpen={isOpen}
          title={ROUTE_TITLE[location?.pathname]}
        />

        {/* Page Content */}
        <main className="p-6 overflow-auto">
          <Outlet />
        </main>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden ease-in-out duration-300"
            onClick={toggleSidebar}
          />
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
