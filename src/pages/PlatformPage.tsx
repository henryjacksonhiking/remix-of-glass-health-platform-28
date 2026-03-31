import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, BarChart2, Users, Cpu, Layers, Database, Brain, Phone } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";
import PageWrapper from "@/components/layout/PageWrapper";

const pillars = [
  {
    icon: Phone,
    title: "Unified communication layer",
    body: "Calls, SMS, chat, video, email, and internal messaging all linked to the patient record.",
  },
  {
    icon: Users,
    title: "CRM + patient lifecycle",
    body: "Track every patient from first contact to long-term retention.",
  },
  {
    icon: Database,
    title: "Data + EHR integration",
    body: "Connect marketing channels, PMS systems, and payment gateways into one data layer.",
  },
  {
    icon: Brain,
    title: "AI intelligence engine",
    body: "Analyse patterns, predict behaviours, and surface insights across your entire operation.",
  },
];

const modules = [
  { name: "Borna Care", desc: "Patient portal & clinic management", status: "✓ Available now", statusColor: "#00DEC4", filled: true, href: "/products/care" },
  { name: "Borna Connect", desc: "Unified communications platform", status: "In development", statusColor: "rgba(255,255,255,0.3)", filled: false, href: "/products/connect" },
  { name: "Borna Insight", desc: "Analytics & intelligence dashboard", status: "In development", statusColor: "rgba(255,255,255,0.3)", filled: false, href: "/products/insight" },
  { name: "Borna Engage", desc: "Healthcare CRM & patient retention", status: "Coming soon", statusColor: "rgba(255,255,255,0.3)", filled: false, href: "/products/engage" },
  { name: "Borna Core", desc: "AI engine & infrastructure", status: "Coming soon", statusColor: "rgba(255,255,255,0.3)", filled: false, href: "/products/core" },
];

const steps = [
  { num: "1", title: "Patient interactions begin in Borna Care", desc: "Booking, forms, payments, and communication start here." },
  { num: "2", title: "Communication centralised through Borna Connect", desc: "Calls, SMS, chat, and email flow into one inbox." },
  { num: "3", title: "Data flows into CRM and analytics", desc: "Patient data is organised and surfaced for smarter decisions." },
  { num: "4", title: "AI automates workflows and surfaces insights", desc: "Intelligent automation reduces manual work across every touchpoint." },
];

const PlatformPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Borna.ai Platform — AI-Powered Healthcare Operations Ecosystem</title>
      <meta name="description" content="Borna.ai is a modular AI healthcare platform combining patient portal, unified communications, CRM, analytics, and AI automation for modern clinics." />
    </Helmet>

    {/* Hero */}
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 opacity-50">
        <BeamsBackground intensity="medium" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="uppercase tracking-[1.5px] mb-5"
          style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}
        >
          THE PLATFORM
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="hero-headline text-foreground mb-6"
        >
          The future of healthcare operations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="body-text mx-auto mb-8 max-w-xl"
        >
          Borna.ai is building a modular healthcare operations platform — starting with Borna Care and expanding into a complete AI-powered ecosystem for modern clinics.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/products/care" className="gradient-btn text-base px-8 py-3.5">Start with Borna Care</Link>
          <Link to="/contact" className="ghost-btn text-base px-8 py-3.5">Join Early Access</Link>
        </motion.div>
      </div>
    </section>

    {/* Platform Vision */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center mb-16">
        <h2 className="section-headline text-foreground mb-4">One unified system for every clinic operation</h2>
        <p className="body-text mx-auto max-w-xl">
          Most clinics run on 5–8 disconnected tools. Borna is being built as a single platform where every module shares one patient profile, one data layer, and one AI engine.
        </p>
      </div>
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-[14px] p-7"
                style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.08)' }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-medium text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Modules */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center mb-16">
        <h2 className="section-headline text-foreground mb-4">Built module by module. Unified by design.</h2>
      </div>
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="space-y-3">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.name}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <Link
                to={mod.href}
                className="rounded-[14px] p-5 flex items-center justify-between gap-4 group transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="text-base font-medium text-foreground">{mod.name}</h3>
                    <span
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap"
                      style={{
                        backgroundColor: mod.filled ? `${mod.statusColor}20` : 'rgba(255,255,255,0.06)',
                        color: mod.filled ? mod.statusColor : 'rgba(255,255,255,0.4)',
                      }}
                    >
                      {mod.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{mod.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
              </Link>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-8" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
          Each module is being built as part of one unified architecture — not as disconnected tools.
        </p>
      </div>
    </section>

    {/* How it connects */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-16">How it all connects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-[14px] p-6 text-center"
              style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.08)' }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-semibold text-primary">{s.num}</span>
              </div>
              <h3 className="text-sm font-medium text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
        <h2 className="section-headline text-foreground mb-6">Start today. Scale without limits.</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/demo" className="gradient-btn text-base px-8 py-3.5">Book a demo</Link>
          <Link to="/sign-up" className="ghost-btn text-base px-8 py-3.5">Start free trial</Link>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default PlatformPage;
