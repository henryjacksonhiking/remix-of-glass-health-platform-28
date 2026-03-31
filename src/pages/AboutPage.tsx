import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layers, Cpu, Workflow } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";
import PageWrapper from "@/components/layout/PageWrapper";
import CTASection from "@/components/sections/CTASection";

const whyBorna = [
  { icon: Layers, title: "Modular platform", description: "Start with what you need today and add capabilities as your clinic grows — no rip-and-replace required." },
  { icon: Cpu, title: "AI-driven approach", description: "Intelligent automation is built into every module, reducing manual work and surfacing insights automatically." },
  { icon: Workflow, title: "Designed for real clinic workflows", description: "Every feature is shaped by real-world clinic operations, not theoretical use cases." },
];

const AboutPage = () => (
  <PageWrapper>
    <Helmet>
      <title>About Borna.ai — Healthcare Technology Company</title>
      <meta name="description" content="Borna.ai is a HealthTech SaaS company building intelligent, modular digital infrastructure for modern clinics and healthcare providers." />
    </Helmet>
    {/* Hero */}
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 opacity-50">
        <BeamsBackground intensity="medium" />
      </div>
      <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full blur-[120px] animate-glow-pulse bg-primary/10" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-headline text-foreground mb-6"
         >
          Healthcare technology company building the future of clinic operations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="body-text mx-auto max-w-xl"
        >
          Borna.ai is a HealthTech SaaS company building a modular healthcare platform — starting with Borna Care to simplify clinic operations and improve patient experience.
        </motion.p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8"
          >
            <h2 className="text-lg font-semibold text-foreground mb-3">Mission</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Simplify and modernize healthcare operations so clinics can focus on what matters most — patient care.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-8"
          >
            <h2 className="text-lg font-semibold text-foreground mb-3">Vision</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Become the operational backbone of modern clinics — a single platform that connects every part of the practice.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Why Borna */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-16">Why Borna</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {whyBorna.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-panel p-6 text-center"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-medium text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Team placeholder */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <h2 className="section-headline text-foreground mb-4">Leadership</h2>
        <p className="body-text mx-auto">
          Our team combines deep healthcare domain expertise with modern product engineering. More details coming soon.
        </p>
      </div>
    </section>

    <CTASection />
  </PageWrapper>
);

export default AboutPage;
