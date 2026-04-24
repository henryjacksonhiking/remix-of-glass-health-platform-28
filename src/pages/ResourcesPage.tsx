import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  FileText,
  LineChart,
  Sparkles,
  Heart,
  MessageSquare,
  Users,
  Brain,
  TrendingUp,
  Search,
  Compass,
  CheckSquare,
  Plug,
  Target,
  ArrowRight,
  Layers,
  Lightbulb,
  RefreshCcw,
  Zap,
  ChevronDown,
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import StandardFAQ from "@/components/sections/StandardFAQ";

/* ------------------------------- Hero Visual ------------------------------- */

const FloatingCard = ({
  category,
  title,
  delay,
  className,
}: {
  category: string;
  title: string;
  delay: number;
  className?: string;
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={
        reduce
          ? { opacity: 1, y: 0 }
          : { opacity: 1, y: [0, -10, 0] }
      }
      transition={
        reduce
          ? { duration: 0.5, delay }
          : {
              opacity: { duration: 0.6, delay },
              y: { duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay },
            }
      }
      className={`glass-panel p-4 w-56 ${className ?? ""}`}
      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.35)" }}
    >
      <span className="inline-block text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary font-medium">
        {category}
      </span>
      <h4 className="text-sm font-medium text-foreground mt-2 leading-snug">{title}</h4>
      <div className="h-px bg-glass-border my-3" />
      <span className="text-xs text-primary font-medium inline-flex items-center gap-1">
        Read more <ArrowRight className="w-3 h-3" />
      </span>
    </motion.div>
  );
};

const HeroVisual = () => {
  const reduce = useReducedMotion();
  return (
    <div className="relative w-full h-[420px] hidden md:block">
      {/* Connection SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 420" fill="none">
        <defs>
          <radialGradient id="hub-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="250" cy="210" r="40" fill="url(#hub-grad)" />
        <circle cx="250" cy="210" r="6" fill="hsl(var(--primary))" />
        {[
          [80, 90],
          [420, 70],
          [70, 330],
          [430, 320],
        ].map(([x, y], i) => (
          <g key={i}>
            <line
              x1="250"
              y1="210"
              x2={x}
              y2={y}
              stroke="hsl(var(--primary))"
              strokeOpacity="0.25"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
            {!reduce && (
              <circle r="2.5" fill="hsl(var(--primary))">
                <animateMotion
                  dur={`${4 + i}s`}
                  repeatCount="indefinite"
                  path={`M250 210 L${x} ${y}`}
                />
              </circle>
            )}
          </g>
        ))}
      </svg>

      <div className="absolute left-2 top-4">
        <FloatingCard category="Patient Engagement" title="Reduce no-shows with smart reminders" delay={0} />
      </div>
      <div className="absolute right-2 top-0">
        <FloatingCard category="AI in Healthcare" title="Automating routine clinic workflows" delay={0.4} />
      </div>
      <div className="absolute left-0 bottom-4">
        <FloatingCard category="CRM" title="Patient lifecycle, end-to-end" delay={0.8} />
      </div>
      <div className="absolute right-2 bottom-2">
        <FloatingCard category="Communication" title="One inbox for every channel" delay={1.2} />
      </div>
    </div>
  );
};

/* ---------------------------- Section components --------------------------- */

const categories = [
  {
    icon: Heart,
    badge: "Patient Engagement",
    title: "Patient Engagement",
    desc: "Best practices for improving patient communication, retention, and overall experience at every touchpoint.",
  },
  {
    icon: MessageSquare,
    badge: "Communication",
    title: "Healthcare Communication",
    desc: "Strategies for managing calls, SMS, email, and chat — and improving response times across every channel.",
  },
  {
    icon: Users,
    badge: "CRM & Management",
    title: "CRM & Practice Management",
    desc: "Guides on managing patient relationships, tracking the full lifecycle, and improving workflow efficiency.",
  },
  {
    icon: Brain,
    badge: "AI & Automation",
    title: "AI in Healthcare",
    desc: "Applications of AI in healthcare operations — automation strategies, decision support, and future trends.",
  },
  {
    icon: TrendingUp,
    badge: "Analytics & Growth",
    title: "Analytics & Growth",
    desc: "Frameworks for tracking performance, measuring marketing ROI, and identifying patient acquisition opportunities.",
  },
];

const featured = [
  {
    badge: "Patient Engagement",
    title: "How to Reduce Patient No-Shows with Automated Communication",
    desc: "Discover how automated SMS reminders, confirmation workflows, and personalized follow-ups dramatically reduce missed appointments and improve practice revenue.",
    read: "5 min read",
    accent: "hsl(var(--primary))",
  },
  {
    badge: "AI & Automation",
    title: "The Role of AI in Streamlining Dental Practice Operations",
    desc: "Explore how AI-powered tools are helping dental practices automate scheduling, follow-ups, and patient communications — reducing staff workload without sacrificing the patient experience.",
    read: "7 min read",
    accent: "hsl(var(--primary))",
  },
  {
    badge: "Communication",
    title: "Building a Unified Communication System for Your Medical Clinic",
    desc: "Learn how centralizing calls, SMS, email, and chat into one system improves patient satisfaction and ensures no interaction ever gets missed.",
    read: "6 min read",
    accent: "hsl(var(--primary))",
  },
];

const latest = [
  { badge: "CRM & Management", title: "5 Ways Healthcare CRM Improves Patient Retention" },
  { badge: "Analytics & Growth", title: "Tracking Marketing ROI in Dental Practices: A Practical Guide" },
  { badge: "AI & Automation", title: "Workflow Automation in Medical Clinics: Where to Start" },
  { badge: "Patient Engagement", title: "Digital Intake Forms: Why Patients Prefer Them" },
  { badge: "Communication", title: "SMS vs Email: Which Channel Works Best for Patient Reminders?" },
  { badge: "AI & Automation", title: "Predictive Scheduling: How AI Reduces No-Show Rates" },
];

const valueBlocks = [
  { icon: Layers, title: "Simplify complex processes", desc: "Clear, practical guides that make technology understandable — not intimidating." },
  { icon: Lightbulb, title: "Provide actionable insights", desc: "Every resource leads to something you can implement in your practice today." },
  { icon: Zap, title: "Support digital transformation", desc: "From concept to implementation — resources aligned with real platform capabilities." },
];

const steps = [
  { icon: Search, label: "Identify", desc: "Identify the challenge your practice is facing" },
  { icon: Compass, label: "Explore", desc: "Explore resources relevant to your specific topic" },
  { icon: CheckSquare, label: "Apply", desc: "Apply insights and strategies to your practice" },
  { icon: Plug, label: "Implement", desc: "Leverage Borna's platform to implement solutions" },
];

const differentiators = [
  { icon: Target, title: "Focused on Real Challenges", desc: "Content based on actual operational problems healthcare practices face — not theoretical use cases." },
  { icon: ArrowRight, title: "Aligned with Practical Solutions", desc: "Every insight connects to something you can implement — not just read and forget." },
  { icon: Plug, title: "Connected to the Platform", desc: "Resources are mapped to Borna's actual capabilities — knowledge leads directly to implementation." },
  { icon: RefreshCcw, title: "Continuously Updated", desc: "As healthcare technology evolves, our resources evolve — new content added regularly across all categories." },
];

const takeaways = [
  "Borna provides educational resources across all key healthcare technology topics",
  "Content covers patient engagement, communication, CRM, AI, and analytics",
  "Resources help practices improve operations and make better decisions",
  "Every insight connects directly to real Borna platform capabilities",
];

const faqs = [
  {
    q: "What are healthcare technology resources?",
    a: "Healthcare technology resources include educational materials — guides, articles, and insights — that help providers understand and implement tools for patient engagement, communication, analytics, and automation.",
  },
  {
    q: "Why are patient engagement strategies important?",
    a: "Patient engagement strategies improve patient satisfaction, treatment acceptance, appointment retention, and long-term loyalty — directly impacting both practice revenue and patient outcomes.",
  },
  {
    q: "How can AI improve healthcare operations?",
    a: "AI can automate repetitive tasks like scheduling follow-ups and routing communications, analyze patient behavior and practice performance, and surface actionable insights — reducing staff workload and improving practice efficiency.",
  },
  {
    q: "Are Borna resources free to access?",
    a: "Yes. All resources on this page are freely accessible. Subscribe for updates to receive new content as it is published.",
  },
  {
    q: "How are Borna resources connected to the platform?",
    a: "Every resource is aligned with a real capability in the Borna platform — so the knowledge you gain from reading directly connects to tools you can use. Resources are not just educational content — they are a pathway to implementation.",
  },
];

/* ------------------------------ Latest Insights ----------------------------- */

const LatestGrid = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {latest.map((item, i) => (
        <motion.a
          key={item.title}
          href="#"
          aria-label={`Read article: ${item.title}`}
          initial={{ opacity: 0, y: 16 }}
          animate={visible || reduce ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: reduce ? 0 : i * 0.1, ease: "easeOut" }}
          className="glass-panel p-5 block hover:bg-glass-hover transition-colors group"
        >
          <span className="inline-block text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary font-medium">
            {item.badge}
          </span>
          <h4 className="text-sm font-medium text-foreground mt-3 leading-snug min-h-[2.5rem]">
            {item.title}
          </h4>
          <div className="flex items-center justify-between mt-4 text-xs">
            <span className="text-muted-foreground">Coming soon</span>
            <span className="text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Read <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

/* ----------------------------------- FAQ ----------------------------------- */

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`glass-panel overflow-hidden transition-all ${isOpen ? "ring-1 ring-primary/30" : ""}`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
            >
              <span className="text-sm md:text-base font-medium text-foreground">{f.q}</span>
              <ChevronDown
                className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`}
              />
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

/* ----------------------------- Knowledge → Flow ---------------------------- */

const KnowledgeFlow = () => {
  const reduce = useReducedMotion();
  return (
    <div className="glass-panel p-6 md:p-8">
      <svg viewBox="0 0 600 160" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="kf-hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.55" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
          <filter id="kf-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* Lines */}
        <line x1="130" y1="80" x2="240" y2="80" stroke="hsl(var(--primary))" strokeOpacity="0.5" strokeWidth="1.25" strokeDasharray="3 5" />
        <line x1="360" y1="80" x2="470" y2="80" stroke="hsl(var(--primary))" strokeOpacity="0.5" strokeWidth="1.25" strokeDasharray="3 5" />
        {!reduce && (
          <>
            <circle r="3.5" fill="hsl(var(--primary))">
              <animateMotion dur="3s" repeatCount="indefinite" path="M130 80 L240 80" />
            </circle>
            <circle r="3.5" fill="hsl(var(--primary))">
              <animateMotion dur="3s" repeatCount="indefinite" path="M360 80 L470 80" />
            </circle>
          </>
        )}
        {/* Nodes */}
        <circle cx="80" cy="80" r="46" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeOpacity="0.45" strokeWidth="1.25" />
        <circle cx="300" cy="80" r="64" fill="url(#kf-hub)" filter="url(#kf-glow)" />
        <circle cx="300" cy="80" r="50" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeOpacity="0.7" strokeWidth="1.5" />
        <circle cx="520" cy="80" r="46" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeOpacity="0.45" strokeWidth="1.25" />
        {/* Labels */}
        <text x="80" y="85" textAnchor="middle" className="fill-foreground" fontSize="14" fontWeight="600">Knowledge</text>
        <text x="300" y="76" textAnchor="middle" className="fill-foreground" fontSize="15" fontWeight="700">Borna AI</text>
        <text x="300" y="92" textAnchor="middle" className="fill-muted-foreground" fontSize="11" fontWeight="500">Platform</text>
        <text x="520" y="85" textAnchor="middle" className="fill-foreground" fontSize="14" fontWeight="600">Outcomes</text>
      </svg>
      <div className="grid grid-cols-3 gap-3 mt-5 text-center">
        <div>
          <p className="text-sm md:text-base text-foreground font-medium">Insights & Guides</p>
        </div>
        <div>
          <p className="text-sm md:text-base text-primary font-semibold">Borna AI Platform</p>
        </div>
        <div>
          <p className="text-sm md:text-base text-foreground font-medium">Better Operations</p>
        </div>
      </div>
    </div>
  );
};

/* ----------------------------------- Page ---------------------------------- */

const ResourcesPage = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Healthcare Resources | Borna AI",
      description: "Educational healthcare resources and insights for patient engagement, CRM, and AI.",
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Borna AI Resources",
      description: "Collection of healthcare articles, guides, and insights.",
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
        <title>Healthcare AI Resources, Guides & Insights | Borna AI</title>
        <meta
          name="description"
          content="Explore Borna AI's healthcare resources, including guides on patient engagement, communication, CRM, and AI automation for modern practices."
        />
        {jsonLd.map((b, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(b)}</script>
        ))}
      </Helmet>

      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden pt-20 md:pt-24 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-30" style={{ background: "hsl(var(--primary) / 0.25)" }} />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs uppercase tracking-[0.2em] text-primary font-medium"
              >
                Resources & Insights
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="hero-headline text-foreground mt-4 mb-6"
              >
                Healthcare AI resources, insights, and guides
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="body-text mb-4"
              >
                Explore educational resources designed to help healthcare practices improve patient engagement, streamline operations, and leverage AI-driven solutions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="body-text mb-8"
              >
                From communication strategies to workflow optimization, our resources provide practical insights for modern healthcare providers.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-3"
              >
                <a href="#featured" className="gradient-btn text-sm px-5 py-3">Explore articles</a>
                <Link
                  to="/contact"
                  className="text-sm px-5 py-3 rounded-lg border border-glass-border text-foreground/85 hover:bg-glass-hover transition-colors"
                >
                  Subscribe for updates
                </Link>
              </motion.div>
            </div>
            <HeroVisual />
            {/* Mobile fallback */}
            <div className="md:hidden grid grid-cols-1 gap-4">
              <FloatingCard category="Patient Engagement" title="Reduce no-shows with smart reminders" delay={0} />
              <FloatingCard category="AI in Healthcare" title="Automating routine clinic workflows" delay={0.3} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — DEFINITION */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="section-headline text-foreground mb-6">What are healthcare technology resources?</h2>
          <p className="body-text mb-4">
            Healthcare technology resources include educational content such as guides, articles, and insights that help providers understand and implement tools for patient engagement, communication, analytics, and automation.
          </p>
          <p className="body-text">
            These resources support better decision-making and improved operational performance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
            {[
              { icon: BookOpen, label: "Guides" },
              { icon: FileText, label: "Articles" },
              { icon: LineChart, label: "Insights" },
              { icon: Sparkles, label: "AI Resources" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mt-12" />
        </div>
      </section>

      {/* SECTION 3 — CATEGORIES */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="section-headline text-foreground mb-4">Explore resources by category</h2>
            <p className="body-text max-w-xl mx-auto">
              Five topic areas covering the full scope of modern healthcare practice operations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.a
                  key={c.title}
                  href="#"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`glass-panel p-6 hover:bg-glass-hover transition-all group block h-full ${
                    i === 3 ? "lg:col-start-1" : ""
                  } ${i === 4 ? "lg:col-start-2" : ""}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary font-medium">
                      {c.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.desc}</p>
                  <span className="text-xs text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all font-medium">
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 — FEATURED */}
      <section id="featured" className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="section-headline text-foreground mb-4">Featured articles and insights</h2>
            <p className="body-text max-w-xl mx-auto">
              Curated content to help you navigate the most important challenges in modern healthcare practice.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featured.map((f, i) => (
              <motion.a
                key={f.title}
                href="#"
                aria-label={`Read article: ${f.title}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-panel p-6 hover:bg-glass-hover transition-all group flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: f.accent }} />
                <span className="inline-block text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary font-medium self-start">
                  {f.badge}
                </span>
                <h3 className="text-lg font-medium text-foreground mt-4 mb-3 leading-snug">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{f.desc}</p>
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-glass-border">
                  <span className="text-xs text-muted-foreground">{f.read}</span>
                  <span className="text-xs text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read article <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — LATEST INSIGHTS */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="section-headline text-foreground mb-4">Latest insights from Borna AI</h2>
            <p className="body-text max-w-xl mx-auto">
              Regularly updated with new perspectives, practical guides, and healthcare technology analysis.
            </p>
          </div>
          <LatestGrid />
          <div className="text-center mt-10">
            <Link
              to="/resources"
              className="inline-block text-sm px-5 py-3 rounded-lg border border-glass-border text-foreground/85 hover:bg-glass-hover transition-colors"
            >
              View all resources
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — EDUCATIONAL VALUE */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative">
          <div className="text-center mb-12">
            <h2 className="section-headline text-foreground mb-4">Helping healthcare practices make better decisions</h2>
            <p className="body-text max-w-2xl mx-auto mb-3">
              Borna resources are designed to simplify complex healthcare processes, provide actionable insights practitioners can apply immediately, and support the digital transformation of modern practices.
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              According to the National Library of Medicine, access to reliable healthcare information improves decision-making and outcomes across clinical and operational domains.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {valueBlocks.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass-panel p-6"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7 — PLATFORM CONNECTION */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-headline text-foreground mb-6">From insights to implementation</h2>
              <p className="body-text mb-6">
                Borna resources are not just educational content — they are aligned with real platform capabilities. Every insight connects directly to a solution you can implement through the Borna platform.
              </p>
              <Link to="/platform" className="text-sm text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Explore the platform <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <KnowledgeFlow />
          </div>
        </div>
      </section>

      {/* SECTION 8 — HOW TO USE */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="section-headline text-foreground mb-4">How to use Borna resources</h2>
            <p className="body-text max-w-xl mx-auto">A simple process to move from challenge to solution.</p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-5">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass-panel p-6 relative"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-semibold">
                      {i + 1}
                    </div>
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-2">{s.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-primary/30" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 9 — DIFFERENTIATION */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="section-headline text-foreground mb-4">Why Borna resources are different</h2>
            <p className="body-text max-w-2xl mx-auto">
              Most healthcare content is generic, vendor-agnostic, and disconnected from any actual solution. Borna resources are different — every piece of content is grounded in the real operational challenges of healthcare practices and aligned with practical, implementable solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {differentiators.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass-panel p-6"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10 — KEY TAKEAWAYS */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="section-headline text-foreground text-center mb-12">Key takeaways</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {takeaways.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-foreground/90 font-medium leading-relaxed">{t}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — FAQ */}
      <StandardFAQ items={faqs} />

      {/* SECTION 12 — FINAL CTA */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.18), transparent 60%)" }} />
        </div>
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center relative">
          <h2 className="hero-headline text-foreground mb-6">Learn more. Improve more. Grow faster.</h2>
          <p className="body-text mb-8 max-w-xl mx-auto">
            Stay updated with the latest insights in healthcare technology and AI — and discover how Borna's platform turns knowledge into action.
          </p>
          <div className="cta-row">
            <Link to="/contact" className="gradient-btn text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 whitespace-nowrap">Subscribe for updates</Link>
            <Link
              to="/contact"
              className="ghost-btn text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 whitespace-nowrap"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ResourcesPage;
