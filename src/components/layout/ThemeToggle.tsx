import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../lib/utils';

function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'p-2 rounded-lg text-gray-300 hover:text-coala-cyan hover:bg-white/5 transition-colors',
        className,
      )}
      aria-label={
        resolvedTheme === 'dark'
          ? 'Cambiar a modo claro'
          : 'Cambiar a modo oscuro'
      }
    >
      {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export { ThemeToggle };
