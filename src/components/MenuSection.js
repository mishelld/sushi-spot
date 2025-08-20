import "./MenuSection.css";

function MenuSection() {
  const sushiMenu = [
    {
      category: "Sushi & Sashimi",
      items: [
        {
          name: "Omakase Selection",
          price: 85,
          description: "Chef's choice of 12 pieces",
        },
        {
          name: "Tuna Sashimi",
          price: 28,
          description: "Fresh bluefin tuna, 6 pieces",
        },
        {
          name: "Salmon Nigiri",
          price: 18,
          description: "Premium Atlantic salmon, 4 pieces",
        },
        {
          name: "Dragon Roll",
          price: 22,
          description: "Eel, cucumber, avocado, tobiko",
        },
      ],
    },
  ];
  const hotDishesMenu = [
    {
      category: "Hot Dishes",
      items: [
        {
          name: "Wagyu Beef Teriyaki",
          price: 65,
          description: "A5 wagyu with house teriyaki sauce",
        },
        {
          name: "Miso Black Cod",
          price: 38,
          description: "Marinated in sweet miso for 48 hours",
        },
        {
          name: "Chicken Katsu",
          price: 24,
          description: "Panko-crusted with tonkatsu sauce",
        },
        {
          name: "Tempura Platter",
          price: 26,
          description: "Assorted vegetables and prawns",
        },
      ],
    },
  ];

  const ramenAndNoodlesMenu = [
    {
      category: "Ramen & Noodles",
      items: [
        {
          name: "Tonkotsu Ramen",
          price: 18,
          description: "Rich pork bone broth, chashu, egg",
        },
        {
          name: "Miso Ramen",
          price: 16,
          description: "Fermented soybean broth, corn, scallions",
        },
        {
          name: "Yakisoba",
          price: 14,
          description: "Stir-fried wheat noodles with vegetables",
        },
        {
          name: "Udon Soup",
          price: 15,
          description: "Thick wheat noodles in dashi broth",
        },
      ],
    },
  ];

  return (
    <>
      <section id="Menu" className="menu-container">
        <div className="menu-top">
          <h1>Our Menu</h1>
          <p>
            Discover our carefully curated selection of traditional and
            contemporary Japanese dishes
          </p>
        </div>
        <div className="menu-items">
          <div className="menu-item">
            {sushiMenu.map((section, i) => (
              <div key={i}>
                <h1 className="menu-cat-title">{section.category}</h1>

                {section.items.map((dish, j) => (
                  <div className="dish" key={j}>
                    <div>
                      <h1>{dish.name}</h1>
                      <p>{dish.description}</p>
                    </div>
                    <div className="price">
                      <h3>${dish.price}</h3>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="menu-item">
            {hotDishesMenu.map((section, i) => (
              <div key={i}>
                <h1 className="menu-cat-title">{section.category}</h1>

                {section.items.map((dish, j) => (
                  <div className="dish" key={j}>
                    <div>
                      <h1>{dish.name}</h1>
                      <p>{dish.description}</p>
                    </div>
                    <div className="price">
                      <h3>${dish.price}</h3>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="menu-item">
            {ramenAndNoodlesMenu.map((section, i) => (
              <div key={i}>
                <h1 className="menu-cat-title">{section.category}</h1>

                {section.items.map((dish, j) => (
                  <div className="dish" key={j}>
                    <div>
                      <h1>{dish.name}</h1>
                      <p>{dish.description}</p>
                    </div>
                    <div className="price">
                      <h3>${dish.price}</h3>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <button className="menu-Reservation-btn">Make a Reservation</button>
      </section>
    </>
  );
}
export default MenuSection;
