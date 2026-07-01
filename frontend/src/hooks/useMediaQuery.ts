'use client';

import { useSyncExternalStore } from 'react';

export const useMediaQuery = (query: string): boolean => {
  return useSyncExternalStore(
    (onStoreChange) => {
      const media = window.matchMedia(query);
      const listener = () => onStoreChange();

      if (media.addEventListener) {
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
      }

      media.addListener(listener);
      return () => media.removeListener(listener);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
};

export const useMobile = () => useMediaQuery('(max-width: 767px)');
export const useTablet = () => useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
export const useDesktop = () => useMediaQuery('(min-width: 1024px)');
