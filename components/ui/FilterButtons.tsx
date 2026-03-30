"use client";

interface FilterButtonsProps {
  categories: Array<{ id: string; name: string; color: string }>;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterButtons({
  categories,
  activeFilter,
  onFilterChange,
}: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category, index) => (
        <button
          key={category.id}
          data-aos="zoom-in"
          data-aos-duration="300"
          data-aos-delay={index * 100}
          onClick={() => onFilterChange(category.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
            activeFilter === category.id
              ? "bg-amber-600 text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-amber-50 border border-gray-200"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
