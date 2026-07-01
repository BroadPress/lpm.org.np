'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Navbar from './Navbar';
import TopBar from './TopBar';
import BottomNav from './BottomNav';
import Footer from './Footer';
// import Breadcrumbs from '@/components/seo/Breadcrumbs';

const MobileSidebar = dynamic(() => import('./Sidebar').then((mod) => mod.MobileSidebar), {
  loading: () => <div className="w-[280px] h-screen bg-gray-100 dark:bg-gray-800 animate-pulse" />
});

const pageHeroConfig: Record<string, { title: string; bgImage: string }> = {
  '/': { title: 'Life Positive Mission', bgImage: '/images/hero/1.jpg' },
  '/about': { title: 'About Us', bgImage: '/images/about/hero.jpg' },
  '/team': { title: 'Our Team', bgImage: '/images/team/hero.jpg' },
  '/events': { title: 'Our Events', bgImage: '/images/events/hero.jpg' },
  '/faq': { title: 'FAQs', bgImage: '/images/gallery/9.jpg' },
  '/gallery': { title: 'Our Gallery', bgImage: '/images/gallery/1.jpg' },
  '/contact': { title: 'Contact Us', bgImage: '/images/contact/hero.jpg' },
  '/join-now': { title: 'Join Now', bgImage: '/images/joinnow/1.jpg' },
  '/donate': { title: 'Donate Now', bgImage: '/images/donate/1.jpg' },
  '/terms-and-terminologies': { title: 'Terms and Terminologies', bgImage: '/images/privacy/privacyhero.jpg' },
  '/privacy-policy': { title: 'Privacy Policy', bgImage: '/images/privacy/privacyhero.jpg' },
};

const TOPBAR_H = 40; // px
const NAVBAR_H = 64; // px

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isEventDetailPage = pathname.startsWith('/events/') && pathname !== '/events';

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroConfig = pageHeroConfig[pathname as keyof typeof pageHeroConfig] || pageHeroConfig['/'];
  const isHome = pathname === '/';
  const showPageHero = !isHome;
  const showTopBar = !scrolled;
  const heroPaddingClass = showPageHero ? 'pt-16 md:pt-[104px]' : '';

  // Every route in pageHeroConfig renders a full-bleed hero image behind
  // the fixed bars (home included), so the bars should ride transparent
  // over it until the user scrolls — not just on '/'.
  const barsAreTransparent = !scrolled;

  if (isEventDetailPage) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 overflow-x-hidden">
        <main>{children}</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 overflow-x-hidden">
      <MobileSidebar
        collapsed={false}
        setCollapsed={() => {}}
        isMobileOpen={isMobileOpen}
        onMobileClose={() => setIsMobileOpen(false)}
      />

      {/* Fixed bar stack: TopBar (desktop, pre-scroll) + Navbar. Both
          ride transparent over every page's hero image until scrolled,
          then switch solid and the TopBar disappears entirely. */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnimatePresence>
          {showTopBar && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: TOPBAR_H, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="hidden overflow-hidden md:block"
            >
              <TopBar transparent={barsAreTransparent} />
            </motion.div>
          )}
        </AnimatePresence>
        <Navbar
          onMenuClick={() => setIsMobileOpen(true)}
          isTransparent={barsAreTransparent}
        />
      </div>

      <main className="pb-16 md:pb-0">
        {showPageHero ? (
          // Inner-page hero: image starts at y=0, fixed bars float
          // transparently on top of it (same treatment as home), and
          // the section itself is tall enough to feel like a real hero
          // rather than a thin banner strip.
          <section
            className={`relative flex items-center overflow-hidden ${heroPaddingClass}`}
            style={{ minHeight: '65vh' }}
          >
            <div className="absolute inset-0">
              <OptimizedImage
                src={heroConfig.bgImage}
                alt={heroConfig.title}
                type="hero"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            </div>

            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {heroConfig.title}
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mb-4" />
              </motion.div>
            </div>
          </section>
        ) : (
          // Home: HeroSection itself renders full-bleed from y=0 and
          // sits behind the fixed transparent bars — no spacer div,
          // no padding gap. The component is responsible for its own
          // top padding for the text content (see HeroSection.tsx).
          <div />
        )}

        <div className={showPageHero ? '' : ''}>

          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>

        <Footer />
      </main>

      <div className="md:hidden">
        <BottomNav onMoreClick={() => setIsMobileOpen(true)} />
      </div>
    </div>
  );
}
