import { FiCheckCircle, FiPhoneCall, FiInfo } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo.jsx';
import { services } from '../data/services.js';
import { business, WHATSAPP_NUMBER } from '../data/business.js';

function Services() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Bafethu Events & Logistics, I would like to get a quotation for equipment hiring.'
  )}`;

  return (
    <>
      <Seo
        title="Event Equipment Hiring Services & Logistics Gweru"
        description="View our extensive catalog of event hire items. Chairs, tables, marquees, stages, PA sound hire, decorations, and VIP lounge furniture in Zimbabwe."
      />

      {/* Page Hero */}
      <section className="premium-page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hero-eyebrow">EQUIPMENT CATALOG</span>
            <h1>Our Services & Packages</h1>
            <p>High-quality event assets prepared, delivered, and assembled for your peace of mind.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Rows List */}
      <section className="premium-section">
        <div className="container services-rows-container">
          {services.map((service, index) => (
            <motion.article 
              className={`premium-service-row ${index % 2 === 1 ? 'reverse-row' : ''}`}
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55 }}
            >
              <div className="service-row-visual">
                <img src={service.image} alt={`${service.title} event staging`} loading="lazy" />
              </div>
              <div className="service-row-content">
                <span className="row-item-index">0{index + 1}</span>
                <h2>{service.title}</h2>
                <p className="service-row-desc">{service.description}</p>
                <div className="features-checklist-box">
                  <h3>Available Options</h3>
                  <ul className="service-checklist-grid">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <FiCheckCircle /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-row-quote-card">
                  <div className="quote-card-header">
                    <FiInfo />
                    <div>
                      <strong>Custom Quotations</strong>
                      <span>Pricing depends on quantity and location</span>
                    </div>
                  </div>
                  <div className="quote-card-actions">
                    <Link className="btn-row-primary" to="/contact">Enquire Now</Link>
                    <a className="btn-row-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
                      WhatsApp Quote
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Help Banner Section */}
      <section className="premium-section services-help-banner">
        <div className="container help-banner-inner-box">
          <div className="help-banner-content">
            <span className="help-eyebrow">EXPERT STAGING HELP</span>
            <h2>Need Help Choosing Packages?</h2>
            <p>Our experienced logistics coordinators can help you calculate the exact number of chairs, tables, and tent size configurations for your guest count.</p>
            <div className="help-actions-row">
              <Link className="btn-help-primary" to="/contact">Get Consultation</Link>
              <a href={`tel:${business.phones[0]}`} className="btn-help-phone">
                <FiPhoneCall /> Call: {business.phones[0]}
              </a>
            </div>
          </div>
          <div className="help-banner-visual">
            <img src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&h=600&fit=crop" alt="High-quality event audio speakers" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
