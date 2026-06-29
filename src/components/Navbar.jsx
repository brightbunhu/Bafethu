import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { business, WHATSAPP_NUMBER } from '../data/business.js';
import logo from '../assets/images/logoh.jpg';

const navItems = [
  { label: 'Home', path: '/', hash: '#home' },
  { label: 'About', path: '/about', hash: '#about' },
  { label: 'Services', path: '/services', hash: '#services' },
  { label: 'Projects', path: '/projects', hash: '#projects' },
  { label: 'Testimonials', path: '/', hash: '#testimonials' },
  { label: 'Contact', path: '/contact', hash: '#contact' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active highlighting based on hash and path
  const isActiveItem = (item) => {
    if (item.hash && location.pathname === '/' && location.hash === item.hash) {
      return true;
    }
    if (!location.hash && location.pathname === item.path && item.hash === '#home') {
      return true;
    }
    return location.pathname === item.path && !location.hash;
  };

  const handleNavClick = (e, item) => {
    setIsOpen(false);
    if (item.hash === '#testimonials') {
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.querySelector('#testimonials');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', '#testimonials');
        }
      } else {
        e.preventDefault();
        navigate('/#testimonials');
        setTimeout(() => {
          const element = document.querySelector('#testimonials');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (item.hash === '#home' && location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : 'transparent-nav'}`}>
      <nav className="navbar container" aria-label="Main navigation">
        {/* Left Side: Logo and Title */}
        <NavLink to="/" className="brand" onClick={() => setIsOpen(false)}>
          <img className="brand-logo" src={logo} alt="Bafethu Events & Logistics logo" />
          <span className="brand-text">
            <strong className="brand-name">BAFETHU</strong>
            <small className="brand-sub">Events & Logistics</small>
          </span>
        </NavLink>

        {/* Center: Navigation Links */}
        <div className="nav-links-center">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={(e) => handleNavClick(e, item)}
              className={`nav-item-link ${isActiveItem(item) ? 'active' : ''}`}
            >
              {item.label}
              <span className="underline-indicator"></span>
            </NavLink>
          ))}
        </div>

        {/* Right Side: Actions */}
        <div className="nav-actions-right">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="nav-whatsapp-icon" aria-label="Chat on WhatsApp">
            <FaWhatsapp />
          </a>
          <NavLink className="quote-pill-btn" to="/contact">
            Get Quote
          </NavLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="icon-button menu-toggle-btn"
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Slide-in Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-nav-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="drawer-header">
                <span className="brand">
                  <img className="brand-logo" src={logo} alt="Bafethu Events & Logistics logo" />
                  <span>
                    <strong>BAFETHU</strong>
                    <small>Events & Logistics</small>
                  </span>
                </span>
                <button className="icon-button" onClick={() => setIsOpen(false)}>
                  <FiX />
                </button>
              </div>
              <div className="drawer-links">
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`drawer-link-item ${isActiveItem(item) ? 'active' : ''}`}
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="drawer-footer-actions">
                  <NavLink className="quote-pill-btn mobile-drawer-btn" to="/contact" onClick={() => setIsOpen(false)}>
                    Get Quote
                  </NavLink>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="whatsapp-drawer-link">
                    <FaWhatsapp /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
