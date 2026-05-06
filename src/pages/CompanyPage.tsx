import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlight-card";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layers, Cpu, Workflow, Database, Network, Zap, Brain, MessageSquare, Users, BarChart3, Settings, Rocket, RefreshCw, GitBranch, Heart, LineChart, Shield, TrendingUp } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";
import PageWrapper from "@/components/layout/PageWrapper";
import StandardFAQ from "@/components/sections/StandardFAQ";
import KeyTakeaways from "@/components/sections/KeyTakeaways";
import CTASection from "@/components/sections/CTASection";

const fadeIn = { hidden: { opacity: 0, y: 16 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

const approachSteps = [
  { icon: Database, label: "Centralize", desc: "Bring all communication channels and patient data into one place" },
  { icon: Network, label: "Connect", desc: "Link every touchpoint across the patient journey" },
  { icon: Brain, label: "Analyze", desc: "Surface insights and patterns from unified data" },
  { icon: Zap, label: "Automate", desc: "Trigger intelligent workflows without manual effort" },
];

const buildSteps = [
  { icon: Layers, label: "Build", desc: "Build core components on solid infrastructure" },
  { icon: Rocket, label: "Launch", desc: "Release usable products early — real value before full completion" },
  { icon: RefreshCw, label: "Iterate", desc: "Improve based on real practice feedback, not assumptions" },
  { icon: GitBranch, label: "Expand", desc: "Add capabilities modularly — each one integrating into the same system" },
];

const whyCards = [
  { icon: Network, title: "Unified system, not fragmented tools", desc: "One platform, one data layer — every module shares the same patient record and intelligence." },
  { icon: Brain, title: "AI-driven across every layer", desc: "Intelligence is built into the platform architecture — not added as a feature on top." },
  { icon: Users, title: "Full patient journey visibility", desc: "From first marketing touch to long-term retention — every interaction tracked and connected." },
  { icon: TrendingUp, title: "Scalable across every industry", desc: "One platform serving dental, medical, and specialty practices — with the same data layer underneath." },
];

const modules = [
  { name: "Borna Care", desc: "Patient engagement and portal" },
  { name: "Borna Connect", desc: "Omnichannel communication" },
  { name: "Borna Engage", desc: "CRM and lifecycle management" },
  { name: "Borna Insight", desc: "Analytics and performance" },
  { name: "Borna Core", desc: "AI engine and automation" },
];

const timeline = [
  { label: "Founded", sub: "Identifying fragmentation in healthcare operations" },
  { label: "Early investment", sub: "Securing support to build the platform vision" },
  { label: "First module live", sub: "Borna Care delivering value to early practices" },
  { label: "Platform expanding", sub: "New modules in active development" },
];

const faqItems = [
  { q: "What is Borna AI?", a: "Borna AI is a healthcare technology company building a unified platform that integrates patient communication, CRM, analytics, and AI automation — replacing fragmented software stacks with a single intelligent system." },
  { q: "What does Borna AI do?", a: "Borna builds software products for healthcare practices — starting with Borna Care (patient engagement and portal) and expanding into communication, CRM, analytics, and AI automation through a modular platform." },
  { q: "What makes Borna different from other healthcare software companies?", a: "Most healthcare software companies build point solutions — one tool for one problem. Borna is building a unified platform where every module shares the same data layer and intelligence." },
  { q: "Who does Borna serve?", a: "Borna serves dental practices, medical clinics, and specialty healthcare providers — all through the same unified platform configured to each practice type's specific workflows." },
  { q: "Is Borna AI fully developed?", a: "Borna is in early-stage development. Borna Care is live and available. Borna Connect is in active development. Borna Insight is in early stage. Borna Engage and Borna Core are planned for future phases." },
];

const CompanyPage = () => (
  <PageWrapper>
    <Helmet>
      <title>About Borna AI | Healthcare AI Platform Company & Vision</title>
      <meta name="description" content="Learn about Borna AI, a healthcare technology company building a unified platform for patient engagement, communication, CRM, and AI automation." />
    </Helmet>

    {/* Hero */}
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="absolute inset-0 opacity-50"><BeamsBackground intensity="medium" /></div>
      <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full blur-[120px] bg-primary/12 animate-glow-pulse" />
      <div className="absolute bottom-10 left-1/4 w-56 h-56 rounded-full blur-[100px] bg-deep-blue/10 animate-glow-pulse pointer-events-none" style={{ animationDelay: "1.5s" }} />
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs uppercase tracking-widest text-primary mb-4 block">Company</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="hero-headline text-foreground mb-6">
              Building the future of healthcare through AI and unified systems
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="body-text mb-8">
              Borna AI is a healthcare technology company focused on building a unified platform that connects patient communication, CRM, analytics, and automation into one intelligent system.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-3">
              <Link to="/platform" className="border border-glass-border text-foreground px-5 py-2.5 rounded-lg text-sm hover:bg-glass transition-colors">Explore Platform →</Link>
              <Link to="/contact" className="gradient-btn text-sm">Contact Us</Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="hidden md:flex justify-center">
            <div className="relative w-48">
              {["Communication", "CRM & Lifecycle", "Data & Integration", "AI Intelligence"].map((layer, i) => (
                <motion.div key={layer} animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 6 + i, repeat: Infinity, delay: i }} className="glass-panel px-4 py-3 mb-2 border-l-2 border-primary/40 hover-glow-card">
                  <span className="text-xs text-muted-foreground">{layer}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Definition */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <div className="flex justify-center gap-3 mb-6">
          <Layers className="w-5 h-5 text-primary" /><Brain className="w-5 h-5 text-primary" />
        </div>
        <h2 className="section-headline text-foreground mb-4">What is a healthcare AI platform company?</h2>
        <p className="body-text mx-auto">
          A healthcare AI platform company develops integrated software solutions that combine communication, data, and automation to improve operational efficiency and patient engagement. These platforms replace fragmented systems with a unified approach powered by artificial intelligence.
        </p>
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8 relative">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="glass-panel p-8 border-t-2 border-primary/40 hover-glow-card">
            <h2 className="text-lg font-semibold text-foreground mb-3">Our mission</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To help healthcare practices operate more efficiently by unifying systems, improving communication, and enabling data-driven decisions through AI.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="glass-panel p-8 border-t-2 border-primary/40 hover-glow-card">
            <h2 className="text-lg font-semibold text-foreground mb-3">Our vision</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We envision a healthcare ecosystem where every patient interaction is connected, all data is centralized and actionable, workflows are automated, and every decision is supported by AI.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Problem */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-headline text-foreground mb-4">Solving fragmentation in healthcare systems</h2>
            <p className="body-text mb-4">
              Healthcare providers often rely on multiple disconnected tools for communication, scheduling, CRM, and analytics. These systems don't talk to each other — leading to operational inefficiencies, missed patient opportunities, and a fragmented experience.
            </p>
            <p className="text-sm font-medium text-foreground">This is the problem Borna was built to solve.</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["Scheduling", "Communication", "CRM", "Analytics", "Billing", "EHR"].map((tool, i) => (
              <motion.div key={tool} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass-panel p-3 text-center opacity-50 hover-glow-card" style={{ transform: `rotate(${(i % 2 === 0 ? 1 : -1) * 2}deg)` }}>
                <span className="text-xs text-muted-foreground">{tool}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Approach */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-4">A unified platform approach</h2>
        <p className="body-text text-center mx-auto max-w-2xl mb-12">
          Borna addresses fragmentation by centralizing communication, integrating patient data, enabling AI-powered insights, and automating workflows.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {approachSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-panel p-5 text-center hover-glow-card">
                <span className="text-xs text-primary font-medium mb-2 block">{i + 1}</span>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3"><Icon className="w-5 h-5 text-primary" /></div>
                <h3 className="text-sm font-medium text-foreground mb-1">{step.label}</h3>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Platform modules */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <h2 className="section-headline text-foreground mb-4">The platform we are building</h2>
        <p className="body-text mx-auto mb-10">
          Borna consists of five integrated modules — each addressing a critical layer of healthcare practice operations.
        </p>
        <div className="space-y-3 max-w-md mx-auto">
          {modules.map((m, i) => (
            <motion.div key={m.name} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-panel px-5 py-3 text-left flex justify-between items-center hover-glow-card">
              <span className="text-sm font-medium text-foreground">{m.name}</span>
              <span className="text-xs text-muted-foreground">{m.desc}</span>
            </motion.div>
          ))}
        </div>
        <Link to="/ecosystem" className="inline-block mt-6 text-sm text-primary hover:underline">Explore the full ecosystem →</Link>
      </div>
    </section>

    {/* Story timeline */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="section-headline text-foreground text-center mb-4">Our journey</h2>
        <p className="body-text text-center mx-auto max-w-2xl mb-12">
          Borna AI was founded to address fragmentation in healthcare. We are building carefully — one solid layer at a time.
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-primary/20" />
          {timeline.map((t, i) => (
            <div key={t.label} className="relative flex flex-col items-center text-center flex-1">
              <div className="w-3 h-3 rounded-full bg-primary/60 mb-3 relative z-10" />
              <span className="text-sm font-medium text-foreground mb-1">{t.label}</span>
              <span className="text-xs text-muted-foreground max-w-[140px]">{t.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How we build */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-4">How we build</h2>
        <p className="body-text text-center mx-auto max-w-2xl mb-12">
          Our development approach is deliberate and modular. We build usable products before expanding.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {buildSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-panel p-5 text-center hover-glow-card">
                <span className="text-xs text-primary font-medium mb-2 block">{i + 1}</span>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3"><Icon className="w-5 h-5 text-primary" /></div>
                <h3 className="text-sm font-medium text-foreground mb-1">{step.label}</h3>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Who we serve */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <h2 className="section-headline text-foreground mb-4">Designed for modern healthcare practices</h2>
        <p className="body-text mx-auto mb-8">
          Borna is built for dental clinics, medical practices, and specialty providers. Each with distinct workflows. All served by the same unified platform.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: "Dental Practices", href: "/industries/dental" },
            { label: "Medical Clinics", href: "/industries/medical" },
            { label: "Specialty Providers", href: "/industries/chiropractic" },
          ].map((ind) => (
            <Link key={ind.label} to={ind.href} className="glass-panel px-4 py-2 text-xs text-muted-foreground hover:text-primary transition-colors hover-glow-card">{ind.label}</Link>
          ))}
        </div>
        <Link to="/industries" className="inline-block mt-4 text-sm text-primary hover:underline">See all industries →</Link>
      </div>
    </section>

    {/* Why Borna */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-12">Why Borna AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {whyCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="glass-panel p-6 hover:translate-y-[-2px] transition-all duration-300 hover-glow-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4"><Icon className="w-5 h-5 text-primary" /></div>
                <h3 className="text-base font-medium text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Key Takeaways */}
    <KeyTakeaways
      items={[
        { icon: Layers, text: "Borna AI is a healthcare technology company building a unified AI platform" },
        { icon: Shield, text: "Founded to solve fragmentation in healthcare systems" },
        { icon: Cpu, text: "Building a scalable, modular platform with initial products already live" },
        { icon: Network, text: "Serving dental, medical, and specialty practices through one connected system" },
      ]}
    />

    {/* FAQ */}
    <StandardFAQ items={faqItems} />

    <CTASection />
  </PageWrapper>
);

export default CompanyPage;
