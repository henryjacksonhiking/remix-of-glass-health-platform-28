import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/lib/products";

const moduleData = products.map((p) => ({
  id: p.id,
  name: p.name,
  live: p.id === "care",
}));

const EcosystemDiagram = () => {
  const cx = 200, cy = 200;
  const innerR = 100;
  const outerR = 170;
  const outerNodes = [
    { label: "EHR", angle: 30 },
    { label: "Marketing", angle: 150 },
    { label: "Payments", angle: 270 },
  ];

  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-[380px] mx-auto" role="img" aria-label="Borna ecosystem radial diagram showing connected modules">
      {/* Core glow */}
      <circle cx={cx} cy={cy} r="60" fill="rgba(0,71,155,0.15)" />
      <circle cx={cx} cy={cy} r="45" fill="rgba(0,71,155,0.25)" stroke="#00479B" strokeWidth="1" />
      <text x={cx} y={cy - 6} textAnchor="middle" fill="rgba(255,255,255,0.95)" fontSize="10" fontWeight="600">Borna AI</text>
      <text x={cx} y={cy + 8} textAnchor="middle" fill="rgba(255,255,255,0.95)" fontSize="10" fontWeight="600">Engine</text>

      {/* Middle ring — modules */}
      {moduleData.map((mod, i) => {
        const angle = (i * 360) / moduleData.length - 90;
        const rad = (angle * Math.PI) / 180;
        const ex = cx + innerR * Math.cos(rad);
        const ey = cy + innerR * Math.sin(rad);
        return (
          <g key={mod.id}>
            <line x1={cx} y1={cy} x2={ex} y2={ey} stroke="rgba(0,222,196,0.2)" strokeWidth="1" />
            <circle r="3" fill="#00DEC4" opacity="0.5">
              <animateMotion dur={`${3 + i * 0.4}s`} repeatCount="indefinite" path={`M${cx},${cy} L${ex},${ey}`} />
            </circle>
            <circle cx={ex} cy={ey} r="28" fill="rgba(255,255,255,0.05)" stroke={mod.live ? "#00DEC4" : "rgba(255,255,255,0.12)"} strokeWidth={mod.live ? "1.5" : "0.5"} />
            <text x={ex} y={ey - 4} textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="8" fontWeight="500">{mod.name.replace("Borna ", "")}</text>
            {/* Badge */}
            <text x={ex} y={ey + 10} textAnchor="middle" fill={mod.live ? "#00DEC4" : "rgba(255,255,255,0.35)"} fontSize="6.5">
              {mod.live ? "Live" : "In dev"}
            </text>
          </g>
        );
      })}

      {/* Outer ring */}
      {outerNodes.map((node) => {
        const rad = ((node.angle - 90) * Math.PI) / 180;
        const ex = cx + outerR * Math.cos(rad);
        const ey = cy + outerR * Math.sin(rad);
        return (
          <g key={node.label}>
            <line x1={cx + innerR * 0.85 * Math.cos(rad)} y1={cy + innerR * 0.85 * Math.sin(rad)} x2={ex} y2={ey} stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="4 3" />
            <circle cx={ex} cy={ey} r="18" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            <text x={ex} y={ey + 3} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7">{node.label}</text>
          </g>
        );
      })}
    </svg>
  );
};

const EcosystemSection = () => (
  <section id="ecosystem" className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-[36px] font-medium text-foreground mb-5" style={{ letterSpacing: "-0.5px" }}>
            A connected healthcare ecosystem
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
            Borna is built as a modular platform. Each module handles a distinct layer of your practice operations, and all modules share a unified data layer.
          </p>

          <ul className="space-y-3 mb-6">
            {moduleData.map((mod) => (
              <li key={mod.id} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: mod.live ? "#00DEC4" : "rgba(255,255,255,0.2)" }} />
                <span className="text-sm text-foreground">{mod.name}</span>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{
                  backgroundColor: mod.live ? "rgba(0,222,196,0.15)" : "rgba(255,255,255,0.06)",
                  color: mod.live ? "#00DEC4" : "rgba(255,255,255,0.35)",
                }}>
                  {mod.live ? "Live now" : "In development"}
                </span>
              </li>
            ))}
          </ul>

          <Link to="/platform" className="text-sm font-medium transition-colors" style={{ color: "#00DEC4" }}>
            Explore the ecosystem →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel p-8"
        >
          <EcosystemDiagram />
        </motion.div>
      </div>
    </div>
  </section>
);

export default EcosystemSection;
