// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
  //  turbopack: {
  //     root: __dirname, // forces this folder as the project root
  //   },
//   //     images: {
//   //   deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//   //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//   //   formats: ['image/webp', 'image/avif'],
//   //   minimumCacheTTL: 60,
//   //   dangerouslyAllowSVG: true,
//   //   contentDispositionType: 'attachment',
//   //   remotePatterns: [
//   //     {
//   //       protocol: 'https',
//   //       hostname: '**',
//   //     },
//   //   ],
//   // },

//   //   images: {
//   //   qualities: [75, 85, 90, 95], // Add 85 here
//   //   formats: ['image/webp', 'image/avif'],
//   //   deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//   //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//   //   minimumCacheTTL: 60,
//   // },


//   images: {
//     qualities: [75, 80, 85, 90], // Add all qualities from sizeMap
//     formats: ['image/webp'],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//   },
//   // compiler: {
//   //   removeConsole: process.env.NODE_ENV === 'production',
//   // },
//   // productionBrowserSourceMaps: false,
//   // reactStrictMode: true,
//   // modularizeImports: {
//   //   'lucide-react': {
//   //     transform: 'lucide-react/dist/esm/icons/{{member}}',
//   //   },
//   // },

// };

// export default nextConfig;


// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   turbopack: {
      root: __dirname, // forces this folder as the project root
    },
  images: {
    qualities: [75, 80, 85, 90],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;