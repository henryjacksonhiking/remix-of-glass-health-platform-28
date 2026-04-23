import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Target,
  Handshake,
  Calendar,
  Heart,
  RefreshCcw,
  Users,
  History,
  MessageSquare,
  BarChart3,
  Zap,
  TrendingUp,
  ArrowRight,
  Activity,
  UserCheck,
  Bell,
  CheckCircle2,
  Database,
  Layers,
  Brain,
  Sparkles,
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import StandardFAQ from "@/components/sections/StandardFAQ";
import KeyTakeaways from "@/components/sections/KeyTakeaways";
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
   HERO — Lifecycle Pipeline
   ============================================================ */
const LifecyclePipeline = ({ broken = false, compact = false }: { broken?: boolean; compact?: boolean }) => {
  const reduced = useReducedMotion();
  const stages = broken
    ? [
        { label: "Lead", Icon: Target },
        { label: "Contact", Icon: Handshake },
        { label: "Appointment", Icon: Calendar },
        { label: "Treatment", Icon: Heart },
        { label: "Retention", Icon: RefreshCcw },
      ]
    : [
        { label: "Lead", Icon: Target },
        { label: "Contact", Icon: Handshake },
        { label: "Appointment", Icon: Calendar },
        { label: "Treatment", Icon: Heart },
        { label: "Retention", Icon: RefreshCcw },
      ];

  const nodeW = compact ? 70 : 80;
  const gap = compact ? 40 : 55;
  const totalW = stages.length * nodeW + (stages.length - 1) * gap;
  const h = compact ? 60 : 80;

  return (
    <div className="relative w-full overflow-x-auto">
      <svg viewBox={`0 0 ${totalW} ${h}`} className="w-full max-w-[600px] mx-auto h-auto" aria-hidden="true">
        <defs>
          <filter id="pipeGlow">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {stages.map((s, i) => {
          const cx = i * (nodeW + gap) + nodeW / 2;
          const cy = h / 2;
          const isBroken = broken && (i === 1 || i === 4);
          const opacity = broken ? 0.25 : 0.4 + i * 0.15;

          return (
            <g key={s.label}>
              {/* connecting line */}
              {i < stages.length - 1 && (
                <line
                  x1={cx + nodeW / 2 - 5}
                  y1={cy}
                  x2={cx + nodeW + gap - nodeW / 2 + 5}
                  y2={cy}
                  stroke="#00DEC4"
                  strokeWidth={broken && (i === 0 || i === 3) ? 0 : 1.5}
                  strokeOpacity={broken ? 0.15 : 0.6}
                  strokeDasharray={broken && (i === 0 || i === 3) ? "4 4" : "none"}
                  filter="url(#pipeGlow)"
                />
              )}
              {/* node */}
              <rect
                x={cx - nodeW / 2 + 10}
                y={cy - 18}
                width={nodeW - 20}
                height={36}
                rx={18}
                fill={`rgba(0, 222, 196, ${isBroken ? 0.05 : opacity * 0.15})`}
                stroke="#00DEC4"
                strokeWidth={1}
                strokeOpacity={broken ? 0.2 : opacity}
              />
              <text
                x={cx}
                y={cy + 4}
                textAnchor="middle"
                fill={broken ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.9)"}
                fontSize={compact ? 8 : 9}
                fontWeight={500}
              >
                {s.label}
              </text>
              {/* particle */}
              {!broken && !reduced && i < stages.length - 1 && (
                <circle r={3} fill="#00DEC4" filter="url(#pipeGlow)">
                  <animateMotion
                    dur={`${3 + i * 0.3}s`}
                    repeatCount="indefinite"
                    path={`M${cx + nodeW / 2 - 5},${cy} L${cx + nodeW + gap - nodeW / 2 + 5},${cy}`}
                  />
                  <animate attributeName="opacity" values="0.3;1;0.3" dur={`${3 + i * 0.3}s`} repeatCount="indefinite" />
                </circle>
              )}
            </g>
          );
        })}
      </svg>
      {!compact && !broken && (
        <p className="text-center text-xs text-muted-foreground mt-3">
          Full patient lifecycle — captured and managed
        </p>
      )}
    </div>
  );
};

/* ============================================================
   CRM Hub Diagram
   ============================================================ */
const CRMHub = () => {
  const reduced = useReducedMotion();
  const items = [
    { label: "Communication", Icon: MessageSquare },
    { label: "Appointments", Icon: Calendar },
    { label: "Treatment", Icon: Heart },
    { label: "Lead Source", Icon: Target },
    { label: "Engagement", Icon: Activity },
    { label: "Lifecycle", Icon: RefreshCcw },
  ];
  const cx = 160, cy = 120, r = 85;

  return (
    <div className="w-full max-w-[360px] mx-auto">
      <svg viewBox="0 0 320 240" className="w-full h-auto" aria-hidden="true">
        <defs>
          <radialGradient id="crmHubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00DEC4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00DEC4" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={cx} cy={cy} r={30} fill="url(#crmHubGlow)" />
        <circle cx={cx} cy={cy} r={14} fill="rgba(0,222,196,0.15)" stroke="#00DEC4" strokeWidth={1.5} />
        <text x={cx} y={cy - 3} textAnchor="middle" fill="white" fontSize={7} fontWeight={600}>Patient</text>
        <text x={cx} y={cy + 6} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize={6}>Record</text>

        {items.map((item, i) => {
          const angle = (i * 2 * Math.PI) / items.length - Math.PI / 2;
          const nx = cx + Math.cos(angle) * r;
          const ny = cy + Math.sin(angle) * r;
          return (
            <g key={item.label}>
              <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#00DEC4" strokeWidth={1} strokeOpacity={0.3} />
              <circle cx={nx} cy={ny} r={10} fill="rgba(0,222,196,0.08)" stroke="#00DEC4" strokeWidth={0.8} strokeOpacity={0.5} />
              <text x={nx} y={ny + 18} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize={6}>{item.label}</text>
              {!reduced && (
                <circle r={2} fill="#00DEC4" opacity={0.6}>
                  <animateMotion dur={`${3 + i * 0.5}s`} repeatCount="indefinite" path={`M${nx},${ny} L${cx},${cy}`} />
                </circle>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/* ============================================================
   SECTION COMPONENT
   ============================================================ */
const Section = ({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) => (
  <section id={id} className={`py-12 md:py-20 ${className}`}>
    <div className="container mx-auto px-4 md:px-6">{children}</div>
  </section>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ============================================================
   MAIN PAGE
   ============================================================ */
const CRMLifecyclePage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Healthcare CRM & Patient Lifecycle Management Platform | Borna AI</title>
        <meta name="description" content="Borna AI's CRM & Lifecycle Layer helps healthcare practices manage leads, patients, and engagement across the entire lifecycle with AI-driven insights and automation." />
        <link rel="canonical" href="https://borna.ai/ecosystem/crm-lifecycle" />
        <script type="application/ld+json">{JSON.stringify([
          { "@context": "https://schema.org", "@type": "WebPage", name: "Healthcare CRM and Lifecycle Platform", description: "Borna AI CRM and lifecycle management for healthcare practices." },
          { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Borna CRM & Lifecycle Layer", applicationCategory: "HealthApplication", description: "Healthcare CRM and lifecycle management platform with AI insights." },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://borna.ai" },
            { "@type": "ListItem", position: 2, name: "Ecosystem", item: "https://borna.ai/ecosystem" },
            { "@type": "ListItem", position: 3, name: "CRM & Lifecycle Layer", item: "https://borna.ai/ecosystem/crm-lifecycle" },
          ]},
          { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "What is a healthcare CRM?", acceptedAnswer: { "@type": "Answer", text: "A healthcare CRM system helps practices manage patient interactions, track engagement, and maintain relationships over time — centralizing all patient data, communication history, and lifecycle stages in one place." }},
            { "@type": "Question", name: "What is patient lifecycle management?", acceptedAnswer: { "@type": "Answer", text: "Patient lifecycle management tracks the full patient journey — from lead acquisition and first contact through appointment booking, active treatment, and long-term retention — enabling practices to manage every stage with visibility and intelligence." }},
            { "@type": "Question", name: "How does Borna improve patient retention?", acceptedAnswer: { "@type": "Answer", text: "Borna analyzes patient engagement patterns to identify at-risk relationships, automates reactivation campaigns, and gives practices visibility needed to proactively manage retention before patients disengage." }},
            { "@type": "Question", name: "How does Borna help with lead conversion?", acceptedAnswer: { "@type": "Answer", text: "Borna captures leads from multiple marketing channels, tracks their source and engagement, and enables automated follow-up workflows — ensuring inquiries are responded to promptly and guided toward booked appointments." }},
            { "@type": "Question", name: "How does the CRM layer connect to the rest of the Borna platform?", acceptedAnswer: { "@type": "Answer", text: "The CRM & Lifecycle Layer receives communication data from the Communication Layer, feeds lifecycle data into the Analytics & Insights layer for performance tracking, and connects to the AI engine for automated engagement workflows." }},
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
            <BreadcrumbItem><BreadcrumbPage className="text-primary">CRM & Lifecycle Layer</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* SECTION 1 — HERO */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-primary text-xs uppercase tracking-widest font-medium">CRM & Lifecycle Layer</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              Healthcare CRM and patient lifecycle management platform
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
              The Borna AI CRM & Lifecycle Layer enables healthcare practices to manage leads, patients, and relationships across the entire lifecycle — from first contact to long-term retention. With unified data and AI-driven insights, practices can improve engagement, reduce leakage, and maximize patient value.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#lifecycle" className="gradient-btn text-sm">Explore CRM capabilities</a>
              <Link to="/demo" className="text-sm font-medium rounded-lg px-5 py-3 border border-white/[0.18] text-white/85 hover:bg-white/[0.08] transition-all">
                Request demo
              </Link>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <LifecyclePipeline />
          </motion.div>
        </div>
      </Section>

      {/* SECTION 2 — DEFINITION */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What is a healthcare CRM and patient lifecycle platform?</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            A healthcare CRM helps practices manage patient interactions, track engagement, and maintain relationships over time. A lifecycle platform extends this by tracking the full journey — from marketing lead to active patient and beyond — enabling better decision-making and retention strategies.
          </p>
          <div className="flex justify-center gap-8 mb-6">
            {[{ Icon: Target, label: "Lead" }, { Icon: Handshake, label: "Contact" }, { Icon: UserCheck, label: "Patient" }, { Icon: RefreshCcw, label: "Retain" }].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <item.Icon className="w-5 h-5 text-primary" />
                <span className="text-xs text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </motion.div>
      </Section>

      {/* SECTION 3 — PROBLEM */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The challenge of managing patient relationships</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most healthcare practices manage patient relationships reactively — responding to inquiries as they come, without a system to track where each lead or patient is in their journey. Leads fall through the cracks. Follow-ups don't happen. Inactive patients are never reactivated.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The result is measurable revenue loss: lost leads that never converted, patients who drifted away, and a practice with no visibility into why.
          </p>
          <p className="font-semibold text-foreground">Every gap in the lifecycle is a gap in revenue.</p>
        </motion.div>
        <LifecyclePipeline broken />
      </Section>

      {/* SECTION 4 — UNIFIED */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">A unified CRM and lifecycle management system</h2>
          <p className="text-muted-foreground leading-relaxed">
            Borna brings every stage of the patient lifecycle into one system — capturing every lead, tracking every interaction, and giving practices the visibility to manage relationships proactively instead of reactively.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-3">Disconnected Lifecycle</p>
            <LifecyclePipeline broken compact />
          </div>
          <ArrowRight className="w-6 h-6 text-primary mx-auto hidden md:block" />
          <div className="text-center">
            <p className="text-xs text-primary mb-3">Unified in Borna</p>
            <LifecyclePipeline compact />
          </div>
        </div>
      </Section>

      {/* SECTION 5 — LIFECYCLE STAGES */}
      <Section id="lifecycle">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Managing the entire patient lifecycle</h2>
          <p className="text-muted-foreground">Four stages — each with distinct goals, actions, and outcomes. All managed through one connected system.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { badge: "Top of Funnel", Icon: Target, title: "Lead acquisition", body: "Capture leads from multiple marketing channels — website forms, calls, referrals, and ads. Track source, campaign, and first interaction automatically." },
            { badge: "Engagement", Icon: Handshake, title: "Lead conversion", body: "Follow up with prospects, automate appointment scheduling prompts, and guide leads through the booking process — reducing the gap between inquiry and first appointment." },
            { badge: "Core Relationship", Icon: UserCheck, title: "Active patient management", body: "Manage ongoing interactions with current patients — tracking treatment progress, engagement activity, communication history, and appointment patterns in one unified record." },
            { badge: "Long-Term Value", Icon: RefreshCcw, title: "Retention & reactivation", body: "Re-engage inactive patients with targeted outreach and reactivation campaigns. Identify at-risk relationships before they disengage." },
          ].map((stage, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.1 } } }}
              className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <stage.Icon className="w-6 h-6 text-primary" />
                <span className="text-[10px] uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">{stage.badge}</span>
              </div>
              <h3 className="text-sm font-semibold mb-2">{stage.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{stage.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SECTION 6 — CRM CORE */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Core CRM features for healthcare practices</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The CRM layer in Borna is the centralized data hub where every patient relationship lives — bringing together patient profiles, interaction history, communication records, and engagement patterns in one structured place.
            </p>
            <div className="space-y-5">
              {[
                { Icon: Users, title: "Centralized patient profiles", desc: "Every patient has a unified record containing all interactions, communication history, lifecycle stage, and engagement data." },
                { Icon: History, title: "Interaction tracking", desc: "Every touchpoint — call, message, appointment, form submission — is logged automatically against the patient's record." },
                { Icon: MessageSquare, title: "Communication history", desc: "The full communication thread for each patient is accessible in one place, providing context for every future interaction." },
                { Icon: Target, title: "Segmentation and targeting", desc: "Patient lists can be segmented by lifecycle stage, engagement level, last contact date, or treatment type." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <item.Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <CRMHub />
          </motion.div>
        </div>
      </Section>

      {/* SECTION 7 — AI INSIGHTS */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">AI-powered insights across the patient journey</h2>
          <p className="text-muted-foreground leading-relaxed">
            The AI layer within Borna's CRM doesn't just store relationship data — it analyzes it. Engagement patterns, communication effectiveness, patient behavior, and lifecycle velocity are all processed to surface insights that help practices make smarter decisions.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { Icon: Activity, title: "Engagement pattern analysis", desc: "AI identifies how patients engage across different channels and stages — surfacing which interactions lead to appointments." },
            { Icon: TrendingUp, title: "Predictive follow-up optimization", desc: "Based on patient behavior, AI determines the optimal time, channel, and message for follow-up — maximizing conversion." },
            { Icon: BarChart3, title: "Conversion rate insights", desc: "Understand which lead sources, communication approaches, and lifecycle interventions are driving the best outcomes." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.1 } } }}
              className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-center"
            >
              <item.Icon className="w-6 h-6 text-primary mx-auto mb-4" />
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SECTION 8 — AUTOMATION */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Automating patient lifecycle workflows</h2>
          <p className="text-muted-foreground leading-relaxed">
            Borna automates the repetitive but critical workflows that drive patient lifecycle progress — ensuring follow-ups happen on time, appointments are confirmed, and inactive patients are re-engaged.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { Icon: Bell, title: "Missed appointment follow-up", desc: "When a patient misses an appointment, an automated follow-up message is triggered immediately — offering rebooking options." },
            { Icon: CheckCircle2, title: "Appointment confirmation workflows", desc: "Scheduled confirmation messages sent automatically before appointments — reducing no-shows." },
            { Icon: RefreshCcw, title: "Reactivation campaigns", desc: "Patients who haven't engaged within a defined period are automatically identified and entered into a reactivation sequence." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.1 } } }}
              className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-center"
            >
              <item.Icon className="w-6 h-6 text-primary mx-auto mb-4" />
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SECTION 9 — CONNECTION TO COMMUNICATION */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Connected to the Communication Layer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The CRM & Lifecycle Layer receives, organizes, and contextualizes the patient interactions that flow in from the Communication Layer. Every call, message, and chat is automatically logged against the relevant patient's CRM record.
            </p>
            <Link to="/ecosystem/communication" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline">
              Explore the Communication Layer <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex justify-center">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">Communication</span>
              </div>
              <ArrowRight className="w-5 h-5 text-primary" />
              <div className="text-center">
                <div className="w-14 h-14 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">CRM & Lifecycle</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 10 — CONNECTION TO INSIGHTS */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Connected to analytics and insights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lifecycle data captured in Borna's CRM flows into the Analytics & Insights layer, where it becomes the basis for performance tracking, ROI measurement, and strategic decision-making.
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
                <span className="text-xs text-muted-foreground">CRM</span>
              </div>
              <ArrowRight className="w-5 h-5 text-primary" />
              <div className="text-center">
                <div className="w-14 h-14 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">Analytics & Insights</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 11 — BUSINESS VALUE */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why CRM and lifecycle management matter</h2>
          <p className="text-muted-foreground leading-relaxed">
            Practices that track and manage every stage of the patient journey capture more leads, convert more inquiries, retain more patients, and generate higher lifetime value from every relationship.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
          {[
            { Icon: Layers, label: "Lifecycle Management" },
            { Icon: Heart, label: "Better Engagement" },
            { Icon: RefreshCcw, label: "Higher Retention" },
            { Icon: TrendingUp, label: "Revenue Growth" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.Icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{item.label}</span>
              {i < 3 && <ArrowRight className="w-4 h-4 text-primary/50 hidden md:block ml-4" />}
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 12 — HOW IT WORKS */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How the CRM & Lifecycle Layer works</h2>
          <p className="text-muted-foreground">Five steps — from the first lead captured to a continuously managed, optimized patient relationship.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { n: 1, Icon: Target, title: "Capture", desc: "Capture leads and patient data from every channel and marketing source" },
            { n: 2, Icon: History, title: "Track", desc: "Track every interaction, communication, and lifecycle stage change" },
            { n: 3, Icon: Brain, title: "Analyze", desc: "AI analyzes patient behavior, engagement patterns, and lifecycle velocity" },
            { n: 4, Icon: Zap, title: "Automate", desc: "Automated workflows fire for follow-ups, confirmations, and reactivation" },
            { n: 5, Icon: Sparkles, title: "Optimize", desc: "Insights continuously improve engagement strategy and conversion performance" },
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

      {/* SECTION 13 — KEY TAKEAWAYS */}
      <KeyTakeaways
        items={[
          { icon: UserCheck, text: "Borna manages the full patient lifecycle from lead acquisition to long-term retention" },
          { icon: Database, text: "The CRM centralizes all patient relationship data — profiles, interactions, history, and stages" },
          { icon: Brain, text: "AI enhances every lifecycle stage with predictive insights and optimized engagement timing" },
          { icon: TrendingUp, text: "Lifecycle management directly improves conversion rates, retention, and practice revenue" },
        ]}
      />

      {/* SECTION 14 — FAQ */}
      <StandardFAQ items={[
        { q: "What is a healthcare CRM?", a: "A healthcare CRM system helps practices manage patient interactions, track engagement, and maintain relationships over time — centralizing all patient data, communication history, and lifecycle stages in one unified place." },
        { q: "What is patient lifecycle management?", a: "Patient lifecycle management tracks the full patient journey — from lead acquisition and first contact through appointment booking, active treatment, and long-term retention — giving practices the visibility to manage every stage proactively." },
        { q: "How does Borna improve patient retention?", a: "Borna analyzes patient engagement patterns to identify at-risk relationships, automates reactivation campaigns for inactive patients, and gives practices the visibility needed to proactively manage retention before patients disengage." },
        { q: "How does Borna help with lead conversion?", a: "Borna captures leads from multiple marketing channels, tracks their source and engagement, and enables automated follow-up workflows — ensuring inquiries are responded to promptly and guided toward booked appointments." },
        { q: "How does the CRM layer connect to the rest of the Borna platform?", a: "The CRM & Lifecycle Layer receives communication data from the Communication Layer, feeds lifecycle data into the Analytics & Insights layer, and connects to the AI engine for automated engagement — making it the relationship backbone of the entire ecosystem." },
      ]} />

      {/* SECTION 15 — FINAL CTA */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Manage every patient relationship with intelligence.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Borna AI helps healthcare practices track, engage, and optimize the entire patient lifecycle — so no lead is lost, no patient drifts away, and every relationship contributes to long-term growth.
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

export default CRMLifecyclePage;
