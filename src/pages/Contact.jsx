
import "./Contacts.css";

function Contact() {
  return (
    <section className="contact-page">
      <h1>Contact Us</h1>
      <p>We're here to help. Feel free to contact us anytime.</p>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Sagar Agencies</h2>

          <p>
            📍 opp Venkataramana hotel , Chakali Street,
            <br />
            Nellore, Andhra Pradesh
          </p>

          <p>
            
            📞 <a href="tel"> PM BASHA : +91 9966508633</a><br></br>
          
            📞 <a href="tel">P WASEEM : +91 9985612380</a>
          </p>

          <p>
            💬 <a
              href="https://wa.me/9985612380"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </p>

          <p>
            📧
            <a href="mailto:sagaragencies@gmail.com">
              sagaragencies@gmail.com
            </a>
          </p>

        </div>

        <div className="contact-map">
          
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1931.804319970259!2d79.9828644!3d14.4497035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8ccbda809947%3A0x97e027f07a6ce0e8!2sSagar%20Agencies!5e0!3m2!1sen!2sin!4v1783686646284!5m2!1sen!2sin"
            loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            
      
        </div>

      </div>
    </section>
  );
}

export default Contact;