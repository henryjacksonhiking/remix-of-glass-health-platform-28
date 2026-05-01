import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  TrendingUp,
  Network,
  Sparkles,
  Layers,
  Workflow,
  Users,
  Repeat,
  GitBranch,
  Activity,
  Stethoscope,
  HeartPulse,
  Building2,
  ArrowRight,
  CheckCircle2,
  Brain,
  Puzzle,
  BarChart3,
  Cable,
  Radio,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import StandardFAQ from "@/components/sections/StandardFAQ";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ---------- Shared atoms ---------- */

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="section-eyebrow">{children}</span>
);

const SectionShell = ({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => (
  <section
    id={id}
    className={`relative py-12 md:py-20 md:py-20 md:py-20 overflow-hidden ${className}`}
  >
    {children}
  </section>
);

const GlassCard = ({
  children,
  className = "",
  glow = false,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}) => (
  <div
    className={`relative rounded-2xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-0.5 ${className}`}
    style={{
      background: "rgba(255,255,255,0.04)",
      border: "0.5px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(12px)",
      boxShadow: glow
        ? "0 0 0 1px hsl(var(--primary) / 0.25), 0 0 40px hsl(var(--primary) / 0.18)"
        : undefined,
    }}
  >
    {children}
  </div>
);

const StatusBadge = ({
  label,
  tone,
}: {
  label: string;
  tone: "live" | "dev" | "early" | "planned" | "soon";
}) => {
  const styles: Record<typeof tone, string> = {
    live: "bg-primary/15 text-primary border-primary/40",
    dev: "border-amber-400/40 text-amber-300/90",
    early: "border-teal-300/40 text-teal-200/90",
    soon: "border-teal-300/40 text-teal-200/90",
    planned: "border-white/15 text-white/60",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[11px] tracking-wide rounded-full border ${styles[tone]}`}
    >
      {label}
    </span>
  );
};

/* ---------- Hero visual ---------- */

const HeroVisual = () => {
  const reduce = useReducedMotion();
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-[100px]" />
      {/* Faint upward trending line */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full px-[5px] text-sm py-[5px]"
        aria-hidden
      >
        <defs>
          <linearGradient id="invHeroLine" x1="0" x2="1" y1="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
          </linearGradient>
          <radialGradient id="invHeroNode" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path
          d="M30 340 Q 160 300 220 200 T 380 60"
          stroke="url(#invHeroLine)"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Connecting lines */}
        <line x1="200" y1="200" x2="110" y2="120" stroke="rgba(255,255,255,0.1)" />
        <line x1="200" y1="200" x2="300" y2="140" stroke="rgba(255,255,255,0.1)" />
        <line x1="200" y1="200" x2="280" y2="290" stroke="rgba(255,255,255,0.1)" />
      </svg>

      {/* Central node */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={reduce ? undefined : { scale: [1, 1.04, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid hsl(var(--primary) / 0.4)",
            boxShadow: "0 0 40px hsl(var(--primary) / 0.4)",
          }}
        >
          <Sparkles className="w-7 h-7 text-primary" />
        </div>
      </motion.div>

      {/* Satellite nodes */}
      {[
        { top: "20%", left: "22%" },
        { top: "28%", left: "72%" },
        { top: "70%", left: "68%" },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-primary"
          style={{ ...p, boxShadow: "0 0 16px hsl(var(--primary))" }}
          animate={reduce ? undefined : { opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 6, delay: i * 1.2, repeat: Infinity }}
        />
      ))}
    </div>
  );
};

/* ---------- Section 1: Hero ---------- */

const Hero = () => (
  <SectionShell className="pt-20 md:pt-24">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 blur-[140px] rounded-full" />
    </div>
    <div className="container mx-auto px-4 md:px-6 relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Eyebrow>Investment Opportunity</Eyebrow>
          <h1 className="section-headline mt-4 text-foreground">
            Building the next generation AI healthcare platform
          </h1>
          <div className="mt-6 space-y-4 body-text">
            <p>
              Borna AI is an emerging healthcare technology platform designed to
              unify patient communication, CRM, analytics, and automation into
              one intelligent system.
            </p>
            <p>
              Backed by early-stage investors, Borna is building a scalable
              solution to address fragmentation in healthcare operations and
              patient engagement.
            </p>
          </div>
          <div className="mt-8 flex flex-row items-center gap-2 sm:gap-4">
            <Link
              to="/contact?topic=investor-deck"
              className="gradient-btn text-xs sm:text-base px-3 sm:px-7 py-2.5 sm:py-3 whitespace-nowrap"
            >
              Request investor deck
            </Link>
            <Link
              to="/contact?topic=investor-relations"
              className="ghost-btn text-xs sm:text-base px-3 sm:px-7 py-2.5 sm:py-3 whitespace-nowrap"
            >
              Contact investor relations
            </Link>
          </div>
        </div>
        <HeroVisual />
      </div>
    </div>
  </SectionShell>
);

/* ---------- Section 2: Definition ---------- */

const Definition = () => (
  <SectionShell>
    <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
      <Eyebrow>Category</Eyebrow>
      <h2 className="section-title mt-4">
        What is an AI healthcare platform company?
      </h2>
      <div className="mt-6 space-y-4 body-text mx-auto">
        <p>
          An AI healthcare platform company develops integrated systems that
          combine communication, data, and automation to improve healthcare
          operations, patient engagement, and decision-making.
        </p>
        <p>
          These platforms replace fragmented tools with a unified system powered
          by artificial intelligence.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
        {[
          { icon: Cable, label: "Integrated communication" },
          { icon: Brain, label: "AI-powered" },
          { icon: Layers, label: "Unified system" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 24px hsl(var(--primary) / 0.15)",
              }}
            >
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs md:text-sm text-muted-foreground text-center">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-14 mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>
  </SectionShell>
);

/* ---------- Section 3: Problem ---------- */

const Problem = () => (
  <SectionShell>
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Eyebrow>The problem</Eyebrow>
          <h2 className="section-title mt-4">
            Fragmented systems in healthcare
          </h2>
          <div className="mt-6 space-y-4 body-text">
            <p>
              Healthcare practices rely on multiple disconnected systems —
              separate tools for communication, CRM, analytics, and scheduling —
              that don't talk to each other.
            </p>
            <p>
              This fragmentation leads to operational inefficiency, lost revenue
              opportunities, and a fragmented patient experience that erodes
              trust and retention.
            </p>
            <p>
              According to the World Health Organization, digital health
              transformation depends on integrating systems to improve
              efficiency and outcomes.
            </p>
            <p className="text-foreground font-medium">
              The problem is not complexity. The problem is disconnection.
            </p>
          </div>
        </div>

        <div className="relative aspect-square max-w-md mx-auto w-full">
          <svg
            viewBox="0 0 400 400"
            className="absolute inset-0 w-full h-full"
            aria-label="Fragmented healthcare stack diagram"
          >
            {[
              ["80,80", "150,170"],
              ["320,90", "240,160"],
              ["60,300", "150,240"],
              ["340,310", "260,240"],
              ["200,40", "200,140"],
              ["200,360", "200,260"],
            ].map(([a, b], i) => (
              <line
                key={i}
                x1={a.split(",")[0]}
                y1={a.split(",")[1]}
                x2={b.split(",")[0]}
                y2={b.split(",")[1]}
                stroke="rgba(255,255,255,0.08)"
                strokeDasharray="3 6"
              />
            ))}
          </svg>

          {[
            { label: "Phone", icon: Radio, top: "12%", left: "12%" },
            { label: "CRM", icon: Users, top: "16%", left: "72%" },
            { label: "Scheduler", icon: Activity, top: "70%", left: "10%" },
            { label: "Billing", icon: BarChart3, top: "72%", left: "75%" },
            { label: "Analytics", icon: LineChart, top: "4%", left: "44%" },
            { label: "EHR", icon: ShieldCheck, top: "82%", left: "44%" },
          ].map(({ label, icon: Icon, top, left }) => (
            <div
              key={label}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
              style={{ top, left }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "0.5px solid rgba(255,255,255,0.06)",
                }}
              >
                <Icon className="w-4 h-4 text-white/30" />
              </div>
              <span className="text-[10px] text-white/40">{label}</span>
            </div>
          ))}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[11px] text-muted-foreground">
            Fragmented healthcare stack
          </div>
        </div>
      </div>
    </div>
  </SectionShell>
);

/* ---------- Section 4: Opportunity ---------- */

const Opportunity = () => {
  const reduce = useReducedMotion();
  return (
    <SectionShell>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Eyebrow>Opportunity</Eyebrow>
          <h2 className="section-title mt-4">
            A large and growing market opportunity
          </h2>
          <div className="mt-6 space-y-4 body-text">
            <p>
              Healthcare providers are increasingly investing in patient
              engagement platforms, AI-powered automation, and integrated
              systems — driven by regulatory pressure, patient expectations, and
              the need for operational efficiency.
            </p>
            <p>
              Borna addresses this shift by offering a unified platform built
              for scalability across dental, medical, and specialty practices.
            </p>
          </div>
        </div>

        <div className="mt-14 relative max-w-4xl mx-auto h-64 md:h-80">
          <svg
            viewBox="0 0 800 280"
            className="absolute inset-0 w-full h-full"
            aria-label="Market growth trend"
          >
            <defs>
              <linearGradient id="oppLine" x1="0" x2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <motion.path
              d="M40 240 Q 220 220 360 160 T 760 30"
              stroke="url(#oppLine)"
              strokeWidth="1.5"
              fill="none"
              initial={reduce ? undefined : { pathLength: 0 }}
              whileInView={reduce ? undefined : { pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeOut" }}
            />
            {[
              { x: 200, y: 220, r: 4, label: "Patient engagement platforms" },
              { x: 440, y: 130, r: 6, label: "AI healthcare automation" },
              { x: 700, y: 50, r: 9, label: "Integrated systems" },
            ].map((n, i) => (
              <g key={i}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={n.r}
                  fill="hsl(var(--primary))"
                  opacity="0.9"
                />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={n.r + 8}
                  fill="hsl(var(--primary))"
                  opacity="0.15"
                />
              </g>
            ))}
          </svg>
          <div className="absolute left-[18%] bottom-2 text-[11px] text-muted-foreground">
            Patient engagement platforms
          </div>
          <div className="absolute left-[48%] top-[32%] text-[11px] text-muted-foreground">
            AI healthcare automation
          </div>
          <div className="absolute right-2 top-2 text-[11px] text-primary">
            Integrated systems
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

/* ---------- Section 5: Borna Solution (Ecosystem + status) ---------- */

const Solution = () => {
  const modules = [
    { name: "Borna Care", badge: "Live", tone: "live" as const, top: "8%", left: "50%" },
    { name: "Borna Connect", badge: "In Development", tone: "dev" as const, top: "38%", left: "92%" },
    { name: "Borna Insight", badge: "Early Stage", tone: "early" as const, top: "85%", left: "75%" },
    { name: "Borna Engage", badge: "Planned", tone: "planned" as const, top: "85%", left: "25%" },
    { name: "Borna Core", badge: "Planned", tone: "planned" as const, top: "38%", left: "8%" },
  ];
  return (
    <SectionShell>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Eyebrow>The solution</Eyebrow>
          <h2 className="section-title mt-4">
            Borna AI — a unified healthcare platform
          </h2>
          <p className="mt-6 body-text">
            Borna combines five integrated modules into one intelligent
            system — each addressing a critical dimension of healthcare practice
            operations.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-3 max-w-md mx-auto lg:mx-0">
            {[
              ["Borna Care", "Patient engagement and portal", "live", "Live"],
              ["Borna Connect", "Omnichannel patient communication", "dev", "In Development"],
              ["Borna Engage", "CRM and patient lifecycle management", "planned", "Planned"],
              ["Borna Insight", "Analytics and performance insights", "early", "Early Stage"],
              ["Borna Core", "AI engine and automation", "planned", "Planned"],
            ].map(([name, desc, tone, badge]) => (
              <div
                key={name}
                className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "0.5px solid rgba(255,255,255,0.07)",
                }}
              >
                <div>
                  <div className="text-sm font-medium text-foreground">{name}</div>
                  <div className="text-xs text-muted-foreground">{desc}</div>
                </div>
                <StatusBadge label={badge} tone={tone as never} />
              </div>
            ))}
            <Link
              to="/platform"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 mt-4"
            >
              Explore the platform <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Ecosystem diagram */}
          <div className="relative aspect-square max-w-md mx-auto w-full">
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" aria-hidden>
              {modules.map((_, i) => {
                const angle = (i / modules.length) * Math.PI * 2 - Math.PI / 2;
                const x = 200 + Math.cos(angle) * 150;
                const y = 200 + Math.sin(angle) * 150;
                return (
                  <line
                    key={i}
                    x1="200"
                    y1="200"
                    x2={x}
                    y2={y}
                    stroke="hsl(var(--primary) / 0.25)"
                    strokeWidth="0.8"
                  />
                );
              })}
            </svg>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid hsl(var(--primary) / 0.4)",
                boxShadow: "0 0 40px hsl(var(--primary) / 0.35)",
              }}
            >
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            {modules.map((m, i) => {
              const angle = (i / modules.length) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + Math.cos(angle) * 37.5;
              const y = 50 + Math.sin(angle) * 37.5;
              return (
                <div
                  key={m.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 w-28"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div
                    className="w-3 h-3 rounded-full bg-primary"
                    style={{ boxShadow: "0 0 12px hsl(var(--primary))" }}
                  />
                  <div className="text-[11px] text-foreground text-center">{m.name}</div>
                  <StatusBadge label={m.badge} tone={m.tone} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

/* ---------- Section 6: Product status & traction ---------- */

const ProgressBar = ({ pct, color }: { pct: number; color: string }) => (
  <div
    className="w-full h-1.5 rounded-full overflow-hidden"
    style={{ background: "rgba(255,255,255,0.05)" }}
  >
    <div
      className="h-full rounded-full"
      style={{
        width: `${pct}%`,
        background: color,
        boxShadow: `0 0 12px ${color}`,
      }}
    />
  </div>
);

const Traction = () => (
  <SectionShell>
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Eyebrow>Traction</Eyebrow>
        <h2 className="section-title mt-4">Current development and traction</h2>
        <p className="mt-6 body-text">
          Borna is in active early-stage development, with initial products live
          and subsequent modules under construction. We are building with
          early-stage investor support and ongoing product validation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        <GlassCard glow>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium text-foreground">Borna Care</h3>
            <StatusBadge label="Live" tone="live" />
          </div>
          <p className="text-sm text-muted-foreground mt-1.5">
            Patient engagement & portal
          </p>
          <div className="mt-5">
            <ProgressBar pct={100} color="hsl(var(--primary))" />
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium text-foreground">Borna Connect</h3>
            <StatusBadge label="In Development" tone="dev" />
          </div>
          <p className="text-sm text-muted-foreground mt-1.5">
            Omnichannel patient communication
          </p>
          <div className="mt-5">
            <ProgressBar pct={55} color="rgb(251 191 36)" />
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium text-foreground">Borna Insight</h3>
            <StatusBadge label="Early Stage" tone="early" />
          </div>
          <p className="text-sm text-muted-foreground mt-1.5">
            Analytics & performance dashboard
          </p>
          <div className="mt-5">
            <ProgressBar pct={25} color="rgb(94 234 212)" />
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium text-foreground">
              Borna Engage + Borna Core
            </h3>
            <StatusBadge label="Planned" tone="planned" />
          </div>
          <p className="text-sm text-muted-foreground mt-1.5">
            CRM, lifecycle management & AI engine
          </p>
          <div className="mt-5">
            <ProgressBar pct={6} color="rgba(255,255,255,0.4)" />
          </div>
        </GlassCard>
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground italic">
        We are building in stages — prioritizing real product value over roadmap
        promises.
      </p>
    </div>
  </SectionShell>
);

/* ---------- Section 7: Business model ---------- */

const BusinessModel = () => {
  const steps = [
    { label: "Customer", icon: Users },
    { label: "Subscription", icon: Repeat },
    { label: "Platform value", icon: Layers },
    { label: "Expansion", icon: GitBranch },
    { label: "Growth", icon: TrendingUp },
  ];
  return (
    <SectionShell>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Eyebrow>Business model</Eyebrow>
          <h2 className="section-title mt-4">Scalable SaaS business model</h2>
          <p className="mt-6 body-text">
            Borna follows a subscription-based SaaS model — designed for
            predictable, recurring revenue that scales with practice adoption
            and platform expansion.
          </p>
        </div>

        <div className="mt-14 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
            {steps.map((s, i) => (
              <div key={s.label} className="flex flex-col md:flex-row items-center gap-4 md:gap-2 flex-1">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "0.5px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 0 24px hsl(var(--primary) / 0.15)",
                    }}
                  >
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" />
                )}
                {i < steps.length - 1 && (
                  <div className="md:hidden h-6 w-px bg-gradient-to-b from-primary/40 to-primary/10" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div>
            <div className="text-xs uppercase tracking-wider text-primary mb-3">
              Current
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Recurring monthly subscriptions per practice</li>
              <li>• Modular product adoption — start small, expand</li>
              <li>• Scalable across dental, medical, specialty</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-primary mb-3">
              Future
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Premium AI features and automation tiers</li>
              <li>• Enterprise and multi-location solutions</li>
              <li>• Integration partnerships (PMS/EHR, marketing)</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

/* ---------- Section 8: Differentiation ---------- */

const Differentiation = () => {
  const blocks = [
    {
      icon: Network,
      h: "Unified system architecture",
      b: "One platform, one data layer, one patient record — across communication, CRM, analytics, and automation.",
    },
    {
      icon: Brain,
      h: "AI-driven across every layer",
      b: "Intelligence is embedded throughout the platform — not a feature added on top.",
    },
    {
      icon: Activity,
      h: "Full patient journey visibility",
      b: "From first marketing touch to collected revenue, every interaction is tracked and connected.",
    },
    {
      icon: Puzzle,
      h: "Modular and scalable by design",
      b: "Practices adopt what they need today and expand into a complete system over time.",
    },
  ];
  return (
    <SectionShell>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Eyebrow>Differentiation</Eyebrow>
          <h2 className="section-title mt-4">Why Borna is different</h2>
          <p className="mt-6 body-text">
            Most healthcare software companies build point solutions — one tool
            for one problem. Borna is architected differently: a unified system
            where every module shares the same data layer, the same AI
            intelligence, and the same patient record.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blocks.map((b) => (
            <div key={b.h} className="flex gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "0.5px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 0 20px hsl(var(--primary) / 0.15)",
                }}
              >
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-medium text-foreground">{b.h}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {b.b}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Split comparison */}
        <div className="mt-16 max-w-4xl mx-auto">
          <GlassCard>
            <div className="grid md:grid-cols-2 relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
              <div className="text-center p-4">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Point solutions
                </div>
                <div className="flex justify-center gap-3 flex-wrap mb-3">
                  {[Radio, Users, BarChart3, Activity].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "0.5px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <Icon className="w-4 h-4 text-white/30" />
                    </div>
                  ))}
                </div>
                <div className="text-xs text-white/40">Fragmented tools</div>
              </div>
              <div className="text-center p-4">
                <div className="text-xs uppercase tracking-wider text-primary mb-4">
                  Unified platform
                </div>
                <div className="relative h-14 mb-3 flex items-center justify-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid hsl(var(--primary) / 0.4)",
                      boxShadow: "0 0 28px hsl(var(--primary) / 0.4)",
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="text-xs text-primary/80">Borna</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </SectionShell>
  );
};

/* ---------- Section 9: Roadmap ---------- */

const Roadmap = () => {
  const reduce = useReducedMotion();
  const phases = [
    {
      n: "Phase 1",
      label: "Patient engagement",
      badge: "Live",
      tone: "live" as const,
      desc: "Borna Care — Patient portal, scheduling, digital forms, payments",
      glow: 1,
    },
    {
      n: "Phase 2",
      label: "Communication",
      badge: "In Development",
      tone: "dev" as const,
      desc: "Borna Connect — Omnichannel patient communication",
      glow: 0.65,
    },
    {
      n: "Phase 3",
      label: "CRM & analytics",
      badge: "Coming Soon",
      tone: "soon" as const,
      desc: "Borna Engage + Insight — CRM, lifecycle, analytics",
      glow: 0.35,
    },
    {
      n: "Phase 4",
      label: "AI core",
      badge: "Planned",
      tone: "planned" as const,
      desc: "Borna Core — AI automation engine and predictive intelligence",
      glow: 0.15,
    },
  ];

  return (
    <SectionShell>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Eyebrow>Roadmap & vision</Eyebrow>
          <h2 className="section-title mt-4">Product roadmap and vision</h2>
          <p className="mt-6 body-text">
            Borna is building in deliberate phases — shipping real product
            before expanding. Each phase adds a new capability layer to the same
            unified platform.
          </p>
        </div>

        <div className="mt-16 max-w-5xl mx-auto relative">
          {/* timeline line desktop */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-px overflow-hidden">
            <div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.6) 33%, hsl(var(--primary) / 0.3) 66%, hsl(var(--primary) / 0.1) 100%)",
              }}
            />
            {!reduce && (
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-16 h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, hsl(var(--primary)), transparent)",
                  filter: "blur(1px)",
                }}
                animate={{ left: ["0%", "100%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            )}
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {phases.map((p) => (
              <div
                key={p.n}
                className="flex md:flex-col items-start md:items-center gap-4 md:gap-3"
              >
                <div className="flex md:flex-col items-center gap-2 md:gap-3 shrink-0">
                  <StatusBadge label={p.badge} tone={p.tone} />
                  <div
                    className="w-7 h-7 rounded-full md:mt-2"
                    style={{
                      background: `hsl(var(--primary) / ${p.glow})`,
                      boxShadow: `0 0 ${20 * p.glow}px hsl(var(--primary) / ${p.glow})`,
                    }}
                  />
                </div>
                <div className="md:text-center">
                  <div className="text-xs text-muted-foreground">{p.n}</div>
                  <div className="text-sm font-medium text-foreground mt-0.5">
                    {p.label}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

/* ---------- Section 10: How value is created (5-step) ---------- */

const ValueFlow = () => {
  const steps = [
    { n: 1, t: "Capture", d: "Patient interactions across all channels" },
    { n: 2, t: "Centralize", d: "Data unified in one platform and patient record" },
    { n: 3, t: "Analyze", d: "AI surfaces patterns, behaviors, and opportunities" },
    { n: 4, t: "Automate", d: "Workflows triggered without manual effort" },
    { n: 5, t: "Optimize", d: "Performance improves continuously through intelligence" },
  ];
  return (
    <SectionShell>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="section-title mt-4">How Borna creates value</h2>
          <p className="mt-6 body-text">
            Every interaction in a healthcare practice generates data. Borna
            captures, centralizes, and activates that data to create compounding
            value at every step.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {steps.map((s) => (
            <GlassCard key={s.n} className="text-center">
              <div className="text-xs text-primary font-medium mb-2">
                Step {s.n}
              </div>
              <div className="text-base font-medium text-foreground">{s.t}</div>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                {s.d}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
};

/* ---------- Section 11: Market fit ---------- */

const MarketFit = () => {
  const verticals = [
    { icon: Stethoscope, label: "Dental practices", angle: -Math.PI / 2 },
    { icon: HeartPulse, label: "Medical clinics", angle: Math.PI / 6 },
    { icon: Building2, label: "Specialty providers", angle: (5 * Math.PI) / 6 },
  ];
  return (
    <SectionShell>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Market fit</Eyebrow>
            <h2 className="section-title mt-4">
              Designed for real healthcare operations
            </h2>
            <p className="mt-6 body-text">
              Borna is built for the practices that make up the majority of the
              healthcare market — dental clinics, medical practices, and
              specialty providers — each with distinct workflows that generic
              software fails to serve.
            </p>
            <Link
              to="/industries"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 mt-6"
            >
              See industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative aspect-square max-w-md mx-auto w-full">
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" aria-hidden>
              {verticals.map((v, i) => {
                const x = 200 + Math.cos(v.angle) * 130;
                const y = 200 + Math.sin(v.angle) * 130;
                return (
                  <line
                    key={i}
                    x1="200"
                    y1="200"
                    x2={x}
                    y2={y}
                    stroke="hsl(var(--primary) / 0.3)"
                  />
                );
              })}
            </svg>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid hsl(var(--primary) / 0.4)",
                boxShadow: "0 0 40px hsl(var(--primary) / 0.4)",
              }}
            >
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute left-1/2 top-[64%] -translate-x-1/2 text-[11px] text-muted-foreground whitespace-nowrap">
              One platform. Multiple verticals.
            </div>
            {verticals.map((v) => {
              const x = 50 + Math.cos(v.angle) * 35;
              const y = 50 + Math.sin(v.angle) * 35;
              return (
                <div
                  key={v.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "0.5px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[11px] text-foreground">{v.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

/* ---------- Section 12: Highlights ---------- */

const Highlights = () => {
  const cards = [
    {
      icon: TrendingUp,
      h: "Large and growing market",
      b: "Healthcare SaaS is one of the fastest-growing software categories, driven by regulatory requirements and patient expectations for digital experiences.",
    },
    {
      icon: Layers,
      h: "Early-stage entry, scalable foundation",
      b: "Borna is architected from the ground up for scale — modular, data-first, and AI-ready — with the flexibility to expand across verticals.",
    },
    {
      icon: Puzzle,
      h: "Modular product strategy",
      b: "Practices adopt one module and expand over time — creating predictable recurring revenue with natural upsell paths built into the architecture.",
    },
    {
      icon: Brain,
      h: "AI-driven competitive advantage",
      b: "As the platform captures more patient and practice data, the AI layer compounds in value — creating a defensible data moat over time.",
    },
  ];
  return (
    <SectionShell>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Eyebrow>Investment highlights</Eyebrow>
          <h2 className="section-title mt-4">Why now, why Borna</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {cards.map((c) => (
            <GlassCard key={c.h}>
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "0.5px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 0 20px hsl(var(--primary) / 0.15)",
                }}
              >
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-medium text-foreground">{c.h}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {c.b}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
};

/* ---------- Section 13: Key takeaways ---------- */

const Takeaways = () => {
  const items = [
    { icon: CheckCircle2, t: "Early-stage AI healthcare platform with live product" },
    { icon: Network, t: "Solving fragmentation across healthcare operations" },
    { icon: Workflow, t: "Modular SaaS model built for scalable recurring revenue" },
    { icon: Brain, t: "AI-driven architecture with compounding data advantage" },
  ];
  return (
    <SectionShell>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Eyebrow>Key takeaways</Eyebrow>
          <h2 className="section-title mt-4">What investors should remember</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map((it) => (
            <div key={it.t} className="flex flex-col items-center text-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "0.5px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 0 18px hsl(var(--primary) / 0.15)",
                }}
              >
                <it.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">{it.t}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
};

/* ---------- Section 14: Investor FAQ (custom; can't reuse fixed-content FAQSection) ---------- */

const investorFaqs = [
  {
    q: "What is an AI healthcare startup?",
    a: "A company that develops AI-powered solutions to improve healthcare operations, patient engagement, and clinical decision-making — typically by replacing fragmented point solutions with an integrated platform.",
  },
  {
    q: "What stage is Borna currently in?",
    a: "Borna is in early-stage development. Borna Care is live and beta-ready. Borna Connect is in active development. Borna Insight is partially developed. Borna Engage and Borna Core are planned for subsequent phases.",
  },
  {
    q: "What makes Borna scalable?",
    a: "Borna's modular platform architecture and SaaS subscription model allow it to expand across multiple healthcare verticals — dental, medical, and specialty practices — without rebuilding the core system for each market.",
  },
  {
    q: "Who are Borna's current investors?",
    a: "Borna is currently backed by angel investors and is actively engaging with investors who share the vision for transforming healthcare through AI-powered unified systems.",
  },
  {
    q: "How can I learn more or request the investor deck?",
    a: 'Use the "Request Investor Deck" button on this page or reach out directly through the investor relations contact. We are happy to discuss the opportunity in detail.',
  },
];

const InvestorFAQ = () => <StandardFAQ items={investorFaqs} eyebrow="Investor FAQ" />;

/* ---------- Page ---------- */

const InvestorsPage = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Borna AI",
      url: "https://borna.ai",
      description:
        "AI healthcare platform startup focused on patient engagement, CRM, communication, and automation.",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "AI Healthcare Investment Opportunity | Borna AI",
      description:
        "Explore Borna AI, an early-stage healthcare platform company with scalable SaaS and AI-driven solutions.",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Borna AI Platform",
      applicationCategory: "HealthApplication",
      description:
        "AI healthcare platform combining communication, CRM, analytics, and automation.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: investorFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <PageWrapper>
      <Helmet>
        <title>AI Healthcare Startup Investment Opportunity | Borna AI Platform</title>
        <meta
          name="description"
          content="Borna AI is an early-stage healthcare AI platform unifying communication, CRM, analytics, and automation. Explore our vision, roadmap, and investment opportunity."
        />
        {jsonLd.map((j, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(j)}
          </script>
        ))}
      </Helmet>

      <Hero />
      <Definition />
      <Problem />
      <Opportunity />
      <Solution />
      <Traction />
      <BusinessModel />
      <Differentiation />
      <Roadmap />
      <ValueFlow />
      <MarketFit />
      <Highlights />
      <Takeaways />
      <InvestorFAQ />
      <CTASection />
    </PageWrapper>
  );
};

export default InvestorsPage;
