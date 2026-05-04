import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  Users,
  BarChart3,
  Smartphone,
  Cpu,
  Database,
  Radio,
  Activity,
  Phone,
  Mail,
  Calendar,
  CreditCard,
  Heart,
  RefreshCw,
  Network,
  Sparkles,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Layers,
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import EcosystemGlobe from "@/components/ui/ecosystem-globe";

/* ---------- Section 1: Hero radial diagram ---------- */
const RadialEcosystem = () => {
  const nodes = [
    { label: "Communication", Icon: MessageSquare, angle: -90 },
    { label: "CRM", Icon: Users, angle: -18 },
    { label: "Analytics", Icon: BarChart3, angle: 54 },
    { label: "Patient Experience", Icon: Smartphone, angle: 126 },
    { label: "Automation", Icon: Cpu, angle: 198 },
  ];
  const R = 140;
  const cx = 200;
  const cy = 200;
  const coreR = 42; // core circle radius
  const nodeR = 22; // satellite icon radius (w-11 = 44px → r=22)

  return (
    <div className="relative w-full max-w-[420px] aspect-square mx-auto" aria-label="Borna ecosystem radial diagram">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00DEC4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00DEC4" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* connecting lines: terminate exactly at edges of core and satellite circles */}
        {nodes.map((n, i) => {
          const rad = (n.angle * Math.PI) / 180;
          const cosA = Math.cos(rad);
          const sinA = Math.sin(rad);
          const x1 = cx + coreR * cosA;
          const y1 = cy + coreR * sinA;
          const x2 = cx + R * cosA;
          const y2 = cy + R * sinA;
          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#00DEC4"
              strokeOpacity="0.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
            />
          );
        })}
        {/* core glow */}
        <circle cx={cx} cy={cy} r="80" fill="url(#coreGlow)" />
        <motion.circle
          cx={cx}
          cy={cy}
          r="42"
          fill="hsl(170 100% 43%)"
          animate={{ r: [42, 46, 42], opacity: [1, 0.85, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <text x={cx} y={cy - 2} textAnchor="middle" fontSize="13" fontWeight="600" fill="hsl(226 60% 12%)">
          Borna AI
        </text>
        <text x={cx} y={cy + 14} textAnchor="middle" fontSize="9" fill="hsl(226 60% 12%)" opacity="0.7">
          AI Engine
        </text>
      </svg>
      {/* HTML labels for icons */}
      {nodes.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180;
        // Position relative to container (% of width, since aspect-square)
        const leftPct = 50 + (R / 400) * 100 * Math.cos(rad);
        const topPct = 50 + (R / 400) * 100 * Math.sin(rad);
        return (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
            className="absolute flex flex-col items-center gap-1.5"
            style={{
              left: `${leftPct}%`,
              top: `${topPct}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="w-11 h-11 rounded-full glass-panel flex items-center justify-center border border-primary/40">
              <n.Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <span className="absolute top-[44px] mt-1.5 text-[10px] text-foreground/80 whitespace-nowrap text-center leading-tight">
              {n.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

/* ---------- Section 2: Before / After ---------- */
const BeforeAfter = () => {
  const tools = [
    { Icon: Phone, label: "Phone" },
    { Icon: Mail, label: "Email" },
    { Icon: Calendar, label: "Calendar" },
    { Icon: BarChart3, label: "Analytics" },
    { Icon: Database, label: "Records" },
    { Icon: Users, label: "CRM" },
  ];
  const nodes = [
    { Icon: MessageSquare, angle: -90 },
    { Icon: Users, angle: -30 },
    { Icon: BarChart3, angle: 30 },
    { Icon: Calendar, angle: 90 },
    { Icon: Database, angle: 150 },
    { Icon: Cpu, angle: 210 },
  ];
  return (
    <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-stretch">
      {/* Disconnected — 2x3 grid of floating 3D cards */}
      <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-card/30 to-card/10 p-6 sm:p-8 backdrop-blur-md flex flex-col">
        <p className="text-center text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mb-5 sm:mb-6">Disconnected Tools</p>
        <div className="grid grid-cols-3 gap-3 sm:gap-4 flex-1" style={{ perspective: "800px" }}>
          {tools.map(({ Icon, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ rotateX: -8, rotateY: 8, y: -4 }}
              style={{ transformStyle: "preserve-3d" }}
              className="aspect-square rounded-xl flex flex-col items-center justify-center gap-2 border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.04)] transition-shadow hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.8)]"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-muted/30 flex items-center justify-center border border-white/5 grayscale opacity-70">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" strokeWidth={1.5} />
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground/70">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <ArrowRight className="hidden md:block w-8 h-8 text-primary/60 mx-auto self-center" />
      <div className="md:hidden h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Unified — interactive network with animated streams */}
      <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-card/40 to-card/10 p-6 sm:p-8 relative overflow-hidden backdrop-blur-md shadow-[0_0_40px_-10px_hsla(170,100%,43%,0.35)] flex flex-col">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsla(170,100%,43%,0.12),transparent_70%)]" />
        <div className="relative flex flex-col flex-1">
          <p className="text-center text-xs sm:text-sm uppercase tracking-wider text-primary mb-5 sm:mb-6">Unified Ecosystem</p>
          <div className="flex-1 flex items-center justify-center">
          <svg viewBox="0 0 220 200" className="w-full h-56 sm:h-64">
            <defs>
              <radialGradient id="coreUnifiedGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00DEC4" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#00DEC4" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* pulsing glow */}
            <motion.circle
              cx="110" cy="100" r="40" fill="url(#coreUnifiedGlow)"
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "110px 100px" }}
            />
            {/* lines + animated stream dots inbound */}
            {nodes.map((n, i) => {
              const rad = (n.angle * Math.PI) / 180;
              const x2 = 110 + 75 * Math.cos(rad);
              const y2 = 100 + 75 * Math.sin(rad);
              const x1 = 110 + 22 * Math.cos(rad);
              const y1 = 100 + 22 * Math.sin(rad);
              return (
                <g key={i}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#00DEC4" strokeOpacity="0.4" strokeWidth="1" />
                  <motion.circle
                    r="2" fill="#00DEC4"
                    initial={{ cx: x2, cy: y2, opacity: 0 }}
                    animate={{ cx: [x2, x1], cy: [y2, y1], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3, ease: "easeIn" }}
                  />
                  <circle cx={x2} cy={y2} r="13" fill="hsla(170, 100%, 43%, 0.2)" stroke="#00DEC4" strokeWidth="1" />
                  <foreignObject x={x2 - 8} y={y2 - 8} width="16" height="16">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                      <n.Icon style={{ width: 13, height: 13, color: "#00DEC4" }} strokeWidth={2} />
                    </div>
                  </foreignObject>
                </g>
              );
            })}
            {/* central core */}
            <motion.circle
              cx="110" cy="100" r="22" fill="hsl(170 100% 43%)"
              animate={{ r: [22, 24, 22] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <text x="110" y="104" textAnchor="middle" fontSize="10" fontWeight="700" fill="hsl(226 60% 12%)">
              Core
            </text>
          </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Section 3: Layered architecture ---------- */
const LayeredArchitecture = () => {
  const layers = [
    { label: "Patient Interaction Layer", Icons: [Smartphone], shade: 0.06 },
    { label: "Communication Layer", Icons: [Phone, MessageSquare, Mail], shade: 0.1 },
    { label: "CRM & Lifecycle Layer", Icons: [Users, Heart, RefreshCw], shade: 0.14 },
    { label: "Analytics Layer", Icons: [BarChart3, Activity, TrendingUp], shade: 0.18 },
    { label: "AI Engine (Borna Core)", Icons: [Cpu, Sparkles, Network], shade: 0.32, isCore: true },
    { label: "Data & Integration Layer", Icons: [Database, RefreshCw, Layers], shade: 0.12 },
  ];
  return (
    <div className="space-y-2 max-w-3xl mx-auto">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className={`flex items-center justify-between px-5 py-4 rounded-xl border ${
            layer.isCore ? "border-primary/50 shadow-[0_0_30px_-10px_hsla(170,100%,43%,0.5)]" : "border-border/50"
          }`}
          style={{ background: `hsla(170, 100%, 43%, ${layer.shade})` }}
        >
          <span
            className={`text-sm font-medium ${layer.isCore ? "text-primary" : "text-foreground/90"}`}
          >
            {layer.label}
          </span>
          <div className="flex items-center gap-2">
            {layer.Icons.map((Icon, j) => (
              <div
                key={j}
                className="w-8 h-8 rounded-md bg-background/40 flex items-center justify-center border border-white/5"
              >
                <Icon
                  className={`w-4 h-4 ${layer.isCore ? "text-primary" : "text-foreground/70"}`}
                  strokeWidth={1.5}
                />
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

/* ---------- Section 4: Patient journey — circular lifecycle ---------- */
const JourneyFlow = () => {
  const steps = [
    { label: "Marketing", Icon: Radio },
    { label: "First Contact", Icon: MessageSquare },
    { label: "Booking", Icon: Calendar },
    { label: "Appointment", Icon: Users },
    { label: "Treatment", Icon: Heart },
    { label: "Payment", Icon: CreditCard },
    { label: "Reactivation", Icon: RefreshCw },
  ];
  const size = 560;
  const cx = size / 2;
  const cy = size / 2;
  const R = 210;

  return (
    <div className="relative mx-auto w-full max-w-[560px] aspect-square">
      <svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 w-full h-full overflow-visible">
        <defs>
          <radialGradient id="journeyCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00DEC4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00DEC4" stopOpacity="0" />
          </radialGradient>
          <path
            id="journeyOrbit"
            d={`M ${cx} ${cy - R} A ${R} ${R} 0 1 1 ${cx - 0.01} ${cy - R} Z`}
          />
        </defs>
        {/* dashed orbit ring connecting all nodes */}
        <circle
          cx={cx}
          cy={cy}
          r={R}
          fill="none"
          stroke="#00DEC4"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        {/* center label */}
        <circle cx={cx} cy={cy} r="80" fill="url(#journeyCoreGlow)" />
        <circle cx={cx} cy={cy} r="56" fill="hsla(170, 100%, 43%, 0.14)" stroke="#00DEC4" strokeOpacity="0.5" strokeWidth="1.2" />
        <text x={cx} y={cy - 4} textAnchor="middle" fontSize="14" fontWeight="600" fill="#00DEC4">Patient</text>
        <text x={cx} y={cy + 14} textAnchor="middle" fontSize="14" fontWeight="600" fill="#00DEC4">Lifecycle</text>

        {/* animated traveling pulse (clockwise) */}
        <circle r="6" fill="#00DEC4" style={{ filter: "drop-shadow(0 0 8px #00DEC4)" }}>
          <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
            <mpath href="#journeyOrbit" />
          </animateMotion>
        </circle>
      </svg>
      {/* nodes as HTML */}
      {steps.map((s, i) => {
        const angle = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
        const leftPct = 50 + (R / size) * 100 * Math.cos(angle);
        const topPct = 50 + (R / size) * 100 * Math.sin(angle);
        return (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            className="absolute"
            style={{ left: `${leftPct}%`, top: `${topPct}%`, transform: "translate(-50%, -50%)" }}
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full glass-panel border border-primary/40 flex items-center justify-center shadow-[0_8px_20px_-8px_hsla(170,100%,43%,0.45)] backdrop-blur-md">
              <s.Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" strokeWidth={1.5} />
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[11px] sm:text-xs text-foreground/85 text-center whitespace-nowrap">
                {s.label}
              </span>
            </div>
          </motion.div>
        );
      })}
      <p className="absolute -bottom-8 left-0 right-0 text-center text-xs text-muted-foreground">
        ↻ Continuous lifecycle — Reactivation flows back to Marketing
      </p>
    </div>
  );
};

/* ---------- Section 6: Progressive reveal — glassmorphism premium ---------- */
const ProgressiveReveal = () => {
  const modules = ["Care", "Connect", "Engage", "Insight", "Core"];
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      {[
        { stage: 1, title: "Start with Borna Care", activeOnly: true },
        { stage: 2, title: "Expand seamlessly over time", activeOnly: false },
      ].map((card) => (
        <motion.div
          key={card.stage}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsla(170,100%,43%,0.10),transparent_60%)] pointer-events-none" />
          <div className="relative">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Stage {card.stage}</p>
            <svg viewBox="0 0 240 200" className="w-full h-56 sm:h-72 mx-auto">
              <defs>
                <radialGradient id={`reveal-glow-${card.stage}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00DEC4" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#00DEC4" stopOpacity="0" />
                </radialGradient>
                <radialGradient id={`node-glass-${card.stage}`} cx="30%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="hsla(170,100%,70%,0.55)" />
                  <stop offset="100%" stopColor="hsla(170,100%,43%,0.15)" />
                </radialGradient>
              </defs>
              <circle cx="120" cy="100" r="50" fill={`url(#reveal-glow-${card.stage})`} />
              {modules.map((_, i) => {
                const angle = (i / modules.length) * Math.PI * 2 - Math.PI / 2;
                const x = 120 + 72 * Math.cos(angle);
                const y = 100 + 72 * Math.sin(angle);
                const isCare = i === 0;
                const active = card.activeOnly ? isCare : true;
                return (
                  <g key={i}>
                    <line x1="120" y1="100" x2={x} y2={y}
                      stroke="#00DEC4" strokeOpacity={active ? 0.5 : 0.1} strokeWidth="1" />
                    <circle cx={x} cy={y} r={isCare ? 16 : 13}
                      fill={active ? `url(#node-glass-${card.stage})` : "hsla(0,0%,100%,0.04)"}
                      stroke={active ? "#00DEC4" : "hsla(0,0%,100%,0.15)"}
                      strokeWidth={active ? 1.2 : 1}
                      style={active ? { filter: "drop-shadow(0 4px 8px hsla(170,100%,43%,0.4))" } : undefined}
                    />
                    <text x={x} y={y + 3} textAnchor="middle" fontSize="8"
                      fill={active ? "hsl(226 60% 12%)" : "hsla(0,0%,100%,0.4)"}
                      fontWeight={isCare ? 700 : 500}>
                      {modules[i]}
                    </text>
                  </g>
                );
              })}
              <motion.circle
                cx="120" cy="100" r="6" fill="hsl(170 100% 43%)"
                animate={{ r: [6, 8, 6], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
            <p className="text-sm sm:text-base font-medium text-foreground text-center mt-4">{card.title}</p>
            {card.activeOnly && (
              <div className="flex justify-center mt-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Available now
                </span>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

/* ---------- Page ---------- */
const EcosystemPage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Healthcare Ecosystem Platform | AI Patient Engagement, CRM & Automation | Borna AI</title>
        <meta
          name="description"
          content="Explore Borna's healthcare ecosystem — an AI-powered platform connecting patient communication, CRM, analytics, and automation into one unified system for practice growth."
        />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Healthcare Ecosystem Platform | Borna AI",
          description: "Unified healthcare ecosystem connecting CRM, communication, analytics, and AI automation.",
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Borna AI Ecosystem",
          applicationCategory: "HealthApplication",
          operatingSystem: "Web, iOS, Android",
          description: "AI-powered healthcare ecosystem platform for patient engagement, CRM, communication, and automation.",
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Borna AI",
          url: "https://borna.ai",
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is a healthcare ecosystem platform?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A healthcare ecosystem platform integrates communication, CRM, analytics, and operational systems into one connected environment.",
              },
            },
            {
              "@type": "Question",
              name: "How does Borna AI unify healthcare systems?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Borna AI connects patient communication, CRM, EHR integrations, and analytics into a unified platform powered by AI.",
              },
            },
            {
              "@type": "Question",
              name: "Why is a unified healthcare system important?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Unified systems eliminate data silos, improve patient engagement, and enable better decision-making through integrated insights.",
              },
            },
          ],
        })}</script>
      </Helmet>

      {/* SECTION 1 — Hero */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsla(170,100%,43%,0.12),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block glass-panel px-3 py-1 text-xs font-medium text-primary mb-5 uppercase tracking-wider">
                Healthcare Ecosystem
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-medium tracking-tight leading-[1.15] text-foreground mb-5">
                A unified healthcare ecosystem powered by <span className="gradient-text">AI</span>
              </h1>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4 max-w-xl">
                Borna AI is a unified healthcare ecosystem that connects patient communication, CRM, analytics,
                and automation into one intelligent platform.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-7 max-w-xl">
                Unlike traditional healthcare software, Borna brings every system together — giving practices
                full visibility across the entire patient journey.
              </p>
              <div className="flex flex-row items-center gap-2 sm:gap-3">
                <Link to="/demo" className="gradient-btn text-sm sm:text-base px-4 sm:px-7 py-2.5 sm:py-3 whitespace-nowrap">Book a demo</Link>
                <Link to="/platform" className="ghost-btn text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3 whitespace-nowrap">
                  Explore platform <ArrowRight className="inline w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <EcosystemGlobe />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Definition */}
      <section className="py-12 md:py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-headline text-foreground mb-4">What is a healthcare ecosystem platform?</h2>
            <p className="body-text mb-6">
              A healthcare ecosystem platform integrates multiple systems — such as patient communication,
              electronic health records (EHR), CRM, and analytics — into a single connected environment.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-left max-w-xl mx-auto text-sm text-foreground/85 mb-6">
              {["Centralize patient data", "Automate workflows", "Improve coordination across teams", "Make data-driven decisions"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">
              According to the National Institutes of Health, integrated digital systems are essential for
              improving efficiency and outcomes in modern healthcare environments.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <BeforeAfter />
          </div>
        </div>
      </section>

      {/* SECTION 3 — Layered architecture */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-headline text-foreground mb-4">How the Borna ecosystem works</h2>
            <p className="body-text">
              Borna is designed as a multi-layered system where each component works together seamlessly.
              Every layer is connected to the same intelligent core.
            </p>
          </div>
          <LayeredArchitecture />

          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
            {[
              {
                Icon: Radio,
                title: "Communication layer — Patient communication software",
                body: "All communication channels are unified — calls, SMS, email, chat, and video — ensuring no missed interactions and consistent patient engagement across every touchpoint.",
              },
              {
                Icon: Users,
                title: "CRM & lifecycle layer — Healthcare CRM",
                body: "Borna tracks every patient from Lead → Appointment → Treatment → Retention, allowing practices to manage both active patients and new leads with precision.",
              },
              {
                Icon: Database,
                title: "Data & integration layer — Healthcare data platform",
                body: "Borna integrates with PMS/EHR systems, marketing channels, and payment systems — creating a unified data layer that flows seamlessly across the entire practice.",
              },
              {
                Icon: Network,
                title: "AI intelligence layer — AI healthcare platform",
                body: "Borna's AI engine analyzes communication patterns, patient behavior, and operational workflows to deliver insights, predictions, and automated actions.",
              },
            ].map((b) => (
              <div key={b.title} className="flex gap-4">
                <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <b.Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-medium text-foreground mb-1.5">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Patient journey */}
      <section className="py-12 md:py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-headline text-foreground mb-4">
              Track the entire patient journey — from first contact to revenue
            </h2>
            <p className="body-text mb-6">
              Borna enables practices to follow every patient from their first marketing interaction through
              appointment booking, treatment, payment, and long-term retention.
            </p>
            <ul className="grid sm:grid-cols-3 gap-2 text-left max-w-2xl mx-auto text-sm text-foreground/85 mb-6">
              {["Accurate ROI tracking from marketing to revenue", "Better patient experience at every touchpoint", "Improved operational efficiency"].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
            <Link to="/solutions" className="text-sm text-primary hover:underline">
              Learn how this works in practice →
            </Link>
          </div>
          <div className="max-w-5xl mx-auto">
            <JourneyFlow />
          </div>
        </div>
      </section>

      {/* SECTION 5 — Dual experience */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-headline text-foreground mb-4">A connected experience for patients and practices</h2>
            <p className="body-text">
              Borna delivers two synchronized environments — one for patients, one for the practice — both
              operating in real time through the same platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
            {/* Patient */}
            <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-card/40 to-card/10 p-6 sm:p-8 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-5">
                <Smartphone className="w-4 h-4 text-primary" strokeWidth={1.75} />
                <p className="text-xs uppercase tracking-wider text-primary">Patient experience</p>
              </div>
              <div className="space-y-3">
                {[
                  { Icon: Calendar, label: "Online booking", desc: "Self-serve scheduling, anytime" },
                  { Icon: Layers, label: "Digital forms", desc: "Pre-visit intake, fully paperless" },
                  { Icon: CreditCard, label: "Secure payments", desc: "Card-on-file & instant receipts" },
                  { Icon: MessageSquare, label: "Patient communication", desc: "SMS, email & chat in one thread" },
                ].map(({ Icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/60 p-3 hover:border-primary/40 transition-colors">
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sync indicator */}
            <div className="flex lg:flex-col items-center justify-center gap-3">
              <div className="relative flex lg:flex-col items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute w-10 h-10 rounded-full bg-primary/30"
                />
                <div className="relative w-10 h-10 rounded-full bg-primary/15 border border-primary/50 flex items-center justify-center backdrop-blur-md">
                  <RefreshCw className="w-4 h-4 text-primary" strokeWidth={2} />
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-primary whitespace-nowrap">Real-time sync</span>
              <div className="relative w-16 lg:w-px h-px lg:h-24 bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-primary/60 to-transparent overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "100%"], y: ["0%", "0%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                  className="lg:hidden absolute inset-y-0 w-1/3 bg-primary"
                />
                <motion.div
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                  className="hidden lg:block absolute inset-x-0 h-1/3 bg-primary"
                />
              </div>
            </div>

            {/* Practice */}
            <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-card/40 to-card/10 p-6 sm:p-8 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-5">
                <Cpu className="w-4 h-4 text-primary" strokeWidth={1.75} />
                <p className="text-xs uppercase tracking-wider text-primary">Practice experience</p>
              </div>
              <div className="space-y-3">
                {[
                  { Icon: Calendar, label: "Scheduling", desc: "Smart calendar with auto-fill gaps" },
                  { Icon: Users, label: "CRM management", desc: "Full patient lifecycle tracking" },
                  { Icon: Network, label: "Workflow automation", desc: "Triggered tasks across channels" },
                  { Icon: BarChart3, label: "Analytics", desc: "Live KPIs from acquisition to revenue" },
                ].map(({ Icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/60 p-3 hover:border-primary/40 transition-colors">
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Entry point */}
      <section className="py-12 md:py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-headline text-foreground mb-4">
              Start with Borna Care. Expand into the full ecosystem.
            </h2>
            <p className="body-text mb-4">
              Borna Care is the first live component of the ecosystem, providing immediate value in patient
              engagement, scheduling, digital forms, and payments.
            </p>
            <p className="body-text mb-6">
              As additional modules are released, they integrate seamlessly into the same ecosystem — same
              data layer, no disruption, no migration headaches.
            </p>
            <Link to="/products/care" className="text-sm text-primary hover:underline">
              Explore Borna Care →
            </Link>
          </div>
          <div className="max-w-4xl mx-auto">
            <ProgressiveReveal />
          </div>
        </div>
      </section>

      {/* SECTION 7 — Differentiation */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-headline text-foreground mb-4">
              Why a unified healthcare ecosystem outperforms disconnected tools
            </h2>
            <p className="body-text">
              Traditional systems create data silos, operational inefficiencies, and missed patient
              opportunities. Borna eliminates these issues by creating a fully connected system where data
              flows seamlessly, communication is centralized, and insights are actionable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {[
              { Icon: Network, title: "Seamless data flow", body: "Every interaction, across every channel, feeds into one centralized data layer — no silos, no gaps." },
              { Icon: MessageSquare, title: "Centralized communication", body: "Calls, messages, emails, and video — all captured and managed in one place, with full patient context." },
              { Icon: Sparkles, title: "Actionable intelligence", body: "AI surfaces the insights that matter — from patient behavior patterns to revenue opportunities — at the right moment." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border/60 bg-card/40 p-6">
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <c.Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-medium text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          {/* comparison strip */}
          <div className="max-w-3xl mx-auto rounded-2xl border border-border/60 bg-card/40 overflow-hidden">
            <div className="grid grid-cols-3 text-xs uppercase tracking-wider text-muted-foreground border-b border-border/60">
              <div className="px-4 py-3" />
              <div className="px-4 py-3 text-left">Traditional tools</div>
              <div className="px-4 py-3 text-left text-primary">Borna ecosystem</div>
            </div>
            {[
              ["Data", "Fragmented", "Centralized"],
              ["Communication", "Multiple systems", "Unified"],
              ["Insights", "Limited", "AI-driven"],
              ["Workflows", "Manual", "Automated"],
            ].map(([k, a, b]) => (
              <div key={k} className="grid grid-cols-3 text-sm border-b border-border/40 last:border-0">
                <div className="px-4 py-3 text-foreground/85 font-medium">{k}</div>
                <div className="px-4 py-3 text-left text-muted-foreground flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 shrink-0" /> <span>{a}</span>
                </div>
                <div className="px-4 py-3 text-left text-primary flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> <span>{b}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — Final CTA */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(170,100%,43%,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative text-center">
          <h2 className="section-headline text-foreground mb-4">
            Move from fragmented tools to a connected ecosystem.
          </h2>
          <p className="body-text mx-auto mb-8 max-w-2xl">
            Borna AI helps healthcare practices unify their systems, improve patient engagement, and scale
            efficiently — starting with a single product and growing into a complete AI-powered ecosystem.
          </p>
          <div className="cta-row">
            <Link to="/demo" className="gradient-btn text-sm sm:text-base px-4 sm:px-7 py-2.5 sm:py-3 whitespace-nowrap">Book a demo</Link>
            <Link to="/platform" className="ghost-btn text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3 whitespace-nowrap">
              Explore platform <ArrowRight className="inline w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default EcosystemPage;
