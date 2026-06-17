'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Users, Calendar, Menu, UserPlus } from 'lucide-react';

interface BottomNavProps {
  onMoreClick: () => void;
}

export default function BottomNav({ onMoreClick }: BottomNavProps) {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Users, label: 'Team', href: '/team' },
    { icon: Calendar, label: 'Events', href: '/events', isCenter: true },
    { icon: UserPlus, label: 'Join', href: '/join-now' },
    { icon: Menu, label: 'More', href: '#', isMore: true },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 pb-safe">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const isActive = !item.isMore && pathname === item.href;
          
          if (item.isMore) {
            return (
              <button
                key={item.label}
                onClick={onMoreClick}
                className="flex flex-col items-center justify-center gap-0.5 py-1 px-4 rounded-xl transition-all active:scale-95"
              >
                <item.icon size={22} className="text-gray-600 dark:text-gray-400" />
                <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">
                  {item.label}
                </span>
              </button>
            );
          }

          // Center button with elevated design
          if (item.isCenter) {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="relative flex flex-col items-center justify-center flex-1 max-w-20"
              >
                {/* Elevated circle button */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className={`bg-gradient-to-r from-orange-500 to-pink-500 rounded-full p-3 shadow-lg ${isActive ? 'shadow-orange-500/50' : ''}`}>
                    <item.icon size={24} className="text-white" />
                  </div>
                </div>
                
                {/* Label with extra top margin */}
                <span className={`text-[10px] font-medium mt-8 ${isActive ? 'text-orange-500' : 'text-gray-600 dark:text-gray-400'}`}>
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className="relative flex flex-col items-center justify-center gap-0.5 py-1 px-4 rounded-xl transition-all active:scale-95"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-xl"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <item.icon 
                size={22} 
                className={isActive ? 'text-orange-500' : 'text-gray-600 dark:text-gray-400'} 
              />
              <span className={`text-[10px] font-medium ${isActive ? 'text-orange-500' : 'text-gray-600 dark:text-gray-400'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}


