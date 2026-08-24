'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { getAllGalleryImages, GalleryImage } from '@/lib/supabase/gallery';

export default function GalleryClient() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllGalleryImages();
        setImages(data);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const currentIndex = selectedId ? images.findIndex(img => img.id === selectedId) : -1;
  const currentImage = currentIndex >= 0 ? images[currentIndex] : null;

  const handlePrev = useCallback(() => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedId(images[newIndex].id);
  }, [currentIndex, images]);

  const handleNext = useCallback(() => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedId(images[newIndex].id);
  }, [currentIndex, images]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedId) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId, handlePrev, handleNext]);

  useEffect(() => {
    document.body.style.overflow = selectedId ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Memories</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">Our Photo Gallery</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto my-3 rounded-full" />
          <p className="text-gray-500">{images.length} images</p>
        </div>

        {images.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No images in gallery yet.</p>
          </div>
        ) : (
          <>
            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-0">
              {images.map((img, idx) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 12) * 0.04 }}
                  className="break-inside-avoid mb-4 group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative"
                  onClick={() => setSelectedId(img.id)}
                >
                  <OptimizedImage
                    src={img.image_url}
                    alt={img.alt_text || img.title}
                    fill={false}
                    width={600}
                    height={400}
                    className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <ZoomIn size={26} className="text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Back to Top */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedId && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setSelectedId(null)}
          >
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/25 transition-colors text-white"
            >
              <X size={26} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors text-white"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors text-white"
            >
              <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-1.5 text-white text-sm z-10">
              {currentIndex + 1} / {images.length}
            </div>

            <motion.div
              key={currentImage.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-h-[85vh] min-h-[300px]">
                <OptimizedImage
                  src={currentImage.image_url}
                  alt={currentImage.alt_text || currentImage.title}
                  fill={true}
                  className="object-contain rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}