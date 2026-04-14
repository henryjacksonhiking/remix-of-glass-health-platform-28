import { MessageCircle, Users, TrendingUp, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const capabilities = [
  { icon: MessageCircle, title: "Improve patient engagement", desc: "Communicate with patients across all channels — SMS, voice, email, and portal — from one unified inbox.", variant: "teal" as const },
  { icon: Users, title: "Manage patient relationships", desc: "Track leads, appointments, and patient retention across the full lifecycle from first contact to loyal advocate.", variant: "teal" as const },
  { icon: TrendingUp, title: "Analyse performance", desc: "Measure marketing ROI, patient flow, revenue recovery, and operational efficiency with AI-powered dashboards.", variant: "blue" as const },
  { icon: Zap, title: "Automate workflows with AI", desc: "Reduce manual tasks — reminders, recalls, follow-ups, and data entry — with intelligent workflow automation.", variant: "blue" as const },
];

const CapabilitiesSection = () => {
  const ref = useScrollAnimation();
  return (
    <section className="py-20 md:py-28" style={{ background: "#0D1117" }}>
      <div className="container mx-auto px-5 md:px-6" ref={ref}>
        <div className="text-center mb-14">
          <span className="animate-on-scroll section-label block mb-4">CAPABILITIES</span>
          <h2 className="animate-on-scroll section-headline">What you can do with Borna AI</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            const containerClass = cap.variant === "blue" ? "glow-icon-container-blue" : "glow-icon-container";
            const iconColor = cap.variant === "blue" ? "#0EA5E9" : "#00C9B1";
            return (
              <div key={cap.title} className="animate-on-scroll glass-panel-hover p-7">
                <div className={containerClass} style={{ width: 64, height: 64, marginBottom: 16 }}>
                  <Icon className="w-7 h-7" style={{ color: iconColor }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#F8FAFC" }}>{cap.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
