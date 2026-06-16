'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  if (pathSegments.length === 0) {
    return null;
  }

  // JSON-LD for Breadcrumbs
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://lpm.org.np/',
      },
      ...pathSegments.map((segment, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        item: `https://lpm.org.np/${pathSegments.slice(0, index + 1).join('/')}`,
      })),
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      
      {/* Visual Breadcrumbs */}
      <nav className="bg-gray-50 dark:bg-gray-900/50 py-3 px-4 rounded-lg mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
            >
              <Home size={14} />
              <span>Home</span>
            </Link>
          </li>
          
          {pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const isLast = index === pathSegments.length - 1;
            const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

            return (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight size={14} className="text-gray-400" />
                {isLast ? (
                  <span className="font-medium text-gray-900 dark:text-white">{label}</span>
                ) : (
                  <Link
                    href={href}
                    className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}