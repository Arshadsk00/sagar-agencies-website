import "./Services.css";
import {
  FaTools,
  FaFireExtinguisher,
  FaWrench,
  FaTruck,
} from "react-icons/fa";

const services = [
  {
    title: "Gas Stove Repair",
    icon: <FaTools />,
    desc: "Professional repair for all gas stove brands.",
  },
  {
    title: "Burner Cleaning",
    icon: <FaFireExtinguisher />,
    desc: "Complete burner cleaning and maintenance.",
  },
  {
    title: "Spare Parts",
    icon: <FaWrench />,
    desc: "Original spare parts at affordable prices.",
  },
  {
    title: "Home Service",
    icon: <FaTruck />,
    desc: "Doorstep service for selected locations.",
  },
];

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;