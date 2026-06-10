'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Search, X, Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface NavbarProps {
  onMenuClick: () => void;
  sidebarCollapsed: boolean;
  onSidebarToggle: () => void;
  showSidebar: boolean;
  isHeroVisible?: boolean;
}

export default function Navbar({ 
  onMenuClick, 
  sidebarCollapsed, 
  onSidebarToggle, 
  showSidebar,
  isHeroVisible = true 
}: NavbarProps) {
  const [mounted, setMounted] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const { isScrolled } = useScrollPosition();
  const isMobile = useMediaQuery('(max-width: 767px)');

  useEffect(() => setMounted(true), []);

  // Determine if navbar is over hero section (transparent)
  const isOverHero = !isScrolled && isHeroVisible;
  
  const getMainTextColor = () => {
    if (isOverHero) return 'text-white';
    if (theme === 'dark') return 'text-white';
    return 'text-gray-900';
  };
  
  const getSubTextColor = () => {
    if (isOverHero) return 'text-white/70';
    if (theme === 'dark') return 'text-green-400';
    return 'text-green-600';
  };
  
  const getIconColor = () => {
    if (isOverHero) return 'text-white';
    if (theme === 'dark') return 'text-gray-300';
    return 'text-gray-700';
  };

  // Debounced search
  const debouncedSearch = useCallback((query: string) => {
    if (query.length > 1) {
      const mockResults = [
        'Home Page',
        'About Us',
        'Upcoming Events',
        'Volunteer Opportunities',
        'Donation Campaigns',
        'Leadership Training',
        'Youth Empowerment',
        'Spiritual Awakening',
        'Entrepreneurship Meet',
      ].filter(item => item.toLowerCase().includes(query.toLowerCase()));
      setSearchResults(mockResults);
    } else {
      setSearchResults([]);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => debouncedSearch(searchQuery), 300);
    return () => clearTimeout(timer);
  }, [searchQuery, debouncedSearch]);

  // Close search on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`
          fixed top-0 left-0 right-0 z-40 transition-all duration-300
          ${isOverHero 
            ? 'bg-transparent backdrop-blur-none shadow-none border-transparent'
            : isScrolled
              ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg'
              : 'bg-white dark:bg-gray-900'
          }
          ${!isOverHero && 'border-b border-gray-200 dark:border-gray-800'}
        `}
      >
        <div className="h-14 px-1 flex items-center justify-between">
          {/* LEFT SECTION: Logo + Sidebar Toggle */}
          <div className="flex items-center gap-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Life Positive Mission"
                  width={40}
                  height={40}
                  className="rounded-full object-contain"
                  priority
                />
              </div>

              {/* Mobile Logo Text */}
              <div className="sm:hidden leading-tight">
                <p className={`font-bold text-[13px] leading-tight ${getMainTextColor()}`}>
                  Life Positive
                </p>
                <p className={`font-bold text-[13px] leading-tight ${getSubTextColor()}`}>
                  Mission
                </p>
              </div>

              {/* Desktop Logo Text - Shows when sidebar is NOT collapsed */}
              <AnimatePresence mode="wait">
                {!sidebarCollapsed && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="hidden sm:block leading-none overflow-hidden whitespace-nowrap"
                  >
                    <p className={`font-bold text-md ${getMainTextColor()}`}>
                      Life Positive Mission
                    </p>
                    <p className={`text-[11px] mt-0.5 ${getSubTextColor()}`}>
                      www.lpm.org.np
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>

            {/* Sidebar Toggle Button */}
            {showSidebar && (
              <motion.button
                onClick={onSidebarToggle}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-lg transition-colors flex-shrink-0 ${
                  isOverHero 
                    ? 'hover:bg-white/10 text-white' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                } ${getIconColor()}`}
                aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                {sidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
              </motion.button>
            )}
          </div>

          {/* RIGHT SECTION: Actions */}
          <div className="flex items-center gap-1">
            {/* Search Bar (Desktop only) */}
            {!isMobile && (
              <div className="w-64 lg:w-80">
                <div className="relative" ref={searchRef}>
                  <Search size={16} className={`absolute left-3 top-1/2 -translate-y-1/2 ${isOverHero ? 'text-white/60' : 'text-gray-400'}`} />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchOpen(true)}
                    className={`w-full pl-9 pr-3 py-1.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-orange-500 ${
                      isOverHero
                        ? 'bg-white/10 border-white/20 text-white placeholder-white/50 backdrop-blur-sm'
                        : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500'
                    }`}
                  />

                  {/* Search Results Dropdown */}
                  <AnimatePresence>
                    {searchOpen && searchResults.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                      >
                        {searchResults.map((result, idx) => (
                          <Link
                            key={idx}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => {
                              setSearchOpen(false);
                              setSearchQuery('');
                            }}
                          >
                            <p className="text-sm text-gray-700 dark:text-gray-300">{result}</p>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}

            {/* Mobile Search Icon */}
            {isMobile && (
              <button
                onClick={() => setSearchOpen(true)}
                className={`p-2 rounded-lg transition-colors ${
                  isOverHero 
                    ? 'hover:bg-white/10 text-white' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                } ${getIconColor()}`}
              >
                <Search size={18} />
              </button>
            )}

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-lg transition-colors ${
                isOverHero 
                  ? 'hover:bg-white/10 text-white' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              } ${getIconColor()}`}
            >
              {mounted && (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
            </button>

            {/* Donate Button */}
            <Link
              href="/donate"
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                isOverHero
                  ? 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                  : 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-lg'
              }`}
            >
              Donate
            </Link>

            {/* Mobile Menu Button */}
            {isMobile && (
              <button
                onClick={onMenuClick}
                className={`p-2 rounded-lg transition-colors ${
                  isOverHero 
                    ? 'hover:bg-white/10 text-white' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                } ${getIconColor()}`}
              >
                <Menu size={18} />
              </button>
            )}
          </div>
        </div>
      </motion.header>

      {/* Mobile Search Modal */}
      <AnimatePresence>
        {searchOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed inset-0 z-50 bg-white dark:bg-gray-900"
          >
            <div className="p-4 pt-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative flex-1">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800"
                >
                  <X size={20} />
                </button>
              </div>
              {searchResults.length > 0 && (
                <div className="space-y-2">
                  {searchResults.map((result, idx) => (
                    <Link
                      key={idx}
                      href="#"
                      className="block p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setSearchOpen(false)}
                    >
                      <p className="text-gray-700 dark:text-gray-300">{result}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}