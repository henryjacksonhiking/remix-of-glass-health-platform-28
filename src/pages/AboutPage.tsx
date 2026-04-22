import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layers, Brain, Zap, Network, Users, MessageSquare, BarChart3, Heart, Shield, TrendingUp, Target, Lightbulb, Database } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";
import PageWrapper from "@/components/layout/PageWrapper";
import CTASection from "@/components/sections/CTASection";

const fadeIn = { hidden: { opacity: 0, y: 16 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

const diffCards = [
  { icon: MessageSquare, title: "Unified communication", desc: "All patient interactions — calls, SMS, chat, email, video — in one platform, connected to the patient record." },
  { icon: Brain, title: "AI-driven insights", desc: "Real-time analysis of communication patterns, operational performance, and patient behavior — surfaced automatically." },
  { icon: Users, title: "Full patient journey visibility", desc: "Every stage of the patient lifecycle tracked, measured, and connected in one continuous system." },
  { icon: Zap, title: "Automation at scale", desc: "Reduce manual coordination across reminders, follow-ups, scheduling, and reporting." },
];

const commitments = [
  { icon: Heart, title: "Improving patient experiences", desc: "Every decision evaluated against its impact on the patient's interaction with their provider." },
  { icon: BarChart3, title: "Enabling data-driven healthcare", desc: "Analytics infrastructure for decisions with evidence, not intuition." },
  { icon: Shield, title: "Supporting providers with better tools", desc: "Software that reduces burden, not adds to it." },
  { icon: TrendingUp, title: "Advancing healthcare technology", desc: "Building for the next 10 years of healthcare infrastructure." },
];

const faqItems = [
  { q: "What is Borna AI?", a: "Borna AI is a healthcare technology platform that unifies patient communication, CRM, data analytics, and AI-driven automation into one integrated operating system for healthcare practices." },
  { q: "Who uses Borna AI?", a: "Dental practices, chiropractic clinics, medical practices, and multi-location healthcare organizations including DSOs and MSOs." },
  { q: "What makes Borna AI different from other healthcare software?", a: "Borna is built as an integrated platform — not a collection of standalone tools. Communication, CRM, data analytics, and AI intelligence are unified layers of the same system." },
  { q: "What is Borna AI's mission?", a: "To empower healthcare providers with intelligent tools that simplify operations, enhance patient experiences, and enable sustainable growth through a unified platform." },
  { q: "What does the Borna AI platform include?", a: "Four integrated layers: Communication, CRM & Lifecycle, Data & Integration, and AI Intelligence — plus five product modules: Care, Connect, Engage, Insight, and Core." },
];

const AboutPage = () => (
  <PageWrapper>
    <Helmet>
      <title>About Borna AI | Healthcare AI Platform for Growth & Automation</title>
      <meta name="description" content="Learn about Borna AI, a healthcare platform transforming patient engagement, communication, and operations through AI-powered automation and insights." />
    </Helmet>

    {/* Breadcrumb */}
    <div className="container mx-auto px-4 md:px-6 pt-4">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/company" className="hover:text-foreground">Company</Link> / <span className="text-primary">About</span>
      </nav>
    </div>

    {/* Hero */}
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 opacity-35"><BeamsBackground intensity="medium" /></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="hero-headline text-foreground mb-6">About Borna AI</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="body-text mb-8">
              Borna AI is a healthcare technology platform designed to transform how practices manage patient communication, operations, and growth. Our mission is to unify fragmented systems into one intelligent platform.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-3">
              <Link to="/platform" className="gradient-btn text-sm">Explore Platform</Link>
              <Link to="/demo" className="border border-glass-border text-foreground px-5 py-2.5 rounded-lg text-sm hover:bg-glass transition-colors">Request Demo</Link>
            </motion.div>
          </div>
          {/* 4-layer stack with perspective */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="hidden md:block">
            <div className="w-56 mx-auto" style={{ transform: 'perspective(600px) rotateZ(2deg)' }}>
              {[
                { label: "Communication", sub: "Calls · SMS · Chat · Video · Email" },
                { label: "CRM & Lifecycle", sub: "Acquisition · Engagement · Retention" },
                { label: "Data & Integration", sub: "EHR/PMS · Analytics · Reporting" },
                { label: "AI Intelligence", sub: "Insights · Workflow AI · Predictive" },
              ].map((layer, i) => (
                <motion.div key={layer.label} animate={{ opacity: [0.5, 0.8, 0.5], y: [0, -2, 0] }} transition={{ duration: 7, repeat: Infinity, delay: i }}
                  className="glass-panel px-4 py-3 mb-2 border-l-2 border-primary/40">
                  <span className="text-xs font-medium text-foreground">{layer.label}</span>
                  <span className="text-[10px] text-muted-foreground block">{layer.sub}</span>
                </motion.div>
              ))}
              <div className="flex gap-1 justify-end mt-1">
                {[0,1,2].map(i => <div key={i} className="w-8 h-px bg-primary/20" style={{ transform: `rotate(${10 + i * 5}deg)` }} />)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Who we are */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-headline text-foreground mb-4">Who we are</h2>
            <p className="body-text">
              Borna AI is a healthcare-focused technology company building an integrated platform for patient engagement, communication, operational efficiency, and data-driven decision-making. We help practices replace fragmented tool stacks with one coherent system.
            </p>
          </div>
          <div className="glass-panel p-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Heart, label: "Patient Engagement" },
                { icon: MessageSquare, label: "Communication" },
                { icon: Zap, label: "Operational Efficiency" },
                { icon: BarChart3, label: "Data-Driven Decisions" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-primary/60" />
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-28 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8 relative">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="glass-panel p-8 border-t-2 border-primary/30">
            <h2 className="text-lg font-semibold text-foreground mb-3">Our mission</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To empower healthcare providers with intelligent tools that simplify operations, enhance patient experiences, and enable sustainable growth.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-8 border-t-2 border-primary/30">
            <h2 className="text-lg font-semibold text-foreground mb-3">Our vision</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To become the unified operating system for healthcare practices — connecting communication, data, and workflows into one seamless ecosystem.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* The Problem */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-headline text-foreground mb-4">The problem we are solving</h2>
            <p className="body-text mb-4">
              Healthcare systems today are built on fragmentation. Communication tools that don't connect to patient records. CRM systems separate from scheduling. Analytics with no live data. Each system operates in isolation.
            </p>
            <p className="text-sm font-medium text-foreground">Fragmentation is not a technology problem. It is an architecture problem. And Borna is the architectural solution.</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["Scheduling", "Communication", "CRM", "Analytics", "Billing", "EHR"].map((tool, i) => (
              <motion.div key={tool} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass-panel p-3 text-center" style={{ opacity: 0.4, transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (1 + i * 0.5)}deg)`, fontSize: `${11 + (i % 3)}px` }}>
                <span className="text-xs text-muted-foreground">{tool}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Our Approach */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="section-headline text-foreground text-center mb-4">Our approach to healthcare technology</h2>
        <p className="body-text text-center mx-auto max-w-2xl mb-6">
          Borna's approach is architectural, not additive. Every layer connects to every other layer — communication informs CRM, CRM drives automation, automation generates analytics, analytics powers AI.
        </p>
        <div className="text-center mb-12"><Link to="/ecosystem" className="text-sm text-primary hover:underline">Explore the full Borna ecosystem →</Link></div>
      </div>
    </section>

    {/* Platform Stack */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="section-headline text-foreground text-center mb-4">The Borna AI platform</h2>
        <p className="body-text text-center mx-auto mb-10">Four integrated layers, each fully functional independently, exponentially more powerful together.</p>
        <div className="space-y-2">
          {[
            { emoji: "💬", name: "Communication Layer", sub: "Calls · SMS · Chat · Video · Email" },
            { emoji: "👤", name: "CRM & Lifecycle Layer", sub: "Acquisition · Engagement · Retention · Reactivation" },
            { emoji: "⚙️", name: "Data & Integration Layer", sub: "EHR/PMS Integration · Analytics · Reporting" },
            { emoji: "🤖", name: "AI Intelligence Layer", sub: "Automated Insights · Workflow AI · Predictive Analytics" },
          ].map((layer, i) => (
            <motion.div key={layer.name} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="glass-panel px-5 py-4 border-l-2 border-primary/40">
              <span className="text-sm font-medium text-foreground">{layer.emoji} {layer.name}</span>
              <span className="text-xs text-muted-foreground block mt-0.5">{layer.sub}</span>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6"><Link to="/platform" className="text-sm text-primary hover:underline">Explore the full platform in detail →</Link></div>
      </div>
    </section>

    {/* What Makes Borna Different */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-4">What makes Borna AI different</h2>
        <p className="body-text text-center mx-auto max-w-2xl mb-12">Four architectural advantages that no collection of point tools can replicate.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {diffCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="glass-panel p-6 hover:translate-y-[-2px] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4"><Icon className="w-5 h-5 text-primary" /></div>
                <h3 className="text-base font-medium text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Who We Serve */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <h2 className="section-headline text-foreground mb-4">Who we serve</h2>
        <p className="body-text mx-auto mb-8">
          Designed for healthcare organizations at every scale — from single-location practices to enterprise networks with dozens of locations.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {[
            { label: "Dental Practices", href: "/industries/dental" },
            { label: "Chiropractic Clinics", href: "/industries/chiropractic" },
            { label: "Medical Practices", href: "/industries/medical" },
            { label: "DSOs & MSOs", href: "/industries/dso-mso" },
          ].map((ind) => (
            <Link key={ind.label} to={ind.href} className="glass-panel px-4 py-2 text-xs text-muted-foreground hover:text-primary transition-colors">{ind.label}</Link>
          ))}
        </div>
        <Link to="/industries" className="text-sm text-primary hover:underline">Explore all industries →</Link>
      </div>
    </section>

    {/* Commitment */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-12">Our commitment to healthcare innovation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {commitments.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center">
                <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <h3 className="text-sm font-medium text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
    </section>

    {/* How It Works */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-12">How Borna works</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {[
            { icon: Network, label: "Connect", desc: "Connect channels and systems into one platform" },
            { icon: Database, label: "Centralize", desc: "Centralize patient data and interaction history" },
            { icon: BarChart3, label: "Analyze", desc: "AI surfaces insights that matter" },
            { icon: Zap, label: "Automate", desc: "Automate workflows across the organization" },
            { icon: TrendingUp, label: "Optimize", desc: "Continuously improve as the platform learns" },
          ].map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="glass-panel p-4 text-center">
                <span className="text-xs text-primary font-medium block mb-2">{i + 1}</span>
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2"><Icon className="w-4 h-4 text-primary" /></div>
                <h3 className="text-xs font-medium text-foreground mb-1">{step.label}</h3>
                <p className="text-[10px] text-muted-foreground">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Key Takeaways */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-12">Key takeaways</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "Borna is a unified healthcare platform built on four integrated layers that amplify each other",
            "Every layer connects — communication informs CRM, CRM drives automation, automation generates analytics",
            "Built for every scale from single-location practices to enterprise DSOs and MSOs",
            "Designed for continuous evolution — new capabilities add without disrupting existing operations",
          ].map((text, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center">
              <Layers className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="section-headline text-foreground text-center mb-12">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <details key={i} className="glass-panel group">
              <summary className="px-6 py-4 cursor-pointer text-sm font-medium text-foreground flex justify-between items-center">
                {item.q}<span className="text-primary ml-2 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-4 text-sm text-muted-foreground">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </PageWrapper>
);

export default AboutPage;
