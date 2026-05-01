import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  CalendarDays, FileHeart, MessageSquare, CreditCard, BarChart3,
  Plug, RefreshCw, Database, Sparkles, ArrowRight, Shield, KeyRound,
  CheckCircle2, Network, Layers, Zap, Eye, Brain, Link2, Activity,
  Code, Users, TrendingUp, Lock as LockIcon, ChevronDown, ChevronUp
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import StandardFAQ from "@/components/sections/StandardFAQ";
import KeyTakeaways from "@/components/sections/KeyTakeaways";
import { cn } from "@/lib/utils";
import DataStreamVisual from "@/components/ui/data-stream-visual";

/* ─── helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const } }),
};

const SectionWrap = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={cn("relative py-20 md:py-28 overflow-hidden", className)}>
    <div className="container mx-auto px-4 md:px-6">{children}</div>
  </section>
);

/* ─── Hub Spoke Diagram (Hero) ─── */
const hubNodes = [
  { label: "PMS", icon: CalendarDays, angle: -90 },
  { label: "EHR", icon: FileHeart, angle: -18 },
  { label: "Communication", icon: MessageSquare, angle: 54 },
  { label: "Payments", icon: CreditCard, angle: 126 },
  { label: "Marketing", icon: BarChart3, angle: 198 },
];

const HubSpokeDiagram = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [time, setTime] = useState(0);
  const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReduced) return;
    let raf: number;
    const tick = () => { setTime(t => t + 0.016); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [prefersReduced]);

  const cx = 250, cy = 250, orbitR = 150, nodeR = 46;
  const rotationOffset = prefersReduced ? 0 : (time / 35) * 360;

  return (
    <svg ref={svgRef} viewBox="0 0 500 500" className="w-full max-w-[460px] mx-auto" aria-label="Hub and spoke integration diagram showing Borna AI connected to PMS, EHR, Communication, Payments, and Marketing systems">
      <defs>
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(170 100% 43%)" stopOpacity="0.4" />
          <stop offset="50%" stopColor="hsl(170 100% 43%)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="hsl(170 100% 43%)" stopOpacity="0" />
        </radialGradient>
        <filter id="glowF"><feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>

      {[1, 2].map(i => (
        <circle key={i} cx={cx} cy={cy} r={55} fill="none" stroke="hsl(170 100% 43%)" strokeWidth="1" opacity={0}>
          {!prefersReduced && (
            <>
              <animate attributeName="r" from="55" to="110" dur="3s" begin={`${i * 1.5}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.5" to="0" dur="3s" begin={`${i * 1.5}s`} repeatCount="indefinite" />
            </>
          )}
        </circle>
      ))}

      <circle cx={cx} cy={cy} r={100} fill="url(#hubGlow)" />
      <circle cx={cx} cy={cy} r={68} fill="hsl(170 100% 43% / 0.18)" stroke="hsl(170 100% 43%)" strokeWidth="2" filter="url(#glowF)" />
      <text x={cx} y={cy - 6} textAnchor="middle" fill="hsl(170 100% 43%)" fontSize="16" fontWeight="700">Borna AI</text>
      <text x={cx} y={cy + 12} textAnchor="middle" fill="hsl(170 100% 60%)" fontSize="11" fontWeight="500" opacity="0.9">Integration Hub</text>

      {hubNodes.map((node, i) => {
        const a = ((node.angle + rotationOffset) * Math.PI) / 180;
        const nx = cx + Math.cos(a) * orbitR;
        const ny = cy + Math.sin(a) * orbitR;

        const p1 = prefersReduced ? 0.5 : ((time * 0.4 + i * 0.3) % 1);
        const p2 = prefersReduced ? 0.5 : (1 - ((time * 0.35 + i * 0.5) % 1));

        return (
          <g key={node.label}>
            <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="hsl(170 100% 43% / 0.3)" strokeWidth="1" />
            {!prefersReduced && (
              <>
                <circle cx={cx + (nx - cx) * p1} cy={cy + (ny - cy) * p1} r="2.5" fill="hsl(170 100% 60%)" opacity="0.8" />
                <circle cx={cx + (nx - cx) * p2} cy={cy + (ny - cy) * p2} r="2" fill="hsl(170 100% 80%)" opacity="0.6" />
              </>
            )}
            <circle cx={nx} cy={ny} r={nodeR} fill="hsl(226 60% 12% / 0.9)" stroke="hsl(170 100% 43% / 0.5)" strokeWidth="1.2" />
            <text x={nx} y={ny + 4} textAnchor="middle" fill="hsl(210 40% 92%)" fontSize="10" fontWeight="500">{node.label}</text>
          </g>
        );
      })}
    </svg>
  );
};

/* ─── Broken Network (Section 3) ─── */
const BrokenNetwork = () => {
  const nodes = [
    { label: "PMS", x: 80, y: 55 }, { label: "EHR", x: 230, y: 45 },
    { label: "Billing", x: 320, y: 100 }, { label: "Comms", x: 70, y: 160 },
    { label: "Marketing", x: 200, y: 175 }, { label: "Analytics", x: 310, y: 165 },
  ];
  const brokenLinks: [number, number][] = [
    [0, 1], [1, 2], [3, 4], [4, 5], [0, 3]
  ];
  return (
    <svg viewBox="0 0 400 240" className="w-full max-w-lg mx-auto" aria-hidden="true">
      <defs>
        <filter id="broken-glow"><feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <radialGradient id="x-pulse-grad"><stop offset="0%" stopColor="hsl(0 70% 55%)" stopOpacity="0.35" /><stop offset="100%" stopColor="hsl(0 70% 55%)" stopOpacity="0" /></radialGradient>
      </defs>
      {brokenLinks.map(([a, b], i) => {
        const mx = (nodes[a].x + nodes[b].x) / 2;
        const my = (nodes[a].y + nodes[b].y) / 2;
        return (
          <g key={i}>
            <line x1={nodes[a].x} y1={nodes[a].y} x2={mx - 8} y2={my - 4}
              stroke="hsl(0 0% 55% / 0.5)" strokeWidth="1.5" strokeDasharray="5 4">
              <animate attributeName="stroke-dashoffset" from="0" to="9" dur="3s" repeatCount="indefinite" />
            </line>
            <line x1={mx + 8} y1={my + 4} x2={nodes[b].x} y2={nodes[b].y}
              stroke="hsl(0 0% 55% / 0.5)" strokeWidth="1.5" strokeDasharray="5 4">
              <animate attributeName="stroke-dashoffset" from="0" to="9" dur="3s" repeatCount="indefinite" />
            </line>
            {/* Cross with pulse glow */}
            <g filter="url(#broken-glow)">
              <circle cx={mx} cy={my} r="12" fill="url(#x-pulse-grad)">
                <animate attributeName="r" values="10;15;10" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x={mx} y={my + 5} textAnchor="middle" fill="hsl(0 65% 60%)" fontSize="16" fontWeight="bold">✕</text>
            </g>
          </g>
        );
      })}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="34" fill="hsl(226 60% 14% / 0.7)" stroke="hsl(0 0% 45% / 0.35)" strokeWidth="1.2">
            <animate attributeName="opacity" values="0.6;0.4;0.6" dur="4s" repeatCount="indefinite" />
          </circle>
          <text x={n.x} y={n.y + 4} textAnchor="middle" fill="hsl(0 0% 68%)" fontSize="9" fontWeight="500">{n.label}</text>
        </g>
      ))}
    </svg>
  );
};

/* ─── Bidirectional Flow Network (Section 7) ─── */
const BiFlowNetwork = () => {
  const [time, setTime] = useState(0);
  const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  useEffect(() => {
    if (prefersReduced) return;
    let raf: number;
    const tick = () => { setTime(t => t + 0.016); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [prefersReduced]);

  const cx = 200, cy = 120;
  const nodes = [
    { label: "PMS", x: 60, y: 60 }, { label: "EHR", x: 340, y: 60 },
    { label: "Comms", x: 60, y: 180 }, { label: "Payments", x: 340, y: 180 },
  ];

  return (
    <svg viewBox="0 0 400 240" className="w-full max-w-lg mx-auto" aria-label="Bidirectional data flow between Borna and connected systems">
      <defs><filter id="biGlow"><feGaussianBlur stdDeviation="2" /></filter></defs>
      {nodes.map((n, i) => {
        const p1 = prefersReduced ? 0.5 : ((time * 0.4 + i * 0.25) % 1);
        const p2 = prefersReduced ? 0.5 : (1 - ((time * 0.35 + i * 0.4) % 1));
        return (
          <g key={i}>
            <line x1={cx} y1={cy} x2={n.x} y2={n.y} stroke="hsl(170 100% 43% / 0.3)" strokeWidth="1" />
            {!prefersReduced && (
              <>
                <circle cx={cx + (n.x - cx) * p1} cy={cy + (n.y - cy) * p1} r="2.5" fill="hsl(170 100% 60%)" opacity="0.7" />
                <circle cx={cx + (n.x - cx) * p2} cy={cy + (n.y - cy) * p2} r="2" fill="hsl(170 100% 80%)" opacity="0.5" />
              </>
            )}
            <circle cx={n.x} cy={n.y} r="24" fill="hsl(226 60% 14% / 0.9)" stroke="hsl(170 100% 43% / 0.4)" strokeWidth="1" />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fill="hsl(210 40% 92%)" fontSize="9">{n.label}</text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="30" fill="hsl(170 100% 43% / 0.1)" stroke="hsl(170 100% 43%)" strokeWidth="1.5" />
      <text x={cx} y={cy + 4} textAnchor="middle" fill="hsl(170 100% 43%)" fontSize="10" fontWeight="600">Borna</text>
    </svg>
  );
};

/* ─── FAQ Accordion ─── */
const faqItems = [
  { q: "What are healthcare software integrations?", a: "Healthcare software integrations connect different systems — such as PMS, EHR, communication tools, and analytics platforms — so they can share data and work together seamlessly, eliminating manual data transfer and information silos." },
  { q: "Why are integrations important in healthcare?", a: "Integrations reduce manual work, eliminate data silos, improve operational efficiency, and enable better decision-making by giving practices a complete, unified view of their patient data and business performance." },
  { q: "Does Borna support API integrations?", a: "Yes. Borna is built on an API-driven architecture that supports custom integrations, partner ecosystem connectivity, and scalable system connections — so practices are not limited to a predefined list of integrations." },
  { q: "Which systems does Borna integrate with?", a: "Borna integrates with Practice Management Systems (PMS), Electronic Health Records (EHR), communication platforms (calls, SMS, email, chat), payment systems, and marketing tools including Google Ads and other lead-tracking platforms." },
  { q: "Is data transferred between systems secure?", a: "Yes. Borna's integration framework uses secure data transmission channels, role-based access controls, and compliance considerations appropriate for healthcare data environments — ensuring that data exchanged between systems is always protected." },
];

const FAQItem = ({ item }: { item: typeof faqItems[0] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-glass-border rounded-xl overflow-hidden backdrop-blur-md bg-glass-bg">
      <button onClick={() => setOpen(!open)} aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-5 text-left text-foreground font-medium text-sm md:text-base hover:bg-white/[0.03] transition-colors">
        {item.q}
        {open ? <ChevronUp className="w-4 h-4 text-primary shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            <p className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── MAIN PAGE ─── */
const IntegrationsPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const integrationCategories = [
    { icon: CalendarDays, badge: "PMS", title: "Practice Management System Integrations", body: "Sync patient data, manage scheduling, and track production and collection — directly connected to your existing PMS.", link: null },
    { icon: FileHeart, badge: "EHR", title: "Electronic Health Record Integrations", body: "Access clinical data, support care workflows, and maintain continuity between Borna and your EHR system.", link: null },
    { icon: MessageSquare, badge: "Communication", title: "Communication Platform Integrations", body: "Borna Connect unifies calls, SMS, email, and chat — all integrated into one centralized communication stream.", link: { text: "Explore Borna Connect →", href: "/products/borna-connect" } },
    { icon: CreditCard, badge: "Payments", title: "Payment System Integrations", body: "Enable secure online payments, billing integration, and full financial tracking — connected directly to the platform.", link: null },
    { icon: BarChart3, badge: "Marketing", title: "Marketing Platform Integrations", body: "Connect marketing channels to track leads, measure ROI, and optimize patient acquisition — with data flowing back into the platform.", link: null },
  ];

  const steps = [
    { icon: Plug, title: "Connect", desc: "Connect external systems to the Borna platform" },
    { icon: RefreshCw, title: "Synchronize", desc: "Data synchronizes in real time across all connected systems" },
    { icon: Database, title: "Centralize", desc: "All information centralizes in one unified patient record" },
    { icon: Sparkles, title: "Enable", desc: "Insights and automation become possible across the full data set" },
  ];

  const businessCards = [
    { icon: Zap, title: "Eliminate Manual Work", body: "Data entered once flows automatically across all connected systems — no re-entry, no transcription errors." },
    { icon: TrendingUp, title: "Improve Practice Efficiency", body: "Staff spend less time managing disconnected tools and more time on patient care and high-value practice activities." },
    { icon: Eye, title: "Eliminate Data Silos", body: "Every system contributes to one complete patient record — giving the practice full visibility across the entire patient lifecycle." },
    { icon: Brain, title: "Enhance Decision-Making", body: "Unified data enables AI-powered insights — from marketing ROI to patient behavior patterns — that isolated systems could never surface." },
  ];

  const takeawayItems = [
    { icon: Plug, text: "Borna integrates with PMS, EHR, communication, payment, and marketing systems" },
    { icon: RefreshCw, text: "Data flows seamlessly and in real time across all connected platforms" },
    { icon: Code, text: "API-driven architecture enables custom and scalable integrations" },
    { icon: Brain, text: "Unified data powers AI insights, automation, and complete patient visibility" },
  ];

  const jsonLd = [
    { "@context": "https://schema.org", "@type": "WebPage", name: "Borna AI Integrations", description: "Healthcare software integrations for PMS, EHR, communication, and analytics." },
    { "@context": "https://schema.org", "@type": "TechArticle", headline: "Healthcare Software Integrations", description: "Overview of Borna AI integration architecture and connectivity." },
    { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Borna AI Platform", applicationCategory: "HealthApplication", description: "Healthcare platform with integrated systems and API connectivity." },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://borna.ai" },
      { "@type": "ListItem", position: 2, name: "Platform", item: "https://borna.ai/platform" },
      { "@type": "ListItem", position: 3, name: "Integrations", item: "https://borna.ai/platform/integrations" },
    ]},
  ];

  return (
    <PageWrapper>
      <Helmet>
        <title>Healthcare Software Integrations | PMS, EHR & API Connectivity | Borna AI</title>
        <meta name="description" content="Borna AI integrates with PMS, EHR, communication tools, and marketing platforms to unify healthcare operations, data, and patient engagement in one system." />
        <link rel="canonical" href="https://borna.ai/platform/integrations" />
        {jsonLd.map((ld, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(ld)}</script>
        ))}
      </Helmet>

      <div className="container mx-auto px-4 md:px-6 pt-24 pb-0">
        <nav aria-label="breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2 opacity-50">/</span>
          <Link to="/platform" className="hover:text-foreground transition-colors">Platform</Link>
          <span className="mx-2 opacity-50">/</span>
          <span className="text-primary font-medium">Integrations</span>
        </nav>
      </div>

      <section ref={heroRef} className="relative pt-8 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={fadeUp}>
              <span className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">Platform Integrations</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
                Healthcare software integrations for a unified platform
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Borna AI integrates with leading healthcare systems, communication tools, and business platforms to create a unified ecosystem for patient engagement, operations, and analytics.
              </p>
              <div className="cta-row flex-wrap">
                <Link to="/platform" className="ghost-btn text-sm whitespace-nowrap px-4 sm:px-6 py-2.5 sm:py-3">
                  Explore Platform →
                </Link>
                <Link to="/contact" className="gradient-btn text-sm whitespace-nowrap px-4 sm:px-6 py-2.5 sm:py-3">
                  Contact Integrations Team
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={heroInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
              <HubSpokeDiagram />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">What are healthcare software integrations?</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Healthcare software integrations connect different systems — such as PMS, EHR, communication tools, and analytics platforms — so they can share data and work together seamlessly. Modern integrations enable real-time data exchange, reduce manual work, and improve operational efficiency across the entire practice.
          </p>
          <div className="flex justify-center gap-10 md:gap-16 mb-8">
            {[{ icon: Link2, label: "Connect Systems" }, { icon: RefreshCw, label: "Share Data" }, { icon: Activity, label: "Real-Time Sync" }].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon className="w-6 h-6 text-primary" />
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </motion.div>
      </SectionWrap>

      <SectionWrap>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">The challenge of disconnected healthcare systems</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most healthcare practices operate with a fragmented stack — separate systems for practice management, clinical records, patient communication, billing, and marketing. These systems were not designed to talk to each other.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The result: data silos, manual re-entry between systems, limited visibility into the full patient journey, and operational inefficiency at every level.
            </p>
            <p className="text-foreground font-semibold text-sm">The data exists — it's just trapped in the wrong places.</p>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <BrokenNetwork />
        </motion.div>
      </SectionWrap>

      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">A unified integration architecture</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Borna is designed to act as the central integration layer for your practice — connecting external systems, centralizing data into one platform, enabling real-time synchronization, and supporting scalable integrations as your needs evolve.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-md p-8 text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-6">Disconnected Systems</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["PMS", "EHR", "Comms", "Payments"].map(s => (
                <div key={s} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-xs text-muted-foreground/60">{s}</div>
              ))}
            </div>
          </motion.div>
          <div className="flex items-center justify-center my-4 md:hidden">
            <ArrowRight className="w-6 h-6 text-primary" />
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="rounded-2xl border border-primary/20 bg-glass-bg backdrop-blur-md p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/[0.03]" />
            <p className="text-xs text-primary uppercase tracking-wider mb-6 relative z-10">Unified Through Borna</p>
            <div className="relative z-10 flex flex-wrap justify-center gap-4">
              {["PMS", "EHR", "Comms", "Payments"].map(s => (
                <div key={s} className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center text-xs text-foreground">{s}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrap>

      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Types of integrations supported by Borna AI</h2>
          <p className="text-muted-foreground">Five integration categories — each addressing a critical data connection for modern healthcare practices.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {integrationCategories.map((cat, i) => (
            <motion.div key={cat.badge} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5} variants={fadeUp}
              className={cn(
                "rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-md p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group",
                i >= 3 && "lg:col-span-1 sm:col-span-1"
              )}>
              <span className="inline-block text-[10px] uppercase tracking-wider font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-4">{cat.badge}</span>
              <cat.icon className="w-8 h-8 text-primary/70 mb-3 group-hover:text-primary transition-colors" />
              <h3 className="text-foreground font-semibold text-sm mb-2">{cat.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{cat.body}</p>
              {cat.link && (
                <Link to={cat.link.href} className="inline-block mt-3 text-xs text-primary hover:underline">{cat.link.text}</Link>
              )}
            </motion.div>
          ))}
        </div>
      </SectionWrap>

      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How Borna integrations work</h2>
          <p className="text-muted-foreground">A four-step process — from connecting your existing systems to unlocking data-driven automation.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div key={step.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5} variants={fadeUp}
              className="text-center">
              <div className="text-primary font-bold text-lg mb-2">{i + 1}</div>
              <div className="w-16 h-16 mx-auto rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-md flex items-center justify-center mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-sm mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
              {i < 3 && <ArrowRight className="w-4 h-4 text-primary/40 mx-auto mt-4 hidden lg:block" />}
            </motion.div>
          ))}
        </div>
      </SectionWrap>

      <SectionWrap>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Real-time data flow across systems</h2>
            <p className="text-muted-foreground leading-relaxed">
              Borna ensures that data is always current across every connected system — no stale records, no manual re-entry, no gaps in the patient record.
            </p>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <BiFlowNetwork />
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto mt-12">
          {[
            { icon: RefreshCw, title: "Seamless Data Exchange", desc: "Borna sends and receives data from connected systems — no one-way locks." },
            { icon: Users, title: "Unified Patient Records", desc: "Every interaction across every system contributes to one comprehensive patient record." },
            { icon: CheckCircle2, title: "Consistent Information", desc: "The same accurate data is always available across every system — no conflicting records." },
          ].map((item, i) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5} variants={fadeUp} className="text-center">
              <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="text-foreground font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrap>

      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">API-driven integration and extensibility</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Borna's integration framework is built on an API-driven architecture — enabling custom integrations, partner ecosystem expansion, and scalable connectivity as your practice's needs evolve.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          {[
            { icon: Code, title: "Custom Integrations", desc: "Connect any system through Borna's API layer — not limited to pre-built connectors." },
            { icon: Network, title: "Partner Ecosystem Expansion", desc: "As Borna grows, new integration partnerships expand the available connectivity options." },
            { icon: Layers, title: "Scalable Connectivity", desc: "The API architecture scales with your practice — from single location to multi-site enterprise." },
          ].map((item, i) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5} variants={fadeUp} className="text-center">
              <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="text-foreground font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <DataStreamVisual className="max-w-2xl mx-auto" />
      </SectionWrap>

      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Secure and compliant data integration</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Every data exchange between Borna and connected systems occurs through secure transmission channels, with controlled access mechanisms and compliance considerations appropriate for healthcare environments.
          </p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-3xl mx-auto rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-md p-8">
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Secure Data Transmission", desc: "All data exchanged between systems uses secure transmission channels." },
              { icon: KeyRound, title: "Controlled Access", desc: "Role-based access ensures only authorized users and systems can read or write data." },
              { icon: CheckCircle2, title: "Healthcare Compliance", desc: "Built with awareness of data handling requirements specific to healthcare environments." },
            ].map(item => (
              <div key={item.title} className="text-center">
                <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <h3 className="text-foreground font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="flex justify-center mt-10">
          <svg viewBox="0 0 400 60" className="w-full max-w-md" aria-hidden="true">
            <text x="30" y="35" fill="hsl(210 40% 70%)" fontSize="9" textAnchor="middle">External</text>
            <line x1="60" y1="30" x2="170" y2="30" stroke="hsl(170 100% 43% / 0.3)" strokeWidth="1" />
            <rect x="170" y="15" width="60" height="30" rx="6" fill="hsl(170 100% 43% / 0.06)" stroke="hsl(170 100% 43% / 0.25)" strokeWidth="1">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
            </rect>
            <text x="200" y="34" textAnchor="middle" fill="hsl(170 100% 43%)" fontSize="10">🔒</text>
            <line x1="230" y1="30" x2="340" y2="30" stroke="hsl(170 100% 43% / 0.3)" strokeWidth="1" />
            <text x="370" y="35" fill="hsl(170 100% 43%)" fontSize="9" textAnchor="middle">Borna</text>
          </svg>
        </div>
      </SectionWrap>

      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Integrations power the Borna platform</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
            Every integration in Borna flows into the same platform layer — feeding the same AI engine, populating the same patient records, and enabling the same analytics and automation capabilities.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/platform/architecture" className="text-sm text-primary hover:underline">Learn about the architecture →</Link>
            <Link to="/ecosystem" className="text-sm text-primary hover:underline">Explore the full ecosystem →</Link>
          </div>
        </motion.div>
        <p className="text-center text-xs text-muted-foreground mt-4 italic">Integrations feed every layer of the platform.</p>
      </SectionWrap>

      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Why integrations matter for healthcare practices</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            When systems are connected, manual work disappears. When data is unified, decisions improve. When the patient record is complete, every interaction gets smarter.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {businessCards.map((card, i) => (
            <motion.div key={card.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.3} variants={fadeUp}
              className="rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-md p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
              <card.icon className="w-7 h-7 text-primary mb-3" />
              <h3 className="text-foreground font-semibold text-sm mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrap>

      <KeyTakeaways items={takeawayItems} variant="spacious" />

      <StandardFAQ items={faqItems} />

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">Connect your systems. Unlock your data.</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
              Borna AI brings your practice tools together into one unified platform — so data flows freely, teams work efficiently, and insights are always within reach.
            </p>
            <div className="cta-row">
              <Link to="/demo" className="gradient-btn text-sm whitespace-nowrap px-4 sm:px-8 py-2.5 sm:py-3.5">Request Demo</Link>
              <Link to="/contact" className="ghost-btn text-sm whitespace-nowrap px-4 sm:px-8 py-2.5 sm:py-3.5">
                Contact Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default IntegrationsPage;
