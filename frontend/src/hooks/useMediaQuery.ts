'use client';

import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } else {
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [query]);

  return matches;
};

export const useMobile = () => useMediaQuery('(max-width: 767px)');
export const useTablet = () => useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
export const useDesktop = () => useMediaQuery('(min-width: 1024px)');