import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-content">
            <h1 className="footer-title">
              <span className="j-letter">桜</span>{" "}
              <span className="sakura">Sakura</span>
            </h1>
            <p>
              Experience the finest Japanese cuisine in an elegant atmosphere.
              Our commitment to authenticity and quality has made us a beloved
              destination for over three decades.
            </p>
            <div className="footer-social-icons-container">
              <FaFacebook className="social-icon" />
              <FaTwitter className="social-icon" />
              <FaInstagram className="social-icon" />
            </div>
          </div>
          <div className="footer-links">
            <h1>Quick Links</h1>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-Contact">
            <h1>Contact</h1>
            <p>123 Cherry Blossom Street</p>
            <p>Downtown District, City 12345</p>
            <p>(555) 123-4567</p>
          </div>
        </div>
        <p className="prg-bot">
          © 2025 Sakura Japanese Restaurant. All rights reserved.
        </p>
      </footer>
    </>
  );
}
export default Footer;
