import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Bluetooth as Tooth,
  Stethoscope,
  Layers,
  CalendarClock,
  Network,
  Unlink,
  MessageSquare,
  Users,
  BarChart3,
  Sparkles,
  CalendarDays,
  ArrowRight,
  Workflow,
  Target,
  Zap,
  CheckCircle2,
  Activity,
  Shield,
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import StandardFAQ from "@/components/sections/StandardFAQ";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Reusable section eyebrow
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block glass-panel px-3 py-1 text-[11px] font-medium text-primary uppercase tracking-wider mb-4">
    {children}
  </span>
);

// Glowing icon container
const GlowIcon = ({
  Icon,
  size = "md",
  tone = "primary",
}: {
  Icon: React.ComponentType<{ className?: string }>;
  size?: "sm" | "md" | "lg";
  tone?: "primary" | "amber";
}) => {
  const dim = size === "lg" ? "w-14 h-14" : size === "sm" ? "w-9 h-9" : "w-12 h-12";
  const iconDim = size === "lg" ? "w-6 h-6" : size === "sm" ? "w-4 h-4" : "w-5 h-5";
  const glow =
    tone === "amber"
      ? "shadow-[0_0_24px_rgba(251,146,60,0.25)] border-[rgba(251,146,60,0.25)]"
      : "shadow-[0_0_24px_hsl(var(--primary)/0.25)] border-[hsl(var(--primary)/0.3)]";
  const color = tone === "amber" ? "text-amber-400" : "text-primary";
  return (
    <div
      className={`${dim} rounded-xl border bg-background/40 backdrop-blur-sm flex items-center justify-center ${glow}`}
      style={{
        background:
          tone === "amber"
            ? "radial-gradient(circle at center, rgba(251,146,60,0.10), rgba(255,255,255,0.03))"
            : "radial-gradient(circle at center, hsl(var(--primary)/0.10), rgba(255,255,255,0.03))",
      }}
    >
      <Icon className={`${iconDim} ${color}`} />
    </div>
  );
};

// === Section 1: Hero ===
const HeroIndustries = () => (
  <section className="relative overflow-hidden pt-12 md:pt-16 pb-16 md:pb-24">
    {/* Ambient backdrop */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[120px]" />
    </div>

    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Eyebrow>Healthcare Industries</Eyebrow>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground leading-tight mb-6">
            Healthcare Software for{" "}
            <span className="gradient-text">Dental, Medical, and Specialty</span>{" "}
            Practices
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl">
            Borna AI delivers healthcare software solutions tailored to the needs of
            dental clinics, medical practices, and specialty providers.
          </p>
          <p className="text-base text-muted-foreground/80 leading-relaxed mb-8 max-w-xl">
            From patient engagement to communication and automation, Borna helps
            practices operate more efficiently and grow sustainably.
          </p>
          <div className="flex flex-row items-center gap-3">
            <Link to="/demo" className="gradient-btn text-sm md:text-base px-6 py-3">
              Book a Demo
            </Link>
            <Link to="/solutions" className="ghost-btn text-sm md:text-base px-6 py-3">
              Explore Solutions →
            </Link>
          </div>
        </motion.div>

        {/* Orbital visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative h-[420px] md:h-[480px]"
        >
          <svg className="absolute inset-0 w-full h-full px-[5px] text-sm py-[5px]" viewBox="0 0 400 400">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {[
              { x: 80, y: 90 },
              { x: 320, y: 200 },
              { x: 80, y: 310 },
            ].map((p, i) => (
              <motion.line
                key={i}
                x1="200"
                y1="200"
                x2={p.x}
                y2={p.y}
                stroke="url(#lineGrad)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.4 + i * 0.2 }}
              />
            ))}
          </svg>

          {/* Center node */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full glass-panel flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--primary)/0.25), hsl(var(--primary)/0.05))",
              boxShadow: "0 0 60px hsl(var(--primary)/0.4)",
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>

          {/* Orbiting cards */}
          {[
            { Icon: Tooth, label: "Dental Practices", top: "10%", left: "5%" },
            { Icon: Stethoscope, label: "Medical Clinics", top: "42%", right: "0%" },
            { Icon: Layers, label: "Specialty Providers", bottom: "10%", left: "5%" },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              className="absolute glass-panel p-4 flex items-center gap-3 min-w-[180px]"
              style={{
                top: card.top,
                left: card.left,
                right: card.right,
                bottom: card.bottom,
                boxShadow: "0 0 30px hsl(var(--primary)/0.15)",
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              <GlowIcon Icon={card.Icon} size="sm" />
              <span className="text-sm font-medium text-foreground">{card.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

// === Section 2: Definition ===
const DefinitionSection = () => (
  <section className="py-12 md:py-20 relative">
    <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-6 tracking-tight">
        What Is Industry-Specific Healthcare Software?
      </h2>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3 max-w-2xl mx-auto">
        Industry-specific healthcare software is designed to address the unique
        operational, communication, and patient management needs of different types of
        medical practices.
      </p>
      <p className="text-base text-muted-foreground/80 leading-relaxed mb-12 max-w-2xl mx-auto">
        Unlike generic systems, it adapts to workflows, patient expectations, and
        business models within each specialty.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
        {[
          { Icon: Tooth, label: "Dental" },
          { Icon: Stethoscope, label: "Medical" },
          { Icon: Layers, label: "Specialty" },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col items-center gap-3 group cursor-default"
          >
            <div className="transition-transform group-hover:scale-110">
              <GlowIcon Icon={item.Icon} size="lg" />
            </div>
            <span className="text-sm font-medium text-foreground">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// === Section 3: Problem ===
const ProblemIndustries = () => {
  const cards = [
    {
      Icon: CalendarClock,
      title: "High Volume, Low Visibility",
      body: "Missed appointments, communication gaps, and scheduling chaos erode production and patient trust.",
    },
    {
      Icon: Network,
      title: "Complex Care, Fragmented Systems",
      body: "Multiple tools, disconnected data, and manual coordination slow down care delivery and increase errors.",
    },
    {
      Icon: Unlink,
      title: "Unique Workflows, Generic Tools",
      body: "Specialty practices are forced to work around software that wasn't designed for their world.",
    },
  ];
  return (
    <section className="py-12 md:py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-amber-500/[0.04] blur-[140px]" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-4 tracking-tight">
            Why One-Size-Fits-All Software Doesn't Work in Healthcare
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            Different healthcare industries have fundamentally distinct needs — dental
            practices require high appointment turnover, medical clinics manage complex
            patient records, and specialty practices need highly customized workflows.
          </p>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            Generic tools often fail to align with these realities, leaving teams with
            systems that create friction instead of efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-panel-hover p-6 relative overflow-hidden"
              style={{
                boxShadow:
                  "inset 0 0 40px rgba(251,146,60,0.05), 0 0 0 1px rgba(251,146,60,0.06)",
              }}
            >
              <div className="mb-4">
                <GlowIcon Icon={c.Icon} tone="amber" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// === Section 4: Solution Overview ===
const SolutionGrid = () => {
  const cards = [
    { Icon: MessageSquare, title: "Patient Communication", body: "Unified calls, SMS, email, chat, and video." },
    { Icon: Users, title: "Healthcare CRM", body: "Full patient lifecycle from lead to retention." },
    { Icon: BarChart3, title: "Analytics & Reporting", body: "Real-time insights across every practice metric." },
    { Icon: Sparkles, title: "AI Automation", body: "Intelligent workflows that act without manual effort." },
    { Icon: CalendarDays, title: "Scheduling & Workflows", body: "Appointment management built for volume and complexity." },
  ];
  return (
    <section className="py-12 md:py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-4 tracking-tight">
            One Platform, Adapted for Every Healthcare Industry
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Borna AI provides a flexible platform that adapts to different practice
            types while maintaining a unified system underneath — the same data layer,
            the same intelligence, tailored to your world.
          </p>
          <Link to="/platform" className="text-sm text-primary hover:underline">
            See how the platform works →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="glass-panel-hover p-5 text-center"
            >
              <div className="mx-auto mb-3 w-fit">
                <GlowIcon Icon={c.Icon} size="sm" />
              </div>
              <h3 className="text-sm font-medium text-foreground mb-1.5">{c.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// === Section 5: Dental ===
const DentalSection = () => {
  const steps = ["Booked", "Confirmed", "Treatment", "Follow-Up", "Retention"];
  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="mb-10 max-w-2xl">
          <Eyebrow>Dental Practices</Eyebrow>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-4 tracking-tight">
            Dental Practice Management & Patient Engagement Software
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            Borna helps dental practices manage high appointment volume, improve
            patient communication, reduce no-shows, and increase treatment acceptance —
            all through one connected system.
          </p>
          <p className="text-base font-medium text-primary mb-4">
            Better patient retention and increased production.
          </p>
          <Link to="/solutions" className="text-sm text-primary hover:underline">
            Explore dental solutions →
          </Link>
        </div>

        {/* Horizontal flow */}
        <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 relative">
            {steps.map((step, i) => (
              <div key={step} className="flex flex-col md:flex-row items-center gap-3 flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center border border-primary/30"
                    style={{
                      background: "radial-gradient(circle, hsl(var(--primary)/0.2), hsl(var(--primary)/0.05))",
                      boxShadow: "0 0 20px hsl(var(--primary)/0.3)",
                    }}
                  >
                    <span className="text-xs font-semibold text-primary">{i + 1}</span>
                  </div>
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">
                    {step}
                  </span>
                </motion.div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-primary/40 to-primary/10 relative overflow-hidden">
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"
                      style={{ boxShadow: "0 0 10px hsl(var(--primary))" }}
                      animate={{ left: ["-5%", "105%"] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.3,
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// === Section 6: Medical ===
const MedicalSection = () => {
  const nodes = [
    { label: "Intake", x: 15, y: 25 },
    { label: "Communication", x: 15, y: 75 },
    { label: "Records", x: 50, y: 15 },
    { label: "Scheduling", x: 50, y: 85 },
    { label: "Follow-Up", x: 85, y: 25 },
    { label: "Billing", x: 85, y: 75 },
  ];
  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="mb-10 max-w-2xl">
          <Eyebrow>Medical Clinics</Eyebrow>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-4 tracking-tight">
            Software for Medical Clinics and Healthcare Providers
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            Borna enables medical practices to manage patient communication, streamline
            complex workflows, and improve operational efficiency — without adding more
            tools to an already crowded stack.
          </p>
          <p className="text-base font-medium text-primary">
            Better coordination and an improved patient experience across the care
            continuum.
          </p>
        </div>

        <div className="glass-panel relative overflow-hidden h-[360px] md:h-[420px]">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {nodes.map((n, i) => (
              <motion.line
                key={i}
                x1="50"
                y1="50"
                x2={n.x}
                y2={n.y}
                stroke="hsl(var(--primary))"
                strokeOpacity="0.3"
                strokeWidth="0.2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.1 }}
              />
            ))}
          </svg>

          {/* Center */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center text-xs font-semibold text-primary border border-primary/40"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary)/0.25), hsl(var(--primary)/0.05))",
              boxShadow: "0 0 40px hsl(var(--primary)/0.3)",
            }}
          >
            Borna
          </div>

          {nodes.map((n, i) => (
            <motion.div
              key={n.label}
              className="absolute glass-panel px-3 py-2 text-xs font-medium text-foreground whitespace-nowrap"
              style={{
                left: `${n.x}%`,
                top: `${n.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              {n.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// === Section 7: Specialty ===
const SpecialtySection = () => {
  const blocks = [
    { label: "Custom Workflows", Icon: Workflow },
    { label: "Communication", Icon: MessageSquare },
    { label: "Patient CRM", Icon: Users },
    { label: "Analytics", Icon: BarChart3 },
    { label: "Scheduling", Icon: CalendarDays },
  ];
  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="mb-10 max-w-2xl">
          <Eyebrow>Specialty Providers</Eyebrow>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-4 tracking-tight">
            Solutions for Specialty Healthcare Providers
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            Borna supports orthodontics, dermatology, oral surgery, and other specialty
            practices with customizable workflows, communication tools, and analytics —
            all on the same unified platform.
          </p>
          <p className="text-base font-medium text-primary">
            Adaptable solutions that fit how your specialty actually operates.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {blocks.map((b, i) => (
            <motion.div
              key={b.label}
              className="glass-panel-hover p-5 text-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              animate={{ y: [0, -6, 0] }}
              style={{
                animation: `float ${3 + i * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              <div className="mx-auto mb-3 w-fit">
                <GlowIcon Icon={b.Icon} size="sm" />
              </div>
              <span className="text-xs font-medium text-foreground">{b.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// === Section 8: Common Capabilities Strip ===
const CommonCapabilities = () => {
  const items = [
    { Icon: MessageSquare, label: "Patient Communication" },
    { Icon: Users, label: "Healthcare CRM" },
    { Icon: CalendarDays, label: "Scheduling & Workflows" },
    { Icon: BarChart3, label: "Analytics & Reporting" },
    { Icon: Sparkles, label: "AI Automation" },
  ];
  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-4 tracking-tight">
            Core Capabilities for Every Practice
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Regardless of industry, every Borna deployment is built on the same
            intelligent foundation.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-3"
            >
              <GlowIcon Icon={item.Icon} />
              <span className="text-xs font-medium text-foreground text-center max-w-[120px]">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// === Section 9: How It Works ===
const HowItWorks = () => {
  const steps = [
    { n: 1, Icon: MessageSquare, title: "Capture", body: "Capture patient interactions across all channels" },
    { n: 2, Icon: Workflow, title: "Adapt", body: "Adapt workflows to your specialty and practice type" },
    { n: 3, Icon: Activity, title: "Analyze", body: "Analyze behavior, performance, and opportunities" },
    { n: 4, Icon: Zap, title: "Optimize", body: "Deliver automation and insights that drive results" },
  ];
  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-4 tracking-tight">
            How Borna Adapts to Your Industry
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The same intelligent platform. Configured for your world.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 md:gap-2 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="flex md:flex-col items-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="glass-panel-hover p-6 flex-1 w-full text-center"
              >
                <div className="text-xs font-semibold text-primary mb-3">
                  STEP {s.n}
                </div>
                <div className="mx-auto mb-3 w-fit">
                  <GlowIcon Icon={s.Icon} />
                </div>
                <h3 className="text-base font-medium text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </motion.div>
              {i < steps.length - 1 && (
                <ArrowRight className="md:hidden w-5 h-5 text-primary shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// === Section 10: Platform Connection ===
const PlatformConnection = () => {
  const modules = [
    { label: "Communication", angle: 0 },
    { label: "CRM", angle: 72 },
    { label: "Analytics", angle: 144 },
    { label: "AI", angle: 216 },
    { label: "Patient Experience", angle: 288 },
  ];
  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-4 tracking-tight">
            Powered by the Borna AI Platform
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Every industry solution in Borna is built on the same unified platform —
            the same communication layer, the same CRM, the same analytics engine, and
            the same AI core. Your industry configuration sits on top of a foundation
            that is already connected and intelligent.
          </p>
          <Link to="/ecosystem" className="text-sm text-primary hover:underline">
            Learn more about the ecosystem →
          </Link>
        </div>

        <div className="relative h-[420px] md:h-[480px]">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            {modules.map((m, i) => {
              const rad = (m.angle * Math.PI) / 180;
              const x = 200 + Math.cos(rad) * 150;
              const y = 200 + Math.sin(rad) * 150;
              return (
                <motion.line
                  key={i}
                  x1="200"
                  y1="200"
                  x2={x}
                  y2={y}
                  stroke="hsl(var(--primary))"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                />
              );
            })}
          </svg>

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary)/0.3), hsl(var(--primary)/0.05))",
              boxShadow: "0 0 50px hsl(var(--primary)/0.4)",
              border: "1px solid hsl(var(--primary)/0.4)",
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>

          {modules.map((m, i) => {
            const rad = (m.angle * Math.PI) / 180;
            const x = 50 + Math.cos(rad) * 37.5;
            const y = 50 + Math.sin(rad) * 37.5;
            return (
              <motion.div
                key={m.label}
                className="absolute glass-panel px-4 py-2 text-xs font-medium text-foreground whitespace-nowrap"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                {m.label}
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          The same platform. Your industry, your way.
        </p>
      </div>
    </section>
  );
};

// === Section 11: Differentiation (Before/After) ===
const Differentiation = () => {
  const points = [
    "Flexible architecture that configures to your specialty",
    "Unified data system shared across all practice functions",
    "AI-powered insights that improve with every interaction",
    "Scalable from single-location to multi-site practices",
  ];
  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-4 tracking-tight">
            Why Borna Works Across Industries
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Borna's architecture is built for flexibility without fragmentation. A
            unified data system, AI-powered insights, and a scalable platform mean
            practices of any type can adopt Borna and grow within it — without
            rebuilding their stack.
          </p>
          <ul className="grid md:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Disconnected */}
          <div className="glass-panel p-8 relative h-[280px]">
            <div className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-4">
              Disconnected Tools
            </div>
            <div className="grid grid-cols-3 gap-6 place-items-center h-[180px]">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-muted/40 border border-muted-foreground/20"
                  style={{ boxShadow: "0 0 8px rgba(255,255,255,0.05)" }}
                />
              ))}
            </div>
          </div>

          {/* Unified */}
          <motion.div
            initial={{ opacity: 0.6 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="glass-panel p-8 relative h-[280px]"
            style={{ boxShadow: "0 0 40px hsl(var(--primary)/0.15)" }}
          >
            <div className="text-xs uppercase tracking-wider text-primary mb-4">
              Unified Platform
            </div>
            <div className="relative h-[180px]">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 180">
                {[
                  { x: 30, y: 40 },
                  { x: 100, y: 30 },
                  { x: 170, y: 50 },
                  { x: 40, y: 130 },
                  { x: 100, y: 150 },
                  { x: 170, y: 130 },
                ].map((p, i, arr) =>
                  arr.slice(i + 1).map((q, j) => (
                    <line
                      key={`${i}-${j}`}
                      x1={p.x}
                      y1={p.y}
                      x2={q.x}
                      y2={q.y}
                      stroke="hsl(var(--primary))"
                      strokeOpacity="0.25"
                      strokeWidth="0.5"
                    />
                  )),
                )}
                {[
                  { x: 30, y: 40 },
                  { x: 100, y: 30 },
                  { x: 170, y: 50 },
                  { x: 40, y: 130 },
                  { x: 100, y: 150 },
                  { x: 170, y: 130 },
                ].map((p, i) => (
                  <circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r="6"
                    fill="hsl(var(--primary))"
                    style={{ filter: "drop-shadow(0 0 6px hsl(var(--primary)))" }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// === Section 12: Key Takeaways ===
const KeyTakeaways = () => {
  const items = [
    { Icon: Stethoscope, text: "Borna serves dental, medical, and specialty practices" },
    { Icon: Workflow, text: "Each solution adapts to specific workflows and needs" },
    { Icon: Network, text: "All industries share one unified intelligent platform" },
    { Icon: Sparkles, text: "AI enhances performance and outcomes across practice types" },
  ];
  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-12 tracking-tight text-center">
          Key Takeaways
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((it, i) => (
            <motion.div
              key={it.text}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <GlowIcon Icon={it.Icon} />
              <p className="text-sm font-medium text-foreground leading-snug">
                {it.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// === Section 13: FAQ ===
const FAQ = () => {
  const faqs = [
    {
      q: "What is healthcare software for dental practices?",
      a: "Software designed to manage patient communication, scheduling, and high appointment volume specific to dental clinics — reducing no-shows and improving treatment acceptance.",
    },
    {
      q: "Can one platform serve multiple healthcare industries?",
      a: "Yes. Borna's flexible architecture adapts to the specific workflows and needs of dental, medical, and specialty practices while maintaining a single unified data system.",
    },
    {
      q: "Why is industry-specific software important?",
      a: "Generic tools create friction when they don't align with how a practice operates. Industry-specific configurations ensure workflows, communication tools, and analytics match the reality of each specialty.",
    },
    {
      q: "What industries does Borna support?",
      a: "Borna currently supports dental practices, medical clinics, and specialty providers including orthodontics, dermatology, and oral surgery — with a platform built to expand to additional specialties.",
    },
    {
      q: "Do all industries use the same platform?",
      a: "Yes. Every industry solution is built on the same Borna AI platform — the same communication layer, CRM, analytics, and AI engine — configured to each practice type on top of a shared foundation.",
    },
  ];
  return <StandardFAQ items={faqs} />;
};

// === Section 14: Final CTA ===
const FinalCTA = () => (
  <section className="py-12 md:py-20 relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[700px] h-[400px] rounded-full bg-primary/8 blur-[140px]" />
    </div>
    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-5 tracking-tight">
        Built for Your Practice. Scaled for Growth.
      </h2>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
        Borna AI helps healthcare practices across industries improve efficiency,
        communication, and growth — on one intelligent platform designed to adapt as
        you scale.
      </p>
      <div className="cta-row">
        <Link to="/demo" className="gradient-btn text-sm md:text-base px-6 py-3">
          Book a Demo
        </Link>
        <Link to="/contact" className="ghost-btn text-sm md:text-base px-6 py-3">
          Talk to Sales
        </Link>
      </div>
    </div>
  </section>
);

const IndustriesPage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Healthcare Software for Dental, Medical & Specialty Practices | Borna AI</title>
        <meta
          name="description"
          content="Borna AI provides healthcare software solutions for dental, medical, and specialty practices. Improve patient engagement, communication, and operations with one platform."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Healthcare Software for Industries | Borna AI",
            description:
              "Healthcare software solutions for dental, medical, and specialty practices.",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Healthcare Industry Software Solutions",
            provider: { "@type": "Organization", name: "Borna AI" },
            serviceType: "Healthcare Software Solutions",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Borna AI",
            url: "https://borna.ai",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is healthcare software for dental practices?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Software designed to manage patient communication, scheduling, and workflows specific to dental clinics.",
                },
              },
              {
                "@type": "Question",
                name: "Can one platform serve multiple healthcare industries?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, flexible platforms like Borna adapt to different workflows while maintaining a unified system.",
                },
              },
              {
                "@type": "Question",
                name: "Why is industry-specific software important?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It ensures that workflows, communication, and operations align with the needs of each specialty.",
                },
              },
              {
                "@type": "Question",
                name: "What industries can healthcare software support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Healthcare software can support dental, medical, and specialty practices with tailored workflows and communication tools.",
                },
              },
              {
                "@type": "Question",
                name: "Why is industry-specific healthcare software important?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It ensures that systems align with the workflows and needs of each type of healthcare practice.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <HeroIndustries />
      <DefinitionSection />
      <ProblemIndustries />
      <SolutionGrid />
      <DentalSection />
      <MedicalSection />
      <SpecialtySection />
      <CommonCapabilities />
      <HowItWorks />
      <PlatformConnection />
      <Differentiation />
      <KeyTakeaways />
      <FAQ />
      <FinalCTA />
    </PageWrapper>
  );
};

export default IndustriesPage;
