import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiClock,
  FiDollarSign,
  FiMapPin,
  FiShield,
  FiTruck,
  FiUsers,
  FiMail,
  FiPhone,
  FiArrowRight,
  FiStar,
  FiCheckCircle,
  FiGrid,
  FiX,
  FiMessageSquare,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';
import { 
  FaChair, 
  FaCouch, 
  FaVolumeUp, 
  FaCampground, 
  FaLightbulb, 
  FaBorderAll, 
  FaSmile, 
  FaCalendarAlt,
  FaWhatsapp 
} from 'react-icons/fa';
import { GiTable, GiPartyPopper, GiSoundWaves } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { business, WHATSAPP_NUMBER } from '../data/business.js';
import { projects } from '../data/projects.js';
import { services } from '../data/services.js';

// Counter component that animates when it is scrolled into view
function AnimatedCounter({ endValue, label, icon }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = parseInt(endValue, 10);
          const duration = 1500; // ms
          const increment = end / (duration / 16); // ~60fps
          
          const counterInterval = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(counterInterval);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [endValue, hasAnimated]);

  return (
    <div className="premium-stat-card" ref={elementRef}>
      <span className="stat-card-icon">{icon}</span>
      <div className="stat-card-number">
        {count}
        {endValue.includes('+') ? '+' : ''}
      </div>
      <div className="stat-card-label">{label}</div>
    </div>
  );
}

const heroImages = [
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1000&h=700&fit=crop', // Wedding tents
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1000&h=700&fit=crop', // White chairs
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&h=700&fit=crop', // VIP lounge
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1000&h=700&fit=crop', // Corporate conference
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&h=700&fit=crop', // Graduation setup
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1000&h=700&fit=crop'  // Funeral setup
];

const serviceIcons = [
  <FaChair />,       // Chair Hire
  <GiTable />,       // Table Hire
  <FaCampground />,  // Tent Hire
  <FaVolumeUp />,    // PA Systems
  <FiGrid />,        // Stage Hire
  <FaLightbulb />,   // Lighting
  <GiPartyPopper />, // Decorations
  <FaCouch />        // VIP Furniture
];

const reasons = [
  { icon: <FiDollarSign />, title: 'Affordable Pricing', text: 'Premium event rentals tailored to your budget without compromising on quality or aesthetics.' },
  { icon: <FiShield />, title: 'Quality Equipment', text: 'Meticulously cleaned, polished, and fully functional systems that look spectacular at every venue.' },
  { icon: <FiUsers />, title: 'Professional Staff', text: 'Highly experienced technicians, event setup crews, and coordinators focused on your peace of mind.' },
  { icon: <FiTruck />, title: 'Reliable Delivery', text: 'Punctual, guaranteed delivery and complete event staging. We arrive early, every single time.' }
];

const testimonials = [
  {
    name: 'Sarah Moyo',
    event: 'Wedding Reception',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    review: 'Bafethu made our wedding absolutely perfect! The tents, tiffany chairs, and VIP stage setup were breathtaking. Their staff worked tirelessly to ensure every single detail was spectacular.',
    location: 'Gweru'
  },
  {
    name: 'John Nkomo',
    event: 'Corporate AGM',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    review: 'Extremely professional PA sound system setup and clean corporate chairs for our regional conference. The acoustics were pristine, and the technical team was on standby throughout.',
    location: 'Bulawayo'
  },
  {
    name: 'Grace Dube',
    event: 'Memorial Service',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    review: 'During a very difficult period for our family, Bafethu provided respectful, efficient, and compassionate service. Tents and chairs were set up promptly and respectfully.',
    location: 'Mkoba'
  }
];

const projectCategories = ['All', 'Weddings', 'Corporate', 'Church', 'Graduation', 'Birthday', 'Funeral'];

function Home() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    eventType: '',
    equipmentNeeded: [],
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (item) => {
    setContactForm((prev) => {
      const current = prev.equipmentNeeded;
      const updated = current.includes(item)
        ? current.filter((i) => i !== item)
        : [...current, item];
      return { ...prev, equipmentNeeded: updated };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Sending your request...');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('Thank you! Your quotation request has been received. We will contact you shortly.');
      setContactForm({
        name: '',
        phone: '',
        email: '',
        eventDate: '',
        eventType: '',
        equipmentNeeded: [],
        message: ''
      });
    }, 1200);
  };

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.eventType === activeCategory);

  return (
    <>
      <Seo
        title="Bafethu Events & Logistics | Premium Event Equipment Hire Zimbabwe"
        description="Redefined luxury event rentals in Gweru, Midlands, and Bulawayo. Premium hiring for chairs, tables, tents, stages, lighting, and audio equipment."
      />

      {/* Hero Section */}
      <section id="home" className="premium-hero">
        {/* Subtle abstract background shapes */}
        <div className="abstract-shape shape-1"></div>
        <div className="abstract-shape shape-2"></div>

        <div className="container hero-layout-grid">
          <motion.div
            className="hero-text-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="premium-badge">PREMIUM EVENTS & LOGISTICS</div>
            <h1 className="hero-compact-title">
              Creating Memorable<br />Events Across Zimbabwe
            </h1>
            <p className="hero-desc-compact">
              We provide premium tents, chairs, tables, décor and PA systems for weddings, corporate events, graduations, church gatherings and special occasions across Zimbabwe.
            </p>
            
            <div className="hero-cta-group-compact">
              <Link className="btn-primary-premium" to="/contact">
                Get a Free Quote
              </Link>
              <a className="btn-whatsapp-premium" href={whatsappUrl} target="_blank" rel="noreferrer">
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>

            <div className="hero-trust-line">
              ★★★★★ Trusted for Weddings • Corporate Events • Graduations
            </div>
          </motion.div>

          <motion.div
            className="hero-visual-side"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="hero-carousel-container floating-animation">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className="carousel-slide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={heroImages[currentImageIndex]} alt="Premium Event Setup" />
                  <div className="slide-overlay-info">
                    <span>
                      {currentImageIndex === 0 && 'Exquisite Wedding Tent Staging'}
                      {currentImageIndex === 1 && 'Prismatic Seating Layouts'}
                      {currentImageIndex === 2 && 'Luxury VIP Lounge Setup'}
                      {currentImageIndex === 3 && 'High-Profile Corporate Stage'}
                      {currentImageIndex === 4 && 'Dignified Graduation Ceremony'}
                      {currentImageIndex === 5 && 'Sober Memorial Gathering Shelter'}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Carousel Indicators */}
              <div className="hero-carousel-dots">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`carousel-dot-btn ${idx === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            {/* Curved Blue Decorative Background Frame */}
            <div className="curved-decorator-shape"></div>
          </motion.div>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="premium-stats-section">
        <div className="container">
          <div className="stats-layout-grid">
            <AnimatedCounter endValue="500+" label="Successful Events" icon={<FaSmile />} />
            <AnimatedCounter endValue="300+" label="Happy Clients" icon={<FiUsers />} />
            <AnimatedCounter endValue="10+" label="Years Experience" icon={<FaCalendarAlt />} />
            <AnimatedCounter endValue="50+" label="Equipment Types" icon={<FaBorderAll />} />
          </div>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section id="services" className="premium-section bg-light">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-eyebrow">OUR SERVICE OFFERINGS</span>
            <h2>Premium Equipment Hire</h2>
            <p>Elevate your event with our extensive catalog of professional rental equipment, delivered and set up by our expert logistics crew.</p>
          </div>

          <div className="premium-services-grid">
            {services.slice(0, 4).map((service, index) => (
              <motion.article 
                className="premium-service-card" 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="service-card-image-box">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="service-card-icon-overlay">
                    {serviceIcons[index] || <FiCheckCircle />}
                  </div>
                </div>
                <div className="service-card-details">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-card-features-tag">
                    {service.features.slice(0, 3).map(f => (
                      <span key={f} className="feature-pill">{f}</span>
                    ))}
                  </div>
                  <Link to="/services" className="service-details-action">
                    View Details <FiArrowRight />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="section-preview-actions">
            <Link to="/services" className="btn-primary-premium">
              View All Services <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="premium-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-eyebrow">UNMATCHED SERVICE STANDARDS</span>
            <h2>Why Choose Bafethu Events?</h2>
            <p>We combine premium quality equipment with meticulous planning and timing to ensure your special day runs without a hitch.</p>
          </div>

          <div className="why-choose-grid">
            {reasons.map((reason, index) => (
              <motion.div 
                className="why-choose-card" 
                key={reason.title}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="why-choose-icon-frame">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Grid (Portfolio Showcase) */}
      <section id="projects" className="premium-section bg-light">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-eyebrow">PORTFOLIO</span>
            <h2>Featured Event Staging</h2>
            <p>Browse through some of our recent professional setups and gatherings successfully staged across Zimbabwe.</p>
          </div>

          {/* Responsive Portfolio Grid */}
          <div className="portfolio-masonry-grid">
            {projects.slice(0, 4).map((project, idx) => (
              <motion.div
                key={`${project.title}-${idx}`}
                className="portfolio-item-card"
                onClick={() => setLightboxImage(project)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="portfolio-card-img-wrapper">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="portfolio-card-hover-overlay">
                    <div className="overlay-content-block">
                      <span className="overlay-tag">{project.eventType}</span>
                      <h4>{project.title}</h4>
                      <span className="overlay-loc"><FiMapPin /> {project.location}</span>
                      <span className="overlay-action-btn">Click to Expand</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="section-preview-actions">
            <Link to="/projects" className="btn-primary-premium">
              View All Projects <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="premium-section testimonials-slider-bg">
        <div className="container">
          <div className="section-header-centered text-white">
            <span className="section-eyebrow text-accent">WHAT OUR CLIENTS SAY</span>
            <h2 className="text-white">Success Stories</h2>
            <p className="text-gray-light">Read direct feedback from couple celebrations, corporate organizers, and community representatives.</p>
          </div>

          <div className="testimonials-carousel-wrapper">
            <div className="carousel-slide-outer">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonialIndex}
                  className="premium-testimonial-card"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="testimonial-upper-stars">
                    {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                      <FiStar key={i} className="star-filled-icon" />
                    ))}
                  </div>
                  <p className="testimonial-text">
                    "{testimonials[currentTestimonialIndex].review}"
                  </p>
                  
                  <div className="testimonial-client-row">
                    <img 
                      className="client-avatar-photo" 
                      src={testimonials[currentTestimonialIndex].photo} 
                      alt={testimonials[currentTestimonialIndex].name} 
                    />
                    <div className="client-meta-info">
                      <strong className="client-name">{testimonials[currentTestimonialIndex].name}</strong>
                      <span className="client-event-desc">
                        {testimonials[currentTestimonialIndex].event} • {testimonials[currentTestimonialIndex].location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Testimonial Selectors */}
            <div className="testimonial-dot-selectors">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-selector-dot ${index === currentTestimonialIndex ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="premium-cta-strip-banner">
        <div className="container cta-banner-inner">
          <div className="cta-banner-text">
            <h2>Planning Your Next Event?</h2>
            <p>Receive a fully itemized, custom equipment rental quotation within 24 hours.</p>
          </div>
          <div className="cta-banner-buttons">
            <a href="#contact" className="btn-cta-primary">Request Quote</a>
            <Link to="/contact" className="btn-cta-secondary">Contact Us</Link>
          </div>
        </div>
      </section>


      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            className="portfolio-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="lightbox-modal-box">
              <button 
                type="button" 
                className="lightbox-close-btn" 
                onClick={() => setLightboxImage(null)}
                aria-label="Close details"
              >
                <FiX />
              </button>
              <img src={lightboxImage.image} alt={lightboxImage.title} />
              <div className="lightbox-details-panel">
                <span className="lightbox-tag">{lightboxImage.eventType}</span>
                <h3>{lightboxImage.title}</h3>
                <p>{lightboxImage.description}</p>
                <span className="lightbox-loc"><FiMapPin /> Located in {lightboxImage.location}</span>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="lightbox-whatsapp-action">
                  Inquire About This Setup
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Home;
