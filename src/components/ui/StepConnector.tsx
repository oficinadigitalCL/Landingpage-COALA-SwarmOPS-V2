import { motion } from 'framer-motion';
import { useReveal } from '../../hooks/useReveal';

interface StepConnectorProps {
  isActive?: boolean;
  className?: string;
}

function StepConnector({ isActive: _isActive = false, className }: StepConnectorProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`flex items-center justify-center ${className || ''}`}
      aria-hidden="true"
    >
      <svg width="100" height="4" className="hidden md:block">
        <motion.line
          x1="0"
          y1="2"
          x2="100"
          y2="2"
          stroke="currentColor"
          strokeWidth="2"
          className="text-coala-cyan/30"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </svg>
      <svg width="4" height="40" className="md:hidden">
        <motion.line
          x1="2"
          y1="0"
          x2="2"
          y2="40"
          stroke="currentColor"
          strokeWidth="2"
          className="text-coala-cyan/30"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </svg>
    </div>
  );
}

export { StepConnector };
