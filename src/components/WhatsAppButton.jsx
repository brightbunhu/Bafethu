import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_NUMBER, business } from '../data/business.js';

function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <a
      className="whatsapp-float"
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Book Bafethu Events on WhatsApp"
      title="Book on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;
