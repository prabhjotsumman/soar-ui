import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex bg-gray-100  w-full max-w-full border-2 border-red-500">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col w-screen max-w-screen">
        {/* Navbar */}
        <Navbar onHamburgerClick={toggleSidebar} sidebarOpen={isOpen}/>

        {/* Page Content */}
        <main className="p-6 overflow-auto">{children}</main>
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
