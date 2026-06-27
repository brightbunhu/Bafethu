import { FiCheckCircle, FiMapPin, FiSettings, FiShield, FiTruck, FiUsers } from 'react-icons/fi';
import Seo from '../components/Seo.jsx';
import { business } from '../data/business.js';

const values = [
  { icon: <FiTruck />, title: 'Reliability', text: 'We deliver equipment on time, every time.' },
  { icon: <FiSettings />, title: 'Quality', text: 'We provide clean, well maintained event equipment.' },
  { icon: <FiShield />, title: 'Affordability', text: 'Competitive prices for every budget.' },
  { icon: <FiUsers />, title: 'Professionalism', text: 'We handle your details from booking to completion.' }
];

function About() {
  return (
    <>
      <Seo
        title="About Bafethu Events & Logistics"
        description="Learn about Bafethu Events & Logistics, a professional event equipment hire company based in Mkoba 3, Gweru, serving Midlands Province and Bulawayo."
      />

      <section className="page-hero compact-hero">
        <div className="container">
          <h1>About Bafethu Events & Logistics</h1>
        </div>
      </section>

      <section className="section tight">
        <div className="container about-intro">
          <div>
            <h2>About Bafethu Events & Logistics</h2>
            <p>
              Bafethu Events & Logistics is a professional event equipment hire company
              based in Gweru, Zimbabwe. We provide reliable and affordable event solutions
              for weddings, funerals, birthdays, corporate events and community gatherings.
            </p>
            <p>
              Our mission is to make every event successful by providing quality equipment
              and professional service.
            </p>
          </div>
          <img className="arched-media" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop" alt="Bafethu event setup" />
        </div>
      </section>

      <section className="section soft-panel">
        <div className="container">
          <div className="section-heading centered">
            <h2>Our Values</h2>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <span>{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="coverage-panel">
        <div className="container">
          <h2>We Cover</h2>
          <div className="coverage-list">
            {business.coverage.map((area) => (
              <span key={area}><FiMapPin /> {area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container offer-grid">
          <div>
            <h2>What We Offer</h2>
            <ul className="check-list">
              <li><FiCheckCircle /> Chairs Hiring</li>
              <li><FiCheckCircle /> Tables Hiring</li>
              <li><FiCheckCircle /> Tents Hiring</li>
              <li><FiCheckCircle /> PA System Hiring</li>
              <li><FiCheckCircle /> Event Setup</li>
              <li><FiCheckCircle /> Delivery</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop" alt="Stacked event chairs" />
        </div>
      </section>
    </>
  );
}

export default About;
