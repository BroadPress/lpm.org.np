
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { cn } from '@/lib/utils';

interface MobileSidebarProps {
  isMobileOpen: boolean;
  onMobileClose: () => void;
  collapsed?: boolean;
  setCollapsed?: (value: boolean) => void;
}

const navItems = [
  { icon: null, label: 'Home', href: '/' },
  { icon: null, label: 'About', href: '/about' },
  { icon: null, label: 'Team', href: '/team' },
  { icon: null, label: 'Events', href: '/events' },
  { icon: null, label: 'FAQs', href: '/faq' },
  { icon: null, label: 'Gallery', href: '/gallery' },
  { icon: null, label: 'Contact', href: '/contact' },
];

const socials = [
  { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export function MobileSidebar({ isMobileOpen, onMobileClose }: MobileSidebarProps) {
  const pathname = usePathname();

  // Every path that closes the sidebar goes through this single
  // handler, and it always stops the click from bubbling further.
  // That's what stops the same tap from also landing on the
  // hamburger button (or anything else) underneath.
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onMobileClose();
  };

  return (
    <AnimatePresence>
      {isMobileOpen && (
        // z-[100] is intentionally well above the fixed TopBar+Navbar
        // stack (z-50 in Layout.tsx). Layout.tsx renders <MobileSidebar />
        // BEFORE the navbar wrapper in the DOM, and at equal z-index the
        // later DOM element wins click hit-testing — so at z-50 vs z-50
        // the navbar's hamburger was effectively still "on top" for
        // click purposes even though the sidebar painted visually over
        // it. Bumping the sidebar strictly higher removes the ambiguity.
        <div className="fixed inset-0 z-[100]">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={handleClose}
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 h-full w-[280px] bg-white dark:bg-gray-900 shadow-2xl flex flex-col"
            // Prevent clicks inside the drawer (links aside) from
            // bubbling up to the overlay's onClick and closing+
            // navigating in the same tap.
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-5">
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10">
                  <Image src="/images/brand/logo.jpg" alt="LPM" width={42} height={42} className="rounded-full object-contain" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 dark:text-white text-sm">Life Positive</p>
                  <p className="text-[10px] text-gray-500">Mission</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={handleClose}
                    className={cn(
                      'flex items-center gap-3 px-3 py-3 rounded-xl transition-all',
                      isActive
                        ? 'bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-600 dark:text-orange-400'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    )}
                  >
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Social & Actions */}
            <div className="border-t border-gray-200 dark:border-gray-800 p-4 space-y-3">
              <div className="flex justify-around">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-orange-500 transition-colors"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
              <Link
                href="/donate"
                onClick={handleClose}
                className="block w-full py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl text-sm font-medium text-center hover:shadow-lg transition-all"
              >
                Donate Now
              </Link>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSd5oi9ujlXHfxByvYI7iuAjbCWFtgRrCsN62PrwjFL2ABSPCg/viewform"
                target="_blank"
                onClick={handleClose}
                className="block w-full py-2.5 border border-orange-500 text-orange-500 rounded-xl text-sm font-medium text-center hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-all"
              >
                Join as Volunteer
              </Link>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

// Desktop Sidebar
export function DesktopSidebar() {
  return null;
}