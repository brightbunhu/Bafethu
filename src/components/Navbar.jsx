import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { business } from '../data/business.js';
import logo from '../assets/images/logoh.jpg';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services & Prices', path: '/services' },
  { label: 'Done Projects', path: '/projects' },
  { label: 'Contact Us', path: '/contact' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <NavLink to="/" className="brand" onClick={() => setIsOpen(false)}>
          <img className="brand-logo" src={logo} alt="Bafethu Events & Logistics logo" />
          <span>
            <strong>BAFETHU</strong>
            <small>Events & Logistics</small>
          </span>
        </NavLink>

        <button
          className="icon-button menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink className="quote-pill" to="/contact" onClick={() => setIsOpen(false)}>
            GET A QUOTE
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
