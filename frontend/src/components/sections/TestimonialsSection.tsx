// 'use client';

// import Link from 'next/link';
// import OptimizedImage from '@/components/ui/OptimizedImage';
// import { motion } from 'framer-motion';
// import { Quote, ArrowRight } from 'lucide-react';

// const testimonials = [
//   {
//     text: 'With the core message "Transform Yourself, Transform the World," Life Positive Mission integrates spirituality, life coaching, business coaching, leadership development, and social empowerment to create meaningful transformation in individuals and communities.',
//     name: 'Alison Scott',
//     image: '/images/unbound/unbound-img11.jpg',
//   },
//   {
//     text: 'Life Positive Mission has transformed my perspective on life. The workshops and programs have helped me discover my true potential and purpose.',
//     name: 'William Wright',
//     image: '/images/unbound/unbound-img12.jpg',
//   },
//   {
//     text: 'Being part of LPM has been a life-changing experience. The community here is amazing and the work we do together creates real impact.',
//     name: 'Alison Doe',
//     image: '/images/unbound/unbound-img13.jpg',
//   },
// ];

// export default function TestimonialsSection() {
//   return (
//     <section className="relative py-20 overflow-hidden">
//       <div className="absolute inset-0">
//         <OptimizedImage src="/images/gallery/4.jpg" alt="Testimonial BG"  className="object-cover" />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
//       </div>
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
//             <div className="relative">
//               <Quote size={60} className="text-orange-500/30 absolute -top-4 -left-4" />
//               <div className="space-y-8">
//                 {testimonials.map((t, idx) => (
//                   <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
// <p className="text-white/90 italic">&quot;{t.text}&quot;</p>                    <div className="flex items-center gap-4 mt-4">
//                       <div className="relative w-12 h-12 rounded-full overflow-hidden">
//                         <OptimizedImage src={t.image} alt={t.name}  className="object-cover" sizes='160px'/>
//                       </div>
//                       <div>
//                         <h4 className="text-white font-semibold">{t.name}</h4>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//           <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="text-center lg:text-left">
//             <span className="text-orange-400 font-semibold tracking-wide uppercase">Positive Thinking</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Inspiring People</h2>
//             <p className="text-white/80 mb-6">Guided by the belief that every individual possesses infinite inner potential, LPM works to inspire people to transform their lives through positive thinking, discipline, self-management, spirituality, and purposeful action.</p>
//             <Link href="/testimonials" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all">
//               More Reviews <ArrowRight size={18} />
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


// src/components/sections/TestimonialsSection.tsx
'use client';

import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  image_url: string;
}

interface TestimonialsSectionProps {
  data?: {
    title?: string;
    subtitle?: string;
    description?: string;
    testimonials?: Testimonial[];
  };
}

const defaultTestimonials: Testimonial[] = [
  {
    text: 'With the core message "Transform Yourself, Transform the World," Life Positive Mission integrates spirituality, life coaching, business coaching, leadership development, and social empowerment to create meaningful transformation in individuals and communities.',
    name: 'Alison Scott',
    image_url: '/images/unbound/unbound-img11.jpg',
  },
  {
    text: 'Life Positive Mission has transformed my perspective on life. The workshops and programs have helped me discover my true potential and purpose.',
    name: 'William Wright',
    image_url: '/images/unbound/unbound-img12.jpg',
  },
  {
    text: 'Being part of LPM has been a life-changing experience. The community here is amazing and the work we do together creates real impact.',
    name: 'Alison Doe',
    image_url: '/images/unbound/unbound-img13.jpg',
  },
];

export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const title = data?.title || 'Inspiring People';
  const subtitle = data?.subtitle || 'Positive Thinking';
  const description =
    data?.description ||
    'Guided by the belief that every individual possesses infinite inner potential, LPM works to inspire people to transform their lives through positive thinking, discipline, self-management, spirituality, and purposeful action.';
  const testimonials = data?.testimonials?.length ? data.testimonials : defaultTestimonials;

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage src="/images/gallery/4.jpg" alt="Testimonial BG" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
            <div className="relative">
              <Quote size={60} className="text-orange-500/30 absolute -top-4 -left-4" />
              <div className="space-y-8">
                {testimonials.map((t, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6"
                  >
                    <p className="text-white/90 italic">&quot;{t.text}&quot;</p>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <OptimizedImage
                          src={t.image_url}
                          alt={t.name}
                          className="object-cover"
                          sizes="160px"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{t.name}</h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-center lg:text-left"
          >
            <span className="text-orange-400 font-semibold tracking-wide uppercase">{subtitle}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">{title}</h2>
            <p className="text-white/80 mb-6">{description}</p>
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              More Reviews <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}