'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Search, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useMobile } from '@/hooks/useMediaQuery';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa6'


interface TopBarProps {
  isSearchOpen: boolean;
  onSearchToggle: () => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
}

const TopBar = ({ isSearchOpen, onSearchToggle, searchInputRef }: TopBarProps) => {
  const isMobile = useMobile();
  const { scrollDirection, scrollPosition } = useScrollPosition();
  const isHidden = scrollDirection === 'down' && scrollPosition > 200;

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://www.twitter.com/', label: 'Twitter' },
    { icon: FaYoutube, href: 'https://www.youtube.com/', label: 'YouTube' },
    { icon: FaInstagram, href: 'https://www.instagram.com/', label: 'Instagram' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/', label: 'LinkedIn' },
  ];

  const contactItems = [
    { icon: Phone, text: '+977 9841441374', href: 'tel:+9779841441374' },
    { icon: Mail, text: 'info@lpm.org.np', href: 'mailto:info@lpm.org.np' },
    { icon: MapPin, text: 'Near Pashupati School, Bajrang Tola, Birganj' },
  ];

  if (isMobile) return null; // Hide on mobile

  return (
    <>
      {/* Top Bar */}
      <AnimatePresence>
        {!isHidden && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-orange-600 to-red-600 text-white overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-10 text-sm">
                {/* Left - Contact Info */}
                <div className="flex items-center space-x-6">
                  {contactItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <item.icon className="h-3.5 w-3.5" />
                      {item.href ? (
                        <a href={item.href} className="text-xs hover:text-yellow-200 transition-colors">
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-xs">{item.text}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Right - Social Icons & Search */}
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full hover:bg-white/20 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <social.icon className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                  
                  <div className="h-5 w-px bg-white/30" />
                  
                  <button
                    onClick={onSearchToggle}
                    className="p-1.5 rounded-full hover:bg-white/20 transition-all duration-300"
                    aria-label="Toggle search"
                  >
                    <Search className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-0 z-[60] bg-white shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center space-x-4">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search for events, articles, and more..."
                  className="flex-1 text-lg bg-transparent border-none outline-none text-gray-800 placeholder-gray-400"
                />
                <button
                  onClick={onSearchToggle}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopBar;