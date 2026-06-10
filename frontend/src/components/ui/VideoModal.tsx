'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
    >
      <div className="relative w-full max-w-4xl">
        <button 
          onClick={onClose} 
          className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
        >
          <X size={24} />
        </button>
        <div className="relative pt-[56.25%]">
          <iframe 
            src={videoUrl} 
            title="Video" 
            className="absolute inset-0 w-full h-full rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </motion.div>
  );
}