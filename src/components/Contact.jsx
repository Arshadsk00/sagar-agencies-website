import "./Contact.css";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>

      <div className="contact-container">

        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
         <a href="tel:+919966508633" className="contact-link">+91 9966508633 </a><br></  br>
         <a href="tel:+919985612380" className="contact-link">+91 9985612380</a>
        </div>

        <div className="contact-card">
          <FaWhatsapp className="contact-icon" />
          <h3>WhatsApp</h3>
         <a href="https://wa.me/9985612380" target="_blank" rel="noopener noreferrer"
              className="contact-link">Chat on WhatsApp</a>
   
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Address</h3>
          <p>Sagar Agencies,opp venkataramana hotel,
             Chakali Street,  Nellore, Andhra Pradesh</p>
        </div>

        <div className="contact-card">
          <FaClock className="contact-icon" />
          <h3>Business Hours</h3>
          <p>9:00 AM - 9:00 PM</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;