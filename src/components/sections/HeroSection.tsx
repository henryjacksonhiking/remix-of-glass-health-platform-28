import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import * as LucideIcons from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import mockupCalendar from "@/assets/mockup-calendar.jpg";
import mockupPayments from "@/assets/mockup-payments.jpg";
import mockupAppointment from "@/assets/mockup-appointment.jpg";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = LucideIcons as any;

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden md:overflow-visible pt-10 pb-8 md:py-28">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-background/40" />
      </div>
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 lg:mb-44">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block glass-panel px-4 py-1.5 text-[11px] md:text-xs font-medium text-primary mb-3 md:mb-6">
              AI-powered healthcare platform
            </span>

            <h1 className="hero-headline text-foreground mb-3 md:mb-6">
              The operating system for{" "}
              <span className="gradient-text">modern clinics</span>
            </h1>

            <p className="text-[13px] md:text-[17px] text-muted-foreground leading-relaxed mb-5 md:mb-8 max-w-lg line-clamp-2 md:line-clamp-none">
              Borna.ai unifies patient management, communications, and analytics in one modular ecosystem — built for how clinics actually work.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-2.5 sm:gap-4 mb-6 md:mb-0">
              <Link to="/demo" className="gradient-btn text-base px-8 py-3 h-11 flex items-center justify-center w-full sm:w-auto whitespace-nowrap">Book a demo</Link>
              <a href="#how-it-works" className="ghost-btn text-base px-8 py-3 h-11 flex items-center justify-center w-full sm:w-auto whitespace-nowrap">See how it works</a>
            </div>
          </motion.div>

          {/* Right side - Product mockups */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-0 lg:mt-0 relative flex justify-center lg:block"
          >
            {/* Mobile: single flat mockup */}
            <div className="md:hidden w-full max-w-[340px] mx-auto rounded-xl overflow-hidden">
              <img
                src={mockupCalendar}
                alt="Borna Care calendar view"
                className="w-full max-h-[220px] object-cover object-top rounded-xl"
              />
            </div>

            {/* Tablet: single centered mockup */}
            <div className="hidden md:block lg:hidden w-full max-w-[420px] mx-auto rounded-xl overflow-hidden shadow-2xl border border-border/30">
              <img
                src={mockupCalendar}
                alt="Borna Care calendar view"
                className="w-full h-auto"
              />
            </div>

            {/* Desktop: layered mockups */}
            <div className="hidden lg:block relative">
              {/* Main mockup - Calendar view */}
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-border/30">
                <img
                  src={mockupCalendar}
                  alt="Borna Care calendar view"
                  className="w-full h-auto rounded-xl"
                />
              </div>

              {/* Floating mockup - Payments (bottom-left, overlapping) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-8 -left-12 z-20 w-[55%] rounded-xl overflow-hidden shadow-2xl border border-border/30"
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
                className="absolute -top-6 -right-6 z-20 w-[45%] rounded-xl overflow-hidden shadow-2xl border border-border/30"
              >
                <img
                  src={mockupAppointment}
                  alt="Borna Care appointment details"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Module cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-5xl mx-auto"
        >
          {products.map((product) => {
            const IconComp = iconMap[product.features[0]?.icon] || LucideIcons.Box;
            return (
              <Link
                key={product.id}
                to={product.href}
                className="glass-panel-hover p-6 text-center group"
              >
                <div
                  className="w-14 h-14 rounded-lg mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${product.accentColor}20` }}
                >
                  <IconComp className="w-6 h-6" style={{ color: product.accentColor }} />
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
