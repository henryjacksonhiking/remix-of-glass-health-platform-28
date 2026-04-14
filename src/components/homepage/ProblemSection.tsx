import { Phone, MessageSquare, Calendar, BarChart2, X, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tools = [
  { icon: Phone, label: "Calls" },
  { icon: MessageSquare, label: "SMS" },
  { icon: Calendar, label: "Scheduling" },
  { icon: BarChart2, label: "Analytics" },
];

const ProblemSection = () => {
  const ref = useScrollAnimation();
  return (
    <section className="py-20 md:py-28" style={{ background: "#07090F" }}>
      <div className="container mx-auto px-5 md:px-6" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="animate-on-scroll section-headline mb-5">Why healthcare practices struggle with fragmented systems</h2>
          <p className="animate-on-scroll text-base leading-relaxed mb-4" style={{ color: "#94A3B8" }}>Most practices rely on multiple disconnected tools: patient communication software, healthcare CRM systems, scheduling platforms, and analytics dashboards.</p>
          <p className="animate-on-scroll text-base leading-relaxed mb-4" style={{ color: "#94A3B8" }}>This leads to missed patient opportunities, inefficient workflows, and lack of visibility.</p>
          <p className="animate-on-scroll text-sm italic" style={{ color: "#475569" }}>According to the Agency for Healthcare Research and Quality, integrated systems improve coordination and outcomes in healthcare environments.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="animate-on-scroll glass-panel p-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{ border: "1px solid rgba(239,68,68,0.4)", background: "rgba(239,68,68,0.08)" }}>
              <span className="font-mono text-xs font-medium" style={{ color: "#EF4444" }}>Fragmented Tools</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => { const Icon = tool.icon; return (
                <div key={tool.label} className="flex flex-col items-center gap-2 py-4">
                  <div className="relative"><Icon className="w-6 h-6" style={{ color: "#475569" }} /><X className="w-3 h-3 absolute -top-1 -right-1" style={{ color: "#EF4444" }} /></div>
                  <span className="text-xs" style={{ color: "#475569" }}>{tool.label}</span>
                </div>
              ); })}
            </div>
            <svg className="w-full h-8 mt-2" viewBox="0 0 300 30"><line x1="50" y1="15" x2="130" y2="15" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" /><line x1="170" y1="15" x2="250" y2="15" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" /></svg>
          </div>
          <div className="animate-on-scroll glass-panel p-6" style={{ borderColor: "rgba(0,201,177,0.2)" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{ border: "1px solid rgba(0,201,177,0.4)", background: "rgba(0,201,177,0.08)" }}>
              <span className="font-mono text-xs font-medium" style={{ color: "#00C9B1" }}>Borna AI</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => { const Icon = tool.icon; return (
                <div key={tool.label} className="flex flex-col items-center gap-2 py-4">
                  <div className="glow-icon-container" style={{ padding: 10 }}><Icon className="w-5 h-5" style={{ color: "#00C9B1" }} /></div>
                  <span className="text-xs flex items-center gap-1" style={{ color: "#F8FAFC" }}>{tool.label} <Check className="w-3 h-3" style={{ color: "#00C9B1" }} /></span>
                </div>
              ); })}
            </div>
            <svg className="w-full h-8 mt-2" viewBox="0 0 300 30"><line x1="50" y1="15" x2="250" y2="15" stroke="#00C9B1" strokeWidth="1.5" strokeDasharray="6 4" className="animate-dash-flow" /><circle cx="150" cy="15" r="4" fill="#00C9B1" opacity="0.8" /></svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
