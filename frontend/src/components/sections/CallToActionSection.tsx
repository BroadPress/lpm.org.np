'use client';

import OptimizedImage from '@/components/ui/OptimizedImage';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { slideInLeft, slideInRight, scaleOnHover } from '@/components/animations/variants';

interface CallToActionSectionProps {
  setVideoModalOpen: (open: boolean) => void;
}

export default function CallToActionSection({ setVideoModalOpen }: CallToActionSectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage 
          src="/fundrising.jpg" 
          alt="CTA" 
           
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInLeft}
          >
            <span className="text-orange-300 font-semibold tracking-wide uppercase">Call to Action</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Fundraising for the people and causes you care about
            </h2>
            <p className="text-white/90 mb-6">
              LPM promotes the philosophy that life is not based on luck or coincidence, 
              but on conscious construction through positive thinking, discipline, and spiritual awakening.
            </p>
            <motion.button 
              onClick={() => setVideoModalOpen(true)}
              {...scaleOnHover}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-orange-500 rounded-xl font-semibold shadow-lg"
            >
              <Play size={20} /> PLAY SHORT VIDEO
            </motion.button>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInRight}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6"
          >
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Enter Name*" 
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-500" 
              />
              <input 
                type="email" 
                placeholder="Enter Email*" 
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-500" 
              />
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="tel" 
                  placeholder="Phone No*" 
                  className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-500" 
                />
                <input 
                  type="text" 
                  placeholder="Code*" 
                  className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-500" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold"
              >
                Get Involve Today
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}