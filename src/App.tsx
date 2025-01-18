import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardOverview from "./pages/DashboardOverview";
import DashboardLayout from "./layouts/DashboardLayout";
import Settings from "./pages/settings/Settings";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex w-full h-full overflow-hidden max-w-full">
        {/* Main Content */}
        <div className="flex bg-gray-100 w-full max-h-full">
          <Routes>
            {/* Dashboard Layout with nested routes */}
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<DashboardOverview />} />
              <Route path="settings" element={<Settings />} />
              <Route path="*" element={<DashboardOverview />} />
              {/* Add other routes as needed */}
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
