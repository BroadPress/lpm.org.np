'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Info,
  Users,
  Calendar,
  ImageIcon,
  Mail,
  UserPlus,
  HelpCircle,
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { cn } from '@/lib/utils';
import OptimizedImage from '../ui/OptimizedImage';
interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Info, label: 'About', href: '/about' },
  { icon: Users, label: 'Team', href: '/team' },
  { icon: Calendar, label: 'Events', href: '/events' },
  { icon: HelpCircle, label: 'FAQs', href: '/faq' },
  { icon: ImageIcon, label: 'Gallery', href: '/gallery' },
  { icon: Mail, label: 'Contact', href: '/contact' },
    // { icon: UserPlus, label: 'Join Now', href: '/join-now' },
  { icon: UserPlus, label: 'Join Now', href: 'https://docs.google.com/forms/d/e/1FAIpQLSd5oi9ujlXHfxByvYI7iuAjbCWFtgRrCsN62PrwjFL2ABSPCg/viewform' },
];

const socials = [
  { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
];

// Desktop & Tablet Sidebar
export function DesktopSidebar({ collapsed, setCollapsed }: SidebarProps) {
  const pathname = usePathname();

  return (
    <motion.aside
      animate={{ width: collapsed ? 60 : 190 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed left-0 top-14 w bottom-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-lg z-30 flex flex-col overflow-hidden"
    >
      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center justify-center lg:justify-start gap-3 px-2 lg:px-3 py-2.5 rounded-xl transition-all duration-200 group",
                  isActive
                    ? "bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-600 dark:text-orange-400"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
                title={collapsed ? item.label : undefined}
              >
                <item.icon size={18} className="shrink-0" />
                <AnimatePresence mode="wait">
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                      className="hidden lg:inline-block text-sm font-medium whitespace-nowrap overflow-hidden"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Social Links - Only show when not collapsed on desktop */}
      {!collapsed && (
        <div className="border-t border-gray-200 dark:border-gray-800 p-3 space-y-1">
          <p className="text-xs text-gray-400 px-2 mb-1 hidden lg:block">Follow Us</p>
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              className="flex items-center justify-center lg:justify-start gap-3 px-2 lg:px-3 py-2 rounded-lg text-gray-500 dark:text-gray-500 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all group"
              title={collapsed ? social.label : undefined}
            >
              <social.icon size={16} className="group-hover:scale-110 transition-transform" />
              <span className="hidden lg:inline-block text-xs">{social.label}</span>
            </Link>
          ))}
        </div>
      )}

      {/* Show only icons when collapsed */}
      {collapsed && (
        <div className="border-t border-gray-200 dark:border-gray-800 p-2 space-y-1">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              className="flex items-center justify-center py-2 rounded-lg text-gray-500 hover:text-orange-500 transition-all"
              title={social.label}
            >
              <social.icon size={16} />
            </Link>
          ))}
        </div>
      )}
    </motion.aside>
  );
}

// Mobile Sidebar (Right Drawer)
export function MobileSidebar({ isMobileOpen, onMobileClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isMobileOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onMobileClose}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-[280px]     bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-5">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <OptimizedImage src="/images/brand/logo.jpg" alt="LPM" className="w-full h-full object-contain" />
                </div>
                <div className='leading-tight'>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">Life Positive Mission</p>
                  <p className="text-[12px] text-green-500">www.lpm.org.np</p>
                </div>
              </div>
              <button
                onClick={onMobileClose}
                className=" p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                ✕
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
                    onClick={onMobileClose}
                    className={cn(
                      "flex items-center gap-3 px-3 py-3 rounded-xl transition-all",
                      isActive
                        ? "bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-600"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    <item.icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Social & Actions */}
            <div className="border-t border-gray-200 dark:border-gray-800 p-4 space-y-3">
              <div className="flex justify-around">
                {socials.map((social) => (
                  <Link key={social.label} href={social.href} target="_blank" className="text-gray-500 hover:text-orange-500 transition-colors">
                    <social.icon size={18} />
                  </Link>
                ))}
              </div>
              <Link
                href="/donate"
                onClick={onMobileClose}
                className="block w-full py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl text-sm font-medium text-center hover:shadow-lg transition-all"
              >
                Donate Now
              </Link>
              <Link
                href="/join-now"
                onClick={onMobileClose}
                className="block w-full py-2.5 border border-orange-500 text-orange-500 rounded-xl text-sm font-medium text-center hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-all"
              >
                Join as Volunteer
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

