import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import * as LucideIcons from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";
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
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col flex-1 pt-12 md:pt-12 lg:pt-16 xl:pt-20 pb-2 md:pb-6">
        {/* Mobile: Title + badge only, then image, then description + CTAs */}
        {/* Desktop: everything together then image */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-3 md:mb-8 lg:mb-10"
        >
          <span className="hidden md:inline-block glass-panel px-3 py-1 text-[10px] md:text-[11px] lg:text-xs font-medium text-primary mb-3 md:mb-4 lg:mb-5">
            AI Healthcare Platform Designed for Automation, Integration, and Intelligence
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[24px] leading-[1.15] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px] font-medium tracking-tight md:leading-tight text-foreground mb-3 md:mb-4 lg:mb-5 max-w-4xl mx-auto md:whitespace-nowrap text-center"
            style={{ letterSpacing: '-1.5px' }}
          >
            AI-Powered Healthcare{" "}
            <span className="gradient-text">Operating System</span>
          </motion.h1>

          {/* Description & CTAs: hidden on mobile, shown on md+ */}
          <div className="hidden md:block">
            <p className="text-[15px] lg:text-base xl:text-[17px] text-foreground/80 leading-relaxed mb-4 max-w-2xl mx-auto font-medium">
              Borna AI is a unified healthcare platform designed to help practices improve patient engagement, streamline communication, and automate operations through one intelligent system.
            </p>

            <div className="flex flex-row items-center justify-center gap-3">
              <Link to="/demo" className="gradient-btn text-base px-8 py-3 h-11 flex items-center justify-center whitespace-nowrap">Book a demo</Link>
              <a href="#how-it-works" className="ghost-btn text-base px-4 py-3 h-11 flex items-center justify-center whitespace-nowrap">See how it works</a>
            </div>
          </div>
        </motion.div>

        {/* Hero collage image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full mx-auto mb-2 md:mb-8 flex-1 min-h-0"
        >
          {/* Mobile: clean admin dashboard only */}
          <img
            src="/images/Admin_Dashboard.webp"
            alt="Borna Care admin dashboard"
            className="md:hidden w-full h-auto object-contain object-top rounded-lg"
            loading="eager"
            width={1920}
            height={1080}
            style={{ minHeight: '220px' }}
          />
          {/* Desktop: full collage */}
          <img
            src="/images/admin-hero-collage.webp"
            alt="Borna Care platform — admin dashboard, payments, scheduling, forms, and patient management"
            className="hidden md:block w-full h-auto md:h-full object-contain object-top"
            loading="eager"
            width={1920}
            height={1527}
          />
          {/* Bottom fade to blend into page */}
          <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </motion.div>

        {/* Description & CTAs: mobile only, after image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:hidden text-center mb-10 mt-2"
        >
          <p className="text-[12px] sm:text-[13px] text-foreground/80 leading-relaxed mb-4 max-w-sm mx-auto font-medium">
            Borna AI is a unified healthcare platform designed to help practices improve patient engagement, streamline communication, and automate operations through one intelligent system.
          </p>

          <div className="flex flex-row items-center justify-center gap-2">
            <Link to="/demo" className="gradient-btn text-sm px-5 py-2.5 h-10 flex items-center justify-center whitespace-nowrap">Book a demo</Link>
            <a href="#how-it-works" className="ghost-btn text-sm px-4 py-2.5 h-10 flex items-center justify-center whitespace-nowrap">See how it works</a>
          </div>
        </motion.div>

        {/* Module cards — compact, always visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="shrink-0 max-w-5xl mx-auto w-full"
        >
          <div className="flex flex-wrap md:grid md:grid-cols-5 justify-center gap-2 md:gap-3 w-full mx-auto">
            {products.map((product) => {
              const IconComp = iconMap[product.features[0]?.icon] || LucideIcons.Box;
              const isCare = product.id === 'care';
              const statusText = isCare ? '✓ Available now' : (product.id === 'engage' || product.id === 'core') ? 'Coming soon' : 'In development';
              return (
                <Link
                  key={product.id}
                  to={product.href}
                  className="glass-panel-hover p-2 md:p-4 lg:p-3 xl:p-5 text-center group min-w-0 basis-[30%] md:basis-auto md:w-full max-w-[140px]"
                >
                  <div
                    className="w-8 h-8 md:w-11 md:h-11 lg:w-9 lg:h-9 xl:w-12 xl:h-12 rounded-lg mx-auto mb-1 md:mb-2 flex items-center justify-center"
                    style={{ backgroundColor: `${product.accentColor}20` }}
                  >
                    <IconComp className="w-3.5 h-3.5 md:w-5 md:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5" style={{ color: product.accentColor }} />
                  </div>
                  <div className="text-[10px] md:text-xs lg:text-[11px] xl:text-sm font-medium text-foreground truncate">{product.name}</div>
                  <span
                    className="inline-block mt-1 text-[8px] md:text-[10px] font-medium px-1.5 py-0.5 rounded-full truncate"
                    style={{
                      backgroundColor: isCare ? '#00DEC420' : 'rgba(255,255,255,0.08)',
                      color: isCare ? '#00DEC4' : 'rgba(255,255,255,0.3)',
                    }}
                  >
                    {statusText}
                  </span>
                </Link>
              );
            })}
          </div>
          <p className="text-center mt-4 md:mt-5" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
            Borna is built as a modular platform. Each module handles a distinct layer of your practice operations, and all modules share a unified data layer.
          </p>
          <div className="text-center mt-3">
            <Link to="/contact" className="ghost-btn text-sm px-6 py-2.5">Join Early Access</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
