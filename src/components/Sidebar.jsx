import React from "react";
import { FaComments, FaCog } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => (
  <div className="sidebar">
    <div className="heading">
      <h1 className="logo" id="health">Health</h1>
      <h1 className="logo" id="care">care.</h1>
    </div>
    <ul className="nav">
      <li className="option">Dashboard</li>
      <li className="option">History</li>
      <li className="option">Calendar</li>
      <li className="option"> Appointments</li>
      <li className="option">Statistics</li>
    </ul>
    <div className="extras">
      <div className="icon-text"><FaComments /> Chat</div>
      <div className="icon-text"><FaCog /> Support</div>
    </div>
    <div className="footer">Setting</div>
  </div>
);

export default Sidebar;