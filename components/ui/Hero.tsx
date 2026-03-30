"use client";

import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  const whatsappContact = () => {
    window.open("https://wa.me/573123456789", "_blank");
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-orange-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div data-aos="fade-up" data-aos-duration="800">
            <h1 className="text-5xl md:text-7xl font-bold text-amber-600 mb-6">
              MF Obras & Acabados
            </h1>
          </div>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <h2 className="text-2xl md:text-3xl text-amber-900 mb-8 font-light">
              Calidad en cada acabado
            </h2>
          </div>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              Especialistas en enchapes, estuco, pintura, repello y
              remodelaciones. Transformamos tus espacios con excelencia y
              profesionalismo.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={whatsappContact}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 flex items-center gap-3 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Contactar por WhatsApp
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("proyectos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105"
            >
              Ver Proyectos
            </button>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">10+</div>
              <div className="text-gray-600 mt-2">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">100+</div>
              <div className="text-gray-600 mt-2">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">100%</div>
              <div className="text-gray-600 mt-2">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">5</div>
              <div className="text-gray-600 mt-2">Servicios Especializados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
