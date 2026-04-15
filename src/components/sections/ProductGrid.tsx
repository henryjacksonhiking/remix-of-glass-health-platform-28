import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Cpu } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = LucideIcons as any;

const ORBIT_RADIUS = 240;
const ROTATION_DURATION = 60;
const NODE_SIZE = 72;

const coreProduct = products.find(p => p.id === 'core')!;
const orbitalProducts = products.filter(p => p.id !== 'core');

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

  const angleStep = 360 / orbitalProducts.length;
  const containerSize = ORBIT_RADIUS * 2 + 300;

  const getDepth = (angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    const depth = (Math.sin(rad) + 1) / 2;
    const scale = 0.75 + depth * 0.25;
    const opacity = 0.6 + depth * 0.4;
    return { scale, opacity, zIndex: Math.round(depth * 10) };
  };

  return (
    <section id="platform" className="py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20 lg:mb-2">
          <span className="text-xs font-medium text-primary uppercase tracking-wider">Platform overview</span>
          <h2 className="section-headline text-foreground mt-3">
            One platform to manage your entire practice
          </h2>
          <p className="mt-4 mx-auto max-w-2xl" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)' }}>
            Borna combines patient engagement software, healthcare CRM, communication tools, analytics, and AI automation into one unified platform.
          </p>
        </div>

        {/* Desktop orbital layout */}
        <div className="hidden lg:flex items-center justify-center" style={{ padding: '40px 0' }}>
          <div
            className="relative"
            style={{ width: containerSize, height: containerSize }}
          >
            {/* Orbit rings */}
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

            {/* Center hub - Borna Core */}
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
              <Cpu className="w-12 h-12 mb-1" style={{ color: coreProduct.accentColor }} />
              <span className="text-[11px] font-semibold text-foreground">Borna Core</span>
              <span className="text-[10px] font-medium text-muted-foreground">AI Engine</span>
            </div>

            {/* Orbiting nodes */}
            <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
              {orbitalProducts.map((product, i) => {
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
                    {!isActive && (
                      <div className="flex flex-col items-center cursor-pointer" style={{ width: NODE_SIZE }}>
                        <div
                          className="rounded-full flex items-center justify-center backdrop-blur-lg"
                          style={{
                            width: NODE_SIZE,
                            height: NODE_SIZE,
                            background: 'rgba(255,255,255,0.05)',
                            border: '1.5px solid rgba(255,255,255,0.15)',
                            boxShadow: `0 0 0 6px ${product.accentColor}1F, 0 0 20px ${product.accentColor}26`,
                          }}
                        >
                          <IconComp style={{ color: product.accentColor, width: 28, height: 28 }} />
                        </div>
                        <span className="whitespace-nowrap text-center" style={{ fontSize: 22, fontWeight: 500, marginTop: 8, color: 'rgba(255,255,255,0.9)' }}>
                          {product.name}
                        </span>
                      </div>
                    )}

                    {isActive && (
                      <div className="absolute" style={{ width: 'min(380px, 340px)', minWidth: 340, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                        <Link
                          to={product.href}
                          className="block group backdrop-blur-lg rounded-2xl shadow-lg transition-all duration-300"
                          style={{
                            padding: 28,
                            background: 'rgba(255,255,255,0.10)',
                            border: '1px solid rgba(255,255,255,0.20)',
                            boxShadow: '0 8px 32px hsla(170, 100%, 43%, 0.1)',
                          }}
                        >
                          <div
                            className="rounded-lg mb-3 flex items-center justify-center"
                            style={{ width: 40, height: 40, backgroundColor: `${product.accentColor}15` }}
                          >
                            <IconComp style={{ color: product.accentColor, width: 20, height: 20 }} />
                          </div>
                          <h3 className="mb-1.5" style={{ fontSize: 18, fontWeight: 600, color: 'rgba(255,255,255,1)' }}>{product.name}</h3>
                          <p className="line-clamp-2" style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
                            {product.tagline}
                          </p>
                          <span className="inline-flex items-center transition-all group-hover:gap-2" style={{ fontSize: 13, marginTop: 16, gap: 6, color: '#00DEC4', opacity: 1 }}>
                            Learn more <ArrowRight style={{ width: 14, height: 14 }} />
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
          {orbitalProducts.map((product, i) => {
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
