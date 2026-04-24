import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Network, BarChart3, ArrowRight, Bot, Sparkles, CheckCircle2, XCircle, Users, TrendingUp, MessageSquare, Building, Shield, Layers, Plus, Workflow, Cpu, Eye, Rocket } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import StandardFAQ from "@/components/sections/StandardFAQ";
import KeyTakeaways from "@/components/sections/KeyTakeaways";
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
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight break-words">Platform for multi-location healthcare groups (DSOs &amp; MSOs)</h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-lg">Borna AI enables DSOs, MSOs, and multi-location healthcare groups to centralize operations, optimize performance, and scale efficiently. Unify communication, data, and workflows across all locations.</p>
            <div className="cta-row justify-start"><Link to="/demo" className="gradient-btn">Enterprise Demo</Link><Link to="/platform" className="ghost-btn">Explore Platform</Link></div>
          </motion.div>
          <motion.div {...fadeUp} className="w-full" aria-hidden="true">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow */}
              <div className="absolute -inset-6 rounded-3xl opacity-60 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(0,222,196,0.25), rgba(74,127,255,0.12) 60%, transparent 75%)" }} />

              {/* Dashboard window */}
              <div className="relative rounded-2xl overflow-hidden border border-glass-border backdrop-blur-xl" style={{ background: "linear-gradient(145deg, rgba(20,28,55,0.85), rgba(13,21,53,0.95))" }}>
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-glass-border">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                  </div>
                  <span className="text-[11px] text-muted-foreground tracking-wider">Enterprise · 42 locations</span>
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-3 gap-3 p-4">
                  {[
                    { label: "Locations", value: "42", trend: "+3" },
                    { label: "Active Patients", value: "18.4k", trend: "+12%" },
                    { label: "Revenue MTD", value: "$2.1M", trend: "+8%" },
                  ].map((kpi) => (
                    <div key={kpi.label} className="rounded-lg p-3 border border-glass-border" style={{ background: "rgba(255,255,255,0.03)" }}>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{kpi.label}</p>
                      <p className="text-lg font-bold text-foreground leading-none">{kpi.value}</p>
                      <p className="text-[10px] text-primary mt-1 font-medium">{kpi.trend}</p>
                    </div>
                  ))}
                </div>

                {/* Region rows */}
                <div className="px-4 pb-4 space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Regional Performance</p>
                  {[
                    { region: "Northeast", clinics: 12, perf: 92 },
                    { region: "Midwest", clinics: 9, perf: 78 },
                    { region: "South", clinics: 14, perf: 85 },
                    { region: "West Coast", clinics: 7, perf: 88 },
                  ].map((r, i) => (
                    <motion.div
                      key={r.region}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 border border-glass-border"
                      style={{ background: "rgba(255,255,255,0.02)" }}
                    >
                      <div className="w-1 h-8 rounded-full bg-primary/60" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-foreground">{r.region}</p>
                        <p className="text-[10px] text-muted-foreground">{r.clinics} clinics</p>
                      </div>
                      <div className="flex-1 max-w-[120px]">
                        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${r.perf}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.08, duration: 0.8 }}
                            className="h-full rounded-full"
                            style={{ background: "linear-gradient(90deg, rgba(0,222,196,0.9), rgba(74,127,255,0.9))" }}
                          />
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-primary tabular-nums w-8 text-right">{r.perf}%</span>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-4 py-2.5 border-t border-glass-border" style={{ background: "rgba(0,0,0,0.2)" }}>
                  <div className="flex items-center gap-2">
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    <span className="text-[10px] text-muted-foreground">Synced across all locations</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">live</span>
                </div>
              </div>
            </div>
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

    <KeyTakeaways
      items={[
        { icon: Cpu, text: "Borna provides a unified operating system for multi-location healthcare networks" },
        { icon: Eye, text: "Full visibility at every organizational level — location, region, and network" },
        { icon: Bot, text: "AI identifies performance gaps and growth opportunities across all locations" },
        { icon: Rocket, text: "Enterprise-grade scalability — new locations connect and operate immediately" },
      ]}
    />

    <StandardFAQ items={faqData} />

    <section className="py-12 md:py-20 relative overflow-hidden"><div className="container mx-auto px-4 md:px-6 relative z-10 text-center"><h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 break-words">Scale your healthcare network with Borna AI.</h2><p className="text-muted-foreground max-w-xl mx-auto mb-8">Centralize operations, optimize performance, and grow your organization — with full control from one enterprise platform.</p><div className="cta-row"><Link to="/demo" className="gradient-btn">Enterprise Demo</Link><Link to="/platform" className="ghost-btn">Explore Platform →</Link></div><div className="relative w-full max-w-lg mx-auto h-40 mt-8"><div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" /><SparklesCore className="w-full h-full" background="transparent" particleColor="#ffffff" particleDensity={80} minSize={0.6} maxSize={1.4} speed={3} /></div></div></section>
  </PageWrapper>
);
export default DsoMsoPage;
