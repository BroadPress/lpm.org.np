'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { X, Sparkles } from 'lucide-react';

const SESSION_KEY = 'lpm_welcome_popup_shown';

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

        {/* Header - Orange/Pink Gradient */}
        <div className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 px-6 pt-8 pb-6 text-center">
          <div className="relative w-16 h-16 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-white font-bold text-xl md:text-2xl mt-3">
            Welcome to Life Positive Mission
          </h2>
          <span className="inline-block mt-2 bg-white/20 backdrop-blur-sm text-white text-[10px] px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
            Transform Yourself, Transform the World
          </span>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <p className="text-gray-600 text-sm leading-relaxed">
            <span className="font-semibold text-orange-500">Life Positive Mission (LPM)</span>{' '}
            is a volunteer-driven international public charitable non-profit organization 
            committed to building a positive, conscious, and spiritually awakened world 
            through the power of positive energy, leadership, and human transformation.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mt-3">
            Guided by the belief that every individual possesses infinite inner potential, 
            LPM works to inspire people to transform their lives through positive thinking, 
            discipline, self-management, spirituality, and purposeful action.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link
              href="/join-now"
              onClick={() => canClose && setIsVisible(false)}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Sparkles size={18} />
              Join Our Mission
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