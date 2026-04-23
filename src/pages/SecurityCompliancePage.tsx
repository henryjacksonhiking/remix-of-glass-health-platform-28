import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Shield, Layers, Lock, Radio, KeyRound, Users, UserCheck,
  CheckCircle2, Phone, MessageSquare, Mail, MessageCircle,
  Network, Server, Activity, Eye, FileText, FolderLock,
  Handshake, TrendingUp, ArrowRight, ChevronDown, ChevronUp
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const SectionWrap = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={cn("relative py-14 md:py-20 overflow-hidden", className)}>
    <div className="container mx-auto px-4 md:px-6">{children}</div>
  </section>
);

/* ─── SC1: Hero Visual: Protected System Core ─── */
const ProtectedCore = () => {
  const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-[420px] mx-auto" aria-label="Protected system core with concentric security boundary rings around Borna AI">
      <defs>
        <radialGradient id="secCoreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(170 100% 43%)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(170 100% 43%)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ring 3 (outermost) */}
      <circle cx="150" cy="150" r="120" fill="none" stroke="hsl(170 100% 43% / 0.25)" strokeWidth="2" className="hidden sm:block" />
      {/* Ring 2 */}
      <circle cx="150" cy="150" r="88" fill="none" stroke="hsl(170 100% 43% / 0.35)" strokeWidth="2" className="hidden sm:block" />
      {/* Ring 1 */}
      <circle cx="150" cy="150" r="60" fill="none" stroke="hsl(170 100% 43% / 0.45)" strokeWidth="2" />

      {/* Slow pulse rings */}
      {[1, 2].map(i => (
        <circle key={i} cx="150" cy="150" r="40" fill="none" stroke="hsl(170 100% 43%)" strokeWidth="1.5" opacity="0">
          {!prefersReduced && (
            <>
              <animate attributeName="r" from="40" to="75" dur="6s" begin={`${i * 3}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.5" to="0" dur="6s" begin={`${i * 3}s`} repeatCount="indefinite" />
            </>
          )}
        </circle>
      ))}

      {/* Core node */}
      <circle cx="150" cy="150" r="40" fill="hsl(170 100% 43% / 0.12)" stroke="hsl(170 100% 43% / 0.8)" strokeWidth="2" />
      <circle cx="150" cy="150" r="56" fill="url(#secCoreGlow)" />
      <text x="150" y="146" textAnchor="middle" fill="hsl(170 100% 43%)" fontSize="14" fontWeight="700">Borna AI</text>
      <text x="150" y="163" textAnchor="middle" fill="hsl(170 100% 60%)" fontSize="10" opacity="0.85">Secure Core</text>

      {/* Floating labels (desktop only) */}
      {[
        { label: "Encrypted", x: 150, y: 18 },
        { label: "Access Controlled", x: 282, y: 150 },
        { label: "Monitored", x: 150, y: 286 },
        { label: "Compliant", x: 18, y: 150 },
      ].map(l => (
        <text key={l.label} x={l.x} y={l.y} textAnchor="middle" fill="hsl(170 100% 43% / 0.7)" fontSize="11" fontWeight="500" className="hidden sm:block">{l.label}</text>
      ))}
    </svg>
  );
};

/* ─── SC1 (Data Flow): Data Flow Through Secure Layers ─── */
const SecureDataFlow = () => {
  const [time, setTime] = useState(0);
  const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  useEffect(() => {
    if (prefersReduced) return;
    let raf: number;
    const tick = () => { setTime(t => t + 0.016); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [prefersReduced]);

  const stages = [
    { label: "Data Input", y: 30, glow: 0.4 },
    { label: "Encryption Layer", y: 90, glow: 1.0 },
    { label: "Secure Storage", y: 150, glow: 0.4 },
    { label: "Access Control", y: 210, glow: 0.4 },
    { label: "Authorized Output", y: 270, glow: 0.4 },
  ];
  const particleY = prefersReduced ? 150 : 30 + ((time * 0.25) % 1) * 240;

  return (
    <svg viewBox="0 0 260 300" className="w-full max-w-[280px] mx-auto" aria-hidden="true">
      {/* Vertical line */}
      <line x1="130" y1="30" x2="130" y2="270" stroke="hsl(170 100% 43% / 0.3)" strokeWidth="1.5" />
      {/* Particle */}
      {!prefersReduced && (
        <circle cx="130" cy={particleY} r="4" fill="hsl(170 100% 43%)" opacity="0.8" />
      )}
      {/* Stages */}
      {stages.map(s => (
        <g key={s.label}>
          <rect x="30" y={s.y - 14} width="200" height="28" rx="6"
            fill={`hsl(170 100% 43% / ${s.glow * 0.1})`}
            stroke={`hsl(170 100% 43% / ${s.glow * 0.5})`} strokeWidth="1.2" />
          <text x="130" y={s.y + 5} textAnchor="middle" fill={`hsl(170 100% 43% / ${0.6 + s.glow * 0.4})`} fontSize="11" fontWeight={s.glow > 0.5 ? "600" : "400"}>{s.label}</text>
        </g>
      ))}
    </svg>
  );
};

/* ─── SC2: Permission Tiers ─── */
const PermissionTiers = () => {
  const tiers = [
    { role: "Practice Owner", access: [true, true, true, true, true] },
    { role: "Clinical Staff", access: [true, true, true, false, false] },
    { role: "Front Desk", access: [true, true, false, false, false] },
  ];
  const capabilities = ["Schedule", "Patients", "Clinical", "Billing", "Admin"];
  return (
    <div className="max-w-lg mx-auto space-y-3" role="img" aria-label="Role-based access control showing Practice Owner with full access, Clinical Staff with partial access, and Front Desk with limited access">
      {tiers.map((tier, i) => (
        <div key={tier.role} className="rounded-xl border border-glass-border bg-glass-bg backdrop-blur-md px-4 sm:px-5 py-3 flex items-center justify-between"
          style={{ opacity: 1 - i * 0.15 }}>
          <span className="text-sm sm:text-base text-foreground font-medium">{tier.role}</span>
          <div className="flex gap-2 sm:gap-3">
            {capabilities.map((cap, ci) => (
              <div key={cap} className="flex flex-col items-center gap-1">
                <div className={cn(
                  "w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2",
                  tier.access[ci]
                    ? "bg-primary/25 border-primary/60"
                    : "bg-transparent border-muted-foreground/40"
                )} />
                <span className="text-[8px] sm:text-[9px] text-muted-foreground">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

/* ─── Infrastructure Grid (Section 9) ─── */
const InfraGrid = () => (
  <svg viewBox="0 0 300 180" className="w-full max-w-sm mx-auto" role="img" aria-label="Stable infrastructure grid showing uniform, reliable system nodes">
    <defs>
      <radialGradient id="gridBg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="hsl(170 100% 43%)" stopOpacity="0.04" />
        <stop offset="100%" stopColor="hsl(170 100% 43%)" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="300" height="180" fill="url(#gridBg)" />
    {Array.from({ length: 5 }).map((_, col) =>
      Array.from({ length: 3 }).map((_, row) => {
        const x = 50 + col * 50;
        const y = 40 + row * 50;
        return (
          <g key={`${col}-${row}`}>
            {col < 4 && <line x1={x} y1={y} x2={x + 50} y2={y} stroke="hsl(170 100% 43% / 0.15)" strokeWidth="0.5" />}
            {row < 2 && <line x1={x} y1={y} x2={x} y2={y + 50} stroke="hsl(170 100% 43% / 0.15)" strokeWidth="0.5" />}
            <circle cx={x} cy={y} r="4" fill="hsl(170 100% 43% / 0.1)" stroke="hsl(170 100% 43% / 0.25)" strokeWidth="0.5" />
          </g>
        );
      })
    )}
  </svg>
);

/* ─── FAQ ─── */
const faqItems = [
  { q: "What is healthcare data security?", a: "Healthcare data security refers to protecting sensitive patient and operational data through encryption, access control, secure infrastructure, and continuous monitoring — applied throughout the entire data lifecycle." },
  { q: "Is Borna AI HIPAA compliant?", a: "Borna is designed to align with HIPAA requirements and healthcare data protection standards — including data privacy, secure handling of patient information, and system auditability. For specific compliance questions, contact our team." },
  { q: "How does Borna secure integrations?", a: "Every external system connection in Borna operates through a controlled boundary — with authentication, validation, and access controls applied at the integration layer. Data exchange is bounded, not open." },
  { q: "How does Borna handle patient data?", a: "Patient data is encrypted in transit and at rest, stored using secure practices, and accessible only through authenticated, role-authorized channels — with governance rules controlling data access and usage." },
  { q: "Is Borna actively monitored for security issues?", a: "Yes. Borna includes system monitoring and anomaly detection processes designed to surface irregular patterns in system activity — with ongoing risk evaluation applied as the platform evolves." },
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
const SecurityCompliancePage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const philosophyCards = [
    { icon: Layers, title: "Data Protection at Every Layer", body: "Security measures are applied at the communication layer, application layer, data layer, and AI layer — not as an afterthought." },
    { icon: Radio, title: "Secure Communication Channels", body: "Every communication channel — calls, SMS, email, chat — is designed to operate through controlled, secure infrastructure." },
    { icon: KeyRound, title: "Controlled System Access", body: "Access to data and system functions is governed by role-based permissions — ensuring the right people see only what they are authorized to see." },
    { icon: Activity, title: "Continuous Monitoring", body: "System activity is monitored on an ongoing basis — with anomaly detection and risk evaluation processes built into platform operations." },
  ];

  const jsonLd = [
    { "@context": "https://schema.org", "@type": "WebPage", name: "Borna AI Security and Compliance", description: "Healthcare data security and compliance overview for Borna AI platform." },
    { "@context": "https://schema.org", "@type": "TechArticle", headline: "Healthcare Data Security and Compliance", description: "Overview of Borna AI security practices, encryption, and compliance readiness." },
    { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Borna AI Platform", applicationCategory: "HealthApplication", description: "Secure healthcare platform with data protection and compliance features." },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://borna.ai" },
      { "@type": "ListItem", position: 2, name: "Platform", item: "https://borna.ai/platform" },
      { "@type": "ListItem", position: 3, name: "Security & Compliance", item: "https://borna.ai/platform/security" },
    ]},
  ];

  return (
    <PageWrapper>
      <Helmet>
        <title>Healthcare Data Security & HIPAA Compliance | Borna AI Platform</title>
        <meta name="description" content="Learn how Borna AI ensures healthcare data security, HIPAA compliance readiness, encryption, access control, and secure integrations across its platform." />
        <link rel="canonical" href="https://borna.ai/platform/security" />
        {jsonLd.map((ld, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(ld)}</script>
        ))}
      </Helmet>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-0">
        <nav aria-label="breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2 opacity-50">/</span>
          <Link to="/platform" className="hover:text-foreground transition-colors">Platform</Link>
          <span className="mx-2 opacity-50">/</span>
          <span className="text-primary font-medium">Security & Compliance</span>
        </nav>
      </div>

      {/* ── SECTION 1: HERO ── */}
      <section ref={heroRef} className="relative pt-6 pb-14 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[120px]" aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={fadeUp} className="order-2 md:order-1">
              <span className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">Security & Compliance</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
                Healthcare data security and compliance at Borna AI
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Borna AI is designed with security, privacy, and compliance at its core. Our platform protects sensitive healthcare data while enabling secure communication, integration, and automation across systems.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="gradient-btn text-sm whitespace-nowrap px-4 sm:px-6 py-2.5 sm:py-3">
                  Contact Security Team
                </Link>
                <Link to="/platform/architecture" className="text-sm font-medium rounded-lg px-4 sm:px-6 py-2.5 sm:py-3 border border-glass-border text-muted-foreground hover:text-foreground hover:border-white/30 transition-all whitespace-nowrap">
                  Explore Architecture →
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={heroInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="order-1 md:order-2 flex justify-center">
              <ProtectedCore />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: DEFINITION ── */}
      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">What is healthcare data security and compliance?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Healthcare data security refers to the protection of sensitive patient and operational data through encryption, access control, and secure infrastructure.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Compliance involves adhering to regulations and standards such as HIPAA to ensure privacy, integrity, and proper handling of healthcare information.
          </p>
          <div className="flex justify-center gap-12 mb-8">
            <Lock className="w-5 h-5 text-primary opacity-60" />
            <CheckCircle2 className="w-5 h-5 text-primary opacity-60" />
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        </motion.div>
      </SectionWrap>

      {/* ── SECTION 3: SECURITY PHILOSOPHY ── */}
      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Security by design</h2>
          <p className="text-muted-foreground">Security is not a feature added to Borna — it is embedded in how every layer of the platform is designed, built, and maintained.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {philosophyCards.map((card, i) => (
            <motion.div key={card.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.3} variants={fadeUp}
              className="rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-md p-6 hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300">
              <card.icon className="w-7 h-7 text-primary/60 mb-3" />
              <h3 className="text-foreground font-semibold text-sm mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrap>

      {/* ── SECTION 4: DATA PROTECTION (SC1 diagram) ── */}
      <SectionWrap>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Data protection and encryption</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Borna protects sensitive healthcare data through encryption applied both in transit and at rest. Patient records, communication logs, and operational data are stored using secure practices, with access to sensitive information controlled at every layer.
            </p>
            <div className="space-y-4">
              {[
                { icon: Shield, title: "Encryption in Transit", desc: "All data moving between systems, users, and services is encrypted during transmission." },
                { icon: Lock, title: "Encryption at Rest", desc: "Data stored within the Borna platform is encrypted — protected even when not actively in use." },
                { icon: KeyRound, title: "Controlled Data Access", desc: "Sensitive information is accessible only through authenticated, role-authorized channels." },
              ].map(item => (
                <div key={item.title} className="flex gap-3">
                  <item.icon className="w-5 h-5 text-primary/60 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-foreground font-semibold text-sm">{item.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <SecureDataFlow />
          </motion.div>
        </div>
      </SectionWrap>

      {/* ── SECTION 5: ACCESS CONTROL (SC2) ── */}
      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Role-based access and authentication</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Not all users see all data. Borna's access control system ensures that each user has access only to the system functions and data appropriate for their role.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
          {[
            { icon: Users, title: "Role-Based Access Control (RBAC)", desc: "Permissions are assigned by role — not by individual user configuration." },
            { icon: KeyRound, title: "Authentication Mechanisms", desc: "Users are authenticated before accessing any system function or data." },
            { icon: UserCheck, title: "User-Level Permissions", desc: "Granular permission settings ensure precise control over who can view, edit, or export specific data." },
          ].map((item, i) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.3} variants={fadeUp} className="text-center">
              <item.icon className="w-6 h-6 text-primary/60 mx-auto mb-3" />
              <h3 className="text-foreground font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <PermissionTiers />
      </SectionWrap>

      {/* ── SECTION 6: COMMUNICATION SECURITY (SC3) ── */}
      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Secure patient communication</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
            Borna Connect enables patient communication across multiple channels — and every channel operates through a controlled, secure infrastructure.
          </p>
          <Link to="/products/borna-connect" className="text-sm text-primary hover:underline">Learn about Borna Connect →</Link>
        </motion.div>
        <div className="flex justify-center">
          <svg viewBox="0 0 420 140" className="w-full max-w-xl" aria-hidden="true">
            {/* Channel labels */}
            {[
              { label: "Phone", x: 40, y: 30 },
              { label: "SMS", x: 40, y: 58 },
              { label: "Email", x: 40, y: 86 },
              { label: "Chat", x: 40, y: 114 },
            ].map((ch) => (
              <g key={ch.label}>
                <text x={ch.x} y={ch.y} fill="hsl(210 40% 85%)" fontSize="13" fontWeight="500">{ch.label}</text>
                <line x1="85" y1={ch.y - 4} x2="180" y2="70" stroke="hsl(170 100% 43% / 0.3)" strokeWidth="1.2" />
              </g>
            ))}
            {/* Gateway band */}
            <rect x="180" y="35" width="28" height="70" rx="6" fill="hsl(170 100% 43% / 0.08)" stroke="hsl(170 100% 43% / 0.4)" strokeWidth="1.2">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="6s" repeatCount="indefinite" />
            </rect>
            <text x="194" y="74" textAnchor="middle" fill="hsl(170 100% 43% / 0.7)" fontSize="12">🔒</text>
            {/* Post-gateway */}
            <line x1="208" y1="70" x2="330" y2="70" stroke="hsl(170 100% 43% / 0.4)" strokeWidth="1.5" />
            <circle cx="350" cy="70" r="22" fill="hsl(170 100% 43% / 0.1)" stroke="hsl(170 100% 43% / 0.5)" strokeWidth="1.5" />
            <text x="350" y="67" textAnchor="middle" fill="hsl(170 100% 43%)" fontSize="10" fontWeight="600">Secure</text>
            <text x="350" y="79" textAnchor="middle" fill="hsl(170 100% 43% / 0.7)" fontSize="8">Stream</text>
          </svg>
        </div>
      </SectionWrap>

      {/* ── SECTION 7: INTEGRATION SECURITY (SC4) ── */}
      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Secure integrations and data exchange</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
            Every external system connection operates through controlled data exchange with authentication requirements and validation applied at the connection boundary.
          </p>
          <Link to="/platform/integrations" className="text-sm text-primary hover:underline">Explore integrations →</Link>
        </motion.div>
        <div className="flex justify-center">
          <svg viewBox="0 0 400 200" className="w-full max-w-lg" aria-hidden="true">
            {/* Borna center */}
            <circle cx="200" cy="100" r="32" fill="hsl(170 100% 43% / 0.1)" stroke="hsl(170 100% 43% / 0.7)" strokeWidth="1.8" />
            <text x="200" y="104" textAnchor="middle" fill="hsl(170 100% 43%)" fontSize="13" fontWeight="700">Borna</text>
            {/* External nodes with validation checkpoints */}
            {[
              { label: "PMS", x: 50, y: 50 },
              { label: "EHR", x: 50, y: 150 },
              { label: "Marketing", x: 350, y: 100 },
            ].map(n => {
              const mx = (n.x + 200) / 2;
              const my = (n.y + 100) / 2;
              return (
                <g key={n.label}>
                  <line x1={n.x} y1={n.y} x2="200" y2="100" stroke="hsl(170 100% 43% / 0.3)" strokeWidth="1.2" />
                  {/* Validation checkpoint */}
                  <circle cx={mx} cy={my} r="12" fill="hsl(170 100% 43% / 0.06)" stroke="hsl(170 100% 43% / 0.4)" strokeWidth="1.2" />
                  <text x={mx} y={my + 5} textAnchor="middle" fill="hsl(170 100% 43% / 0.8)" fontSize="10" fontWeight="600">✓</text>
                  {/* External node */}
                  <circle cx={n.x} cy={n.y} r="26" fill="hsl(226 60% 14% / 0.9)" stroke="hsl(170 100% 43% / 0.4)" strokeWidth="1.2" />
                  <text x={n.x} y={n.y + 5} textAnchor="middle" fill="hsl(210 40% 85%)" fontSize="12" fontWeight="500">{n.label}</text>
                </g>
              );
            })}
          </svg>
        </div>
      </SectionWrap>

      {/* ── SECTION 8: HIPAA & COMPLIANCE ── */}
      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">HIPAA and regulatory compliance considerations</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
            Borna is designed to align with healthcare compliance principles — including those established by HIPAA for data privacy, secure handling of patient information, and auditability of system activity.
          </p>
          <a href="https://www.hhs.gov" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline" aria-label="U.S. Department of Health & Human Services (opens in new tab)">
            U.S. Department of Health & Human Services →
          </a>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-3xl mx-auto rounded-2xl border border-primary/20 bg-glass-bg backdrop-blur-md p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-primary/30" />
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Data Privacy", desc: "Patient information is handled with privacy as a foundational requirement — not a configuration option." },
              { icon: Shield, title: "Secure Handling of Patient Information", desc: "Data collection, storage, transmission, and access are governed by security practices aligned with healthcare standards." },
              { icon: FileText, title: "Auditability and Traceability", desc: "System activity can be traced and audited — providing visibility into data access and processing events." },
            ].map(item => (
              <div key={item.title} className="text-center">
                <item.icon className="w-6 h-6 text-primary/60 mx-auto mb-3" />
                <h3 className="text-foreground font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </SectionWrap>

      {/* ── SECTION 9: INFRASTRUCTURE SECURITY ── */}
      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Secure platform infrastructure</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            The Borna platform is hosted in secure environments designed for reliability, uptime, and protection against unauthorized access.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
          {[
            { icon: Server, title: "Secure Hosting Environments", desc: "The platform runs on infrastructure designed with security as a baseline requirement." },
            { icon: Activity, title: "System Reliability and Uptime", desc: "Infrastructure is designed for consistent availability — minimizing service disruption." },
            { icon: Shield, title: "Protection Against Unauthorized Access", desc: "Infrastructure-level controls prevent unauthorized system entry before application controls are reached." },
          ].map((item, i) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.3} variants={fadeUp} className="text-center">
              <item.icon className="w-6 h-6 text-primary/60 mx-auto mb-3" />
              <h3 className="text-foreground font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <InfraGrid />
      </SectionWrap>

      {/* ── SECTION 10: MONITORING & RISK ── */}
      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Monitoring and risk management</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            System activity is actively monitored — with anomaly detection processes designed to surface irregular patterns before they become incidents.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
          {[
            { icon: Eye, title: "System Monitoring", desc: "Continuous observation of system activity across platform components." },
            { icon: Activity, title: "Anomaly Detection", desc: "Processes designed to identify unusual patterns in system activity or data access." },
            { icon: Shield, title: "Ongoing Risk Evaluation", desc: "Regular review of potential system risks — with improvement processes applied as the platform evolves." },
          ].map((item, i) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.3} variants={fadeUp} className="text-center">
              <item.icon className="w-6 h-6 text-primary/60 mx-auto mb-3" />
              <h3 className="text-foreground font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        {/* Signal detection visual */}
        <div className="flex justify-center">
          <svg viewBox="0 0 280 160" className="w-full max-w-xs" aria-hidden="true">
            {[
              { x: 60, y: 40, flagged: false }, { x: 140, y: 30, flagged: true },
              { x: 220, y: 50, flagged: false }, { x: 80, y: 100, flagged: false },
              { x: 160, y: 90, flagged: false }, { x: 200, y: 120, flagged: true },
              { x: 40, y: 130, flagged: false }, { x: 120, y: 140, flagged: false },
            ].map((n, i) => (
              <g key={i}>
                <circle cx={n.x} cy={n.y} r="6" fill={`hsl(170 100% 43% / ${n.flagged ? 0.15 : 0.06})`} stroke={`hsl(170 100% 43% / ${n.flagged ? 0.5 : 0.2})`} strokeWidth="0.8" />
                {n.flagged && (
                  <circle cx={n.x} cy={n.y} r="10" fill="none" stroke="hsl(170 100% 43% / 0.3)" strokeWidth="0.6">
                    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="8s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>
            ))}
            {[[0,1],[1,2],[0,3],[3,4],[4,5],[6,7],[7,4]].map(([a,b], i) => {
              const nodes = [
                { x: 60, y: 40 }, { x: 140, y: 30 }, { x: 220, y: 50 }, { x: 80, y: 100 },
                { x: 160, y: 90 }, { x: 200, y: 120 }, { x: 40, y: 130 }, { x: 120, y: 140 },
              ];
              return <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke="hsl(170 100% 43% / 0.1)" strokeWidth="0.5" />;
            })}
          </svg>
        </div>
      </SectionWrap>

      {/* ── SECTION 11: DATA GOVERNANCE (SC5) ── */}
      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Data governance and control</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Borna provides structured data governance — ensuring that data is not just stored, but managed. Access to data is controlled, usage is bounded, and activity is visible to authorized administrators.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
          {[
            { icon: FolderLock, title: "Structured Data Management", desc: "Patient and operational data is organized, categorized, and managed — not accumulated without structure." },
            { icon: KeyRound, title: "Control Over Data Access", desc: "Governance rules define who can access what data, under what conditions, and for what purposes." },
            { icon: Eye, title: "Visibility Into System Activity", desc: "Authorized administrators can view activity logs — providing transparency into how data is accessed and used." },
          ].map((item, i) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.3} variants={fadeUp} className="text-center">
              <item.icon className="w-6 h-6 text-primary/60 mx-auto mb-3" />
              <h3 className="text-foreground font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        {/* SC5: Data governance diagram with revealing animation */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <svg viewBox="0 0 320 210" className="w-full max-w-[340px]" role="img" aria-label="Data governance diagram showing categorized data types around a central hub, each with access controls">
            <defs>
              <radialGradient id="govGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(170 100% 43%)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="hsl(170 100% 43%)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="160" cy="105" r="50" fill="url(#govGlow)" />
            {/* Center hub */}
            <motion.g variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}>
              <circle cx="160" cy="105" r="30" fill="hsl(170 100% 43% / 0.1)" stroke="hsl(170 100% 43% / 0.6)" strokeWidth="1.8" />
              <text x="160" y="110" textAnchor="middle" fill="hsl(170 100% 43%)" fontSize="13" fontWeight="700">Borna</text>
            </motion.g>
            {/* Outer nodes */}
            {[
              { label: "Patient", label2: "Records", x: 60, y: 35 },
              { label: "Comms", label2: "Logs", x: 260, y: 35 },
              { label: "Clinical", label2: "Data", x: 60, y: 175 },
              { label: "Operations", label2: "", x: 260, y: 175 },
            ].map((n, i) => (
              <motion.g key={n.label} variants={{ hidden: { opacity: 0, scale: 0.3 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}>
                <line x1="160" y1="105" x2={n.x} y2={n.y} stroke="hsl(170 100% 43% / 0.3)" strokeWidth="1.2" />
                <circle cx={n.x} cy={n.y} r="24" fill="hsl(226 60% 14% / 0.9)" stroke="hsl(170 100% 43% / 0.4)" strokeWidth="1.2" />
                <text x={n.x} y={n.label2 ? n.y - 2 : n.y + 4} textAnchor="middle" fill="hsl(210 40% 85%)" fontSize="10" fontWeight="500">{n.label}</text>
                {n.label2 && <text x={n.x} y={n.y + 10} textAnchor="middle" fill="hsl(210 40% 85%)" fontSize="10" fontWeight="500">{n.label2}</text>}
                <text x={n.x + 18} y={n.y - 16} fill="hsl(170 100% 43% / 0.5)" fontSize="10">🔒</text>
              </motion.g>
            ))}
          </svg>
        </motion.div>
      </SectionWrap>

      {/* ── SECTION 12: PLATFORM CONNECTION ── */}
      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Security as a foundation of the platform</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
            Security is not a feature added to Borna — it is the foundation that makes every other capability possible. Safe communication enables better patient relationships. Secure data enables reliable insights.
          </p>
          <Link to="/platform" className="text-sm text-primary hover:underline">Learn about the platform →</Link>
        </motion.div>
        <p className="text-center text-xs text-muted-foreground italic">Security wraps every layer of the platform.</p>
      </SectionWrap>

      {/* ── SECTION 13: BUSINESS VALUE ── */}
      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Security enables trust. Trust enables growth.</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            For healthcare practices, security is not just a technical requirement — it is a business requirement. Patients trust practices with their most sensitive information. That trust is the foundation of every patient relationship.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {[
            { icon: Shield, title: "Security", desc: "Platform secured at every layer" },
            { icon: Handshake, title: "Trust", desc: "Practices and patients trust the system" },
            { icon: TrendingUp, title: "Adoption", desc: "Secure systems are adopted more confidently" },
            { icon: ArrowRight, title: "Growth", desc: "Trust enables practices to scale" },
          ].map((item, i) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.3} variants={fadeUp} className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl border border-glass-border bg-glass-bg flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary/60" />
              </div>
              <h3 className="text-foreground font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrap>

      {/* ── SECTION 14: KEY TAKEAWAYS ── */}
      <SectionWrap>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Key takeaways</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            "Borna is built with security-first architecture across every platform layer",
            "Data is protected through encryption in transit and at rest, with role-based access control",
            "All integrations operate through controlled, validated connection boundaries",
            "The platform is designed to align with HIPAA and healthcare compliance principles",
          ].map((t, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.3} variants={fadeUp} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary/60 shrink-0 mt-0.5" />
              <p className="text-foreground text-sm font-medium leading-snug">{t}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrap>

      {/* ── SECTION 15: FAQ ── */}
      <StandardFAQ items={faqItems} />

      {/* ── SECTION 16: FINAL CTA ── */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px]" aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">Build on a secure and compliant foundation.</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
              Borna AI ensures that your data, systems, and communications are protected — so your practice can operate with confidence, and your patients can engage with trust.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="gradient-btn text-sm whitespace-nowrap px-4 sm:px-8 py-2.5 sm:py-3.5">Contact Security Team</Link>
              <Link to="/demo" className="text-sm font-medium rounded-lg px-4 sm:px-8 py-2.5 sm:py-3.5 border border-glass-border text-muted-foreground hover:text-foreground hover:border-white/30 transition-all whitespace-nowrap">
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default SecurityCompliancePage;
