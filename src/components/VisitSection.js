import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./VisitSection.css";
import restaurant from "../assets/restaurant.jpg";

function VisitSection() {
  return (
    <>
      <section id="Contact" className="visit-container">
        <div className="visit-top">
          <h1 className="visit-title">Visit Us</h1>
          <p>
            Experience authentic Japanese cuisine in our elegant dining space
          </p>
        </div>

        <div className="visit-inner-container">
          <div className="visit-left-side">
            <h1>Contact Information</h1>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="icon" />
                <div className="contact-text">
                  <span>Address</span>
                  <span>
                    123 Cherry Blossom Street
                    <br /> Downtown District, City 12345
                  </span>
                </div>
              </div>
              <div className="contact-item">
                <FaPhoneAlt className="icon" />
                <div className="contact-text">
                  <span>Phone</span>
                  <span>(555) 123-4567</span>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="icon" />
                <div className="contact-text">
                  <span>Email</span>
                  <span>info@sakurarestaurant.com</span>
                </div>
              </div>
            </div>
            <h1>Hours</h1>
            <div className="hours">
              <div className="day-hours">
                <strong>Monday - Thursday</strong>
                <span>5:00 PM - 10:00 PM</span>
              </div>
              <div className="day-hours">
                <strong>Friday - Saturday</strong>
                <span>5:00 PM - 11:00 PM</span>
              </div>
              <div className="day-hours">
                <strong>Sunday</strong>
                <span>4:00 PM - 9:00 PM</span>
              </div>{" "}
            </div>
            <div className="visit-Reservation-box">
              <h1>Reservations Recommended</h1>
              <p>
                Call us or book online to secure your table. Walk-ins welcome
                based on availability.
              </p>
              <button className="visit-btn">Book Now</button>
            </div>
          </div>
          <div class="visit-right-side">
            <div className="visit-img-container">
              <div className="img-wrapper">
                <FaMapMarkerAlt className="icon-img" />
                <h1 className="visit-title-img">Find Us Here</h1>
              </div>

              <img src={restaurant} alt="img2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VisitSection;
