import DashboardOverview from "./pages/DashboardOverview";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex w-full max-w-screen ">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 bg-gray-100">
          <Routes>
            <Route path="/" element={<DashboardOverview />} />
            {/* <Route path="/settings" element={<Settings />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
