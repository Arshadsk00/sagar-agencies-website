import "./Categories.css";

import { GiPressureCooker } from "react-icons/gi";


const categories = [
  { name: "Gas Stoves", icon: "🔥" },
  { name: "Pressure Cookers", icon: "🍲" },
  { name: "Mixer Grinders", icon: "🥣" },
  {name: "Grinders",icon:<GiPressureCooker/>},
  { name: "LPG Accessories", icon: "🔧" },
  { name: "Spare Parts", icon: "🛠️" },
];

function Categories() {
  return (
    <section className="categories">
      <h2>Our Products</h2>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;