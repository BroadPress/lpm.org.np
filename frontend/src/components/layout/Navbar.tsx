'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

interface NavbarProps {
  onMenuClick: () => void;
  isTransparent: boolean;
  isMobile?: boolean;
}

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Events', href: '/events' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar({ onMenuClick, isTransparent, isMobile = false }: NavbarProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const currentPathname = usePathname();

  useEffect(() => setMounted(true), []);

  // Resolve theme only after mount to avoid SSR/light flash mismatches.
  const isDark = mounted && theme === 'dark';

  const navbarBg = isTransparent
    ? 'bg-transparent border-transparent'
    : isDark
      ? 'bg-gray-900/95 backdrop-blur-xl shadow-lg border-gray-700'
      : 'bg-white/95 backdrop-blur-xl shadow-lg border-gray-200';

      const textColor = !mounted
    ? 'text-transparent'
    : isTransparent
      ? 'text-white'
      : isDark
        ? 'text-white'
        : 'text-gray-900';

  const iconHoverBg = isTransparent
    ? 'hover:bg-white/20'
    : isDark
      ? 'hover:bg-gray-800'
      : 'hover:bg-gray-100';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`relative w-full border-b transition-colors duration-300 ${navbarBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        

          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
  <div className="relative h-10 w-[150px]">
    <Image
      src="/images/brand/lpm-logo.png"
      alt="Life Positive Mission"
      fill
      priority
      className="object-contain"
      sizes="150px"
    />
  </div>
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentPathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`uppercase text-sm font-medium transition-colors duration-300 relative hover:text-orange-500 ${
                    isActive ? 'text-orange-500' : textColor
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className={`p-2 rounded-lg transition-colors duration-300 ${textColor} ${iconHoverBg}`}
              aria-label="Toggle theme"
            >
              {mounted && (isDark ? <Sun size={18} /> : <Moon size={18} />)}
            </button>

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd5oi9ujlXHfxByvYI7iuAjbCWFtgRrCsN62PrwjFL2ABSPCg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                isTransparent
                  ? 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30'
                  : 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-lg hover:from-orange-600 hover:to-pink-600'
              }`}
            >
              Join Now
            </Link>

            <button
  onClick={(e) => {
    e.stopPropagation();
    onMenuClick();
  }}
              className={`lg:hidden ml-1 p-2 rounded-lg transition-colors duration-300 ${textColor} ${iconHoverBg}`}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}