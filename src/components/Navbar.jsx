import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { business, WHATSAPP_NUMBER } from '../data/business.js';
import logo from '../assets/images/logoh.jpg';

const navItems = [
  { label: 'Home', path: '/', hash: '#home' },
  { label: 'About', path: '/about', hash: '#about' },
  { label: 'Services', path: '/services', hash: '#services' },
  { label: 'Projects', path: '/projects', hash: '#projects' },
  { label: 'Contact', path: '/contact', hash: '#contact' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Pages with blue hero backgrounds that need solid navbar
  const pagesWithBlueBackground = ['/about', '/services', '/contact', '/projects'];
  const hasBlueBackground = pagesWithBlueBackground.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
    if (item.hash === '#home' && location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <header className={`site-header ${isScrolled || hasBlueBackground ? 'scrolled' : 'transparent-nav'}`}>
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
          <NavLink className="quote-pill-btn" to="/contact">
            Partner with us
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

        {/* Mobile Slide-in Drawer with Backdrop */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop overlay */}
              <motion.div
                className="drawer-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />
              {/* Drawer */}
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
                  <button className="icon-button drawer-close-btn" onClick={() => setIsOpen(false)} aria-label="Close menu">
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
                </div>
                <div className="drawer-footer-actions">
                  <NavLink className="quote-pill-btn mobile-drawer-btn" to="/contact" onClick={() => setIsOpen(false)}>
                    Partner with us
                  </NavLink>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="whatsapp-drawer-link">
                    <FaWhatsapp /> Chat on WhatsApp
                  </a>
                  <div className="drawer-social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="drawer-social-btn" aria-label="Facebook">
                      <FaFacebookF />
                    </a>
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="drawer-social-btn" aria-label="WhatsApp">
                      <FaWhatsapp />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="drawer-social-btn" aria-label="Instagram">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
