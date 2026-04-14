import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  { capability: "Communication", traditional: "Multiple tools", borna: "Unified" },
  { capability: "Data", traditional: "Fragmented", borna: "Centralised" },
  { capability: "Insights", traditional: "Limited", borna: "AI-driven" },
  { capability: "Workflows", traditional: "Manual", borna: "Automated" },
];

const ComparisonSection = () => (
  <section id="comparison" className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-[36px] font-medium text-foreground text-center mb-14"
        style={{ letterSpacing: "-0.5px" }}
      >
        Borna vs traditional healthcare software
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto glass-panel overflow-hidden"
      >
        {/* Header */}
        <div className="grid grid-cols-3 text-center border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="p-4 text-sm font-medium text-muted-foreground">Capability</div>
          <div className="p-4 text-sm font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>Traditional tools</div>
          <div className="p-4 text-sm font-medium" style={{ color: "#00DEC4", borderLeft: "2px solid rgba(0,222,196,0.2)" }}>Borna</div>
        </div>

        {rows.map((row, i) => (
          <div
            key={row.capability}
            className="grid grid-cols-3 text-center"
            style={{ borderBottom: i < rows.length - 1 ? "0.5px solid rgba(255,255,255,0.06)" : "none" }}
          >
            <div className="p-4 text-sm text-foreground font-medium">{row.capability}</div>
            <div className="p-4 flex items-center justify-center gap-2">
              <X className="w-3.5 h-3.5" style={{ color: "rgba(239,68,68,0.6)" }} />
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>{row.traditional}</span>
            </div>
            <div className="p-4 flex items-center justify-center gap-2" style={{ borderLeft: "2px solid rgba(0,222,196,0.2)" }}>
              <Check className="w-3.5 h-3.5" style={{ color: "#00DEC4" }} />
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>{row.borna}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ComparisonSection;
