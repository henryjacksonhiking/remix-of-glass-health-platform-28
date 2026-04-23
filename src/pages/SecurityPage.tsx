import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Shield, Lock, Eye, Server, FileCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import PageWrapper from "@/components/layout/PageWrapper";
import CTASection from "@/components/sections/CTASection";

const securityFeatures = [
  { icon: Lock, title: "Data encryption", description: "All data is encrypted in transit using TLS 1.2+ and at rest using industry-standard AES-256 encryption. Encryption keys are managed through a secure key management service with automatic rotation." },
  { icon: Users, title: "Role-based access control", description: "Granular permissions ensure team members only access what they need. Administrators can define custom roles, manage user access levels, and enforce least-privilege principles across the platform." },
  { icon: Eye, title: "Audit logs and monitoring", description: "Complete audit trail of all system access, data changes, and administrative actions. Logs are immutable and retained for compliance reviews, incident investigation, and regulatory audits." },
  { icon: Server, title: "Cloud-based architecture", description: "Hosted on enterprise-grade cloud infrastructure with 99.9% uptime SLA, automated failover, and geographic redundancy to ensure your clinic data is always available." },
  { icon: FileCheck, title: "HIPAA-ready architecture", description: "Designed from the ground up to meet HIPAA security and privacy requirements. Includes administrative, physical, and technical safeguards, Business Associate Agreements, and regular compliance assessments." },
  { icon: Shield, title: "System monitoring and reliability", description: "24/7 automated monitoring, real-time alerting, and incident response procedures. Continuous vulnerability scanning and regular penetration testing ensure proactive threat detection." },
];

const SecurityPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Security & Compliance — Secure Healthcare Data Platform | Borna.ai</title>
      <meta name="description" content="Borna.ai is a secure healthcare data platform with HIPAA-ready architecture, enterprise-grade encryption, and compliance-ready governance controls." />
    </Helmet>
    {/* Hero */}
    <section className="relative overflow-hidden py-12 md:py-12">
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
          Borna.ai is a secure healthcare data platform designed with security, privacy, and compliance at its core. Your patients' data deserves nothing less.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="cta-row"
        >
          <Link to="/demo" className="gradient-btn text-sm sm:text-base px-4 sm:px-8 py-2.5 sm:py-3.5 whitespace-nowrap">Book a demo</Link>
          <Link to="/sign-up" className="ghost-btn text-sm sm:text-base px-4 sm:px-8 py-2.5 sm:py-3.5 whitespace-nowrap">Start free trial</Link>
        </motion.div>
      </div>
    </section>

    {/* HIPAA-ready architecture */}
    <section className="py-12 md:py-12 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center mb-16">
        <h2 className="section-headline text-foreground mb-4">HIPAA-ready architecture</h2>
        <p className="body-text mx-auto">
          Borna.ai is built with HIPAA compliance at its foundation — not as an afterthought. Our platform implements administrative, physical, and technical safeguards to protect patient health information at every layer.
        </p>
      </div>
    </section>

    {/* Data encryption & RBAC */}
    <section className="pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="section-headline text-foreground text-center mb-16">Data encryption and access control</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-6"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Lock className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-base font-medium text-foreground mb-2">End-to-end encryption</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All data is encrypted at rest using AES-256 and in transit using TLS 1.2+. Encryption keys are rotated automatically and managed through a dedicated key management service.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-6"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-base font-medium text-foreground mb-2">Role-based access control</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Define granular permissions for every team member. Enforce least-privilege access, manage user roles, and maintain complete control over who can view, edit, or manage patient data.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Audit logs & monitoring */}
    <section className="py-12 md:py-12 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="section-headline text-foreground text-center mb-16">Audit logs and system monitoring</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-6"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Eye className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-base font-medium text-foreground mb-2">Comprehensive audit trails</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every access event, data modification, and administrative action is logged with timestamps, user identity, and context. Audit logs are immutable and available for compliance reviews and incident investigations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-6"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-base font-medium text-foreground mb-2">24/7 system monitoring</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Automated monitoring, real-time alerting, and proactive incident response keep your clinic data protected around the clock. Continuous vulnerability scanning and regular penetration testing ensure threats are identified before they become risks.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Security features grid */}
    <section className="py-12 md:py-12 border-t border-glass-border">
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
