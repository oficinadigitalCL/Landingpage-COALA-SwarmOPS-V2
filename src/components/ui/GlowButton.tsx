import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';
import { forwardRef } from 'react';

interface GlowButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const baseStyles =
      'relative inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-coala-cyan/50 disabled:opacity-50';

    const variants = {
      primary:
        'bg-coala-cyan text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]',
      secondary:
        'bg-coala-purple text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]',
      outline:
        'border-2 border-coala-cyan text-coala-cyan hover:bg-coala-cyan/10',
      ghost: 'text-gray-300 hover:text-coala-cyan hover:bg-white/5',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-2',
      md: 'px-6 py-3 text-base gap-2',
      lg: 'px-8 py-4 text-lg gap-3',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        aria-label={props['aria-label'] ?? typeof children === 'string' ? children as string : undefined}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);

GlowButton.displayName = 'GlowButton';
export { GlowButton };
