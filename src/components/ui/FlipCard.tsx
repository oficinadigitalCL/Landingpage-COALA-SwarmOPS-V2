import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useState } from 'react';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

function FlipCard({ front, back, className }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn('perspective-1000 h-64 cursor-pointer', className)}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => e.key === 'Enter' && setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      aria-label={
        isFlipped ? 'Mostrar frente de la tarjeta' : 'Mostrar reverso de la tarjeta'
      }
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-xl border border-white/10 bg-white/5 p-6 flex items-center justify-center">
          {front}
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl border border-coala-cyan/30 bg-coala-dark/90 p-6 flex items-center justify-center"
          style={{ transform: 'rotateY(180deg)' }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}

export { FlipCard };
