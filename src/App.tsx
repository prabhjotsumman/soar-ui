import DashboardOverview from "./pages/DashboardOverview";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex w-full overflow-hidden max-w-full">

        {/* Main Content */}
        <div className="flex bg-gray-100 w-full">
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
