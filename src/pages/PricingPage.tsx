import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";
import { Check, Minus, Shield, TrendingUp, ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ------------------------------------------------------------------ */
/*  Shared animation variants                                         */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ------------------------------------------------------------------ */
/*  SECTION 1 — HERO                                                  */
/* ------------------------------------------------------------------ */
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" role="region" aria-label="Pricing hero">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, hsla(170,100%,43%,0.06) 0%, transparent 70%)" }} />
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className="hero-headline text-foreground mb-5 max-w-3xl mx-auto">
          Borna AI Pricing Plans
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1, duration: 0.5 }} className="body-text mx-auto max-w-2xl mb-4">
          Flexible pricing designed for healthcare practices, clinics, and multi-location organizations.
        </motion.p>
        <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.15, duration: 0.5 }} className="body-text mx-auto max-w-2xl mb-8">
          Choose a plan that fits your needs and scale with a unified platform for communication, patient engagement, analytics, and AI automation.
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="cta-row">
          <button onClick={() => navigate("/demo")} className="gradient-btn text-sm sm:text-base px-5 sm:px-8 py-2.5 sm:py-3.5 whitespace-nowrap">Request Demo</button>
          <button onClick={() => navigate("/contact")} className="ghost-btn text-sm sm:text-base px-5 sm:px-8 py-2.5 sm:py-3.5 whitespace-nowrap">Talk to Sales</button>
        </motion.div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  SECTION 2 — PRICING POSITIONING                                   */
/* ------------------------------------------------------------------ */
const PositioningSection = () => (
  <section className="py-16 md:py-20" role="region" aria-label="Pricing positioning">
    <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
      <motion.h2 variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" className="section-headline text-foreground mb-5">
        Simple, scalable, and built for growth
      </motion.h2>
      <motion.p variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.1, duration: 0.5 }}
        className="body-text mx-auto mb-4">
        Borna AI pricing is designed to support practices of all sizes — from a single-location clinic to a multi-site DSO — and scale with your growth.
      </motion.p>
      <motion.p variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.15, duration: 0.5 }}
        className="body-text mx-auto mb-6">
        Unlike standalone tools that solve one problem, Borna combines communication, CRM, analytics, and AI automation into one unified platform. You are not buying a feature. You are investing in infrastructure.
      </motion.p>
      <motion.div variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.2 }}>
        <Link to="/platform" className="text-sm font-medium text-primary hover:opacity-80 transition-opacity inline-flex items-center gap-1">
          Explore the Borna Platform <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </motion.div>

      {/* Value chips */}
      <motion.div variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.25 }}
        className="flex flex-wrap items-center justify-center gap-3 mt-10 mb-6">
        {["All-in-one platform", "Scales with you", "No fragmented tools"].map((chip) => (
          <span key={chip} className="px-4 py-1.5 text-xs font-medium rounded-full border"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}>
            {chip}
          </span>
        ))}
      </motion.div>

      {/* Animated teal divider */}
      <div className="relative h-px w-full max-w-md mx-auto overflow-hidden" style={{ background: "rgba(0,222,196,0.12)" }}>
        <div className="absolute top-0 left-0 h-full w-24"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(170 100% 43% / 0.5), transparent)",
            animation: "glow-traverse 4s ease-in-out infinite",
            animationDelay: "0s",
          }} />
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  SECTION 3 — PRICING CARDS                                         */
/* ------------------------------------------------------------------ */
interface PlanData {
  name: string;
  tagline: string;
  priceLabel: string;
  priceLink: string;
  priceLinkHref: string;
  priceLinkAccent?: boolean;
  features: { text: string; level: number }[];
  cta: string;
  ctaVariant: "primary" | "ghost";
  isGrowth?: boolean;
  isEnterprise?: boolean;
  internalLink?: { text: string; href: string };
}

const plans: PlanData[] = [
  {
    name: "Starter",
    tagline: "Best for: Small practices & single locations",
    priceLabel: "Starting at",
    priceLink: "Contact Us",
    priceLinkHref: "/contact",
    features: [
      { text: "Basic communication tools", level: 1 },
      { text: "Patient App — core features (scheduling, forms, payments)", level: 1 },
      { text: "Appointment scheduling", level: 1 },
      { text: "Basic CRM functionality", level: 1 },
      { text: "Standard support", level: 1 },
    ],
    cta: "Get Started",
    ctaVariant: "ghost",
  },
  {
    name: "Growth",
    tagline: "Best for: Growing practices & expanding clinics",
    priceLabel: "Starting at",
    priceLink: "Request Demo",
    priceLinkHref: "/demo",
    priceLinkAccent: true,
    isGrowth: true,
    features: [
      { text: "Advanced communication — omnichannel (calls, SMS, email, chat)", level: 2 },
      { text: "Full Borna Engage — CRM & patient lifecycle management", level: 2 },
      { text: "Automation workflows", level: 2 },
      { text: "Advanced patient engagement", level: 2 },
      { text: "Basic analytics", level: 1 },
      { text: "Priority support", level: 1 },
    ],
    cta: "Request Demo",
    ctaVariant: "primary",
  },
  {
    name: "Enterprise",
    tagline: "Best for: Multi-location groups & DSOs/MSOs",
    priceLabel: "Custom Pricing",
    priceLink: "Talk to Sales",
    priceLinkHref: "/contact",
    isEnterprise: true,
    features: [
      { text: "Full platform access — all Borna modules", level: 3 },
      { text: "Borna Core — AI engine", level: 3 },
      { text: "Advanced analytics — Borna Insight", level: 3 },
      { text: "Multi-location management", level: 3 },
      { text: "Custom integrations", level: 3 },
      { text: "Dedicated support & onboarding", level: 3 },
      { text: "White-glove implementation", level: 1 },
      { text: "SLA guarantees", level: 1 },
    ],
    cta: "Talk to Sales",
    ctaVariant: "ghost",
    internalLink: { text: "Explore Multi-Location Solutions", href: "/solutions" },
  },
];

const CheckMarks = ({ level }: { level: number }) => (
  <span className="flex items-center gap-0.5 shrink-0 mt-0.5">
    {Array.from({ length: Math.min(level, 3) }).map((_, i) => (
      <Check key={i} className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
    ))}
  </span>
);

const PricingCard = ({ plan }: { plan: PlanData }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      role="article"
      aria-label={plan.isGrowth ? "Growth plan — most popular" : `${plan.name} plan`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: plan.isGrowth ? -6 : -3, transition: { duration: 0.3 } }}
      className={`relative flex flex-col rounded-2xl backdrop-blur-xl px-7 py-8 transition-all duration-300 ${
        plan.isGrowth ? "md:scale-[1.04] md:flex-[1.1]" : "flex-1"
      }`}
      style={{
        background: plan.isEnterprise
          ? "rgba(255,255,255,0.025)"
          : "rgba(255,255,255,0.04)",
        border: plan.isGrowth
          ? "1px solid rgba(0,222,196,0.25)"
          : plan.isEnterprise
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid rgba(255,255,255,0.08)",
        boxShadow: plan.isGrowth
          ? "0 0 40px rgba(0,222,196,0.08), 0 8px 32px rgba(0,0,0,0.3)"
          : "0 4px 16px rgba(0,0,0,0.2)",
        ...(plan.isGrowth ? {
          borderTop: "3px solid hsl(170 100% 43%)",
          animation: "growth-pulse 5s ease-in-out infinite",
        } : {}),
      }}
    >
      {/* Most Popular badge */}
      {plan.isGrowth && (
        <span aria-label="Most Popular plan"
          className="absolute -top-3.5 right-4 inline-flex items-center gap-1 rounded-full px-3.5 py-1 text-xs font-semibold"
          style={{ background: "rgba(0,222,196,0.8)", color: "hsl(226 60% 12%)" }}>
          ⭐ Most Popular
        </span>
      )}

      {/* Plan name & tagline */}
      <h3 className="text-xl font-semibold text-foreground mb-1">{plan.name}</h3>
      <p className="text-sm text-muted-foreground mb-5">{plan.tagline}</p>

      {/* Price block */}
      <div className="mb-5">
        <span className="text-sm text-muted-foreground block mb-1">{plan.priceLabel}</span>
        <Link to={plan.priceLinkHref}
          className={`text-sm font-medium transition-opacity hover:opacity-80 ${plan.priceLinkAccent ? "text-primary" : "text-muted-foreground underline underline-offset-2"}`}>
          {plan.priceLink}
        </Link>
      </div>

      {/* Divider */}
      <hr className="border-0 h-px mb-6" style={{ background: plan.isGrowth ? "rgba(0,222,196,0.2)" : "rgba(0,222,196,0.1)" }} />

      {/* Features */}
      <ul className="space-y-3 mb-6 flex-1">
        {plan.features.map((f) => (
          <li key={f.text} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <CheckMarks level={f.level} />
            {f.text}
          </li>
        ))}
      </ul>

      {/* Internal link */}
      {plan.internalLink && (
        <Link to={plan.internalLink.href} className="text-xs text-primary hover:opacity-80 transition-opacity mb-4 inline-flex items-center gap-1">
          {plan.internalLink.text} <ArrowUpRight className="w-3 h-3" />
        </Link>
      )}

      {/* CTA */}
      <button
        onClick={() => navigate(plan.ctaVariant === "primary" ? "/demo" : "/contact")}
        aria-label={plan.isGrowth ? "Request Demo for Growth plan" : undefined}
        className={`mt-auto w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
          plan.ctaVariant === "primary"
            ? "gradient-btn"
            : "ghost-btn"
        }`}
      >
        {plan.cta}
      </button>
    </motion.div>
  );
};

const PricingCardsSection = () => (
  <section className="py-20 md:py-28" role="region" aria-label="Pricing plans">
    <div className="container mx-auto px-4 md:px-6">
      <motion.h2 variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden"
        className="section-headline text-foreground text-center mb-14">
        Choose the right plan for your practice
      </motion.h2>
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  SECTION 4 — FEATURE COMPARISON TABLE                              */
/* ------------------------------------------------------------------ */
const comparisonRows = [
  { feature: "Patient App", starter: "✓", growth: "✓✓ Full", enterprise: "✓✓✓ Full" },
  { feature: "Communication", starter: "✓", growth: "✓✓ Omnichannel", enterprise: "✓✓✓ Full" },
  { feature: "CRM & Lifecycle", starter: "✓ Basic", growth: "✓✓ Full", enterprise: "✓✓✓ Full" },
  { feature: "Automation", starter: "—", growth: "✓", enterprise: "✓✓ Advanced" },
  { feature: "AI Insights", starter: "—", growth: "Limited", enterprise: "Full — Borna Insight" },
  { feature: "Multi-Location", starter: "—", growth: "—", enterprise: "✓" },
  { feature: "AI Engine (Borna Core)", starter: "—", growth: "—", enterprise: "✓" },
];

const renderCellContent = (val: string) => {
  if (val === "—") return <Minus className="w-4 h-4 text-muted-foreground/40" aria-label="Not included" />;
  const checkCount = (val.match(/✓/g) || []).length;
  const text = val.replace(/✓+\s*/g, "").trim();
  return (
    <span className="flex items-center gap-1.5">
      {checkCount > 0 && (
        <span className="flex items-center gap-0.5">
          {Array.from({ length: checkCount }).map((_, i) => (
            <Check key={i} className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
          ))}
        </span>
      )}
      {text && <span>{text}</span>}
    </span>
  );
};

const ComparisonSection = () => (
  <section className="py-16 md:py-24" role="region" aria-label="Feature comparison">
    <div className="container mx-auto px-4 md:px-6">
      <motion.h2 variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden"
        className="section-headline text-foreground text-center mb-4">
        Compare features across plans
      </motion.h2>
      <motion.p variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.1 }}
        className="body-text mx-auto text-center mb-12">
        A quick-scan reference showing which capabilities are included in each plan.
      </motion.p>

      <div className="max-w-4xl mx-auto overflow-x-auto">
        <motion.table variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.15 }}
          className="w-full text-sm min-w-[600px]">
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(0,222,196,0.15)" }}>
              <th scope="col" className="text-left py-3 px-4 font-medium text-muted-foreground text-xs uppercase tracking-wider">Feature</th>
              <th scope="col" className="text-left py-3 px-4 font-medium text-muted-foreground text-xs uppercase tracking-wider">Starter</th>
              <th scope="col" className="text-left py-3 px-4 font-medium text-xs uppercase tracking-wider text-primary" style={{ background: "rgba(0,222,196,0.03)" }}>Growth</th>
              <th scope="col" className="text-left py-3 px-4 font-medium text-muted-foreground text-xs uppercase tracking-wider">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.feature}
                className="transition-colors duration-200 hover:bg-white/[0.03]"
                style={{ borderBottom: "1px solid rgba(0,222,196,0.08)" }}>
                <th scope="row" className="text-left py-3 px-4 font-medium text-muted-foreground">{row.feature}</th>
                <td className="py-3 px-4 text-muted-foreground">{renderCellContent(row.starter)}</td>
                <td className="py-3 px-4 text-foreground" style={{ background: "rgba(0,222,196,0.03)" }}>{renderCellContent(row.growth)}</td>
                <td className="py-3 px-4 text-muted-foreground">{renderCellContent(row.enterprise)}</td>
              </tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  SECTION 5 — VALUE REINFORCEMENT                                   */
/* ------------------------------------------------------------------ */
const universalInclusions = [
  "Unified communication system",
  "Patient lifecycle management",
  "Secure data handling",
  "Scalable infrastructure",
];

const convergenceNodes = [
  "Communication Tool",
  "CRM Platform",
  "Analytics Tool",
  "Automation System",
];

const ValueSection = () => (
  <section className="py-16 md:py-24" role="region" aria-label="Platform value">
    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
      <motion.h2 variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden"
        className="section-headline text-foreground text-center mb-5">
        Everything you need in one platform
      </motion.h2>
      <motion.p variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.1 }}
        className="body-text mx-auto text-center mb-10">
        All Borna AI plans include a unified communication system, patient lifecycle management, secure data handling, and scalable infrastructure. You are not assembling a stack — you are deploying a platform.
      </motion.p>

      {/* All plans include strip */}
      <motion.div variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.15 }}>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground text-center mb-4">All plans include:</p>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6">
          {universalInclusions.map((item) => (
            <span key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
        {/* Teal baseline */}
        <div className="relative h-px w-full max-w-lg mx-auto overflow-hidden" style={{ background: "rgba(0,222,196,0.12)" }}>
          <div className="absolute top-0 left-0 h-full w-24"
            style={{ background: "linear-gradient(90deg, transparent, hsl(170 100% 43% / 0.5), transparent)", animation: "glow-traverse 4s ease-in-out infinite" }} />
        </div>
      </motion.div>

      {/* Convergence diagram */}
      <motion.div variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.25 }}
        className="mt-14 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        {/* Left — scattered tools */}
        <div className="flex flex-col gap-3">
          {convergenceNodes.map((node, i) => (
            <motion.div key={node}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="px-4 py-2 rounded-lg text-xs text-muted-foreground/60 border"
              style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}>
              {node}
            </motion.div>
          ))}
        </div>

        {/* Converging lines */}
        <div className="hidden md:flex flex-col items-center gap-1">
          {[0,1,2,3].map((i) => (
            <div key={i} className="w-12 h-px" style={{ background: "rgba(0,222,196,0.15)" }} />
          ))}
        </div>
        <div className="md:hidden w-px h-8" style={{ background: "rgba(0,222,196,0.15)" }} />

        {/* Right — Borna node */}
        <div className="flex flex-col items-center gap-2">
          <div className="px-6 py-3 rounded-xl text-sm font-medium text-primary border"
            style={{ background: "rgba(0,222,196,0.06)", borderColor: "rgba(0,222,196,0.2)", boxShadow: "0 0 30px rgba(0,222,196,0.08)" }}>
            Borna AI Platform
          </div>
          <span className="text-xs text-primary/70">One platform. All of the above.</span>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  SECTION 6 — CUSTOMIZATION                                         */
/* ------------------------------------------------------------------ */
const flexPoints = [
  "Custom pricing for DSOs & MSOs",
  "Scalable plans for any size",
  "Tailored to your configuration",
];

const CustomizationSection = () => (
  <section className="py-16 md:py-24" role="region" aria-label="Enterprise customization">
    <div className="container mx-auto px-4 md:px-6 max-w-3xl">
      <motion.h2 variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden"
        className="section-headline text-foreground text-center mb-5">
        Flexible pricing for every organization
      </motion.h2>
      <motion.div variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.1 }}
        className="relative pl-5 mb-8" style={{ borderLeft: "2px solid rgba(0,222,196,0.3)" }}>
        <p className="body-text">
          Borna AI offers custom pricing for DSOs, MSOs, and multi-location healthcare organizations. Every enterprise deployment is configured to the organization's specific needs — location count, user seats, integration requirements, and platform modules.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.15 }}
        className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-5 mb-8">
        {flexPoints.map((point) => (
          <span key={point} className="px-4 py-1.5 text-xs font-medium rounded-full border"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.65)" }}>
            {point}
          </span>
        ))}
      </motion.div>

      <motion.div variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.2 }}
        className="text-center">
        <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
          Talk to Enterprise Sales <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </motion.div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  SECTION 7 — ROI / VALUE                                           */
/* ------------------------------------------------------------------ */
const standaloneTools = ["Scheduling Tool", "CRM Platform", "Analytics Software", "Communication System"];

const ROISection = () => (
  <section className="py-16 md:py-24" role="region" aria-label="ROI comparison">
    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
      <motion.h2 variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden"
        className="section-headline text-foreground text-center mb-5">
        Why Borna delivers more value
      </motion.h2>
      <motion.p variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.1 }}
        className="body-text mx-auto text-center mb-4">
        Most healthcare practices pay for 4–6 separate tools that only partially solve the same problems Borna addresses in one platform. A separate scheduling system. A separate communication tool. A separate CRM. A separate analytics platform.
      </motion.p>
      <motion.p variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.15 }}
        className="text-base md:text-lg font-medium text-foreground text-center mb-12 max-w-2xl mx-auto">
        The question is not whether Borna costs too much. It is whether running 4 separate systems costs less.
      </motion.p>

      {/* Comparison panels */}
      <motion.div variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.2 }}
        className="flex flex-col md:flex-row items-stretch gap-6 md:gap-0">
        {/* Left — standalone tools */}
        <div className="flex-1 glass-panel p-6 md:rounded-r-none">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60 mb-4">Multiple Standalone Tools</p>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {standaloneTools.map((tool) => (
              <div key={tool} className="px-3 py-2 rounded-lg text-xs text-muted-foreground/50 border"
                style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.05)" }}>
                {tool}
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/40">4 separate tools. 4 separate bills. 4 separate integrations.</p>
        </div>

        {/* Divider */}
        <div className="hidden md:flex w-px self-stretch relative overflow-hidden" style={{ background: "rgba(0,222,196,0.12)" }}>
          <div className="absolute top-0 left-0 w-full h-16"
            style={{ background: "linear-gradient(180deg, transparent, hsl(170 100% 43% / 0.4), transparent)", animation: "glow-traverse-v 4s ease-in-out infinite" }} />
        </div>
        <div className="md:hidden h-px w-full" style={{ background: "rgba(0,222,196,0.12)" }} />

        {/* Right — Borna */}
        <div className="flex-1 glass-panel p-6 md:rounded-l-none flex flex-col items-center justify-center text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60 mb-4">Borna AI</p>
          <div className="px-6 py-3 rounded-xl text-sm font-medium text-primary border mb-4"
            style={{ background: "rgba(0,222,196,0.06)", borderColor: "rgba(0,222,196,0.2)", boxShadow: "0 0 30px rgba(0,222,196,0.08)" }}>
            Borna AI Platform
          </div>
          <p className="text-xs text-primary/80">One platform. One cost. Zero fragmentation.</p>
        </div>
      </motion.div>

      <motion.p variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.3 }}
        className="text-xs text-muted-foreground/50 text-center mt-6">
        Plus: AI intelligence, continuous optimization, and platform-level scalability.
      </motion.p>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  SECTION 8 — FAQ                                                   */
/* ------------------------------------------------------------------ */
const faqs = [
  { q: "How much does Borna AI cost?", a: "Borna AI pricing depends on your practice size, number of locations, and the modules you need. Starter plans are available for single-location practices, Growth plans for expanding clinics, and Enterprise plans with custom pricing for multi-location organizations and DSOs. Contact us for a quote tailored to your organization." },
  { q: "Is there a long-term contract requirement?", a: "Borna AI offers flexible, scalable options designed to grow with your practice. Contact our team to discuss the agreement structure that fits your organization's needs and planning horizon." },
  { q: "Can I upgrade my plan later?", a: "Yes. Borna AI plans are designed to scale as your practice grows. Moving from Starter to Growth, or from Growth to Enterprise, is a seamless upgrade — the platform architecture is the same across all tiers, so you never rebuild or migrate when you scale up." },
  { q: "What is included in the Enterprise plan?", a: "The Enterprise plan includes full platform access — Borna Core (AI engine), Borna Insight (advanced analytics), multi-location management, custom integrations, and dedicated support. It is designed for DSOs, MSOs, and multi-location healthcare organizations that need centralized control and enterprise-scale intelligence." },
  { q: "Does Borna AI offer custom pricing for large organizations?", a: "Yes. For multi-location organizations, DSOs, and MSOs, Borna AI provides custom Enterprise pricing based on the number of locations, user seats, integration requirements, and specific platform modules needed. Contact our team for a tailored quote." },
];

const FAQSection = () => (
  <section className="py-16 md:py-24" role="region" aria-label="Pricing FAQs">
    <div className="container mx-auto px-4 md:px-6 max-w-3xl">
      <motion.h2 variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden"
        className="section-headline text-foreground text-center mb-12">
        Pricing FAQs
      </motion.h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}>
            <AccordionItem value={`faq-${i}`} className="glass-panel border px-6 rounded-2xl">
              <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  SECTION 9 — TRUST                                                 */
/* ------------------------------------------------------------------ */
const trustSignals = [
  {
    icon: Shield,
    title: "No Hidden Fees",
    desc: "The price you agree to is the price you pay. No onboarding fees buried in the contract, no per-feature charges for core capabilities.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Plans",
    desc: "Every plan is designed to grow with the organization. Adding locations, providers, or capabilities doesn't require switching platforms.",
  },
  {
    icon: ArrowUpRight,
    title: "Built for Long-Term Growth",
    desc: "Borna is not built for the first 90 days. The platform architecture is designed for organizations that are building for years, not quarters.",
  },
];

const TrustSection = () => (
  <section className="py-16 md:py-24" role="region" aria-label="Trust and transparency">
    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
      <motion.h2 variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden"
        className="section-headline text-foreground text-center mb-12">
        Transparent and scalable pricing
      </motion.h2>
      <motion.p variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.1 }}
        className="body-text mx-auto text-center mb-14">
        Borna AI pricing is designed to remove hesitation — not add to it. No hidden fees, no surprise charges, no lock-in that prevents you from adjusting as your organization evolves.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {trustSignals.map((signal, i) => (
          <motion.div key={signal.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
            className="text-center md:text-left">
            <signal.icon className="w-5 h-5 text-primary mx-auto md:mx-0 mb-3" />
            <h3 className="text-base font-medium text-foreground mb-2">{signal.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{signal.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Teal baseline */}
      <div className="relative h-px w-full max-w-lg mx-auto mt-12 overflow-hidden" style={{ background: "rgba(0,222,196,0.12)" }}>
        <div className="absolute top-0 left-0 h-full w-24"
          style={{ background: "linear-gradient(90deg, transparent, hsl(170 100% 43% / 0.5), transparent)", animation: "glow-traverse 4s ease-in-out infinite" }} />
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  SECTION 10 — FINAL CTA                                            */
/* ------------------------------------------------------------------ */
const FinalCTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 md:py-28" role="region" aria-label="Final call to action">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h2 variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden"
          className="section-headline text-foreground mb-5 max-w-2xl mx-auto">
          Find the right plan for your practice
        </motion.h2>
        <motion.p variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.1 }}
          className="body-text mx-auto mb-8">
          Borna AI pricing is designed to grow with your organization — from a single clinic to a multi-location healthcare network.
        </motion.p>
        <motion.div variants={fadeUp} viewport={{ once: true }} whileInView="visible" initial="hidden" transition={{ delay: 0.15 }}
          className="cta-row">
          <button onClick={() => navigate("/demo")} className="gradient-btn text-sm sm:text-base px-5 sm:px-8 py-2.5 sm:py-3.5 whitespace-nowrap">Request Demo</button>
          <button onClick={() => navigate("/contact")} className="ghost-btn text-sm sm:text-base px-5 sm:px-8 py-2.5 sm:py-3.5 whitespace-nowrap">Talk to Sales</button>
        </motion.div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */
const jsonLd = [
  { "@context": "https://schema.org", "@type": "WebPage", name: "Borna AI Pricing", description: "Pricing plans for Borna AI healthcare platform." },
  { "@context": "https://schema.org", "@type": "Product", name: "Borna AI Platform", description: "Healthcare platform for communication, CRM, analytics, and AI.", brand: { "@type": "Brand", name: "Borna AI" }, offers: { "@type": "AggregateOffer", priceCurrency: "USD", availability: "https://schema.org/InStock", offerCount: "3", lowPrice: "0", description: "Plans starting from Starter through Enterprise — contact Borna AI for custom pricing" } },
  { "@context": "https://schema.org", "@type": "Service", name: "Healthcare Software Platform", description: "Unified healthcare platform for operations and engagement.", provider: { "@type": "Organization", name: "Borna AI" } },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
];

const PricingPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Healthcare Software Pricing | Borna AI Plans for Practices & DSOs</title>
      <meta name="description" content="Explore Borna AI pricing plans for healthcare practices. Flexible, scalable solutions for communication, CRM, analytics, and automation. Request a demo today." />
      <link rel="canonical" href="https://borna.ai/pricing" />
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>

    <HeroSection />
    <PositioningSection />
    <PricingCardsSection />
    <ComparisonSection />
    <ValueSection />
    <CustomizationSection />
    <ROISection />
    <FAQSection />
    <TrustSection />
    <FinalCTASection />
  </PageWrapper>
);

export default PricingPage;
