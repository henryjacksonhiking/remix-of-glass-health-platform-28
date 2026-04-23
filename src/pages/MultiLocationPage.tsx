import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Network, BarChart3, ArrowRight, Bot, Target, CheckCircle2, Sparkles,
  Building, Users, TrendingUp, MessageSquare, Shield, Workflow, Settings,
  Plus, Activity, Layers,
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import StandardFAQ from "@/components/sections/StandardFAQ";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SparklesCore } from "@/components/ui/sparkles-core";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (<span className="inline-block text-[11px] tracking-[0.18em] uppercase font-semibold text-primary mb-3">{children}</span>);
const fadeUp = { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.5 } };
const SectionDark = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (<section id={id} className={`relative py-12 md:py-20 border-t border-glass-border ${className}`}><div className="container mx-auto px-4 md:px-6 relative z-10">{children}</div></section>);

const faqData = [
  { q: "What is multi-location management in healthcare?", a: "Multi-location management refers to the ability to oversee and coordinate operations, patient interactions, and performance across multiple healthcare facilities from a centralized system." },
  { q: "How can healthcare practices manage multiple locations efficiently?", a: "By using a unified platform with centralized data, standardized workflows, shared communication management, and real-time performance visibility across all locations." },
  { q: "How does Borna support multi-location practices?", a: "Borna connects all locations into one network — centralizing patient records, communication, workflows, and analytics — so the central organization has full visibility and control." },
  { q: "Can Borna scale to new locations?", a: "Yes. Adding a new location means connecting it to the existing Borna platform — the same workflows, data layer, and communication infrastructure are available immediately." },
  { q: "How does Borna compare performance across locations?", a: "Borna provides location-level analytics — tracking operational metrics, patient engagement, revenue performance, and workflow efficiency per location." },
];

const MultiLocationPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Multi-Location Healthcare Management Software | Scale Your Practice | Borna AI</title>
      <meta name="description" content="Manage multiple healthcare locations with Borna AI. Centralize operations, track performance, and scale efficiently." />
      <link rel="canonical" href="https://borna.ai/solutions/multi-location" />
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://borna.ai" }, { "@type": "ListItem", position: 2, name: "Solutions", item: "https://borna.ai/solutions" }, { "@type": "ListItem", position: 3, name: "Multi-Location Management", item: "https://borna.ai/solutions/multi-location" }] })}</script>
    </Helmet>

    <nav aria-label="breadcrumb" className="container mx-auto px-4 md:px-6 pt-20 md:pt-20 pb-0 md:pb-2"><p className="text-xs text-muted-foreground"><Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/solutions" className="hover:text-foreground">Solutions</Link> / <span className="text-primary">Multi-Location Management</span></p></nav>

    {/* Hero */}
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <Eyebrow>Multi-Location Management</Eyebrow>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">Multi-location healthcare management platform</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">Borna AI enables healthcare organizations to manage multiple locations from one unified platform. Centralize operations, monitor performance, and optimize workflows across all branches.</p>
            <div className="flex flex-row items-center gap-2 sm:gap-3"><Link to="/demo" className="gradient-btn whitespace-nowrap">Request Demo</Link><a href="#centralized-control" className="ghost-btn whitespace-nowrap">See How It Works</a></div>
          </motion.div>
          <motion.div {...fadeUp} className="relative flex items-center justify-center" aria-hidden="true">
            <svg viewBox="0 0 320 320" className="w-full max-w-sm md:max-w-md mx-auto h-auto" preserveAspectRatio="xMidYMid meet">
              <defs>
                <radialGradient id="ml-hub-grad" cx="40%" cy="35%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
                </radialGradient>
                <radialGradient id="ml-node-grad" cx="40%" cy="35%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.04" />
                </radialGradient>
              </defs>
              {/* Connection lines first */}
              {["North Clinic", "East Branch", "South Office", "West Clinic", "Central HQ"].map((label, i) => {
                const angle = (i * 72 - 90) * (Math.PI / 180);
                const x = 160 + 105 * Math.cos(angle);
                const y = 160 + 105 * Math.sin(angle);
                return (
                  <line key={`l-${i}`} x1="160" y1="160" x2={x} y2={y} stroke="hsl(var(--primary))" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 4" />
                );
              })}
              {/* Hub */}
              <circle cx="160" cy="160" r="32" fill="url(#ml-hub-grad)" stroke="hsl(var(--primary))" strokeWidth="1.5">
                <animate attributeName="r" values="32;35;32" dur="3s" repeatCount="indefinite" />
              </circle>
              <text x="160" y="158" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="700">Borna</text>
              <text x="160" y="172" textAnchor="middle" className="fill-muted-foreground" fontSize="8">Central</text>
              {/* Branch nodes */}
              {["North Clinic", "East Branch", "South Office", "West Clinic", "Central HQ"].map((label, i) => {
                const angle = (i * 72 - 90) * (Math.PI / 180);
                const x = 160 + 105 * Math.cos(angle);
                const y = 160 + 105 * Math.sin(angle);
                const labelOffsetY = y < 160 ? -22 : 26;
                return (
                  <g key={label}>
                    <circle cx={x} cy={y} r="14" fill="url(#ml-node-grad)" stroke="hsl(var(--primary))" strokeOpacity="0.5" strokeWidth="1" />
                    <text x={x} y={y + labelOffsetY} textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="500">{label}</text>
                  </g>
                );
              })}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">What is multi-location management in healthcare?</h2><p className="text-muted-foreground leading-relaxed">Multi-location management refers to the ability to oversee and coordinate operations, patient interactions, and performance across multiple healthcare facilities from a centralized system — ensuring consistency, efficiency, and scalability.</p></motion.div></SectionDark>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Challenges of managing multiple locations</h2><p className="text-muted-foreground leading-relaxed mb-4">As healthcare organizations grow, each location runs its own scheduling, uses its own communication approach, and reports performance independently. There is no central view, no shared workflow.</p><p className="text-foreground font-semibold mt-6">You can't manage what you can't see. And without a central system, you can't see across locations.</p></motion.div></SectionDark>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">A centralized platform for multi-location operations</h2><p className="text-muted-foreground leading-relaxed">Borna connects every location into one network — with a shared data layer, standardized workflows, unified communication, and real-time performance visibility from a single platform.</p></motion.div></SectionDark>

    {/* Centralized Control */}
    <SectionDark id="centralized-control">
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Manage all locations from one platform</h2></motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Layers, title: "Unified Dashboard", body: "View all locations in one place — appointments, performance, communication, and revenue metrics for every branch." },
          { icon: Workflow, title: "Standardized Workflows", body: "Apply consistent procedures across all locations — same scheduling logic, communication sequences, and patient management processes." },
          { icon: MessageSquare, title: "Centralized Communication", body: "Manage all patient communication across all branches from one place.", link: "/ecosystem/communication", linkText: "Explore Communication Layer →" },
        ].map((card, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-2xl p-6 hover:bg-glass-hover transition-all">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><card.icon className="w-5 h-5" /></div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{card.body}</p>
            {card.link && <Link to={card.link} className="text-sm text-primary hover:underline inline-flex items-center gap-1">{card.linkText} <ArrowRight className="w-3.5 h-3.5" /></Link>}
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* Location-level visibility */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Monitor each location individually</h2><p className="text-muted-foreground">Borna provides location-level analytics — so you can drill down into any single branch to understand its performance.</p></motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {[
          { icon: BarChart3, title: "Per-Location Performance Tracking", body: "Every location's key metrics are tracked independently." },
          { icon: Target, title: "Cross-Location Comparison", body: "Compare any metric across all locations simultaneously." },
          { icon: Activity, title: "Underperformance Detection", body: "When a location's metrics fall below benchmarks, the system flags it automatically." },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-5 text-center">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3"><item.icon className="w-5 h-5" /></div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* Patient management */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Manage patients across multiple locations</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">Borna's unified patient record ensures that every location has the same complete picture of each patient.</p>
        <Link to="/ecosystem/crm-lifecycle" className="text-sm text-primary hover:underline inline-flex items-center gap-1">Explore CRM & Lifecycle Layer <ArrowRight className="w-3.5 h-3.5" /></Link>
      </motion.div>
    </SectionDark>

    {/* AI */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Optimize multi-location operations with AI</h2></motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {[
          { icon: BarChart3, title: "Performance Difference Analysis", body: "AI compares performance across locations and identifies the specific factors driving differences." },
          { icon: Target, title: "Operational Inefficiency Detection", body: "AI surfaces inefficiencies within individual locations — scheduling gaps, communication delays." },
          { icon: Bot, title: "Growth Opportunity Identification", body: "AI identifies patterns across the network — patient demand trends, underutilized capacity." },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-5 text-center">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3"><item.icon className="w-5 h-5" /></div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* Scalability */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Scale your practice with confidence</h2><p className="text-muted-foreground">Adding a new location doesn't require rebuilding systems — it means connecting one more node to the existing network.</p></motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {[
          { icon: Plus, title: "Easy Location Addition", body: "New locations connect to the existing platform — operational immediately." },
          { icon: CheckCircle2, title: "Maintained Consistency", body: "Every new location inherits the same processes and quality benchmarks." },
          { icon: TrendingUp, title: "Efficient Growth", body: "Managing 10 locations is not significantly harder than managing 3." },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-5 text-center">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3"><item.icon className="w-5 h-5" /></div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* Business Value */}
    <SectionDark>
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground">Why multi-location management matters</h2></motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { icon: Settings, title: "Improved Operational Efficiency", body: "Standardized workflows eliminate the duplication and inconsistency in fragmented organizations." },
          { icon: Users, title: "Consistent Patient Experience", body: "Every patient at every location receives the same quality of care coordination." },
          { icon: Network, title: "Scalable Growth", body: "More locations, same control — the platform handles organizational complexity." },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-5 text-center">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3"><item.icon className="w-5 h-5" /></div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* How It Works */}
    <SectionDark>
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground">How Borna manages multi-location operations</h2></motion.div>
      <div className="grid md:grid-cols-5 gap-4">
        {[
          { n: 1, title: "Connect", body: "Connect all locations to the Borna platform" },
          { n: 2, title: "Centralize", body: "All data centralized in one accessible system" },
          { n: 3, title: "Monitor", body: "Real-time visibility into every location's performance" },
          { n: 4, title: "Optimize", body: "AI identifies gaps and opportunities across the network" },
          { n: 5, title: "Scale", body: "New locations added to the existing network immediately" },
        ].map((step) => (
          <motion.div key={step.n} {...fadeUp} className="glass-panel rounded-xl p-5 text-center">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold mx-auto mb-3">{step.n}</div>
            <h3 className="text-sm font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-xs text-muted-foreground">{step.body}</p>
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* Key Takeaways */}
    <SectionDark>
      <motion.div {...fadeUp} className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-bold text-foreground">Key takeaways</h2></motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Borna centralizes management of all locations into one platform", "Full visibility at every level — individual and organizational metrics", "AI identifies gaps and growth opportunities across the entire network", "Scalable architecture — new locations are operational immediately"].map((t, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-4 text-center"><Sparkles className="w-5 h-5 text-primary mx-auto mb-2" /><p className="text-xs text-muted-foreground">{t}</p></motion.div>
        ))}
      </div>
    </SectionDark>

    {/* FAQ */}
    <StandardFAQ items={faqData} />

    {/* CTA */}
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Manage and scale all your locations in one platform.</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">Borna AI helps you unify operations, maintain consistency, and grow your healthcare organization — with full control from one centralized platform.</p>
        <div className="cta-row"><Link to="/demo" className="gradient-btn whitespace-nowrap">Request Demo</Link><Link to="/platform" className="ghost-btn whitespace-nowrap">Explore Platform →</Link></div>
        <div className="relative w-full max-w-lg mx-auto h-40 mt-8"><div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" /><SparklesCore className="w-full h-full" background="transparent" particleColor="#ffffff" particleDensity={80} minSize={0.6} maxSize={1.4} speed={3} /></div>
      </div>
    </section>
  </PageWrapper>
);

export default MultiLocationPage;
