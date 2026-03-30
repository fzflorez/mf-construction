import { useState, useEffect } from 'react';

interface ProgressiveImageLoaderProps {
  images: string[];
  currentIndex: number;
  onImageLoad: (index: number) => void;
}

export default function ProgressiveImageLoader({ 
  images, 
  currentIndex, 
  onImageLoad 
}: ProgressiveImageLoaderProps) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [preloadingIndex, setPreloadingIndex] = useState<number | null>(null);

  // Precargar imagen siguiente
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    
    // Precargar siguiente y anterior si no están cargadas
    if (!loadedImages.has(nextIndex)) {
      setPreloadingIndex(nextIndex);
      const img = new window.Image();
      img.src = images[nextIndex];
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(nextIndex));
        setPreloadingIndex(null);
      };
    }
    
    if (!loadedImages.has(prevIndex)) {
      const img = new window.Image();
      img.src = images[prevIndex];
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(prevIndex));
      };
    }
  }, [currentIndex, images, loadedImages]);

  return (
    <div className="hidden">
      {Array.from(loadedImages).map(index => (
        <img
          key={index}
          src={images[index]}
          alt={`Preloaded ${index}`}
          onLoad={() => onImageLoad(index)}
          style={{ display: 'none' }}
        />
      ))}
    </div>
  );
}
