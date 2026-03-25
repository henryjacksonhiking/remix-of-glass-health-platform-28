import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Shield, Lock, Eye, Server, FileCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import PageWrapper from "@/components/layout/PageWrapper";
import CTASection from "@/components/sections/CTASection";

const securityFeatures = [
  { icon: Lock, title: "Data encryption", description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption." },
  { icon: Users, title: "Role-based access control", description: "Granular permissions ensure team members only access what they need." },
  { icon: Eye, title: "Audit logs and monitoring", description: "Complete audit trail of all system access and data changes for compliance reviews." },
  { icon: Server, title: "Cloud-based architecture", description: "Hosted on enterprise-grade cloud infrastructure with 99.9% uptime SLA." },
  { icon: FileCheck, title: "HIPAA-ready architecture", description: "Designed from the ground up to meet HIPAA security and privacy requirements." },
  { icon: Shield, title: "System monitoring and reliability", description: "24/7 automated monitoring, alerting, and incident response procedures." },
];

const SecurityPage = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute top-0 left-1/2 w-80 h-80 rounded-full blur-[120px] animate-glow-pulse bg-primary/10" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-headline text-foreground mb-6"
        >
          Secure healthcare data platform
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="body-text mx-auto mb-8 max-w-xl"
        >
          Borna.ai is designed with security, privacy, and compliance at its core. Your patients' data deserves nothing less.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/demo" className="gradient-btn text-base px-8 py-3.5">Book a demo</Link>
          <Link to="/pricing" className="ghost-btn text-base px-8 py-3.5">Request pricing</Link>
        </motion.div>
      </div>
    </section>

    {/* Compliance */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center mb-16">
        <h2 className="section-headline text-foreground mb-4">Compliance and data protection</h2>
        <p className="body-text mx-auto">
          Built to meet the security standards healthcare demands — including HIPAA-ready architecture and comprehensive data protection protocols.
        </p>
      </div>
    </section>

    {/* Security features */}
    <section className="pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-16">Security features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {securityFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-panel p-6"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-medium text-foreground mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Trust */}
    <section className="py-16 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <h2 className="section-headline text-foreground mb-4">Our commitment</h2>
        <p className="body-text mx-auto">
          We are committed to maintaining the highest standards of data security and patient privacy. Every feature we build, every integration we support, is designed with compliance in mind.
        </p>
      </div>
    </section>

    <CTASection />
  </PageWrapper>
);

export default SecurityPage;
