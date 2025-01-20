import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/Overview";
import Settings from "./pages/settings/Settings";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex w-full min-h-full overflow-hidden max-w-full">
        
        {/* Main Content */}
        <div className="flex bg-gray-100 w-full max-h-full">
          <Routes>
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<Overview />} />
              <Route path="settings" element={<Settings />} />
              <Route path="*" element={<Overview />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
