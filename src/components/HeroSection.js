import "./HeroSection.css";
import ReservationModal from "./ReservationModal";
import React, { useState } from "react";

function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="Home" className="hero-container">
        <div className="overlay"></div>

        <h1 className="hero-title">
          <span className="japanese-letter">桜</span>{" "}
          <span className="sakura-text">Sakura</span>
        </h1>
        <h3 className="hero-sub-title">Authentic Japanese Cuisine</h3>
        <p className="hero-pr">
          Experience the art of Japanese dining with our carefully crafted
          dishes,
          <br /> made with the finest ingredients and traditional techniques.
        </p>
        <div className="hero-button-container">
          <button className="hero-manu-btn">View Menu</button>
          <button
            className="hero-Reservation-btn"
            onClick={() => setShowModal(true)} // Open modal here
          >
            Make Reservation
          </button>{" "}
        </div>
      </section>
      <ReservationModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default HeroSection;
