import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Brain,
  Activity,
  Zap,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Bell,
  BarChart3,
  Database,
  MessageSquare,
  Users,
  CreditCard,
  Calendar,
  RefreshCcw,
  Sparkles,
  Eye,
  Target,
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
   HERO — Data→Intelligence Transformation
   ============================================================ */
const AITransformationHero = () => {
  const reduced = useReducedMotion();
  const rawNodes = [
    { x: 30, y: 60 }, { x: 50, y: 130 }, { x: 25, y: 200 }, { x: 65, y: 240 },
  ];
  const outputNodes = [
    { x: 350, y: 60, label: "Insight" },
    { x: 360, y: 130, label: "Prediction" },
    { x: 350, y: 200, label: "Automation" },
    { x: 365, y: 250, label: "Alert" },
  ];
  const coreX = 200, coreY = 140;

  return (
    <div className="relative w-full max-w-[420px] aspect-[4/3] mx-auto">
      <svg viewBox="0 0 400 280" className="w-full h-full" aria-hidden="true">
        <defs>
          <radialGradient id="aiCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00DEC4" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#00DEC4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00DEC4" stopOpacity="0" />
          </radialGradient>
          <filter id="aiGlow">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Raw data nodes */}
        {rawNodes.map((n, i) => (
          <g key={`raw-${i}`}>
            <circle cx={n.x} cy={n.y} r={8} fill="rgba(0,222,196,0.06)" stroke="#00DEC4" strokeWidth={0.6} strokeOpacity={0.25} />
            <line x1={n.x + 8} y1={n.y} x2={coreX - 22} y2={coreY} stroke="#00DEC4" strokeWidth={0.8} strokeOpacity={0.2} />
            {!reduced && (
              <circle r={2.5} fill="#00DEC4" filter="url(#aiGlow)">
                <animateMotion dur={`${2 + i * 0.4}s`} repeatCount="indefinite" path={`M${n.x + 8},${n.y} L${coreX - 22},${coreY}`} />
                <animate attributeName="opacity" values="0.15;0.8;0.15" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
              </circle>
            )}
          </g>
        ))}

        {/* AI Core */}
        <circle cx={coreX} cy={coreY} r={45} fill="url(#aiCoreGlow)" />
        <circle cx={coreX} cy={coreY} r={20} fill="rgba(0,222,196,0.18)" stroke="#00DEC4" strokeWidth={1.5}>
          {!reduced && <animate attributeName="r" values="20;22;20" dur="3s" repeatCount="indefinite" />}
        </circle>
        <text x={coreX} y={coreY - 4} textAnchor="middle" fill="white" fontSize={8} fontWeight={600}>Borna AI</text>
        <text x={coreX} y={coreY + 7} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize={6}>Intelligence Engine</text>

        {/* Output nodes */}
        {outputNodes.map((n, i) => (
          <g key={`out-${i}`}>
            <line x1={coreX + 22} y1={coreY} x2={n.x - 12} y2={n.y} stroke="#00DEC4" strokeWidth={0.8} strokeOpacity={0.4} />
            <circle cx={n.x} cy={n.y} r={10} fill="rgba(0,222,196,0.12)" stroke="#00DEC4" strokeWidth={1} strokeOpacity={0.7} />
            <text x={n.x} y={n.y + 3} textAnchor="middle" fill="#00DEC4" fontSize={5.5} fontWeight={500}>{n.label}</text>
            {!reduced && (
              <circle r={2.5} fill="#00DEC4" filter="url(#aiGlow)">
                <animateMotion dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" path={`M${coreX + 22},${coreY} L${n.x - 12},${n.y}`} />
                <animate attributeName="opacity" values="0.8;1;0.8" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            )}
          </g>
        ))}
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

const AIIntelligencePage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>AI in Healthcare Platform | Automation & Insights Engine | Borna AI</title>
        <meta name="description" content="Borna AI's Intelligence Layer analyzes healthcare data, automates workflows, and delivers real-time insights to improve patient engagement and operations." />
        <link rel="canonical" href="https://borna.ai/ecosystem/ai-intelligence" />
        <script type="application/ld+json">{JSON.stringify([
          { "@context": "https://schema.org", "@type": "WebPage", name: "AI Intelligence Layer", description: "Healthcare AI platform for insights, automation, and decision support." },
          { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Borna AI Intelligence Layer", applicationCategory: "HealthApplication", description: "AI-powered healthcare platform for analytics and automation." },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://borna.ai" },
            { "@type": "ListItem", position: 2, name: "Ecosystem", item: "https://borna.ai/ecosystem" },
            { "@type": "ListItem", position: 3, name: "AI Intelligence Layer", item: "https://borna.ai/ecosystem/ai-intelligence" },
          ]},
          { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "What is an AI intelligence layer in healthcare?", acceptedAnswer: { "@type": "Answer", text: "An AI intelligence layer processes and analyzes data from multiple sources to generate insights, automate workflows, and support decision-making." }},
            { "@type": "Question", name: "How does AI improve patient engagement?", acceptedAnswer: { "@type": "Answer", text: "AI analyzes patient communication patterns and behavior to surface personalized follow-up recommendations, optimize outreach timing, and automate responses." }},
            { "@type": "Question", name: "Does Borna provide real-time AI insights?", acceptedAnswer: { "@type": "Answer", text: "Yes. Borna processes data in real time — generating actionable insights, alerts, and workflow triggers the moment relevant patterns are detected." }},
            { "@type": "Question", name: "What AI capabilities does Borna provide?", acceptedAnswer: { "@type": "Answer", text: "Sentiment analysis, predictive insights, intelligent workflow automation, and AI-assisted decision support." }},
            { "@type": "Question", name: "How does the AI layer connect to the rest of the Borna ecosystem?", acceptedAnswer: { "@type": "Answer", text: "The AI Intelligence Layer receives structured data from the Data & Integration Layer and processes information from Communication and CRM layers. Its outputs flow back into every other ecosystem layer." }},
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
            <BreadcrumbItem><BreadcrumbPage className="text-primary">AI Intelligence Layer</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* HERO */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-primary text-xs uppercase tracking-widest font-medium">AI Intelligence Layer</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              AI-powered intelligence layer for healthcare platforms
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
              The Borna AI Intelligence Layer transforms data into actionable insights, automation, and decision support across the entire healthcare ecosystem. By analyzing communication, patient behavior, and operational data, Borna enables smarter workflows, better decisions, and improved outcomes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/platform" className="text-sm font-medium rounded-lg px-5 py-3 border border-white/[0.18] text-white/85 hover:bg-white/[0.08] transition-all">
                Explore platform →
              </Link>
              <Link to="/demo" className="gradient-btn text-sm">Request demo</Link>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <AITransformationHero />
          </motion.div>
        </div>
      </Section>

      {/* DEFINITION */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What is an AI intelligence layer in healthcare?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            An AI intelligence layer is a system that processes and analyzes data from multiple sources to generate insights, automate workflows, and support decision-making. In healthcare, it enables providers to understand patient behavior, optimize operations, and improve engagement through intelligent automation.
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </motion.div>
      </Section>

      {/* PROBLEM */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The challenge of untapped healthcare data</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Healthcare systems generate enormous volumes of data — from patient communications and appointment logs to billing records and marketing campaigns. But most of it sits untouched. Not because it isn't valuable, but because there's no system capable of making sense of it at scale.
          </p>
          <p className="font-semibold text-foreground mb-8">Data without intelligence is just storage.</p>
          {/* Static scattered nodes */}
          <div className="flex flex-wrap justify-center gap-4">
            {["Calls", "Schedules", "Billing", "Marketing", "Records", "Feedback", "Forms", "Messages"].map((label) => (
              <div key={label} className="w-14 h-14 rounded-full border border-white/[0.06] bg-white/[0.015] flex items-center justify-center">
                <span className="text-[9px] text-muted-foreground/40">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* AI TRANSFORMATION */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Turning data into intelligence</h2>
          <p className="text-muted-foreground leading-relaxed">
            Borna's AI layer changes everything about how data is used. Instead of accumulating in silos, data is continuously analyzed — patterns detected, insights generated, and actions triggered — the moment the data arrives.
          </p>
        </motion.div>
      </Section>

      {/* DATA INPUT SOURCES */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Data sources powering the AI layer</h2>
          <p className="text-muted-foreground">The AI Intelligence Layer draws from every data source across the Borna ecosystem.</p>
        </motion.div>
        <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto mb-6">
          {[
            { Icon: MessageSquare, label: "Communication Data" },
            { Icon: Users, label: "CRM & Lifecycle Data" },
            { Icon: Calendar, label: "Operational Data" },
            { Icon: CreditCard, label: "Financial Data" },
            { Icon: BarChart3, label: "Marketing Data" },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.08 } } }}
              className="rounded-xl p-4 border border-white/[0.08] bg-white/[0.03] text-center">
              <item.Icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-6 text-xs">
          <Link to="/ecosystem/communication" className="text-primary hover:underline inline-flex items-center gap-1">Explore Communication Layer <ArrowRight className="w-3 h-3" /></Link>
          <Link to="/ecosystem/crm-lifecycle" className="text-primary hover:underline inline-flex items-center gap-1">Explore CRM Layer <ArrowRight className="w-3 h-3" /></Link>
        </div>
      </Section>

      {/* AI CAPABILITIES */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">AI capabilities within the Borna platform</h2>
          <p className="text-muted-foreground">Four intelligence capabilities — each transforming a different dimension of healthcare operations.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { Icon: Activity, badge: "Live Analysis", title: "Sentiment analysis", desc: "Borna analyzes the tone and sentiment of every patient interaction — calls, messages, and emails — to surface priority conversations and flag at-risk relationships." },
            { Icon: TrendingUp, badge: "AI-Powered", title: "Predictive insights", desc: "By analyzing historical patient behavior and engagement patterns, Borna's AI predicts future events — no-shows, disengagement, and revenue opportunities — before they happen." },
            { Icon: Zap, badge: "Automated", title: "Workflow automation", desc: "Trigger automated responses, scheduling actions, and patient outreach based on detected events — reducing manual workload." },
            { Icon: Lightbulb, badge: "Intelligent", title: "Decision support", desc: "AI surfaces the right information at the right moment — giving practice managers the context they need to make better decisions faster." },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.1 } } }}
              className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] transition-all">
              <div className="flex items-center justify-between mb-4">
                <item.Icon className="w-6 h-6 text-primary" />
                <span className="text-[10px] uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">{item.badge}</span>
              </div>
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* REAL-TIME */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Real-time insights and actions</h2>
          <p className="text-muted-foreground leading-relaxed">
            Borna's AI processes data the moment it arrives and acts immediately. Every patient interaction becomes an input that the AI evaluates, acts on, and learns from in real time.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { Icon: Zap, title: "Immediate analysis", desc: "Every data input triggers instant AI evaluation — no batch processing, no delays." },
            { Icon: Bell, title: "Real-time alerts", desc: "When the AI detects a pattern requiring attention, it surfaces an alert immediately." },
            { Icon: Activity, title: "Instant automation", desc: "Automated responses and follow-up triggers fire the moment a triggering condition is detected." },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.1 } } }}
              className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-center">
              <item.Icon className="w-6 h-6 text-primary mx-auto mb-4" />
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PATTERN RECOGNITION */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Continuous learning and optimization</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Borna AI layer doesn't just process data once — it learns from it continuously. As more interactions are processed, the AI becomes more accurate in its predictions and more precise in its automation triggers.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { Icon: Target, title: "Pattern identification", desc: "AI identifies recurring patterns across patient behavior, communication responses, and operational events." },
            { Icon: TrendingUp, title: "Continuous accuracy improvement", desc: "Predictions become more accurate over time as the AI refines its models based on outcomes." },
            { Icon: RefreshCcw, title: "Behavioral adaptation", desc: "When behavior changes, the AI detects the shift and adapts — staying calibrated to current reality." },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.1 } } }}
              className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-center">
              <item.Icon className="w-6 h-6 text-primary mx-auto mb-4" />
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* AUTOMATION ENGINE */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Intelligent workflow automation</h2>
          <p className="text-muted-foreground leading-relaxed">
            The AI layer doesn't just surface insights — it acts on them. When a triggering condition is detected, the AI automatically executes the appropriate workflow response.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { Icon: MessageSquare, title: "Patient follow-up", desc: "Missed call detected → AI triggers follow-up SMS within seconds." },
            { Icon: Calendar, title: "Scheduling triggers", desc: "Appointment gap → AI prompts rebooking outreach to suitable candidates." },
            { Icon: Bell, title: "Auto communication", desc: "Routine inquiry → AI drafts and sends contextually appropriate response." },
            { Icon: RefreshCcw, title: "Reactivation triggers", desc: "Patient inactive → AI initiates personalized reactivation campaign." },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.08 } } }}
              className="rounded-xl p-5 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-center">
              <item.Icon className="w-5 h-5 text-primary mx-auto mb-3" />
              <h4 className="text-xs font-semibold mb-1">{item.title}</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONNECTION TO DATA LAYER */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Powered by the Data & Integration Layer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The AI Intelligence Layer depends completely on the quality of its data foundation. Borna's Data & Integration Layer is what makes AI possible — centralizing, structuring, and governing the data that feeds every AI capability.
            </p>
            <Link to="/ecosystem/data-integration" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline">
              Explore the Data & Integration Layer <ArrowRight className="w-4 h-4" />
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
                <span className="text-xs text-muted-foreground">AI Intelligence</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* BUSINESS VALUE */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why AI intelligence matters in healthcare</h2>
          <p className="text-muted-foreground leading-relaxed">
            Staff spend less time on manual tasks. Patient engagement improves because outreach happens at the right moment. Operations become proactive. And revenue improves because opportunities are caught before they are lost.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
          {[
            { Icon: Brain, label: "AI Insights" },
            { Icon: CheckCircle2, label: "Better Decisions" },
            { Icon: Sparkles, label: "Greater Efficiency" },
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How the AI Intelligence Layer works</h2>
          <p className="text-muted-foreground">Five steps — from data collection to continuously improving intelligence.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { n: 1, Icon: Database, title: "Collect", desc: "Gather data from all ecosystem layers" },
            { n: 2, Icon: Brain, title: "Analyze", desc: "AI processes unified data for patterns and signals" },
            { n: 3, Icon: Eye, title: "Predict", desc: "Generate predictions about patient behavior and risk" },
            { n: 4, Icon: Zap, title: "Act", desc: "Trigger automated workflows and recommendations" },
            { n: 5, Icon: RefreshCcw, title: "Optimize", desc: "System learns from outcomes, improving accuracy" },
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
            "Borna transforms raw healthcare data into real-time intelligence through AI",
            "AI powers sentiment analysis, predictive insights, workflow automation, and decision support",
            "Real-time processing enables immediate analysis, alerts, and automated action",
            "Continuous learning means the system becomes smarter and more accurate over time",
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
        { q: "What is an AI intelligence layer in healthcare?", a: "An AI intelligence layer processes and analyzes data from multiple sources to generate insights, automate workflows, and support decision-making — enabling healthcare providers to understand patient behavior, optimize operations, and improve engagement." },
        { q: "How does AI improve patient engagement?", a: "AI analyzes patient communication patterns, behavior history, and lifecycle data to surface personalized follow-up recommendations, optimize outreach timing, and automate responses — keeping patients connected without manual effort." },
        { q: "Does Borna provide real-time AI insights?", a: "Yes. Borna processes data in real time — generating actionable insights, alerts, and automated workflow triggers the moment relevant patterns or events are detected across the platform." },
        { q: "What AI capabilities does Borna provide?", a: "Sentiment analysis of patient communications, predictive insights into patient behavior and lifecycle events, intelligent workflow automation, and AI-assisted decision support for practice managers and clinical staff." },
        { q: "How does the AI layer connect to the rest of the Borna ecosystem?", a: "The AI Intelligence Layer receives structured data from the Data & Integration Layer and processes information from Communication and CRM layers. Its outputs — insights, alerts, and automation — flow back into every other layer, making the entire system continuously smarter." },
      ]} />

      {/* FINAL CTA */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Unlock intelligence across your entire practice.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Borna AI transforms fragmented healthcare data into real-time intelligence — empowering practices with insights, automation, and decision support that continuously improves.
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

export default AIIntelligencePage;
