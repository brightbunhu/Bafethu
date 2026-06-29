import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiMapPin, FiX } from 'react-icons/fi';
import Seo from '../components/Seo.jsx';
import { projects } from '../data/projects.js';
import { business, WHATSAPP_NUMBER } from '../data/business.js';

const categories = ['All', 'Weddings', 'Corporate', 'Church', 'Graduation', 'Birthday', 'Funeral'];

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }
    return projects.filter((project) => project.eventType === activeCategory);
  }, [activeCategory]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Bafethu Events & Logistics, I am interested in one of your event setups.'
  )}`;

  return (
    <>
      <Seo
        title="Bafethu Events done projects | Events Staging Gallery"
        description="View our extensive portfolio of completed events. Large-scale corporate meetings, church gatherings, graduation ceremonies, and weddings in Zimbabwe."
      />

      {/* Page Hero */}
      <section className="premium-page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hero-eyebrow">PORTFOLIO SHOWCASE</span>
            <h1>Our Completed Projects</h1>
            <p>A curated look at weddings, conferences, church assemblies, and ceremonies we have staged.</p>
          </motion.div>
        </div>
      </section>

      {/* Projects Portfolio Section */}
      <section className="premium-section">
        <div className="container">
          {/* Filtering Tabs */}
          <div className="portfolio-filter-buttons centered-filters" role="tablist" aria-label="Project categories">
            <div className="filter-header-label">
              <FiFilter />
              <span>Event Categories</span>
            </div>
            <div className="filter-buttons-scroll-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`filter-tab-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout */}
          <motion.div 
            className="portfolio-masonry-grid"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="portfolio-item-card"
                  onClick={() => setLightboxImage(project)}
                >
                  <div className="portfolio-card-img-wrapper">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="portfolio-card-hover-overlay">
                      <div className="overlay-content-block">
                        <span className="overlay-tag">{project.eventType}</span>
                        <h4>{project.title}</h4>
                        <span className="overlay-loc"><FiMapPin /> {project.location}</span>
                        <span className="overlay-action-btn">View Staging Details</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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

export default Projects;
