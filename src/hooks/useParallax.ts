import { useEffect, useState, type RefObject } from 'react';
import { useReducedMotion } from './useMediaQuery';

interface ParallaxLayer {
  speed: number;
  ref: RefObject<HTMLElement | null>;
}

export function useParallax(layers: ParallaxLayer[]) {
  const reducedMotion = useReducedMotion();
  const [offsets, setOffsets] = useState<number[]>(layers.map(() => 0));

  useEffect(() => {
    if (reducedMotion) {
      setOffsets(layers.map(() => 0));
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffsets(layers.map(layer => scrollY * layer.speed));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [layers, reducedMotion]);

  return offsets;
}
