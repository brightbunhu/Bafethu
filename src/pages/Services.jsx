import { FiCheckCircle, FiPhoneCall, FiInfo } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo.jsx';
import { buildServiceListJsonLd, pageSeo } from '../data/seo.js';
import { services } from '../data/services.js';
import { business, WHATSAPP_NUMBER } from '../data/business.js';

function Services() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Bafethu Events & Logistics, I would like to get a quotation for equipment hiring.'
  )}`;

  return (
    <>
      <Seo {...pageSeo.services} jsonLd={[buildServiceListJsonLd()]} />

      {/* Page Hero */}
      <section className="premium-page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hero-eyebrow">EQUIPMENT CATALOG</span>
            <h1>Chair, Table &amp; Tent Hire in Gweru</h1>
            <p>Complete event equipment rental with delivery, setup and collection across Gweru, Midlands Province and Bulawayo.</p>
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
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div 
                className="service-row-visual"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img src={service.image} alt={`${service.title} event staging`} loading="lazy" />
              </motion.div>
              <motion.div 
                className="service-row-content"
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <motion.span 
                  className="row-item-index"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                >
                  0{index + 1}
                </motion.span>
                <h2>{service.title}</h2>
                <p className="service-row-desc">{service.description}</p>
                <motion.div 
                  className="features-checklist-box"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  <h3>Available Options</h3>
                  <ul className="service-checklist-grid">
                    {service.features.map((feature, fIdx) => (
                      <motion.li 
                        key={feature}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + fIdx * 0.06 }}
                      >
                        <FiCheckCircle /> {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div 
                  className="service-row-quote-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                >
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
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Help Banner Section */}
      <motion.section 
        className="premium-section services-help-banner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container help-banner-inner-box">
          <motion.div 
            className="help-banner-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="help-eyebrow">EXPERT STAGING HELP</span>
            <h2>Need Help Choosing Packages?</h2>
            <p>Our experienced logistics coordinators can help you calculate the exact number of chairs, tables, and tent size configurations for your guest count.</p>
            <div className="help-actions-row">
              <Link className="btn-help-primary" to="/contact">Get Consultation</Link>
              <a href={`tel:${business.phones[0]}`} className="btn-help-phone">
                <FiPhoneCall /> Call: {business.phones[0]}
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="help-banner-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&h=600&fit=crop" alt="High-quality event audio speakers" />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default Services;
