import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import Script from "next/script";

// Root Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://lpm.org.np'),
  title: {
    default: 'Life Positive Mission - Power of Positive Energy',
    template: '%s | Life Positive Mission'
  },
  description: 'Life Positive Mission (LPM) is a volunteer-driven international public charitable non-profit organization committed to building a positive, conscious, and spiritually awakened world.',
  keywords: ['Life Positive Mission', 'LPM', 'NGO Nepal', 'Volunteer Nepal', 'Spiritual Awakening', 'Positive Energy', 'Leadership Training', 'Youth Empowerment', 'Non-profit Organization Nepal'],
  authors: [{ name: 'Life Positive Mission' }],
  creator: 'Life Positive Mission',
  publisher: 'Life Positive Mission',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Life Positive Mission - Power of Positive Energy',
    description: 'Life Positive Mission (LPM) is a volunteer-driven international public charitable non-profit organization committed to building a positive, conscious, and spiritually awakened world.',
    url: 'https://lpm.org.np',
    siteName: 'Life Positive Mission',
    images: [
      {
        url: 'https://lpm.org.np/lpm-logo.png',
        width: 1200,
        height: 630,
        alt: 'Life Positive Mission - Power of Positive Energy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Life Positive Mission - Power of Positive Energy',
    description: 'Life Positive Mission (LPM) is a volunteer-driven international public charitable non-profit organization.',
    images: ['https://lpm.org.np/lpm-logo.png'],
    creator: '@lpm_nepal',
    site: '@lpm_nepal',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://lpm.org.np',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* DNS Prefetch & Preconnect for Performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>

      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
         {/* Google Analytics */}
  <Script
    src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', '${gaId}');
    `}
  </Script>
          {/* JSON-LD Structured Data - Organization Schema */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Life Positive Mission",
              "url": "https://lpm.org.np",
              "logo": "https://lpm.org.np/lpm-logo.png",
              "description": "Life Positive Mission is a volunteer-driven international public charitable non-profit organization.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+977-9841441374",
                "contactType": "customer service",
                "availableLanguage": ["English", "Nepali"]
              },
              "sameAs": [
                "https://www.facebook.com/lifepositivemission",
                "https://twitter.com/lpm_nepal",
                "https://www.instagram.com/lifepositivemission",
                "https://www.linkedin.com/company/life-positive-mission"
              ]
            }
          `}
        </Script>

        {/* Web Vitals Performance Monitoring */}
        <Script
          src="https://cdn.jsdelivr.net/npm/web-vitals@3/dist/web-vitals.iife.js"
          strategy="afterInteractive"
          id="web-vitals"
        />

      </body>
    </html>
  );
}


