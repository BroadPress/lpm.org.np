'use client';

import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Users, Award, Globe, Star } from 'lucide-react';

const missionPoints = [
  'Inspire positive thinking and mindset transformation',
  'Develop life skills and leadership qualities',
  'Empower students and youth',
  'Support entrepreneurs and professionals',
  'Promote cultural harmony and human connection',
];

// Stats data for overlay
const missionStats = [
  { value: '15K+', label: 'Lives Impacted', icon: Users, color: 'from-orange-500 to-red-500' },
  { value: '50+', label: 'Programs', icon: Award, color: 'from-blue-500 to-cyan-500' },
  { value: '125+', label: 'Communities', icon: Globe, color: 'from-green-500 to-emerald-500' },
  { value: '100%', label: 'Commitment', icon: Star, color: 'from-purple-500 to-pink-500' },
];

export default function MissionSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              Transform Yourself, Transform the World
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              We work to connect spirituality with practical life development for real-world success.
            </p>
            
            <div className="space-y-3 mb-8">
              {missionPoints.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  transition={{ delay: idx * 0.1 }} 
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={18} className="text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Continue Reading <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Image with Stats Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage 
                src="/gallery/28.jpg" 
                alt="Our Mission - Life Positive Mission" 
                type="hero"
                className="h-full"
              />
              
              {/* Dark Gradient Overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Stats Overlay at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-4 gap-2">
                  {missionStats.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                      className="text-center backdrop-blur-md bg-white/10 rounded-xl p-3 border border-white/20"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-2`}>
                        <stat.icon size={16} className="text-white" />
                      </div>
                      <div className="text-white font-bold text-lg">{stat.value}</div>
                      <div className="text-white/70 text-xs">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}