import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import bornaIcon from "@/assets/borna-icon.svg";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = LucideIcons as any;

const ORBIT_RADIUS = 240;
const ROTATION_DURATION = 60; // seconds per full rotation
const NODE_SIZE = 52;

const ProductGrid = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [rotation, setRotation] = useState(0);
  const animRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const rotationRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    pausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current === 0) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!pausedRef.current) {
        rotationRef.current += (delta / 1000) * (360 / ROTATION_DURATION);
        rotationRef.current %= 360;
        setRotation(rotationRef.current);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const angleStep = 360 / products.length;
  const containerSize = ORBIT_RADIUS * 2 + 300;

  // Depth: bottom of circle (angle 90deg from top) = front, top = back
  const getDepth = (angleDeg: number) => {
    // angleDeg 0 = top, 90 = right, 180 = bottom, 270 = left
    // We want bottom (180) = front (scale 1, opacity 1), top (0) = back
    const rad = (angleDeg * Math.PI) / 180;
    const depth = (Math.sin(rad) + 1) / 2; // 0 at top, 1 at bottom
    const scale = 0.8 + depth * 0.2;
    const opacity = 0.6 + depth * 0.4;
    return { scale, opacity, zIndex: Math.round(depth * 10) };
  };

  return (
    <section id="platform" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-primary uppercase tracking-wider">Platform overview</span>
          <h2 className="section-headline text-foreground mt-3">
            Five modules. One unified platform.
          </h2>
        </div>

        {/* Desktop orbital layout */}
        <div className="hidden lg:flex items-center justify-center" style={{ padding: '120px 0' }}>
          <div
            className="relative"
            style={{ width: containerSize, height: containerSize }}
          >
            {/* Orbit rings - pointer-events: none */}
            <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
              <div
                className="absolute rounded-full border border-glass-border opacity-20"
                style={{
                  width: ORBIT_RADIUS * 2 + 80,
                  height: ORBIT_RADIUS * 2 + 80,
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              <div
                className="absolute rounded-full border border-glass-border opacity-40"
                style={{
                  width: ORBIT_RADIUS * 2,
                  height: ORBIT_RADIUS * 2,
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              <div
                className="absolute rounded-full border border-glass-border opacity-15"
                style={{
                  width: ORBIT_RADIUS * 2 - 100,
                  height: ORBIT_RADIUS * 2 - 100,
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>

            {/* Center hub */}
            <div
              className="absolute z-20 flex flex-col items-center justify-center glass-panel"
              style={{
                width: 130, height: 130,
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                boxShadow: '0 0 80px 20px hsla(170, 100%, 43%, 0.12)',
              }}
            >
              <img src={bornaIcon} alt="Borna AI" className="w-12 h-12 mb-1" />
              <span className="text-[10px] font-medium text-muted-foreground">Core Engine</span>
            </div>

            {/* Orbiting nodes - wrapper has pointer-events: none */}
            <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
              {products.map((product, i) => {
                const IconComp = iconMap[product.features[0]?.icon] || LucideIcons.Box;
                const currentAngle = rotation + angleStep * i;
                const angleRad = ((currentAngle - 90) * Math.PI) / 180;
                const x = Math.cos(angleRad) * ORBIT_RADIUS;
                const y = Math.sin(angleRad) * ORBIT_RADIUS;
                const { scale, opacity, zIndex } = getDepth(currentAngle % 360);
                const isActive = activeIndex === i;

                return (
                  <div
                    key={product.id}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${isActive ? 1 : scale})`,
                      opacity: isActive ? 1 : opacity,
                      zIndex: isActive ? 50 : zIndex,
                      pointerEvents: 'auto',
                      transition: 'opacity 0.3s ease, transform 0.3s ease',
                    }}
                    onMouseEnter={() => {
                      setActiveIndex(i);
                      setIsPaused(true);
                    }}
                    onMouseLeave={() => {
                      setActiveIndex(null);
                      setIsPaused(false);
                    }}
                  >
                    {/* Default: small circular node */}
                    {!isActive && (
                      <div
                        className="flex flex-col items-center gap-1.5 cursor-pointer"
                        style={{ width: NODE_SIZE }}
                      >
                        <div
                          className="rounded-full flex items-center justify-center glass-panel"
                          style={{
                            width: NODE_SIZE,
                            height: NODE_SIZE,
                            boxShadow: `0 0 20px 4px ${product.accentColor}20`,
                          }}
                        >
                          <IconComp style={{ color: product.accentColor, width: 22, height: 22 }} />
                        </div>
                        <span className="whitespace-nowrap text-center font-medium" style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)' }}>
                          {product.name}
                        </span>
                      </div>
                    )}

                    {/* Expanded card on hover */}
                    {isActive && (
                      <div className="absolute" style={{ width: 220, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                        <Link
                          to={product.href}
                          className="glass-panel-hover p-4 block group !border-primary/30 shadow-lg shadow-primary/10"
                        >
                          <div
                            className="w-9 h-9 rounded-lg mb-2 flex items-center justify-center"
                            style={{ backgroundColor: `${product.accentColor}15` }}
                          >
                            <IconComp className="w-4.5 h-4.5" style={{ color: product.accentColor }} />
                          </div>
                          <h3 className="text-sm font-medium text-foreground mb-1">{product.name}</h3>
                          <p className="text-[11px] text-muted-foreground leading-relaxed mb-2 line-clamp-2">
                            {product.tagline}
                          </p>
                          <span className="inline-flex items-center gap-1 text-xs text-primary group-hover:gap-2 transition-all">
                            Learn more <ArrowRight className="w-3 h-3" />
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full bg-primary/30"
                style={{
                  left: `${25 + Math.random() * 50}%`,
                  top: `${25 + Math.random() * 50}%`,
                  pointerEvents: 'none',
                }}
                animate={{ y: [0, -12, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Mobile/tablet fallback grid */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {products.map((product, i) => {
            const IconComp = iconMap[product.features[0]?.icon] || LucideIcons.Box;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={product.href} className="glass-panel-hover p-6 block h-full group">
                  <div
                    className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${product.accentColor}15` }}
                  >
                    <IconComp className="w-6 h-6" style={{ color: product.accentColor }} />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
