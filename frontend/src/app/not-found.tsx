import Link from 'next/link';
import { ArrowLeft, Home, Mail, Sparkles } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export default function NotFound() {
  return (
    <main className="fixed inset-0 z-[999] overflow-auto bg-white dark:bg-gray-950">
      <section className="relative flex min-h-full overflow-hidden border-b border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.14),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.12),_transparent_30%)]" />
        <div className="relative mx-auto flex min-h-full w-full max-w-5xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              404
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
              The page you are looking for does not exist.
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-700 dark:text-gray-300 sm:text-lg">
              The link may be broken, the page may have been moved, or the address may have been typed
              incorrectly. You can return to the homepage or use one of the links below to continue
              browsing the website.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
              >
                <Home size={16} />
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-orange-300 hover:text-orange-600 dark:border-gray-700 dark:text-gray-200 dark:hover:border-orange-700 dark:hover:text-orange-300"
              >
                <Mail size={16} />
                Contact Support
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <ArrowLeft size={16} />
                Go Back
              </Link>
            </div>

            <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                Quick Links
              </p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-gray-700 underline-offset-4 transition-colors hover:text-orange-600 hover:underline dark:text-gray-300 dark:hover:text-orange-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
