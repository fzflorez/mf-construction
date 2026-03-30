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
    window.open("https://wa.me/573167043836", "_blank");
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-2xl font-bold text-amber-600">
              MF | Construcción
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={whatsappContact}
                className="bg-transparent text-gray-900 border border-gray-300 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer"
                style={{
                  backgroundColor: "transparent",
                  color: "#111827",
                  borderColor: "#d1d5db",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#6b7280";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#111827";
                }}
              >
                <Phone className="w-4 h-4" />
                Contactar
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-600 p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={whatsappContact}
                className="bg-transparent text-gray-900 border border-gray-300 px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 flex items-center gap-2 w-full justify-center mt-4"
                style={{
                  backgroundColor: "transparent",
                  color: "#111827",
                  borderColor: "#d1d5db",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#6b7280";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#111827";
                }}
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
