import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { pageSeo } from '../data/seo.js';
import { business } from '../data/business.js';

function Terms() {
  return (
    <>
      <Seo {...pageSeo.terms} />

      <section className="premium-page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hero-eyebrow">LEGAL</span>
            <h1>Terms &amp; Conditions</h1>
            <p>Please read these terms before booking event equipment or logistics services with us.</p>
          </motion.div>
        </div>
      </section>

      <section className="premium-section bg-light">
        <div className="container legal-content">
          <p className="legal-updated">Last updated: June 2026</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the Bafethu Events &amp; Logistics website and
            any enquiry, quotation, or booking for event equipment hire and related logistics services provided by
            {` ${business.name}`} (&quot;Bafethu&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
          </p>
          <p>
            By submitting an enquiry, confirming a booking, or using our services, you agree to these Terms. If you
            do not agree, please do not use our website or services.
          </p>

          <h2>2. Services We Provide</h2>
          <p>
            Bafethu provides rental of event equipment and associated logistics, including but not limited to chairs,
            tables, tents, PA systems, stages, lighting, decorations, and VIP furniture. Services may also include
            delivery, setup, technical support, and collection within our operating areas, including{' '}
            {business.coverage.join(', ')}.
          </p>
          <p>
            Equipment availability, pricing, and service scope are confirmed in writing or by agreed communication
            at the time of booking.
          </p>

          <h2>3. Enquiries and Bookings</h2>
          <ul>
            <li>All quotations are estimates unless expressly confirmed as final pricing.</li>
            <li>A booking is confirmed only once availability is verified and any required deposit or agreement is accepted.</li>
            <li>You must provide accurate event details, including date, venue, access instructions, and equipment requirements.</li>
            <li>We reserve the right to decline bookings where equipment is unavailable, access is unsafe, or payment terms are not met.</li>
          </ul>

          <h2>4. Pricing and Payment</h2>
          <ul>
            <li>Final pricing depends on equipment selected, quantity, duration of hire, delivery distance, setup requirements, and event date.</li>
            <li>A deposit may be required to secure your booking. The balance is due as agreed before or on the event date.</li>
            <li>Late payment may result in cancellation, withholding of equipment, or additional charges.</li>
            <li>Quoted prices may exclude transport beyond agreed zones, overtime, power supply, venue fees, or special custom requests unless stated otherwise.</li>
          </ul>

          <h2>5. Delivery, Setup, and Collection</h2>
          <ul>
            <li>Delivery and collection times are arranged in advance and depend on venue access and scheduling.</li>
            <li>The client must ensure safe and timely access to the venue for loading, setup, and collection.</li>
            <li>Delays caused by restricted access, incomplete venue readiness, or client unavailability may incur additional charges.</li>
            <li>Setup services are limited to the scope agreed at booking. Major layout changes on the day may be subject to extra fees or may not be possible.</li>
          </ul>

          <h2>6. Client Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Use rented equipment only for its intended purpose and in a lawful manner.</li>
            <li>Protect equipment from theft, vandalism, fire, water damage, and misuse during the hire period.</li>
            <li>Ensure adequate supervision at the event venue, especially for tents, stages, electrical equipment, and structural setups.</li>
            <li>Obtain any venue permissions, permits, or power arrangements required for the event.</li>
            <li>Notify us immediately of any damage, loss, malfunction, or safety concern involving hired equipment.</li>
          </ul>

          <h2>7. Damage, Loss, and Security Deposits</h2>
          <p>
            All equipment remains the property of Bafethu during the hire period. You are responsible for loss,
            theft, or damage beyond normal wear and tear. We may require a refundable security deposit, which may
            be used to cover repair or replacement costs where applicable.
          </p>

          <h2>8. Cancellations and Postponements</h2>
          <ul>
            <li>Cancellation or postponement requests must be made in writing or by confirmed communication as soon as possible.</li>
            <li>Deposits may be non-refundable depending on how close the cancellation is to the event date and whether equipment has been reserved or mobilised.</li>
            <li>If we cancel due to circumstances beyond our control, we will endeavour to offer rescheduling or a refund of amounts paid for undelivered services.</li>
          </ul>

          <h2>9. Weather and Force Majeure</h2>
          <p>
            We are not liable for delays or service interruptions caused by events outside our reasonable control,
            including severe weather, power failures, road closures, civil unrest, or other force majeure events.
            Tent and outdoor setups remain subject to safe weather conditions, and we may advise changes where safety
            is at risk.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Bafethu shall not be liable for indirect, incidental, or
            consequential losses, including loss of profit, loss of enjoyment, or third-party claims arising from
            use of hired equipment or delays in service.
          </p>
          <p>
            Our total liability for any claim relating to a booking shall not exceed the amount paid to us for that
            specific booking, except where liability cannot be excluded by law.
          </p>

          <h2>11. Website Use</h2>
          <p>
            Content on this website, including images, descriptions, and project showcases, is provided for general
            information. We do not guarantee that website content is error-free or that the site will be uninterrupted
            at all times. Unauthorised use of website content, branding, or images is prohibited.
          </p>

          <h2>12. Privacy</h2>
          <p>
            Personal information collected through enquiries and bookings is handled in accordance with our{' '}
            <Link to="/privacy">Privacy Policy</Link>.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Zimbabwe. Any disputes shall first be addressed through good-faith
            negotiation, and where necessary, through appropriate courts or tribunals in Zimbabwe.
          </p>

          <h2>14. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Updated Terms will be posted on this page. Bookings confirmed
            before an update will generally remain subject to the Terms in effect at the time of confirmation unless
            otherwise agreed.
          </p>

          <h2>15. Contact Information</h2>
          <p>For questions about these Terms or to discuss a booking, contact:</p>
          <ul>
            <li><strong>Business:</strong> {business.name}</li>
            <li><strong>Address:</strong> {business.location}</li>
            <li><strong>Phone:</strong> {business.phones.join(' / ')}</li>
            <li><strong>Email:</strong> {business.email}</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Terms;
