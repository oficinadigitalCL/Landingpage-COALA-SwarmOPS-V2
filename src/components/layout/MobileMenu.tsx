import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileMenuProps {
  links: { text: string; href: string }[];
  onLinkClick: (href: string) => void;
  onClose: () => void;
}

function MobileMenu({ links, onLinkClick, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-40 bg-coala-darker/95 backdrop-blur-lg md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menú móvil"
    >
      <div className="flex flex-col items-center justify-center h-full gap-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-300 hover:text-coala-cyan"
          aria-label="Cerrar menú"
        >
          <X size={28} />
        </button>
        {links.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              onLinkClick(link.href);
            }}
            className="text-2xl font-semibold text-gray-200 hover:text-coala-cyan transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {link.text}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export { MobileMenu };
