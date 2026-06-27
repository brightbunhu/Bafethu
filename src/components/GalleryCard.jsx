import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';

function GalleryCard({ project }) {
  return (
    <motion.article
      className="gallery-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
    >
      <img src={project.image} alt={`${project.eventType} project in ${project.location}`} />
      <div className="gallery-card-body">
        <span className="eyebrow">{project.eventType}</span>
        <h3>{project.location}</h3>
        <p>{project.description}</p>
        <small>
          <FiMapPin /> {project.location}
        </small>
      </div>
    </motion.article>
  );
}

export default GalleryCard;
