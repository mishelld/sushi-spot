import "./StorySection.css";
import chefImage from "../assets/chef.jpg";

function StorySection() {
  return (
    <>
      <section id="About" className="story-container">
        <div className="story-left-side">
          <h1 className="story-title">Our Story</h1>
          <p className="story-prg">
            {" "}
            Founded in 1985, Sakura has been serving authentic Japanese cuisine
            with a commitment to traditional flavors and modern presentation.
            Our master chefs bring decades of experience from Tokyo's finest
            establishments. <br /> <br />
            We believe in the Japanese philosophy of "omotenashi" - wholehearted
            service that anticipates your needs. Every dish is prepared with the
            utmost care and attention to detail, using only the freshest
            ingredients.
          </p>
          <div className="story-info">
            <div className="info-box">
              <h1>38+</h1>
              <h3>Years of Excellence</h3>
            </div>
            <div className="info-box">
              {" "}
              <h1>5★</h1>
              <h3>Customer Rating</h3>
            </div>
          </div>
        </div>
        <div className="story-right-side">
          <img src={chefImage} alt="chef" />
          <div className="name-box">
            <h1>Master Chef</h1>
            <h3>Hiroshi Tanaka</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default StorySection;
