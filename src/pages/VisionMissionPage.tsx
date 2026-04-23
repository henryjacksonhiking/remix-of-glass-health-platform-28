import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MessageSquare, Users, Database, Brain, Workflow, BarChart3, Zap, Target, TrendingUp, Heart, Shield, Lightbulb, ArrowRight } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";
import PageWrapper from "@/components/layout/PageWrapper";
import CTASection from "@/components/sections/CTASection";

const fadeIn = { hidden: { opacity: 0, y: 16 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

const stages = [
  { label: "Fragmented", sub: "Today's healthcare reality", glow: "opacity-25" },
  { label: "Connected", sub: "Integrated systems", glow: "opacity-60" },
  { label: "Intelligent", sub: "AI-powered operations", glow: "opacity-90" },
  { label: "Optimized", sub: "Borna's vision", glow: "opacity-100" },
];

const missionPillars = [
  { icon: Workflow, title: "Simplify operations", desc: "Replace administrative complexity with automated, coordinated workflows." },
  { icon: Heart, title: "Improve patient engagement", desc: "Maintain meaningful contact with every patient at every stage of their care relationship." },
  { icon: Zap, title: "Enhance efficiency", desc: "Reduce operational overhead — scheduling gaps, communication delays, manual reporting." },
  { icon: BarChart3, title: "Enable data-driven decisions", desc: "Give leadership analytics visibility for strategic decisions based on real-time data." },
];

const impactCards = [
  { icon: Heart, title: "Improved patient experiences", desc: "Consistent communication, timely follow-up, and seamless coordination." },
  { icon: TrendingUp, title: "Reduced operational inefficiencies", desc: "Automated workflows eliminate coordination overhead that scales poorly." },
  { icon: Shield, title: "Scalable operations", desc: "Infrastructure that grows with the organization — each new location added without rebuilding." },
  { icon: Target, title: "Sustainable growth", desc: "Patient acquisition, retention, and revenue optimization working together systematically." },
];

const faqItems = [
  { q: "What is Borna AI's vision?", a: "Borna AI's vision is to become the unified operating system for healthcare practices — where all communication is centralized, data flows seamlessly, workflows are automated, and providers operate with full visibility and control." },
  { q: "What is Borna AI's mission?", a: "To empower healthcare providers with a platform that simplifies operations, improves patient engagement, enhances efficiency, and enables data-driven decision-making." },
  { q: "Why are vision and mission important in healthcare technology?", a: "Vision and mission define how healthcare technology companies innovate and deliver long-term value — distinguishing companies building for the next decade from those reacting to the current quarter." },
  { q: "How does Borna AI plan to achieve its vision?", a: "By building an integrated four-layer platform: Communication, CRM & Lifecycle, Data & Integration, and AI Intelligence — each layer amplifying the others." },
  { q: "What is Borna AI's long-term direction?", a: "Continuously expanding AI capabilities, deepening integrations, developing new modules, and scaling infrastructure to become the standard operating platform for healthcare organizations." },
];

const VisionMissionPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Borna AI Vision & Mission | Future of Healthcare Technology Platform</title>
      <meta name="description" content="Discover Borna AI's vision and mission to transform healthcare through AI-powered communication, automation, and unified platform innovation." />
    </Helmet>

    {/* Breadcrumb */}
    <div className="container mx-auto px-4 md:px-6 pt-4">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/company" className="hover:text-foreground">Company</Link> / <span className="text-primary">Vision & Mission</span>
      </nav>
    </div>

    {/* Hero */}
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="absolute inset-0 opacity-40"><BeamsBackground intensity="medium" /></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="hero-headline text-foreground mb-6">Our vision & mission</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="body-text mb-8">
              At Borna AI, we are building the foundation for the future of healthcare operations — where communication, data, and workflows are unified into one intelligent system.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-3">
              <Link to="/platform" className="gradient-btn text-sm">Explore Platform</Link>
              <Link to="/about" className="border border-glass-border text-foreground px-5 py-2.5 rounded-lg text-sm hover:bg-glass transition-colors">Learn About Borna</Link>
            </motion.div>
          </div>
          {/* Transformation Flow */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="hidden md:flex flex-col gap-3">
            {stages.map((s, i) => (
              <div key={s.label} className="flex items-center gap-3">
                <motion.div animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 6, repeat: Infinity, delay: i * 1.5 }}
                  className={`glass-panel px-4 py-2 flex-1 ${s.glow}`}>
                  <span className="text-xs font-medium text-foreground">{s.label}</span>
                  <span className="text-[10px] text-muted-foreground ml-2">{s.sub}</span>
                </motion.div>
                {i < stages.length - 1 && <ArrowRight className="w-3 h-3 text-primary/50 shrink-0" />}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* Why V&M matter */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <h2 className="section-headline text-foreground mb-4">Why vision and mission matter in healthcare technology</h2>
        <p className="body-text mx-auto">
          Clarity of purpose is essential for building scalable, effective solutions — distinguishing companies that are building for the next 10 years from those reacting to the current quarter.
        </p>
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
    </section>

    {/* Vision */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="section-headline text-foreground mb-4">Our vision: a unified healthcare platform</h2>
            <p className="body-text">
              We envision a future where all patient communication is centralized, data flows seamlessly across systems, workflows are automated and optimized, and healthcare providers operate with full visibility and control.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-primary/60 block text-center mb-3">The future state</span>
            {["All patient communication centralized", "Data flows seamlessly", "Workflows automated", "Full visibility and control"].map((label, i) => (
              <motion.div key={label} animate={{ boxShadow: [`0 0 8px hsl(var(--primary)/0.1)`, `0 0 16px hsl(var(--primary)/0.2)`, `0 0 8px hsl(var(--primary)/0.1)`] }}
                transition={{ duration: 6, repeat: Infinity, delay: i }} className="glass-panel px-4 py-3 border-l-2 border-primary/50">
                <span className="text-xs text-muted-foreground">{["💬", "👤", "⚙️", "🤖"][i]} {["Communication", "CRM & Lifecycle", "Data & Integration", "AI Intelligence"][i]}</span>
                <span className="text-[10px] text-primary/60 ml-2">— {label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-4">Our mission: transforming healthcare operations with AI</h2>
        <p className="body-text text-center mx-auto max-w-2xl mb-12">
          To empower healthcare providers with a platform that simplifies operations, improves engagement, enhances efficiency, and enables data-driven decisions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {missionPillars.map((card, i) => {
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

    {/* Industry context */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <h2 className="section-headline text-foreground mb-4">The future of healthcare technology</h2>
        <p className="body-text mx-auto mb-4">
          Healthcare is undergoing a transformation driven by digital innovation, AI adoption, and the shift toward patient-centric care. The organizations that succeed are those building on integrated platforms.
        </p>
        <p className="text-sm font-medium text-foreground">The question is not whether to adopt digital infrastructure — it is which infrastructure to build on.</p>
      </div>
    </section>

    {/* Approach */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="section-headline text-foreground text-center mb-4">How Borna AI delivers on its vision</h2>
        <p className="body-text text-center mx-auto max-w-2xl mb-12">
          Four integrated capabilities that together create the unified system the vision describes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: MessageSquare, title: "Unified communication", desc: "All patient-facing channels managed from one interface." },
            { icon: Users, title: "Integrated lifecycle management", desc: "Every patient relationship tracked across its full lifecycle." },
            { icon: BarChart3, title: "Advanced analytics & AI", desc: "Real-time data and AI-driven insights surfaced automatically." },
            { icon: Zap, title: "Workflow automation", desc: "Routine coordination tasks automated across the organization." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-panel p-5 text-center">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3"><Icon className="w-5 h-5 text-primary" /></div>
                <h3 className="text-sm font-medium text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="text-center mt-6"><Link to="/ecosystem" className="text-sm text-primary hover:underline">Explore the full ecosystem →</Link></div>
      </div>
    </section>

    {/* Platform stack */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-2">
            {[
              { emoji: "💬", name: "Communication Layer", sub: "All patient-facing channels" },
              { emoji: "👤", name: "CRM & Lifecycle Layer", sub: "Full relationship lifecycle" },
              { emoji: "⚙️", name: "Data & Integration Layer", sub: "Analytics and system connections" },
              { emoji: "🤖", name: "AI Intelligence Layer", sub: "Automated insights and optimization" },
            ].map((layer, i) => (
              <motion.div key={layer.name} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="glass-panel px-5 py-3 border-l-2 border-primary/40">
                <span className="text-sm text-foreground">{layer.emoji} {layer.name}</span>
                <span className="text-xs text-muted-foreground ml-2">— {layer.sub}</span>
              </motion.div>
            ))}
          </div>
          <div>
            <h2 className="section-headline text-foreground mb-4">Building a platform, not just a tool</h2>
            <p className="body-text mb-4">
              A tool solves one problem. A platform creates the infrastructure where many problems can be solved — and new capabilities can be added without rebuilding from scratch.
            </p>
            <Link to="/platform" className="text-sm text-primary hover:underline">Explore the Borna platform in detail →</Link>
          </div>
        </div>
      </div>
    </section>

    {/* Long-term impact */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-4">Creating long-term value in healthcare</h2>
        <p className="body-text text-center mx-auto max-w-2xl mb-12">
          The impact of a unified platform compounds. Every improvement accumulates month over month.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {impactCards.map((card, i) => {
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

    {/* Commitment */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-12">Our commitment to innovation and excellence</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Lightbulb, title: "Continuous innovation", desc: "New capabilities, deeper integrations, and improved AI models in continuous development." },
            { icon: Target, title: "Practical solutions", desc: "Every feature evaluated against real clinical workflows — not feature parity with competitors." },
            { icon: Heart, title: "Supporting providers", desc: "Success measured by provider efficiency and patient experience." },
            { icon: TrendingUp, title: "Advancing the industry", desc: "Contributing to the broader transformation of healthcare technology." },
          ].map((item, i) => {
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

    {/* Key Takeaways */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-12">Key takeaways</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "Borna AI's vision is to become the unified operating system for healthcare",
            "The mission focuses on practical, measurable outcomes across four pillars",
            "The transformation from fragmented to optimized is architectural — value compounds over time",
            "AI capabilities, integrations, and modules are in active development with no endpoint",
          ].map((text, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center">
              <Brain className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-12 md:py-20 border-t border-glass-border">
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

export default VisionMissionPage;
