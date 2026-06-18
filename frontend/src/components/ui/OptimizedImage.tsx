'use client';

import Image from 'next/image';

type OptimizedImageType = 'hero' | 'LPM' | 'card' | 'avatar' | 'gallery' | 'thumbnail' | 'footer';

interface OptimizedImageProps {
  src: string;
  alt: string;
  type?: OptimizedImageType;
  className?: string;
  priority?: boolean;
  fill?: boolean; 
  width?: number;
  height?: number;
}

const sizeMap: Record<OptimizedImageType, { sizes: string; quality: number }> = {
  hero: {
    sizes: '100vw',
    quality: 90,
  },
  LPM: {
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    quality: 85,
  },
  card: {
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    quality: 85,
  },
  avatar: {
    sizes: '128px',
    quality: 80,
  },
  gallery: {
    sizes: '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw',
    quality: 85,
  },
  thumbnail: {
    sizes: '150px',
    quality: 75,
  },
  footer: {
    sizes: '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw',
    quality: 80,
  },
};

export default function OptimizedImage({ 
  src, 
  alt, 
  type = 'card', 
  className = '',
  priority = false,
  fill = true, // Default to true
  ...restProps
}: OptimizedImageProps) {
  const config = sizeMap[type];
  
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={config.sizes}
      quality={config.quality}
      priority={priority}
      className={`object-cover ${className}`}
      {...restProps}
    />
  );
}

