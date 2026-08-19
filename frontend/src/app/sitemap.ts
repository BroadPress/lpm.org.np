import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lpm.org.np';
  
  const pages = [
    { path: '', priority: 1.0, changefreq: 'daily' },
    { path: '/about', priority: 0.9, changefreq: 'weekly' },
    { path: '/team', priority: 0.8, changefreq: 'weekly' },
    { path: '/events', priority: 0.8, changefreq: 'daily' },
    { path: '/faq', priority: 0.7, changefreq: 'weekly' },
    { path: '/gallery', priority: 0.7, changefreq: 'weekly' },
    { path: '/contact', priority: 0.8, changefreq: 'monthly' },
    { path: '/join-now', priority: 0.6, changefreq: 'monthly' },
    { path: '/donate', priority: 0.6, changefreq: 'monthly' },
    { path: '/privacy-policy', priority: 0.6, changefreq: 'monthly' },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changefreq as any,
    priority: page.priority,
  }));
}

