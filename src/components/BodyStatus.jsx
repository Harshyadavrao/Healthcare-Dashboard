import React from "react";
import { FaTooth, FaLungs, FaBone, FaBell } from "react-icons/fa";
import "./BodyStatus.css";
import image from './image.png'
import HealthStatusCard from "./HealthStatusCard";

const BodyStatus = () => (
  <div className="bodystatus">
    <input type="text" placeholder="      search" className="serach"/>
    <FaBell className="notification"/>
    <h2 className="title">Dashboard</h2>
    <div className="content">
      <img src={image}/>
      <div className="status-list">
        <HealthStatusCard/>
      </div>
    </div>
  </div>
);

export default BodyStatus;