import "./Brands.css";

const brands = [
  "Prestige",
  "Butterfly",
  "Pigeon",
  
  "Sunflame",
  "Hawkins",
  "Orient",
  "Bajaj",
];

function Brands() {
  return (
    <section className="brands">
      <h2>Brands We Sell</h2>

      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div className="brand-card" key={index}>
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;