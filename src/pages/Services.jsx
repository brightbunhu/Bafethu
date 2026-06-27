import { FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { services } from '../data/services.js';

function Services() {
  return (
    <>
      <Seo
        title="Event Equipment Hiring Services Gweru"
        description="Hire chairs, tables, tents and PA systems in Gweru, Midlands Province and Bulawayo for weddings, funerals, birthdays and corporate events."
      />

      <section className="page-title-section">
        <div className="container">
          <h1>OUR SERVICES & PRICES</h1>
          <p>Quality equipment at affordable prices</p>
        </div>
      </section>

      <section className="section tight">
        <div className="container service-rows">
          {services.map((service) => (
            <article className="service-row" key={service.title}>
              <img src={service.image} alt={`${service.title} setup`} />
              <div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul className="check-list">
                  {service.features.map((feature) => (
                    <li key={feature}><FiCheckCircle /> {feature}</li>
                  ))}
                </ul>
              </div>
              <aside>
                <strong>Price:</strong>
                <span>Contact us for quotation</span>
                <Link className="button primary compact" to="/contact">ENQUIRE NOW</Link>
              </aside>
            </article>
          ))}
        </div>
      </section>

      <section className="help-band">
        <div className="container help-content">
          <div>
            <h2>NEED HELP CHOOSING?</h2>
            <p>Contact our team for expert advice and the best package for your event.</p>
            <Link className="button outline light-button" to="/contact">CONTACT US</Link>
          </div>
          <img src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&h=600&fit=crop" alt="PA speakers" />
        </div>
      </section>
    </>
  );
}

export default Services;
