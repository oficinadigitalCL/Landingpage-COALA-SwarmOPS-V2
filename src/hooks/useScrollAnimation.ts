import { useEffect, useState, type RefObject } from 'react';

export function useScrollAnimation(ref: RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const elementTop = rect.top;
      const elementHeight = rect.height;

      if (elementTop > windowHeight) {
        setProgress(0);
      } else if (elementTop + elementHeight < 0) {
        setProgress(1);
      } else {
        const visible = windowHeight - elementTop;
        const total = windowHeight + elementHeight;
        setProgress(Math.max(0, Math.min(1, visible / total)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return progress;
}
