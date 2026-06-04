import { useRef, lazy, Suspense } from 'react';
import { ArrowRight, Heart, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypewriterText } from '../ui/TypewriterText';
import { useParticleSwarm } from '../../hooks/useParticleSwarm';

const HeroThreeBackground = lazy(() =>
  import('./HeroThreeBackground').then(m => ({
    default: m.HeroThreeBackground,
  }))
);
import { cn } from '../../lib/utils';

const TAGLINES = [
  'Orquesta tu ecosistema de agentes IA',
  'Ahorra plata en AI agents',
  'Instala en 5 minutos',
  'Configuración battle-tested',
];

const linkStyles =
  'relative inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-coala-cyan/50';

const variants = {
  primary:
    'bg-coala-cyan text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] px-8 py-4 text-lg gap-3',
  secondary:
    'bg-coala-purple text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] px-8 py-4 text-lg gap-3',
  outline:
    'border-2 border-coala-cyan text-coala-cyan hover:bg-coala-cyan/10 px-8 py-4 text-lg gap-3',
};

function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useParticleSwarm(canvasRef, {
    count: 100,
    color: '#00FFFF',
    secondaryColor: '#8B5CF6',
    connectionRadius: 180,
    mouseRadius: 250,
  });

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-coala-darker"
      aria-label="Sección principal"
    >
      {/* Optional Three.js background — lazy loaded, falls back to Canvas 2D */}
      <Suspense fallback={null}>
        <HeroThreeBackground />
      </Suspense>

      {/* Particle swarm canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-coala-darker/60 via-transparent to-coala-darker" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-coala-cyan/30 bg-coala-cyan/5 text-coala-cyan text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-coala-cyan animate-pulse" />
            v2.0 — Swarm 6.7
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            COALA-
            <span className="text-coala-cyan">SwarmOPS</span>
          </h1>

          {/* Typewriter tagline */}
          <div className="text-xl sm:text-2xl text-gray-300 mb-10 h-10">
            <TypewriterText
              text={TAGLINES[0]}
              speed={60}
              delay={2000}
              loop={true}
              className="text-coala-cyan/80"
            />
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Deja de pagar por agentes individuales. Coordínalos todos con nuestra configuración
            battle-tested. 19 modos especializados que trabajan en ecosistema.
          </p>

          {/* CTA buttons as styled anchor tags */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/sponsors/oficinadigitalCL"
              className={cn(linkStyles, variants.primary)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Heart size={20} />
              Sponsor en GitHub
            </a>
            <a
              href="https://github.com/Aquilesnake/COALA-SwarmOps/blob/main/docs/INSTALL.md"
              className={cn(linkStyles, variants.secondary)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={20} />
              Instalar Ahora
            </a>
            <a
              href="#modes"
              className={cn(linkStyles, variants.outline)}
            >
              Ver Modos
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-coala-cyan/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-coala-cyan/60" />
        </div>
      </motion.div>
    </section>
  );
}

export { HeroSection };
