"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/ui/Navbar";
import ProjectCardWide from "@/components/ui/ProjectCardWide";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { projects } from "@/data/projects";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Datos de categorías
  const categories = [
    { id: "all", label: "Todos" },
    { id: "enchape", label: "Enchapes" },
    { id: "estuco", label: "Estuco y Pintura" },
    { id: "repello", label: "Repello / Pañete" },
    { id: "obra-civil", label: "Obra Civil" },
  ];

  // Filtrar proyectos por categoría
  const displayProjects = useMemo(() => {
    if (selectedCategory === "all") {
      return projects.slice(0, 4);
    }
    return projects
      .filter((project) => {
        if (selectedCategory === "estuco" || selectedCategory === "pintura") {
          return (
            project.category === "estuco" || project.category === "pintura"
          );
        }
        // Para otras categorías, filtrar normalmente
        return project.category === selectedCategory;
      })
      .slice(0, 4);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />

      {/* Projects Section */}
      <section id="proyectos" className="py-20 bg-black/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section with Filters */}
          {/* Content */}
          <div className="flex flex-col text-white mt-5 mb-10">
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-xl lg:text-2xl font-bold mb-4"
            >
              Trabajos Realizados
            </h2>

            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="text-base lg:text-lg max-w-xl mb-8 text-white/80"
            >
              Galería de proyectos de construcción, remodelación y acabados.
              Selecciona una categoría para filtrar.
            </p>

            {/* Category Filters */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="flex flex-wrap gap-3"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2 rounded-full transition-all duration-300 text-xs cursor-pointer ${
                    selectedCategory === category.id
                      ? "bg-amber-600 text-white shadow-lg"
                      : "bg-white/10 backdrop-blur-sm text-white"
                  }`}
                  style={
                    selectedCategory === category.id
                      ? { backgroundColor: "#d97706" }
                      : { backgroundColor: "rgba(255, 255, 255, 0.1)" }
                  }
                  onMouseEnter={(e) => {
                    if (selectedCategory === category.id) {
                      return;
                    } else {
                      e.currentTarget.style.backgroundColor =
                        "rgba(255, 255, 255, 0.2)";
                      e.currentTarget.style.color = "white";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory === category.id) {
                      return;
                    } else {
                      e.currentTarget.style.backgroundColor =
                        "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.color = "white";
                    }
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayProjects.map((project, index) => (
              <ProjectCardWide
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
