import { ShieldCheck, GitBranch, Lock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 38, suffix: "%", label: "Reduction in no-show rate with automated SMS reminders" },
  { value: 150, prefix: "$", suffix: "K", label: "Average annual revenue recovered from missed call automation" },
  { value: 3, suffix: "×", label: "Faster patient onboarding with digital intake and portal" },
  { value: 90, suffix: "%", label: "Call answer rate achieved vs. 65% industry average" },
];

const trustCards = [
  { icon: ShieldCheck, title: "HIPAA Compliant", desc: "Built with HIPAA compliance in mind. Business Associate Agreements (BAA) available for all US clinic accounts.", variant: "teal" },
  { icon: GitBranch, title: "PMS/EHR Integration", desc: "Connects to your existing practice management system — Dentrix, Open Dental, Jane App, and more. No migration required.", variant: "blue" },
  { icon: Lock, title: "Enterprise-Grade Security", desc: "AES-256 encryption at rest, TLS 1.3 in transit, SOC 2 preparation underway, and role-based access controls.", variant: "teal" },
];

const StatItem = ({ value, prefix = "", suffix = "", label }: { value: number; prefix?: string; suffix?: string; label: string }) => {
  const { ref, display } = useCountUp(value, 1500, prefix, suffix);

  return (
    <div ref={ref} className="animate-on-scroll text-center flex-1 min-w-[140px]">
      <p className="gradient-text font-display" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1 }}>
        {display}
      </p>
      <p className="text-sm mt-3 mx-auto" style={{ color: "#94A3B8", maxWidth: 160 }}>{label}</p>
    </div>
  );
};

const GrowthSection = () => {
  const ref = useScrollAnimation();

  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "radial-gradient(ellipse at center, rgba(0,201,177,0.04), transparent 70%), #07090F" }}
    >
      <div className="container mx-auto px-5 md:px-6" ref={ref}>
        <div className="text-center mb-14">
          <span className="animate-on-scroll section-label block mb-4">RESULTS</span>
          <h2 className="animate-on-scroll section-headline mb-4">Built to drive measurable growth</h2>
          <p className="animate-on-scroll text-base" style={{ color: "#94A3B8" }}>Real outcomes from practices using Borna — tracked from day one.</p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-0 max-w-5xl mx-auto mb-16">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <StatItem {...stat} />
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px h-16 mx-6" style={{ background: "rgba(255,255,255,0.08)" }} />
              )}
            </div>
          ))}
        </div>

        {/* Trust cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trustCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="animate-on-scroll glass-panel-hover p-6"
                style={{ borderTop: "3px solid #00C9B1" }}
              >
                <div className={card.variant === "blue" ? "glow-icon-container-blue" : "glow-icon-container"} style={{ width: 52, height: 52, marginBottom: 16 }}>
                  <Icon className="w-5 h-5" style={{ color: card.variant === "blue" ? "#0EA5E9" : "#00C9B1" }} />
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: "#F8FAFC" }}>{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
