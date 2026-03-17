import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/lib/products";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Cpu } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = LucideIcons as any;

const ORBIT_RADIUS = 300; // px from center
const ROTATION_DURATION = 60; // seconds for full rotation

const ProductGrid = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const angleStep = 360 / products.length;

  return (
    <section id="platform" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-primary uppercase tracking-wider">Platform overview</span>
          <h2 className="section-headline text-foreground mt-3">
            Five modules. One unified platform.
          </h2>
        </div>

        {/* Desktop orbital layout */}
        <div className="hidden lg:block">
          <div className="relative mx-auto" style={{ width: 700, height: 700 }}>
            {/* Orbit ring */}
            <div
              className="absolute rounded-full border border-glass-border"
              style={{
                width: ORBIT_RADIUS * 2,
                height: ORBIT_RADIUS * 2,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            {/* Second subtle ring */}
            <div
              className="absolute rounded-full border border-glass-border opacity-30"
              style={{
                width: ORBIT_RADIUS * 2 + 60,
                height: ORBIT_RADIUS * 2 + 60,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />

            {/* Center hub */}
            <motion.div
              className="absolute z-10 flex flex-col items-center justify-center glass-panel"
              style={{
                width: 140,
                height: 140,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                boxShadow: '0 0 80px 20px hsla(170, 100%, 43%, 0.12)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Cpu className="w-8 h-8 text-primary mb-1" />
              <span className="text-sm font-semibold text-foreground">Borna AI</span>
              <span className="text-[10px] text-muted-foreground">Core Engine</span>
            </motion.div>

            {/* Static orbital positions */}
            {products.map((product, i) => {
              const IconComp = iconMap[product.features[0]?.icon] || LucideIcons.Box;
              const angle = (angleStep * i - 90) * (Math.PI / 180);
              const x = Math.cos(angle) * ORBIT_RADIUS;
              const y = Math.sin(angle) * ORBIT_RADIUS;

              return (
                <motion.div
                  key={product.id}
                  className="absolute"
                  style={{
                    width: 220,
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <Link
                    to={product.href}
                    className={`glass-panel-hover p-5 block group transition-all duration-300 ${
                      activeIndex === i ? 'scale-110 !border-primary/30' : activeIndex !== null ? 'opacity-50' : ''
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-lg mb-3 flex items-center justify-center"
                      style={{ backgroundColor: `${product.accentColor}15` }}
                    >
                      <IconComp className="w-5 h-5" style={{ color: product.accentColor }} />
                    </div>
                    <h3 className="text-sm font-medium text-foreground mb-1">{product.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">{product.tagline}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-primary group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full bg-primary/30"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
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
                <Link
                  to={product.href}
                  className="glass-panel-hover p-6 block h-full group"
                >
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
