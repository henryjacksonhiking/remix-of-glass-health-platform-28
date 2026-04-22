import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Layers,
  Blocks,
  RefreshCw,
  Zap,
  BrainCircuit,
  ArrowRight,
  Phone,
  Mail,
  MessageSquare,
  Video,
  MessageCircle,
  Shield,
  TrendingUp,
  Network,
  Activity,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared animation                                                   */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ------------------------------------------------------------------ */
/*  1. HERO                                                            */
/* ------------------------------------------------------------------ */
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" role="region" aria-label="Architecture hero">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, hsla(170,100%,43%,0.06) 0%, transparent 70%)" }} />
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.p variants={fadeUp} initial="hidden" animate="visible" className="section-eyebrow mb-4">Architecture</motion.p>
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.05 }} className="hero-headline text-foreground mb-5 max-w-3xl mx-auto">
          Borna AI platform architecture and system design
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="body-text mx-auto max-w-2xl mb-4">
          Built on a modular, scalable architecture designed to unify communication, CRM, analytics, and AI automation into one connected healthcare platform.
        </motion.p>
        <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.15 }} className="body-text mx-auto max-w-2xl mb-8">
          Seamless data flow, real-time insights, and intelligent automation across the entire patient lifecycle.
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="flex flex-row items-center justify-center gap-3">
          <button onClick={() => navigate("/platform")} className="gradient-btn text-sm sm:text-base px-5 sm:px-8 py-2.5 sm:py-3.5 whitespace-nowrap">Explore Platform</button>
          <button onClick={() => navigate("/roadmap")} className="ghost-btn text-sm sm:text-base px-5 sm:px-8 py-2.5 sm:py-3.5 whitespace-nowrap">View Roadmap</button>
        </motion.div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  2. DEFINITION                                                      */
/* ------------------------------------------------------------------ */
const DefinitionSection = () => (
  <section className="py-20 md:py-28 overflow-hidden" role="region" aria-label="Definition">
    <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-headline gradient-text mb-6">
        What is a healthcare platform architecture?
      </motion.h2>
      <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="body-text mx-auto mb-4">
        Healthcare platform architecture refers to the underlying system design that connects data, communication, workflows, and applications into a unified structure.
      </motion.p>
      <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.15 }} className="body-text mx-auto">
        A modern architecture ensures scalability, interoperability, and real-time processing across multiple healthcare systems.
      </motion.p>
      <div className="mt-8 mx-auto w-24 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(170 100% 43% / 0.4), transparent)" }} />
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  3. ARCHITECTURAL PRINCIPLES                                        */
/* ------------------------------------------------------------------ */
const principles = [
  { icon: Blocks, title: "Modularity", desc: "Independent but connected subsystems that evolve without friction." },
  { icon: TrendingUp, title: "Scalability", desc: "Supports growth across practices and multi-location networks." },
  { icon: RefreshCw, title: "Interoperability", desc: "Integrates with PMS, EHR, and external healthcare systems." },
  { icon: Zap, title: "Real-time processing", desc: "Immediate data flow and actionable insights, never delayed." },
  { icon: BrainCircuit, title: "AI-driven intelligence", desc: "Continuous learning and automation across the platform." },
];

const PrinciplesSection = () => (
  <section className="py-20 md:py-28 overflow-hidden" role="region" aria-label="Architectural principles">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-headline text-foreground mb-4">
        Core architectural principles
      </motion.h2>
      <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="body-text mx-auto mb-12">
        The foundations that make Borna AI reliable, extensible, and future-ready.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
        {principles.map((p, i) => (
          <motion.div key={p.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="glass-panel-hover p-6 text-center">
            <div className="w-10 h-10 mx-auto mb-4 rounded-xl flex items-center justify-center" style={{ background: "hsla(170,100%,43%,0.1)" }}>
              <p.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-sm font-medium text-foreground mb-2">{p.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  4. SYSTEM OVERVIEW — Hub-and-spoke diagram                         */
/* ------------------------------------------------------------------ */
const systemLayers = [
  { label: "Communication Layer", sub: "Calls · SMS · Email · Chat · Video", color: "hsla(228,80%,42%,0.7)" },
  { label: "Application Layer", sub: "Care · Connect · Engage · Insight", color: "hsla(170,100%,43%,0.7)" },
  { label: "Data Layer", sub: "Patient history · Operational data", color: "hsla(239,84%,67%,0.6)" },
  { label: "AI Layer — Borna Core", sub: "Sentiment · Automation · Prediction", color: "hsla(330,100%,44%,0.6)" },
];

const SystemOverviewSection = () => (
  <section className="py-20 md:py-28 overflow-hidden" role="region" aria-label="System overview">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-14">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-headline text-foreground mb-4">
          High-level architecture overview
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="body-text mx-auto">
          Borna consists of interconnected layers working as one intelligent system.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {systemLayers.map((layer, i) => (
          <motion.div key={layer.label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="glass-panel p-5 md:p-6 flex items-start gap-4 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: layer.color }} />
            <div className="pl-3">
              <h3 className="text-sm font-medium text-foreground mb-1">{layer.label}</h3>
              <p className="text-xs text-muted-foreground">{layer.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-center mt-8">
        <Link to="/ecosystem" className="text-sm text-primary hover:opacity-80 transition-opacity inline-flex items-center gap-1">
          See ecosystem <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </motion.p>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  5. DATA FLOW                                                       */
/* ------------------------------------------------------------------ */
const flowSteps = ["Capture", "Centralize", "Analyze", "Automate", "Feedback"];

const DataFlowSection = () => (
  <section className="py-20 md:py-28 overflow-hidden" role="region" aria-label="Data flow">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-headline text-foreground mb-4">
        How data flows through the platform
      </motion.h2>
      <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="body-text mx-auto mb-14">
        From capture to continuous improvement — every data point is connected.
      </motion.p>

      {/* Flow diagram */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
        {flowSteps.map((step, i) => (
          <motion.div key={step} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 sm:gap-0">
            <div className="relative w-24 h-24 rounded-full flex items-center justify-center"
              style={{ background: "hsla(170,100%,43%,0.08)", border: "1px solid hsla(170,100%,43%,0.2)" }}>
              <span className="text-xs font-medium text-foreground">{step}</span>
              {/* step number */}
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">{i + 1}</span>
            </div>
            {i < flowSteps.length - 1 && (
              <div className="hidden sm:block w-8 h-px mx-1" style={{ background: "linear-gradient(90deg, hsl(170 100% 43% / 0.5), hsl(170 100% 43% / 0.1))" }} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  6. INTEGRATION ARCHITECTURE                                        */
/* ------------------------------------------------------------------ */
const integrations = [
  { label: "PMS", desc: "Practice Management Systems" },
  { label: "EHR", desc: "Electronic Health Records" },
  { label: "Marketing", desc: "Marketing platforms" },
  { label: "Payments", desc: "Payment systems" },
];

const IntegrationSection = () => (
  <section className="py-20 md:py-28 overflow-hidden" role="region" aria-label="Integration architecture">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-headline text-foreground mb-4">
          Integration with healthcare systems
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="body-text mx-auto">
          Full visibility from lead acquisition to patient revenue, powered by deep integrations.
        </motion.p>
      </div>

      <div className="max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {integrations.map((item, i) => (
          <motion.div key={item.label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="glass-panel-hover p-5 text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ background: "hsla(228,80%,42%,0.15)" }}>
              <Network className="w-4 h-4 text-secondary" />
            </div>
            <h3 className="text-sm font-medium text-foreground mb-1">{item.label}</h3>
            <p className="text-[11px] text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  7. COMMUNICATION ARCHITECTURE                                      */
/* ------------------------------------------------------------------ */
const channels = [
  { icon: Phone, label: "Calls" },
  { icon: MessageSquare, label: "SMS" },
  { icon: Mail, label: "Email" },
  { icon: MessageCircle, label: "Chat" },
  { icon: Video, label: "Video" },
];

const CommArchSection = () => (
  <section className="py-20 md:py-28 overflow-hidden" role="region" aria-label="Communication architecture">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-headline text-foreground mb-4">
        Omnichannel communication infrastructure
      </motion.h2>
      <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="body-text mx-auto mb-12">
        Every channel merges into one unified, AI-powered stream.
      </motion.p>

      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-lg mx-auto">
        {channels.map((ch, i) => (
          <motion.div key={ch.label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="glass-panel px-5 py-3 flex items-center gap-2">
            <ch.icon className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">{ch.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Arrow merging into unified */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.5 }} className="mt-8 flex flex-col items-center gap-3">
        <div className="w-px h-8" style={{ background: "linear-gradient(180deg, hsl(170 100% 43% / 0.4), hsl(170 100% 43% / 0.1))" }} />
        <div className="glass-panel px-6 py-3 inline-flex items-center gap-2" style={{ border: "1px solid hsla(170,100%,43%,0.25)" }}>
          <Activity className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Unified Stream</span>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  8. AI ARCHITECTURE                                                 */
/* ------------------------------------------------------------------ */
const aiCapabilities = [
  "Process communication data",
  "Perform sentiment analysis",
  "Generate actionable insights",
  "Automate clinical workflows",
];

const AIArchSection = () => (
  <section className="py-20 md:py-28 overflow-hidden" role="region" aria-label="AI architecture">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-headline text-foreground mb-4">
          AI infrastructure and intelligence layer
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="body-text mx-auto">
          Borna Core AI actively works across every layer of the platform.
        </motion.p>
      </div>

      <div className="max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {aiCapabilities.map((cap, i) => (
          <motion.div key={cap} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="glass-panel p-5 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0" style={{ boxShadow: "0 0 8px hsla(170,100%,43%,0.5)" }} />
            <span className="text-sm text-muted-foreground">{cap}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  9. SCALABILITY                                                     */
/* ------------------------------------------------------------------ */
const scalePoints = [
  "Multi-location practices",
  "High communication volume",
  "Real-time data processing",
  "Future module expansion",
];

const ScalabilitySection = () => (
  <section className="py-20 md:py-28 overflow-hidden" role="region" aria-label="Scalability">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-headline text-foreground mb-4">
        Built for scalability and performance
      </motion.h2>
      <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="body-text mx-auto mb-10">
        Architecture that grows without breaking.
      </motion.p>
      <div className="max-w-md mx-auto space-y-3">
        {scalePoints.map((pt, i) => (
          <motion.div key={pt} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="glass-panel px-5 py-3 flex items-center gap-3">
            <TrendingUp className="w-4 h-4 text-primary shrink-0" />
            <span className="text-sm text-muted-foreground">{pt}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  10. SECURITY                                                       */
/* ------------------------------------------------------------------ */
const SecuritySection = () => (
  <section className="py-20 md:py-28 overflow-hidden" role="region" aria-label="Security">
    <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="glass-panel p-8 md:p-10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, hsla(170,100%,43%,0.04), transparent 60%)" }} />
        <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
        <h2 className="section-headline text-foreground mb-4">Security and data handling</h2>
        <p className="body-text mx-auto mb-6">
          Secure data handling, role-based access control, and compliance considerations for healthcare data — built into every layer.
        </p>
        <Link to="/platform/security" className="text-sm text-primary hover:opacity-80 transition-opacity inline-flex items-center gap-1">
          Learn more about security <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </motion.div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  11. BUSINESS VALUE                                                 */
/* ------------------------------------------------------------------ */
const outcomes = [
  { label: "Improved patient engagement", from: "System insights" },
  { label: "Better operational efficiency", from: "Automation" },
  { label: "Data-driven decisions", from: "Analytics" },
  { label: "Reduced repetitive tasks", from: "AI workflows" },
];

const BusinessValueSection = () => (
  <section className="py-20 md:py-28 overflow-hidden" role="region" aria-label="Business value">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-headline text-foreground mb-4">
        How architecture drives business value
      </motion.h2>
      <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="body-text mx-auto mb-12">
        Technology translates directly into outcomes your practice can measure.
      </motion.p>
      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {outcomes.map((o, i) => (
          <motion.div key={o.label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="glass-panel-hover p-5 text-left">
            <p className="text-[11px] text-primary uppercase tracking-wider mb-1">{o.from}</p>
            <p className="text-sm text-foreground font-medium">{o.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  12. PLATFORM CONNECTION                                            */
/* ------------------------------------------------------------------ */
const PlatformConnectionSection = () => (
  <section className="py-16 md:py-20 overflow-hidden" role="region" aria-label="Platform connection">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-headline gradient-text mb-4">
        Explore the platform built on this architecture
      </motion.h2>
      <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}>
        <Link to="/platform" className="gradient-btn inline-block text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3.5 mt-4">
          Go to Platform
        </Link>
      </motion.p>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  13. KEY TAKEAWAYS                                                  */
/* ------------------------------------------------------------------ */
const takeaways = [
  "Borna uses a modular healthcare platform architecture",
  "Data flows seamlessly across all layers",
  "AI powers insights and automation at every step",
  "Integrations enable full patient lifecycle visibility",
];

const TakeawaysSection = () => (
  <section className="py-20 md:py-28 overflow-hidden" role="region" aria-label="Key takeaways">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-headline text-foreground mb-10">
        Key takeaways
      </motion.h2>
      <div className="max-w-lg mx-auto space-y-4">
        {takeaways.map((t, i) => (
          <motion.div key={t} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3 text-left">
            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" style={{ boxShadow: "0 0 6px hsla(170,100%,43%,0.4)" }} />
            <span className="text-sm text-muted-foreground">{t}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  14. FAQ                                                            */
/* ------------------------------------------------------------------ */
const faqs = [
  { q: "What is healthcare platform architecture?", a: "Healthcare platform architecture is the underlying system design that connects data, communication, workflows, and applications into a unified structure — enabling scalability, interoperability, and real-time processing across healthcare systems." },
  { q: "Why is modular architecture important in healthcare software?", a: "Modular architecture allows each component of the platform to be developed, improved, and scaled independently — without disrupting existing functionality. It means the platform can grow with a practice's needs over time." },
  { q: "How does AI fit into the platform architecture?", a: "AI operates as a dedicated layer within the Borna platform — the Borna Core. It continuously processes communication data, performs sentiment analysis, generates insights, and triggers automated workflows across every connected module." },
  { q: "How does Borna integrate with existing healthcare systems?", a: "Borna integrates with PMS, EHR, marketing platforms, and payment systems through its integration layer — enabling full data flow from external systems into the Borna platform without requiring practices to replace their existing tools." },
  { q: "Is Borna's architecture secure?", a: "Borna is designed with secure data handling practices, access control mechanisms, and compliance considerations appropriate for healthcare environments — including role-based access and structured data boundaries." },
];

const FAQSection = () => (
  <section className="py-20 md:py-28 overflow-hidden" role="region" aria-label="FAQ">
    <div className="container mx-auto px-4 md:px-6 max-w-2xl">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-headline text-foreground mb-10 text-center">
        Frequently asked questions
      </motion.h2>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="glass-panel px-5">
            <AccordionTrigger className="text-sm font-medium text-foreground py-4">{f.q}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground pb-4">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  15. FINAL CTA                                                      */
/* ------------------------------------------------------------------ */
const FinalCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 md:py-28 overflow-hidden" role="region" aria-label="Final CTA">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-headline gradient-text mb-4">
          Build on a strong, scalable foundation
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="body-text mx-auto mb-8">
          Borna AI is designed with a future-ready architecture to support healthcare innovation.
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.15 }}
          className="flex flex-row items-center justify-center gap-3">
          <button onClick={() => navigate("/demo")} className="gradient-btn text-sm sm:text-base px-5 sm:px-8 py-2.5 sm:py-3.5 whitespace-nowrap">Request Demo</button>
          <button onClick={() => navigate("/contact")} className="ghost-btn text-sm sm:text-base px-5 sm:px-8 py-2.5 sm:py-3.5 whitespace-nowrap">Contact Us</button>
        </motion.div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
const ArchitecturePage = () => {
  const schemaWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Borna AI Architecture",
    description: "Healthcare AI platform architecture and system design overview.",
  };
  const schemaTechArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Healthcare AI Platform Architecture",
    description: "Overview of Borna AI system architecture, data flow, and integrations.",
  };
  const schemaSoftware = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Borna AI Platform",
    applicationCategory: "HealthApplication",
    description: "Modular healthcare platform with AI-driven architecture.",
  };
  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://borna.ai" },
      { "@type": "ListItem", position: 2, name: "Platform", item: "https://borna.ai/platform" },
      { "@type": "ListItem", position: 3, name: "Architecture", item: "https://borna.ai/platform/architecture" },
    ],
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>Healthcare AI Platform Architecture | System Design & Integration | Borna AI</title>
        <meta name="description" content="Explore Borna AI's healthcare platform architecture, including system design, integrations, data flow, and AI infrastructure powering communication, CRM, and automation." />
        <link rel="canonical" href="https://borna.ai/platform/architecture" />
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaTechArticle)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaSoftware)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-0">
        <nav aria-label="breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2 opacity-50">/</span>
          <Link to="/platform" className="hover:text-foreground transition-colors">Platform</Link>
          <span className="mx-2 opacity-50">/</span>
          <span className="text-primary font-medium">Architecture</span>
        </nav>
      </div>

      <HeroSection />
      <DefinitionSection />
      <PrinciplesSection />
      <SystemOverviewSection />
      <DataFlowSection />
      <IntegrationSection />
      <CommArchSection />
      <AIArchSection />
      <ScalabilitySection />
      <SecuritySection />
      <BusinessValueSection />
      <PlatformConnectionSection />
      <TakeawaysSection />
      <FAQSection />
      <FinalCTA />
    </PageWrapper>
  );
};

export default ArchitecturePage;
