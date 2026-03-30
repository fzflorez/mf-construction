"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-amber-200">
            {currentYear} MF | Construcción. Todos los derechos reservados.
          </p>
          <p className="text-amber-300 text-sm mt-2">
            Calidad y confianza en cada acabado
          </p>
        </div>
      </div>
    </footer>
  );
}
