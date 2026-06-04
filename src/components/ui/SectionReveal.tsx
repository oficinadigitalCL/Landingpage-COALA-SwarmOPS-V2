import { motion } from 'framer-motion';
import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useMediaQuery';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

function SectionReveal({
  children,
  className,
  direction = 'up',
  delay = 0,
}: SectionRevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const reducedMotion = useReducedMotion();

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const initial = reducedMotion
    ? {}
    : { opacity: 0, ...directionMap[direction] };
  const animate = reducedMotion || isVisible
    ? { opacity: 1, x: 0, y: 0 }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export { SectionReveal };
