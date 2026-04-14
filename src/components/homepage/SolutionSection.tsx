import { Link } from "react-router-dom";
import { Heart, Phone, BarChart3, Target, Cpu } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const modules = [
  { name: "Borna Care", icon: Heart, status: "Live Now", statusColor: "#22C55E", desc: "Patient portal and engagement platform", angle: -90, href: "/products/care" },
  { name: "Borna Connect", icon: Phone, status: "In Development", statusColor: "#F59E0B", desc: "Unified communications hub", angle: -18, href: "/products/connect" },
  { name: "Borna Insight", icon: BarChart3, status: "In Development", statusColor: "#F59E0B", desc: "AI-powered analytics dashboard", angle: 54, href: "/products/insight" },
  { name: "Borna Engage", icon: Target, status: "In Development", statusColor: "#F59E0B", desc: "CRM and marketing automation", angle: 126, href: "/products/engage" },
  { name: "Borna Core", icon: Cpu, status: "Coming Soon", statusColor: "#94A3B8", desc: "AI automation engine", angle: 198, href: "/products/core" },
];

const SolutionSection = () => {
  const ref = useScrollAnimation();
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28" style={{ background: "#07090F" }}>
      <div className="container mx-auto px-5 md:px-6" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="animate-on-scroll section-label block mb-4">THE ECOSYSTEM</span>
          <h2 className="animate-on-scroll section-headline mb-5">One platform to manage your entire practice</h2>
          <p className="animate-on-scroll text-base mb-4" style={{ color: "#94A3B8" }}>
            Borna combines patient engagement software, healthcare CRM, communication tools, analytics, and AI automation into one unified platform.
          </p>
          <Link to="/platform" className="animate-on-scroll inline-block text-sm font-medium transition-colors hover:underline" style={{ color: "#00C9B1" }}>
            Learn how it works →
          </Link>
        </div>

        {/* Hub diagram — desktop */}
        <div className="animate-on-scroll hidden lg:block relative max-w-[600px] mx-auto" style={{ height: 500, marginBottom: 40 }}>
          {/* Center hub */}
          <div
            className="absolute animate-center-pulse"
            style={{
              left: "50%", top: "50%",
              transform: "translate(-50%, -50%)",
              width: 110, height: 110,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #00C9B1, #0EA5E9)",
              boxShadow: "0 0 80px rgba(0,201,177,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", zIndex: 10,
            }}
          >
            <span className="font-display text-sm font-bold" style={{ color: "#07090F" }}>Borna Core</span>
            <span className="text-[10px] font-medium" style={{ color: "#07090F", opacity: 0.7 }}>AI Engine</span>
          </div>

          {/* Module nodes */}
          {modules.map((mod, i) => {
            const rad = (mod.angle) * (Math.PI / 180);
            const r = 200;
            const cx = 300 + r * Math.cos(rad);
            const cy = 250 + r * Math.sin(rad);
            const Icon = mod.icon;

            return (
              <div key={mod.name}>
                {/* Connecting line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 500">
                  <line x1="300" y1="250" x2={cx} y2={cy} stroke="rgba(0,201,177,0.2)" strokeWidth="1" strokeDasharray="6 4" className="animate-dash-flow" style={{ animationDelay: `${i * 0.3}s` }} />
                </svg>

                {/* Node card */}
                <div
                  className="absolute glass-panel-hover p-4 cursor-pointer"
                  style={{
                    left: `${(cx / 600) * 100}%`,
                    top: `${(cy / 500) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    width: 160, zIndex: 5,
                    textAlign: "center",
                  }}
                >
                  <div className="glow-icon-container mx-auto mb-2" style={{ width: 44, height: 44, padding: 10 }}>
                    <Icon className="w-5 h-5" style={{ color: "#00C9B1" }} />
                  </div>
                  <p className="text-sm font-semibold" style={{ color: "#F8FAFC" }}>{mod.name}</p>
                  <span
                    className="status-pill inline-block mt-1"
                    style={{ borderColor: mod.statusColor, color: mod.statusColor }}
                  >
                    {mod.status}
                  </span>
                  <p className="text-[11px] mt-1.5" style={{ color: "#94A3B8" }}>{mod.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile — accordion list */}
        <div className="lg:hidden space-y-3 max-w-md mx-auto">
          {modules.map((mod, i) => {
            const Icon = mod.icon;
            const isOpen = expandedModule === i;
            return (
              <div key={mod.name} className="animate-on-scroll glass-panel overflow-hidden">
                <button
                  className="w-full flex items-center gap-3 p-4 text-left"
                  onClick={() => setExpandedModule(isOpen ? null : i)}
                >
                  <div className="glow-icon-container" style={{ padding: 8, flexShrink: 0 }}>
                    <Icon className="w-4 h-4" style={{ color: "#00C9B1" }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold" style={{ color: "#F8FAFC" }}>{mod.name}</p>
                    <span className="status-pill text-[10px]" style={{ borderColor: mod.statusColor, color: mod.statusColor }}>{mod.status}</span>
                  </div>
                  <svg className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} style={{ color: "#00C9B1" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4">
                    <p className="text-sm mb-2" style={{ color: "#94A3B8" }}>{mod.desc}</p>
                    <Link to={mod.href} className="text-xs font-medium" style={{ color: "#00C9B1" }}>Learn more →</Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* SEO-friendly module list below diagram */}
        <div className="hidden lg:block max-w-3xl mx-auto mt-8 space-y-2">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <Link key={mod.name} to={mod.href} className="glass-panel-hover flex items-center gap-4 p-4">
                <div className="glow-icon-container" style={{ padding: 8, flexShrink: 0 }}>
                  <Icon className="w-4 h-4" style={{ color: "#00C9B1" }} />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold" style={{ color: "#F8FAFC" }}>{mod.name}</span>
                  <span className="status-pill ml-2 text-[10px]" style={{ borderColor: mod.statusColor, color: mod.statusColor }}>{mod.status}</span>
                </div>
                <p className="text-sm hidden md:block" style={{ color: "#94A3B8" }}>{mod.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
