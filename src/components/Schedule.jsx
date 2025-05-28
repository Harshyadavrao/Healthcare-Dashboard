import React from "react";
import "./Schedule.css";

const Schedule = () => (
  <div className="schedule">
    <h3 className="schedule-title">The Upcoming Schedule</h3>
    <div className="schedule-list">
      <div className="schedule-item dentist">Dentist - 9:00 AM</div>
      <div className="schedule-item physio">Physiotherapy - 11:00 AM</div>
      <div className="schedule-item cardio">Cardiologist - 12:00 AM</div>
      <div className="schedule-item neuro">Neurologist - 4:00 PM</div>
    </div>
  </div>
);

export default Schedule;