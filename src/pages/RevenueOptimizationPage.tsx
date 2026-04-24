import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  TrendingUp, DollarSign, BarChart3, ArrowRight, Bot, Target, UserPlus,
  Heart, Zap, CalendarCheck, Sparkles, CheckCircle2, XCircle, Activity,
  Percent, Users, Layers, Wand2, ShieldCheck, LineChart,
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
  { q: "What is revenue optimization in healthcare?", a: "Revenue optimization in healthcare refers to improving financial performance by increasing patient acquisition, maximizing retention, and enhancing operational efficiency — using data, automation, and AI insights." },
  { q: "How can healthcare practices increase revenue?", a: "By improving lead conversion rates, reducing no-shows, increasing patient lifetime value through better retention, and eliminating inefficient manual workflows." },
  { q: "How does Borna help increase practice revenue?", a: "Borna connects patient acquisition, retention, and operational automation into one system — capturing every lead, converting more inquiries into appointments, keeping patients returning, and continuously optimizing performance." },
  { q: "What revenue metrics does Borna track?", a: "Conversion rates, patient lifetime value, cost per acquisition, no-show rates, operational efficiency metrics, and campaign ROI." },
  { q: "How does AI improve healthcare revenue?", a: "Borna's AI identifies revenue gaps, predicts patient behavior, optimizes conversion strategies, and continuously refines workflows based on outcome data." },
];

const RevenueOptimizationPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Healthcare Revenue Optimization Platform | Increase Practice Revenue | Borna AI</title>
      <meta name="description" content="Optimize healthcare revenue with Borna AI. Increase patient conversions, reduce no-shows, and improve lifetime value with AI-driven insights and automation." />
      <link rel="canonical" href="https://borna.ai/solutions/revenue-optimization" />
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://borna.ai" }, { "@type": "ListItem", position: 2, name: "Solutions", item: "https://borna.ai/solutions" }, { "@type": "ListItem", position: 3, name: "Revenue Optimization", item: "https://borna.ai/solutions/revenue-optimization" }] })}</script>
    </Helmet>

    <nav aria-label="breadcrumb" className="container mx-auto px-4 md:px-6 pt-20 md:pt-20 pb-0 md:pb-2"><p className="text-xs text-muted-foreground"><Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/solutions" className="hover:text-foreground">Solutions</Link> / <span className="text-primary">Revenue Optimization</span></p></nav>

    {/* Hero */}
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <Eyebrow>Revenue Optimization</Eyebrow>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">Revenue optimization platform for healthcare practices</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">Borna AI helps healthcare practices increase revenue by optimizing patient acquisition, improving retention, and automating operations. From lead generation to long-term patient value, Borna ensures every opportunity contributes to growth.</p>
            <div className="flex flex-row items-center gap-2 sm:gap-3"><Link to="/demo" className="gradient-btn whitespace-nowrap">Request Demo</Link><a href="#revenue-drivers" className="ghost-btn whitespace-nowrap">See How It Works</a></div>
          </motion.div>
          <motion.div {...fadeUp} className="relative md:scale-110 lg:scale-125 md:origin-center" aria-hidden="true">
            <svg viewBox="0 0 520 360" className="w-full max-w-xl mx-auto h-auto" preserveAspectRatio="xMidYMid meet">
              <defs>
                <radialGradient id="rev-node-grad" cx="40%" cy="35%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
                </radialGradient>
                <radialGradient id="rev-hub-grad" cx="40%" cy="35%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.12" />
                </radialGradient>
                <linearGradient id="rev-line-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                </linearGradient>
                <filter id="rev-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Hub coordinates: center (260, 180), r=38 */}
              {[
                { y: 70, l: "Patient Acquisition" },
                { y: 140, l: "Patient Retention" },
                { y: 220, l: "Practice Automation" },
                { y: 290, l: "Performance Data" },
              ].map((input, i) => {
                // Compute clean line from node edge to hub edge
                const nx = 60, ny = input.y, hx = 260, hy = 180, hr = 38, nr = 10;
                const dx = hx - nx, dy = hy - ny;
                const dist = Math.hypot(dx, dy);
                const x1 = nx + (dx / dist) * nr;
                const y1 = ny + (dy / dist) * nr;
                const x2 = hx - (dx / dist) * hr;
                const y2 = hy - (dy / dist) * hr;
                return (
                  <g key={i}>
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--primary))" strokeOpacity="0.35" strokeWidth="1.25">
                      <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                    </line>
                    <circle cx={nx} cy={ny} r={nr} fill="url(#rev-node-grad)" stroke="hsl(var(--primary))" strokeOpacity="0.6" strokeWidth="1.25" />
                    <text x={nx + 18} y={ny + 4} className="fill-foreground" fontSize="12" fontWeight="500">{input.l}</text>
                  </g>
                );
              })}

              {/* Hub */}
              <circle cx="260" cy="180" r="38" fill="url(#rev-hub-grad)" stroke="hsl(var(--primary))" strokeWidth="1.75" filter="url(#rev-glow)">
                <animate attributeName="r" values="38;42;38" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="260" cy="180" r="38" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.25" strokeWidth="1">
                <animate attributeName="r" values="38;58;38" dur="3s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
              </circle>
              <text x="260" y="178" textAnchor="middle" className="fill-foreground" fontSize="13" fontWeight="700">Borna AI</text>
              <text x="260" y="192" textAnchor="middle" className="fill-muted-foreground" fontSize="9">Revenue Engine</text>

              {/* Smooth growth curve from hub edge (298, 180) to revenue node (470, 70) */}
              <path
                d="M 298 180 C 340 175, 370 150, 400 130 S 450 90, 468 78"
                fill="none"
                stroke="url(#rev-line-grad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                filter="url(#rev-glow)"
                strokeDasharray="260"
                strokeDashoffset="260"
              >
                <animate attributeName="stroke-dashoffset" from="260" to="0" dur="1.6s" begin="0.4s" fill="freeze" />
              </path>

              {/* Revenue endpoint */}
              <circle cx="470" cy="70" r="14" fill="url(#rev-hub-grad)" stroke="hsl(var(--primary))" strokeWidth="1.5" filter="url(#rev-glow)" opacity="0">
                <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="2s" fill="freeze" />
                <animate attributeName="r" values="14;17;14" dur="2.5s" begin="2.4s" repeatCount="indefinite" />
              </circle>
              <text x="470" y="42" textAnchor="middle" className="fill-primary" fontSize="13" fontWeight="700" opacity="0">
                Revenue ↑
                <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2.1s" fill="freeze" />
              </text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">What is revenue optimization in healthcare?</h2><p className="text-muted-foreground leading-relaxed">Revenue optimization involves improving financial performance by increasing patient acquisition, maximizing retention, and enhancing operational efficiency — using data, automation, and insights at every stage of the patient journey.</p></motion.div></SectionDark>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Why healthcare practices lose revenue</h2><p className="text-muted-foreground leading-relaxed mb-4">Revenue loss in healthcare is rarely dramatic — it happens quietly, everywhere at once. A missed call becomes a lost patient. A slow follow-up becomes a cancelled appointment. An inefficient workflow consumes staff hours.</p><p className="text-foreground font-semibold mt-6">Revenue isn't lost in one moment. It leaks away through every gap in the system.</p></motion.div></SectionDark>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">A unified revenue optimization system</h2><p className="text-muted-foreground leading-relaxed">Borna connects acquisition, retention, automation, and data into one revenue system — closing every gap, optimizing every conversion point, and measuring the financial impact of every activity.</p></motion.div></SectionDark>

    {/* Revenue Drivers */}
    <SectionDark id="revenue-drivers">
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">The key drivers of revenue growth</h2><p className="text-muted-foreground">Four mechanisms — each a distinct lever for revenue growth, all connected through one platform.</p></motion.div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[
          { icon: UserPlus, badge: "Live", title: "Patient Acquisition", body: "Every lead captured and converted adds immediate new revenue.", link: "/solutions/patient-acquisition", linkText: "Explore Patient Acquisition →" },
          { icon: Heart, badge: "Live", title: "Patient Retention", body: "Retained patients generate compounding revenue — every returning patient is one that doesn't need re-acquiring.", link: "/solutions/patient-retention", linkText: "Explore Patient Retention →" },
          { icon: CalendarCheck, badge: "Available", title: "No-Show Reduction", body: "Every no-show is a slot that generates no revenue. Automated reminders fill the schedule." },
          { icon: Zap, badge: "Available", title: "Workflow Efficiency", body: "Automated operations reduce the cost of serving each patient — improving margin on every revenue dollar.", link: "/solutions/practice-automation", linkText: "Explore Practice Automation →" },
        ].map((card, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-2xl p-6 hover:bg-glass-hover transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><card.icon className="w-5 h-5" /></div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{card.badge}</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{card.body}</p>
            {card.link && <Link to={card.link} className="text-sm text-primary hover:underline inline-flex items-center gap-1">{card.linkText} <ArrowRight className="w-3.5 h-3.5" /></Link>}
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* Revenue Journey */}
    <SectionDark>
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">From lead to revenue: the full journey</h2></motion.div>
      <div className="grid md:grid-cols-5 gap-4">
        {[
          { title: "Lead Capture", sub: "First contact logged and tracked" },
          { title: "Engagement", sub: "Prospect nurtured toward decision" },
          { title: "Conversion", sub: "Appointment booked — revenue begins" },
          { title: "Retention", sub: "Return visits secured — revenue compounds" },
          { title: "Lifetime Value", sub: "Long-term relationship — maximum revenue" },
        ].map((stage, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-5 text-center" style={{ opacity: 0.7 + i * 0.075 }}>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold mx-auto mb-3">{i + 1}</div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{stage.title}</h3>
            <p className="text-xs text-muted-foreground">{stage.sub}</p>
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* AI */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">AI-powered revenue insights</h2><p className="text-muted-foreground leading-relaxed">Borna's AI continuously analyzes performance across every revenue driver — identifying where leads are lost, where conversion drops, and where inefficiency erodes margin.</p></motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {[
          { icon: Target, title: "Revenue Gap Identification", body: "AI identifies exactly where revenue is being lost — which channels underconvert, where patients disengage." },
          { icon: Bot, title: "Strategy Optimization", body: "AI continuously adjusts strategies based on observed performance — not on assumptions." },
          { icon: TrendingUp, title: "Outcome Prediction", body: "AI forecasts future revenue based on current trajectories — surfacing opportunities before they're missed." },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-5 text-center">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3"><item.icon className="w-5 h-5" /></div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* Data & Performance */}
    <SectionDark>
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Measure and improve revenue performance</h2></motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {[
          { icon: Percent, title: "Conversion Rate Tracking" },
          { icon: Users, title: "Patient Lifetime Value" },
          { icon: DollarSign, title: "Cost Per Acquisition" },
          { icon: BarChart3, title: "Operational Efficiency" },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-4 text-center"><item.icon className="w-5 h-5 text-primary mx-auto mb-2" /><span className="text-xs font-medium text-foreground">{item.title}</span></motion.div>
        ))}
      </div>
      <div className="text-center mt-6"><Link to="/ecosystem/data-integration" className="text-sm text-primary hover:underline inline-flex items-center gap-1">Explore Data & Integration Layer <ArrowRight className="w-3.5 h-3.5" /></Link></div>
    </SectionDark>

    {/* Business Value */}
    <SectionDark>
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground">Why revenue optimization matters</h2></motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { icon: TrendingUp, title: "Increased Revenue Per Patient", body: "Every patient generates more revenue over their lifetime when acquisition, retention, and automation work together." },
          { icon: BarChart3, title: "Improved Capacity Utilization", body: "Fewer empty slots, fewer no-shows, more efficient scheduling — the same capacity generates more revenue." },
          { icon: Sparkles, title: "Scale Without Proportional Cost", body: "More patients, more revenue, the same team — automation and AI make scale financially efficient." },
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
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground">How Borna optimizes revenue</h2></motion.div>
      <div className="grid md:grid-cols-5 gap-4">
        {[
          { n: 1, title: "Capture", body: "Capture patient data, lead sources, and operational metrics from all connected systems" },
          { n: 2, title: "Analyze", body: "AI analyzes performance across all revenue drivers — identifying gaps, patterns, and opportunities" },
          { n: 3, title: "Optimize", body: "AI optimizes acquisition, retention, and automation strategies based on analyzed performance" },
          { n: 4, title: "Execute", body: "Optimized workflows execute automatically — follow-ups sent, schedules filled, capacity maximized" },
          { n: 5, title: "Grow", body: "Revenue compounds as the optimized system continuously captures more value" },
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
        { icon: DollarSign, text: "Borna connects patient acquisition, retention, automation, and data into one unified revenue system" },
        { icon: Bot, text: "AI continuously identifies revenue gaps and optimizes strategies across all performance dimensions" },
        { icon: Wand2, text: "Automation prevents revenue loss and increases capacity — allowing practices to grow efficiently" },
        { icon: LineChart, text: "Full performance tracking connects every practice activity to measurable financial outcomes" },
      ]}
    />

    {/* FAQ */}
    <StandardFAQ items={faqData} />

    {/* CTA */}
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Turn every opportunity into revenue.</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">Borna AI helps healthcare practices maximize revenue across acquisition, retention, and operations — through one connected platform.</p>
        <div className="cta-row"><Link to="/demo" className="gradient-btn whitespace-nowrap">Request Demo</Link><Link to="/platform" className="ghost-btn whitespace-nowrap">Explore Platform →</Link></div>
        <div className="relative w-full max-w-lg mx-auto h-40 mt-8"><div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" /><SparklesCore className="w-full h-full" background="transparent" particleColor="#ffffff" particleDensity={80} minSize={0.6} maxSize={1.4} speed={3} /></div>
      </div>
    </section>
  </PageWrapper>
);

export default RevenueOptimizationPage;
