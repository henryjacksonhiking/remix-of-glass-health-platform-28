import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cpu, RefreshCw, Braces, Server, ShieldCheck, Plug, ArrowRight, ChevronDown, Zap, Brain, Workflow, Database } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { SparklesCore } from "@/components/ui/sparkles-core";
import { useState } from "react";

const inputNodes = [
  { label: "Patient Data", icon: Database },
  { label: "Communication", icon: Braces },
  { label: "Events", icon: Zap },
  { label: "Behavior", icon: Brain },
];

const outputNodes = [
  { label: "Insights", icon: Cpu },
  { label: "Automation", icon: Workflow },
  { label: "Decisions", icon: ShieldCheck },
];

const capabilities = [
  { icon: Cpu, title: "AI workflow automation", desc: "Smart routing, predictive analytics, and intelligent scheduling — the core of medical workflow automation." },
  { icon: RefreshCw, title: "EHR & payments sync", desc: "Secure bidirectional sync with health records and payment gateways across all connected systems." },
  { icon: Braces, title: "NLP & transcription", desc: "Natural language processing for calls, chat, and summaries — turning conversations into structured data." },
  { icon: Server, title: "Multi-tenant architecture", desc: "Scalable infrastructure for single and multi-location practices with isolated data and shared intelligence." },
  { icon: ShieldCheck, title: "Audit & governance", desc: "Compliance-ready governance controls, system monitoring, and complete audit trail." },
  { icon: Plug, title: "API management", desc: "Open APIs for custom integrations and third-party systems — extend the platform without limits." },
];

const ecosystemProducts = [
  { name: "Borna Care", color: "#00479B", desc: "Patient portal", role: "Sends patient interaction data → receives scheduling intelligence" },
  { name: "Borna Connect", color: "#00DEC4", desc: "Communication", role: "Sends communication data → receives routing & sentiment intelligence" },
  { name: "Borna Engage", color: "#E0119D", desc: "CRM", role: "Sends lifecycle data → receives retention predictions & automation triggers" },
  { name: "Borna Insight", color: "#6366F1", desc: "Analytics", role: "Sends performance data → receives predictive models & anomaly detection" },
];

const faqItems = [
  { q: "What is an AI engine in healthcare software?", a: "An AI engine in healthcare software is a centralized intelligence layer that processes data from all systems — scheduling, communication, CRM, billing — and returns actionable intelligence: automated workflows, predictive analytics, and decision recommendations." },
  { q: "How does Borna Core connect to other products?", a: "Borna Core sits at the center of the Borna platform. Every product sends data to Core, and Core returns intelligence back. This bidirectional flow means every product gets smarter as more data flows through the system." },
  { q: "Can Borna Core work with existing systems?", a: "Yes. Borna Core includes open APIs and integration connectors for EHR systems, payment gateways, and third-party tools. The AI engine processes data from any connected source." },
  { q: "Why is an AI engine important in healthcare?", a: "Healthcare generates enormous amounts of data across scheduling, communication, billing, and clinical systems. Without a centralized AI engine, this data sits in silos. Borna Core connects everything and turns scattered data into operational intelligence." },
  { q: "Is Borna Core available now?", a: "Borna Core is currently in development as the foundational AI layer of the Borna platform. Request a demo to learn about the development timeline and early access." },
];

const BornaCorePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageWrapper>
      <Helmet>
        <title>Healthcare AI Engine & Infrastructure | Borna Core</title>
        <meta name="description" content="Borna Core is the centralized AI engine powering every product in the Borna platform. Workflow automation, predictive analytics, and intelligent decision support for healthcare." />
        <link rel="canonical" href="https://borna.ai/products/borna-core" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Borna Core",
          "applicationCategory": "HealthApplication",
          "description": "Healthcare AI engine for workflow automation, analytics, and platform-wide intelligence.",
          "featureList": ["AI workflow automation", "NLP & transcription", "Multi-tenant architecture", "API management"]
        })}</script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 pt-6">
        <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link><span>/</span>
          <Link to="/products" className="hover:text-foreground transition-colors">Products</Link><span>/</span>
          <span style={{ color: '#1435C1' }}>Borna Core</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(20,53,193,0.08)' }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 text-sm text-muted-foreground mb-6">
              <span>Borna Core</span>
              <span style={{ color: '#1435C1' }}>AI Engine</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="hero-headline text-foreground mb-6">
              The <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1435C1, #00DEC4)' }}>intelligence layer</span> powering the entire platform
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="body-text mb-8">
              A centralized AI engine that learns from all data, powers all products, and makes every system in the Borna platform smarter.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-row justify-center gap-3">
              <Link to="/demo" className="gradient-btn px-6 py-3">Request demo</Link>
              <Link to="/platform" className="ghost-btn px-6 py-3">Explore platform</Link>
            </motion.div>
          </div>

          {/* Central Intelligence System diagram */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="mt-16 flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Input nodes */}
              <div className="flex flex-col gap-3">
                {inputNodes.map((node, i) => (
                  <motion.div key={node.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(20,53,193,0.08)', border: '1px solid rgba(20,53,193,0.15)' }}>
                      <node.icon className="w-4 h-4" style={{ color: '#1435C1' }} />
                    </div>
                    <span className="text-[11px] text-muted-foreground hidden md:block">{node.label}</span>
                    <ArrowRight className="w-3 h-3 hidden md:block" style={{ color: 'rgba(20,53,193,0.4)' }} />
                  </motion.div>
                ))}
              </div>

              {/* Core center node */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-xl" style={{ background: 'rgba(20,53,193,0.15)' }} />
                <div className="absolute inset-[-8px] rounded-full" style={{ border: '1px solid rgba(20,53,193,0.1)' }} />
                <div className="relative w-24 h-24 rounded-full flex flex-col items-center justify-center" style={{ background: 'rgba(20,53,193,0.12)', border: '2px solid rgba(20,53,193,0.3)', boxShadow: '0 0 40px rgba(20,53,193,0.2), 0 0 80px rgba(20,53,193,0.1)' }}>
                  <Cpu className="w-6 h-6 mb-1" style={{ color: '#1435C1' }} />
                  <span className="text-[9px] font-medium" style={{ color: '#1435C1' }}>BORNA CORE</span>
                </div>
              </div>

              {/* Output nodes */}
              <div className="flex flex-col gap-3">
                {outputNodes.map((node, i) => (
                  <motion.div key={node.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.1 }} className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 hidden md:block" style={{ color: 'rgba(20,53,193,0.4)' }} />
                    <span className="text-[11px] text-muted-foreground hidden md:block">{node.label}</span>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0,222,196,0.08)', border: '1px solid rgba(0,222,196,0.15)' }}>
                      <node.icon className="w-4 h-4 text-primary" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Definition */}
      <section className="py-12 md:py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="section-headline text-foreground mb-6">What is an AI engine in healthcare software?</h2>
          <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            An AI engine is a centralized intelligence layer that processes data from every system in the platform — scheduling, communication, CRM, billing, clinical records — and returns actionable intelligence. It powers automated workflows, predictive analytics, and intelligent decision support across every product.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-12 md:py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="section-headline text-foreground mb-12">Why healthcare systems lack intelligence</h2>
          <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
            {["Scheduling system", "Phone system", "Billing software", "EHR records", "Email platform", "CRM tool"].map(item => (
              <div key={item} className="rounded-lg p-3 text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.3)' }}>6 systems. 0 intelligence connecting them.</p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-12 md:py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-16">What Borna Core enables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(20,53,193,0.12)' }}>
                  <cap.icon className="w-5 h-5" style={{ color: '#1435C1' }} />
                </div>
                <h3 className="text-base font-medium text-foreground mb-1">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Integration — Ecosystem */}
      <section className="py-12 md:py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-4">Powering the entire Borna ecosystem</h2>
          <p className="body-text mx-auto text-center mb-16">Every product sends data to Core. Core returns intelligence to every product.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {ecosystemProducts.map((prod, i) => (
              <motion.div key={prod.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl p-5 flex items-start gap-4" style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${prod.color}20` }}>
                <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center" style={{ background: `${prod.color}15`, border: `1px solid ${prod.color}30` }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: prod.color }} />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{prod.name}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{prod.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/ecosystem" className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
              Explore the full ecosystem <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 md:py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-16">How Borna Core works</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Collect", desc: "All systems send data to Core" },
              { step: "2", title: "Process", desc: "AI analyzes patterns & anomalies" },
              { step: "3", title: "Learn", desc: "Models improve with every interaction" },
              { step: "4", title: "Act", desc: "Automated workflows execute decisions" },
              { step: "5", title: "Optimize", desc: "Continuous improvement loop" },
            ].map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-panel p-4 text-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2" style={{ background: 'rgba(20,53,193,0.12)' }}>
                  <span className="text-xs font-semibold" style={{ color: '#1435C1' }}>{s.step}</span>
                </div>
                <h3 className="text-xs font-medium text-foreground mb-0.5">{s.title}</h3>
                <p className="text-[10px] text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <StandardFAQ items={faqItems} />

      {/* CTA */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[400px] rounded-full blur-[120px]" style={{ background: 'rgba(20,53,193,0.05)' }} />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="section-headline text-foreground mb-4">Ready to see the AI engine behind the platform?</h2>
          <p className="body-text mx-auto mb-6">Discover how Borna Core powers intelligent healthcare operations.</p>
          <div className="flex flex-row items-center justify-center gap-3 mb-8">
            <Link to="/demo" className="gradient-btn px-8 py-3.5">Request demo</Link>
            <Link to="/platform" className="ghost-btn px-8 py-3.5">Explore platform</Link>
          </div>
          <div className="relative w-full max-w-lg mx-auto h-32">
            <SparklesCore className="w-full h-full" background="transparent" particleColor="#1435C1" particleDensity={80} minSize={0.4} maxSize={1.2} speed={2.5} />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default BornaCorePage;
