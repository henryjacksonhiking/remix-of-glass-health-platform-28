import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserPlus, Heart, Zap, DollarSign, Stethoscope, Building2, Activity } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import CTASection from "@/components/sections/CTASection";

const useCases = [
  {
    icon: UserPlus,
    title: "Patient acquisition",
    description: "Capture and convert leads through better communication, scheduling, and a frictionless first impression. Patients find you, book instantly, and start their journey digitally.",
    outcomes: ["Increase online bookings", "Reduce lead response time", "Convert more enquiries"],
  },
  {
    icon: Heart,
    title: "Patient retention",
    description: "Keep patients engaged with automated reminders, follow-ups, and a portal they actually want to use. Retention starts the moment the first visit ends.",
    outcomes: ["Reduce no-shows", "Increase recall compliance", "Improve patient satisfaction"],
  },
  {
    icon: Zap,
    title: "Workflow automation",
    description: "Reduce manual tasks through automation — from intake forms to appointment confirmations to billing. Your team focuses on care, not admin.",
    outcomes: ["Eliminate paper forms", "Automate appointment reminders", "Streamline billing workflows"],
  },
  {
    icon: DollarSign,
    title: "Revenue optimization",
    description: "Improve billing efficiency, reduce missed opportunities, and gain visibility into your clinic's financial performance with real-time data.",
    outcomes: ["Track outstanding invoices", "Reduce payment delays", "Identify revenue gaps"],
  },
];

const clinicTypes = [
  { icon: Stethoscope, name: "Dental clinics", description: "Streamline patient flow from first call to follow-up across operatories and hygienists." },
  { icon: Building2, name: "Multi-location practices", description: "Unified operations, consistent patient experience, and centralized data across all your sites." },
  { icon: Activity, name: "Medical clinics", description: "Reduce admin burden for GP practices, specialist clinics, and allied health providers." },
];

const SolutionsPage = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full blur-[120px] animate-glow-pulse bg-primary/10" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-headline text-foreground mb-6"
        >
          Solutions for modern clinics
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="body-text mx-auto mb-8 max-w-xl"
        >
          Borna.ai helps clinics solve real operational challenges through a unified platform, starting with Borna Care.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/demo" className="gradient-btn text-base px-8 py-3.5">Book a demo</Link>
        </motion.div>
      </div>
    </section>

    {/* Use cases */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-16">Solve real clinic challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-panel p-8"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-3">{uc.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{uc.description}</p>
                <ul className="space-y-2">
                  {uc.outcomes.map((o) => (
                    <li key={o} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* By clinic type */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-16">Built for your clinic type</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {clinicTypes.map((ct, i) => {
            const Icon = ct.icon;
            return (
              <motion.div
                key={ct.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-panel p-6 text-center"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-medium text-foreground mb-2">{ct.name}</h3>
                <p className="text-sm text-muted-foreground">{ct.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    <CTASection />
  </PageWrapper>
);

export default SolutionsPage;
