'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
   Users, Briefcase, Lightbulb,
  ArrowRight
} from 'lucide-react';
import { FaUserTie, FaUserGraduate } from 'react-icons/fa6';
import OptimizedImage from '@/components/ui/OptimizedImage';
import PartnersSection from '@/components/sections/PartnersSection';
import { fadeUp, staggerContainer } from '@/components/animations/variants';



// Target Audience Icons
const targetAudiences = [
  { icon: FaUserGraduate, label: 'Students', color: 'from-blue-500 to-cyan-500' },
  { icon: Users, label: 'Youth', color: 'from-green-500 to-emerald-500' },
  { icon: Briefcase, label: 'Professionals', color: 'from-purple-500 to-pink-500' },
  { icon: Lightbulb, label: 'Entrepreneurs', color: 'from-orange-500 to-red-500' },
  { icon: FaUserTie, label: 'Leaders', color: 'from-yellow-500 to-amber-500' },
];


export default function AboutClient() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* About Section */}
      <section className="about-section about-page-section py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Head with Title and Description */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">
                ABOUT LIFE POSITIVE MISSION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">
                Transform Yourself,  <br />
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Transform the World
                </span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Life Positive Mission (LPM) is a volunteer-driven international public charitable non-profit 
                organization committed to building a positive, conscious, and spiritually awakened world through 
                the power of positive energy, leadership, and human transformation.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Guided by the belief that every individual possesses infinite inner potential, LPM works to inspire 
                people to transform their lives through positive thinking, discipline, self-management, spirituality, 
                and purposeful action.
              </p>
            </motion.div>
          </div>

          {/* Target Audience Icons */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-16"
          >
            {targetAudiences.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group text-center"
              >
                <div className={`w-20 h-20 mx-auto rounded-full  bg-gradient-to-r ${item.color} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={32} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.label}
                </h4>
              </motion.div>
            ))}
          </motion.div>

          {/* Core Philosophy & Video Section */}
          <div className="grid lg:grid-cols-2 gap-4 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 mt-6 border p-4 rounded-xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Core Philosophy
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                Life Positive Mission believes that positive energy is the foundation of success. 
                Mindset creates destiny, and life is not luck—it is a conscious construction. 
                We teach that you are not jobless, but under divine development, where every 
                challenge is part of your transformation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-xl h-80"
            >
              <OptimizedImage
                src="/images/about/core.jpg"
                alt="Core Philosophy"
                type="hero"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>
        </div>

<PartnersSection />


        {/* Call to Action Section */}
        <div className="relative inset-0 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <OptimizedImage
              src="/images/hero/1.jpg"
              alt="Get Involved"
              type="hero"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-6 text-center mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='mt-10'
            >
              <span className="text-orange-300 font-semibold tracking-wide uppercase text-sm">
                GET INVOLVE NOW
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-8">
                Building a positive, conscious, and spiritually awakened world.
              </h2>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSd5oi9ujlXHfxByvYI7iuAjbCWFtgRrCsN62PrwjFL2ABSPCg/viewform"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-500 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get Involve Now <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
