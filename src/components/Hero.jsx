import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    

    <section className="hero">
        
      <div className="hero-left">
    

        <span className="tagline">🔥 Trusted Since 1991</span>
     
        <h1>
          Sales & Service of <br />
          Kitchen Appliances
        </h1>

        <p>
          Sagar Agencies is your trusted destination for Gas Stoves,
          Pressure Cookers, Mixer Grinders, Chimneys, LPG Accessories,
          and professional repair services.
        </p>

        <div className="hero-buttons">

          <Link to="/products">
  <button className="primary-btn">Explore Products</button>
</Link>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=700"
          alt="Kitchen Appliances"
        />
      </div>
    </section>
  );
}

export default Hero;