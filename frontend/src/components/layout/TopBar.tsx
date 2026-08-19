'use client';

import { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { Phone, Mail, MapPin, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TopBarProps {
  /** true = render on top of the hero image (homepage, not scrolled) */
  transparent?: boolean;
}

export default function TopBar({ transparent = false }: TopBarProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Autofocus the input the moment the overlay mounts.
  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  // Esc closes it, same as the X button.
  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [searchOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputRef.current?.value.trim();
    if (query) {
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <>
      <div
        className={`
          border-b transition-colors duration-300
          ${transparent
            ? 'bg-transparent border-white/15'
            : 'bg-gray-900 dark:bg-gray-950 border-gray-800'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm text-white">
            {/* Left: Contact Info */}
            <div className="flex items-center gap-6 overflow-hidden">
              <a
                href="tel:+9779841441374"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors whitespace-nowrap"
              >
                <Phone size={14} />
                <span>+977 9841441374</span>
              </a>
              <a
                href="mailto:info@lpm.org.np"
                className="hidden sm:flex items-center gap-2 text-gray-300 hover:text-white transition-colors whitespace-nowrap"
              >
                <Mail size={14} />
                <span>info@lpm.org.np</span>
              </a>
              <div className="hidden lg:flex items-center gap-2 text-gray-300 whitespace-nowrap">
                <MapPin size={14} />
                <span>Near Pashupati School, Bajrang Tola, Birganj</span>
              </div>
            </div>

            {/* Right: Social Icons + Search */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="flex items-center gap-2">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                  <FaFacebook size={14} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                  <FaTwitter size={14} />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-white transition-colors" aria-label="YouTube">
                  <FaYoutube size={14} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                  <FaInstagram size={14} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                  <FaLinkedin size={14} />
                </a>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchOpen(true);
                }}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Search"
              >
                <Search size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-black/70 flex items-center justify-center px-4"
            onClick={() => setSearchOpen(false)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSearchOpen(false);
              }}
              className="absolute top-5 right-5 sm:top-6 sm:right-8 text-white hover:text-orange-400 transition-colors"
              aria-label="Close search"
            >
              <X size={28} />
            </button>

            <motion.form
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onSubmit={handleSubmit}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl"
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Enter your text..."
                className="w-full h-12 sm:h-14 rounded-full bg-white text-gray-800 placeholder:text-gray-400 px-6 sm:px-8 text-base sm:text-lg outline-none shadow-2xl"
              />
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}