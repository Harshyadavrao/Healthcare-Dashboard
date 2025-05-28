import React from "react";
import "./Calendar.css";
import { FaPlus, FaTooth, FaDumbbell } from "react-icons/fa";


const Calendar = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  const timeSlots = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h3>October 2021</h3>
        <div className="profile">
          <div className="avatar">👤</div>
          <FaPlus className="addicon"/>
        </div>
      </div>

      <div className="calendar-grid">
        {days.map((day, i) => (
          <div className="calendar-day" key={i}>
            <span className="day-name">{day}</span>
            <span className="date-num">{dates[i]}</span>
          </div>
        ))}
      </div>

      <div className="calendar-times">
        {timeSlots.map((time, idx) => (
          <div key={idx} className={`time-slot `}>
            {time}
          </div>
        ))}
      </div>

      <div className="appointment-card">
        <h4 style={{display:"inline"}}>Dentist</h4>
        <FaTooth style={{ fontSize: "15px", color: "black", display: "inline", marginLeft:"5px" }}/>
        <p>09:00 - 11:00<br />Dr. Cameron Williamson</p>
      </div>

      <div className="appointment-card secondary">
        <h4 style={{display:"inline"}}>Physiotherapy Appointment</h4>
        <span style={{ fontSize: "15px", marginLeft:"5px" }}>💪</span>
        <p>11:00 - 12:00<br />Dr. Kevin Djones</p>
      </div>
    </div>
  );
};

export default Calendar;