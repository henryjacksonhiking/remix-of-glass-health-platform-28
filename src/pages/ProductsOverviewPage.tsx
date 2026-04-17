import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Check,
  X,
  ArrowRight,
  Phone,
  MessageSquare,
  Mail,
  Video,
  Users,
  BarChart3,
  Cpu,
  Calendar,
  CreditCard,
  FileText,
  TrendingUp,
  Layers,
  Shield,
  Zap,
  Sparkles,
  Workflow,
  HeartPulse,
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageWrapper from "@/components/layout/PageWrapper";
import { products } from "@/lib/products";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = LucideIcons as any;

type StatusKey = "available" | "in-development" | "planned" | "early-stage";

const statusMap: Record<string, { label: string; key: StatusKey }> = {
  care: { label: "Available", key: "available" },
  connect: { label: "In Development", key: "in-development" },
  insight: { label: "Early Stage", key: "early-stage" },
  engage: { label: "Planned", key: "planned" },
  core: { label: "Planned", key: "planned" },
};

const statusStyle = (key: StatusKey): React.CSSProperties => {
  switch (key) {
    case "available":
      return { background: "hsl(var(--primary) / 0.18)", color: "hsl(var(--primary))", border: "1px solid hsl(var(--primary) / 0.35)" };
    case "in-development":
      return { background: "rgba(245, 158, 11, 0.08)", color: "rgba(251, 191, 36, 0.95)", border: "1px solid rgba(245, 158, 11, 0.35)" };
    case "early-stage":
      return { background: "rgba(45, 212, 191, 0.08)", color: "rgba(94, 234, 212, 0.95)", border: "1px solid rgba(45, 212, 191, 0.35)" };
    case "planned":
    default:
      return { background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.15)" };
  }
};

const StatusBadge = ({ slug }: { slug: string }) => {
  const s = statusMap[slug];
  if (!s) return null;
  return (
    <span
      className="inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap"
      style={{ ...statusStyle(s.key), letterSpacing: "0.08em" }}
    >
      {s.label}
    </span>
  );
};

/* ============== Section 1: Hero ============== */
const HeroSection = () => {
  // Sort: Care first (flagship), rest in product order
  const orderedProducts = [
    products.find((p) => p.id === "care")!,
    ...products.filter((p) => p.id !== "care"),
  ];

  return (
    <section className="relative overflow-hidden pt-12 md:pt-16 pb-16 md:pb-24">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none" style={{ background: "hsla(170, 100%, 43%, 0.10)" }} />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="section-eyebrow">Product Suite</span>
          <h1 className="hero-headline text-foreground mt-4 mb-5">
            Healthcare software products for{" "}
            <span className="gradient-text">patient engagement, CRM, and automation</span>
          </h1>
          <p className="text-[15px] md:text-[17px] text-foreground/75 leading-relaxed max-w-2xl mx-auto mb-8">
            Borna AI offers a suite of healthcare software products designed to improve patient engagement, streamline communication, and automate practice operations. Start with Borna Care and expand into a unified AI-powered healthcare platform.
          </p>
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <Link to="/demo" className="gradient-btn text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 whitespace-nowrap">Book a demo</Link>
            <Link to="/platform" className="ghost-btn text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 whitespace-nowrap inline-flex items-center gap-1.5">
              Explore Platform <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Product tile grid — flex-wrap so the last row is always centered */}
        <div className="mt-14 md:mt-20 max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {orderedProducts.map((p, i) => {
              const IconComp = iconMap[p.features[0]?.icon] || LucideIcons.Box;
              const isCare = p.id === "care";
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="w-[calc(50%-0.375rem)] md:w-[calc(33.333%-0.667rem)]"
                >
                  <Link
                    to={p.href}
                    className="block h-full glass-panel-hover group p-4 md:p-5 relative"
                    style={
                      isCare
                        ? {
                            boxShadow: `0 0 50px ${p.accentColor}26, inset 0 0 0 1px ${p.accentColor}40`,
                          }
                        : undefined
                    }
                  >
                    <div className="flex items-start justify-between mb-3 gap-2">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${p.accentColor}1F` }}
                      >
                        <IconComp className="w-5 h-5" style={{ color: p.accentColor }} />
                      </div>
                      <StatusBadge slug={p.slug} />
                    </div>
                    <h3 className="text-sm md:text-base font-medium text-foreground mb-1">{p.name}</h3>
                    <p className="text-xs md:text-[13px] text-muted-foreground leading-relaxed line-clamp-2">
                      {p.tagline}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <p className="text-center mt-6 text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            Borna Care is live today. Connect, Insight, Engage, and Core are rolling out on the same unified data layer.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ============== Section 2: Definition ============== */
const DefinitionSection = () => {
  const nodes = [
    { label: "Communication", icon: MessageSquare, color: "#00DEC4" },
    { label: "CRM", icon: Users, color: "#D6007F" },
    { label: "Scheduling", icon: Calendar, color: "#00479B" },
    { label: "Analytics", icon: BarChart3 , color: "#818CF8" },
    { label: "AI Automation", icon: Sparkles, color: "#4F6AFF" },
  ];
  return (
    <section className="py-16 md:py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-eyebrow">Definition</span>
          <h2 className="section-title mt-4">What are healthcare software products?</h2>
          <p className="mt-4 mx-auto max-w-2xl text-[15px] text-foreground/70 leading-relaxed">
            Healthcare software products are tools that help practices manage patient communication, scheduling, CRM, billing, and analytics. Modern platforms combine these capabilities into a unified system to improve efficiency and patient experience.
          </p>
        </div>

        {/* Hub-and-spoke (CSS only) */}
        <div className="relative max-w-3xl mx-auto h-[360px] md:h-[420px]">
          {/* Center hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div
              className="rounded-full flex flex-col items-center justify-center text-center glass-panel"
              style={{
                width: 130,
                height: 130,
                boxShadow: "0 0 60px hsla(170, 100%, 43%, 0.25)",
                border: "1px solid hsla(170, 100%, 43%, 0.35)",
              }}
            >
              <HeartPulse className="w-7 h-7 mb-1 text-primary" />
              <span className="text-[11px] font-semibold text-foreground leading-tight px-2">Healthcare<br />Platform</span>
            </div>
          </div>

          {/* Spokes (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 420" preserveAspectRatio="none">
            {nodes.map((_, i) => {
              const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
              const cx = 300 + Math.cos(angle) * 220;
              const cy = 210 + Math.sin(angle) * 160;
              return (
                <line
                  key={i}
                  x1="300"
                  y1="210"
                  x2={cx}
                  y2={cy}
                  stroke="hsl(170 100% 43%)"
                  strokeOpacity="0.25"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                />
              );
            })}
          </svg>

          {/* Surrounding nodes */}
          {nodes.map((n, i) => {
            const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
            const left = `calc(50% + ${Math.cos(angle) * 36.66}%)`;
            const top = `calc(50% + ${Math.sin(angle) * 38}%)`;
            const Icon = n.icon;
            return (
              <motion.div
                key={n.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left, top }}
                initial={{ opacity: 0, scale: 0.6, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-col items-center group cursor-pointer">
                  <motion.div
                    whileHover={{ scale: 1.15, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-shadow duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid ${n.color}55`,
                      boxShadow: `0 0 20px ${n.color}26`,
                      ['--node-glow' as any]: `${n.color}66`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${n.color}80, 0 0 12px ${n.color}66`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${n.color}26`;
                    }}
                  >
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" style={{ color: n.color }} />
                  </motion.div>
                  <span className="text-[11px] md:text-xs mt-2 text-foreground/80 whitespace-nowrap">{n.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ============== Section 3: Ecosystem Bridge ============== */
const EcosystemBridge = () => {
  const layers = [
    { label: "Patient Layer", desc: "Booking, forms, payments, communication", icon: HeartPulse, color: "#00DEC4" },
    { label: "Practice Layer", desc: "Scheduling, CRM, workflows, analytics", icon: Workflow, color: "#00479B" },
    { label: "Intelligence Layer", desc: "AI summaries, automation, predictions", icon: Cpu, color: "#4F6AFF" },
  ];
  return (
    <section className="py-16 md:py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-14">
          <span className="section-eyebrow">Ecosystem</span>
          <h2 className="section-title mt-4">A modular healthcare platform designed to grow with you</h2>
          <p className="mt-4 mx-auto max-w-2xl text-[15px] text-foreground/70 leading-relaxed">
            Borna's products are built as part of a connected ecosystem where each component integrates seamlessly with the others.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {layers.map((l, i) => {
            const Icon = l.icon;
            return (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel-hover p-6 relative"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${l.color}1F` }}
                >
                  <Icon className="w-5 h-5" style={{ color: l.color }} />
                </div>
                <h3 className="text-base font-medium text-foreground mb-2">{l.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
                <div
                  className="absolute -bottom-px left-6 right-6 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${l.color}66, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link to="/platform" className="inline-flex items-center gap-1.5 text-sm text-primary hover:gap-2 transition-all">
            See how everything connects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ============== Section 4: Borna Care Spotlight ============== */
const CareSpotlight = () => {
  const patientFeatures = ["Online booking & scheduling", "Digital forms", "Secure payments", "Patient communication"];
  const adminFeatures = ["Patient management", "Scheduling control", "PMS / EHR integration", "Workflow coordination"];
  return (
    <section className="py-16 md:py-24 border-t border-glass-border relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] pointer-events-none" style={{ background: "hsla(170, 100%, 43%, 0.06)" }} />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-eyebrow" style={{ color: "hsl(var(--primary))" }}>
            Available now • Flagship
          </span>
          <h2 className="section-title mt-4">Borna Care — patient engagement & portal software</h2>
          <p className="mt-4 mx-auto max-w-2xl text-[15px] text-foreground/70 leading-relaxed">
            One product. Two seamlessly connected experiences — for patients and your practice team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">
          {/* Patient */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="block mb-3 text-[11px] font-semibold uppercase tracking-wider text-primary">
              Patient experience
            </span>
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.015 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "0.5px solid rgba(255,255,255,0.12)",
                borderRadius: 16,
                padding: 14,
                boxShadow: "0 0 40px 10px hsla(170, 100%, 43%, 0.06)",
                transition: "box-shadow 300ms ease",
              }}
              className="hover:shadow-[0_0_60px_16px_hsla(170,100%,43%,0.12)] relative"
            >
              <img
                src="/images/Hero_-_patient_Dashboard__1_.webp"
                alt="Borna Care patient portal — booking, forms, payments, communication"
                loading="lazy"
                className="w-full h-auto rounded-xl block"
              />
              {/* Mask the in-image legacy logo at top-left */}
              <div
                aria-hidden
                className="absolute pointer-events-none rounded-md"
                style={{
                  top: "5.5%",
                  left: "2.2%",
                  width: "9%",
                  height: "9%",
                  background: "#ffffff",
                }}
              />
            </motion.div>
            <ul className="mt-5 space-y-2">
              {patientFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground/75">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Practice */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="block mb-3 text-[11px] font-semibold uppercase tracking-wider text-primary">
              Practice experience
            </span>
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.015 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "0.5px solid rgba(255,255,255,0.12)",
                borderRadius: 16,
                padding: 14,
                boxShadow: "0 0 40px 10px hsla(170, 100%, 43%, 0.06)",
                transition: "box-shadow 300ms ease",
              }}
              className="hover:shadow-[0_0_60px_16px_hsla(170,100%,43%,0.12)]"
            >
              <img
                src="/images/Admin_Dashboard.webp"
                alt="Borna Care admin dashboard — scheduling, patient management"
                loading="lazy"
                className="w-full h-auto rounded-xl block"
              />
            </motion.div>
            <ul className="mt-5 space-y-2">
              {adminFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground/75">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <p className="text-center mt-10 text-[15px] text-foreground/70 max-w-2xl mx-auto">
          Improve patient experience, reduce administrative workload, and increase collections.
        </p>
        <div className="text-center mt-6">
          <Link to="/products/care" className="gradient-btn text-sm md:text-base px-7 py-3 inline-flex items-center gap-2">
            Explore Borna Care <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ============== Section 5: Other products (conceptual) ============== */
const OtherProducts = () => {
  const items = products.filter((p) => p.id !== "care");
  return (
    <section className="py-16 md:py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-14">
          <span className="section-eyebrow">The rest of the platform</span>
          <h2 className="section-title mt-4">Built on the same data layer as Borna Care</h2>
          <p className="mt-4 mx-auto max-w-2xl text-[15px] text-foreground/70 leading-relaxed">
            Each product in development is designed to integrate from day one — no separate logins, no duplicated data, no migrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
          {items.map((p, i) => {
            const IconComp = iconMap[p.features[0]?.icon] || LucideIcons.Box;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={p.href}
                  className="glass-panel-hover p-6 group block h-full relative"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${p.accentColor}1F` }}
                    >
                      <IconComp className="w-5 h-5" style={{ color: p.accentColor }} />
                    </div>
                    <StatusBadge slug={p.slug} />
                  </div>
                  <h3 className="text-base md:text-lg font-medium text-foreground mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.tagline}</p>

                  {/* Conceptual diagram strip */}
                  <div
                    className="rounded-lg h-[70px] flex items-center justify-center overflow-hidden relative"
                    style={{
                      background: `linear-gradient(135deg, ${p.accentColor}10, transparent)`,
                      border: `0.5px solid ${p.accentColor}26`,
                    }}
                  >
                    <ConceptDiagram slug={p.slug} color={p.accentColor} />
                  </div>

                  <span className="inline-flex items-center gap-1 text-sm text-primary mt-4 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* Tiny abstract diagrams per product (no fake dashboards) */
const ConceptDiagram = ({ slug, color }: { slug: string; color: string }) => {
  if (slug === "connect") {
    return (
      <svg width="180" height="60" viewBox="0 0 180 60" fill="none">
        {[15, 35, 55, 75].map((y, i) => (
          <g key={i}>
            <circle cx="20" cy={y} r="3" fill={color} opacity="0.8" />
            <line x1="23" y1={y} x2="90" y2="30" stroke={color} strokeOpacity="0.4" strokeWidth="0.8" />
          </g>
        ))}
        <circle cx="95" cy="30" r="6" fill={color} />
        <line x1="101" y1="30" x2="160" y2="30" stroke={color} strokeOpacity="0.6" strokeWidth="1" strokeDasharray="2 3" />
        <rect x="160" y="22" width="14" height="16" rx="2" fill={color} opacity="0.85" />
      </svg>
    );
  }
  if (slug === "engage") {
    return (
      <svg width="200" height="60" viewBox="0 0 200 60" fill="none">
        <path d="M10 50 L60 30 L110 35 L160 15 L190 20" stroke={color} strokeWidth="1.4" fill="none" strokeOpacity="0.85" />
        {[
          { x: 10, y: 50, label: "Lead" },
          { x: 60, y: 30, label: "Patient" },
          { x: 110, y: 35, label: "Active" },
          { x: 160, y: 15, label: "Retained" },
        ].map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="3" fill={color} />
            <text x={p.x} y={p.y + 14} fontSize="6" fill="rgba(255,255,255,0.6)" textAnchor="middle">{p.label}</text>
          </g>
        ))}
      </svg>
    );
  }
  if (slug === "insight") {
    return (
      <svg width="160" height="60" viewBox="0 0 160 60" fill="none">
        {[18, 28, 12, 35, 22, 40, 30].map((h, i) => (
          <rect key={i} x={10 + i * 20} y={50 - h} width="10" height={h} rx="2" fill={color} opacity={0.4 + i * 0.08} />
        ))}
        <path d="M15 30 Q50 20 80 25 T150 12" stroke={color} strokeWidth="1.4" fill="none" strokeOpacity="0.9" />
      </svg>
    );
  }
  if (slug === "core") {
    return (
      <svg width="180" height="60" viewBox="0 0 180 60" fill="none">
        {[
          { x: 30, y: 20 }, { x: 60, y: 40 }, { x: 90, y: 15 }, { x: 120, y: 35 }, { x: 150, y: 25 },
        ].map((n, i, arr) => (
          <g key={i}>
            {arr.slice(i + 1).map((m, j) => (
              <line key={j} x1={n.x} y1={n.y} x2={m.x} y2={m.y} stroke={color} strokeOpacity="0.2" strokeWidth="0.6" />
            ))}
            <circle cx={n.x} cy={n.y} r="3.5" fill={color} />
            <circle cx={n.x} cy={n.y} r="6" fill="none" stroke={color} strokeOpacity="0.4" />
          </g>
        ))}
      </svg>
    );
  }
  return null;
};

/* ============== Section 6: How products work together ============== */
const FlowSection = () => {
  const flow = [
    { name: "Connect", desc: "Capture interactions", id: "connect" },
    { name: "Engage", desc: "Manage relationships", id: "engage" },
    { name: "Insight", desc: "Track performance", id: "insight" },
    { name: "Core", desc: "Analyze & automate", id: "core" },
    { name: "Care", desc: "Deliver experience", id: "care" },
  ];
  return (
    <section className="py-16 md:py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-14">
          <span className="section-eyebrow">How it fits together</span>
          <h2 className="section-title mt-4">How Borna products work together</h2>
          <p className="mt-4 mx-auto max-w-2xl text-[15px] text-foreground/70 leading-relaxed">
            A continuous loop: capture, manage, measure, automate, deliver — and back to the patient.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Mobile: vertical, Desktop: horizontal */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-2 relative">
            {flow.map((step, i) => {
              const product = products.find((p) => p.id === step.id)!;
              const IconComp = iconMap[product.features[0]?.icon] || LucideIcons.Box;
              return (
                <div key={step.id} className="flex md:flex-col items-center gap-3 md:gap-2 flex-1">
                  <div className="flex md:flex-col items-center gap-3 md:gap-2">
                    <div
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 backdrop-blur-md"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: `1px solid ${product.accentColor}55`,
                        boxShadow: `0 0 20px ${product.accentColor}30`,
                      }}
                    >
                      <IconComp className="w-5 h-5 md:w-6 md:h-6" style={{ color: product.accentColor }} />
                    </div>
                    <div className="md:text-center">
                      <div className="text-sm font-medium text-foreground">{step.name}</div>
                      <div className="text-[11px] md:text-xs text-muted-foreground">{step.desc}</div>
                    </div>
                  </div>
                  {i < flow.length - 1 && (
                    <ArrowRight className="hidden md:block w-4 h-4 text-primary/50 shrink-0 absolute" style={{ left: `${(i + 1) * 20 - 2}%`, top: "calc(50% - 32px)" }} />
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8 text-[12px] text-muted-foreground italic">
            ↻ Each cycle improves the next — interactions feed insights, insights feed automation, automation improves care.
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============== Section 7: Comparison ============== */
const ComparisonTable = () => {
  const rows = [
    { capability: "Communication", traditional: "Multiple disconnected platforms", borna: "Unified across all channels" },
    { capability: "CRM", traditional: "Separate, siloed system", borna: "Natively integrated" },
    { capability: "Data", traditional: "Fragmented across tools", borna: "Centralized platform" },
    { capability: "Automation", traditional: "Limited, manual", borna: "AI-driven and adaptive" },
    { capability: "Scalability", traditional: "Add more tools", borna: "Add more modules" },
  ];
  return (
    <section className="py-16 md:py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <span className="section-eyebrow">Comparison</span>
          <h2 className="section-title mt-4">Borna products vs traditional healthcare software</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "0.5px solid rgba(255,255,255,0.08)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              className="grid grid-cols-3 gap-2 md:gap-0 px-3 md:px-6 py-3 md:py-4"
              style={{
                borderBottom: "0.5px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
                Capability
              </span>
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
                Traditional
              </span>
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-primary">
                Borna
              </span>
            </div>
            {rows.map((row, i) => (
              <div
                key={row.capability}
                className="grid grid-cols-3 gap-2 md:gap-0 items-center px-3 md:px-6 py-3 md:py-[18px]"
                style={{ borderBottom: i < rows.length - 1 ? "0.5px solid rgba(255,255,255,0.06)" : "none" }}
              >
                <span className="text-xs md:text-sm font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                  {row.capability}
                </span>
                <span className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                  <X className="w-3 h-3 md:w-3.5 md:h-3.5 text-red-400/70 shrink-0" />
                  <span className="leading-snug">{row.traditional}</span>
                </span>
                <span className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-medium text-primary">
                  <Check className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0" />
                  <span className="leading-snug">{row.borna}</span>
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ============== Section 8: Authority / Trust ============== */
const AuthoritySection = () => {
  const stats = [
    { value: "40%", label: "Reduction in admin workload", icon: Zap },
    { value: "1×", label: "Unified patient record across touchpoints", icon: Layers },
    { value: "24/7", label: "Real-time insights across the practice", icon: BarChart3 },
  ];
  return (
    <section className="py-16 md:py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
          <span className="section-eyebrow">Why it matters</span>
          <h2 className="section-title mt-4">Why integrated healthcare software matters</h2>
          <p className="mt-4 text-[15px] text-foreground/70 leading-relaxed">
            According to the Centers for Disease Control and Prevention, integrated digital systems play a key role in improving healthcare coordination and outcomes. Disconnected tools lead to fragmented care, missed follow-ups, and revenue leakage. Borna is built to solve this at the platform level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-panel-hover p-6 text-center"
            >
              <div className="w-11 h-11 mx-auto rounded-lg flex items-center justify-center mb-4 bg-primary/10">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-medium gradient-text mb-2">{s.value}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============== Section 9: Key Takeaways ============== */
const Takeaways = () => {
  const items = [
    { icon: Layers, text: "Borna offers a full suite of healthcare software products" },
    { icon: Workflow, text: "Every product integrates into one unified platform" },
    { icon: HeartPulse, text: "Start with Borna Care and expand as you grow" },
    { icon: Sparkles, text: "AI enhances automation and clinical decision-making" },
  ];
  return (
    <section className="py-16 md:py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <span className="section-eyebrow">Key takeaways</span>
          <h2 className="section-title mt-4">What to remember</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-5xl mx-auto">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass-panel p-5 md:p-6 text-center"
            >
              <div className="w-10 h-10 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <it.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-[13px] md:text-sm font-medium text-foreground/85 leading-snug">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============== Section 10: FAQ ============== */
const FAQ = () => {
  const faqs = [
    { q: "What is patient engagement software?", a: "Software that helps healthcare practices communicate with patients, manage appointments, and improve retention." },
    { q: "What is a healthcare CRM?", a: "A system used to manage patient relationships, track interactions, and improve communication across the patient lifecycle." },
    { q: "How do healthcare platforms differ from individual tools?", a: "Platforms integrate multiple systems into one environment, reducing fragmentation and improving efficiency." },
    { q: "What products does Borna AI offer?", a: "Borna AI offers five products: Borna Care (patient engagement, available now), Borna Connect (communication, in development), Borna Insight (analytics, early stage), Borna Engage (CRM, planned), and Borna Core (AI automation engine, planned)." },
    { q: "Can I start with just one product?", a: "Yes. Borna is designed for modular adoption — start with Borna Care and expand into additional modules as your practice grows." },
  ];
  return (
    <section className="py-16 md:py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-14">
          <span className="section-eyebrow">What people ask</span>
          <h2 className="section-title mt-4">Frequently asked questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-none"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "0.5px solid rgba(255,255,255,0.08)",
                  borderRadius: 14,
                  overflow: "hidden",
                }}
              >
                <AccordionTrigger className="px-6 py-5 text-left text-[15px] font-medium hover:no-underline" style={{ color: "rgba(255,255,255,0.9)" }}>
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

/* ============== Section 11: Final CTA ============== */
const FinalCTA = () => (
  <section className="py-16 md:py-24 border-t border-glass-border relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[700px] h-[400px] rounded-full bg-primary/5 blur-[140px]" />
    </div>
    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
      <h2 className="section-headline text-foreground mb-4">
        Start with one product. Scale into a full platform.
      </h2>
      <p className="text-[15px] md:text-base text-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed">
        Borna AI lets you adopt what you need today and expand into a fully integrated healthcare system over time.
      </p>
      <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
        <Link to="/demo" className="gradient-btn text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 whitespace-nowrap">Book a demo</Link>
        <Link to="/contact" className="ghost-btn text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 whitespace-nowrap">Talk to sales</Link>
      </div>
    </div>
  </section>
);

/* ============== Page ============== */
const ProductsOverviewPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "Borna AI Healthcare Software Products",
        itemListElement: [
          { "@type": "SoftwareApplication", name: "Borna Care" },
          { "@type": "SoftwareApplication", name: "Borna Connect" },
          { "@type": "SoftwareApplication", name: "Borna Engage" },
          { "@type": "SoftwareApplication", name: "Borna Insight" },
          { "@type": "SoftwareApplication", name: "Borna Core" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "Borna AI",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web, iOS, Android",
        description:
          "Healthcare software platform including patient engagement, CRM, communication, analytics, and AI automation.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What is patient engagement software?", acceptedAnswer: { "@type": "Answer", text: "Software that helps healthcare practices communicate with patients, manage appointments, and improve retention." } },
          { "@type": "Question", name: "What is a healthcare CRM?", acceptedAnswer: { "@type": "Answer", text: "A system used to manage patient relationships, track interactions, and improve communication across the patient lifecycle." } },
          { "@type": "Question", name: "How do Borna products work together?", acceptedAnswer: { "@type": "Answer", text: "Borna products integrate into one platform, connecting communication, CRM, analytics, and AI automation." } },
        ],
      },
    ],
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>Healthcare Software Products | Patient Engagement, CRM & AI Platform | Borna AI</title>
        <meta
          name="description"
          content="Explore Borna AI products including patient engagement, healthcare CRM, communication, analytics, and AI automation. Start with Borna Care and scale your practice."
        />
        <link rel="canonical" href="https://borna.ai/products" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <HeroSection />
      <DefinitionSection />
      <EcosystemBridge />
      <CareSpotlight />
      <OtherProducts />
      <FlowSection />
      <ComparisonTable />
      <AuthoritySection />
      <Takeaways />
      <FAQ />
      <FinalCTA />
    </PageWrapper>
  );
};

export default ProductsOverviewPage;
