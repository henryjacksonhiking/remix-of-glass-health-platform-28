import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";

export interface KeyTakeawayItem {
  icon: LucideIcon;
  text: string;
}

interface KeyTakeawaysProps {
  items: KeyTakeawayItem[];
  title?: string;
  className?: string;
  /** Use compact 4-col grid (default) or 4-col with larger spacing */
  variant?: "compact" | "spacious";
}

/**
 * Standardized "Key takeaways" section with:
 * - Staggered sequential reveal (1 → N)
 * - Per-item Lucide icon (no repetition required)
 * - Glassmorphism panel matching the homepage style
 */
const KeyTakeaways = ({
  items,
  title = "Key takeaways",
  className = "",
  variant = "compact",
}: KeyTakeawaysProps) => {
  const isSpacious = variant === "spacious";
  return (
    <section className={`py-12 md:py-20 border-t border-glass-border ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="section-headline text-foreground text-center mb-10 md:mb-12"
        >
          {title}
        </motion.h2>

        <div
          className={`grid grid-cols-2 ${
            isSpacious
              ? "md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-5xl"
              : "md:grid-cols-4 gap-4"
          } mx-auto`}
        >
          {items.map((item, i) => {
            const Icon = item.icon ?? Sparkles;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.45, ease: "easeOut" }}
                className="rounded-xl p-5 text-center flex flex-col items-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "0.5px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="w-4.5 h-4.5 text-primary" strokeWidth={2} size={18} />
                </div>
                <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyTakeaways;
