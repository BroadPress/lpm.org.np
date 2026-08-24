'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Home,
  Info,
  Users,
  Calendar,
  Image,
  Phone,
  HelpCircle,
  Menu,
  X,
  ChevronRight,
  DollarSign,
} from 'lucide-react';
import { memo, useState, useCallback, useEffect } from 'react';
import {useMediaQuery} from '@/hooks/useMediaQuery';
import OptimizedImage from '../ui/OptimizedImage';

const menuItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Homepage', href: '/admin/homepage', icon: Home },
  { label: 'About', href: '/admin/about', icon: Info },
  { label: 'Team', href: '/admin/team', icon: Users },
  { label: 'Events', href: '/admin/events', icon: Calendar },
  { label: 'Gallery', href: '/admin/gallery', icon: Image },
  { label: 'FAQs', href: '/admin/faqs', icon: HelpCircle },
  { label: 'Contact', href: '/admin/contact', icon: Phone },
  { label: 'Donations', href: '/admin/donations', icon: DollarSign },
];

const bottomNavItems = menuItems.slice(0, 4);
const moreItems = menuItems.slice(4);

export const AdminSidebar = memo(function AdminSidebar() {
  const pathname = usePathname();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const isActive = useCallback((href: string) => {
    return pathname?.startsWith(href.split('?')[0]) ?? false;
  }, [pathname]);

  // Desktop Sidebar
  if (!isMobile) {
    return (
      <aside className="w-60 bg-gradient-to-b from-orange-500 to-pink-600 min-h-screen flex-shrink-0 sticky top-0 overflow-y-auto">
                {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-3 px-5 py-5 border-b border-white/10 sticky top-0 bg-orange-500/95 z-10 group hover:opacity-80 transition-opacity"
          title="Go to Website Homepage"
        >
          <div className="relative w-8 h-8 flex-shrink-0">
            <OptimizedImage
              src="/images/brand/logo.jpg"
              alt="LPM Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm">Life Positive Mission </span>
            <span className="text-white/60 text-[10px] hidden group-hover:block transition-all">
              View Website →
            </span>
          </div>
        </Link>

        <nav className="p-3 space-y-0.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                  active
                    ? 'bg-white text-orange-600 font-medium shadow-md'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon size={18} className="flex-shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    );
  }

  // Mobile Bottom Navigation
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden safe-bottom shadow-lg">
        <div className="flex items-center justify-around py-1.5 px-1">
          {bottomNavItems.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition-all duration-200 min-w-[44px] relative ${
                  active ? 'text-orange-500' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon size={20} />
                <span className="text-[9px] font-medium leading-none">{item.label}</span>
                {active && (
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-orange-500 rounded-full" />
                )}
              </Link>
            );
          })}
          <button
            onClick={toggleSidebar}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition-all duration-200 min-w-[44px] ${
              isSidebarOpen ? 'text-orange-500' : 'text-gray-500 hover:text-gray-700'
            }`}
            aria-label="More menu"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            <span className="text-[9px] font-medium leading-none">More</span>
          </button>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fade-in" onClick={closeSidebar} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-orange-500 to-pink-600 z-50 transform transition-all duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h2 className="text-white font-bold text-sm">LPM CMS</h2>
          <button
            onClick={closeSidebar}
            className="text-white/70 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="p-3 space-y-0.5 overflow-y-auto h-[calc(100%-65px)] pb-20">
          {menuItems.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeSidebar}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-all duration-200 ${
                  active
                    ? 'bg-white text-orange-600 font-medium shadow-md'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon size={18} className="flex-shrink-0" />
                <span className="flex-1">{item.label}</span>
                {active && <ChevronRight size={16} className="text-orange-600" />}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="pb-16 md:pb-0" />
    </>
  );
});

AdminSidebar.displayName = 'AdminSidebar';