import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlight-card";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layers, Brain, Zap, Network, Users, Target, Crown, Gauge, Globe, Minus, MessageSquare, BarChart3, ArrowRight, Rocket, FileText, MessageCircle, Code2, Briefcase, CheckCircle2 } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";
import PageWrapper from "@/components/layout/PageWrapper";
import StandardFAQ from "@/components/sections/StandardFAQ";
import CTASection from "@/components/sections/CTASection";

const fadeIn = { hidden: { opacity: 0, y: 16 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

const whyCards = [
  { icon: Layers, title: "Build systems, not features", desc: "Work on interconnected systems — communication, CRM, analytics, and AI — not isolated product features." },
  { icon: Zap, title: "Real-world impact", desc: "Your work directly influences patient experience, operational efficiency, and revenue performance across practices." },
  { icon: Brain, title: "AI at the core", desc: "AI integrated into communication, workflows, and decision-making — as the foundation, not an add-on." },
  { icon: Network, title: "Platform-level thinking", desc: "Work across layers — communication, lifecycle management, data pipelines, and intelligence engines." },
];

const workPrinciples = [
  { icon: Crown, title: "High ownership", desc: "Responsible for outcomes, not just tasks." },
  { icon: Brain, title: "AI-native workflow", desc: "Active use of AI tools for analysis, design, optimization, and decisions." },
  { icon: Gauge, title: "Speed with structure", desc: "Fast execution with clarity and discipline." },
  { icon: Globe, title: "Remote, structured", desc: "PST-aligned schedules, clear deliverables, measurable performance." },
  { icon: Minus, title: "No bureaucracy", desc: "Clarity, execution, and results over process-heavy workflows." },
];

const traits = [
  { title: "Think in systems, not tasks", desc: "You see the whole before the part." },
  { title: "Comfortable working with AI tools daily", desc: "As a fundamental workflow component." },
  { title: "Experience in SaaS, healthcare tech, or digital platforms", desc: "You understand platform-scale building." },
  { title: "Operate with ownership and minimal supervision", desc: "You set your own standard." },
  { title: "Adapt quickly and iterate based on data", desc: "Decisions made with evidence, not assumption." },
];

/* UPDATE: Modify roles as hiring needs change */
const roles = [
  { title: "Senior Product Designer (AI & Healthcare SaaS)", chips: ["Remote", "Full-Time"], desc: "Design system-level experiences across Borna AI platform modules — from communication flows to analytics dashboards." },
  { title: "Growth & Marketing Lead (AI-Driven Systems)", chips: ["Remote", "Full-Time"], desc: "Lead patient acquisition, retention, and revenue strategies using data, AI, and platform-level campaign infrastructure." },
  { title: "Backend Engineer (APIs & Integrations)", chips: ["Remote", "Full-Time"], desc: "Build scalable integrations with PMS/EHR systems and external platforms — the data infrastructure powering the platform." },
  { title: "AI Engineer (LLMs & Automation)", chips: ["Remote", "Full-Time"], desc: "Develop AI models for communication analysis, workflow automation, and intelligent decision support." },
];

const hiringSteps = [
  { icon: FileText, label: "Application review", desc: "We review every application carefully." },
  { icon: MessageCircle, label: "Initial screening", desc: "A brief conversation about your background." },
  { icon: Code2, label: "Technical / strategic interview", desc: "Deep dive into your experience." },
  { icon: Briefcase, label: "Practical task", desc: "If required for the role." },
  { icon: CheckCircle2, label: "Final conversation", desc: "Mutual alignment on expectations." },
];

const faqItems = [
  { q: "Do you offer remote roles?", a: "Yes. Most positions are fully remote with PST-aligned collaboration schedules." },
  { q: "Do I need healthcare experience?", a: "Healthcare experience is not required but is highly valuable." },
  { q: "What makes Borna different from other SaaS companies?", a: "Borna is building a full healthcare operating system — not standalone tools. You work on interconnected systems." },
  { q: "Is Borna a startup?", a: "Borna is a platform company building long-term infrastructure in healthcare technology." },
  { q: "What tools does the team use?", a: "Modern development stacks with AI tools integrated for analysis, design, optimization, and decision-making." },
];

const CareersPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Careers at Borna AI | AI, SaaS & Healthcare Technology Jobs</title>
      <meta name="description" content="Explore careers at Borna AI and help build a next-generation healthcare operating system. Join our team in AI, product, engineering, and growth." />
    </Helmet>

    {/* Breadcrumb */}
    <div className="container mx-auto px-4 md:px-6 pt-4">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/company" className="hover:text-foreground">Company</Link> / <span className="text-primary">Careers</span>
      </nav>
    </div>

    {/* Hero */}
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="absolute inset-0 opacity-50"><BeamsBackground intensity="medium" /></div>
      <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full blur-[120px] bg-primary/12 animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-56 h-56 rounded-full blur-[100px] bg-deep-blue/10 animate-glow-pulse pointer-events-none" style={{ animationDelay: "1.5s" }} />
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="hero-headline text-foreground mb-3">Careers at <span className="gradient-text">Borna AI</span></motion.h1>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.6 }} className="text-lg text-primary font-medium mb-6">
              Build the healthcare operating system of the future
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="body-text mb-8">
              We are not creating isolated tools — we are designing infrastructure that transforms how healthcare businesses operate, grow, and deliver care.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#open-roles" className="gradient-btn text-sm h-11 inline-flex items-center justify-center">View Open Roles</a>
              <a href="mailto:careers@borna.ai" className="border border-glass-border text-foreground px-5 rounded-lg text-sm hover:bg-glass transition-colors h-11 inline-flex items-center justify-center">Apply Now</a>
            </motion.div>
          </div>
          {/* Career growth visual: stack of role cards lifting toward a Rocket */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 md:mt-0 flex justify-center">
            <div className="relative w-64 sm:w-72 h-72 sm:h-80">
              <div className="absolute inset-0 rounded-full blur-[90px] bg-primary/20 pointer-events-none" />
              {/* Rocket / mission badge at top */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute left-1/2 -translate-x-1/2 top-2 w-16 h-16 rounded-2xl bg-primary/15 border border-primary/50 flex items-center justify-center backdrop-blur-sm shadow-[0_0_40px_hsla(170,100%,43%,0.35)]"
              >
                <Rocket className="w-7 h-7 text-primary" />
              </motion.div>

              {/* Vertical connector line */}
              <div className="absolute left-1/2 top-20 bottom-4 -translate-x-1/2 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

              {/* Floating role chips */}
              {[
                { label: "Engineering", side: "left", top: "26%", delay: 0 },
                { label: "Product", side: "right", top: "40%", delay: 0.4 },
                { label: "AI", side: "left", top: "54%", delay: 0.8 },
                { label: "Design", side: "right", top: "68%", delay: 1.2 },
                { label: "Growth", side: "left", top: "82%", delay: 1.6 },
              ].map((role) => (
                <motion.div
                  key={role.label}
                  animate={{ x: role.side === "left" ? [0, -3, 0] : [0, 3, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 5, repeat: Infinity, delay: role.delay }}
                  className="absolute glass-panel px-3 py-1.5 border border-primary/30 hover-glow-card backdrop-blur-sm"
                  style={{
                    top: role.top,
                    [role.side]: "8%",
                    transform: "translateY(-50%)",
                  } as React.CSSProperties}
                >
                  <span className="text-xs text-foreground/90 whitespace-nowrap">{role.label}</span>
                </motion.div>
              ))}

              {/* Connector dots on spine */}
              {[26, 40, 54, 68, 82].map((t, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                  className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary"
                  style={{ top: `${t}%`, boxShadow: "0 0 10px hsl(var(--primary))" }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Why Borna */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-12">Why work at Borna AI</h2>
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

    {/* What you'll build */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="section-headline text-foreground text-center mb-4">What you'll be building</h2>
        <p className="body-text text-center mx-auto mb-10">
          Borna AI connects the full patient journey into a single, intelligent operating system. Your contributions span the entire stack.
        </p>
        <div className="space-y-2">
          {[
            { emoji: "💬", name: "Communication Layer", sub: "Omni-channel: calls, SMS, chat, video, email" },
            { emoji: "👤", name: "CRM & Lifecycle Layer", sub: "Patient lifecycle and CRM infrastructure" },
            { emoji: "⚙️", name: "Data & Integrations Layer", sub: "Data pipelines and system integrations" },
            { emoji: "🤖", name: "AI & Intelligence Layer", sub: "AI-driven analytics, automation, and insights" },
          ].map((layer, i) => (
            <motion.div key={layer.name} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="glass-panel px-5 py-3 border-l-2 border-primary/40 hover-glow-card">
              <span className="text-sm text-foreground">{layer.emoji} {layer.name}</span>
              <span className="text-xs text-muted-foreground ml-2">{layer.sub}</span>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6"><Link to="/platform" className="text-sm text-primary hover:underline">Explore the full platform architecture →</Link></div>
      </div>
    </section>

    {/* How we work */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-12">Our work environment</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {workPrinciples.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="glass-panel p-4 text-center hover-glow-card">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2"><Icon className="w-4 h-4 text-primary" /></div>
                <h3 className="text-xs font-medium text-foreground mb-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Who thrives */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="section-headline text-foreground text-center mb-12">Who thrives at Borna</h2>
        <div className="glass-panel p-6 space-y-0 hover-glow-card">
          {traits.map((t, i) => (
            <motion.div key={t.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="py-3 border-l-2 border-primary/40 pl-4 hover:border-primary/60 transition-colors">
              <span className="text-sm font-medium text-foreground">{t.title}</span>
              <span className="text-xs text-muted-foreground ml-2">— {t.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Open Roles */}
    <section id="open-roles" className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline gradient-text text-center mb-4">Open positions</h2>
        <p className="body-text text-center mx-auto max-w-xl mb-12">Every role contributes to the whole system — not to a siloed function.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          {roles.map((role, i) => {
            const accents = ['border-primary', 'border-deep-blue', 'border-electric-blue', 'border-primary/60'];
            return (
            <motion.div key={role.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              role="article" aria-label={role.title} className={`glass-panel p-6 hover:translate-y-[-2px] transition-all duration-300 hover-glow-card border-l-2 ${accents[i % accents.length]} flex flex-col h-full`}>
              <h3 className="text-base font-semibold text-foreground mb-2 min-h-[3rem]">{role.title}</h3>
              <div className="flex gap-2 mb-3">
                {role.chips.map(c => <span key={c} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{c}</span>)}
              </div>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{role.desc}</p>
              <a href="mailto:careers@borna.ai" className="gradient-btn text-sm w-full block text-center mt-auto">
                Apply Now →
              </a>
            </motion.div>
          );})}
        </div>
      </div>
    </section>

    {/* Hiring Process */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <h2 className="section-headline text-foreground text-center mb-12">Our hiring process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          {hiringSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="relative flex flex-col items-center text-center px-2">
                {/* Number badge */}
                <span className="text-[10px] uppercase tracking-widest text-primary/70 mb-2">Step {i + 1}</span>
                {/* Icon circle */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center mb-3 backdrop-blur-sm shadow-[0_0_20px_hsla(170,100%,43%,0.25)]">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                {/* Heading */}
                <h3 className="text-sm font-semibold text-foreground mb-1.5 min-h-[2.5rem] flex items-center justify-center">{step.label}</h3>
                {/* Context */}
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">We prioritize clarity, efficiency, and mutual alignment throughout the process.</p>
      </div>
    </section>

    {/* FAQ */}
    <StandardFAQ items={faqItems} title="Careers at Borna — FAQs" />

    <CTASection />
  </PageWrapper>
);

export default CareersPage;
