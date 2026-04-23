import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Network, BarChart3, ArrowRight, Bot, Sparkles, CheckCircle2, XCircle, Users, TrendingUp, MessageSquare, Building, Shield, Layers, Plus, Workflow } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import StandardFAQ from "@/components/sections/StandardFAQ";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SparklesCore } from "@/components/ui/sparkles-core";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (<span className="inline-block text-[11px] tracking-[0.18em] uppercase font-semibold text-primary mb-3">{children}</span>);
const fadeUp = { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.5 } };
const SectionDark = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (<section id={id} className={`relative py-12 md:py-20 border-t border-glass-border ${className}`}><div className="container mx-auto px-4 md:px-6 relative z-10">{children}</div></section>);

const faqData = [
  { q: "What is a DSO or MSO in healthcare?", a: "A DSO manages administrative and business functions for multiple dental practices. An MSO provides similar centralized management for medical or multi-specialty groups." },
  { q: "How can DSOs and MSOs manage multiple locations effectively?", a: "By centralizing operations on a unified platform with shared data, standardized workflows, unified communication, and real-time performance visibility across all locations." },
  { q: "How does Borna support DSOs and MSOs?", a: "Borna provides a unified operating system — centralizing communication, patient lifecycle management, workflows, and analytics into one platform." },
  { q: "How does Borna help DSOs and MSOs scale?", a: "New locations connect to the existing platform — inheriting all workflows, communication infrastructure, and analytics immediately." },
  { q: "What analytics does Borna provide for multi-location networks?", a: "Performance analytics at every level — individual location, department, regional, and organizational totals." },
];

const DsoMsoPage = () => (
  <PageWrapper>
    <Helmet>
      <title>DSO & MSO Software Platform | Multi-Location Healthcare Management | Borna AI</title>
      <meta name="description" content="Manage and scale multi-location healthcare groups with Borna AI. Centralize operations, optimize performance, and unify communication across all locations." />
      <link rel="canonical" href="https://borna.ai/industries/dso-mso" />
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://borna.ai" }, { "@type": "ListItem", position: 2, name: "Industries", item: "https://borna.ai/industries" }, { "@type": "ListItem", position: 3, name: "Multi-Location Groups (DSO/MSO)", item: "https://borna.ai/industries/dso-mso" }] })}</script>
    </Helmet>
    <nav aria-label="breadcrumb" className="container mx-auto px-4 md:px-6 pt-20 md:pt-20 pb-0 md:pb-2"><p className="text-xs text-muted-foreground"><Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/industries" className="hover:text-foreground">Industries</Link> / <span className="text-primary">Multi-Location Groups (DSO/MSO)</span></p></nav>

    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <Eyebrow>Enterprise Healthcare</Eyebrow>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">Platform for multi-location healthcare groups (DSOs & MSOs)</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">Borna AI enables DSOs, MSOs, and multi-location healthcare groups to centralize operations, optimize performance, and scale efficiently. Unify communication, data, and workflows across all locations.</p>
            <div className="flex flex-row items-center gap-2 sm:gap-3"><Link to="/demo" className="gradient-btn whitespace-nowrap">Request Enterprise Demo</Link><Link to="/platform" className="ghost-btn whitespace-nowrap">Explore Platform</Link></div>
          </motion.div>
          <motion.div {...fadeUp} className="flex items-center justify-center" aria-hidden="true">
            <svg viewBox="0 0 340 340" className="w-72 h-72 md:w-80 md:h-80">
              <circle cx="170" cy="170" r="18" className="fill-primary/15 stroke-primary" strokeWidth="1.5"><animate attributeName="r" values="18;20;18" dur="4s" repeatCount="indefinite" /></circle>
              <text x="170" y="168" textAnchor="middle" className="fill-primary" fontSize="5" fontWeight="600">Borna AI</text>
              <text x="170" y="176" textAnchor="middle" className="fill-muted-foreground" fontSize="4">Enterprise Platform</text>
              {["Region 1", "Clinic A", "Practice B", "Network C", "Group D"].map((label, i) => { const angle = (i * 72 - 90) * (Math.PI / 180); const x = 170 + 85 * Math.cos(angle); const y = 170 + 85 * Math.sin(angle); return (<g key={label}><line x1="170" y1="170" x2={x} y2={y} className="stroke-primary/30" strokeWidth="0.8" /><circle cx={x} cy={y} r="10" className="fill-primary/10 stroke-primary/40" strokeWidth="0.8" /><text x={x} y={y + 3} textAnchor="middle" className="fill-foreground" fontSize="4.5">{label}</text></g>); })}
              {["Clinic E", "Practice F", "Network G"].map((label, i) => { const angle = ((i * 120 + 30) - 90) * (Math.PI / 180); const x = 170 + 130 * Math.cos(angle); const y = 170 + 130 * Math.sin(angle); return (<g key={label}><line x1="170" y1="170" x2={x} y2={y} className="stroke-primary/20" strokeWidth="0.5" /><circle cx={x} cy={y} r="8" className="fill-primary/5 stroke-primary/30" strokeWidth="0.5" /><text x={x} y={y + 3} textAnchor="middle" className="fill-muted-foreground" fontSize="4">{label}</text></g>); })}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">What are DSOs and MSOs in healthcare?</h2><p className="text-muted-foreground leading-relaxed">DSOs manage administrative and business functions for multiple dental practices. MSOs provide the same centralized management for medical groups. These organizations rely on centralized systems for efficiency, consistency, and scalability.</p></motion.div></SectionDark>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Challenges in managing multi-location healthcare groups</h2><p className="text-muted-foreground leading-relaxed mb-4">As organizations grow, each location may run its own scheduling, communication, and patient management. The central organization has limited visibility — no single view of the network.</p><p className="text-foreground font-semibold mt-6">You cannot lead a network you cannot see.</p></motion.div></SectionDark>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">A unified operating system for healthcare networks</h2><p className="text-muted-foreground leading-relaxed">Borna connects every location into one managed network — with shared data infrastructure, standardized workflows, unified communication, and real-time performance visibility across the entire organization.</p></motion.div></SectionDark>

    <SectionDark id="capabilities">
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Enterprise management capabilities</h2></motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Layers, title: "Centralized Operations", body: "Manage all locations from one platform — unified workflows, shared data, consistent standards.", link: "/solutions/multi-location", linkText: "Explore Multi-Location Management →" },
          { icon: BarChart3, title: "Network-Level Analytics", body: "Performance analytics at every level — individual location, regional grouping, and organizational totals." },
          { icon: MessageSquare, title: "Unified Communication", body: "All patient communication across all locations managed from one system.", link: "/ecosystem/communication", linkText: "Explore Communication Layer →" },
          { icon: Bot, title: "AI-Powered Optimization", body: "AI compares performance across locations, identifies gaps, and recommends targeted interventions." },
          { icon: Plus, title: "Scalable Architecture", body: "New locations connect to the existing platform — operational immediately with all existing standards." },
          { icon: Shield, title: "Enterprise Compliance", body: "Consistent data management, communication standards, and operational compliance across every location." },
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

    <SectionDark><motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground">Why healthcare networks choose Borna</h2></motion.div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="glass-panel rounded-2xl p-6 opacity-60"><p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Fragmented Operations</p>{["Each location runs independently", "No centralized data view", "Inconsistent patient experience", "Performance blind spots across network", "Scaling adds complexity"].map((t) => (<div key={t} className="flex items-start gap-2 mb-2"><XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" /><span className="text-sm text-muted-foreground">{t}</span></div>))}</div>
        <div className="glass-panel rounded-2xl p-6 border-primary/20"><p className="text-xs text-primary uppercase tracking-wider mb-4">With Borna</p>{["All locations on one platform", "Full organizational visibility", "Consistent standards across every branch", "AI-driven performance insights", "New locations operational immediately"].map((t) => (<div key={t} className="flex items-start gap-2 mb-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span className="text-sm text-foreground">{t}</span></div>))}</div>
      </div>
    </SectionDark>

    <SectionDark><motion.div {...fadeUp} className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-bold text-foreground">Key takeaways</h2></motion.div><div className="grid grid-cols-2 md:grid-cols-4 gap-4">{["Borna provides a unified operating system for multi-location healthcare networks", "Full visibility at every organizational level — location, region, and network", "AI identifies performance gaps and growth opportunities across all locations", "Enterprise-grade scalability — new locations connect and operate immediately"].map((t, i) => (<motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-4 text-center"><Sparkles className="w-5 h-5 text-primary mx-auto mb-2" /><p className="text-xs text-muted-foreground">{t}</p></motion.div>))}</div></SectionDark>

    <StandardFAQ items={faqData} />

    <section className="py-12 md:py-20 relative overflow-hidden"><div className="container mx-auto px-4 md:px-6 relative z-10 text-center"><h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Scale your healthcare network with Borna AI.</h2><p className="text-muted-foreground max-w-xl mx-auto mb-8">Centralize operations, optimize performance, and grow your organization — with full control from one enterprise platform.</p><div className="cta-row"><Link to="/demo" className="gradient-btn whitespace-nowrap">Request Enterprise Demo</Link><Link to="/platform" className="ghost-btn whitespace-nowrap">Explore Platform →</Link></div><div className="relative w-full max-w-lg mx-auto h-40 mt-8"><div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" /><SparklesCore className="w-full h-full" background="transparent" particleColor="#ffffff" particleDensity={80} minSize={0.6} maxSize={1.4} speed={3} /></div></div></section>
  </PageWrapper>
);
export default DsoMsoPage;
