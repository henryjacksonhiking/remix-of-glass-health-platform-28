import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NetworkMesh = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    role="img"
    aria-label="Decorative network mesh background"
    style={{ opacity: 0.08 }}
  >
    <defs>
      <pattern id="mesh-dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <circle cx="30" cy="30" r="1.5" fill="hsl(var(--primary))" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#mesh-dots)" />
    {/* Animated flow lines */}
    <line x1="10%" y1="20%" x2="40%" y2="35%" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animate-dash-flow" />
    <line x1="60%" y1="15%" x2="85%" y2="40%" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animate-dash-flow" style={{ animationDelay: "1s" }} />
    <line x1="25%" y1="50%" x2="55%" y2="70%" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animate-dash-flow" style={{ animationDelay: "2s" }} />
    <line x1="70%" y1="55%" x2="90%" y2="75%" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animate-dash-flow" style={{ animationDelay: "1.5s" }} />
  </svg>
);

const HeroSection = () => (
  <section id="hero" className="relative overflow-hidden min-h-[90vh] flex items-center py-20 md:py-28">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
    <NetworkMesh />

    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-medium tracking-tight text-foreground mb-5"
            style={{ letterSpacing: "-1px", lineHeight: 1.15 }}
          >
            AI Healthcare Platform for Patient Engagement, CRM, and Automation
          </h1>

          <p className="text-[15px] md:text-base text-muted-foreground leading-relaxed mb-3 max-w-lg">
            Borna AI is a unified healthcare platform designed to help practices improve patient engagement, streamline communication, and automate operations through one intelligent system.
          </p>
          <p className="text-[15px] md:text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Start with Borna Care and expand into a complete AI-powered healthcare ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/demo" className="gradient-btn text-sm md:text-base px-8 py-3 h-11 inline-flex items-center justify-center">
              Book a demo
            </Link>
            <Link
              to="/platform"
              className="ghost-btn text-sm md:text-base px-8 py-3 h-11 inline-flex items-center justify-center"
              style={{ border: "1px solid #00DEC4", color: "#00DEC4" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,222,196,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              Explore platform
            </Link>
          </div>
        </motion.div>

        {/* Right — floating UI screenshots */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main dashboard */}
          <div className="glass-panel p-2 relative hover:-translate-y-1 transition-transform duration-300">
            <img
              src="/images/Admin_Dashboard.webp"
              alt="Borna Care admin dashboard showing patient scheduling and management"
              width={680}
              height={440}
              className="w-full h-auto rounded-xl object-cover"
              loading="eager"
            />
          </div>

          {/* Floating secondary screen */}
          <div
            className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-10 glass-panel p-1.5 w-[140px] md:w-[200px] hover:-translate-y-1 transition-transform duration-300"
            style={{ zIndex: 2 }}
          >
            <img
              src="/images/patient_appointment_Confirmation.webp"
              alt="Borna Care patient appointment confirmation screen"
              width={390}
              height={720}
              className="w-full h-auto rounded-lg object-cover"
              loading="eager"
            />
          </div>

          {/* Decorative connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.2 }}>
            <line x1="20%" y1="80%" x2="5%" y2="95%" stroke="#00DEC4" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
