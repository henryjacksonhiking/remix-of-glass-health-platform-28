import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Database,
  FileText,
  MessageSquare,
  BarChart3,
  CreditCard,
  ArrowRight,
  Layers,
  RefreshCcw,
  Eye,
  CheckCircle2,
  Zap,
  TrendingUp,
  Network,
  Brain,
  Sparkles,
  Code,
  Plus,
  Shield,
  Users,
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ============================================================
   HERO — Multi-Source Data Convergence
   ============================================================ */
const DataConvergenceHero = () => {
  const reduced = useReducedMotion();
  const sources = [
    { label: "PMS Systems", Icon: Database },
    { label: "EHR Systems", Icon: FileText },
    { label: "Communication", Icon: MessageSquare },
    { label: "Marketing", Icon: BarChart3 },
    { label: "Financial", Icon: CreditCard },
  ];
  const hubX = 320, hubY = 140, startX = 50;

  return (
    <div className="relative w-full max-w-[420px] aspect-[4/3] mx-auto">
      <svg viewBox="0 0 400 280" className="w-full h-full" aria-hidden="true">
        <defs>
          <radialGradient id="dataHubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00DEC4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00DEC4" stopOpacity="0" />
          </radialGradient>
          <filter id="dataGlow">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {sources.map((s, i) => {
          const sy = 30 + i * 55;
          return (
            <g key={s.label}>
              <line x1={startX + 30} y1={sy} x2={hubX - 20} y2={hubY} stroke="#00DEC4" strokeWidth={1} strokeOpacity={0.3} />
              <circle cx={startX} cy={sy} r={12} fill="rgba(0,222,196,0.08)" stroke="#00DEC4" strokeWidth={0.8} strokeOpacity={0.5} />
              <text x={startX + 20} y={sy + 4} fill="rgba(255,255,255,0.65)" fontSize={8}>{s.label}</text>
              {!reduced && (
                <circle r={3} fill="#00DEC4" filter="url(#dataGlow)">
                  <animateMotion dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" path={`M${startX + 30},${sy} L${hubX - 20},${hubY}`} />
                  <animate attributeName="opacity" values="0.3;1;0.3" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
                </circle>
              )}
            </g>
          );
        })}

        {/* Hub */}
        <circle cx={hubX} cy={hubY} r={35} fill="url(#dataHubGlow)" />
        <circle cx={hubX} cy={hubY} r={18} fill="rgba(0,222,196,0.15)" stroke="#00DEC4" strokeWidth={1.5}>
          {!reduced && <animate attributeName="r" values="18;20;18" dur="3s" repeatCount="indefinite" />}
        </circle>
        <text x={hubX} y={hubY - 4} textAnchor="middle" fill="white" fontSize={8} fontWeight={600}>Borna AI</text>
        <text x={hubX} y={hubY + 7} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize={6}>Data Core</text>

        {/* Chips */}
        <rect x={hubX - 30} y={hubY - 50} width={60} height={16} rx={8} fill="rgba(0,222,196,0.1)" stroke="#00DEC4" strokeWidth={0.5} strokeOpacity={0.3} />
        <text x={hubX} y={hubY - 39} textAnchor="middle" fill="#00DEC4" fontSize={6}>AI-Ready Data</text>
        <rect x={hubX - 30} y={hubY + 35} width={60} height={16} rx={8} fill="rgba(0,222,196,0.1)" stroke="#00DEC4" strokeWidth={0.5} strokeOpacity={0.3} />
        <text x={hubX} y={hubY + 46} textAnchor="middle" fill="#00DEC4" fontSize={6}>Real-Time Sync</text>
      </svg>
    </div>
  );
};

const Section = ({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) => (
  <section id={id} className={`py-12 md:py-20 ${className}`}>
    <div className="container mx-auto px-4 md:px-6">{children}</div>
  </section>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const DataIntegrationPage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Healthcare Data Platform & Integrations | Interoperability Layer | Borna AI</title>
        <meta name="description" content="Borna AI's Data & Integration Layer connects PMS, EHR, and external systems to unify healthcare data, enable real-time insights, and power AI-driven automation." />
        <link rel="canonical" href="https://borna.ai/ecosystem/data-integration" />
        <script type="application/ld+json">{JSON.stringify([
          { "@context": "https://schema.org", "@type": "WebPage", name: "Healthcare Data and Integration Layer", description: "Borna AI data platform and integration layer for healthcare systems." },
          { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Borna Data & Integration Layer", applicationCategory: "HealthApplication", description: "Healthcare data platform with integration and interoperability capabilities." },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://borna.ai" },
            { "@type": "ListItem", position: 2, name: "Ecosystem", item: "https://borna.ai/ecosystem" },
            { "@type": "ListItem", position: 3, name: "Data & Integration Layer", item: "https://borna.ai/ecosystem/data-integration" },
          ]},
          { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "What is a healthcare data platform?", acceptedAnswer: { "@type": "Answer", text: "A healthcare data platform centralizes and integrates data from multiple sources — PMS, EHR, communication tools, and marketing platforms — into one unified environment." }},
            { "@type": "Question", name: "Why is data integration important in healthcare?", acceptedAnswer: { "@type": "Answer", text: "Data integration eliminates silos that cause inconsistent information, manual re-entry, and operational blind spots." }},
            { "@type": "Question", name: "Does Borna support real-time data integration?", acceptedAnswer: { "@type": "Answer", text: "Yes. Borna enables real-time data synchronization across all connected systems — updates are immediately available without batch delays." }},
            { "@type": "Question", name: "What data sources does the Borna Data Layer connect?", acceptedAnswer: { "@type": "Answer", text: "Borna connects PMS, EHR, communication channels, marketing platforms, and financial and payment systems." }},
            { "@type": "Question", name: "How does the Data Layer enable AI and analytics?", acceptedAnswer: { "@type": "Answer", text: "By centralizing and structuring data from all sources, the Data Layer provides the AI layer with clean, complete data for insights and automation." }},
          ]},
        ])}</script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 pt-20 md:pt-20 pb-0 md:pb-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/ecosystem">Ecosystem</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage className="text-primary">Data & Integration Layer</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* HERO */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-primary text-xs uppercase tracking-widest font-medium">Data & Integration Layer</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              Healthcare data platform and integration layer
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
              The Borna AI Data & Integration Layer connects all systems, data sources, and workflows into one unified platform. By enabling real-time data flow across communication channels, CRM, and healthcare systems, Borna transforms fragmented data into actionable insights.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/platform/integrations" className="text-sm font-medium rounded-lg px-5 py-3 border border-white/[0.18] text-white/85 hover:bg-white/[0.08] transition-all">
                Explore integrations →
              </Link>
              <Link to="/demo" className="gradient-btn text-sm">Request demo</Link>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <DataConvergenceHero />
          </motion.div>
        </div>
      </Section>

      {/* DEFINITION */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What is a healthcare data and integration layer?</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            A data and integration layer connects multiple systems — such as PMS, EHR, communication tools, and analytics platforms — into a unified data environment. It enables interoperability, real-time data exchange, and centralized access to information across the healthcare ecosystem.
          </p>
          <div className="flex justify-center gap-8 mb-6">
            {[{ Icon: Network, label: "Connect" }, { Icon: Database, label: "Centralize" }, { Icon: RefreshCcw, label: "Real-Time" }, { Icon: Layers, label: "Structure" }].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <item.Icon className="w-5 h-5 text-primary" />
                <span className="text-xs text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </motion.div>
      </Section>

      {/* PROBLEM */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The challenge of fragmented healthcare data</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Healthcare data is not missing — it exists in abundance. But it lives across isolated systems that were never designed to share it. PMS, EHR, communication tools, marketing platforms, and billing systems each hold a piece of the patient picture — and none of them see the whole.
          </p>
          <p className="font-semibold text-foreground mb-8">The data exists. It's just trapped in the wrong places.</p>
          {/* Isolated nodes visual */}
          <div className="flex flex-wrap justify-center gap-6">
            {["PMS", "EHR", "Calls", "Marketing", "Billing", "Analytics"].map((label) => (
              <div key={label} className="w-16 h-16 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center">
                <span className="text-[10px] text-muted-foreground/50">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* UNIFIED */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">A unified data infrastructure for healthcare</h2>
          <p className="text-muted-foreground leading-relaxed">
            Borna acts as the central data infrastructure for your practice — receiving data from every system, normalizing it into a unified structure, and making it available across the entire platform in real time.
          </p>
        </motion.div>
      </Section>

      {/* DATA SOURCES */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Data sources connected by Borna AI</h2>
          <p className="text-muted-foreground">Five categories of data — each from a different type of system, all unified in one place.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { Icon: Database, badge: "PMS", title: "Practice management systems", desc: "Sync patient records, scheduling data, billing information, and production metrics directly from your PMS." },
            { Icon: FileText, badge: "EHR", title: "Electronic health records", desc: "Access clinical data, treatment histories, and patient health information from your EHR." },
            { Icon: MessageSquare, badge: "Communication", title: "Communication channels", desc: "Every call, SMS, email, and chat logged through Borna Connect flows into the data layer.", link: "/ecosystem/communication" },
            { Icon: BarChart3, badge: "Marketing", title: "Marketing platforms", desc: "Connect lead sources, campaign performance data, and conversion tracking." },
            { Icon: CreditCard, badge: "Financial", title: "Financial & payment systems", desc: "Integrate transaction data, collections, and billing information for complete financial visibility." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.08 } } }}
              className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <item.Icon className="w-6 h-6 text-primary" />
                <span className="text-[10px] uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">{item.badge}</span>
              </div>
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              {item.link && (
                <Link to={item.link} className="text-primary text-xs font-medium inline-flex items-center gap-1 mt-3 hover:underline">
                  Explore Communication Layer <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* DATA FLOW */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How data flows through the platform</h2>
          <p className="text-muted-foreground">A structured pipeline — from raw capture to insights and automated actions.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {[
            { n: 1, Icon: Database, title: "Capture", desc: "Raw data captured from all connected systems" },
            { n: 2, Icon: Network, title: "Integrate", desc: "Data normalized into a unified schema" },
            { n: 3, Icon: Layers, title: "Structure", desc: "Information categorized and stored centrally" },
            { n: 4, Icon: Brain, title: "Analyze", desc: "AI processes structured data for patterns" },
            { n: 5, Icon: Zap, title: "Act", desc: "Insights trigger actions and decisions" },
          ].map((step) => (
            <motion.div
              key={step.n}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: step.n * 0.08 } } }}
              className="rounded-xl p-5 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-center"
            >
              <div className="w-8 h-8 rounded-full bg-primary/15 text-primary text-sm font-bold flex items-center justify-center mx-auto mb-3">{step.n}</div>
              <step.Icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <h4 className="text-sm font-semibold mb-1">{step.title}</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* INTEROPERABILITY */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Enabling interoperability across systems</h2>
          <p className="text-muted-foreground leading-relaxed">
            Interoperability is not just about connecting systems — it is about ensuring data moves correctly, consistently, and in real time between them.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { Icon: RefreshCcw, title: "Standardized data exchange", desc: "Data from different systems normalized into consistent formats." },
            { Icon: Zap, title: "Real-time synchronization", desc: "Updates in one system reflected across all connected systems immediately." },
            { Icon: Layers, title: "Unified data structures", desc: "All incoming data organized into a consistent, unified schema." },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.1 } } }}
              className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-center">
              <item.Icon className="w-6 h-6 text-primary mx-auto mb-4" />
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* REAL-TIME */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Real-time data synchronization and processing</h2>
          <p className="text-muted-foreground leading-relaxed">
            Borna processes data the moment it arrives. Every patient interaction, scheduling update, payment transaction, and marketing conversion is captured and made available immediately.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { Icon: Zap, title: "Immediate data updates", desc: "When data changes in any connected system, the update propagates instantly." },
            { Icon: CheckCircle2, title: "Consistent information", desc: "Every system connected to Borna always sees the same version of the data." },
            { Icon: Eye, title: "Real-time operational visibility", desc: "Practices see an always-current view of operational data — no lag." },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.1 } } }}
              className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-center">
              <item.Icon className="w-6 h-6 text-primary mx-auto mb-4" />
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* API & EXTENSIBILITY */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">API-driven integration and scalability</h2>
          <p className="text-muted-foreground leading-relaxed">
            Borna's data layer is built on an API-driven architecture — making it extensible beyond the pre-built integration library. As practices grow, the API layer provides the infrastructure to connect anything.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { Icon: Code, title: "API-based integrations", desc: "Connect any system through Borna's API layer — not limited to pre-built connectors." },
            { Icon: Plus, title: "Custom system connections", desc: "Build custom data bridges for proprietary or specialized systems." },
            { Icon: Network, title: "Scalable ecosystem expansion", desc: "New modules, partners, and data sources can be added without architectural changes." },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.1 } } }}
              className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-center">
              <item.Icon className="w-6 h-6 text-primary mx-auto mb-4" />
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* DATA GOVERNANCE */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Centralized data management and governance</h2>
          <p className="text-muted-foreground leading-relaxed">
            Centralizing data is only valuable if that data is organized, controlled, and governed. Borna structures it into meaningful categories, controls access, and provides visibility into data usage.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { Icon: Layers, title: "Unified data storage", desc: "All data stored in a unified, structured environment — no fragmented repositories." },
            { Icon: Shield, title: "Controlled data access", desc: "Role-based access governance ensures the right people have the right data." },
            { Icon: Database, title: "Structured data organization", desc: "Data categorized and organized by type, source, and purpose — AI-ready." },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.1 } } }}
              className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-center">
              <item.Icon className="w-6 h-6 text-primary mx-auto mb-4" />
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONNECTION TO AI */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Data as the foundation for AI and insights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Data & Integration Layer is not the endpoint — it is the enabler. Clean, centralized, structured data is what makes AI possible. Every prediction, insight, and automated workflow is only as good as the data underneath it.
            </p>
            <Link to="/ecosystem/ai-intelligence" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline">
              Explore the AI Intelligence Layer <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex justify-center">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">Data Layer</span>
              </div>
              <ArrowRight className="w-5 h-5 text-primary" />
              <div className="text-center">
                <div className="w-14 h-14 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">AI & Insights</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* BUSINESS VALUE */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why data integration matters for healthcare practices</h2>
          <p className="text-muted-foreground leading-relaxed">
            When data is unified, every decision improves: scheduling efficiency increases, patient relationships strengthen, marketing ROI becomes measurable, and revenue becomes trackable.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
          {[
            { Icon: Database, label: "Unified Data" },
            { Icon: BarChart3, label: "Better Insights" },
            { Icon: Zap, label: "Smarter Actions" },
            { Icon: TrendingUp, label: "Practice Growth" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.Icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{item.label}</span>
              {i < 3 && <ArrowRight className="w-4 h-4 text-primary/50 hidden md:block ml-4" />}
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How the Data & Integration Layer works</h2>
          <p className="text-muted-foreground">Five steps — from connecting your first system to a fully unified, AI-ready data environment.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { n: 1, Icon: Network, title: "Connect", desc: "Connect all external systems and data sources" },
            { n: 2, Icon: Database, title: "Centralize", desc: "All data centralized, normalized, and structured" },
            { n: 3, Icon: RefreshCcw, title: "Process", desc: "Data cleaned, reconciled, and made consistent" },
            { n: 4, Icon: Brain, title: "Analyze", desc: "AI surfaces insights, patterns, and predictions" },
            { n: 5, Icon: Sparkles, title: "Optimize", desc: "Insights drive continuous improvement across all operations" },
          ].map((step) => (
            <motion.div key={step.n} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: step.n * 0.08 } } }}
              className="rounded-xl p-5 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-center">
              <div className="w-8 h-8 rounded-full bg-primary/15 text-primary text-sm font-bold flex items-center justify-center mx-auto mb-3">{step.n}</div>
              <step.Icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <h4 className="text-sm font-semibold mb-1">{step.title}</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* KEY TAKEAWAYS */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Key takeaways</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "Borna unifies healthcare data from PMS, EHR, communication, marketing, and financial systems",
            "Real-time data synchronization keeps every connected system accurate and consistent",
            "Centralized, structured data is the foundation that makes AI and analytics possible",
            "API-driven architecture enables scalable expansion as the platform and practice grow",
          ].map((text, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.08 } } }}
              className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm font-medium leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <StandardFAQ items={[
        { q: "What is a healthcare data platform?", a: "A healthcare data platform centralizes and integrates data from multiple sources — PMS, EHR, communication tools, and marketing platforms — into one unified environment that supports real-time insights, AI automation, and operational decision-making." },
        { q: "Why is data integration important in healthcare?", a: "Data integration eliminates silos that cause inconsistent information, manual re-entry, and operational blind spots. When all systems share a unified data layer, practices gain full visibility into patient relationships, operational performance, and revenue." },
        { q: "Does Borna support real-time data integration?", a: "Yes. Borna enables real-time data synchronization across all connected systems — updates in one place are immediately available across the entire platform without batch delays or manual intervention." },
        { q: "What data sources does the Borna Data Layer connect?", a: "Borna connects Practice Management Systems (PMS), Electronic Health Records (EHR), all communication channels, marketing platforms, and financial and payment systems — along with data generated internally by other Borna ecosystem layers." },
        { q: "How does the Data Layer enable AI and analytics?", a: "By centralizing, structuring, and governing data from all sources, the Data Layer provides the AI layer with the clean, complete, and consistent data it needs to generate insights, predictions, and automation." },
      ]} />

      {/* FINAL CTA */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Connect your data. Power your platform.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Borna AI transforms fragmented healthcare data into a unified, intelligent system — giving practices the operational foundation for real-time insights, AI automation, and sustainable growth.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/demo" className="gradient-btn text-sm">Request demo</Link>
              <Link to="/platform" className="text-sm font-medium rounded-lg px-5 py-3 border border-white/[0.18] text-white/85 hover:bg-white/[0.08] transition-all">
                Explore platform →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default DataIntegrationPage;
