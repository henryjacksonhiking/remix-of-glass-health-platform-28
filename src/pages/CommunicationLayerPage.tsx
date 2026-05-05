import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Phone,
  MessageSquare,
  Mail,
  MessageCircle,
  Video,
  ArrowRight,
  Zap,
  Activity,
  BarChart3,
  Heart,
  TrendingUp,
  Network,
  Eye,
  Target,
  Database,
  Users,
  Cpu,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import StandardFAQ from "@/components/sections/StandardFAQ";
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
import { useState } from "react";

/* ============================================================
   HERO VISUAL — Multi-Channel Convergence Flow
   ============================================================ */
const ConvergenceHero = () => {
  const reduced = useReducedMotion();
  const channels = [
    { Icon: Phone, label: "Calls" },
    { Icon: MessageSquare, label: "SMS" },
    { Icon: Mail, label: "Email" },
    { Icon: MessageCircle, label: "Chat" },
    { Icon: Video, label: "Video" },
  ];

  const hubX = 320;
  const hubY = 140;
  const startX = 40;
  const spacing = 50;
  const lineStartOffsetY = 11;

  const getY = (i: number, total: number) => {
    const topY = hubY - ((total - 1) * spacing) / 2;
    return topY + i * spacing;
  };

  return (
    <div className="relative w-full max-w-[520px] aspect-[400/280] mx-auto">
      <svg viewBox="0 0 400 280" className="w-full h-full overflow-visible" aria-hidden="true">
        <defs>
          <radialGradient id="commHubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00DEC4" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#00DEC4" stopOpacity="0" />
          </radialGradient>
          <filter id="particleGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Flow lines — layered teal glow */}
        {channels.map((_, i) => {
          // Shift line start down so it visually centers with the icon/label row
          const sy = getY(i, channels.length) + lineStartOffsetY;
          const d = `M ${startX + 30} ${sy} C ${startX + 120} ${sy}, ${hubX - 100} ${hubY}, ${hubX - 30} ${hubY}`;
          return (
            <g key={i}>
              <path d={d} stroke="#70F5E3" strokeOpacity="0.18" strokeWidth="5" fill="none" filter="url(#lineGlow)" />
              <path d={d} stroke="#40EBD8" strokeOpacity="0.35" strokeWidth="2.5" fill="none" />
              <motion.path
                d={d}
                stroke="#00DEC4"
                strokeOpacity="0.9"
                strokeWidth="1.4"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              />
            </g>
          );
        })}

        {/* Particles on each line */}
        {!reduced && channels.map((_, i) => {
          const sy = getY(i, channels.length) + lineStartOffsetY;
          return [0, 1].map((p) => (
            <motion.circle
              key={`p-${i}-${p}`}
              r="3"
              fill="#00DEC4"
              filter="url(#particleGlow)"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: i * 0.3 + p * 0.9,
                ease: "linear",
              }}
              style={{
                offsetPath: `path("M ${startX + 30} ${sy} C ${startX + 120} ${sy}, ${hubX - 100} ${hubY}, ${hubX - 30} ${hubY}")`,
              } as any}
            />
          ));
        })}

        {/* Hub glow */}
        <circle cx={hubX} cy={hubY} r="70" fill="url(#commHubGlow)" />

        {/* Hub pulse rings */}
        {!reduced && (
          <motion.circle cx={hubX} cy={hubY} r="42" fill="none" stroke="#00DEC4" strokeWidth="0.8"
            animate={{ r: [42, 60], opacity: [0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
        )}

        {/* Hub node — larger */}
        <motion.circle cx={hubX} cy={hubY} r="40" fill="hsl(170 100% 43%)"
          animate={reduced ? {} : { r: [40, 43, 40], opacity: [1, 0.9, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <text x={hubX} y={hubY - 3} textAnchor="middle" fontSize="13" fontWeight="700" fill="hsl(226 60% 12%)">Borna AI</text>
        <text x={hubX} y={hubY + 12} textAnchor="middle" fontSize="9" fill="hsl(226 60% 12%)" opacity="0.75">Unified Stream</text>
      </svg>

      {/* Channel icons — compact, label inline aligned to line origin */}
      {channels.map((ch, i) => {
        const sy = getY(i, channels.length);
        const pctTop = (sy / 280) * 100;
        return (
          <motion.div
            key={ch.label}
            className="absolute flex items-center gap-2"
            style={{ left: 0, top: `${pctTop}%`, transform: "translateY(-50%)" }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass-panel flex items-center justify-center border border-primary/40 shadow-[0_0_14px_-4px_hsla(170,100%,43%,0.45)]" aria-label={ch.label}>
              <ch.Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-primary" strokeWidth={1.5} />
            </div>
            <span className="text-[11px] sm:text-xs font-medium text-foreground/80 leading-none">{ch.label}</span>
          </motion.div>
        );
      })}

      {/* AI Processing chip */}
      <motion.div
        className="absolute flex items-center gap-1.5 text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full bg-primary/15 text-primary border border-primary/40 shadow-[0_0_18px_-4px_hsla(170,100%,43%,0.55)] backdrop-blur-sm"
        style={{ right: "0%", top: "8%" }}
        animate={reduced ? {} : { opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> AI Processing
      </motion.div>
    </div>
  );
};

/* ============================================================
   SECTION 3 — Disconnected Streams
   ============================================================ */
const DisconnectedStreams = () => {
  const channels = [
    { Icon: Phone, label: "Calls" },
    { Icon: MessageSquare, label: "SMS" },
    { Icon: Mail, label: "Email" },
    { Icon: MessageCircle, label: "Chat" },
    { Icon: Video, label: "Video" },
  ];
  return (
    <div className="max-w-md mx-auto" aria-hidden="true">
      <svg viewBox="0 0 300 220" className="w-full">
        {channels.map((_, i) => {
          const y = 22 + i * 44;
          return (
            <g key={i}>
              <line x1="50" y1={y} x2={140 + (i % 2 === 0 ? 20 : 0)} y2={y} stroke="#00DEC4" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="6 4" />
              {i % 3 === 0 && (
                <text x={150 + (i % 2 === 0 ? 20 : 0)} y={y + 4} fontSize="10" fill="rgba(255,100,100,0.5)">✕</text>
              )}
            </g>
          );
        })}
      </svg>
      {channels.map((ch, i) => {
        const y = 22 + i * 44;
        const pctTop = (y / 220) * 100;
        return (
          <div key={ch.label} className="absolute flex items-center" style={{ left: "4%", top: `${pctTop}%`, transform: "translateY(-50%)" }}>
            <div className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center border border-dashed border-muted-foreground/30">
              <ch.Icon className="w-3.5 h-3.5 text-muted-foreground/40" strokeWidth={1.5} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ============================================================
   SECTION 4 — Before/After
   ============================================================ */
const BeforeAfterComm = () => {
  const reduced = useReducedMotion();
  const channels = [Phone, MessageSquare, Mail, MessageCircle];
  return (
    <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center">
      {/* Before */}
      <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
        <div className="flex justify-center gap-4 mb-4">
          {channels.map((Icon, i) => (
            <div key={i} className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center border border-dashed border-muted-foreground/30">
              <Icon className="w-4 h-4 text-muted-foreground/40" strokeWidth={1.5} />
            </div>
          ))}
        </div>
        <svg viewBox="0 0 200 40" className="w-full h-10" aria-hidden="true">
          {channels.map((_, i) => {
            const x = 25 + i * 50;
            return <line key={i} x1={x} y1="5" x2={x} y2="35" stroke="#00DEC4" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 3" />;
          })}
        </svg>
        <p className="text-center text-xs uppercase tracking-wider text-muted-foreground mt-2">Disconnected Channels</p>
      </div>

      <ArrowRight className="hidden md:block w-8 h-8 text-primary/60 mx-auto" />
      <div className="md:hidden h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* After */}
      <div className="rounded-2xl border border-primary/30 bg-card/40 p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsla(170,100%,43%,0.08),transparent_70%)]" />
        <div className="relative">
          <svg viewBox="0 0 200 160" className="w-full h-44 md:h-52" aria-hidden="true">
            {channels.map((_, i) => {
              const angle = (i / channels.length) * Math.PI * 2 - Math.PI / 2;
              const x = 100 + 60 * Math.cos(angle);
              const y = 80 + 60 * Math.sin(angle);
              return (
                <g key={i}>
                  <line x1="100" y1="80" x2={x} y2={y} stroke="#00DEC4" strokeOpacity="0.55" strokeWidth="1.2" />
                  <circle cx={x} cy={y} r="9" fill="hsla(170,100%,43%,0.18)" stroke="#00DEC4" strokeWidth="1.2" />
                  {!reduced && (
                    <motion.circle r="3" fill="#00DEC4" filter="url(#particleGlow)"
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "100%" }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6, ease: "linear" }}
                      style={{ offsetPath: `path("M ${x} ${y} L 100 80")` } as any}
                    />
                  )}
                </g>
              );
            })}
            <circle cx="100" cy="80" r="22" fill="hsl(170 100% 43%)" />
            <text x="100" y="84" textAnchor="middle" fontSize="11" fontWeight="700" fill="hsl(226 60% 12%)">Borna</text>
          </svg>
          <p className="text-center text-sm uppercase tracking-wider text-primary mt-2 font-medium">Unified in Borna</p>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   SECTION 9 — Live Activity Nodes
   ============================================================ */
const LiveActivityNodes = () => {
  const reduced = useReducedMotion();
  const nodePositions = [
    { x: 80, y: 60 }, { x: 200, y: 40 }, { x: 300, y: 70 },
    { x: 120, y: 140 }, { x: 240, y: 130 }, { x: 160, y: 90 },
    { x: 280, y: 160 }, { x: 60, y: 170 },
  ];
  const connections = [
    [0, 5], [1, 5], [2, 4], [3, 5], [4, 6], [5, 1], [3, 7], [0, 3],
  ];
  return (
    <svg viewBox="0 0 380 210" className="w-full max-w-lg mx-auto" aria-hidden="true">
      {connections.map(([a, b], i) => (
        <line key={i} x1={nodePositions[a].x} y1={nodePositions[a].y} x2={nodePositions[b].x} y2={nodePositions[b].y}
          stroke="#00DEC4" strokeOpacity="0.2" strokeWidth="0.8" />
      ))}
      {nodePositions.map((pos, i) => (
        <g key={i}>
          <circle cx={pos.x} cy={pos.y} r="10" fill="hsla(170,100%,43%,0.15)" stroke="#00DEC4" strokeWidth="0.8" />
          {!reduced && (
            <motion.circle cx={pos.x} cy={pos.y} r="10" fill="none" stroke="#00DEC4" strokeWidth="1.2"
              animate={{ r: [10, 18], opacity: [0.6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.8, repeatDelay: nodePositions.length * 0.8 - 1.2 }}
            />
          )}
        </g>
      ))}
    </svg>
  );
};

/* ============================================================
   PAGE
   ============================================================ */
const channelCards = [
  { Icon: Phone, badge: "Voice", title: "Calls & Voice Communication", body: "Manage inbound and outbound patient calls, track call history, and never miss an incoming inquiry. Every call is logged against the patient's unified record." },
  { Icon: MessageSquare, badge: "SMS", title: "SMS & Patient Messaging", body: "Send and receive text messages, automate appointment reminders and confirmations, and respond to patient inquiries at the speed they expect." },
  { Icon: Mail, badge: "Email", title: "Email Communication", body: "Manage email interactions from patients, centralize conversation threads, and ensure every email is associated with the correct patient record." },
  { Icon: MessageCircle, badge: "Chat", title: "Chat & Web Messaging", body: "Engage patients through live chat on your website or messaging platform — capturing real-time inquiries and routing them into the unified stream instantly." },
  { Icon: Video, badge: "Video", title: "Video Communication", body: "Support virtual consultations and telehealth interactions — all tracked and logged within the same unified communication system." },
];

const aiCapabilities = [
  { Icon: Zap, title: "Automated Responses", body: "AI handles routine communication — appointment confirmations, reminders, and follow-ups — without manual effort, across all channels simultaneously." },
  { Icon: Activity, title: "Sentiment Analysis", body: "The AI layer reads patient tone and sentiment across messages and calls, flagging urgent or at-risk interactions for immediate staff attention." },
  { Icon: BarChart3, title: "Communication Quality Insights", body: "Performance metrics on response times, interaction patterns, and patient engagement — surfaced automatically for continuous improvement." },
];

const insightTypes = [
  { Icon: Activity, title: "Patient Sentiment", body: "Understand how patients feel across interactions — and identify patterns that signal satisfaction or risk." },
  { Icon: Network, title: "Interaction Patterns", body: "Discover which channels patients prefer, when they reach out, and how frequently — to optimize your communication approach." },
  { Icon: BarChart3, title: "Response Performance", body: "Measure how quickly and effectively your team responds across every channel — and track improvement over time." },
];

const howItWorksSteps = [
  { num: 1, title: "Capture", Icon: Target, desc: "All patient communication is captured across every channel the moment it occurs." },
  { num: 2, title: "Centralize", Icon: Database, desc: "Every interaction is centralized into one unified view with full patient context." },
  { num: 3, title: "Analyze", Icon: Sparkles, desc: "The AI layer processes communication for sentiment, patterns, and actionable signals." },
  { num: 4, title: "Automate", Icon: Zap, desc: "Automated responses, workflows, and routing rules are triggered based on what was detected." },
  { num: 5, title: "Improve", Icon: TrendingUp, desc: "Communication insights feed back into strategy, continuously improving patient engagement." },
];

const keyTakeaways = [
  { Icon: Layers, text: "Borna unifies all 5 patient communication channels into one intelligent system" },
  { Icon: Sparkles, text: "AI enhances every interaction through automation, sentiment analysis, and insights" },
  { Icon: Database, text: "Every conversation becomes structured data that drives platform-wide decisions" },
  { Icon: Heart, text: "Unified communication improves patient engagement, retention, and practice growth" },
];

const faqs = [
  { q: "What is omnichannel communication in healthcare?", a: "Omnichannel communication in healthcare is the integration of all patient communication channels — calls, SMS, email, chat, and video — into one unified system. Every interaction is captured, tracked, and actionable regardless of which channel the patient uses." },
  { q: "Why is unified communication important for healthcare practices?", a: "Unified communication ensures no patient inquiry is missed, improves response times, provides full visibility across all interactions, and enables AI-powered automation that individual channel tools cannot provide — directly improving patient satisfaction and practice revenue." },
  { q: "Does Borna support AI communication automation?", a: "Yes. Borna's Communication Layer includes AI-powered automation for responses across calls, messages, and emails, along with sentiment analysis of patient interactions and performance insights into communication quality." },
  { q: "What communication channels does Borna support?", a: "Borna supports voice calls, SMS messaging, email, live chat and web messaging, and video communication — all unified into one centralized platform with full context on every patient interaction." },
  { q: "How does the Communication Layer connect to the rest of the Borna platform?", a: "Communication data flows directly into the CRM for patient lifecycle tracking, into analytics for performance insights, and into the AI engine for automation triggers — making the Communication Layer the data foundation for the entire Borna ecosystem." },
];

const CommunicationLayerPage = () => {
  const reduced = useReducedMotion();

  return (
    <PageWrapper>
      <Helmet>
        <title>Healthcare Communication Platform | Omnichannel Patient Communication | Borna AI</title>
        <meta name="description" content="Borna AI's Communication Layer unifies calls, SMS, chat, email, and video into one platform with AI-powered automation and patient engagement insights." />
        <link rel="canonical" href="https://borna.ai/ecosystem/communication" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", name: "Healthcare Communication Platform", description: "Omnichannel healthcare communication system powered by AI." })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Borna Communication Layer", applicationCategory: "HealthApplication", description: "Omnichannel communication system with AI automation." })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "TechArticle", headline: "Healthcare Communication Platform", description: "Overview of Borna AI communication layer and omnichannel system." })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://borna.ai" },
            { "@type": "ListItem", position: 2, name: "Ecosystem", item: "https://borna.ai/ecosystem" },
            { "@type": "ListItem", position: 3, name: "Communication Layer", item: "https://borna.ai/ecosystem/communication" },
          ],
        })}</script>
      </Helmet>

      {/* BREADCRUMB */}
      <div className="container mx-auto px-4 md:px-6 pt-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/ecosystem">Ecosystem</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage className="text-primary">Communication Layer</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsla(170,100%,43%,0.14),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block glass-panel px-3 py-1 text-xs font-medium text-primary mb-5 uppercase tracking-wider">
                Communication Layer
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] text-foreground mb-5">
                Omnichannel healthcare communication platform
              </h1>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4 max-w-xl">
                The Borna AI Communication Layer connects all patient communication channels — including calls, SMS, chat, email, and video — into one unified system.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-7 max-w-xl">
                With AI-powered automation and real-time insights, healthcare practices can manage every interaction seamlessly and never miss a patient connection.
              </p>
              <div className="flex flex-row items-center gap-2 sm:gap-3">
                <Link to="/products/borna-connect" className="gradient-btn text-sm sm:text-base px-4 sm:px-7 py-2.5 sm:py-3 whitespace-nowrap">
                  Explore Borna Connect <ArrowRight className="inline w-4 h-4 ml-1" />
                </Link>
                <Link to="/demo" className="ghost-btn text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3 whitespace-nowrap">
                  Request Demo
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <ConvergenceHero />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — DEFINITION */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-5">What is a healthcare communication platform?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A healthcare communication platform is a system that centralizes all patient interactions across multiple channels, enabling providers to manage conversations, automate responses, and improve engagement.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Omnichannel communication ensures that every interaction — regardless of channel — is captured, tracked, and actionable.
            </p>
            <div className="flex flex-wrap justify-evenly items-start gap-6 sm:gap-10 mb-6">
              {[
                { Icon: Phone, label: "Calls" },
                { Icon: MessageSquare, label: "SMS" },
                { Icon: Mail, label: "Email" },
                { Icon: MessageCircle, label: "Chat" },
                { Icon: Video, label: "Video" },
              ].map((ch) => (
                <div key={ch.label} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full glass-panel flex items-center justify-center border border-primary/40 shadow-[0_0_14px_-4px_hsla(170,100%,43%,0.45)]">
                    <ch.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" strokeWidth={1.5} aria-label={ch.label} />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground/90">{ch.label}</span>
                </div>
              ))}
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — PROBLEM */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-5">The challenge of fragmented patient communication</h2>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              Most healthcare practices run communication across separate, disconnected systems — one for phone calls, another for SMS, another for email, another for chat. None of these systems talk to each other.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              The result is a fragmented patient experience and constant operational blind spots.
            </p>
            <p className="text-base text-foreground/90 font-medium italic">
              Patients don't switch channels to make things easier for your practice. Your system should handle all of them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — UNIFIED COMMUNICATION */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4">A unified communication layer for healthcare</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Borna brings every communication channel into one system — so every patient inquiry is captured, every conversation is tracked, and every response can be managed from one place.
            </p>
          </motion.div>
          <BeforeAfterComm />
        </div>
      </section>

      {/* SECTION 5 — CHANNELS SUPPORTED */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4">Communication channels unified in one platform</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">Five communication channels — all managed from one unified system, with full context on every patient interaction.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {channelCards.slice(0, 3).map((card, i) => (
              <ChannelCard key={card.badge} card={card} delay={i * 0.1} />
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto mt-5">
            {channelCards.slice(3).map((card, i) => (
              <ChannelCard key={card.badge} card={card} delay={(i + 3) * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — AI COMMUNICATION */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsla(170,100%,43%,0.06),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4">AI-powered communication and automation</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Borna's Communication Layer is not just a channel aggregator — it is an intelligent communication system that processes every interaction and generates insights.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {aiCapabilities.map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-2xl border border-border/50 bg-card/40 p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-primary/30 mx-auto mb-4">
                  <cap.Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{cap.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{cap.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — DATA & INSIGHTS */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4">Turning conversations into insights</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Every communication that flows through Borna becomes data — patient sentiment, interaction frequency, response performance, and channel preferences.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {insightTypes.map((ins, i) => (
              <motion.div key={ins.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-2xl border border-border/50 bg-card/40 p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-primary/30 mx-auto mb-4">
                  <ins.Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{ins.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{ins.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — WORKFLOW INTEGRATION */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4">Integrated with the entire Borna ecosystem</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Communication in Borna is not a standalone function — it is the data source that feeds every other layer of the platform. Every patient interaction flows directly into CRM, analytics, and the AI engine.
              </p>
              <Link to="/ecosystem" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
                Explore the full ecosystem <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <div>
              <svg viewBox="0 0 400 80" className="w-full" aria-hidden="true">
                {[
                  { x: 40, label: "Communication", Icon: MessageSquare },
                  { x: 160, label: "CRM", Icon: Users },
                  { x: 260, label: "Analytics", Icon: BarChart3 },
                  { x: 360, label: "AI Engine", Icon: Cpu },
                ].map((node, i, arr) => (
                  <g key={node.label}>
                    <circle cx={node.x} cy={40} r={i === 0 ? 16 : 12} fill={i === 0 ? "hsl(170 100% 43%)" : "hsla(170,100%,43%,0.15)"} stroke="#00DEC4" strokeWidth={i === 0 ? 0 : 0.8} />
                    <text x={node.x} y={70} textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.6)">{node.label}</text>
                    {i < arr.length - 1 && (
                      <line x1={node.x + (i === 0 ? 16 : 12)} y1={40} x2={arr[i + 1].x - 12} y2={40} stroke="#00DEC4" strokeOpacity="0.4" strokeWidth="1" />
                    )}
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — REAL-TIME OPERATIONS */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4">Real-time communication management</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              The moment a patient reaches out, the interaction is captured, routed, and made actionable. No batch processing, no delays, no gaps.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { Icon: Zap, title: "Instant Response Handling", body: "Patient inquiries are captured and made available for response the moment they arrive — across all channels." },
              { Icon: Eye, title: "Real-Time Conversation Tracking", body: "Every active conversation is visible in the unified system — with full context from previous interactions." },
              { Icon: Target, title: "Immediate Action on Interactions", body: "The system can trigger automated responses, routing rules, or staff alerts the moment specific interaction patterns are detected." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-2xl border border-border/50 bg-card/40 p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-primary/30 mx-auto mb-4">
                  <item.Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
          <LiveActivityNodes />
        </div>
      </section>

      {/* SECTION 10 — BUSINESS VALUE */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4">Why unified communication matters</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Every missed patient inquiry is a missed opportunity. Every delayed response erodes trust. Borna's Communication Layer eliminates these gaps.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {[
              { Icon: Layers, title: "Unified Communication", sub: "Every channel, one system" },
              { Icon: Heart, title: "Better Engagement", sub: "Faster responses, higher satisfaction" },
              { Icon: TrendingUp, title: "Higher Conversion", sub: "More inquiries become appointments" },
              { Icon: BarChart3, title: "Practice Growth", sub: "Retained patients, increased production" },
            ].map((stage, i) => (
              <motion.div key={stage.title} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center border border-primary/40 mb-3 shadow-[0_0_14px_-4px_hsla(170,100%,43%,0.45)]">
                  <stage.Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-semibold text-foreground mb-1">{stage.title}</span>
                <span className="text-xs text-muted-foreground leading-relaxed">{stage.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — HOW IT WORKS */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4">How the communication layer works</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">Five steps — from the moment a patient reaches out to the moment the system delivers an actionable outcome.</p>
          </motion.div>
          <div className="relative max-w-6xl mx-auto">
            {/* glowing teal connector line — horizontal on md+, vertical on mobile */}
            <div className="hidden md:block absolute left-[8%] right-[8%] top-[38px] h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#00DEC4] to-transparent shadow-[0_0_14px_2px_hsla(170,100%,43%,0.5)]" />
            <div className="md:hidden absolute top-0 bottom-0 left-[34px] w-[2px] rounded-full bg-gradient-to-b from-transparent via-[#00DEC4] to-transparent shadow-[0_0_14px_2px_hsla(170,100%,43%,0.5)]" />
            <div className="flex flex-col md:flex-row items-stretch md:items-start justify-between gap-8 md:gap-4 relative">
              {howItWorksSteps.map((step, i) => (
                <div key={step.num} className="flex md:flex-col items-start md:items-center gap-4 md:gap-3 flex-1" aria-label={`Step ${step.num}: ${step.title}`}>
                  <motion.div initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.35 }}
                    className="flex flex-col items-center gap-2 text-center md:w-full"
                  >
                    <span className="text-xs font-bold text-primary">{step.num}</span>
                    <div className="relative w-14 h-14 rounded-full bg-card border border-primary/40 flex items-center justify-center shadow-[0_0_14px_-4px_hsla(170,100%,43%,0.5)]">
                      <step.Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-semibold text-foreground mt-1">{step.title}</span>
                    <span className="text-xs text-muted-foreground max-w-[180px] leading-relaxed">{step.desc}</span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 — KEY TAKEAWAYS */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-10 text-center">Key takeaways</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {keyTakeaways.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <item.Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                <p className="text-sm text-foreground/90 font-medium leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13 — FAQ */}
      <StandardFAQ items={faqs} />

      {/* SECTION 14 — FINAL CTA */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(170,100%,43%,0.12),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-5">
              Connect every conversation in one platform.
            </h2>
            <p className="text-foreground/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Borna AI ensures that every patient interaction — across every channel — is captured, managed, and optimized. Never miss a patient connection again.
            </p>
            <div className="cta-row">
              <Link to="/demo" className="gradient-btn text-sm sm:text-base px-4 sm:px-7 py-2.5 sm:py-3 whitespace-nowrap">Request Demo</Link>
              <Link to="/products/borna-connect" className="ghost-btn text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3 whitespace-nowrap">
                Explore Borna Connect <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

/* Channel Card component with hover pulse */
const ChannelCard = ({ card, delay }: { card: typeof channelCards[0]; delay: number }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="rounded-2xl border border-border/50 bg-card/40 p-6 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsla(170,100%,43%,0.3)] hover:-translate-y-0.5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsla(170,100%,43%,0.04),transparent_70%)] opacity-0 transition-opacity duration-300" style={{ opacity: hovered ? 1 : 0 }} />
      <div className="relative">
        <span className="inline-flex items-center text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-primary/15 text-primary mb-4">
          {card.badge}
        </span>
        <div className="relative w-10 h-10 rounded-full glass-panel flex items-center justify-center border border-primary/30 mb-4" aria-label={card.badge}>
          <card.Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
          {hovered && (
            <motion.div
              className="absolute inset-0 rounded-full border border-primary/50"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          )}
        </div>
        <h3 className="text-sm font-semibold text-foreground mb-2">{card.title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{card.body}</p>
      </div>
    </motion.div>
  );
};

export default CommunicationLayerPage;
