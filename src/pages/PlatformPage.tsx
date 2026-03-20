import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Layers, MessageSquare, BarChart2, Users, Cpu, Clock } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import CTASection from "@/components/sections/CTASection";

const modules = [
  {
    name: "Borna Care",
    description: "All-in-one patient portal and clinic interaction platform",
    status: "Live",
    statusColor: "#00DEC4",
    icon: Users,
    href: "/products/care",
  },
  {
    name: "Borna Connect",
    description: "Unified communication platform for calls, SMS, chat, and email",
    status: "Coming soon",
    statusColor: "#F59E0B",
    icon: MessageSquare,
    href: "/products/connect",
  },
  {
    name: "Borna Engage",
    description: "Healthcare CRM for patient lifecycle and retention",
    status: "In development",
    statusColor: "#D6007F",
    icon: Users,
    href: "/products/engage",
  },
  {
    name: "Borna Insight",
    description: "Analytics dashboard for performance tracking",
    status: "In development",
    statusColor: "#6366F1",
    icon: BarChart2,
    href: "/products/insight",
  },
  {
    name: "Borna Core",
    description: "AI infrastructure powering automation across all modules",
    status: "In development",
    statusColor: "#1435C1",
    icon: Cpu,
    href: "/products/core",
  },
];

const whyPlatform = [
  { title: "No need to switch systems", description: "Start with one module and add more as you grow — no migrations, no data loss." },
  { title: "Unified patient data", description: "A single patient profile across all modules means better care and fewer errors." },
  { title: "Scalable architecture", description: "Built to handle single clinics and multi-location practices alike." },
  { title: "Future-ready solution", description: "Every module we release integrates automatically with your existing setup." },
];

const howItWorks = [
  { step: "1", title: "Patient interactions begin in Borna Care", description: "Booking, forms, payments, and communication start here." },
  { step: "2", title: "Communication is centralized", description: "Future modules bring calls, SMS, chat, and email into one inbox." },
  { step: "3", title: "Data flows into CRM and analytics", description: "Patient data is organized and surfaced for smarter decisions." },
  { step: "4", title: "AI automates workflows and insights", description: "Intelligent automation reduces manual work across every touchpoint." },
];

const PlatformPage = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full blur-[120px] animate-glow-pulse bg-primary/10" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-headline text-foreground mb-6"
        >
          The future of healthcare operations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="body-text mx-auto mb-8 max-w-xl"
        >
          Borna.ai is building a modular healthcare platform designed to unify communication, patient management, analytics, and automation. Start with Borna Care today and expand as new modules become available.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/demo" className="gradient-btn text-base px-8 py-3.5">Book a demo</Link>
          <Link to="/contact" className="ghost-btn text-base px-8 py-3.5">Join early access</Link>
        </motion.div>
      </div>
    </section>

    {/* Platform vision */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center mb-16">
        <h2 className="section-headline text-foreground mb-4">A unified system for clinic operations</h2>
        <p className="body-text mx-auto">
          A unified system where all clinic operations are connected through a single patient profile and intelligent workflows. All modules are designed to work together seamlessly.
        </p>
      </div>

      {/* Modules */}
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="space-y-4">
          {modules.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={mod.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  to={mod.href}
                  className="glass-panel p-6 flex items-center gap-5 group hover:bg-glass-hover transition-colors"
                >
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-base font-medium text-foreground">{mod.name}</h3>
                      <span
                        className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: `${mod.statusColor}20`, color: mod.statusColor }}
                      >
                        {mod.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{mod.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-16">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {howItWorks.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-panel p-6 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-semibold text-primary">{item.step}</span>
              </div>
              <h3 className="text-sm font-medium text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why platform approach */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-16">Why a platform approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {whyPlatform.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-panel p-6"
            >
              <h3 className="text-base font-medium text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </PageWrapper>
);

export default PlatformPage;
