import "./Services.css";
import {
  FaFire,
  FaBlender,
  FaTools,
  FaHome,
  FaShieldAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      icon: <FaFire />,
      title: "Gas Stove Repair",
      desc: "Burner cleaning, ignition repair, gas leakage fixing, knob replacement.",
    },
    {
      icon: <FaTools />,
      title: "Pressure Cooker Service",
      desc: "Gasket replacement, valve repair, handle replacement and servicing.",
    },
    {
      icon: <FaBlender />,
      title: "Mixer Grinder Repair",
      desc: "Motor repair, blade replacement, jar coupling and switch repair.",
    },
    {
      icon: <FaHome />,
      title: "Kitchen Chimney Service",
      desc: "Installation, deep cleaning, filter replacement and motor service.",
    },
    {
      icon: <FaShieldAlt />,
      title: "LPG Accessories",
      desc: "Gas pipes, regulators,lighters, stove stands and genuine spare parts.",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Doorstep Service",
      desc: "Quick home service by experienced technicians.",
    },
  ];

  return (
    <section className="services-page">
      <h1>Our Services</h1>

      <p className="service-subtitle">
        Professional repair and maintenance services for all your kitchen
        appliances.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

            <Link to="/book-service">
              <button>Book Service</button>
            </Link>
          </div>
        ))}
      </div>

      <div className="why-choose">
        <h2>Why Choose Sagar Agencies?</h2>

        <div className="features">
          <div>✅ Trusted Since 1991</div>
          <div>✅ Genuine Spare Parts</div>
          <div>✅ Experienced Technicians</div>
          <div>✅ Affordable Service Charges</div>
          <div>✅ Quick Response</div>
          <div>✅ Customer Satisfaction</div>
        </div>
      </div>

      <div className="service-contact">
        <h2>Need Immediate Assistance?</h2>

        <p>We're just a call away.</p>

        <div className="buttons">
          <a href="tel:9966508633">
            <button className="call-btn">📞 Call Now</button>
          </a>

          <a
            href="https://wa.me/9985612380"
            target="_blank"
            rel="noreferrer"
          >
            <button className="whatsapp-btn">💬 WhatsApp</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;