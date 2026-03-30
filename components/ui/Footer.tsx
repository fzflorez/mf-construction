"use client";

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappContact = () => {
    window.open("https://wa.me/573123456789", "_blank");
  };

  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div data-aos="fade-up" data-aos-duration="600">
            <h3 className="text-2xl font-bold mb-4 text-amber-100">
              MF Obras & Acabados
            </h3>
            <p className="text-amber-200 mb-6 leading-relaxed">
              Especialistas en transformar espacios con calidad, profesionalismo
              y atención al detalle. Más de 10 años de experiencia en el sector.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => window.open("#", "_blank")}
                className="text-amber-200 hover:text-white transition-colors"
                aria-label="Social media"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <h4 className="text-lg font-semibold mb-4 text-amber-100">
              Información de Contacto
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-amber-200">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+57 312 345 6789</span>
              </div>
              <div className="flex items-center gap-3 text-amber-200">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@mfobrasyacabados.com</span>
              </div>
              <div className="flex items-center gap-3 text-amber-200">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
            <h4 className="text-lg font-semibold mb-4 text-amber-100">
              Acciones Rápidas
            </h4>
            <div className="space-y-3">
              <button
                onClick={whatsappContact}
                className="w-full flex items-center gap-3 text-amber-200 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Contactar por WhatsApp</span>
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("proyectos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full text-left text-amber-200 hover:text-white transition-colors"
              >
                Ver Proyectos
              </button>
              {/* <button
                onClick={() =>
                  document
                    .getElementById("sobre-mi")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full text-left text-amber-200 hover:text-white transition-colors"
              >
                Sobre Nosotros
              </button> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
          className="border-t border-amber-800 mt-8 pt-8 text-center"
        >
          <p className="text-amber-200">
            {currentYear} MF Obras & Acabados. Todos los derechos reservados.
          </p>
          <p className="text-amber-300 text-sm mt-2">
            Calidad y confianza en cada acabado
          </p>
        </div>
      </div>
    </footer>
  );
}
