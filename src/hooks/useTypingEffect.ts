import { useState, useEffect, useCallback } from 'react';

interface UseTypingEffectOptions {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
}

export function useTypingEffect({ text, speed = 50, delay = 1000, loop = true }: UseTypingEffectOptions) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const reset = useCallback(() => {
    setDisplayText('');
    setIsTyping(true);
    setIsComplete(false);
  }, []);

  useEffect(() => {
    if (!isTyping) {
      if (loop) {
        const timeout = setTimeout(() => {
          reset();
        }, delay);
        return () => clearTimeout(timeout);
      }
      return;
    }

    if (displayText.length >= text.length) {
      setIsTyping(false);
      setIsComplete(true);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(text.slice(0, displayText.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, text, speed, delay, loop, reset]);

  useEffect(() => {
    reset();
  }, [text, reset]);

  return { displayText, isTyping, isComplete, reset };
}
