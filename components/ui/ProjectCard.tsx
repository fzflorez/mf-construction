"use client";

import { Play, Eye } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    video?: string | null;
    featured: boolean;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      enchape: "bg-blue-500",
      pintura: "bg-green-500",
      repello: "bg-yellow-500",
      estuco: "bg-purple-500",
      remodelacion: "bg-red-500",
    };
    return colors[category] || "bg-gray-500";
  };

  const getCategoryName = (category: string) => {
    const names: { [key: string]: string } = {
      enchape: "Enchape",
      pintura: "Pintura",
      repello: "Repello",
      estuco: "Estuco",
      remodelacion: "Remodelación",
    };
    return names[category] || category;
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={index * 100}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span
            className={`${getCategoryColor(project.category)} text-white px-3 py-1 rounded-full text-xs font-medium`}
          >
            {getCategoryName(project.category)}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              Destacado
            </span>
          </div>
        )}

        {/* Video Indicator */}
        {project.video && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="bg-white/90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Play className="w-6 h-6 text-amber-600" />
            </div>
          </div>
        )}

        {/* Placeholder Image */}
        <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-amber-100 to-amber-200">
          <div className="text-center">
            <Eye className="w-12 h-12 text-amber-600 mx-auto mb-2" />
            <p className="text-amber-700 font-medium">{project.title}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-amber-600 font-medium">
            {getCategoryName(project.category)}
          </span>

          {project.video && (
            <button className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center gap-1">
              <Play className="w-4 h-4" />
              Ver video
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
