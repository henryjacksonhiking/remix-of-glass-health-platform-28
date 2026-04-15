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
    borna: "Centralised",
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
  <section className="py-16 md:py-24">
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
          {/* Header — hidden on mobile, use stacked cards instead */}
          <div
            className="hidden md:grid grid-cols-4 gap-0"
            style={{
              borderBottom: '0.5px solid rgba(255,255,255,0.08)',
              padding: '16px 24px',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>Capability</span>
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>Traditional</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Borna</span>
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>Advantage</span>
          </div>

          {/* Desktop rows */}
          <div className="hidden md:block">
            {rows.map((row, i) => (
              <div
                key={row.capability}
                className="grid grid-cols-4 gap-0 items-center"
                style={{
                  padding: '18px 24px',
                  borderBottom: i < rows.length - 1 ? '0.5px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>{row.capability}</span>
                <span className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  <X className="w-3.5 h-3.5 text-red-400/70 shrink-0" />
                  {row.traditional}
                </span>
                <span className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  {row.borna}
                </span>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{row.advantage}</span>
              </div>
            ))}
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden divide-y divide-white/5">
            {rows.map((row) => (
              <div key={row.capability} className="p-4 space-y-2">
                <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>{row.capability}</div>
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    <X className="w-3 h-3 text-red-400/70 shrink-0" />
                    {row.traditional}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-primary">
                    <Check className="w-3 h-3 shrink-0" />
                    {row.borna}
                  </span>
                </div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{row.advantage}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
