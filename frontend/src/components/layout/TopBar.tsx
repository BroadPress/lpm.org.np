'use client';

import { FaFacebook, FaSquareXTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { Phone, Mail, MapPin } from 'lucide-react';

interface TopBarProps {
  /** true = render on top of the hero image (homepage, not scrolled) */
  transparent?: boolean;
}

export default function TopBar({ transparent = false }: TopBarProps) {
  return (
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

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={14} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaSquareXTwitter size={14} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube size={14} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
