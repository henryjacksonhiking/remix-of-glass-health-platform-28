import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserPlus, Heart, Zap, DollarSign, Stethoscope, Building2, Activity, TrendingUp, TrendingDown } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import CTASection from "@/components/sections/CTASection";

/* ── Mini chart components ── */
const BarChart = ({ values, color }: { values: number[]; color: string }) => (
  <motion.div
    className="flex items-end gap-1 h-16 cursor-pointer"
    whileHover={{ scale: 1.03, rotateX: 4, rotateY: -2 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    style={{ perspective: 600, transformStyle: "preserve-3d" }}
  >
    {values.map((v, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        whileInView={{ height: `${v}%` }}
        whileHover={{
          scaleY: 1.15,
          boxShadow: `0 0 12px hsl(var(--${color}) / 0.5)`,
        }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08, duration: 0.5 }}
        className="flex-1 rounded-sm min-w-[6px] origin-bottom transition-shadow"
        style={{ background: `hsl(var(--${color}) / ${0.3 + (v / 100) * 0.7})` }}
      />
    ))}
  </motion.div>
);

const DonutChart = ({ percentage, color }: { percentage: number; color: string }) => {
  const r = 28;
  const c = 2 * Math.PI * r;
  return (
    <motion.div
      className="relative w-16 h-16 flex items-center justify-center cursor-pointer"
      whileHover={{
        scale: 1.12,
        rotate: 8,
        filter: `drop-shadow(0 0 10px hsl(var(--${color}) / 0.4))`,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" strokeWidth="5" className="stroke-muted/20" />
        <motion.circle
          cx="32" cy="32" r={r} fill="none" strokeWidth="5"
          strokeLinecap="round"
          style={{ stroke: `hsl(var(--${color}))` }}
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c * (1 - percentage / 100) }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      <span className="absolute text-xs font-semibold text-foreground">{percentage}%</span>
    </motion.div>
  );
};

const StatBadge = ({ value, label, trend }: { value: string; label: string; trend: "up" | "down" }) => (
  <motion.div
    className="flex items-center gap-2 cursor-pointer"
    whileHover={{ scale: 1.06, y: -2 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 400, damping: 22 }}
  >
    <motion.div
      className={`w-7 h-7 rounded-full flex items-center justify-center ${trend === "up" ? "bg-primary/10" : "bg-accent/10"}`}
      whileHover={{ rotate: trend === "up" ? 12 : -12 }}
    >
      {trend === "up"
        ? <TrendingUp className="w-3.5 h-3.5 text-primary" />
        : <TrendingDown className="w-3.5 h-3.5 text-accent" />}
    </motion.div>
    <div>
      <span className="text-sm font-semibold text-foreground">{value}</span>
      <span className="text-[11px] text-muted-foreground ml-1">{label}</span>
    </div>
  </motion.div>
);

/* ── Data ── */
const useCases = [
  {
    icon: UserPlus,
    title: "Patient acquisition",
    description: "Capture and convert leads through better communication, scheduling, and a frictionless first impression.",
    outcomes: ["Increase online bookings", "Reduce lead response time", "Convert more enquiries"],
    visual: () => (
      <div className="space-y-3">
        <BarChart values={[30, 45, 55, 65, 50, 80, 90, 95]} color="primary" />
        <StatBadge value="+64%" label="more bookings" trend="up" />
      </div>
    ),
  },
  {
    icon: Heart,
    title: "Patient retention",
    description: "Keep patients engaged with automated reminders, follow-ups, and a portal they actually want to use.",
    outcomes: ["Reduce no-shows", "Increase recall compliance", "Improve patient satisfaction"],
    visual: () => (
      <div className="flex items-center gap-5">
        <DonutChart percentage={92} color="primary" />
        <div className="space-y-1.5">
          <StatBadge value="92%" label="retention rate" trend="up" />
          <StatBadge value="-38%" label="no-shows" trend="down" />
        </div>
      </div>
    ),
  },
  {
    icon: Zap,
    title: "Workflow automation",
    description: "Reduce manual tasks through automation — from intake forms to appointment confirmations to billing.",
    outcomes: ["Eliminate paper forms", "Automate appointment reminders", "Streamline billing workflows"],
    visual: () => (
      <div className="space-y-3">
        <div className="flex gap-2">
          {["Forms", "Reminders", "Billing"].map((label, i) => (
            <div key={label} className="flex-1 glass-panel rounded-md p-2 text-center">
              <motion.div
                className="text-lg font-bold text-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                {["98%", "4x", "2h"][i]}
              </motion.div>
              <div className="text-[10px] text-muted-foreground mt-0.5">{label}</div>
            </div>
          ))}
        </div>
        <StatBadge value="12hrs" label="saved per week" trend="up" />
      </div>
    ),
  },
  {
    icon: DollarSign,
    title: "Revenue optimization",
    description: "Improve billing efficiency, reduce missed opportunities, and gain visibility into your clinic's financial performance.",
    outcomes: ["Track outstanding invoices", "Reduce payment delays", "Identify revenue gaps"],
    visual: () => (
      <div className="space-y-3">
        <BarChart values={[40, 35, 50, 60, 55, 70, 75, 85, 90, 95]} color="primary" />
        <div className="flex gap-4">
          <StatBadge value="+27%" label="revenue" trend="up" />
          <StatBadge value="-45%" label="delays" trend="down" />
        </div>
      </div>
    ),
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
        <h2 className="section-headline text-foreground text-center mb-4">Solve real clinic challenges</h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">Real results from clinics using Borna.ai to transform their operations</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            const Visual = uc.visual;
            return (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-panel p-8 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-3">{uc.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{uc.description}</p>

                {/* Visual / chart area */}
                <div className="rounded-lg bg-background/30 border border-glass-border p-4 mb-5">
                  <Visual />
                </div>

                <ul className="space-y-2 mt-auto">
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
