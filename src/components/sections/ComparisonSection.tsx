import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  {
    capability: "Communication",
    traditional: "Multiple tools",
    borna: "Unified",
    advantage: "Omni-channel unified communication system",
  },
  {
    capability: "Data",
    traditional: "Fragmented",
    borna: "Centralized",
    advantage: "Replaces isolated, disconnected applications",
  },
  {
    capability: "Insights",
    traditional: "Limited",
    borna: "AI-driven",
    advantage: "AI-enabled comprehensive analytics",
  },
  {
    capability: "Workflows",
    traditional: "Manual",
    borna: "Automated",
    advantage: "Scales with your practice growth",
  },
];

const ComparisonSection = () => (
  <section className="py-10 md:py-16">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-10 md:mb-16">
        <span className="section-eyebrow">
          How offices find Borna effective
        </span>
        <h2 className="section-title mt-4">
          Borna vs traditional healthcare software
        </h2>
      </div>

      <div className="max-w-4xl mx-auto overflow-x-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '0.5px solid rgba(255,255,255,0.08)',
            borderRadius: '14px',
            overflow: 'hidden',
          }}
        >
          {/* Header — 3 cols on mobile, 4 cols on desktop */}
          <div
            className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-0 px-3 md:px-6 py-3 md:py-4"
            style={{
              borderBottom: '0.5px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>Capability</span>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>Traditional</span>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-primary">Borna</span>
            <span className="hidden md:inline text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>Advantage</span>
          </div>

          {/* Rows */}
          <div>
            {rows.map((row, i) => (
              <div
                key={row.capability}
                className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-0 items-center px-3 md:px-6 py-3 md:py-[18px]"
                style={{
                  borderBottom: i < rows.length - 1 ? '0.5px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <span className="text-xs md:text-sm font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>{row.capability}</span>
                <span className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  <X className="w-3 h-3 md:w-3.5 md:h-3.5 text-red-400/70 shrink-0" />
                  {row.traditional}
                </span>
                <span className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-medium text-primary">
                  <Check className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0" />
                  {row.borna}
                </span>
                <span className="hidden md:inline text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{row.advantage}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
