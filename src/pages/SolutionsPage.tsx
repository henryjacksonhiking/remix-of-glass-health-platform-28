import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  UserPlus, Heart, Zap, TrendingUp, MessageSquare, Phone, Mail, MessageCircle,
  PhoneOff, AlertCircle, CalendarX, BarChart3, Filter as Funnel, Repeat, DollarSign,
  Bell, CalendarCheck, Sparkles, ArrowRight, Bot, Activity, Target,
  CircleCheck, Layers, Database, ShieldCheck,
} from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";
import PageWrapper from "@/components/layout/PageWrapper";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { SparklesCore } from "@/components/ui/sparkles-core";

/* ─────────────────────────────────────────────
   Section wrappers — alternating dark / "light"
   Project is dark glassmorphism throughout, so
   "light" = brighter glass panel surface.
───────────────────────────────────────────────*/
const SectionDark = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`relative py-12 md:py-20 md:py-12 md:py-12 md:py-20 border-t border-glass-border ${className}`}>
    <div className="container mx-auto px-4 md:px-6 relative z-10">{children}</div>
  </section>
);

const SectionLight = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section
    id={id}
    className={`relative py-12 md:py-20 md:py-12 md:py-12 md:py-20 border-t border-glass-border ${className}`}
    style={{
      background:
        "linear-gradient(180deg, hsla(0,0%,100%,0.04) 0%, hsla(0,0%,100%,0.02) 100%)",
    }}
  >
    <div className="container mx-auto px-4 md:px-6 relative z-10">{children}</div>
  </section>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-[11px] tracking-[0.18em] uppercase font-semibold text-primary mb-3">
    {children}
  </span>
);

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5 },
};

/* ─────────────────────────────────────────────
   SECTION 1 — Hero
───────────────────────────────────────────────*/
const heroOutcomes = [
  { icon: UserPlus, label: "Patient Growth" },
  { icon: CalendarCheck, label: "Scheduling Efficiency" },
  { icon: BarChart3, label: "Revenue Performance" },
  { icon: Sparkles, label: "Automation" },
];

const HeroVisual = () => (
  <div className="relative w-full h-[360px] md:h-[440px]">
    {/* Network background */}
    <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
      {heroOutcomes.map((_, i) => {
        const angle = (i / heroOutcomes.length) * Math.PI * 2 - Math.PI / 2;
        const x = 200 + Math.cos(angle) * 140;
        const y = 200 + Math.sin(angle) * 140;
        return (
          <line
            key={i}
            x1="200" y1="200" x2={x} y2={y}
            stroke="hsl(var(--primary))" strokeOpacity="0.25" strokeWidth="1"
            strokeDasharray="3 4"
          />
        );
      })}
      {/* Central node */}
      <circle cx="200" cy="200" r="34" fill="hsl(var(--primary) / 0.12)" />
      <circle cx="200" cy="200" r="20" fill="hsl(var(--primary) / 0.25)" />
      <circle cx="200" cy="200" r="8" fill="hsl(var(--primary))" />
    </svg>

    {/* Floating outcome cards */}
    {heroOutcomes.map((o, i) => {
      const Icon = o.icon;
      const positions = [
        { top: "8%", left: "10%" },
        { top: "12%", right: "8%" },
        { bottom: "14%", left: "6%" },
        { bottom: "10%", right: "10%" },
      ];
      return (
        <motion.div
          key={o.label}
          className="absolute glass-panel px-3 py-2.5 flex items-center gap-2 backdrop-blur-xl"
          style={positions[i]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { delay: 0.4 + i * 0.15, duration: 0.5 },
            y: { delay: i * 0.5, duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
          <span className="text-xs font-medium text-foreground whitespace-nowrap">{o.label}</span>
        </motion.div>
      );
    })}
  </div>
);

const Hero = () => (
  <section className="relative overflow-hidden pt-20 md:pt-20 pb-20 md:pb-28">
    <div className="absolute inset-0 opacity-50">
      <BeamsBackground intensity="medium" />
    </div>
    <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-[140px] bg-primary/10" />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Eyebrow>Healthcare Solutions</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6 leading-[1.1]"
          >
            Healthcare solutions for patient engagement, growth, and automation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground mb-4 max-w-xl leading-relaxed"
          >
            Borna AI provides healthcare solutions designed to help practices attract more patients, improve retention, streamline operations, and increase revenue.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm md:text-base text-muted-foreground/80 mb-8 max-w-xl leading-relaxed"
          >
            Built on a unified platform, these solutions connect communication, CRM, analytics, and AI automation into one system.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-row items-center gap-2 sm:gap-3"
          >
            <Link to="/demo" className="gradient-btn text-sm sm:text-base px-4 sm:px-7 py-2.5 sm:py-3.5 text-center whitespace-nowrap">Book a demo</Link>
            <Link to="/platform" className="ghost-btn text-sm sm:text-base px-4 sm:px-7 py-2.5 sm:py-3.5 inline-flex items-center justify-center gap-1.5 whitespace-nowrap">
              Explore platform <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   SECTION 2 — Definition (light)
───────────────────────────────────────────────*/
const definitionItems = [
  { icon: UserPlus, label: "Patient Acquisition" },
  { icon: Heart, label: "Patient Retention" },
  { icon: Zap, label: "Workflow Automation" },
  { icon: TrendingUp, label: "Revenue Growth" },
];

const Definition = () => (
  <SectionLight id="definition">
    <div className="max-w-3xl mx-auto text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-5 tracking-tight">
        What are healthcare software solutions?
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-3">
        Healthcare software solutions are systems designed to solve specific operational and growth challenges in medical practices — such as patient acquisition, communication, retention, and workflow automation.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Modern solutions integrate multiple functions into one platform to improve efficiency and outcomes.
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      {definitionItems.map((it, i) => {
        const Icon = it.icon;
        return (
          <motion.div
            key={it.label}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 bg-primary/10 ring-1 ring-primary/20">
              <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-medium text-foreground">{it.label}</span>
          </motion.div>
        );
      })}
    </div>
  </SectionLight>
);

/* ─────────────────────────────────────────────
   SECTION 3 — Problem (dark)
───────────────────────────────────────────────*/
const problemCards = [
  { icon: PhoneOff, title: "Leads slipping through", body: "A new patient calls, no one answers. They move on. The practice never knew the opportunity existed." },
  { icon: MessageSquare, title: "Inconsistent patient communication", body: "Messages sent from three different systems. Patients receive duplicates or nothing at all." },
  { icon: CalendarX, title: "Manual workflows slowing the team", body: "Staff spend hours on tasks that should be automatic — reminders, confirmations, follow-ups." },
  { icon: AlertCircle, title: "No visibility into what works", body: "Marketing spend goes out. Patients come in. But no one knows which channel drove which result." },
];

const Problem = () => (
  <SectionDark id="problem">
    <div className="max-w-3xl mx-auto text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-5 tracking-tight">
        Why healthcare practices struggle to grow efficiently
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-3">
        Many practices face the same compounding challenges — missed patient leads, inconsistent communication, inefficient workflows, and a lack of visibility into what's actually working.
      </p>
      <p className="text-muted-foreground/80 text-sm leading-relaxed">
        These issues don't stem from lack of effort. They stem from using disconnected tools instead of an integrated system.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
      {problemCards.map((c, i) => {
        const Icon = c.icon;
        return (
          <motion.div
            key={c.title}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass-panel p-6 group transition-all duration-300"
            style={{ boxShadow: "inset 0 0 0 1px hsla(35, 90%, 60%, 0.06)" }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
          </motion.div>
        );
      })}
    </div>
  </SectionDark>
);

/* ─────────────────────────────────────────────
   SECTION 4 — Solution Overview (light)
───────────────────────────────────────────────*/
const solutionCards = [
  { icon: Funnel, title: "Patient Acquisition", body: "Capture and convert more leads into booked appointments." },
  { icon: Repeat, title: "Patient Retention", body: "Keep patients engaged and returning with automated touchpoints." },
  { icon: MessageCircle, title: "Communication Management", body: "Centralize every patient interaction into one place." },
  { icon: Zap, title: "Practice Automation", body: "Eliminate manual tasks and let workflows run themselves." },
  { icon: BarChart3, title: "Revenue Optimization", body: "Track every patient from first contact to collected revenue." },
];

const SolutionOverview = () => (
  <SectionLight id="solution-overview">
    <div className="max-w-3xl mx-auto text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-5 tracking-tight">
        One platform, multiple healthcare solutions
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-5">
        Borna AI delivers solutions across every key area of practice growth — and because they all run on the same platform, they work together instead of fighting each other.
      </p>
      <Link to="/ecosystem" className="text-sm text-primary hover:text-primary/80 inline-flex items-center gap-1 group">
        See how these solutions are powered
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {solutionCards.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={c.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="glass-panel p-6 transition-all duration-300 hover:shadow-[0_8px_32px_hsla(170,100%,43%,0.12)]"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </SectionLight>
);

/* ─────────────────────────────────────────────
   Reusable: SolutionSection scaffold
───────────────────────────────────────────────*/
type SolSectionProps = {
  variant: "dark" | "light";
  eyebrow: string;
  title: string;
  body: string;
  outcome: string;
  link?: { text: string; to: string };
  visual: React.ReactNode;
};

const SolutionSection = ({ variant, eyebrow, title, body, outcome, link, visual }: SolSectionProps) => {
  const Wrapper = variant === "dark" ? SectionDark : SectionLight;
  return (
    <Wrapper>
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <motion.div {...fadeUp}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-5 tracking-tight">{title}</h2>
          <p className="text-muted-foreground leading-relaxed mb-5">{body}</p>
          <p className="text-base md:text-lg font-semibold text-primary mb-5">{outcome}</p>
          {link && (
            <Link to={link.to} className="text-sm text-primary hover:text-primary/80 inline-flex items-center gap-1 group">
              {link.text} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </motion.div>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
          {visual}
        </motion.div>
      </div>
    </Wrapper>
  );
};

/* ─────────────────────────────────────────────
   SECTION 5 — Patient Acquisition (dark)
───────────────────────────────────────────────*/
const AcquisitionFunnel = () => {
  const stages = [
    { label: "Marketing", icon: Target },
    { label: "Lead Captured", icon: UserPlus },
    { label: "Engaged", icon: MessageCircle },
    { label: "Booked", icon: CalendarCheck },
    { label: "New Patient", icon: CircleCheck },
  ];
  return (
    <div className="glass-panel p-6 md:p-8">
      <div className="flex flex-col gap-3">
        {stages.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex items-center gap-3"
            >
              <div
                className="flex-1 flex items-center gap-3 rounded-lg px-4 py-3 border border-glass-border bg-white/[0.03]"
                style={{ width: `${100 - i * 8}%` }}
              >
                <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                <span className="text-sm text-foreground font-medium">{s.label}</span>
                {i > 0 && i < stages.length - 1 && (
                  <span className="ml-auto text-[10px] uppercase tracking-wider text-primary/80 font-semibold">
                    ↑ converts
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
        <TrendingUp className="w-3.5 h-3.5 text-primary" />
        <span className="text-xs text-primary font-medium">More conversions, fewer missed leads</span>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   SECTION 6 — Retention loop (light)
───────────────────────────────────────────────*/
const RetentionLoop = () => {
  const nodes = [
    { label: "Patient Visit", icon: Heart },
    { label: "Post-Visit Follow-Up", icon: MessageSquare, chips: ["SMS", "Email"] },
    { label: "Reminder Sent", icon: Bell, chips: ["SMS", "Call"] },
    { label: "Return Appointment", icon: CalendarCheck },
  ];
  return (
    <div className="glass-panel p-6 md:p-8 relative">
      <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full opacity-40 pointer-events-none">
        <circle cx="150" cy="150" r="110" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 6" />
      </svg>
      <div className="grid grid-cols-2 gap-4 relative">
        {nodes.map((n, i) => {
          const Icon = n.icon;
          return (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-glass-border bg-white/[0.04] p-4 flex flex-col items-center text-center"
            >
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-medium text-foreground mb-2">{n.label}</span>
              {n.chips && (
                <div className="flex gap-1 flex-wrap justify-center">
                  {n.chips.map((c) => (
                    <span key={c} className="text-[9px] px-1.5 py-0.5 rounded-full bg-primary/15 text-primary font-medium">{c}</span>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
      <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <Repeat className="w-3.5 h-3.5 text-primary" />
        <span>Continuous engagement loop</span>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   SECTION 7 — Communication merge (dark)
───────────────────────────────────────────────*/
const OmnichannelMerge = () => {
  const channels = [
    { icon: Phone, label: "Calls" },
    { icon: MessageSquare, label: "SMS" },
    { icon: Mail, label: "Email" },
    { icon: MessageCircle, label: "Chat" },
  ];
  return (
    <div className="glass-panel p-6 md:p-8">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
        <div className="space-y-3">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-glass-border bg-white/[0.03]"
              >
                <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                <span className="text-xs font-medium text-foreground">{c.label}</span>
              </motion.div>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-1">
          <ArrowRight className="w-5 h-5 text-primary" />
          <span className="text-[10px] text-primary/80 font-semibold tracking-wider">AI</span>
          <ArrowRight className="w-5 h-5 text-primary" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-xl border border-primary/30 bg-primary/10 p-5 text-center"
          style={{ boxShadow: "0 0 32px hsla(170,100%,43%,0.18)" }}
        >
          <div className="w-10 h-10 rounded-full bg-primary/20 mx-auto mb-2 flex items-center justify-center">
            <Layers className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <div className="text-sm font-semibold text-foreground">Borna Connect</div>
          <div className="text-[11px] text-muted-foreground mt-1">Unified inbox</div>
        </motion.div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   SECTION 8 — Automation (light)
───────────────────────────────────────────────*/
const AutomationFlow = () => {
  const triggers = ["Missed Call", "No-Show", "Form Submitted", "Appointment Due"];
  const actions = ["Follow-Up SMS Sent", "Rebooking Link Delivered", "Staff Alerted", "Appointment Confirmed"];
  return (
    <div className="glass-panel p-6 md:p-8">
      <div className="grid md:grid-cols-3 gap-4 items-center">
        {/* Trigger */}
        <div className="rounded-xl border border-glass-border bg-white/[0.04] p-4">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-4 h-4 text-primary" strokeWidth={1.5} />
            <span className="text-xs font-semibold text-foreground uppercase tracking-wider">Event</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {triggers.map((t) => (
              <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/15">{t}</span>
            ))}
          </div>
        </div>

        {/* AI */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-xl border border-primary/30 bg-primary/10 p-4 text-center relative"
          style={{ boxShadow: "0 0 32px hsla(170,100%,43%,0.18)" }}
        >
          <div className="w-12 h-12 rounded-full bg-primary/20 mx-auto mb-2 flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <div className="text-sm font-semibold text-foreground mb-1">Borna AI</div>
          <div className="text-[11px] text-muted-foreground">Routes, personalizes, acts</div>
          <Zap className="w-3.5 h-3.5 text-primary absolute -top-2 -right-2" />
        </motion.div>

        {/* Action */}
        <div className="rounded-xl border border-glass-border bg-white/[0.04] p-4">
          <div className="flex items-center gap-2 mb-3">
            <CircleCheck className="w-4 h-4 text-primary" strokeWidth={1.5} />
            <span className="text-xs font-semibold text-foreground uppercase tracking-wider">Action</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {actions.map((a) => (
              <span key={a} className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/15">{a}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   SECTION 9 — Revenue (dark)
───────────────────────────────────────────────*/
const RevenueGraph = () => {
  const stages = [
    { label: "Marketing", icon: Target },
    { label: "Lead", icon: UserPlus },
    { label: "Appointment", icon: CalendarCheck },
    { label: "Treatment", icon: Heart },
    { label: "Revenue", icon: DollarSign },
  ];
  return (
    <div className="glass-panel p-6 md:p-8">
      <div className="relative h-32 mb-6">
        <svg viewBox="0 0 400 100" className="w-full h-full">
          <defs>
            <linearGradient id="rev-grad" x1="0" x2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 10 80 Q 100 75, 150 60 T 280 30 T 390 10"
            fill="none"
            stroke="url(#rev-grad)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            style={{ filter: "drop-shadow(0 0 6px hsl(var(--primary) / 0.6))" }}
          />
        </svg>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {stages.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] text-muted-foreground font-medium">{s.label}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   SECTION 10 — How solutions work together (light)
───────────────────────────────────────────────*/
const journeySteps = [
  { num: "01", label: "Attract", icon: Funnel, desc: "Capture patient leads from every channel" },
  { num: "02", label: "Engage", icon: MessageCircle, desc: "Connect at every touchpoint" },
  { num: "03", label: "Manage", icon: Heart, desc: "Manage the full patient relationship" },
  { num: "04", label: "Analyze", icon: BarChart3, desc: "Measure performance and surface insights" },
  { num: "05", label: "Optimize", icon: Sparkles, desc: "Automate and optimize for continuous growth" },
];

const HowTogether = () => (
  <SectionLight id="how-together">
    <div className="max-w-3xl mx-auto text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
        How Borna solutions work together
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Each solution is powerful on its own. Together, they form a complete operating system for your practice.
      </p>
    </div>
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-2 relative">
        {journeySteps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.num}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="relative"
            >
              <div className="glass-panel p-5 h-full flex flex-col items-center text-center">
                <span className="text-[10px] font-bold text-primary tracking-widest mb-2">{s.num}</span>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">{s.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              {i < journeySteps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 text-primary/60 z-10" />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  </SectionLight>
);

/* ─────────────────────────────────────────────
   SECTION 11 — Platform connection (dark)
───────────────────────────────────────────────*/
const PlatformDiagram = () => {
  const modules = [
    { label: "Communication", icon: MessageCircle },
    { label: "CRM", icon: Heart },
    { label: "Analytics", icon: BarChart3 },
    { label: "AI", icon: Bot },
    { label: "Patient Experience", icon: UserPlus },
  ];
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        {modules.map((_, i) => {
          const angle = (i / modules.length) * Math.PI * 2 - Math.PI / 2;
          const x = 200 + Math.cos(angle) * 150;
          const y = 200 + Math.sin(angle) * 150;
          return (
            <line
              key={i}
              x1="200" y1="200" x2={x} y2={y}
              stroke="hsl(var(--primary))" strokeOpacity="0.35" strokeWidth="1"
            />
          );
        })}
        <circle cx="200" cy="200" r="44" fill="hsl(var(--primary) / 0.15)" />
        <circle cx="200" cy="200" r="28" fill="hsl(var(--primary) / 0.3)" />
        <circle cx="200" cy="200" r="12" fill="hsl(var(--primary))" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-semibold text-primary-foreground bg-primary/0 mt-24">Borna</span>
      </div>
      {modules.map((m, i) => {
        const Icon = m.icon;
        const angle = (i / modules.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(angle) * 37.5;
        const y = 50 + Math.sin(angle) * 37.5;
        return (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="absolute -translate-x-1/2 -translate-y-1/2 glass-panel px-2.5 py-1.5 flex items-center gap-1.5"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <Icon className="w-3 h-3 text-primary" strokeWidth={1.5} />
            <span className="text-[10px] font-medium text-foreground whitespace-nowrap">{m.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

const PlatformConnection = () => (
  <SectionDark id="platform-connection">
    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
      <motion.div {...fadeUp}>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-5 tracking-tight">
          Powered by the Borna AI platform
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Every Borna solution runs on the same unified platform — the same communication layer, the same CRM engine, the same analytics infrastructure, and the same AI core. Solutions don't just sit side by side — they share data, share intelligence, and compound each other's value.
        </p>
        <Link to="/platform" className="text-sm text-primary hover:text-primary/80 inline-flex items-center gap-1 group">
          Learn about the platform
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
      <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
        <PlatformDiagram />
        <p className="text-center text-xs text-muted-foreground mt-6 italic">
          All solutions. One platform. One data layer.
        </p>
      </motion.div>
    </div>
  </SectionDark>
);

/* ─────────────────────────────────────────────
   SECTION 12 — Differentiation (light)
───────────────────────────────────────────────*/
const Differentiation = () => {
  const oldTools = ["Phone", "CRM", "Scheduler", "Analytics", "Billing"];
  const newMods = ["Comms", "CRM", "Scheduler", "Analytics", "Billing"];
  return (
    <SectionLight id="differentiation">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-5 tracking-tight">
          Why Borna solutions are different
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Most practice software solves one problem while creating three more. Borna is built differently — a unified platform where every solution shares the same data, the same intelligence, and the same patient record.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left text-sm text-muted-foreground max-w-2xl mx-auto">
          {[
            "Unified platform — not fragmented point solutions",
            "AI-powered insights and automation built in, not bolted on",
            "End-to-end patient lifecycle visibility",
            "Scalable architecture that grows with your practice",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2">
              <CircleCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-5 items-center max-w-5xl mx-auto">
        {/* Old way */}
        <motion.div {...fadeUp} className="glass-panel p-6 opacity-70">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-4">Fragmented Tools</div>
          <div className="grid grid-cols-3 gap-2">
            {oldTools.map((t) => (
              <div key={t} className="rounded-lg border border-dashed border-muted-foreground/30 bg-muted/10 p-3 text-center">
                <div className="w-6 h-6 rounded bg-muted-foreground/20 mx-auto mb-1.5" />
                <span className="text-[10px] text-muted-foreground">{t}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <ArrowRight className="hidden md:block w-6 h-6 text-primary mx-auto" />

        {/* Borna */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="glass-panel p-6">
          <div className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-4">Unified Platform</div>
          <div className="relative h-[180px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/20 ring-2 ring-primary flex items-center justify-center z-10">
              <Database className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
              {newMods.map((_, i) => {
                const angle = (i / newMods.length) * Math.PI * 2 - Math.PI / 2;
                const x = 100 + Math.cos(angle) * 75;
                const y = 100 + Math.sin(angle) * 75;
                return (
                  <line key={i} x1="100" y1="100" x2={x} y2={y} stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.6" />
                );
              })}
            </svg>
            {newMods.map((m, i) => {
              const angle = (i / newMods.length) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + Math.cos(angle) * 40;
              const y = 50 + Math.sin(angle) * 40;
              return (
                <div
                  key={m}
                  className="absolute -translate-x-1/2 -translate-y-1/2 px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-[10px] text-primary font-medium"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {m}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SectionLight>
  );
};

/* ─────────────────────────────────────────────
   SECTION 13 — Key Takeaways (dark)
───────────────────────────────────────────────*/
const takeaways = [
  { icon: Target, text: "Borna provides solutions for practice growth and efficiency" },
  { icon: ShieldCheck, text: "Each solution addresses a specific operational challenge" },
  { icon: Layers, text: "All solutions connect through one unified platform" },
  { icon: Bot, text: "AI enhances decision-making and automation across every solution" },
];

const KeyTakeaways = () => (
  <SectionDark id="takeaways">
    <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-12 tracking-tight">
      Key takeaways
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {takeaways.map((t, i) => {
        const Icon = t.icon;
        return (
          <motion.div
            key={i}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            className="text-center"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center mx-auto mb-4">
              <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-foreground font-semibold leading-relaxed">{t.text}</p>
          </motion.div>
        );
      })}
    </div>
  </SectionDark>
);

/* ─────────────────────────────────────────────
   SECTION 14 — FAQ (light)
───────────────────────────────────────────────*/
const faqs = [
  { q: "What are healthcare software solutions?", a: "Healthcare software solutions are systems designed to solve specific operational and growth challenges in medical practices — including patient acquisition, communication management, retention, workflow automation, and revenue tracking." },
  { q: "How can software improve patient acquisition?", a: "By capturing leads from multiple channels, tracking patient sources, automating follow-up communications, and optimizing the conversion process from first inquiry to booked appointment." },
  { q: "How can software improve patient retention?", a: "By automating post-visit communication, sending personalized reminders, and maintaining consistent engagement — keeping patients connected to your practice and more likely to return." },
  { q: "What is healthcare automation?", a: "The use of AI and rule-based workflows to automate repetitive tasks — such as scheduling confirmations, follow-up messages, and administrative routing — so staff can focus on patient care." },
  { q: "Do Borna solutions work together or separately?", a: "Together. Every Borna solution shares the same data layer and platform infrastructure — meaning acquisition, retention, communication, automation, and revenue optimization all reinforce each other rather than operating in isolation." },
];

const FAQ = () => (
  <SectionLight id="faq">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">Frequently asked questions</h2>
    </div>
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            <AccordionItem
              value={`faq-${i}`}
              className="border-none"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              <AccordionTrigger className="px-6 py-5 text-left text-[15px] font-medium hover:no-underline" style={{ color: "rgba(255,255,255,0.9)" }}>
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </SectionLight>
);

/* ─────────────────────────────────────────────
   SECTION 15 — Final CTA (dark gradient)
───────────────────────────────────────────────*/
const FinalCTA = () => (
  <section className="py-12 md:py-20 relative overflow-hidden border-t border-glass-border">
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[700px] h-[450px] rounded-full bg-primary/8 blur-[140px]" />
    </div>
    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-5 tracking-tight max-w-3xl mx-auto">
        Solve your practice challenges with one platform
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
        Borna AI helps healthcare practices grow efficiently — connecting patient acquisition, retention, communication, automation, and revenue optimization into one intelligent system.
      </p>
      <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 mb-8">
        <Link to="/demo" className="gradient-btn text-sm sm:text-base px-4 sm:px-8 py-2.5 sm:py-3.5 whitespace-nowrap">Book a demo</Link>
        <Link to="/contact" className="ghost-btn text-sm sm:text-base px-4 sm:px-8 py-2.5 sm:py-3.5 whitespace-nowrap">Talk to sales</Link>
      </div>
      <div className="relative w-full max-w-lg mx-auto h-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
        <SparklesCore className="w-full h-full" background="transparent" particleColor="#ffffff" particleDensity={80} minSize={0.6} maxSize={1.4} speed={3} />
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────*/
const SolutionsPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Healthcare Solutions for Patient Engagement, CRM & Automation | Borna AI</title>
      <meta
        name="description"
        content="Discover healthcare solutions for patient acquisition, retention, communication, and automation. Borna AI helps practices grow with a unified platform."
      />
      <link rel="canonical" href="https://borna.ai/solutions" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Healthcare Solutions | Borna AI",
        description: "Healthcare solutions for patient engagement, acquisition, automation, and revenue optimization.",
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Healthcare Software Solutions",
        provider: { "@type": "Organization", name: "Borna AI" },
        serviceType: "Healthcare Solutions",
        areaServed: "Global",
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Borna AI",
        url: "https://borna.ai",
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      })}</script>
    </Helmet>

    <Hero />
    <Definition />
    <Problem />
    <SolutionOverview />

    {/* SECTION 5 — Patient Acquisition */}
    <SolutionSection
      variant="dark"
      eyebrow="Patient Acquisition"
      title="Patient acquisition solutions for healthcare practices"
      body="Borna helps practices capture leads from multiple channels, track every patient source, and improve conversion rates — so more inquiries become booked appointments."
      outcome="Increase new patient volume and reduce missed opportunities."
      link={{ text: "Learn more", to: "/products" }}
      visual={<AcquisitionFunnel />}
    />

    {/* SECTION 6 — Patient Retention */}
    <SolutionSection
      variant="light"
      eyebrow="Patient Retention"
      title="Patient retention and engagement solutions"
      body="Borna enables consistent communication, automated follow-ups, and personalized engagement — keeping patients connected to your practice between visits and bringing them back when it matters most."
      outcome="Improve patient loyalty and long-term lifetime value."
      visual={<RetentionLoop />}
    />

    {/* SECTION 7 — Communication */}
    <SolutionSection
      variant="dark"
      eyebrow="Communication Management"
      title="Unified patient communication solutions"
      body="Borna centralizes calls, SMS, email, and chat into one place — so every patient interaction is captured, tracked, and responded to without anything slipping through the cracks."
      outcome="Ensure no patient interaction is ever missed."
      link={{ text: "See communication platform", to: "/products/borna-connect" }}
      visual={<OmnichannelMerge />}
    />

    {/* SECTION 8 — Automation */}
    <SolutionSection
      variant="light"
      eyebrow="Practice Automation"
      title="Healthcare workflow automation solutions"
      body="Borna automates scheduling processes, follow-ups, and administrative tasks — reducing staff workload and allowing your team to focus on patient care instead of repetitive operations."
      outcome="Reduce staff workload and improve practice efficiency."
      visual={<AutomationFlow />}
    />

    {/* SECTION 9 — Revenue */}
    <SolutionSection
      variant="dark"
      eyebrow="Revenue Optimization"
      title="Revenue optimization for healthcare practices"
      body="Borna tracks the full patient journey from first marketing interaction to collected revenue — giving practices accurate ROI visibility, clear growth opportunities, and the data needed to make better business decisions."
      outcome="Improve financial performance and identify your highest-value growth levers."
      visual={<RevenueGraph />}
    />

    <HowTogether />
    <PlatformConnection />
    <Differentiation />
    <KeyTakeaways />
    <FAQ />
    <FinalCTA />
  </PageWrapper>
);

export default SolutionsPage;
