import { motion } from 'framer-motion';
import { FiCheckCircle, FiMapPin, FiSettings, FiShield, FiTruck, FiUsers, FiAward } from 'react-icons/fi';
import Seo from '../components/Seo.jsx';
import { pageSeo } from '../data/seo.js';
import { business } from '../data/business.js';
import logo from '../assets/images/logoh.jpg';

const values = [
  { icon: <FiTruck />, title: 'Reliability', text: 'Punctuality is our core. We deliver and assemble your equipment on time, every time, without exception.' },
  { icon: <FiSettings />, title: 'Premium Quality', text: 'All rental stock is inspected, sanitized, and polished before dispatch to ensure pristine event presentation.' },
  { icon: <FiShield />, title: 'Affordable Elegance', text: 'Get high-end event configurations and VIP packages at competitive rates tailored to your budget.' },
  { icon: <FiUsers />, title: 'Professionalism', text: 'From booking to complete venue teardown, our staff handles logistics with absolute care and expertise.' }
];

function About() {
  return (
    <>
      <Seo {...pageSeo.about} />

      {/* Page Hero */}
      <section className="premium-page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hero-eyebrow">WHO WE ARE</span>
            <h1>About Bafethu Events</h1>
            <p>Elevating special occasions with premium equipment rental and logistical excellence.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Intro */}
      <section className="premium-section">
        <div className="container about-intro-grid">
          <motion.div
            className="about-intro-text"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-eyebrow">OUR STORY</span>
            <div className="about-logo-wrapper">
              <img src={logo} alt="Bafethu Events & Logistics logo" className="about-page-logo" />
              <p className="about-slogan">{business.slogan}</p>
            </div>
            <h2>Zimbabwe's Premiere Event Partner</h2>
            <p>
              Founded in Gweru, Bafethu Events & Logistics is a newly Founded company that is fast growing into a leading events equipment hiring firm, recognized for bridging the gap between affordability and luxury staging. We provide comprehensive equipment rental packages designed for weddings, corporate conferences, graduations, family gatherings, and memorial services.
            </p>
            <p>
              Our operations combine high-capacity logistics transport with dedicated staging professionals. We do not just lease chairs and tents—we carefully coordinate layouts, set up sound frequencies, and manage aesthetics to allow you to focus entirely on your guests.
            </p>
            <div className="about-stats-row">
              <div className="about-stat-col">
                <strong>10+</strong>
                <span>Years Staging Events</span>
              </div>
              <div className="about-stat-col">
                <strong>100%</strong>
                <span>Punctuality Rate</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="about-intro-visual"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="about-image-wrapper">
              <img className="arched-media-premium" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=700&fit=crop" alt="Premium wedding reception setup" />
              <div className="about-badge-absolute">
                <FiAward />
                <span>Award-winning Logistics</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="premium-section bg-light">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-eyebrow">OUR DRIVING FORCE</span>
            <h2>Core Business Values</h2>
            <p>The values that ensure Bafethu Events remains the most trusted equipment hiring provider in the region.</p>
          </div>
          <div className="values-premium-grid">
            {values.map((value, index) => (
              <motion.article
                className="value-card-premium"
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="value-card-icon">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Service Range and Checklist */}
      <section className="premium-section">
        <div className="container about-capabilities-grid">
          <motion.div
            className="capabilities-text"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-eyebrow">CAPABILITIES</span>
            <h2>What We Bring to Your Venue</h2>
            <p>We own a massive, diverse catalog of event resources, enabling us to handle events ranging from 50 to over 1,500 guests with ease.</p>
            <ul className="capabilities-checklist">
              <li><FiCheckCircle /> Heavy-duty Waterproof Peg & Pole Tents</li>
              <li><FiCheckCircle /> High-end Framed & Stretch Canopy Tents</li>
              <li><FiCheckCircle /> Tiffany, Phoenix, and VIP Lounge Chairs</li>
              <li><FiCheckCircle /> Complete Banquet, Cocktail, and Cake Table Staging</li>
              <li><FiCheckCircle /> Professional Line-Array and Active PA Systems</li>
              <li><FiCheckCircle /> Ambient Mood Uplighting & Stage Spotlighting</li>
              <li><FiCheckCircle /> Themed Event Draping, Ribbons, and Linens</li>
              <li><FiCheckCircle /> Safe Event Transportation & Venue Teardown</li>
            </ul>
          </motion.div>
          <motion.div
            className="capabilities-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img className="capabilities-img-premium" src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop" alt="Stacked hiring event chairs" />
          </motion.div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="coverage-premium-panel">
        <div className="container coverage-panel-inner">
          <div className="coverage-info-text">
            <h2>Operational Coverage</h2>
            <p>We transport and install equipment at any location across the Midlands Province, Bulawayo, and surrounding districts.</p>
          </div>
          <div className="coverage-pills-list">
            {business.coverage.map((area) => (
              <span key={area} className="coverage-pill-item"><FiMapPin /> {area}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
