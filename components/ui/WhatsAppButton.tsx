"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/573123456789?text=Hola%20estoy%20interesado%20en%20sus%20servicios%20de%20obras%20y%20acabados",
      "_blank",
    );
  };

  return (
    <button
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-delay="2000"
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-40 transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          Contáctanos por WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-900"></div>
        </div>
      </div>
    </button>
  );
}
