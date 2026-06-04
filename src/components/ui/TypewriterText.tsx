import { useTypingEffect } from '../../hooks/useTypingEffect';
import { cn } from '../../lib/utils';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
  cursorClassName?: string;
}

function TypewriterText({
  text,
  speed,
  delay,
  loop,
  className,
  cursorClassName,
}: TypewriterTextProps) {
  const { displayText, isTyping } = useTypingEffect({
    text,
    speed,
    delay,
    loop,
  });

  return (
    <span className={cn('inline', className)} aria-label={text}>
      {displayText}
      <span
        className={cn(
          'inline-block w-[2px] h-[1em] ml-0.5 align-middle',
          isTyping ? 'bg-coala-cyan animate-pulse' : 'bg-transparent',
          cursorClassName,
        )}
        aria-hidden="true"
      />
    </span>
  );
}

export { TypewriterText };
