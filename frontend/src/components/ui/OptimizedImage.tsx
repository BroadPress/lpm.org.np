'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string; // ← Make it customizable
  quality?: number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  onError?: () => void;
  fallbackSrc?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  fill = true,
  width,
  height,
  sizes, // ← Allow passing custom sizes
  quality = 85,
  objectFit = 'cover',
  onError,
  fallbackSrc,
  ...restProps
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  // Determine default sizes based on common use cases
  const getDefaultSizes = () => {
    if (sizes) return sizes; // Use custom if provided
    
    // Default based on className patterns
    if (className?.includes('w-full') || className?.includes('w-screen')) {
      return '100vw';
    }
    if (className?.includes('w-1/2') || className?.includes('w-2/4')) {
      return '50vw';
    }
    if (className?.includes('w-1/3') || className?.includes('w-2/6')) {
      return '33vw';
    }
    if (className?.includes('w-1/4') || className?.includes('w-2/8')) {
      return '25vw';
    }
    // For gallery, hero, etc.
    return '100vw';
  };

  const finalSizes = getDefaultSizes();

  const handleError = useCallback(() => {
    if (fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
    onError?.();
  }, [fallbackSrc, onError]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  if (fill) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <Image
          src={imgSrc}
          alt={alt}
          fill
          sizes={finalSizes}
          quality={quality}
          priority={priority}
          className={`object-${objectFit} transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onError={handleError}
          onLoad={handleLoad}
          {...restProps}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg" />
        )}
      </div>
    );
  }

  if (!width || !height) {
    console.warn('OptimizedImage: width and height are required when fill is false');
    return null;
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={finalSizes}
        quality={quality}
        priority={priority}
        className={`object-${objectFit} transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onError={handleError}
        onLoad={handleLoad}
        {...restProps}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg" />
      )}
    </div>
  );
}