import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { MessageSquare, Users, BarChart3, Smartphone, Cpu, LucideIcon } from "lucide-react";

/* Wireframe globe with glowing core */
const Globe = () => {
  const groupRef = useRef<THREE.Group>(null);
  const dotsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.15;
  });

  // Generate dots scattered on a sphere (continents-like density)
  const positions = (() => {
    const count = 1800;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 1.5;
      arr[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      arr[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  })();

  return (
    <group ref={groupRef}>
      {/* Inner glowing sphere */}
      <Sphere args={[1.45, 48, 48]}>
        <meshBasicMaterial color="#00DEC4" transparent opacity={0.08} />
      </Sphere>
      {/* Wireframe sphere */}
      <Sphere args={[1.5, 32, 32]}>
        <meshBasicMaterial color="#00DEC4" wireframe transparent opacity={0.25} />
      </Sphere>
      {/* Dot points */}
      <points ref={dotsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#00DEC4" size={0.025} sizeAttenuation transparent opacity={0.9} />
      </points>
      {/* Outer halo */}
      <Sphere args={[1.7, 32, 32]}>
        <meshBasicMaterial color="#00DEC4" transparent opacity={0.04} />
      </Sphere>
    </group>
  );
};

interface FeatureCard {
  label: string;
  Icon: LucideIcon;
  /** position as % of container { left, top } */
  pos: { left: string; top: string };
  /** float delay */
  delay?: number;
}

const cards: FeatureCard[] = [
  { label: "Communication", Icon: MessageSquare, pos: { left: "50%", top: "4%" }, delay: 0 },
  { label: "CRM", Icon: Users, pos: { left: "86%", top: "32%" }, delay: 0.4 },
  { label: "Analytics", Icon: BarChart3, pos: { left: "80%", top: "78%" }, delay: 0.8 },
  { label: "Patient Experience", Icon: Smartphone, pos: { left: "14%", top: "78%" }, delay: 1.2 },
  { label: "Automation", Icon: Cpu, pos: { left: "8%", top: "32%" }, delay: 1.6 },
];

const EcosystemGlobe = () => {
  return (
    <div className="relative w-full max-w-[520px] aspect-square mx-auto">
      {/* 3D canvas */}
      <div className="absolute inset-[12%] rounded-full">
        <Canvas
          camera={{ position: [0, 0, 4.2], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#00DEC4" />
          <Suspense fallback={null}>
            <Globe />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.6}
            rotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Soft outer glow */}
      <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_center,hsla(170,100%,43%,0.25),transparent_70%)] pointer-events-none" />

      {/* Floating feature cards */}
      {cards.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
          className="absolute z-10"
          style={{ left: c.pos.left, top: c.pos.top, transform: "translate(-50%, -50%)" }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: c.delay }}
            className="flex flex-col items-center gap-1.5 glass-panel rounded-xl px-3 py-2 border border-primary/30 shadow-[0_8px_24px_-8px_hsla(170,100%,43%,0.35)] backdrop-blur-md"
          >
            <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center border border-primary/40">
              <c.Icon className="w-4 h-4 text-primary" strokeWidth={1.75} />
            </div>
            <span className="text-[11px] font-medium text-foreground/90 whitespace-nowrap">
              {c.label}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default EcosystemGlobe;
