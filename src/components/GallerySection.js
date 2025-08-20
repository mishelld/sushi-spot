import "./GallerySection.css";
import foodImage1 from "../assets/food1.jpg";
import foodImage2 from "../assets/food2.jpg";

import foodImage3 from "../assets/food3.jpg";
import foodImage4 from "../assets/food4.jpg";
import foodImage5 from "../assets/food5.jpg";
import foodImage6 from "../assets/food6.jpg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function GallerySection() {
  return (
    <>
      <section id="Gallery" className="Gallery-container">
        <div className="Gallery-top">
          <h1>Gallery</h1>
          <p>
            A visual journey through our culinary artistry and dining experience
          </p>
        </div>
        <div className="image-grid">
          <img src={foodImage1} alt="img2" />
          <img src={foodImage2} alt="img3" />
          <img src={foodImage3} alt="img4" />
          <img src={foodImage4} alt="img5" />
          <img src={foodImage5} alt="img6" />
          <img src={foodImage6} alt="img6" />
        </div>
        <div className="Gallery-bot">
          <p> Follow us on social media for more delicious updates</p>
          <div className="social-icons-container">
            <FaFacebook className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
          </div>
        </div>
      </section>
    </>
  );
}
export default GallerySection;
