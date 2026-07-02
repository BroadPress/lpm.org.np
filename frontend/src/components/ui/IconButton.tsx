// components/ui/IconButton.tsx
'use client';

import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface IconButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'default' | 'primary' | 'ghost';
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, variant = 'default', className, ...props }, ref) => {
    const variants = {
      default: 'hover:bg-gray-100 text-gray-600',
      primary: 'hover:bg-orange-50 text-orange-500',
      ghost: 'hover:bg-transparent',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'p-2 rounded-lg transition-all duration-200',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

IconButton.displayName = 'IconButton';
