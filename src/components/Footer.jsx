import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { business, WHATSAPP_NUMBER } from '../data/business.js';
import logo from '../assets/images/logoh.jpg';

function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <footer className="premium-footer">
      <div className="container footer-upper-grid">
        <div className="footer-col-info">
          <Link to="/" className="brand footer-brand">
            <img className="brand-logo" src={logo} alt="Bafethu Events logo" />
            <span className="brand-text">
              <strong className="brand-name">BAFETHU</strong>
              <small className="brand-sub">Events & Logistics</small>
            </span>
          </Link>
          <p className="footer-slogan">{business.slogan}</p>
          <p className="footer-company-desc">
            Creating memorable events with premium equipment rentals and exceptional staging logistics across Gweru, Midlands, and Bulawayo.
          </p>
          <div className="footer-social-row" aria-label="Social media links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-col-contact">
          <h3>Contact Us</h3>
          <ul className="footer-contact-list">
            <li>
              <FiPhone />
              <span>{business.phones.join(' / ')}</span>
            </li>
            <li>
              <FiMail />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
            <li>
              <FiMapPin />
              <span>{business.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container bottom-bar-inner">
          <span className="copyright-text">
            © {new Date().getFullYear()} Bafethu Events & Logistics. All rights reserved. | Developed by <a href="https://bunhu.biznest.co.zw" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--accent-blue)' }}>Bright Tavonga Bunhu</a>
          </span>
          <div className="bottom-policy-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
