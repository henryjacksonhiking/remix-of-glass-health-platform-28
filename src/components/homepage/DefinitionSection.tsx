import { MonitorPlay, Users, BarChart3, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const nodes = [
  { icon: MonitorPlay, label: "Communication", angle: 0 },
  { icon: Users, label: "CRM", angle: 90 },
  { icon: BarChart3, label: "Analytics", angle: 180 },
  { icon: Zap, label: "Automation", angle: 270 },
];

const OrbitalDiagram = () => {
  const cx = 200, cy = 200, r = 130;
  return (
    <div className="relative w-full max-w-[400px] mx-auto aspect-square">
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        <circle cx={cx} cy={cy} r={r + 20} fill="none" stroke="rgba(0,201,177,0.1)" strokeWidth="1" strokeDasharray="4 6" style={{ animation: "orbit-spin 60s linear infinite" }} />
      </svg>
      <div
        className="absolute animate-center-pulse"
        style={{
          left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          width: 100, height: 100,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #00C9B1, #0EA5E9)",
          boxShadow: "0 0 60px rgba(0,201,177,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <span className="font-display text-sm font-bold" style={{ color: "#07090F" }}>Borna</span>
        <span className="font-display text-sm font-bold" style={{ color: "#07090F" }}>Core</span>
      </div>
      {nodes.map((node, i) => {
        const rad = (node.angle - 90) * (Math.PI / 180);
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        const Icon = node.icon;
        const pctX = (x / 400) * 100;
        const pctY = (y / 400) * 100;
        return (
          <div key={node.label}>
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(0,201,177,0.25)" strokeWidth="1.5" strokeDasharray="6 4" className="animate-dash-flow" style={{ animationDelay: `${i * 0.3}s` }} />
            </svg>
            <div className="absolute flex flex-col items-center gap-1.5" style={{ left: `${pctX}%`, top: `${pctY}%`, transform: "translate(-50%, -50%)" }}>
              <div className="glass-panel flex items-center justify-center" style={{ width: 52, height: 52, borderRadius: "50%" }}>
                <Icon className="w-5 h-5" style={{ color: "#00C9B1" }} />
              </div>
              <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.9)" }}>{node.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const DefinitionSection = () => {
  const ref = useScrollAnimation();
  return (
    <section className="py-20 md:py-28" style={{ background: "#0D1117" }}>
      <div className="container mx-auto px-5 md:px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div>
            <span className="animate-on-scroll section-label block mb-4">THE PLATFORM</span>
            <h2 className="animate-on-scroll section-headline mb-6">What is an AI healthcare platform?</h2>
            <div className="animate-on-scroll space-y-4" style={{ color: "#94A3B8", lineHeight: 1.8 }}>
              <p>Borna is built as a modular platform. Each module handles a distinct layer of your practice operations, and all modules share a unified data layer.</p>
              <p>An AI healthcare platform integrates patient communication, CRM, analytics, and automation into a single system to improve efficiency, patient experience, and decision-making.</p>
              <p>Unlike standalone tools, it connects data and workflows across the entire patient lifecycle.</p>
            </div>
          </div>
          <div className="animate-on-scroll">
            <OrbitalDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefinitionSection;
