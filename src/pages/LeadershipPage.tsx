import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlight-card";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layers, Brain, Heart, TrendingUp, User, Linkedin, Target, Lightbulb, Shield, Network } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";
import PageWrapper from "@/components/layout/PageWrapper";
import StandardFAQ from "@/components/sections/StandardFAQ";
import KeyTakeaways from "@/components/sections/KeyTakeaways";
import CTASection from "@/components/sections/CTASection";

const fadeIn = { hidden: { opacity: 0, y: 16 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

/* UPDATE: Replace all placeholder data with actual leader information */
const leaders = [
  {
    name: "[Leader Name]",
    title: "Founder & CEO",
    bio: "[Leadership background in healthcare technology, platform development, and scalable operations. Focused on building Borna's unified infrastructure and long-term market positioning.]",
    linkedin: "#", // UPDATE: Replace with actual LinkedIn URL
  },
  {
    name: "[Leader Name]",
    title: "Chief Technology Officer",
    bio: "[Engineering expertise in AI systems, data infrastructure, and platform architecture. Leading the development of Borna's technical stack across all four platform layers.]",
    linkedin: "#", // UPDATE: Replace with actual LinkedIn URL
  },
  {
    name: "[Leader Name]",
    title: "Head of Product",
    bio: "[Product strategy and healthcare domain expertise. Responsible for translating clinical and operational requirements into platform capabilities that deliver measurable outcomes.]",
    linkedin: "#", // UPDATE: Replace with actual LinkedIn URL
  },
  // To add a 4th leader, simply add another object to this array with the same structure
];

const approachCards = [
  { icon: Layers, title: "Platform thinking", desc: "Every capability is evaluated in the context of the whole system — not as an isolated feature." },
  { icon: Heart, title: "Healthcare focus", desc: "Decisions grounded in how healthcare practices actually operate — scheduling, communication, workflows." },
  { icon: Brain, title: "AI-driven innovation", desc: "AI integrated into the platform's foundation — not added as a marketing layer." },
  { icon: TrendingUp, title: "Scalability", desc: "Architecture decisions made for the 10th location and the 100th practice, not just the first customer." },
];

const impactCards = [
  { icon: Heart, title: "Supporting healthcare providers", desc: "Decisions made with the practice operator in mind — the physician, office manager, care coordinator." },
  { icon: Target, title: "Improved patient engagement", desc: "Every capability connects to measurable improvement in patient experience." },
  { icon: Shield, title: "Enhanced operational efficiency", desc: "Leadership prioritizes operational outcomes over feature count or surface-level metrics." },
  { icon: TrendingUp, title: "Scalable across organizations", desc: "Architecture serves single-location practices and 50-location DSOs with the same infrastructure." },
];

const faqItems = [
  { q: "Who leads Borna AI?", a: "Borna AI is led by a team with expertise in healthcare operations, AI and data systems, platform development, and digital transformation." },
  { q: "What experience does the leadership team have?", a: "The team brings experience across healthcare operations, digital transformation, AI/ML systems, platform architecture, and scalable SaaS development." },
  { q: "Why is leadership important in healthcare technology?", a: "Strong leadership ensures platforms are built for real clinical and operational workflows — not theoretical software design." },
  { q: "How does leadership approach platform development?", a: "With a focus on scalable architecture, practical healthcare solutions, and long-term value creation across communication, CRM, data, and AI." },
  { q: "What is the leadership team's vision for healthcare?", a: "To become the unified operating system for healthcare practices — centralizing communication, data, and workflows into one intelligent platform." },
];

const LeadershipPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Borna AI Leadership Team | Healthcare AI Platform Executives</title>
      <meta name="description" content="Meet the leadership team behind Borna AI. Learn how our executives are building a unified healthcare platform for communication, automation, and growth." />
    </Helmet>

    {/* Breadcrumb */}
    <div className="container mx-auto px-4 md:px-6 pt-4">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/company" className="hover:text-foreground">Company</Link> / <span className="text-primary">Leadership</span>
      </nav>
    </div>

    {/* Hero */}
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="absolute inset-0 opacity-50"><BeamsBackground intensity="medium" /></div>
      <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full blur-[120px] bg-primary/12 animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-56 h-56 rounded-full blur-[100px] bg-deep-blue/10 animate-glow-pulse pointer-events-none" style={{ animationDelay: "1.5s" }} />
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="hero-headline text-foreground mb-6">Leadership team</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="body-text mb-8">
              Borna AI is led by a team focused on building a unified platform for healthcare communication, operations, and growth.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-3">
              <Link to="/about" className="gradient-btn text-sm">Learn About Borna</Link>
              <Link to="/platform" className="border border-glass-border text-foreground px-5 py-2.5 rounded-lg text-sm hover:bg-glass transition-colors">Explore Platform</Link>
            </motion.div>
          </div>
          {/* Faint platform stack */}
          <div className="hidden md:block opacity-55">
            <div className="space-y-2 w-40 mx-auto">
              {["Communication", "CRM", "Data", "AI"].map((l, i) => (
                <motion.div key={l} animate={{ opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, delay: i }}
                  className="glass-panel px-3 py-2 border-l-2 border-primary/40 hover-glow-card">
                  <span className="text-xs text-muted-foreground">{l}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Intro context */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <h2 className="section-headline text-foreground mb-4">Leadership in healthcare technology</h2>
        <p className="body-text mx-auto">
          Strong leadership is essential in building healthcare platforms that are scalable, secure, and impactful. At Borna AI, our leadership team is committed to developing solutions that address real-world challenges in healthcare operations.
        </p>
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
    </section>

    {/* Executive Team */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline gradient-text text-center mb-16">Executive leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              role="article"
              aria-label={`${leader.name}, ${leader.title} — leadership card`}
              className="glass-panel overflow-hidden hover:translate-y-[-3px] transition-all duration-300 group"
            >
              {/* UPDATE: Replace this placeholder with actual leader photo. */}
              <div className="aspect-[3/4] bg-gradient-to-b from-primary/10 to-background/50 border-b border-glass-border flex flex-col items-center justify-center" aria-label={`Photo placeholder for ${leader.title}`}>
                <User className="w-16 h-16 text-primary" />
                <span className="text-xs text-muted-foreground mt-2">[Photo]</span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-foreground">{leader.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{leader.title}</p>
                <div className="h-px bg-primary/20 mb-3" />
                <p className="text-sm text-muted-foreground mb-4">{leader.bio}</p>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${leader.name} on LinkedIn`}
                  className="inline-flex text-muted-foreground hover:text-primary transition-colors"
                >
                  {/* UPDATE: Replace href="#" with actual LinkedIn URL */}
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership Approach */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-4">Our leadership approach</h2>
        <p className="body-text text-center mx-auto max-w-2xl mb-12">
          Four principles that run through every architecture decision, product direction, and operational choice.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {approachCards.map((card, i) => {
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

    {/* Industry Expertise */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-12">Expertise across healthcare and technology</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Healthcare operations", desc: "Understanding how practices schedule, communicate, track performance, and scale." },
            { title: "Digital transformation", desc: "Leading transition from legacy systems to integrated platforms." },
            { title: "AI & data systems", desc: "ML, data pipelines, and AI-driven automation for healthcare workflows." },
            { title: "Platform development", desc: "Modular, scalable platforms that compound in capability over time." },
          ].map((item, i) => (
            <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center">
              <Network className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="text-sm font-medium text-foreground mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
    </section>

    {/* Platform Connection */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center gap-8">
            <div className="flex flex-col gap-4">
              {["CEO", "CTO", "Product"].map((role, i) => (
                <motion.div key={role} animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 6, repeat: Infinity, delay: i * 2 }}
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center" aria-label={`${role} node`}>
                  <span className="text-xs text-primary">{role}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col gap-1">
              {[0,1,2].map(i => <div key={i} className="w-12 h-px bg-primary/30" />)}
            </div>
            <div className="space-y-1 w-28">
              {["Comm", "CRM", "Data", "AI"].map((l) => (
                <div key={l} className="glass-panel px-2 py-1.5 border-l border-primary/40 hover-glow-card">
                  <span className="text-[9px] text-muted-foreground">{l}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="section-headline text-foreground mb-4">Leadership behind the Borna platform</h2>
            <p className="body-text mb-4">
              The Borna platform reflects the architectural decisions, product philosophy, and healthcare domain knowledge of the people who built it.
            </p>
            <Link to="/platform" className="text-sm text-primary hover:underline">Explore the Borna platform →</Link>
          </div>
        </div>
      </div>
    </section>

    {/* Organizational Impact */}
    <section className="py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline gradient-text text-center mb-12">Driving impact across healthcare organizations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {impactCards.map((card, i) => {
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
        { icon: Brain, text: "Led by a team with expertise across healthcare, AI, platform architecture, and digital transformation" },
        { icon: Target, text: "Every decision evaluated through the lens of scalable platform development" },
        { icon: Network, text: "Aligned with Borna's long-term vision of becoming the unified healthcare operating system" },
        { icon: Lightbulb, text: "Continuous innovation built into the leadership philosophy" },
      ]}
    />

    {/* FAQ */}
    <StandardFAQ items={faqItems} />

    <CTASection />
  </PageWrapper>
);

export default LeadershipPage;
