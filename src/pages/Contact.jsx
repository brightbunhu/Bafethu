import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Seo from '../components/Seo.jsx';
import { business } from '../data/business.js';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  eventType: '',
  eventDate: '',
  equipmentRequired: [],
  message: ''
};

const equipmentOptions = ['Chairs', 'Tables', 'Tents', 'PA System'];

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const toggleEquipment = (event) => {
    const { value, checked } = event.target;
    setForm((current) => ({
      ...current,
      equipmentRequired: checked
        ? [...current.equipmentRequired, value]
        : current.equipmentRequired.filter((item) => item !== value)
    }));
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
      setStatus('Inquiry sent. Thank you for contacting Bafethu Events & Logistics.');
      setForm(initialForm);
    } catch {
      setStatus('EmailJS is not configured yet. Please contact us by phone or WhatsApp.');
    }
  };

  return (
    <>
      <Seo
        title="Contact Bafethu Events & Logistics"
        description="Contact Bafethu Events & Logistics for event equipment hire in Gweru, Midlands Province and Bulawayo. Request chair, tent, table and PA system quotations."
      />

      <section className="page-title-section">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch for bookings and quotations</p>
        </div>
      </section>

      <section className="section tight">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={sendInquiry}>
            <h2>Get In Touch</h2>
            <label>
              Your Name
              <input name="name" value={form.name} onChange={updateField} required />
            </label>
            <label>
              Phone Number
              <input name="phone" value={form.phone} onChange={updateField} required />
            </label>
            <label>
              Email Address
              <input name="email" type="email" value={form.email} onChange={updateField} />
            </label>
            <label>
              Event Type
              <select name="eventType" value={form.eventType} onChange={updateField} required>
                <option value="">Select event type</option>
                <option>Wedding</option>
                <option>Funeral</option>
                <option>Birthday</option>
                <option>Corporate Event</option>
                <option>Community Event</option>
              </select>
            </label>
            <label>
              Event Date
              <input
                name="eventDate"
                type="date"
                value={form.eventDate}
                onChange={updateField}
                required
              />
            </label>
            <div className="checkbox-group">
              <span>Equipment Required</span>
              {equipmentOptions.map((item) => (
                <label key={item}>
                  <input
                    type="checkbox"
                    value={item}
                    checked={form.equipmentRequired.includes(item)}
                    onChange={toggleEquipment}
                  />
                  {item}
                </label>
              ))}
            </div>
            <label>
              Message
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={updateField}
                placeholder="Tell us about your event location, guest count and setup needs."
              />
            </label>
            <button className="button primary" type="submit">SEND INQUIRY</button>
            {status && <p className="form-status">{status}</p>}
          </form>

          <aside className="contact-panel">
            <h2>Contact Information</h2>
            <ul className="contact-list large">
              <li><FiPhone /><span>{business.phones.join(' / ')}</span></li>
              <li><FiMail /><a href={`mailto:${business.email}`}>{business.email}</a></li>
              <li><FiMapPin /><span>{business.location}</span></li>
              <li><FiClock /><span>Monday - Sunday<br />08:00 AM - 06:00 PM</span></li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section tight location-section">
        <div className="container">
          <h2>Our Location</h2>
          <div className="map-wrap">
            <iframe
              title="Bafethu Events location map"
              src="https://www.google.com/maps?q=Mkoba%203%20Gweru%20Zimbabwe&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="section tight social-section">
        <div className="container">
          <h2>Follow Us</h2>
          <div className="social-row large-social">
            <span><FaFacebookF /></span>
            <span><FaWhatsapp /></span>
            <span><FaInstagram /></span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
