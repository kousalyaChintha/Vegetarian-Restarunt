import { Link } from 'react-router-dom';
import './Footer.css';
import Gmail from './Gmail';

function Footer() {
  return (
    <>
    <footer className="foot">
      <div className="footer-content">
        {/* Left Section: Branding */}
        <div className="footer-left">
          <img src="/assets/logo.png" className="image" alt="Logo" />
          <p><strong>Vegetarian Restaurant</strong></p>
          <p>Andhra Specials 👌</p>
          <p>Serving delicious vegetarian meals.</p>
          <p><strong>Open Hours:</strong></p>
          <ul>
            <li>Mon – Fri: 10 AM – 10 PM</li>
            <li>Sat – Sun: 9 AM – 11 PM</li>
          </ul>
        </div>

        {/* Middle Section: Contact Us (moved from right) */}
        <div className="footer-middle">
          <h3>Contact Us</h3>
          <p>📞 +91 94941 83516</p>
          <p>📧 Email: kousalyachinta@gmail.com </p>
          <div className="short-gmail-form">
            <Gmail />
          </div>
        </div>

        {/* Right Section: Quick Links (moved from middle) */}
        <div className="footer-right">
          <h3>Quick Links</h3>
          <ul type = "none">
            <li><Link to="/Aboutus">About Us</Link></li>
            <li><Link to="/OurMenu">Our Menu</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/Terms">Terms & Conditions</Link></li>
          </ul>
        </div>
        

     
    </div>
    <div className="footer-bottom">
        <p>Made for veggies😋!!!</p>
      </div>
    </footer>
     

      </>
  );
}

export default Footer;
