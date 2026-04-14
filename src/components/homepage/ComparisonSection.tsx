import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const rows = [
  { capability: "Communication", traditional: "Multiple tools", borna: "Unified" },
  { capability: "Data", traditional: "Fragmented", borna: "Centralised" },
  { capability: "Insights", traditional: "Limited", borna: "AI-driven" },
  { capability: "Workflows", traditional: "Manual", borna: "Automated" },
  { capability: "Patient portal", traditional: "Generic, 3rd-party branded", borna: "White-labeled, clinic-branded" },
  { capability: "AI integration", traditional: "Bolt-on or absent", borna: "Natively woven in" },
  { capability: "Patient retention", traditional: "Reactive", borna: "Predictive recalls" },
  { capability: "Scalability", traditional: "Per-tool, per-seat", borna: "Per location, unlimited seats" },
  { capability: "Setup & onboarding", traditional: "Weeks of migration", borna: "URL-based, minutes" },
];

const ComparisonSection = () => {
  const ref = useScrollAnimation();
  return (
    <section className="py-20 md:py-28" style={{ background: "#07090F" }}>
      <div className="container mx-auto px-5 md:px-6" ref={ref}>
        <h2 className="animate-on-scroll section-headline text-center mb-12">Borna vs traditional healthcare software</h2>
        <div className="animate-on-scroll glass-panel overflow-hidden max-w-4xl mx-auto hidden md:block">
          <div className="grid grid-cols-3 text-sm font-semibold" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="p-4" style={{ color: "#F8FAFC" }}>Capability</div>
            <div className="p-4 flex items-center gap-1.5" style={{ color: "#94A3B8" }}><X className="w-3.5 h-3.5" style={{ color: "#EF4444" }} /> Traditional tools</div>
            <div className="p-4 flex items-center gap-1.5" style={{ color: "#00C9B1" }}><Check className="w-3.5 h-3.5" /> Borna AI</div>
          </div>
          {rows.map((row, i) => (
            <div key={row.capability} className="animate-on-scroll grid grid-cols-3 text-sm" style={{ borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)", minHeight: 56 }}>
              <div className="p-4 flex items-center" style={{ color: "#F8FAFC" }}>{row.capability}</div>
              <div className="p-4 flex items-center gap-1.5" style={{ color: "#64748B" }}><X className="w-3 h-3 shrink-0" style={{ color: "#EF4444" }} /> {row.traditional}</div>
              <div className="p-4 flex items-center gap-1.5" style={{ color: "#F8FAFC" }}><Check className="w-3 h-3 shrink-0" style={{ color: "#00C9B1" }} /> {row.borna}</div>
            </div>
          ))}
        </div>
        <div className="md:hidden space-y-3 max-w-md mx-auto">
          {rows.map((row) => (
            <div key={row.capability} className="animate-on-scroll glass-panel p-4">
              <p className="text-sm font-semibold mb-2" style={{ color: "#F8FAFC" }}>{row.capability}</p>
              <div className="flex items-start gap-1.5 mb-1"><X className="w-3 h-3 shrink-0 mt-0.5" style={{ color: "#EF4444" }} /><span className="text-xs" style={{ color: "#64748B" }}>{row.traditional}</span></div>
              <div className="flex items-start gap-1.5"><Check className="w-3 h-3 shrink-0 mt-0.5" style={{ color: "#00C9B1" }} /><span className="text-xs" style={{ color: "#F8FAFC" }}>{row.borna}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
