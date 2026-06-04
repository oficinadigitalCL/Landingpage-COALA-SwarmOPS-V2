import { useEffect, useRef, useCallback } from 'react';
import { useReducedMotion, useIsMobile } from './useMediaQuery';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

interface UseParticleSwarmOptions {
  count?: number;
  color?: string;
  secondaryColor?: string;
  connectionRadius?: number;
  mouseRadius?: number;
  speed?: number;
  fps?: number;
}

export function useParticleSwarm(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  options: UseParticleSwarmOptions = {}
) {
  const {
    count: baseCount = 80,
    color = '#00FFFF',
    secondaryColor = '#8B5CF6',
    connectionRadius = 150,
    mouseRadius = 200,
    speed = 0.5,
    fps = 60,
  } = options;

  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const count = isMobile ? Math.floor(baseCount * 0.4) : baseCount;

  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const frameInterval = 1000 / fps;

  const createParticle = useCallback((width: number, height: number): Particle => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * speed,
    vy: (Math.random() - 0.5) * speed,
    radius: Math.random() * 3 + 1,
    color: Math.random() > 0.5 ? color : secondaryColor,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  }), [color, secondaryColor, speed]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, [canvasRef]);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -1000, y: -1000 };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;

      if (particlesRef.current.length === 0) {
        particlesRef.current = Array.from({ length: count }, () =>
          createParticle(canvas.width, canvas.height)
        );
      }
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas.parentElement || canvas);
    resizeCanvas();

    if (reducedMotion) {
      const drawStatic = () => {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particlesRef.current.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = 0.4;
          ctx.fill();
        });
        ctx.globalAlpha = 1;
      };
      drawStatic();
      return () => resizeObserver.disconnect();
    }

    const animate = (timestamp: number) => {
      if (!ctx || !canvas) return;

      const deltaTime = timestamp - lastTimeRef.current;
      if (deltaTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = timestamp - (deltaTime % frameInterval);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        p.x = Math.max(0, Math.min(canvas.width, p.x));
        p.y = Math.max(0, Math.min(canvas.height, p.y));

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius) {
          const force = (mouseRadius - dist) / mouseRadius;
          p.vx -= (dx / dist) * force * 0.5;
          p.vy -= (dy / dist) * force * 0.5;
        }

        p.pulse += p.pulseSpeed;
        const alpha = 0.4 + Math.sin(p.pulse) * 0.3;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < connectionRadius) {
            const lineAlpha = (1 - cdist / connectionRadius) * 0.3;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    particlesRef.current = Array.from({ length: count }, () =>
      createParticle(canvas.width, canvas.height)
    );

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      particlesRef.current = [];
    };
  }, [canvasRef, count, color, secondaryColor, connectionRadius, mouseRadius, speed, fps, reducedMotion, createParticle, handleMouseMove, handleMouseLeave, frameInterval]);

  return { mouseRef };
}
