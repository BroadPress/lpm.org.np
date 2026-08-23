// 'use client';

// import Link from 'next/link';
// import OptimizedImage from '@/components/ui/OptimizedImage';
// import { motion } from 'framer-motion';
// import { ArrowRight, TrendingUp, Heart } from 'lucide-react';

// // Data defined internally
// const charityEvents = [
//   {
//     title: 'Entrepreneurship Award',
//     desc: 'Recognizing and honoring outstanding entrepreneurs who have made significant contributions to the community through innovation and social responsibility.',
//     image: '/images/home/activities1.jpg',
//     progress: 70,
//     raised: '$7,000',
//     target: '$10,000',
//   },
//   {
//     title: 'Financial help for poor, needy families',
//     desc: 'Providing essential support and resources to underprivileged families to help them build a better future and overcome financial challenges.',
//     image: '/images/home/activities2.jpg',
//     progress: 85,
//     raised: '$8,500',
//     target: '$10,000',
//   },
// ];

// export default function SocialActivitiesSection() {
//   return (
//     <section className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }} 
//           whileInView={{ opacity: 1, y: 0 }} 
//           className="text-center mb-12"
//         >
//           <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">
//             Social Activities
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
//             Recent Events
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mt-4 rounded-full" />
//           <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
//             Join us in making a difference through our various social initiatives and community programs
//           </p>
//         </motion.div>
        
//         {/* Events Grid */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {charityEvents.map((event, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1 }}
//               whileHover={{ y: -5 }}
//               className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
//             >
//               {/* Image Container */}
//               <div className="relative h-64 overflow-hidden">
//                 <OptimizedImage 
//                   src={event.image} 
//                   alt={event.title} 
//                   priority={idx === 0} 
//                   className="transition-transform duration-700 group-hover:scale-110" 
//                 />
                
//                 {/* Dark Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
//                 {/* Percentage Badge - Like your image design */}
//                 <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-white font-bold text-sm flex items-center gap-1.5 shadow-lg ${
//                   idx === 0 
//                     ? 'bg-gradient-to-r from-orange-500 to-red-500' 
//                     : 'bg-gradient-to-r from-pink-500 to-rose-500'
//                 }`}>
//                   <TrendingUp size={14} />
//                   <span>{event.progress}% Raised</span>
//                 </div>
                
//                 {/* Fund Info - Clean minimal design */}
//                 <div className="absolute bottom-0 left-0 right-0 p-5">
//                   <div className="flex justify-between items-center text-white text-sm mb-2">
//                     <span className="flex items-center gap-1">
//                       <Heart size={14} className="text-orange-400" />
//                       <span>Raised: {event.raised}</span>
//                     </span>
//                     <span className="text-white/70">Goal: {event.target}</span>
//                   </div>
//                   {/* Progress Bar */}
//                   <div className="bg-white/20 backdrop-blur-sm rounded-full h-2 overflow-hidden">
//                     <motion.div 
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${event.progress}%` }}
//                       transition={{ duration: 1, delay: 0.3 }}
//                       className={`h-full rounded-full ${
//                         idx === 0 
//                           ? 'bg-gradient-to-r from-orange-500 to-red-500' 
//                           : 'bg-gradient-to-r from-pink-500 to-rose-500'
//                       }`}
//                     />
//                   </div>
//                 </div>
//               </div>
              
//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
//                   {event.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
//                   {event.desc}
//                 </p>
                
//                 <Link 
//                   href={`/events/${idx === 0 ? 'entrepreneurship-award' : 'financial-help'}`}
//                   className="inline-flex items-center gap-1 text-orange-500 font-medium mt-4 hover:gap-2 transition-all duration-300"
//                 >
//                   Learn more <ArrowRight size={14} />
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
        
//         {/* View All Button */}
//         <div className="text-center mt-12">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link 
//               href="/events" 
//               className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
//             >
//               View All Events <ArrowRight size={18} />
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


// src/components/sections/SocialActivitiesSection.tsx
'use client';

import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Heart } from 'lucide-react';

interface ActivityEvent {
  title: string;
  description: string;
  image_url: string;
  progress: number;
  raised: string;
  target: string;
}

interface SocialActivitiesSectionProps {
  data?: {
    title?: string;
    subtitle?: string;
    description?: string;
    events?: ActivityEvent[];
  };
}

const defaultEvents: ActivityEvent[] = [
  {
    title: 'Entrepreneurship Award',
    description: 'Recognizing and honoring outstanding entrepreneurs who have made significant contributions to the community through innovation and social responsibility.',
    image_url: '/images/home/activities1.jpg',
    progress: 70,
    raised: '$7,000',
    target: '$10,000',
  },
  {
    title: 'Financial help for poor, needy families',
    description: 'Providing essential support and resources to underprivileged families to help them build a better future and overcome financial challenges.',
    image_url: '/images/home/activities2.jpg',
    progress: 85,
    raised: '$8,500',
    target: '$10,000',
  },
];

export default function SocialActivitiesSection({ data }: SocialActivitiesSectionProps) {
  const title = data?.title || 'Recent Events';
  const subtitle = data?.subtitle || 'Social Activities';
  const description = data?.description || 'Join us in making a difference through our various social initiatives and community programs';
  const events = data?.events?.length ? data.events : defaultEvents;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">{subtitle}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">{title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">{description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <OptimizedImage
                  src={event.image_url}
                  alt={event.title}
                  priority={idx === 0}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div
                  className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-white font-bold text-sm flex items-center gap-1.5 shadow-lg ${
                    idx === 0 ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-pink-500 to-rose-500'
                  }`}
                >
                  <TrendingUp size={14} />
                  <span>{event.progress}% Raised</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex justify-between items-center text-white text-sm mb-2">
                    <span className="flex items-center gap-1">
                      <Heart size={14} className="text-orange-400" />
                      <span>Raised: {event.raised}</span>
                    </span>
                    <span className="text-white/70">Goal: {event.target}</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${event.progress}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className={`h-full rounded-full ${
                        idx === 0 ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-pink-500 to-rose-500'
                      }`}
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{event.description}</p>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-1 text-orange-500 font-medium mt-4 hover:gap-2 transition-all duration-300"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
            >
              View All Events <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}