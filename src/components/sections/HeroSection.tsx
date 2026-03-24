import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import * as LucideIcons from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import mockupCalendar from "@/assets/mockup-calendar.jpg";
import mockupPayments from "@/assets/mockup-payments.jpg";
import mockupAppointment from "@/assets/mockup-appointment.jpg";
import { BeamsBackground } from "@/components/ui/beams-background";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = LucideIcons as any;

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] flex flex-col">
      {/* Background image + beams */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" loading="eager" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 opacity-60">
          <BeamsBackground intensity="medium" />
        </div>
      </div>

      {/* Content wrapper — fills available space */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col flex-1 min-h-0 pt-6 pb-4 md:pt-8 md:pb-6 lg:pt-8 lg:pb-6 xl:pt-12 xl:pb-8 2xl:pt-16 2xl:pb-10">
        {/* Top area: text + visual — takes remaining space */}
        <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <span className="inline-block glass-panel px-3 py-1 text-[10px] md:text-[11px] lg:text-xs font-medium text-primary mb-2 md:mb-3 lg:mb-4 xl:mb-5 self-start">
              AI-powered healthcare platform
            </span>

            <h1 className="text-[24px] leading-[1.15] sm:text-[28px] md:text-[32px] lg:text-[28px] xl:text-[38px] 2xl:text-[44px] font-medium tracking-tight md:leading-tight text-foreground mb-2 md:mb-3 lg:mb-3 xl:mb-5" style={{ letterSpacing: '-1.5px' }}>
              The operating system for{" "}
              <span className="gradient-text">modern clinics</span>
            </h1>

            <p className="text-[12px] sm:text-[13px] md:text-[15px] lg:text-[12px] xl:text-base 2xl:text-[17px] text-muted-foreground leading-relaxed mb-3 md:mb-4 lg:mb-3 xl:mb-6 max-w-lg line-clamp-2 md:line-clamp-3 lg:line-clamp-2 xl:line-clamp-none">
              Borna.ai unifies patient management, communications, and analytics in one modular ecosystem — built for how clinics actually work.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-2 sm:gap-3">
              <Link to="/demo" className="gradient-btn text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3 h-10 md:h-11 flex items-center justify-center w-full sm:w-auto whitespace-nowrap">Book a demo</Link>
              <a href="#how-it-works" className="ghost-btn text-sm md:text-base px-6 md:px-4 py-2.5 md:py-3 h-10 md:h-11 flex items-center justify-center w-full sm:w-auto whitespace-nowrap">See how it works</a>
            </div>
          </motion.div>

          {/* Right side - Product mockups */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:flex items-center justify-center min-h-0"
          >
            {/* Tablet portrait: single mockup, contained */}
            <div className="lg:hidden w-full max-w-[340px] mx-auto rounded-xl overflow-hidden shadow-2xl border border-border/30 max-h-[280px]">
              <img
                src={mockupCalendar}
                alt="Borna Care calendar view"
                className="w-full h-full object-cover object-top"
                loading="eager"
                width={1440}
                height={900}
              />
            </div>

            {/* Desktop: layered mockups — inset so nothing clips */}
            <div className="hidden lg:block relative w-full max-h-[280px] xl:max-h-[420px] 2xl:max-h-[480px] overflow-visible">
              {/* Main mockup - Calendar view */}
              <div className="relative z-10 mx-6 xl:mx-8 rounded-xl overflow-hidden shadow-2xl border border-border/30">
                <img
                  src={mockupCalendar}
                  alt="Borna Care calendar view"
                  className="w-full h-auto rounded-xl"
                />
              </div>

              {/* Floating mockup - Payments (bottom-left) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-8 left-0 z-20 w-[55%] rounded-xl overflow-hidden shadow-2xl border border-border/30"
              >
                <img
                  src={mockupPayments}
                  alt="Borna Care payments dashboard"
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Floating mockup - Appointment detail (top-right) */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-6 right-0 z-20 w-[45%] rounded-xl overflow-hidden shadow-2xl border border-border/30"
              >
                <img
                  src={mockupAppointment}
                  alt="Borna Care appointment details"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile-only: compact mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:hidden w-full max-w-[340px] mx-auto rounded-xl overflow-hidden max-h-[180px] sm:max-h-[220px]"
          >
            <img
              src={mockupCalendar}
              alt="Borna Care calendar view"
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </motion.div>
        </div>

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
