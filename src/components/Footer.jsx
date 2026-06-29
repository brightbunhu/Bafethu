import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { business, WHATSAPP_NUMBER } from '../data/business.js';
import logo from '../assets/images/logoh.jpg';

function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <footer className="premium-footer">
      <div className="container footer-upper-grid">
        {/* Column One: Brand & Intro */}
        <div className="footer-col-info">
          <Link to="/" className="brand footer-brand">
            <img className="brand-logo" src={logo} alt="Bafethu Events logo" />
            <span className="brand-text">
              <strong className="brand-name">BAFETHU</strong>
              <small className="brand-sub">Events & Logistics</small>
            </span>
          </Link>
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

        {/* Column Two: Services List */}
        <div className="footer-col-links">
          <h3>Our Services</h3>
          <ul>
            <li><Link to="/services">Chair Hiring</Link></li>
            <li><Link to="/services">Table Hiring</Link></li>
            <li><Link to="/services">Tent Hiring</Link></li>
            <li><Link to="/services">PA System Hiring</Link></li>
            <li><Link to="/services">Stage & Staging</Link></li>
            <li><Link to="/services">Ambient Lighting</Link></li>
            <li><Link to="/services">Aesthetic Decorations</Link></li>
            <li><Link to="/services">VIP Lounge Furniture</Link></li>
          </ul>
        </div>

        {/* Column Four: Contact Information */}
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
          
          {/* Newsletter Subscription */}
          <div className="footer-newsletter-box">
            <h4>Newsletter</h4>
            <p>Subscribe to receive staging ideas and packages.</p>
            <form onSubmit={handleSubscribe} className="newsletter-form-box">
              <input 
                type="email" 
                placeholder="Your email address" 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                aria-label="Newsletter email input"
              />
              <button type="submit" aria-label="Subscribe button">
                <FiSend />
              </button>
            </form>
            {subscribed && <span className="newsletter-status-msg">Subscribed successfully!</span>}
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="footer-bottom-bar">
        <div className="container bottom-bar-inner">
          <span className="copyright-text">
            © {new Date().getFullYear()} Bafethu Events & Logistics. All rights reserved. | Developed by <a href="https://bunhu.biznest.co.zw" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--accent-blue)' }}>Bright Tavonga Bunhu</a>
          </span>
          <div className="bottom-policy-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
