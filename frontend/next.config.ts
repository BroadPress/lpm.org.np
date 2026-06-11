import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 80, 85, 90], // Add all qualities from sizeMap
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // compiler: {
  //   removeConsole: process.env.NODE_ENV === 'production',
  // },
  // productionBrowserSourceMaps: false,
  // reactStrictMode: true,
  // modularizeImports: {
  //   'lucide-react': {
  //     transform: 'lucide-react/dist/esm/icons/{{member}}',
  //   },
  // },

};

export default nextConfig;
