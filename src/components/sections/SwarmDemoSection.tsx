import { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParticleSwarm } from '../../hooks/useParticleSwarm';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { GlowButton } from '../ui/GlowButton';


interface SpawnedAgent {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  color: string;
  spawnTime: number;
}

const AGENT_COLORS = ['#00FFFF', '#8B5CF6', '#06B6D4', '#A855F7', '#22D3EE'];
const MAX_AGENTS = 20;
const SEEK_SPEED = 2;
const SEEK_THRESHOLD = 5;

function SwarmDemoSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [agents, setAgents] = useState<SpawnedAgent[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const isMobile = useIsMobile();
  const agentIdRef = useRef(0);

  // Ambient swarm background
  useParticleSwarm(canvasRef, {
    count: isMobile ? 30 : 60,
    color: '#00FFFF',
    secondaryColor: '#8B5CF6',
    connectionRadius: 120,
    mouseRadius: 180,
    speed: 0.3,
  });

  // ── Spawn an agent on click/tap ─────────────────────────
  const spawnAgent = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const color = AGENT_COLORS[Math.floor(Math.random() * AGENT_COLORS.length)];
    const targetX = rect.width * (0.2 + Math.random() * 0.6);
    const targetY = rect.height * (0.2 + Math.random() * 0.6);

    const newAgent: SpawnedAgent = {
      id: agentIdRef.current++,
      x,
      y,
      targetX,
      targetY,
      color,
      spawnTime: Date.now(),
    };

    setAgents(prev => [...prev, newAgent].slice(-MAX_AGENTS));
    setClickCount(c => c + 1);
  }, []);

  const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    spawnAgent(e.clientX, e.clientY);
  }, [spawnAgent]);

  const handleCanvasTouch = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 0) return;
    const touch = e.touches[0];
    spawnAgent(touch.clientX, touch.clientY);
  }, [spawnAgent]);

  // ── Seek-target animation loop ──────────────────────────
  useEffect(() => {
    if (agents.length === 0) return;

    const id = setInterval(() => {
      setAgents(prev =>
        prev.map(agent => {
          const dx = agent.targetX - agent.x;
          const dy = agent.targetY - agent.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < SEEK_THRESHOLD) {
            // Reached target → pick a new one
            const canvas = canvasRef.current;
            const w = canvas?.width ?? 800;
            const h = canvas?.height ?? 600;
            return {
              ...agent,
              targetX: w * (0.1 + Math.random() * 0.8),
              targetY: h * (0.1 + Math.random() * 0.8),
            };
          }

          return {
            ...agent,
            x: agent.x + (dx / dist) * SEEK_SPEED,
            y: agent.y + (dy / dist) * SEEK_SPEED,
          };
        })
      );
    }, 16); // ~60 fps

    return () => clearInterval(id);
  }, [agents.length]);

  const handleReset = useCallback(() => {
    setAgents([]);
    setClickCount(0);
    agentIdRef.current = 0;
  }, []);

  return (
    <section
      id="swarm-demo"
      className="relative py-24 sm:py-32 bg-coala-darker overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Prueba el Enjambre
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Haz click en el canvas para spawnear agentes. Mira cómo buscan su
            objetivo automáticamente &mdash; así funciona COALA-SwarmOPS con tus
            tareas.
          </p>
        </div>

        {/* Canvas + spawned-agent overlays */}
        <div className="relative rounded-xl border border-white/10 overflow-hidden bg-coala-darker/50 backdrop-blur-sm">
          <canvas
            ref={canvasRef}
            onClick={handleCanvasClick}
            onTouchStart={handleCanvasTouch}
            className="w-full h-[400px] sm:h-[500px] cursor-crosshair"
            aria-label="Demo interactiva del enjambre. Haz click para añadir agentes."
            role="img"
          />

          {/* Spawned-agent CSS indicators (pulse on spawn, driven by re-render) */}
          {agents.map(agent => (
            <motion.div
              key={agent.id}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: [0, 1.5, 0.8], opacity: [1, 0.8, 0.4] }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="absolute w-3 h-3 rounded-full pointer-events-none"
              style={{
                left: agent.x,
                top: agent.y,
                backgroundColor: agent.color,
                boxShadow: `0 0 12px ${agent.color}`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <p className="text-gray-400 text-sm">
            Agentes activos:{' '}
            <span className="text-coala-cyan font-mono">{agents.length}</span>
            {' | '}
            Clicks:{' '}
            <span className="text-coala-cyan font-mono">{clickCount}</span>
          </p>
          <GlowButton variant="ghost" size="sm" onClick={handleReset}>
            Reiniciar
          </GlowButton>
        </div>
      </div>
    </section>
  );
}

export { SwarmDemoSection };
