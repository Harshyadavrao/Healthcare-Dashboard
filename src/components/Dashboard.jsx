import React from "react";
import Sidebar from "./Sidebar";
import BodyStatus from "./BodyStatus";
import ActivityChart from "./ActivityFeed";
import Schedule from "./Schedule";
import Calendar from "./Calendar";
import "./Dashboard.css";

const Dashboard = () => (
  <div className="dashboard">
    <Sidebar />
    <div className="main-content">
      <div className="left-panel">
        <BodyStatus />
        <ActivityChart/>
      </div>
      <div className="right-panel">
        <div className="calendar-container">
          <Calendar mode="single" selected={new Date()} className="calendar-box" />
          <Schedule />
        </div>
        
      </div>
    </div>
  </div>
);

export default Dashboard;