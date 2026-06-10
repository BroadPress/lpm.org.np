'use client';

import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

    const updatePosition = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setIsScrolling(true);
      
      if(scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 150);

      lastScrollY = currentScrollY;
      ticking = false;
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { scrollPosition, isScrolling, scrollDirection, isScrolled: scrollPosition > 50 };
};