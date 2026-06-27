import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { business } from '../data/business.js';
import logo from '../assets/images/logoh.jpg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand footer-brand">
            <img className="brand-logo" src={logo} alt="Bafethu logo" />
            <span>
              <strong>BAFETHU</strong>
              <small>Events & Logistics</small>
            </span>
          </Link>
          <p>Creating memorable events with quality equipment and exceptional service.</p>
          <div className="social-row" aria-label="Social media links">
            <span><FaFacebookF /></span>
            <span><FaWhatsapp /></span>
            <span><FaInstagram /></span>
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services & Prices</Link></li>
            <li><Link to="/projects">Done Projects</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3>Services and Locations</h3>
          <ul>
            <li>Chairs Hiring</li>
            <li>Tables Hiring</li>
            <li>Tents Hiring</li>
            <li>PA System Hiring</li>
            <li>Gweru</li>
            <li>Midlands Province</li>
            <li>Bulawayo</li>
            <li>Surrounding Areas</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Bafethu Events & Logistics. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
