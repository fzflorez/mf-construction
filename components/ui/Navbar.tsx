"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const whatsappContact = () => {
    window.open("https://wa.me/573123456789", "_blank");
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-2xl font-bold text-amber-600">
              MF Obras & Acabados
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Proyectos
              </button> */}
              {/* <button
                onClick={() => scrollToSection("sobre-mi")}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Sobre Mí
              </button> */}
              <button
                onClick={whatsappContact}
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Contacto
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-600 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {/* <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Proyectos
              </button> */}
              {/* <button
                onClick={() => scrollToSection("sobre-mi")}
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Sobre Mí
              </button> */}
              <button
                onClick={whatsappContact}
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-base font-medium transition-colors flex items-center gap-2 w-full justify-center mt-4"
              >
                <Phone className="w-4 h-4" />
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
