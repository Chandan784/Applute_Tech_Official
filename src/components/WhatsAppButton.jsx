"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "916370302039";

  const message = encodeURIComponent(
    "Hi Applute Technologies, I am interested in your software development services."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat on WhatsApp"
    >

      <span className="whatsapp-ping" />

      <FaWhatsapp />

      <span className="whatsapp-tooltip">
        Chat with us
      </span>

    </a>
  );
}