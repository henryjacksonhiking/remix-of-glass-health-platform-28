import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import * as LucideIcons from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = LucideIcons as any;

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-background/40" />
      </div>
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block glass-panel px-4 py-1.5 text-xs font-medium text-primary mb-6">
              AI-powered healthcare platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-headline text-foreground mb-6"
          >
            The operating system for{" "}
            <span className="gradient-text">modern clinics</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="body-text mx-auto mb-8"
          >
            Borna.ai unifies patient management, communications, and analytics in one modular ecosystem — built for how clinics actually work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/demo" className="gradient-btn text-base px-8 py-3.5">Book a demo</Link>
            <a href="#platform" className="ghost-btn text-base px-8 py-3.5">See how it works</a>
          </motion.div>
        </div>

        {/* Module cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-4xl mx-auto"
        >
          {products.map((product, i) => {
            const IconComp = iconMap[product.features[0]?.icon] || LucideIcons.Box;
            return (
              <Link
                key={product.id}
                to={product.href}
                className="glass-panel-hover p-4 text-center group"
              >
                <div
                  className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${product.accentColor}20` }}
                >
                  <IconComp className="w-5 h-5" style={{ color: product.accentColor }} />
                </div>
                <div className="text-sm font-medium text-foreground">{product.name}</div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
