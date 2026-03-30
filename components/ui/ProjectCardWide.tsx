"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

interface ProjectCardWideProps {
  project: {
    id: number;
    title: string;
    description: string;
    category: string;
    video: string;
    images: string[];
    featured: boolean;
  };
  index: number;
}

export default function ProjectCardWide({
  project,
  index,
}: ProjectCardWideProps) {
  const [showModal, setShowModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay={index * 100}
        className="bg-stone-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 group border border-stone-700"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          border: "1px solid #374151",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 35px 60px -15px rgba(0, 0, 0, 0.3)";
          e.currentTarget.style.border = "1px solid #d97706";
          // Cambiar color del título
          const titleElement = e.currentTarget.querySelector("h3");
          if (titleElement) {
            titleElement.style.color = "#d97706";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow =
            "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
          e.currentTarget.style.border = "1px solid #374151";
          // Restaurar color del título
          const titleElement = e.currentTarget.querySelector("h3");
          if (titleElement) {
            titleElement.style.color = "white";
          }
        }}
      >
        {/* Video Section - Top Half */}
        <div className="relative aspect-video bg-black">
          <video
            className="w-full h-full object-cover"
            poster={project.images[0]}
            muted
            preload="metadata"
            playsInline
          >
            <source src={project.video} type="video/mp4" />
          </video>

          {/* Overlay visual */}
          <div
            className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300"
            style={{ opacity: 0 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0";
            }}
          />

          {/* BOTÓN PLAY */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowVideoModal(true);
              }}
              className="bg-amber-600/90 rounded-full p-4 transform transition-transform shadow-lg cursor-pointer"
              style={{ transform: "scale(1)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Play className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Content Section - Bottom Half */}
        <div className="p-6">
          {/* Project Info */}
          <div className="mb-4">
            <h3
              className="text-base lg:text-lg font-semibold text-white mb-3 transition-colors"
              style={{ color: "white" }}
            >
              {project.title}
            </h3>
            {project.description && (
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
            )}
          </div>

          {/* Ver Fotos Button */}
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 text-xs lg:text-sm font-medium rounded-lg cursor-pointer transition-all duration-300"
            style={{ color: "rgba(255, 255, 255, 0.5)" }} // Gris opaco
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white"; // Blanco total en hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)"; // Vuelve a gris opaco
            }}
          >
            <Camera className="w-4 h-4" />
            Ver fotos
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-xl max-w-6xl max-h-[90vh] w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">
                {project.title} - Galería Completa
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="relative h-[calc(90vh-120px)]">
              {/* Carousel Container */}
              <div className="relative h-full overflow-hidden rounded-lg">
                {/* Main Image Display */}
                <div className="relative h-full flex items-center justify-center bg-gray-100">
                  <Image
                    src={project.images[currentSlide]}
                    alt={`${project.title} - Imagen ${currentSlide + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    priority={currentSlide === 0}
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white transition-all duration-200 shadow-lg"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white transition-all duration-200 shadow-lg"
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                  </button>
                </div>

                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 rounded-full text-sm font-medium">
                  {currentSlide + 1} / {project.images.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {project.images.map((image, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={() => goToSlide(imgIndex)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                      imgIndex === currentSlide
                        ? "ring-2 ring-amber-500 ring-offset-2"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${imgIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideoModal && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="bg-white rounded-xl max-w-6xl max-h-[90vh] w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">
                {project.title} - Video
              </h3>
              <button
                onClick={() => setShowVideoModal(false)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Video Modal Content */}
            <div className="relative h-[calc(90vh-120px)]">
              {/* Video Container */}
              <div className="relative h-full flex items-center justify-center bg-gray-100 rounded-lg">
                <video
                  className="w-full h-full object-contain"
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                >
                  <source src={project.video} type="video/mp4" />
                  Tu navegador no soporta el video.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
