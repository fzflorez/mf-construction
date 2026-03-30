"use client";

import { Award, Users, Clock, CheckCircle } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Calidad Garantizada",
      description:
        "Materiales premium y acabados profesionales que duran en el tiempo.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Equipo Experto",
      description:
        "Profesionales certificados con más de 10 años de experiencia.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Puntualidad",
      description: "Cumplimiento estricto de tiempos de entrega y cronogramas.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Satisfacción Total",
      description: "Resultados que superan expectativas y clientes felices.",
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-600 mb-6">
            Sobre MF Obras & Acabados
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Somos una empresa dedicada a la excelencia en obras y acabados,
            transformando espacios con pasión, profesionalismo y atención al
            detalle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div data-aos="fade-right" data-aos-duration="800">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nuestra Misión
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              En MF Obras & Acabados, nuestra misión es proporcionar soluciones
              integrales de construcción y remodelación que combinen calidad
              estética y funcionalidad. Cada proyecto es una oportunidad para
              demostrar nuestro compromiso con la excelencia y superar las
              expectativas de nuestros clientes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Especializados en enchapes, estuco, pintura, repello y
              remodelaciones completas, utilizamos técnicas modernas y
              materiales de primera calidad para garantizar resultados duraderos
              y espectaculares.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  10+
                </div>
                <div className="text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  100+
                </div>
                <div className="text-gray-600">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600">Garantía de Calidad</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Soporte al Cliente</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className="text-2xl font-bold text-center text-gray-900 mb-12"
          >
            Por Qué Elegirnos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 100}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-amber-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
