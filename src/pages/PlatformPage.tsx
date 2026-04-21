import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  MessageSquare,
  Mail,
  Video,
  Calendar,
  FileText,
  CreditCard,
  Database,
  Brain,
  Zap,
  BarChart2,
  Users,
  Bell,
  TrendingUp,
  Workflow,
  Sparkles,
  Layers,
  CheckCircle2,
  Globe,
  Radio,
  Repeat,
  Activity,
  Cpu,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BeamsBackground } from "@/components/ui/beams-background";
import PageWrapper from "@/components/layout/PageWrapper";

/* ----------------------------- Data ----------------------------- */

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

const howItWorks = [
  { num: "1", icon: MessageSquare, label: "Capture", sub: "Patient interactions across all channels" },
  { num: "2", icon: Database, label: "Centralize", sub: "Data unified in one platform" },
  { num: "3", icon: Brain, label: "Analyze", sub: "AI surfaces patterns and insights" },
  { num: "4", icon: Zap, label: "Automate & act", sub: "Workflows triggered, outcomes delivered" },
];

const capabilities = [
  {
    icon: MessageSquare,
    chip: "Omnichannel",
    title: "Patient communication software",
    body: "Manage calls, SMS, email, chat, and video in one system to ensure consistent and uninterrupted patient communication across every touchpoint.",
    diagram: "channels",
  },
  {
    icon: Users,
    chip: "Full lifecycle",
    title: "Healthcare CRM & patient lifecycle",
    body: "Track patients from first contact through long-term retention. Improve engagement and reduce missed opportunities at every stage of the patient journey.",
    diagram: "funnel",
  },
  {
    icon: BarChart2,
    chip: "Real-time",
    title: "Healthcare analytics & performance insights",
    body: "Measure patient acquisition, marketing ROI, and operational performance with real-time dashboards and AI-generated insights.",
    diagram: "chart",
  },
  {
    icon: Brain,
    chip: "Intelligent",
    title: "AI-powered healthcare automation",
    body: "Use AI to analyze patient behavior, detect patterns, automate workflows, and surface recommended actions — so your team can focus on care, not administration.",
    diagram: "network",
  },
] as const;

const inputs = [
  { icon: Globe, label: "Google Ads" },
  { icon: Phone, label: "Phone / Calls" },
  { icon: Database, label: "EHR / PMS" },
  { icon: Layers, label: "Website" },
  { icon: CreditCard, label: "Payments" },
  { icon: Mail, label: "Email / SMS" },
];

const outputs = [
  { icon: BarChart2, label: "Insights dashboard" },
  { icon: Workflow, label: "Automated workflows" },
  { icon: Bell, label: "Patient alerts" },
  { icon: FileText, label: "Performance reports" },
  { icon: TrendingUp, label: "Revenue analytics" },
];

const comparisonRows = [
  { capability: "Communication", traditional: "Multiple disconnected systems", borna: "Unified across all channels" },
  { capability: "Data", traditional: "Fragmented across tools", borna: "Centralized in one platform" },
  { capability: "Insights", traditional: "Limited, manual reporting", borna: "AI-driven, real-time" },
  { capability: "Workflows", traditional: "Manual, time-consuming", borna: "Automated and adaptive" },
  { capability: "Scalability", traditional: "Add more tools", borna: "Add more modules" },
];

const takeaways = [
  { icon: Layers, text: "Borna is a unified AI healthcare platform" },
  { icon: Sparkles, text: "It combines communication, CRM, analytics, and automation" },
  { icon: CheckCircle2, text: "It replaces fragmented healthcare software systems" },
  { icon: Brain, text: "AI enhances patient engagement and operational efficiency" },
];

const faqs = [
  {
    q: "What is an AI healthcare platform?",
    a: "An AI healthcare platform integrates patient communication, CRM, analytics, and automation into a unified environment to improve patient engagement, operational efficiency, and decision-making across the entire practice.",
  },
  {
    q: "What is a healthcare CRM?",
    a: "A healthcare CRM helps practices manage patient relationships, track interactions from first contact to long-term retention, and improve engagement throughout the patient lifecycle.",
  },
  {
    q: "How does AI improve patient engagement?",
    a: "AI analyzes communication patterns and patient behavior to optimize interactions, automate follow-ups, surface recommendations, and improve retention — without additional manual effort from your team.",
  },
  {
    q: "Can Borna integrate with existing healthcare systems?",
    a: "Yes. Borna integrates with PMS/EHR systems, marketing platforms, communication tools, and payment systems to create a unified data environment across your entire practice.",
  },
  {
    q: "Do I need to replace all my tools at once?",
    a: "No. Borna is designed for modular adoption. Start with Borna Care and expand into additional platform capabilities — communication, CRM, analytics, and AI automation — as your practice grows.",
  },
];

/* ------------------------ Reusable styles ------------------------ */

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "0.5px solid rgba(255,255,255,0.08)",
} as const;

/* --------------------- Capability micro-diagrams --------------------- */

const Diagram = ({ kind }: { kind: (typeof capabilities)[number]["diagram"] }) => {
  if (kind === "channels") {
    const icons = [Phone, MessageSquare, Mail, Video];
    return (
      <svg viewBox="0 0 240 120" className="w-full h-[120px]" aria-hidden="true">
        <defs>
          <linearGradient id="chan-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="chan-hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
        </defs>
        {icons.map((_, i) => (
          <line key={i} x1="52" y1={18 + i * 28} x2="175" y2="60"
            stroke="url(#chan-grad)" strokeWidth="1" />
        ))}
        {/* Hub glow */}
        <circle cx="185" cy="60" r="28" fill="url(#chan-hub-glow)" />
        <circle cx="185" cy="60" r="18" fill="hsl(var(--primary))" fillOpacity="0.22" stroke="hsl(var(--primary))" strokeOpacity="0.7" strokeWidth="1" />
        {icons.map((Icon, i) => (
          <g key={i}>
            <rect x="26" y={6 + i * 28} width="24" height="24" rx="6" fill="hsl(var(--primary))" fillOpacity="0.12" stroke="hsl(var(--primary))" strokeOpacity="0.35" strokeWidth="0.6" />
            <foreignObject x="30" y={10 + i * 28} width="16" height="16">
              <Icon className="w-4 h-4 text-primary" />
            </foreignObject>
          </g>
        ))}
        <foreignObject x="178" y="53" width="14" height="14">
          <Layers className="w-3.5 h-3.5 text-primary" />
        </foreignObject>
      </svg>
    );
  }
  if (kind === "funnel") {
    const stages = ["Lead", "Appt.", "Treatment", "Retention"];
    return (
      <svg viewBox="0 0 240 120" className="w-full h-[120px]" aria-hidden="true">
        <defs>
          <linearGradient id="fun-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
          </linearGradient>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="hsl(var(--primary))" fillOpacity="0.6" />
          </marker>
        </defs>
        {stages.map((s, i) => {
          const x = 10 + i * 60;
          return (
            <g key={s}>
              <rect x={x} y="42" width="52" height="30" rx="7" fill="url(#fun-grad)" stroke="hsl(var(--primary))" strokeOpacity="0.4" strokeWidth="0.6" />
              <text x={x + 26} y="61" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.8)">{s}</text>
              {i < stages.length - 1 && (
                <path d={`M${x + 52} 57 L${x + 60} 57`} stroke="hsl(var(--primary))" strokeOpacity="0.5" strokeWidth="0.8" markerEnd="url(#arr)" />
              )}
            </g>
          );
        })}
      </svg>
    );
  }
  if (kind === "chart") {
    const bars = [30, 55, 42, 68, 50, 78];
    return (
      <svg viewBox="0 0 240 120" className="w-full h-[120px]" aria-hidden="true">
        <defs>
          <linearGradient id="bar-grad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {bars.map((h, i) => (
          <rect key={i} x={18 + i * 34} y={105 - h} width="22" height={h} rx="4" fill="url(#bar-grad)" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="0.5" />
        ))}
        <polyline points={bars.map((h, i) => `${29 + i * 34},${105 - h}`).join(" ")} fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.85" strokeWidth="1.5" />
        {bars.map((h, i) => (
          <circle key={`d-${i}`} cx={29 + i * 34} cy={105 - h} r="2.5" fill="hsl(var(--primary))" fillOpacity="0.9" />
        ))}
      </svg>
    );
  }
  // network — larger, gradient-filled nodes with glow
  const nodes: [number, number][] = [
    [45, 60], [100, 25], [100, 95], [155, 45], [155, 75], [210, 60],
  ];
  return (
    <svg viewBox="0 0 240 120" className="w-full h-[120px]" aria-hidden="true">
      <defs>
        <radialGradient id="net-node-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
        </radialGradient>
        <linearGradient id="net-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {nodes.flatMap(([x1, y1], i) =>
        nodes.slice(i + 1).map(([x2, y2], j) => (
          <line key={`${i}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#net-line-grad)" strokeWidth="0.8" />
        ))
      )}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i === 0 || i === 5 ? 8 : 6} fill="url(#net-node-grad)" />
          <circle cx={x} cy={y} r={i === 0 || i === 5 ? 8 : 6} fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.5" strokeWidth="0.6" />
        </g>
      ))}
    </svg>
  );
};

/* ------------------------------ Page ------------------------------ */

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Borna AI",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web, iOS, Android",
    description: "AI healthcare platform for patient engagement, CRM, communication, and automation.",
    featureList: [
      "Patient communication software",
      "Healthcare CRM",
      "Healthcare analytics",
      "AI-powered automation",
      "Unified healthcare platform",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI Healthcare Platform | Borna AI",
    description: "Unified healthcare platform combining CRM, communication, analytics, and AI automation.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Borna AI",
    url: "https://borna.ai",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

/* ============== Platform Overview hub diagram (Change 5) ============== */
const PlatformHubDiagram = () => {
  // 4 surrounding nodes — radial on desktop, 2x2 grid on mobile
  const outer = [
    { label: "Communication", Icon: MessageSquare, angle: -90 },
    { label: "CRM",           Icon: Users,         angle: 0 },
    { label: "Analytics",     Icon: BarChart2,     angle: 90 },
    { label: "Automation",    Icon: Zap,           angle: 180 },
  ];

  return (
    <>
      {/* ---- Desktop: 3D radial diagram ---- */}
      <div className="hidden md:block relative w-full" style={{ aspectRatio: "360 / 280" }}>
        <div className="absolute inset-0 borna-3d-tilt">
          <svg viewBox="0 0 360 280" className="w-full h-full" role="img" aria-label="Hub and spoke diagram showing AI healthcare platform connecting Communication, CRM, Analytics, and Automation">
            <defs>
              <radialGradient id="plat-hub-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%"  stopColor="hsl(var(--primary))" stopOpacity="0.55" />
                <stop offset="60%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Spokes — terminate at center node edge (r=44) */}
            {outer.map((n, i) => {
              const rad = (n.angle * Math.PI) / 180;
              const cx = 180 + Math.cos(rad) * 110;
              const cy = 140 + Math.sin(rad) * 80;
              // shorten line so it ends at outer-node circumference (r=26) and center-node circumference (r=44)
              const dx = cx - 180;
              const dy = cy - 140;
              const len = Math.hypot(dx, dy);
              const ux = dx / len, uy = dy / len;
              const x1 = 180 + ux * 44;
              const y1 = 140 + uy * 44;
              const x2 = cx - ux * 26;
              const y2 = cy - uy * 26;
              return (
                <g key={`spoke-${i}`}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--primary))" strokeOpacity="0.35" strokeWidth="0.9" />
                  {/* Traveling dot from outer → center */}
                  <circle r="2" fill="hsl(var(--primary))" opacity="0.95" style={{
                    offsetPath: `path('M ${x2} ${y2} L ${x1} ${y1}')`,
                    animation: `borna-travel-dot 3.5s linear ${i * 0.5}s infinite`,
                    filter: "drop-shadow(0 0 4px hsl(var(--primary)))",
                  } as React.CSSProperties} />
                </g>
              );
            })}

            {/* Center halo */}
            <circle cx="180" cy="140" r="56" fill="url(#plat-hub-glow)" />
            {/* Center node */}
            <circle cx="180" cy="140" r="44" fill="hsl(var(--primary))" fillOpacity="0.22" />
            <circle cx="180" cy="140" r="44" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.85" strokeWidth="1" />
            <text x="180" y="138" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.95)">AI Healthcare</text>
            <text x="180" y="150" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.95)">Platform</text>

            {/* Outer nodes */}
            {outer.map(({ angle, label, Icon }) => {
              const rad = (angle * Math.PI) / 180;
              const x = 180 + Math.cos(rad) * 110;
              const y = 140 + Math.sin(rad) * 80;
              return (
                <g key={label}>
                  <circle cx={x} cy={y} r="26" fill="rgba(255,255,255,0.05)" stroke="hsl(var(--primary))" strokeOpacity="0.45" strokeWidth="0.8" />
                  <foreignObject x={x - 9} y={y - 13} width="18" height="18">
                    <Icon className="w-4 h-4 text-primary" />
                  </foreignObject>
                  <text x={x} y={y + 11} textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.78)">{label}</text>
                </g>
              );
            })}
          </svg>

          {/* Heartbeat pulse rings around center hub */}
          <span aria-hidden className="absolute pointer-events-none rounded-full borna-heartbeat-ring"
            style={{
              left: "50%", top: "50%",
              width: "24.5%", height: "31.5%",
              transform: "translate(-50%, -50%)",
              border: "1.25px solid hsla(170, 100%, 43%, 0.55)",
            }}
          />
          <span aria-hidden className="absolute pointer-events-none rounded-full borna-heartbeat-ring"
            style={{
              left: "50%", top: "50%",
              width: "24.5%", height: "31.5%",
              transform: "translate(-50%, -50%)",
              border: "1.25px solid hsla(170, 100%, 43%, 0.55)",
              animationDelay: "0.4s",
            }}
          />
        </div>
      </div>

      {/* ---- Mobile: 2x2 grid below center node ---- */}
      <div className="md:hidden flex flex-col items-center gap-6 py-2">
        <div className="relative">
          <div
            className="rounded-full flex flex-col items-center justify-center"
            style={{
              width: 110, height: 110,
              background: "hsl(var(--primary) / 0.22)",
              border: "1px solid hsl(var(--primary) / 0.85)",
              boxShadow: "0 0 60px hsl(var(--primary) / 0.25)",
            }}
          >
            <span className="text-[10px] font-semibold text-foreground leading-tight text-center">AI Healthcare<br/>Platform</span>
          </div>
          <span aria-hidden className="absolute inset-0 rounded-full pointer-events-none borna-heartbeat-ring"
            style={{ border: "1.25px solid hsla(170, 100%, 43%, 0.55)" }} />
          <span aria-hidden className="absolute inset-0 rounded-full pointer-events-none borna-heartbeat-ring"
            style={{ border: "1.25px solid hsla(170, 100%, 43%, 0.55)", animationDelay: "0.4s" }} />
        </div>
        <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
          {outer.map(({ label, Icon }) => (
            <div key={label} className="flex flex-col items-center gap-1.5 rounded-xl py-3"
              style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid hsl(var(--primary) / 0.35)" }}
            >
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.78)" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

/* ============== Why Borna · "Before" tools (no dotted lines, centered X) ============== */
const FragmentedToolsDiagram = () => {
  const top = [
    { Icon: Phone,    x: 50,  y: 42 },
    { Icon: Mail,     x: 140, y: 42 },
    { Icon: Calendar, x: 230, y: 42 },
  ];
  const bottom = [
    { Icon: BarChart2, x: 95,  y: 106 },
    { Icon: FileText,  x: 185, y: 106 },
  ];
  // Center X between rows: midpoint of y=42 and y=106 = 74
  return (
    <svg viewBox="0 0 280 148" className="w-full h-[148px]" aria-hidden="true">
      {[...top, ...bottom].map(({ Icon, x, y }, i) => (
        <g key={i}>
          <rect x={x - 18} y={y - 18} width="36" height="36" rx="8"
            fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.22)"
            strokeDasharray="3 3" strokeWidth="0.6" />
          <foreignObject x={x - 8} y={y - 8} width="16" height="16">
            <Icon className="w-4 h-4" style={{ color: "rgba(255,255,255,0.42)" }} />
          </foreignObject>
        </g>
      ))}
      {/* Red X mark — centered between the two rows */}
      <g transform="translate(140 74)">
        <circle r="10" fill="rgba(239, 68, 68, 0.12)" stroke="rgba(239, 68, 68, 0.55)" strokeWidth="0.8" />
        <line x1="-4.5" y1="-4.5" x2="4.5"  y2="4.5"  stroke="rgb(248, 113, 113)" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="-4.5" y1="4.5"  x2="4.5"  y2="-4.5" stroke="rgb(248, 113, 113)" strokeWidth="1.4" strokeLinecap="round" />
      </g>
    </svg>
  );
};

/* ============== Why Borna · "After" Borna platform (Change 6 — lines end at node edge) ============== */
const UnifiedPlatformDiagram = () => {
  const tools: { Icon: typeof Phone; x: number; y: number }[] = [
    { Icon: Phone,     x: 40,  y: 30 },
    { Icon: Mail,      x: 40,  y: 70 },
    { Icon: Calendar,  x: 40,  y: 110 },
    { Icon: BarChart2, x: 240, y: 50 },
    { Icon: FileText,  x: 240, y: 100 },
  ];
  const cx = 140, cy = 70, hubR = 22;
  return (
    <svg viewBox="0 0 280 140" className="w-full h-[140px]" aria-hidden="true">
      {tools.map(({ x, y }, i) => {
        // start at the outer rect edge, end at the hub circumference (so line never crosses hub)
        const startX = x + (x < cx ? 18 : -18);
        const startY = y;
        const dx = cx - startX;
        const dy = cy - startY;
        const len = Math.hypot(dx, dy);
        const endX = cx - (dx / len) * hubR;
        const endY = cy - (dy / len) * hubR;
        return (
          <line key={i} x1={startX} y1={startY} x2={endX} y2={endY}
            stroke="hsl(var(--primary))" strokeOpacity="0.55" strokeWidth="0.9" />
        );
      })}
      {tools.map(({ Icon, x, y }, i) => (
        <g key={`t-${i}`}>
          <rect x={x - 18} y={y - 18} width="36" height="36" rx="8"
            fill="hsl(var(--primary))" fillOpacity="0.08"
            stroke="hsl(var(--primary))" strokeOpacity="0.45" strokeWidth="0.7" />
          <foreignObject x={x - 8} y={y - 8} width="16" height="16">
            <Icon className="w-4 h-4 text-primary" />
          </foreignObject>
        </g>
      ))}
      {/* Hub */}
      <circle cx={cx} cy={cy} r={hubR}
        fill="hsl(var(--primary))" fillOpacity="0.22"
        stroke="hsl(var(--primary))" strokeOpacity="0.85" strokeWidth="1" />
      <text x={cx} y={cy + 3} textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(255,255,255,0.95)">Borna</text>
    </svg>
  );
};

/* ============== How It Works — animated arrow + sequenced cards (Change 7) ============== */
const HowItWorksFlow = ({
  steps,
}: {
  steps: { num: string; icon: typeof MessageSquare; label: string; sub: string }[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!ref.current || revealed) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setRevealed(true); return; }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [revealed]);

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
      {steps.map((s, i) => {
        const Icon = s.icon;
        return (
          <div
            key={s.num}
            className="rounded-[14px] p-6 text-center relative transition-all duration-[400ms] ease-out"
            style={{
              ...cardStyle,
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${i * 150}ms`,
            }}
          >
            <div className="text-[11px] font-semibold tracking-[1.5px] text-primary mb-3">STEP {s.num}</div>
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-base font-medium text-foreground mb-2">{s.label}</h3>
            <p className="text-sm text-muted-foreground">{s.sub}</p>
            {i < steps.length - 1 && (
              <div
                className="hidden lg:block absolute top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ right: "-22px", width: "30px", height: "12px" }}
                aria-hidden
              >
                <svg viewBox="0 0 30 12" className="w-full h-full overflow-visible">
                  <line x1="0" y1="6" x2="24" y2="6"
                    stroke="hsl(var(--primary))" strokeOpacity="0.35" strokeWidth="1" />
                  <path d="M22 2 L28 6 L22 10" fill="none"
                    stroke="hsl(var(--primary))" strokeOpacity="0.55" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Traveling glowing dot */}
                  <circle r="1.8" fill="hsl(var(--primary))"
                    style={{
                      offsetPath: "path('M 0 6 L 24 6')",
                      animation: `borna-travel-dot 1.7s linear ${i * 0.5}s infinite`,
                      filter: "drop-shadow(0 0 3px hsl(var(--primary)))",
                    } as React.CSSProperties}
                  />
                </svg>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

/* ============== Capability filled badge (Change 8) ============== */
const CapabilityChip = ({ chip }: { chip: string }) => {
  const iconMap: Record<string, typeof Activity> = {
    "Omnichannel":   Radio,
    "Full lifecycle": Repeat,
    "Real-time":     Activity,
    "Intelligent":   Cpu,
  };
  const Icon = iconMap[chip] ?? Sparkles;
  return (
    <span
      className="inline-flex items-center gap-1.5 text-[11px] font-medium pl-2 pr-2.5 py-1 rounded-full"
      style={{
        background: "hsl(var(--primary) / 0.18)",
        border: "0.75px solid hsl(var(--primary) / 0.6)",
        color: "hsl(var(--primary))",
      }}
    >
      <Icon className="w-3 h-3" />
      {chip}
    </span>
  );
};

const PlatformPage = () => (
  <PageWrapper>
    <Helmet>
      <title>AI Healthcare Platform | Patient Engagement, CRM & Automation | Borna AI</title>
      <meta
        name="description"
        content="Borna AI is a unified healthcare platform combining patient communication, CRM, analytics, and AI automation. Replace fragmented tools with one intelligent system."
      />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    {/* ============== 1. HERO ============== */}
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 opacity-50">
        <BeamsBackground intensity="medium" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          AI Healthcare Platform
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}
          className="hero-headline text-foreground mt-4 mb-6"
        >
          AI healthcare platform
          <br className="hidden md:inline" />{" "}
          <span className="gradient-text">for patient engagement, CRM, and automation</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="body-text mx-auto mb-3 max-w-xl"
        >
          Borna AI is a unified healthcare platform designed to help practices manage patient communication, track the full patient lifecycle, and automate operations through a single intelligent system.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm mx-auto mb-8 max-w-xl"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Start with Borna Care and expand into a complete AI-powered healthcare operating system.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/demo" className="gradient-btn text-base px-8 py-3.5">Book a demo</Link>
          <Link to="/products" className="ghost-btn text-base px-8 py-3.5">Explore ecosystem →</Link>
        </motion.div>
      </div>
    </section>

    {/* ============== 2. DEFINITION (hub & spoke) ============== */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-eyebrow">Platform overview</span>
            <h2 className="section-headline text-foreground mt-4 mb-5">What is an AI healthcare platform?</h2>
            <p className="body-text mb-4">
              An AI healthcare platform is a system that integrates patient communication, CRM, analytics, and automation into a unified environment to improve patient engagement, operational efficiency, and decision-making.
            </p>
            <p className="body-text">
              Unlike standalone tools, a healthcare platform connects data and workflows across the entire patient journey.
            </p>
          </div>
          <div className="rounded-[14px] p-6 md:p-8" style={cardStyle}>
            <PlatformHubDiagram />
          </div>
        </div>
      </div>
    </section>

    {/* ============== 3. PROBLEM ============== */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center mb-12">
        <span className="section-eyebrow">Why borna</span>
        <h2 className="section-headline text-foreground mt-4 mb-5">Why traditional healthcare software falls short</h2>
        <p className="body-text mx-auto max-w-xl mb-4">
          Most practices rely on a fragmented stack of disconnected tools — separate systems for patient communication, CRM, scheduling, and analytics. This fragmentation leads to missed patient opportunities, lack of visibility into performance, and inefficient, manual workflows.
        </p>
        <p className="text-base font-medium text-foreground">You don't need more tools — you need a unified system.</p>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Before */}
          <div className="rounded-[14px] p-7" style={cardStyle}>
            <p className="text-[11px] uppercase tracking-[1.5px] mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Before · fragmented tools</p>
            <FragmentedToolsDiagram />
          </div>

          {/* After */}
          <div className="rounded-[14px] p-7 relative overflow-hidden" style={cardStyle}>
            <p className="text-[11px] uppercase tracking-[1.5px] mb-4 text-primary">After · borna platform</p>
            <UnifiedPlatformDiagram />
          </div>
        </div>
      </div>
    </section>

    {/* ============== 4. HOW IT WORKS — 4 step flow ============== */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center mb-14">
        <span className="section-eyebrow">How it works</span>
        <h2 className="section-headline text-foreground mt-4 mb-4">How the Borna platform works</h2>
        <p className="body-text mx-auto max-w-xl">
          Borna connects every part of your practice through a unified system — from the first patient interaction to ongoing automation and insights.
        </p>
      </div>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <HowItWorksFlow steps={howItWorks} />
      </div>
    </section>

    {/* ============== 5. CORE CAPABILITIES (2x2) ============== */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center mb-14">
        <span className="section-eyebrow">Core capabilities</span>
        <h2 className="section-headline text-foreground mt-4">Core capabilities of the Borna AI platform</h2>
      </div>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.06, duration: 0.5 }}
                className="rounded-[14px] p-7 transition-colors"
                style={cardStyle}
              >
                <div className="mb-5 rounded-lg p-3" style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.06)" }}>
                  <Diagram kind={c.diagram} />
                </div>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <CapabilityChip chip={c.chip} />
                </div>
                <h3 className="text-base font-medium text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ============== 6. UNIFIED PLATFORM (4 pillars) — preserved ============== */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center mb-16">
        <span className="section-eyebrow">Platform pillars</span>
        <h2 className="section-headline text-foreground mt-4 mb-4">One unified system for every clinic operation</h2>
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
                style={cardStyle}
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

    {/* ============== 7. DATA INTEGRATION LAYER ============== */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center mb-14">
        <span className="section-eyebrow">Data layer</span>
        <h2 className="section-headline text-foreground mt-4 mb-4">A unified data layer across your entire practice</h2>
        <p className="body-text mx-auto max-w-2xl">
          Borna integrates with the tools your practice already uses — bringing everything into one centralized, intelligent data environment that powers real-time insights, automation, and continuous improvement.
        </p>
        <Link to="/products" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mt-4">
          Learn how this connects across the system <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="rounded-[14px] p-6 md:p-10" style={cardStyle}>
          <p className="text-[11px] uppercase tracking-[1.5px] text-center mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
            Healthcare data integration layer
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center">
            {/* Inputs */}
            <div>
              <p className="text-[11px] uppercase tracking-[1.5px] mb-4 text-center md:text-left" style={{ color: "rgba(255,255,255,0.5)" }}>Data sources</p>
              <div className="space-y-2">
                {inputs.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-lg px-3 py-2" style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.06)" }}>
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{label}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto text-primary/40" />
                  </div>
                ))}
              </div>
            </div>

            {/* Borna core */}
            <div className="flex flex-col items-center justify-center py-4 md:py-0">
              <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                {/* Ripple rings (Change 9) */}
                <span aria-hidden className="borna-ripple-ring" style={{ animationDelay: "0s" }} />
                <span aria-hidden className="borna-ripple-ring" style={{ animationDelay: "1s" }} />
                <span aria-hidden className="borna-ripple-ring" style={{ animationDelay: "2s" }} />
                <div
                  className="relative z-10 w-full h-full rounded-2xl flex flex-col items-center justify-center"
                  style={{
                    background: "radial-gradient(circle at center, hsl(var(--primary) / 0.28), hsl(var(--primary) / 0.05) 70%, transparent 100%)",
                    border: "1px solid hsl(var(--primary) / 0.45)",
                    boxShadow: "0 0 40px hsl(var(--primary) / 0.22)",
                  }}
                >
                  <Brain className="w-7 h-7 text-primary mb-2" />
                  <span className="text-sm font-semibold text-foreground">Borna AI</span>
                  <span className="text-[10px] uppercase tracking-wider mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Intelligence layer</span>
                </div>
              </div>
            </div>

            {/* Outputs */}
            <div>
              <p className="text-[11px] uppercase tracking-[1.5px] mb-4 text-center md:text-left" style={{ color: "rgba(255,255,255,0.5)" }}>Outcomes</p>
              <div className="space-y-2">
                {outputs.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-lg px-3 py-2" style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.06)" }}>
                    <ArrowRight className="w-3.5 h-3.5 text-primary/40" />
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ============== 8. MODULES — preserved ============== */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center mb-14">
        <span className="section-eyebrow">Modules</span>
        <h2 className="section-headline text-foreground mt-4">Built module by module. Unified by design.</h2>
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
                style={cardStyle}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="text-base font-medium text-foreground">{mod.name}</h3>
                    <span
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap"
                      style={{
                        backgroundColor: mod.filled ? `${mod.statusColor}20` : "rgba(255,255,255,0.06)",
                        color: mod.filled ? mod.statusColor : "rgba(255,255,255,0.4)",
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
        <p className="text-center mt-8" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
          Each module is being built as part of one unified architecture — not as disconnected tools.
        </p>
      </div>
    </section>

    {/* ============== 9. COMPARISON ============== */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center mb-12">
        <span className="section-eyebrow">Comparison</span>
        <h2 className="section-headline text-foreground mt-4">Borna vs traditional healthcare software</h2>
      </div>
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="rounded-[14px] overflow-hidden" style={cardStyle}>
          <div className="grid grid-cols-3 px-4 md:px-6 py-3 md:py-4" style={{ borderBottom: "0.5px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>Capability</span>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>Traditional</span>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-primary">Borna</span>
          </div>
          {comparisonRows.map((row, i) => (
            <div
              key={row.capability}
              className="grid grid-cols-3 gap-2 items-center px-4 md:px-6 py-3 md:py-[18px]"
              style={{ borderBottom: i < comparisonRows.length - 1 ? "0.5px solid rgba(255,255,255,0.06)" : "none" }}
            >
              <span className="text-xs md:text-sm font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>{row.capability}</span>
              <span className="text-xs md:text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{row.traditional}</span>
              <span className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-medium text-primary">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{row.borna}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ============== 10. PRODUCT ENTRY (Borna Care bridge) ============== */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center mb-14">
        <span className="section-eyebrow">Start here</span>
        <h2 className="section-headline text-foreground mt-4 mb-4">Start with Borna Care. Expand seamlessly.</h2>
        <p className="body-text mx-auto max-w-2xl">
          Borna Care is the first live module — delivering immediate value in patient engagement, scheduling, digital forms, and payments. As additional modules are released, they connect to the same data layer without disruption.
        </p>
        <Link to="/products/care" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mt-4">
          Explore Borna Care <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1.4fr] gap-6 md:gap-8 items-center">
          {/* Patient mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="text-[11px] uppercase tracking-[1.5px] text-primary mb-3">Patient experience</p>
            <div
              className="w-[200px] h-[400px] rounded-[28px] p-3 flex flex-col"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                border: "0.5px solid rgba(255,255,255,0.12)",
                boxShadow: "0 20px 60px rgba(0,222,196,0.08)",
              }}
            >
              <div className="rounded-[20px] flex-1 p-4 flex flex-col gap-3" style={{ background: "rgba(13,21,53,0.6)" }}>
                <div className="text-[10px] font-semibold text-primary">Borna Care</div>
                <div className="text-sm font-medium text-foreground">Hi, Sarah 👋</div>
                {[
                  { Icon: Calendar, label: "Online booking" },
                  { Icon: FileText, label: "Digital forms" },
                  { Icon: CreditCard, label: "Secure payments" },
                  { Icon: MessageSquare, label: "Messages" },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.85)" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Connector */}
          <div className="hidden md:flex flex-col items-center text-primary/50">
            <div className="w-px h-10 bg-primary/30" />
            <ArrowRight className="w-4 h-4 my-1" />
            <div className="w-px h-10 bg-primary/30" />
            <div className="text-[9px] uppercase tracking-[1.5px] mt-2 rotate-90 whitespace-nowrap">Live data sync</div>
          </div>

          {/* Admin desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <p className="text-[11px] uppercase tracking-[1.5px] text-primary mb-3">Practice experience</p>
            <div
              className="w-full rounded-[14px] p-3"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                border: "0.5px solid rgba(255,255,255,0.12)",
                boxShadow: "0 20px 60px rgba(0,222,196,0.08)",
              }}
            >
              <div className="flex gap-1.5 mb-3 px-1">
                <div className="w-2 h-2 rounded-full bg-red-400/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                <div className="w-2 h-2 rounded-full bg-green-400/60" />
              </div>
              <div className="rounded-[10px] p-4 grid grid-cols-2 gap-3" style={{ background: "rgba(13,21,53,0.6)" }}>
                {[
                  { Icon: Users, label: "Patient management", value: "1,284" },
                  { Icon: Calendar, label: "Scheduling control", value: "42 today" },
                  { Icon: Database, label: "PMS / EHR sync", value: "Connected" },
                  { Icon: Workflow, label: "Workflow coordination", value: "12 active" },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.06)" }}>
                    <Icon className="w-4 h-4 text-primary mb-2" />
                    <div className="text-[10px] uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</div>
                    <div className="text-sm font-semibold text-foreground">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ============== 11. KEY TAKEAWAYS ============== */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center mb-14">
        <span className="section-eyebrow">Key takeaways</span>
        <h2 className="section-headline text-foreground mt-4">The Borna platform in four lines</h2>
      </div>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {takeaways.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.text}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                className="text-center md:text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground leading-relaxed">{t.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ============== 12. FAQ ============== */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center mb-12">
        <span className="section-eyebrow">What people ask</span>
        <h2 className="section-headline text-foreground mt-4">Frequently asked questions</h2>
      </div>
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <AccordionItem
                value={`faq-${i}`}
                className="border-none"
                style={{ ...cardStyle, borderRadius: "14px", overflow: "hidden" }}
              >
                <AccordionTrigger
                  className="px-6 py-5 text-left text-[15px] font-medium hover:no-underline"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>

    {/* ============== 13. FINAL CTA ============== */}
    <section className="relative overflow-hidden py-24 border-t border-glass-border">
      <div className="absolute inset-0 opacity-40">
        <BeamsBackground intensity="subtle" />
      </div>
      <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center relative z-10">
        <h2 className="section-headline text-foreground mb-5">Replace fragmented tools with a unified healthcare platform.</h2>
        <p className="body-text mx-auto max-w-xl mb-8">
          Borna AI helps practices streamline operations, improve patient engagement, and grow sustainably — starting with a single product and scaling into a complete AI-powered system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/demo" className="gradient-btn text-base px-8 py-3.5">Book a demo</Link>
          <Link to="/contact" className="ghost-btn text-base px-8 py-3.5">Talk to sales</Link>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default PlatformPage;
