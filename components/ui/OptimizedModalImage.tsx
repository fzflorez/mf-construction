import Image from 'next/image';
import { useState } from 'react';

interface OptimizedModalImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function OptimizedModalImage({
  src,
  alt,
  className = '',
  priority = false,
}: OptimizedModalImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-pulse">
            <div className="w-12 h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-contain transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setError(true);
          setIsLoaded(true);
        }}
        loading={priority ? 'eager' : 'lazy'}
      />
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <div className="text-gray-500">Error al cargar imagen</div>
            <button 
              onClick={() => {
                setError(false);
                setIsLoaded(false);
              }}
              className="mt-2 px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
            >
              Reintentar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
