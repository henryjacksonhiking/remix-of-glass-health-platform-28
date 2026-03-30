import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import * as LucideIcons from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { BeamsBackground } from "@/components/ui/beams-background";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = LucideIcons as any;

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Background — text area only, transparent behind image */}
      <div className="absolute inset-x-0 top-0 z-0" style={{ height: '45%' }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" loading="eager" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 opacity-60">
          <BeamsBackground intensity="medium" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col flex-1 pt-4 md:pt-12 lg:pt-16 xl:pt-20 pb-2 md:pb-6">
        {/* Text content — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-8 lg:mb-12"
        >
          <span className="inline-block glass-panel px-3 py-1 text-[10px] md:text-[11px] lg:text-xs font-medium text-primary mb-3 md:mb-4 lg:mb-5">
            AI healthcare platform
          </span>

          <h1 className="text-[24px] leading-[1.15] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px] font-medium tracking-tight md:leading-tight text-foreground mb-3 md:mb-4 lg:mb-5" style={{ letterSpacing: '-1.5px' }}>
            The healthcare operations platform for{" "}
            <span className="gradient-text">modern clinics</span>
          </h1>

          <p className="text-[12px] sm:text-[13px] md:text-[15px] lg:text-base xl:text-[17px] text-muted-foreground leading-relaxed mb-4 md:mb-6 max-w-xl mx-auto">
            Borna.ai is a HealthTech SaaS for clinics — unifying patient management, communications, and analytics in one modular ecosystem built for how clinics actually work.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <Link to="/demo" className="gradient-btn text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3 h-10 md:h-11 flex items-center justify-center w-full sm:w-auto whitespace-nowrap">Book a demo</Link>
            <a href="#how-it-works" className="ghost-btn text-sm md:text-base px-6 md:px-4 py-2.5 md:py-3 h-10 md:h-11 flex items-center justify-center w-full sm:w-auto whitespace-nowrap">See how it works</a>
          </div>
        </motion.div>

        {/* Hero collage image — full width */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full mx-auto mb-12 md:mb-8 min-h-0"
        >
          <img
            src="/images/admin-hero-collage.webp"
            alt="Borna Care platform — admin dashboard, payments, scheduling, forms, and patient management"
            className="w-full h-full object-contain object-top"
            loading="eager"
            width={1920}
            height={1527}
          />
          {/* Bottom fade to blend into page */}
          <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </motion.div>

        {/* Module cards — compact, always visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-3 gap-2 md:grid-cols-5 md:gap-3 max-w-5xl mx-auto w-full shrink-0"
        >
          {products.map((product) => {
            const IconComp = iconMap[product.features[0]?.icon] || LucideIcons.Box;
            return (
              <Link
                key={product.id}
                to={product.href}
                className="glass-panel-hover p-2 md:p-4 lg:p-3 xl:p-5 text-center group min-w-0"
              >
                <div
                  className="w-8 h-8 md:w-11 md:h-11 lg:w-9 lg:h-9 xl:w-12 xl:h-12 rounded-lg mx-auto mb-1 md:mb-2 flex items-center justify-center"
                  style={{ backgroundColor: `${product.accentColor}20` }}
                >
                  <IconComp className="w-3.5 h-3.5 md:w-5 md:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5" style={{ color: product.accentColor }} />
                </div>
                <div className="text-[10px] md:text-xs lg:text-[11px] xl:text-sm font-medium text-foreground truncate">{product.name}</div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
