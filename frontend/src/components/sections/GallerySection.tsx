'use client';

import OptimizedImage from '@/components/ui/OptimizedImage';
import { motion } from 'framer-motion';

const galleryImages = [
  { img: '/images/gallery/1.jpg', title: 'Village people' },
  { img: '/images/gallery/2.jpg', title: 'Donation campaign' },
  { img: '/images/gallery/3.jpg', title: 'Charity donation' },
  { img: '/images/gallery/4.jpg', title: 'Clean campaign' },
  { img: '/images/gallery/5.jpg', title: 'Happy child' },
  { img: '/images/gallery/6.jpg', title: 'Poor children' },
  { img: '/images/gallery/7.jpg', title: 'Helpless People' },
  { img: '/images/gallery/8.jpg', title: 'Volunteer team' },
];

const GalleryItem = ({ img, title, index }: { img: string; title: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ scale: 1.02 }}
    className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
  >
    <div className="relative h-64 w-full">
      <OptimizedImage src={img} alt={title}         priority={index < 4}  className="object-cover transition-transform duration-500 group-hover:scale-110"  />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h4 className="text-white font-semibold text-lg">{title}</h4>
      </div>
    </div>
  </motion.div>
);

export default function GallerySection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="text-orange-500 font-semibold tracking-wide uppercase">Portfolio / Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Photo Gallery</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((item, idx) => (
            <GalleryItem key={idx} img={item.img} title={item.title} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}