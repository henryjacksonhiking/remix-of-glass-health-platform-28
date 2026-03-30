import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import * as LucideIcons from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { BeamsBackground } from "@/components/ui/beams-background";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = LucideIcons as any;

const floatingCards = [
  {
    src: "/images/Notifications_Admin_Side_-_View_All.png",
    label: "Recent activity",
    width: 195, height: 210, top: 40, left: 10, right: undefined, bottom: undefined,
    rotate: -2.5,
    enterX: -40, delay: 0.4,
    floatY: -13, floatDur: 5.5, floatDelay: 1.2,
  },
  {
    src: "/images/Patient_s_Forms.png",
    label: "Forms overview",
    width: 185, height: 200, top: 40, right: 10, left: undefined, bottom: undefined,
    rotate: 2,
    enterX: 40, delay: 0.5,
    floatY: -10, floatDur: 6.5, floatDelay: 1.4,
  },
  {
    src: "/images/New_Payment_Request__-_OWNER_and_ADMIN_ONLY.png",
    label: "Payment request",
    width: 200, height: 195, bottom: 60, left: 16, right: undefined, top: undefined,
    rotate: -1.5,
    enterX: -40, delay: 0.6,
    floatY: -15, floatDur: 7, floatDelay: 1.6,
  },
  {
    src: "/images/Choose_your_appointment__1_.png",
    label: "Patient booking",
    width: 190, height: 185, bottom: 60, right: 16, left: undefined, top: undefined,
    rotate: 2.5,
    enterX: 40, delay: 0.7,
    floatY: -11, floatDur: 5.8, floatDelay: 1.8,
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Background image + beams */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" loading="eager" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 opacity-60">
          <BeamsBackground intensity="medium" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col flex-1 pt-8 md:pt-12 lg:pt-16 xl:pt-20 pb-4 md:pb-6">
        {/* Text content — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-6 md:mb-8 lg:mb-10"
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

        {/* Floating screens visual stage */}
        <div className="relative mx-auto w-full max-w-[720px] h-[420px] md:h-[480px] lg:h-[520px] mb-6 md:mb-8 hidden md:block">
          {/* Central admin dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 -translate-x-1/2 w-[520px] z-[4]"
            style={{ top: 30 }}
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-3.5 py-2.5" style={{ background: '#1e2440', borderRadius: '14px 14px 0 0' }}>
              <div className="flex gap-1.5">
                <span className="w-[10px] h-[10px] rounded-full" style={{ background: '#ff5f57' }} />
                <span className="w-[10px] h-[10px] rounded-full" style={{ background: '#febc2e' }} />
                <span className="w-[10px] h-[10px] rounded-full" style={{ background: '#28c840' }} />
              </div>
              <div className="flex-1 mx-3 h-5 rounded-md" style={{ background: 'rgba(255,255,255,0.06)' }} />
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)' }}>care.borna.ai · Admin Dashboard</span>
            </div>
            {/* Image container */}
            <div className="relative overflow-hidden" style={{ height: 340, borderRadius: '0 0 14px 14px', border: '1px solid rgba(255,255,255,0.1)', borderTop: 'none', boxShadow: '0 48px 80px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(255,255,255,0.08)' }}>
              <img
                src="/images/Admin_Dashboard.png"
                alt="Borna Care admin dashboard"
                className="w-full h-auto block"
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                loading="eager"
              />
              {/* Fade overlay */}
              <div className="absolute bottom-0 left-0 right-0" style={{ height: 80, background: 'linear-gradient(to bottom, transparent, white)' }} />
            </div>
          </motion.div>

          {/* Floating widget cards */}
          {floatingCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: card.enterX }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: card.delay, ease: [0.16, 1, 0.3, 1] }}
              className="absolute z-[5]"
              style={{
                width: card.width,
                height: card.height,
                top: card.top,
                left: card.left,
                right: card.right,
                bottom: card.bottom,
                transform: `rotate(${card.rotate}deg)`,
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(255,255,255,0.1)',
                background: 'white',
                willChange: 'transform',
                animation: `heroFloat${i} ${card.floatDur}s ease-in-out ${card.floatDelay}s infinite`,
              }}
            >
              <img
                src={card.src}
                alt={card.label}
                className="w-full h-full block"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                loading="eager"
              />
              {/* Label overlay */}
              <div className="absolute bottom-0 left-0 right-0" style={{
                background: 'linear-gradient(to top, rgba(11,17,48,0.9), transparent)',
                padding: '8px 10px 7px',
                fontSize: 10,
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 500,
              }}>
                {card.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: simple dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:hidden w-full max-w-[340px] mx-auto rounded-xl overflow-hidden max-h-[200px] mb-4"
          style={{ boxShadow: '0 24px 48px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <img
            src="/images/Admin_Dashboard.png"
            alt="Borna Care admin dashboard"
            className="w-full h-full object-cover object-top rounded-xl block"
            loading="eager"
          />
        </motion.div>

        {/* Module cards — compact, always visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-3 gap-2 md:grid-cols-5 md:gap-3 max-w-5xl mx-auto w-full shrink-0 mt-auto"
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

      {/* Float keyframes */}
      <style>{`
        @keyframes heroFloat0 {
          0%, 100% { transform: rotate(-2.5deg) translateY(0); }
          50% { transform: rotate(-2.5deg) translateY(-13px); }
        }
        @keyframes heroFloat1 {
          0%, 100% { transform: rotate(2deg) translateY(0); }
          50% { transform: rotate(2deg) translateY(-10px); }
        }
        @keyframes heroFloat2 {
          0%, 100% { transform: rotate(-1.5deg) translateY(0); }
          50% { transform: rotate(-1.5deg) translateY(-15px); }
        }
        @keyframes heroFloat3 {
          0%, 100% { transform: rotate(2.5deg) translateY(0); }
          50% { transform: rotate(2.5deg) translateY(-11px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
