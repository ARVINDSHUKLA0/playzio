"use client";

import React from "react";
import '../componentStyle/WhatsAppButton.css'

const WhatsAppButton = () => {
  const message =
    "Hi Playzio, I visited your website and would like to know more about your services.";

  const whatsappUrl = `https://wa.me/918001218002?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with Playzio on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;