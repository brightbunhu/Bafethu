import { motion } from 'framer-motion';
import {
  FiClock,
  FiDollarSign,
  FiMapPin,
  FiShield,
  FiTruck,
  FiUsers
} from 'react-icons/fi';
import { GiFoldedPaper, GiPartyPopper, GiSoundWaves, GiTable } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import GalleryCard from '../components/GalleryCard.jsx';
import Seo from '../components/Seo.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { business, WHATSAPP_NUMBER } from '../data/business.js';
import { projects } from '../data/projects.js';
import { services } from '../data/services.js';

const equipment = [
  { icon: <GiFoldedPaper />, title: 'Chairs Hiring' },
  { icon: <GiTable />, title: 'Tables Hiring' },
  { icon: <GiPartyPopper />, title: 'Tents Hiring' },
  { icon: <GiSoundWaves />, title: 'PA System Hiring' }
];

const reasons = [
  { icon: <FiDollarSign />, title: 'Affordable Prices', text: 'Quality service at prices you can afford.' },
  { icon: <FiShield />, title: 'Quality Equipment', text: 'Well maintained, clean and reliable equipment.' },
  { icon: <FiUsers />, title: 'Professional Service', text: 'Our team ensures your event runs smoothly.' },
  { icon: <FiClock />, title: 'On Time Delivery', text: 'We deliver and set up on time, every time.' }
];

function Home() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <>
      <Seo
        title="Bafethu Events & Logistics | Event Equipment Hire Gweru Zimbabwe"
        description="Event equipment hire in Gweru, Zimbabwe for chairs, tables, tents and PA systems serving weddings, funerals, birthdays and corporate events."
      />

      <section className="hero home-hero">
        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>BAFETHU <span>EVENTS & LOGISTICS</span></h1>
            <h2>Creating Memorable Events With Quality Equipment</h2>
            <p>
              Affordable and reliable event equipment solutions for weddings, funerals, corporate events and celebrations.
            </p>
            <div className="hero-actions">
              <a className="button success" href={whatsappUrl} target="_blank" rel="noreferrer">
                CHAT ON WHATSAPP
              </a>
              <Link className="button outline" to="/contact">
                REQUEST A QUOTE
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-image-wrap"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop" alt="Bafethu tent, chairs and PA system setup" />
          </motion.div>
        </div>
      </section>

      <section className="equipment-strip">
        <div className="container equipment-grid">
          {equipment.map((item) => (
            <article key={item.title}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="section-heading centered rule-heading">
            <h2>WHY CHOOSE BAFETHU?</h2>
          </div>
          <div className="reason-grid">
            {reasons.map((reason) => (
              <motion.article className="reason-card" key={reason.title} whileHover={{ y: -4 }}>
                <span>{reason.icon}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="section-heading centered">
            <h2>OUR SERVICES</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="project-band">
        <div className="container">
          <div className="section-heading centered light">
            <h2>OUR RECENT PROJECTS</h2>
          </div>
          <div className="gallery-grid preview">
            {projects.slice(0, 4).map((project, index) => (
              <GalleryCard key={`${project.eventType}-${index}`} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="planning-strip">
        <div className="container planning-content">
          <div>
            <h2>PLANNING AN EVENT?</h2>
            <p>Let us help you make your event successful and memorable.</p>
          </div>
          <Link className="button primary" to="/contact">CONTACT US TODAY</Link>
        </div>
      </section>
    </>
  );
}

export default Home;
