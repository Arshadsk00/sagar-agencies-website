import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
       <img src={Logo} alt="Sagar Agencies Logo" />
          <h2>Sagar Agencies</h2>
        </div>
      

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>
    </nav>
  );
}
export default Navbar;