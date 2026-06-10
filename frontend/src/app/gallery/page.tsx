'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

// Gallery images from /gallery/ folder
const galleryImages = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  src: `/gallery/${i + 1}.jpg`,
  alt: `Gallery ${i + 1}`,
  height: ['h-64', 'h-72', 'h-80', 'h-88', 'h-96'][i % 5]
}));

export default function GalleryPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const currentIndex = selectedId ? galleryImages.findIndex(img => img.id === selectedId) : -1;
  const currentImage = currentIndex >= 0 ? galleryImages[currentIndex] : null;

  const handlePrev = () => {
    if (galleryImages.length > 0) {
      const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedId(galleryImages[newIndex].id);
    }
  };

  const handleNext = () => {
    if (galleryImages.length > 0) {
      const newIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedId(galleryImages[newIndex].id);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedId) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedId(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId, currentIndex]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-orange-500 text-sm font-semibold uppercase">Memories</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Our Photo Gallery</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto my-3" />
          <p className="text-gray-600 dark:text-gray-400">Capturing moments of transformation and positive energy</p>
        </div>

        {/* Stats */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-8 shadow-md">
          <div className="flex justify-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">{galleryImages.length} Beautiful Moments</span>
          </div>
        </div>

        {/* Gallery Grid - 3 Columns with different heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.02 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedId(img.id)}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
            >
              <div className={`relative w-full ${img.height} bg-gray-200 dark:bg-gray-700 overflow-hidden`}>
                <OptimizedImage
                  src={img.src}
                  alt={img.alt}
                  type="gallery"
                  fill={true}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                {/* Zoom Icon Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ZoomIn size={28} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedId && currentImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
              onClick={() => setSelectedId(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <X size={28} />
              </button>

              {/* Prev Button */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-5 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-5 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm z-10">
                {currentIndex + 1} / {galleryImages.length}
              </div>

              {/* Image */}
              <div className="relative w-[90vw] max-w-[85vw] h-[80vh] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
                <OptimizedImage
                  src={currentImage.src}
                  alt={currentImage.alt}
                  type="hero"
                  fill={true}
                  className="object-contain rounded-lg"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back to Top */}
        <div className="text-center mt-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </div>
  );
}