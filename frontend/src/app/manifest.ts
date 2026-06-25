import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Life Positive Mission',
    short_name: 'LPM',
    description: 'Power of Positive Energy - Volunteer-driven non-profit organization',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f97316',
    icons: [
      {
        src: '/images/brand/lpm-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/brand/logo.jpg',
        sizes: '512x512',
        type: 'image/jpg',
      },
    ],
  };
}