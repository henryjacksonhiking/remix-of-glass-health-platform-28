import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Layers,
  Rocket,
  GitBranch,
  Network,
  Calendar,
  ArrowRight,
  Ship,
  ShieldCheck,
  Server,
  Repeat,
  HeartPulse,
  Radio,
  BarChart3,
  Users,
  Brain,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import StandardFAQ from "@/components/sections/StandardFAQ";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ---------- Shared atoms (mirrors InvestorsPage style) ---------- */

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
  glowColor = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  glowColor?: "primary" | "amber" | "muted";
}) => {
  const glowMap: Record<string, string> = {
    primary:
      "0 0 0 1px hsl(var(--primary) / 0.25), 0 0 40px hsl(var(--primary) / 0.18)",
    amber:
      "0 0 0 1px rgba(245,158,11,0.25), 0 0 30px rgba(245,158,11,0.15)",
    muted:
      "0 0 0 1px rgba(255,255,255,0.06)",
  };
  return (
    <div
      className={`relative rounded-2xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-0.5 ${className}`}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "0.5px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        boxShadow: glow ? glowMap[glowColor] : undefined,
      }}
    >
      {children}
    </div>
  );
};

type Status = "live" | "dev" | "early" | "planned" | "future" | "soon";

const StatusBadge = ({ status }: { status: Status }) => {
  const map: Record<Status, { label: string; cls: string; style?: React.CSSProperties }> = {
    live: {
      label: "Live",
      cls: "text-background",
      style: { background: "hsl(var(--primary))" },
    },
    dev: {
      label: "In Development",
      cls: "text-foreground",
      style: { border: "1px solid rgba(245,158,11,0.6)", color: "#F59E0B" },
    },
    early: {
      label: "Early Stage",
      cls: "",
      style: { border: "1px solid hsl(var(--primary) / 0.5)", color: "hsl(var(--primary))" },
    },
    soon: {
      label: "Coming Soon",
      cls: "",
      style: { border: "1px solid hsl(var(--primary) / 0.4)", color: "hsl(var(--primary) / 0.9)" },
    },
    planned: {
      label: "Planned",
      cls: "text-muted-foreground",
      style: { border: "1px solid rgba(255,255,255,0.18)" },
    },
    future: {
      label: "Future",
      cls: "text-muted-foreground",
      style: { border: "1px solid rgba(255,255,255,0.12)" },
    },
  };
  const b = map[status];
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide whitespace-nowrap ${b.cls}`}
      style={b.style}
    >
      {b.label}
    </span>
  );
};

const ProgressBar = ({
  value,
  color = "primary",
}: {
  value: number;
  color?: "primary" | "amber" | "muted";
}) => {
  const fill =
    color === "amber"
      ? "linear-gradient(90deg, rgba(245,158,11,0.8), rgba(245,158,11,0.4))"
      : color === "muted"
      ? "linear-gradient(90deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))"
      : "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary) / 0.5))";
  return (
    <div
      className="relative h-1 w-full rounded-full overflow-hidden"
      style={{ background: "rgba(255,255,255,0.06)" }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full"
        style={{ width: `${value}%`, background: fill }}
      />
    </div>
  );
};

/* ---------- Hero visual: glowing path with 5 dimming nodes ---------- */

const HeroPath = () => {
  const reduce = useReducedMotion();
  // Diagonal layout: bottom-left → top-right
  const nodes = [
    { x: 60, y: 220, color: "hsl(var(--primary))", opacity: 1, label: "Phase 1" },
    { x: 170, y: 180, color: "#F59E0B", opacity: 0.9, label: "Phase 2" },
    { x: 280, y: 140, color: "hsl(var(--primary))", opacity: 0.75, label: "Phase 3" },
    { x: 390, y: 100, color: "#94A3B8", opacity: 0.6, label: "Phase 4" },
    { x: 500, y: 60, color: "#94A3B8", opacity: 0.45, label: "Phase 5" },
  ];
  return (
    <div className="relative w-full h-[260px] md:h-[320px]">
      <svg viewBox="0 0 560 260" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="rmHeroLine" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="60%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
          </linearGradient>
          <radialGradient id="rmHeroGlow">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
          <filter id="rmHeroBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <circle cx="280" cy="140" r="140" fill="url(#rmHeroGlow)" opacity="0.4" />
        {/* Diagonal trajectory line with glow */}
        <path
          d="M 60 220 C 170 200, 280 160, 390 110 S 480 70, 500 60"
          stroke="url(#rmHeroLine)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#rmHeroBlur)"
        />
        {nodes.map((n, i) => (
          <g key={i} opacity={n.opacity}>
            {i === 0 && !reduce && (
              <motion.circle
                cx={n.x}
                cy={n.y}
                r={10}
                fill={n.color}
                opacity={0.3}
                animate={{ r: [10, 22], opacity: [0.4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              />
            )}
            <circle cx={n.x} cy={n.y} r={i === 0 ? 8 : 6} fill={n.color} stroke="hsl(var(--background))" strokeWidth="1.5" />
            <text
              x={n.x}
              y={n.y + 22}
              textAnchor="middle"
              fontSize="12"
              fontWeight="600"
              fill="hsl(var(--foreground))"
            >
              {n.label}
            </text>
          </g>
        ))}
        {!reduce && (
          <motion.circle
            r={5}
            fill="hsl(var(--primary))"
            initial={{ cx: 60, cy: 220 }}
            animate={{ cx: [60, 170, 280, 390, 500], cy: [220, 180, 140, 100, 60] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 0 8px hsl(var(--primary)))" }}
          />
        )}
      </svg>
    </div>
  );
};

/* ---------- Section 3: 4-step flow ---------- */

const stepFlow = [
  { icon: Layers, label: "Build", desc: "Build core platform components first" },
  { icon: Rocket, label: "Launch", desc: "Release usable products to real practices early" },
  { icon: GitBranch, label: "Expand", desc: "Add capabilities incrementally across modules" },
  { icon: Network, label: "Integrate", desc: "Unify all modules into one intelligent system" },
];

const StepFlow = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-3 relative">
    {stepFlow.map((s, i) => {
      const Icon = s.icon;
      return (
        <div key={i} className="relative">
          <GlassCard>
            <div className="text-[11px] tracking-wider text-muted-foreground mb-3">
              0{i + 1}
            </div>
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
              style={{
                background: "hsl(var(--primary) / 0.1)",
                border: "0.5px solid hsl(var(--primary) / 0.3)",
              }}
            >
              <Icon className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
            </div>
            <div className="text-base font-medium text-foreground mb-1.5">{s.label}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </GlassCard>
          {i < stepFlow.length - 1 && (
            <div className="hidden md:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10">
              <ArrowRight className="w-4 h-4" style={{ color: "hsl(var(--primary) / 0.6)" }} />
            </div>
          )}
        </div>
      );
    })}
  </div>
);

/* ---------- Section 4: module status grid ---------- */

const modules = [
  {
    name: "Borna Care",
    sub: "Patient Engagement & Portal",
    icon: HeartPulse,
    status: "live" as Status,
    progress: 100,
    color: "primary" as const,
    glow: true,
    desc: "Patient portal, scheduling, digital forms, and payments — available now.",
  },
  {
    name: "Borna Connect",
    sub: "Omnichannel Patient Communication",
    icon: Radio,
    status: "dev" as Status,
    progress: 55,
    color: "amber" as const,
    glow: false,
    desc: "Unified calls, SMS, email, and chat — currently in active development.",
  },
  {
    name: "Borna Insight",
    sub: "Analytics & Performance Dashboard",
    icon: BarChart3,
    status: "early" as Status,
    progress: 25,
    color: "primary" as const,
    glow: false,
    desc: "Healthcare analytics and reporting — partially developed.",
  },
  {
    name: "Borna Engage",
    sub: "Healthcare CRM & Lifecycle Management",
    icon: Users,
    status: "planned" as Status,
    progress: 6,
    color: "muted" as const,
    glow: false,
    desc: "Patient relationship management and lifecycle tracking — planned.",
  },
  {
    name: "Borna Core",
    sub: "AI Engine & Automation",
    icon: Brain,
    status: "planned" as Status,
    progress: 4,
    color: "muted" as const,
    glow: false,
    desc: "AI automation engine and predictive intelligence — planned.",
  },
];

const ModuleGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
    {modules.map((m, i) => {
      const Icon = m.icon;
      return (
        <motion.div
          key={m.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className={i === 3 ? "md:col-start-1 md:col-span-1 lg:col-start-1" : ""}
        >
          <GlassCard
            glow={m.glow}
            glowColor={m.color === "amber" ? "amber" : "primary"}
            className="h-full"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    m.color === "amber"
                      ? "rgba(245,158,11,0.1)"
                      : m.color === "muted"
                      ? "rgba(255,255,255,0.05)"
                      : "hsl(var(--primary) / 0.1)",
                  border:
                    m.color === "amber"
                      ? "0.5px solid rgba(245,158,11,0.3)"
                      : m.color === "muted"
                      ? "0.5px solid rgba(255,255,255,0.1)"
                      : "0.5px solid hsl(var(--primary) / 0.3)",
                }}
              >
                <Icon
                  className="w-5 h-5"
                  style={{
                    color:
                      m.color === "amber"
                        ? "#F59E0B"
                        : m.color === "muted"
                        ? "rgba(255,255,255,0.5)"
                        : "hsl(var(--primary))",
                  }}
                />
              </div>
              <StatusBadge status={m.status} />
            </div>
            <h3 className="text-base font-medium text-foreground">{m.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">{m.sub}</p>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              {m.desc}
            </p>
            <div className="mt-5">
              <ProgressBar value={m.progress} color={m.color} />
            </div>
          </GlassCard>
        </motion.div>
      );
    })}
  </div>
);

/* ---------- Section 5: Phased timeline (centrepiece) ---------- */

const phases = [
  {
    n: "Phase 1",
    name: "Foundation",
    product: "Borna Care",
    status: "live" as Status,
    color: "hsl(var(--primary))",
    intensity: 1,
    deliverables: [
      "Launch Borna Care patient portal",
      "Establish patient engagement and digital payments",
      "Build initial platform infrastructure",
    ],
    link: { label: "Explore Borna Care →", to: "/products/care" },
    pulse: true,
  },
  {
    n: "Phase 2",
    name: "Communication Expansion",
    product: "Borna Connect",
    status: "dev" as Status,
    color: "#F59E0B",
    intensity: 0.85,
    deliverables: [
      "Unify all patient communication channels",
      "Introduce AI-assisted answering capabilities",
      "Connect communication data to the platform core",
    ],
  },
  {
    n: "Phase 3",
    name: "Data & Insights",
    product: "Borna Insight",
    status: "soon" as Status,
    color: "hsl(var(--primary))",
    intensity: 0.5,
    deliverables: [
      "Expand analytics and reporting capabilities",
      "Enable real-time performance tracking",
      "Surface actionable insights across the practice",
    ],
  },
  {
    n: "Phase 4",
    name: "CRM & Lifecycle Management",
    product: "Borna Engage",
    status: "planned" as Status,
    color: "#94A3B8",
    intensity: 0.3,
    deliverables: [
      "Launch patient CRM and lead management",
      "Integrate full lifecycle tracking from lead to retention",
      "Enable automated relationship management",
    ],
  },
  {
    n: "Phase 5",
    name: "AI Automation & Intelligence",
    product: "Borna Core",
    status: "future" as Status,
    color: "#94A3B8",
    intensity: 0.15,
    deliverables: [
      "Develop the AI automation engine",
      "Enable predictive insights across all platform data",
      "Automate workflows across the entire system",
    ],
  },
];

const PhaseTimeline = () => {
  const reduce = useReducedMotion();
  return (
    <div className="relative">
      {/* Desktop horizontal */}
      <div className="hidden lg:block">
        <div className="relative h-[80px] mb-8">
          <svg viewBox="0 0 1000 80" className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="rmTimeline" x1="0" x2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                <stop offset="40%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            <motion.line
              x1="60"
              y1="40"
              x2="940"
              y2="40"
              stroke="url(#rmTimeline)"
              strokeWidth="1.5"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={reduce ? undefined : { pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {phases.map((p, i) => {
              const x = 60 + (880 / 4) * i;
              return (
                <motion.g
                  key={p.n}
                  initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                  whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 * i + 0.3 }}
                  aria-label={`${p.n} - ${p.name}`}
                >
                  {p.pulse && !reduce && (
                    <>
                      <motion.circle
                        cx={x}
                        cy={40}
                        r={10}
                        fill={p.color}
                        opacity={0.4}
                        animate={{ r: [10, 24], opacity: [0.4, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                      />
                      <motion.circle
                        cx={x}
                        cy={40}
                        r={10}
                        fill={p.color}
                        opacity={0.3}
                        animate={{ r: [10, 24], opacity: [0.3, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1.5, ease: "easeOut" }}
                      />
                    </>
                  )}
                  <circle
                    cx={x}
                    cy={40}
                    r={p.status === "live" || p.status === "dev" ? 8 : 6}
                    fill={p.status === "live" || p.status === "dev" ? p.color : "transparent"}
                    stroke={p.color}
                    strokeWidth="1.5"
                    opacity={p.intensity}
                    style={{
                      filter:
                        p.intensity > 0.4
                          ? `drop-shadow(0 0 8px ${p.color})`
                          : undefined,
                    }}
                  />
                  <text
                    x={x}
                    y={72}
                    textAnchor="middle"
                    fontSize="10"
                    fill="hsl(var(--muted-foreground))"
                  >
                    {p.n}
                  </text>
                </motion.g>
              );
            })}
          </svg>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {phases.map((p, i) => (
            <motion.div
              key={p.n}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 * i + 0.5 }}
            >
              <GlassCard
                glow={p.status === "live"}
                glowColor={p.status === "dev" ? "amber" : "primary"}
                className="h-full"
              >
                <div className="text-[11px] tracking-wider text-muted-foreground mb-2">
                  {p.n}
                </div>
                <div className="flex items-center justify-between mb-3 gap-2">
                  <h3 className="text-base font-medium text-foreground leading-tight">
                    {p.name}
                  </h3>
                </div>
                <StatusBadge status={p.status} />
                <div className="mt-4 text-sm font-medium text-foreground">{p.product}</div>
                <ul className="mt-3 space-y-2">
                  {p.deliverables.map((d, j) => (
                    <li
                      key={j}
                      className="text-xs text-muted-foreground flex gap-2 leading-relaxed"
                    >
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                        style={{ background: p.color, opacity: p.intensity }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
                {p.link && (
                  <Link
                    to={p.link.to}
                    className="inline-block mt-4 text-xs"
                    style={{ color: "hsl(var(--primary))" }}
                  >
                    {p.link.label}
                  </Link>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet vertical */}
      <div className="lg:hidden space-y-6 relative">
        <div
          className="absolute left-4 top-2 bottom-2 w-px"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.4) 50%, hsl(var(--primary) / 0.05) 100%)",
          }}
        />
        {phases.map((p, i) => (
          <motion.div
            key={p.n}
            initial={reduce ? false : { opacity: 0, x: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 * i }}
            className="relative pl-12"
          >
            <div
              className="absolute left-2 top-4 w-5 h-5 rounded-full flex items-center justify-center"
              style={{
                background:
                  p.status === "live" || p.status === "dev" ? p.color : "transparent",
                border: `1.5px solid ${p.color}`,
                opacity: p.intensity,
                boxShadow:
                  p.intensity > 0.4 ? `0 0 12px ${p.color}` : undefined,
              }}
            />
            <GlassCard
              glow={p.status === "live"}
              glowColor={p.status === "dev" ? "amber" : "primary"}
            >
              <div className="text-[11px] tracking-wider text-muted-foreground mb-1">
                {p.n}
              </div>
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="text-base font-medium text-foreground">{p.name}</h3>
                <StatusBadge status={p.status} />
              </div>
              <div className="text-sm font-medium text-foreground mt-2">{p.product}</div>
              <ul className="mt-3 space-y-2">
                {p.deliverables.map((d, j) => (
                  <li
                    key={j}
                    className="text-xs text-muted-foreground flex gap-2 leading-relaxed"
                  >
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                      style={{ background: p.color, opacity: p.intensity }}
                    />
                    {d}
                  </li>
                ))}
              </ul>
              {p.link && (
                <Link
                  to={p.link.to}
                  className="inline-block mt-3 text-xs"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  {p.link.label}
                </Link>
              )}
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ---------- Section 6: forward flow ---------- */

const flowNodes = [
  { name: "Care", sub: "Patient Engagement", intensity: 1 },
  { name: "Connect", sub: "Communication", intensity: 0.8 },
  { name: "Insight", sub: "Analytics", intensity: 0.55 },
  { name: "Engage", sub: "CRM", intensity: 0.35 },
  { name: "Core", sub: "AI Intelligence", intensity: 0.2 },
];

const ForwardFlow = () => {
  const reduce = useReducedMotion();
  return (
    <div className="relative">
      <div className="hidden md:flex items-start justify-between gap-2">
        {flowNodes.map((n, i) => (
          <div key={n.name} className="flex-1 flex items-start">
            <div className="flex flex-col items-center text-center" style={{ flex: "0 0 auto", minWidth: 100 }}>
              <div
                className="px-4 py-2 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `0.5px solid hsl(var(--primary) / ${0.5 * n.intensity + 0.1})`,
                  color: `hsla(var(--foreground-h, 0), 0%, 100%, ${0.4 + n.intensity * 0.6})`,
                  boxShadow:
                    n.intensity > 0.5
                      ? `0 0 16px hsl(var(--primary) / ${n.intensity * 0.3})`
                      : undefined,
                }}
              >
                {n.name}
              </div>
              <div className="text-[11px] text-muted-foreground mt-2">{n.sub}</div>
            </div>
            {i < flowNodes.length - 1 && (
              <div className="flex-1 relative h-[34px] flex items-center mx-2">
                <div
                  className="w-full h-px"
                  style={{
                    background: `hsl(var(--primary) / ${0.4 * n.intensity + 0.05})`,
                  }}
                />
                {!reduce && (
                  <motion.div
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "hsl(var(--primary))",
                      filter: "drop-shadow(0 0 4px hsl(var(--primary)))",
                      top: "calc(50% - 3px)",
                    }}
                    initial={{ left: "0%", opacity: 0 }}
                    animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "linear",
                    }}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* mobile vertical */}
      <div className="md:hidden flex flex-col items-center gap-3">
        {flowNodes.map((n, i) => (
          <div key={n.name} className="flex flex-col items-center">
            <div
              className="px-4 py-2 rounded-full text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `0.5px solid hsl(var(--primary) / ${0.5 * n.intensity + 0.1})`,
                boxShadow:
                  n.intensity > 0.5
                    ? `0 0 16px hsl(var(--primary) / ${n.intensity * 0.3})`
                    : undefined,
              }}
            >
              {n.name}
            </div>
            <div className="text-[11px] text-muted-foreground mt-1">{n.sub}</div>
            {i < flowNodes.length - 1 && (
              <div
                className="w-px h-6 my-2"
                style={{ background: `hsl(var(--primary) / ${0.4 * n.intensity + 0.05})` }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------- Section 7 + 10: ecosystem diagram ---------- */

const EcosystemDiagram = ({
  fullBright = false,
  caption,
}: {
  fullBright?: boolean;
  caption?: string;
}) => {
  const reduce = useReducedMotion();
  // Layered platform stack — each module is a layer that integrates with the next
  const layers = [
    { label: "Care", sub: "Patient experience" },
    { label: "Connect", sub: "Communication layer" },
    { label: "Insight", sub: "Analytics & data" },
    { label: "Engage", sub: "Lifecycle automation" },
    { label: "Core", sub: "Platform foundation" },
  ];
  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full max-w-[420px]">
        <svg viewBox="0 0 420 420" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="rmEcoLayer" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.22" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="rmEcoLayerActive" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.45" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
            </linearGradient>
            <linearGradient id="rmEcoFlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="rmEcoAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </radialGradient>
            <filter id="rmEcoSoftGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* ambient aura behind stack */}
          <ellipse cx={210} cy={210} rx={210} ry={170} fill="url(#rmEcoAura)" opacity={fullBright ? 0.95 : 0.5} />

          {/* Vertical data lanes flowing through all layers */}
          {[120, 210, 300].map((x, i) => (
            <g key={`lane-${x}`}>
              <line x1={x} y1={60} x2={x} y2={360} stroke="hsl(var(--primary))" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="2 5" />
              {!reduce && (
                <motion.circle
                  cx={x}
                  r={2.5}
                  fill="hsl(var(--primary))"
                  initial={{ cy: 60, opacity: 0 }}
                  animate={{ cy: [60, 360], opacity: [0, 1, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
                  style={{ filter: "drop-shadow(0 0 5px hsl(var(--primary)))" }}
                />
              )}
            </g>
          ))}

          {/* Stacked layers */}
          {layers.map((l, i) => {
            const y = 70 + i * 56;
            const opacity = fullBright ? 1 : i === 0 ? 1 : i === 1 ? 0.8 : i === 2 ? 0.55 : 0.32;
            const isActive = fullBright || i < 2;
            return (
              <g key={l.label} opacity={opacity}>
                {/* layer slab */}
                <rect
                  x={50}
                  y={y}
                  width={320}
                  height={42}
                  rx={10}
                  fill={isActive ? "url(#rmEcoLayerActive)" : "url(#rmEcoLayer)"}
                  stroke="hsl(var(--primary))"
                  strokeOpacity={isActive ? 0.55 : 0.28}
                  strokeWidth="1.25"
                  style={isActive ? { filter: "drop-shadow(0 0 12px hsl(var(--primary) / 0.25))" } : undefined}
                />
                {/* index chip */}
                <rect x={60} y={y + 11} width={20} height={20} rx={5} fill="hsl(var(--primary))" fillOpacity={isActive ? 0.25 : 0.12} stroke="hsl(var(--primary))" strokeOpacity={isActive ? 0.7 : 0.35} strokeWidth="1" />
                <text x={70} y={y + 25} textAnchor="middle" fontSize="10" fontWeight="700" fill="hsl(var(--foreground))">{i + 1}</text>
                {/* labels */}
                <text x={92} y={y + 22} fontSize="13" fontWeight="700" fill="hsl(var(--foreground))">{l.label}</text>
                <text x={92} y={y + 35} fontSize="9" fill="hsl(var(--muted-foreground))">{l.sub}</text>
                {/* status pill */}
                <g>
                  <rect x={300} y={y + 12} width={58} height={18} rx={9} fill={isActive ? "hsl(var(--primary))" : "hsl(var(--primary))"} fillOpacity={isActive ? 0.18 : 0.08} stroke="hsl(var(--primary))" strokeOpacity={isActive ? 0.5 : 0.25} strokeWidth="0.75" />
                  <circle cx={310} cy={y + 21} r={2.5} fill="hsl(var(--primary))" opacity={isActive ? 1 : 0.4}>
                    {isActive && !reduce && <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />}
                  </circle>
                  <text x={318} y={y + 25} fontSize="8" fontWeight="600" fill="hsl(var(--primary))" opacity={isActive ? 1 : 0.5}>
                    {isActive ? "ACTIVE" : "PHASED"}
                  </text>
                </g>
              </g>
            );
          })}

          {/* Borna core label badge above stack */}
          <g filter="url(#rmEcoSoftGlow)">
            <rect x={150} y={20} width={120} height={32} rx={16} fill="hsl(var(--primary))" opacity={fullBright ? 1 : 0.9} />
          </g>
          <rect x={150} y={20} width={120} height={32} rx={16} fill="none" stroke="hsl(var(--background))" strokeOpacity="0.4" strokeWidth="1" />
          <text x={210} y={41} textAnchor="middle" fontSize="13" fontWeight="700" fill="hsl(var(--background))">
            Borna Platform
          </text>
          {fullBright && !reduce && (
            <motion.rect
              x={150}
              y={20}
              width={120}
              height={32}
              rx={16}
              fill="none"
              stroke="hsl(var(--primary))"
              animate={{ opacity: [0.6, 0], scale: [1, 1.15] }}
              style={{ transformOrigin: "210px 36px" }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            />
          )}

          {/* foundation baseline */}
          <line x1={50} y1={372} x2={370} y2={372} stroke="hsl(var(--primary))" strokeOpacity="0.4" strokeWidth="1.25" />
          <text x={210} y={392} textAnchor="middle" fontSize="10" fill="hsl(var(--muted-foreground))" letterSpacing="2">
            UNIFIED OPERATING SYSTEM
          </text>
        </svg>
      </div>
      {caption && (
        <p className="mt-4 text-xs text-muted-foreground text-center">{caption}</p>
      )}
    </div>
  );
};

/* ---------- Section 8: market context atmospheric ---------- */

const MarketContextBg = () => (
  <svg
    viewBox="0 0 1200 400"
    className="absolute inset-0 w-full h-full pointer-events-none"
    preserveAspectRatio="none"
  >
    {[0, 1, 2, 3, 4].map((i) => (
      <path
        key={i}
        d={`M 0 ${300 - i * 30} Q 300 ${250 - i * 25}, 600 ${280 - i * 28} T 1200 ${260 - i * 24}`}
        stroke="hsl(var(--primary))"
        strokeOpacity={0.08 - i * 0.01}
        strokeWidth="1"
        fill="none"
      />
    ))}
  </svg>
);

/* ---------- Section 9: commitments ---------- */

const commitments = [
  { icon: Ship, text: "Delivering usable products early — not waiting for perfection" },
  { icon: ShieldCheck, text: "Avoiding overpromising on features or timelines" },
  { icon: Server, text: "Building scalable infrastructure from the ground up" },
  { icon: Repeat, text: "Continuously improving based on real practice feedback" },
];

/* ---------- Section 11: takeaways ---------- */

const takeaways = [
  { icon: Network, text: "Borna is building a unified AI healthcare platform in deliberate phases" },
  { icon: CheckCircle2, text: "Initial products are live — development is actively ongoing" },
  { icon: GitBranch, text: "Each phase builds on the last toward one complete integrated system" },
  { icon: Sparkles, text: "AI automation capabilities expand with every phase" },
];

/* ---------- FAQ data ---------- */

const faqs = [
  {
    q: "What is a SaaS product roadmap?",
    a: "A product roadmap outlines the planned development stages, feature releases, and long-term vision of a software platform — helping users and investors understand current progress and future priorities.",
  },
  {
    q: "Is Borna AI fully developed?",
    a: "No. Borna is in early-stage development. Borna Care is live and beta-ready. Borna Connect is in active development. Borna Insight is partially developed. Borna Engage and Borna Core are planned for future phases.",
  },
  {
    q: "Why use a phased development approach?",
    a: "A phased approach allows real-world usage and validation while building toward a complete platform. It avoids overpromising and ensures each capability is built on a solid foundation before the next is added.",
  },
  {
    q: "What comes after Borna Care?",
    a: "Phase 2 is Borna Connect — unified omnichannel patient communication. Phase 3 brings Borna Insight for analytics and reporting. Phase 4 introduces Borna Engage for CRM and lifecycle management. Phase 5 launches Borna Core, the AI automation engine.",
  },
  {
    q: "Can I get early access to upcoming features?",
    a: 'Yes. Use the "Request Early Access" button on this page to express interest. We prioritize early access for practices that engage with us during the development phases.',
  },
];

/* ---------- Page ---------- */

const RoadmapPage = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Borna AI Roadmap",
      description:
        "Product roadmap and development timeline for the Borna AI healthcare platform.",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Borna AI Platform",
      applicationCategory: "HealthApplication",
      description: "AI healthcare platform with phased development roadmap.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Borna AI",
      url: "https://borna.ai",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <PageWrapper>
      <Helmet>
        <title>AI Healthcare Platform Roadmap | Product Development Timeline | Borna AI</title>
        <meta
          name="description"
          content="Explore Borna AI's product roadmap, including current progress, upcoming features, and future plans for our healthcare communication, CRM, and AI platform."
        />
        <link rel="canonical" href="https://borna.ai/roadmap" />
        {jsonLd.map((s, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(s)}
          </script>
        ))}
      </Helmet>

      {/* Hero */}
      <SectionShell className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Eyebrow>Product Roadmap</Eyebrow>
              <h1 className="hero-headline text-foreground mt-4">
                Borna AI product roadmap and development timeline
              </h1>
              <p className="body-text mt-6 max-w-xl">
                Borna AI is building a unified healthcare platform that integrates
                communication, CRM, analytics, and AI automation. Our roadmap outlines
                the current progress and future development of the platform.
              </p>
              <p className="body-text mt-4 max-w-xl text-muted-foreground">
                This roadmap reflects our commitment to transparency while delivering
                scalable solutions for healthcare practices.
              </p>
              <div className="mt-8 flex flex-row items-center gap-2 sm:gap-3">
                <Link to="/contact" className="gradient-btn text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 whitespace-nowrap">
                  Request early access
                </Link>
                <Link to="/platform" className="ghost-btn text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 whitespace-nowrap">
                  Explore platform →
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <HeroPath />
            </motion.div>
          </div>
        </div>
      </SectionShell>

      {/* Section 2 — Definition */}
      <SectionShell>
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Calendar
              className="w-5 h-5"
              style={{ color: "hsl(var(--primary) / 0.6)" }}
            />
            <h2 className="section-headline text-foreground">
              What is a product roadmap in SaaS?
            </h2>
          </div>
          <p className="body-text mt-4">
            A product roadmap is a strategic plan that outlines the development stages,
            feature releases, and long-term vision of a software platform.
          </p>
          <p className="body-text mt-4 text-muted-foreground">
            In SaaS and AI platforms, roadmaps help communicate progress, priorities,
            and future capabilities to users and investors.
          </p>
          <div
            className="mt-10 h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.2), transparent)",
            }}
          />
        </div>
      </SectionShell>

      {/* Section 3 — Development philosophy */}
      <SectionShell>
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <Eyebrow>How we build</Eyebrow>
            <h2 className="section-headline text-foreground mt-3">
              How Borna approaches product development
            </h2>
            <p className="body-text mt-4">
              Borna follows a modular and scalable development approach — building core
              components first, releasing usable products early, expanding functionality
              incrementally, and integrating all modules into one system.
            </p>
            <p className="body-text mt-3 text-muted-foreground">
              This ensures real-world usability while building toward a complete platform.
            </p>
          </div>
          <StepFlow />
        </div>
      </SectionShell>

      {/* Section 4 — Current development status */}
      <SectionShell>
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <Eyebrow>Where we are today</Eyebrow>
            <h2 className="section-headline text-foreground mt-3">
              Current development status
            </h2>
            <p className="body-text mt-4">
              Borna is currently in early-stage development with partial product
              availability. Here is where each module stands today.
            </p>
            <Link
              to="/products"
              className="inline-block mt-4 text-sm"
              style={{ color: "hsl(var(--primary))" }}
            >
              Explore all products →
            </Link>
          </div>
          <ModuleGrid />
        </div>
      </SectionShell>

      {/* Section 5 — Phased Roadmap (centrepiece) */}
      <SectionShell className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <Eyebrow>The journey</Eyebrow>
            <h2 className="section-headline text-foreground mt-3">
              Borna product roadmap by phases
            </h2>
            <p className="body-text mt-4">
              Five deliberate phases — each building on the last, all converging into
              one unified platform.
            </p>
          </div>
          <PhaseTimeline />
        </div>
      </SectionShell>

      {/* Section 6 — How phases connect */}
      <SectionShell>
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <Eyebrow>Built to integrate</Eyebrow>
            <h2 className="section-headline text-foreground mt-3">
              How each phase builds toward a unified platform
            </h2>
            <p className="body-text mt-4">
              Each phase is not independent — it is a layer that integrates with
              everything before it. By Phase 5, the platform will be a fully connected
              system where communication, data, relationships, and intelligence work as
              one.
            </p>
          </div>
          <ForwardFlow />
        </div>
      </SectionShell>

      {/* Section 7 — Long-term vision */}
      <SectionShell className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow>Where we're going</Eyebrow>
              <h2 className="section-headline text-foreground mt-3">
                Long-term vision for the Borna platform
              </h2>
              <p className="body-text mt-5">
                Borna's vision is to become a fully integrated healthcare operating
                system — a single intelligent platform that captures every patient
                interaction, centralizes all practice data, provides actionable
                insights, and automates workflows across the entire care journey.
              </p>
            </div>
            <EcosystemDiagram fullBright caption="The complete platform" />
          </div>
        </div>
      </SectionShell>

      {/* Section 8 — Market context */}
      <SectionShell>
        <MarketContextBg />
        <div className="container mx-auto px-4 md:px-6 max-w-3xl relative">
          <Eyebrow>Industry context</Eyebrow>
          <h2 className="section-headline text-foreground mt-3">
            Why healthcare platforms are evolving toward integration
          </h2>
          <p className="body-text mt-5">
            The healthcare industry is undergoing a fundamental shift — from isolated
            point solutions to integrated systems that improve coordination,
            efficiency, and patient outcomes.
          </p>
          <p className="body-text mt-4 text-muted-foreground">
            According to the Office of the National Coordinator for Health Information
            Technology, interoperability and data integration are key priorities in
            modern healthcare systems. Borna is building at exactly this intersection.
          </p>
        </div>
      </SectionShell>

      {/* Section 9 — Transparency */}
      <SectionShell>
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <Eyebrow>Trust</Eyebrow>
            <h2 className="section-headline text-foreground mt-3">
              Our commitment to transparent development
            </h2>
            <div
              className="mx-auto mt-4 h-px w-24"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
              }}
            />
            <p className="body-text mt-5">
              Borna is being built with a clear commitment to honesty over hype. We
              deliver usable products before expanding. We avoid overpromising on
              timelines. We build scalable infrastructure that will support the
              platform long-term. And we continuously improve based on real feedback
              from real practices.
            </p>
          </div>
          <div
            className="relative rounded-2xl p-8 md:p-10"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "0.5px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, transparent, hsl(var(--primary)), transparent)",
                boxShadow: "0 0 8px hsl(var(--primary))",
              }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {commitments.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: "hsl(var(--primary) / 0.1)",
                        border: "0.5px solid hsl(var(--primary) / 0.3)",
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
                    </div>
                    <p className="text-sm text-foreground leading-relaxed pt-1.5">
                      {c.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Section 10 — Platform connection */}
      <SectionShell>
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <EcosystemDiagram caption="Every roadmap phase connects to this system." />
            <div>
              <Eyebrow>The whole picture</Eyebrow>
              <h2 className="section-headline text-foreground mt-3">
                Explore the platform behind the roadmap
              </h2>
              <p className="body-text mt-5">
                Every phase of the roadmap contributes to a single unified system. The
                platform page explains how all the pieces connect — and what the
                completed architecture looks like.
              </p>
              <Link
                to="/platform"
                className="inline-block mt-5 text-sm"
                style={{ color: "hsl(var(--primary))" }}
              >
                Learn more about the platform →
              </Link>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Section 11 — Key takeaways */}
      <SectionShell>
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <Eyebrow>In summary</Eyebrow>
            <h2 className="section-headline text-foreground mt-3">Key takeaways</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {takeaways.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={i} className="flex flex-col items-start">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      background: "hsl(var(--primary) / 0.08)",
                      border: "0.5px solid hsl(var(--primary) / 0.25)",
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
                  </div>
                  <p className="text-sm font-medium text-foreground leading-relaxed">
                    {t.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionShell>

      {/* Section 12 — FAQ */}
      <StandardFAQ items={faqs} eyebrow="FAQ" />

      {/* Section 13 — Final CTA */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-2xl">
          <h2 className="section-headline text-foreground mb-4">
            Follow the journey of building a healthcare AI platform.
          </h2>
          <p className="body-text mx-auto mb-8">
            Borna AI is evolving into a complete system for healthcare operations and
            patient engagement. Join us early — and be part of shaping what it becomes.
          </p>
          <div className="cta-row">
            <Link to="/contact" className="gradient-btn text-sm sm:text-base px-4 sm:px-8 py-2.5 sm:py-3.5 whitespace-nowrap">
              Request early access
            </Link>
            <Link to="/contact" className="ghost-btn text-sm sm:text-base px-4 sm:px-8 py-2.5 sm:py-3.5 whitespace-nowrap">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default RoadmapPage;
