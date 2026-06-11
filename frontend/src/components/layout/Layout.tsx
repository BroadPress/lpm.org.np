'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import OptimizedImage from '@/components/ui/OptimizedImage';

// Dynamic imports for performance
const DesktopSidebar = dynamic(() => import('./Sidebar').then((mod) => mod.DesktopSidebar), {
  loading: () => <div className="w-[190px] h-screen bg-gray-100 dark:bg-gray-800 animate-pulse" />
});
const MobileSidebar = dynamic(() => import('./Sidebar').then((mod) => mod.MobileSidebar), {
  loading: () => <div className="w-[280px] h-screen bg-gray-100 dark:bg-gray-800 animate-pulse" />
});
const Navbar = dynamic(() => import('./Navbar'), {
  loading: () => <div className="h-14 bg-white dark:bg-gray-900 animate-pulse" />
});
const BottomNav = dynamic(() => import('./BottomNav'), {
  loading: () => <div className="h-16 bg-white dark:bg-gray-900 animate-pulse" />
});
const Footer = dynamic(() => import('./Footer'), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse" />
});

// Page metadata for dynamic hero sections
const pageHeroConfig: Record<string, { title: string;  bgImage: string }> = {
  '/': {
    title: 'Life Positive Mission',
    bgImage: '/slider/1.jpg'
  },
  '/about': {
    title: 'About Us',
    bgImage: '/about/hero.jpg'
  },
  '/team': {
    title: 'Our Team',
    bgImage: '/team/hero.jpg'
  },
  '/events': {
    title: 'Our Events',
    bgImage: '/events/hero.jpg'
  },
   '/faq': {
    title: 'FAQs',
    bgImage: '/gallery/9.jpg'
  },
   '/gallery': {
    title: 'Our Gallery',
    bgImage: '/gallery/1.jpg'
  },
     '/contact': {
    title: 'Our Contact',
    bgImage: '/1.jpg'
  },
    '/join-now': {
    title: 'join now',
    bgImage: '/1.jpg'
  }, 
   '/donate': {
    title: 'Donate Now',
    bgImage: '/1.jpg'
  },

 


};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const pathname = usePathname();

  // Close mobile sidebar on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Handle scroll for navbar transparency effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsHeroVisible(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSidebar = isDesktop || isTablet;
  const sidebarWidth = collapsed ? 60 : 190;
  
  // Get current page hero config
  const heroConfig = pageHeroConfig[pathname as keyof typeof pageHeroConfig] || pageHeroConfig['/'];
  
  // Check if current page should show hero (not home because home has its own hero)
  const showPageHero = pathname !== '/';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Desktop Sidebar */}
      {showSidebar && (
        <DesktopSidebar 
          collapsed={collapsed} 
          setCollapsed={setCollapsed} 
          isMobileOpen={false} 
          onMobileClose={() => {}}
        />
      )}

      {/* Mobile Sidebar */}
      <MobileSidebar 
        collapsed={false} 
        setCollapsed={() => {}} 
        isMobileOpen={isMobileOpen} 
        onMobileClose={() => setIsMobileOpen(false)}
      />

      {/* Navbar */}
      <Navbar 
        onMenuClick={() => setIsMobileOpen(true)} 
        sidebarCollapsed={collapsed}
        onSidebarToggle={() => setCollapsed(!collapsed)}
        showSidebar={showSidebar}
        isHeroVisible={isHeroVisible}
      />
      
      {/* Main Content with dynamic margin */}
      <div 
        className="transition-all duration-300 ease-in-out"
        style={{ marginLeft: showSidebar ? sidebarWidth : 0 }}
      >
        {/* Page Hero Section - Only for non-home pages */}
        {showPageHero && (
          <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
            {/* Background Image */}
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
            
            {/* Animated Background Elements */}
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

            {/* Hero Content */}
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
        )}

        {/* Main Content Area */}
        <main className={showPageHero ? '' : 'pt-14'}>
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
        </main>

        <Footer />
      </div>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <BottomNav onMoreClick={() => setIsMobileOpen(true)} />
      )}
    </div>
  );
}