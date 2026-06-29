import { motion } from 'framer-motion';
import Seo from '../components/Seo.jsx';
import { pageSeo } from '../data/seo.js';
import { business } from '../data/business.js';

function Privacy() {
  return (
    <>
      <Seo {...pageSeo.privacy} />

      <section className="premium-page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hero-eyebrow">LEGAL</span>
            <h1>Privacy Policy</h1>
            <p>How we handle your information when you use our website and services.</p>
          </motion.div>
        </div>
      </section>

      <section className="premium-section bg-light">
        <div className="container legal-content">
          <p className="legal-updated">Last updated: June 2026</p>

          <h2>1. Introduction</h2>
          <p>
            Bafethu Events & Logistics (&quot;Bafethu&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy.
            This Privacy Policy explains how we collect, use, store, and protect personal information when you visit
            our website, submit an enquiry, contact us by phone, email, or WhatsApp, or hire event equipment and
            logistics services from us.
          </p>
          <p>
            We provide event equipment rental and staging logistics across {business.coverage.join(', ')}, including
            chairs, tables, tents, PA systems, stages, lighting, decorations, and VIP furniture for weddings,
            corporate events, graduations, and other gatherings.
          </p>

          <h2>2. Information We Collect</h2>
          <p>Depending on how you interact with us, we may collect the following information:</p>
          <ul>
            <li><strong>Contact details:</strong> name, phone number, email address, and delivery or event location.</li>
            <li><strong>Event information:</strong> event type, date, guest count, equipment requirements, layout preferences, and messages you send us.</li>
            <li><strong>Communication records:</strong> enquiries submitted through our website contact form, WhatsApp messages, phone calls, and emails.</li>
            <li><strong>Website usage data:</strong> basic technical information such as browser type, device type, pages visited, and referral source, where available through standard website logs or analytics tools.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use personal information for legitimate business purposes, including to:</p>
          <ul>
            <li>Respond to enquiries and provide quotations for equipment hire.</li>
            <li>Confirm bookings, arrange delivery, setup, and collection of rented equipment.</li>
            <li>Coordinate logistics and communicate updates about your event.</li>
            <li>Process payments, deposits, and invoicing where applicable.</li>
            <li>Improve our website, services, and customer support.</li>
            <li>Comply with legal, tax, or regulatory obligations.</li>
          </ul>

          <h2>4. Legal Basis for Processing</h2>
          <p>
            We process personal information based on your consent when you submit an enquiry, our legitimate interest
            in operating and improving our business, and where necessary to perform a contract or booking with you.
          </p>

          <h2>5. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share information only where necessary with:
          </p>
          <ul>
            <li>Service providers that help us operate our website or process enquiries, such as email delivery or hosting providers.</li>
            <li>Delivery, setup, or technical staff involved in fulfilling your booking.</li>
            <li>Authorities or third parties where required by law or to protect our legal rights.</li>
          </ul>
          <p>
            Some website features, such as embedded maps or messaging links, may direct you to third-party platforms
            governed by their own privacy policies.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain personal information only for as long as needed to respond to enquiries, manage bookings,
            maintain business records, resolve disputes, and meet legal or accounting requirements. When information
            is no longer required, we take reasonable steps to delete or anonymise it.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We take reasonable administrative and technical measures to protect personal information from unauthorised
            access, loss, misuse, or disclosure. However, no method of transmission over the internet or electronic
            storage is completely secure.
          </p>

          <h2>8. Your Rights</h2>
          <p>You may request to:</p>
          <ul>
            <li>Access the personal information we hold about you.</li>
            <li>Correct inaccurate or incomplete information.</li>
            <li>Ask us to delete information where it is no longer needed, subject to legal retention requirements.</li>
            <li>Withdraw consent for marketing communications at any time.</li>
          </ul>
          <p>
            To exercise these rights, contact us using the details below. We may need to verify your identity before
            responding.
          </p>

          <h2>9. Cookies and Website Tracking</h2>
          <p>
            Our website may use essential cookies or similar technologies required for basic functionality. If analytics
            or marketing tools are added in future, this policy will be updated accordingly. You can control cookies
            through your browser settings.
          </p>

          <h2>10. Children&apos;s Privacy</h2>
          <p>
            Our services are intended for adults organising events. We do not knowingly collect personal information
            from children under 18 without appropriate consent from a parent or guardian.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
            updated revision date. Continued use of our website or services after changes are posted constitutes
            acceptance of the revised policy.
          </p>

          <h2>12. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or how we handle your data, contact:</p>
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

export default Privacy;
