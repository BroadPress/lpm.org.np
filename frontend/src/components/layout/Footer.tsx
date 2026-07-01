'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import OptimizedImage from '../ui/OptimizedImage';
import { FaFacebook, FaSquareXTwitter , FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa6';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (email) {
      console.log('Subscribed with:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };
// Social Media Links without Actuall Social Media Urls.
  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/', label: 'Facebook' },
    { icon: FaSquareXTwitter , href: 'https://www.twitter.com/', label: 'Twitter' },
    { icon: FaYoutube, href: 'https://www.youtube.com/', label: 'YouTube' },
    { icon: FaInstagram, href: 'https://www.instagram.com/', label: 'Instagram' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-black text-black dark:text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
          
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Life Positive Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Life Positive Mission (LPM) is a volunteer-driven international public charitable
              non-profit organization committed to building a positive, conscious, and spiritually
              awakened world through the power of positive energy, leadership, and human transformation.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <MapPin size={16} className="shrink-0 mt-0.5 text-orange-500" />
                <span>Near Pashupati School, Bajrang Tola, Birganj</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <Phone size={16} className="text-orange-500" />
                <a href="tel:+9779841441374" className="hover:text-orange-500 transition-colors">
                  +9779841441374
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <Mail size={16} className="text-orange-500" />
                <a href="mailto:info@lpm.org.np" className="hover:text-orange-500 transition-colors">
                  info@lpm.org.np
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Office Location with Image - Fixed with proper container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">Office Location</h4>
            {/* Add position relative container with explicit height/width */}
            <div className="relative w-full h-48 md:h-52 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md bg-gray-100 dark:bg-gray-900">
              <OptimizedImage
                alt="Office Location Map"
                src="/images/brand/location.png"
                type="footer"
                className="grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Newsletter & Footer Links Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-6 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Newsletter */}
            <div className="text-center md:text-left">
              <h5 className="text-sm font-semibold mb-2">Subscribe our Newsletter</h5>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-orange-500 focus:outline-none text-sm w-full sm:w-64"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 px-6 py-2 rounded-lg text-white text-sm font-semibold transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <p className="text-green-500 text-xs mt-2">Thanks for subscribing!</p>
              )}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white dark:hover:text-white hover:-translate-y-0.5 dark:hover:ring-2 dark:hover:ring-orange-400/40 transition-all duration-300 group"
                >
                  <social.icon size={16} className="text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Menu */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs">
            <Link href="/privacy-policy" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            <Link href="/terms-and-terminologies" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 transition-colors">
              Terms & Terminologies
            </Link>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            <Link href="/faq" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 transition-colors">
              FAQ
            </Link>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            Copyright &copy; {currentYear} Life Positive Mission. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
