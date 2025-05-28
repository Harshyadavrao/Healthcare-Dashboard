// components/HealthCards.js
import React from "react";
import { FaLungs, FaTooth, FaBone } from "react-icons/fa";
import "./HealthStatusCard.css";

const HealthStatusCards = () => {
  const cards = [
    {
      icon: <FaLungs />,
      title: "Lungs",
      date: "26 Oct 2021",
      color: "#fca5a5",
    },
    {
      icon: <FaTooth />,
      title: "Teeth",
      date: "26 Oct 2021",
      color: "#93c5fd",
    },
    {
      icon: <FaBone />,
      title: "Bone",
      date: "26 Oct 2021",
      color: "#fdba74",
    },
  ];

  return (
    <div className="health-cards">
      {cards.map((card, idx) => (
        <div className="card" key={idx}>
          <div className="icon" style={{ backgroundColor: card.color }}>
            {card.icon}
          </div>
          <div className="details">
            <h4>{card.title}</h4>
            <p>Date: {card.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
