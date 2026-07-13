import "./Footer.css";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>Sagar Agencies</h2>
          <p>
            Sales & Service of Gas Stoves, Kitchen Appliances,
            Pressure Cookers, Mixers and Accessories.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <a href="tel:+919999999999">
            <FaPhoneAlt /> +91 9985612380
          </a>
           <a href="tel:+919999999999">
            <FaPhoneAlt /> +91 9966508633
          </a>

          <a
            href="https://wa.me/9985612380"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <a href="mailto:sagaragencies@gmail.com">
            <FaEnvelope /> Email Us
          </a>

          <a
            href="https://maps.app.goo.gl/B8WkXobNGaBgCtFJ6"
            target="_blank"
            rel="noreferrer"
          >
            <FaMapMarkerAlt /> Our Location
          </a>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Sagar Agencies. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;