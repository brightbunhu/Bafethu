import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiMail, FiMapPin, FiPhone, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Seo from '../components/Seo.jsx';
import { pageSeo } from '../data/seo.js';
import { business, WHATSAPP_NUMBER } from '../data/business.js';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  eventType: '',
  eventDate: '',
  equipmentRequired: [],
  message: ''
};

const equipmentOptions = [
  'Chairs', 
  'Tables', 
  'Tents', 
  'PA Systems', 
  'Stage Hire', 
  'Lighting', 
  'Decorations', 
  'VIP Furniture'
];

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const toggleEquipment = (value) => {
    setForm((current) => {
      const isSelected = current.equipmentRequired.includes(value);
      return {
        ...current,
        equipmentRequired: isSelected
          ? current.equipmentRequired.filter((item) => item !== value)
          : [...current.equipmentRequired, value]
      };
    });
  };

  const sendInquiry = async (event) => {
    event.preventDefault();
    setStatus('Preparing inquiry...');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        { ...form, equipmentRequired: form.equipmentRequired.join(', ') },
        'YOUR_PUBLIC_KEY'
      );
      setStatus('Inquiry sent successfully! Thank you for contacting Bafethu Events & Logistics.');
      setForm(initialForm);
    } catch {
      setStatus('EmailJS is not fully configured. We have logged your request. Please also reach out via WhatsApp/Phone for instant assistance.');
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <>
      <Seo {...pageSeo.contact} />

      {/* Page Hero */}
      <section className="premium-page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hero-eyebrow">GET IN TOUCH</span>
            <h1>Contact & Enquiries</h1>
            <p>Ready to stage your event? Let's discuss dates, layouts, and equipment options.</p>
          </motion.div>
        </div>
      </section>

      {/* Form and Info Section */}
      <section className="premium-section">
        <div className="container contact-section-inner">
          <div className="contact-grid-split">
            {/* Form Column */}
            <motion.div 
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3>Request Quotation</h3>
              <form className="premium-contact-form" onSubmit={sendInquiry}>
                <div className="form-group-row">
                  <div className="form-field-wrapper">
                    <label>Your Name</label>
                    <input 
                      name="name" 
                      value={form.name} 
                      onChange={updateField} 
                      placeholder="e.g. Tendai Moyo" 
                      required 
                    />
                  </div>
                  <div className="form-field-wrapper">
                    <label>Phone Number</label>
                    <input 
                      name="phone" 
                      value={form.phone} 
                      onChange={updateField} 
                      placeholder="e.g. +263 77 552 4121" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-field-wrapper">
                    <label>Email Address</label>
                    <input 
                      name="email" 
                      type="email" 
                      value={form.email} 
                      onChange={updateField} 
                      placeholder="e.g. name@example.com" 
                    />
                  </div>
                  <div className="form-field-wrapper">
                    <label>Event Date</label>
                    <input 
                      name="eventDate" 
                      type="date" 
                      value={form.eventDate} 
                      onChange={updateField} 
                      required 
                    />
                  </div>
                </div>

                <div className="form-field-wrapper">
                  <label>Event Type</label>
                  <select name="eventType" value={form.eventType} onChange={updateField} required>
                    <option value="">Choose event type...</option>
                    <option>Wedding</option>
                    <option>Funeral</option>
                    <option>Birthday</option>
                    <option>Corporate Event</option>
                    <option>Church Gathering</option>
                    <option>Graduation Ceremony</option>
                    <option>Special Occasion</option>
                  </select>
                </div>

                <div className="form-field-wrapper">
                  <label>Equipment Needed</label>
                  <div className="equipment-checkbox-grid">
                    {equipmentOptions.map((item) => (
                      <label key={item} className="checkbox-item-label">
                        <input
                          type="checkbox"
                          checked={form.equipmentRequired.includes(item)}
                          onChange={() => toggleEquipment(item)}
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-field-wrapper">
                  <label>Message / Setup Specifics</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={updateField}
                    placeholder="Provide details about your guest count, delivery location, and specific styling preferences..."
                  />
                </div>

                <button className="btn-submit-premium" type="submit">Send Inquiry</button>
                {status && <p className="form-feedback-status">{status}</p>}
              </form>
            </motion.div>

            {/* Info and Address Column */}
            <motion.div 
              className="contact-info-wrapper"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="contact-details-card">
                <h3>Contact Information</h3>
                <ul className="details-list-premium">
                  <li>
                    <FiPhone />
                    <div>
                      <strong>Call Support</strong>
                      <span>{business.phones.join(' / ')}</span>
                    </div>
                  </li>
                  <li>
                    <FiMail />
                    <div>
                      <strong>Email Enquiries</strong>
                      <a href={`mailto:${business.email}`}>{business.email}</a>
                    </div>
                  </li>
                  <li>
                    <FiMapPin />
                    <div>
                      <strong>Office Address</strong>
                      <span>{business.location}</span>
                    </div>
                  </li>
                  <li>
                    <FiClock />
                    <div>
                      <strong>Operating Hours</strong>
                      <span>Monday - Sunday: 08:00 AM - 06:00 PM</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map Embed */}
              <div className="google-map-card">
                <iframe
                  title="Bafethu Events location map"
                  src={`https://www.google.com/maps?q=${business.coordinates.lat},${business.coordinates.lng}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Social Channels */}
              <div className="contact-social-card">
                <h3>Follow Our Setups</h3>
                <div className="social-pills-row">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-pill-link fb">
                    <FaFacebookF /> Facebook
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="social-pill-link wa">
                    <FaWhatsapp /> WhatsApp
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-pill-link ig">
                    <FaInstagram /> Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
