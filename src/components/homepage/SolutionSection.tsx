import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const modules = [
  { label: "Communication", angle: 0 },
  { label: "CRM", angle: 90 },
  { label: "Analytics", angle: 180 },
  { label: "Patient Experience", angle: 270 },
];

const SystemDiagram = () => {
  const cx = 200, cy = 200, r = 120;
  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-[360px] mx-auto" role="img" aria-label="Borna Core system diagram with connected modules">
      {/* Connecting lines with animated dots */}
      {modules.map((mod, i) => {
        const rad = (mod.angle - 90) * (Math.PI / 180);
        const ex = cx + r * Math.cos(rad);
        const ey = cy + r * Math.sin(rad);
        return (
          <g key={mod.label}>
            <line x1={cx} y1={cy} x2={ex} y2={ey} stroke="rgba(0,222,196,0.25)" strokeWidth="1" />
            <circle r="3" fill="#00DEC4" opacity="0.6">
              <animateMotion
                dur={`${3 + i * 0.5}s`}
                repeatCount="indefinite"
                path={`M${cx},${cy} L${ex},${ey}`}
              />
            </circle>
            {/* Module node */}
            <circle cx={ex} cy={ey} r="32" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
            <text x={ex} y={ey + 4} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9" fontWeight="500">{mod.label}</text>
          </g>
        );
      })}

      {/* Centre — Borna Core */}
      <circle cx={cx} cy={cy} r="48" fill="rgba(0,71,155,0.3)" />
      <circle cx={cx} cy={cy} r="44" fill="rgba(0,71,155,0.2)" stroke="#00479B" strokeWidth="1" />
      <text x={cx} y={cy - 4} textAnchor="middle" fill="rgba(255,255,255,0.95)" fontSize="12" fontWeight="600">Borna</text>
      <text x={cx} y={cy + 12} textAnchor="middle" fill="rgba(255,255,255,0.95)" fontSize="12" fontWeight="600">Core</text>

      {/* Subtle glow */}
      <circle cx={cx} cy={cy} r="56" fill="none" stroke="rgba(0,71,155,0.15)" strokeWidth="8" />
    </svg>
  );
};

const SolutionSection = () => (
  <section id="solution" className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-[36px] font-medium text-foreground mb-5" style={{ letterSpacing: "-0.5px" }}>
            One platform to manage your entire practice
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
            Borna combines patient engagement software, healthcare CRM, communication tools, analytics, and AI automation into one unified platform.
          </p>
          <Link to="/platform" className="text-sm font-medium transition-colors" style={{ color: "#00DEC4" }}>
            Learn how it works →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel p-8"
        >
          <SystemDiagram />
        </motion.div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
