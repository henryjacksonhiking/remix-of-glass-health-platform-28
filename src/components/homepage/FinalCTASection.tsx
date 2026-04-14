import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FinalCTASection = () => (
  <section id="cta" className="py-32 relative overflow-hidden">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0B1130] to-background" />

    {/* Subtle particle dots — CSS only */}
    <div className="absolute inset-0" style={{ opacity: 0.15 }}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary animate-pulse"
          style={{
            left: `${(i * 37 + 13) % 100}%`,
            top: `${(i * 53 + 7) % 100}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + (i % 3)}s`,
          }}
        />
      ))}
    </div>

    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-[36px] font-medium text-foreground mb-8"
        style={{ letterSpacing: "-0.5px" }}
      >
        Start with Borna Care. Grow with AI.
      </motion.h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to="/demo" className="gradient-btn text-base px-8 py-3.5 w-full sm:w-[240px]">
          Book a demo
        </Link>
        <Link to="/contact" className="ghost-btn text-base px-8 py-3.5 w-full sm:w-[240px]">
          Talk to sales
        </Link>
      </div>
    </div>
  </section>
);

export default FinalCTASection;
