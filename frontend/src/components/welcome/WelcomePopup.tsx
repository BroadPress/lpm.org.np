'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { X, GraduationCap } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const SESSION_KEY = 'ssrvm_welcome_popup_shown';

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [canClose, setCanClose] = useState(false);
  const [countdown, setCountdown] = useState(9);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(SESSION_KEY);
    if (alreadyShown) return;

    setIsVisible(true);
    sessionStorage.setItem(SESSION_KEY, 'true');
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanClose(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const handleClose = useCallback(() => {
    if (!canClose) return;
    setIsVisible(false);
  }, [canClose]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') handleClose();
    }
    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible, handleClose]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-fadeIn"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-scaleIn"
      >
        {/* Close button - countdown सहित */}
        <button
          onClick={handleClose}
          disabled={!canClose}
          aria-label="Close popup"
          className={`absolute top-3 right-3 z-10 rounded-full p-1.5 shadow-md transition-all ${
            canClose
              ? 'bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 cursor-pointer'
              : 'bg-white/60 text-gray-400 cursor-not-allowed'
          }`}
        >
          {canClose ? <X size={18} /> : <span className="text-xs font-semibold w-[18px] h-[18px] flex items-center justify-center">{countdown}</span>}
        </button>

        <div className="bg-gradient-to-br from-[#183a6e] via-[#2c7ac2] to-[#01519c] px-6 pt-8 pb-6 text-center">
          <div className="relative w-16 h-16 mx-auto  rounded-full ">
            <OptimizedImage
              src="/images/brand/logo.jpg"
              alt="Sri Sri Ravishankar Vidya Mandir"
              fill
              className="p-1 w-14 h-14"
              objectFit="contain"
            />
          </div>
          <h2 className="text-white font-bold text-xl md:text-2xl">
            Welcome to Sri Sri Ravishankar Vidya Mandir
          </h2>
          <span className="inline-block mt-2 bg-[#feb505] text-[#002749] text-[10px] px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
            Biratnagar
          </span>
        </div>

        <div className="px-6 py-6">
          <p className="text-gray-600 text-sm leading-relaxed">
            A revered temple of knowledge where every child&apos;s potential is nurtured.
            At our institution, we embrace the profound principle of{' '}
            <span className="font-semibold text-[#183a6e]">&apos;Vidya Dadati Poornatvam&apos;</span>{' '}
            (Education Brings Completeness), guiding our dedication to holistic development.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link
              href="/admission"
              onClick={() => canClose && setIsVisible(false)}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#8d27d6] via-[#2c7ac2] to-[#01519c] text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <GraduationCap size={18} />
              Apply for Admission
            </Link>
            <button
              onClick={handleClose}
              disabled={!canClose}
              className={`flex-1 border px-5 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                canClose
                  ? 'border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer'
                  : 'border-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {canClose ? 'Explore Website' : `Please wait ${countdown}s...`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}