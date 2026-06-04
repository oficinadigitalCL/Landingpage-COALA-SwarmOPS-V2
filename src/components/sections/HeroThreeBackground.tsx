import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// ── Floating node geometry ──────────────────────────────────
function SwarmNode({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(state => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          metalness={0.1}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

// ── Connection lines between close nodes ────────────────────
// Uses <lineSegments> because R3F maps <line> to SVG, not THREE.Line
function SwarmConnections({
  nodes,
}: {
  nodes: [number, number, number][];
}) {
  const geometry = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i][0] - nodes[j][0];
        const dy = nodes[i][1] - nodes[j][1];
        const dz = nodes[i][2] - nodes[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 5) {
          positions.push(...nodes[i], ...nodes[j]);
        }
      }
    }

    if (positions.length === 0) return null;

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, [nodes]);

  if (!geometry) return null;

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#00FFFF" transparent opacity={0.15} />
    </lineSegments>
  );
}

// ── Main 3D scene ───────────────────────────────────────────
function SwarmScene() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const colors = ['#00FFFF', '#8B5CF6', '#06B6D4', '#A855F7'];
    const result: { position: [number, number, number]; color: string }[] = [];
    for (let i = 0; i < 30; i++) {
      result.push({
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6 - 2,
        ],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return result;
  }, []);

  useFrame(state => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    groupRef.current.rotation.x =
      Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <SwarmNode key={i} position={node.position} color={node.color} />
      ))}
      <SwarmConnections nodes={nodes.map(n => n.position)} />
    </group>
  );
}

// ── Three.js background variant for Hero (lazy-loaded) ──────
function HeroThreeBackground() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight
          position={[10, 10, 10]}
          intensity={0.5}
          color="#00FFFF"
        />
        <Suspense fallback={null}>
          <SwarmScene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export { HeroThreeBackground };
