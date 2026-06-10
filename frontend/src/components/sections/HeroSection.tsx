'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';
import OptimizedImage from '../ui/OptimizedImage';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function HeroSection({ setVideoModalOpen }: { setVideoModalOpen: (open: boolean) => void }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ opacity: heroOpacity }}>
        <OptimizedImage src="/1.jpg" alt="Hero"  className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6">
          <motion.div variants={fadeUp} className="inline-block">
            <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 inline-flex items-center gap-2">
              <Sparkles size={16} className="text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">Power of Positive Energy</span>
            </div>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">
            Life Positive
            <span className="block bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Mission</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Volunteer-driven international charitable organization dedicated to cultivating human potential through positive energy and spiritual growth.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/donate" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-orange-500/25 transition-all">
                Donate Fund <Heart size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all">
                Learn More <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1 h-2 bg-white rounded-full mt-2" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}