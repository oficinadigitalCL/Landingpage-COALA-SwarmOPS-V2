import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '../../lib/utils';
import { MobileMenu } from './MobileMenu';

const NAV_LINKS = [
  { text: 'Inicio', href: '#hero' },
  { text: 'Cómo Funciona', href: '#how-it-works' },
  { text: 'Modos', href: '#modes' },
  { text: 'Precios', href: '#pricing' },
  { text: 'Comunidad', href: '#community' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-coala-darker/80 backdrop-blur-md border-b border-white/5 shadow-lg'
            : 'bg-transparent',
        )}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#hero"
              className="text-xl font-bold text-coala-cyan hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
            >
              🐨 COALA SwarmOPS
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm text-gray-300 hover:text-coala-cyan transition-colors"
                >
                  {link.text}
                </a>
              ))}
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <LanguageSwitcher />
              <ThemeToggle />
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="text-gray-300 hover:text-coala-cyan p-1"
                aria-label={isMobileOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <MobileMenu
            links={NAV_LINKS}
            onLinkClick={handleNavClick}
            onClose={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export { Navbar };
