import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart2, TrendingUp, Activity, UserCheck, FileBarChart, LayoutDashboard, ArrowRight, ChevronDown, Bot, Database } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { SparklesCore } from "@/components/ui/sparkles-core";
import { useState } from "react";

const pipelineStages = [
  { label: "Raw Data", desc: "Scattered, unstructured", opacity: 0.3 },
  { label: "Processed", desc: "Structure emerging", opacity: 0.45 },
  { label: "Insight", desc: "Patterns visible", opacity: 0.65 },
  { label: "Decision", desc: "Recommendations", opacity: 0.85 },
  { label: "Outcome", desc: "Results achieved", opacity: 1 },
];

const capabilities = [
  { icon: BarChart2, title: "Appointment analytics", desc: "Track no-shows, cancellations, booking trends, and scheduling efficiency across all providers and locations." },
  { icon: TrendingUp, title: "Revenue insights", desc: "Billing performance, outstanding invoices, payment trends, and revenue forecasting per provider and location." },
  { icon: Activity, title: "Communication metrics", desc: "Missed calls, response times, channel performance, and patient engagement rates across all channels." },
  { icon: UserCheck, title: "Staff performance", desc: "Per-provider and per-team KPIs — utilization rates, patient satisfaction scores, and productivity metrics." },
  { icon: FileBarChart, title: "AI summaries", desc: "Automated daily and weekly operational summaries — the key metrics and trends delivered without manual reporting." },
  { icon: LayoutDashboard, title: "Custom dashboards", desc: "Build reports tailored to your clinic goals — drag-and-drop dashboard builder with real-time data." },
];

const dataSources = [
  { label: "Borna Care", desc: "Scheduling, forms, payments", color: "#00479B" },
  { label: "Borna Connect", desc: "Calls, messages, channels", color: "#00DEC4" },
  { label: "Borna Engage", desc: "CRM, lifecycle, campaigns", color: "#E0119D" },
  { label: "EHR Systems", desc: "Clinical records, billing", color: "#6366F1" },
];

const faqItems = [
  { q: "What is healthcare analytics software?", a: "Healthcare analytics software transforms operational data from scheduling, billing, communication, and clinical systems into actionable insights. Borna Insight goes beyond basic reporting — it uses AI to identify patterns, predict trends, and recommend actions." },
  { q: "How is Borna Insight different from basic reporting?", a: "Basic reporting tells you what happened. Borna Insight tells you why it happened, what's likely to happen next, and what you should do about it. AI-powered predictive analytics and automated recommendations turn data into decisions." },
  { q: "What data sources does Borna Insight analyze?", a: "Borna Insight analyzes data from all Borna products — scheduling and patient data from Borna Care, communication data from Borna Connect, CRM data from Borna Engage — plus external EHR and billing system data through integrations." },
  { q: "Can I build custom dashboards?", a: "Yes. Borna Insight includes a dashboard builder that lets you create custom views with the metrics, charts, and KPIs that matter most to your practice. Dashboards update in real time." },
  { q: "Is Borna Insight available now?", a: "Borna Insight is currently in development. Request a demo to learn about early access availability." },
];

const BornaInsightPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageWrapper>
      <Helmet>
        <title>Healthcare Analytics & AI-Powered Intelligence Platform | Borna Insight</title>
        <meta name="description" content="Borna Insight transforms healthcare data into actionable intelligence. AI-powered analytics for appointments, revenue, communication, and operational performance." />
        <link rel="canonical" href="https://borna.ai/products/borna-insight" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Borna Insight",
          "applicationCategory": "HealthApplication",
          "description": "Healthcare analytics and intelligence platform.",
          "featureList": ["Appointment analytics", "Revenue insights", "AI summaries", "Custom dashboards"]
        })}</script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 pt-6">
        <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link><span>/</span>
          <Link to="/products" className="hover:text-foreground transition-colors">Products</Link><span>/</span>
          <span style={{ color: '#6366F1' }}>Borna Insight</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(99,102,241,0.06)' }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 text-sm text-muted-foreground mb-6">
              <span>Borna Insight</span>
              <span style={{ color: '#6366F1' }}>Analytics</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="hero-headline text-foreground mb-6">
              From raw data to <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #6366F1, #00DEC4)' }}>actionable intelligence</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="body-text mb-8">
              Transform scattered healthcare data into insights that drive decisions. AI-powered analytics for appointments, revenue, communication, and operational performance.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-row justify-center gap-3">
              <Link to="/demo" className="gradient-btn px-6 py-3">Request demo</Link>
              <Link to="/platform" className="ghost-btn px-6 py-3">Explore platform</Link>
            </motion.div>
          </div>
          {/* Data → Insight → Action pipeline */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap justify-center gap-3 mt-16">
            {pipelineStages.map((stage, i) => (
              <div key={stage.label} className="flex items-center gap-3">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-1" style={{ background: `rgba(99,102,241,${stage.opacity * 0.15})`, border: `1px solid rgba(99,102,241,${stage.opacity * 0.3})`, boxShadow: stage.opacity > 0.8 ? '0 0 20px rgba(99,102,241,0.15)' : 'none' }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#6366F1', opacity: stage.opacity }} />
                  </div>
                  <div className="text-[11px] font-medium text-foreground">{stage.label}</div>
                  <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{stage.desc}</div>
                </div>
                {i < pipelineStages.length - 1 && <ArrowRight className="w-3.5 h-3.5 shrink-0 hidden md:block" style={{ color: '#6366F1' }} />}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Definition */}
      <section className="py-12 md:py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="section-headline text-foreground mb-6">What is healthcare analytics software?</h2>
          <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Healthcare analytics software transforms operational data — from scheduling, billing, communication, and clinical systems — into intelligence that drives better decisions. Borna Insight goes beyond dashboards: it uses AI to identify patterns, predict trends, and recommend specific actions.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-12 md:py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="section-headline text-foreground mb-12">Why healthcare data often goes unused</h2>
          <div className="max-w-md mx-auto grid grid-cols-3 gap-3">
            {["Scheduling data", "Billing records", "Call logs", "Patient forms", "EHR exports", "Email metrics"].map((item, i) => (
              <div key={item} className="rounded-lg p-3 text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.3)' }}>24 data points. 0 insights.</p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-12 md:py-12 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-16">What Borna Insight enables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(99,102,241,0.12)' }}>
                  <cap.icon className="w-5 h-5" style={{ color: '#6366F1' }} />
                </div>
                <h3 className="text-base font-medium text-foreground mb-1">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-12 md:py-12 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-4">See your entire practice in one view</h2>
          <p className="body-text mx-auto text-center mb-12">Borna Insight pulls data from every source into a unified intelligence layer.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {dataSources.map((src, i) => (
              <motion.div key={src.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${src.color}20` }}>
                <div className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ background: `${src.color}15` }}>
                  <Database className="w-4 h-4" style={{ color: src.color }} />
                </div>
                <div className="text-xs font-medium text-foreground">{src.label}</div>
                <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{src.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Insights */}
      <section className="py-12 md:py-12 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="section-headline text-foreground text-center mb-4">From data to actionable intelligence</h2>
          <p className="body-text mx-auto text-center mb-12">AI identifies patterns and recommends specific actions.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Retention risk", value: "3 patients flagged", type: "warning" },
              { label: "No-show cluster", value: "Thursday 2–4 PM", type: "insight" },
              { label: "Revenue opportunity", value: "+$4,200/mo potential", type: "positive" },
              { label: "Channel gap", value: "Email unmonitored 48h", type: "warning" },
            ].map((alert, i) => (
              <motion.div key={alert.label} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.12)' }}>
                <Bot className="w-4 h-4 shrink-0" style={{ color: '#6366F1' }} />
                <div>
                  <div className="text-xs font-medium text-foreground">{alert.label}</div>
                  <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.5)' }}>{alert.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 md:py-12 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-16">How Borna Insight works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Connect data", desc: "All systems feed data into Borna Insight automatically." },
              { step: "2", title: "AI processes", desc: "Patterns identified, trends detected, anomalies flagged." },
              { step: "3", title: "Insights surface", desc: "Actionable recommendations appear in your dashboard." },
              { step: "4", title: "Decisions made", desc: "Act on intelligence with confidence and clarity." },
            ].map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="glass-panel p-5 text-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: 'rgba(99,102,241,0.12)' }}>
                  <span className="text-xs font-semibold" style={{ color: '#6366F1' }}>{s.step}</span>
                </div>
                <h3 className="text-sm font-medium text-foreground mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-12 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="section-headline text-foreground text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-2">
            {faqItems.map((faq, i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left" aria-expanded={openFaq === i}>
                  <span className="text-sm font-medium text-foreground pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-4"><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[400px] rounded-full blur-[120px]" style={{ background: 'rgba(99,102,241,0.05)' }} />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="section-headline text-foreground mb-4">Ready to turn your data into decisions?</h2>
          <p className="body-text mx-auto mb-6">See how Borna Insight transforms healthcare data into actionable intelligence.</p>
          <div className="flex flex-row items-center justify-center gap-3 mb-8">
            <Link to="/demo" className="gradient-btn px-8 py-3.5">Request demo</Link>
            <Link to="/platform" className="ghost-btn px-8 py-3.5">Explore platform</Link>
          </div>
          <div className="relative w-full max-w-lg mx-auto h-32">
            <SparklesCore className="w-full h-full" background="transparent" particleColor="#6366F1" particleDensity={80} minSize={0.4} maxSize={1.2} speed={2.5} />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default BornaInsightPage;
