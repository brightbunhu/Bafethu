import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function ServiceCard({ service, detailed = false }) {
  return (
    <motion.article
      className="service-card"
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="service-image-wrapper">
        <img src={service.image} alt={`${service.title} setup`} />
        <div className="service-overlay">
          <FiArrowRight />
        </div>
      </div>
      <div className="service-card-body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        {detailed && (
          <ul className="feature-list">
            {service.features.map((feature) => (
              <li key={feature}>
                <FiCheckCircle /> {feature}
              </li>
            ))}
          </ul>
        )}
        <span className="price-label">{service.price}</span>
        <Link className="button outline compact" to="/contact">
          {detailed ? 'Enquire Now' : 'View Details'}
        </Link>
      </div>
    </motion.article>
  );
}

export default ServiceCard;
