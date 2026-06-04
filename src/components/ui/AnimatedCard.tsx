import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';
import { forwardRef } from 'react';

interface AnimatedCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  glowColor?: 'cyan' | 'purple';
}

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ children, glowColor = 'cyan', className, ...props }, ref) => {
    const glowMap = {
      cyan:
        'hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] border-coala-cyan/20 hover:border-coala-cyan/40',
      purple:
        'hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] border-coala-purple/20 hover:border-coala-purple/40',
    };

    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -4 }}
        className={cn(
          'rounded-xl border bg-white/5 p-6 backdrop-blur-sm transition-all duration-300',
          glowMap[glowColor],
          className,
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

AnimatedCard.displayName = 'AnimatedCard';
export { AnimatedCard };
