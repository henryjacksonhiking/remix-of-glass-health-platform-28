import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Network, BarChart3, ArrowRight, Bot, Target, CheckCircle2, Sparkles,
  Building, Users, TrendingUp, MessageSquare, Shield, Workflow, Settings,
  Plus, Activity, Layers, Globe2, Eye, Rocket,
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import StandardFAQ from "@/components/sections/StandardFAQ";
import KeyTakeaways from "@/components/sections/KeyTakeaways";
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
            <svg viewBox="0 0 480 380" className="w-full max-w-md md:max-w-lg mx-auto h-auto" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="ml-tile-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.04" />
                </linearGradient>
                <linearGradient id="ml-cmd-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="ml-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </linearGradient>
                <filter id="ml-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Subtle grid backdrop */}
              <g opacity="0.06" stroke="hsl(var(--primary))" strokeWidth="0.5">
                {Array.from({ length: 8 }).map((_, i) => (
                  <line key={`gh-${i}`} x1="0" y1={i * 50} x2="480" y2={i * 50} />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <line key={`gv-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="380" />
                ))}
              </g>

              {/* Location tiles (left column) */}
              {[
                { y: 30, name: "North Clinic", meta: "412 patients" },
                { y: 110, name: "East Branch", meta: "298 patients" },
                { y: 190, name: "South Office", meta: "356 patients" },
                { y: 270, name: "West Clinic", meta: "184 patients" },
              ].map((loc, i) => {
                const tx = 20, ty = loc.y, tw = 170, th = 60;
                const cx = tx + tw, cy = ty + th / 2;
                // Bezier into command panel left edge (320, 190)
                const ex = 320, ey = 190;
                const path = `M ${cx} ${cy} C ${cx + 60} ${cy}, ${ex - 60} ${ey}, ${ex} ${ey}`;
                return (
                  <g key={loc.name}>
                    {/* connection path base */}
                    <path d={path} fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.25" strokeWidth="1.25" />
                    {/* animated flow pulse */}
                    <path d={path} fill="none" stroke="url(#ml-flow)" strokeWidth="2" strokeDasharray="40 220" strokeLinecap="round">
                      <animate attributeName="stroke-dashoffset" from="260" to="0" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                    </path>
                    {/* tile */}
                    <rect x={tx} y={ty} width={tw} height={th} rx="10" fill="url(#ml-tile-grad)" stroke="hsl(var(--primary))" strokeOpacity="0.35" strokeWidth="1" />
                    {/* status dot */}
                    <circle cx={tx + 14} cy={ty + 14} r="3.5" fill="hsl(var(--primary))">
                      <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                    <text x={tx + 26} y={ty + 18} className="fill-foreground" fontSize="11" fontWeight="600">{loc.name}</text>
                    <text x={tx + 14} y={ty + 36} className="fill-muted-foreground" fontSize="9">{loc.meta}</text>
                    {/* mini sparkline */}
                    <polyline
                      points={`${tx + 14},${ty + 50} ${tx + 30},${ty + 46} ${tx + 46},${ty + 48} ${tx + 62},${ty + 42} ${tx + 78},${ty + 44} ${tx + 94},${ty + 38} ${tx + 110},${ty + 40}`}
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeOpacity="0.7"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                );
              })}

              {/* Central command panel */}
              <g filter="url(#ml-glow)">
                <rect x="320" y="120" width="140" height="140" rx="14" fill="url(#ml-cmd-grad)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              </g>
              {/* aura */}
              <rect x="320" y="120" width="140" height="140" rx="14" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.3">
                <animate attributeName="stroke-opacity" values="0.15;0.5;0.15" dur="3s" repeatCount="indefinite" />
              </rect>

              {/* Command panel content */}
              <text x="390" y="148" textAnchor="middle" className="fill-primary" fontSize="8" fontWeight="600" letterSpacing="1.5">BORNA CENTRAL</text>
              <line x1="338" y1="158" x2="442" y2="158" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="0.75" />

              {/* KPI rows */}
              <text x="338" y="176" className="fill-muted-foreground" fontSize="8">Locations</text>
              <text x="442" y="176" textAnchor="end" className="fill-foreground" fontSize="10" fontWeight="700">4</text>

              <text x="338" y="194" className="fill-muted-foreground" fontSize="8">Patients</text>
              <text x="442" y="194" textAnchor="end" className="fill-foreground" fontSize="10" fontWeight="700">1,250</text>

              <text x="338" y="212" className="fill-muted-foreground" fontSize="8">Uptime</text>
              <text x="442" y="212" textAnchor="end" className="fill-primary" fontSize="10" fontWeight="700">99.9%</text>

              {/* Mini bar chart */}
              <g>
                {[28, 18, 34, 22].map((h, i) => (
                  <rect key={i} x={340 + i * 26} y={244 - h} width="16" height={h} rx="2" fill="hsl(var(--primary))" fillOpacity={0.35 + i * 0.15}>
                    <animate attributeName="height" values={`${h * 0.4};${h};${h * 0.4}`} dur="3s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                    <animate attributeName="y" values={`${244 - h * 0.4};${244 - h};${244 - h * 0.4}`} dur="3s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                  </rect>
                ))}
              </g>

              {/* Output: unified insights label */}
              <g>
                <rect x="180" y="335" width="120" height="28" rx="14" fill="hsl(var(--primary))" fillOpacity="0.12" stroke="hsl(var(--primary))" strokeOpacity="0.4" strokeWidth="1" />
                <text x="240" y="353" textAnchor="middle" className="fill-primary" fontSize="10" fontWeight="600">Unified Operations</text>
              </g>
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
        ].map((step, i) => (
          <motion.div key={step.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }} className="glass-panel rounded-xl p-5 text-center">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold mx-auto mb-3">{step.n}</div>
            <h3 className="text-sm font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-xs text-muted-foreground">{step.body}</p>
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* Key Takeaways */}
    <KeyTakeaways
      items={[
        { icon: Globe2, text: "Borna centralizes management of all locations into one platform" },
        { icon: Eye, text: "Full visibility at every level — individual and organizational metrics" },
        { icon: Bot, text: "AI identifies gaps and growth opportunities across the entire network" },
        { icon: Rocket, text: "Scalable architecture — new locations are operational immediately" },
      ]}
    />

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
