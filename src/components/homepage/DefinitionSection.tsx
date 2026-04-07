import { motion } from "framer-motion";
import { MessageSquare, Users, BarChart3, Zap } from "lucide-react";

const nodes = [
  { label: "Communication", Icon: MessageSquare, x: 50, y: 5 },
  { label: "CRM", Icon: Users, x: 95, y: 50 },
  { label: "Analytics", Icon: BarChart3, x: 50, y: 95 },
  { label: "Automation", Icon: Zap, x: 5, y: 50 },
];

const ConceptDiagram = () => (
  <svg
    viewBox="0 0 400 400"
    className="w-full max-w-[320px] md:max-w-[380px] mx-auto"
    role="img"
    aria-label="Concept diagram showing AI Healthcare Platform connected to Communication, CRM, Analytics, and Automation"
  >
    {/* Connecting lines */}
    {nodes.map((node) => (
      <line
        key={node.label}
        x1="200" y1="200"
        x2={node.x * 4} y2={node.y * 4}
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
      />
    ))}

    {/* Centre node glow */}
    <circle cx="200" cy="200" r="60" fill="rgba(0,222,196,0.06)" />
    <circle cx="200" cy="200" r="50" fill="rgba(255,255,255,0.05)" stroke="#00DEC4" strokeWidth="1" />
    <text x="200" y="193" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="11" fontWeight="500">AI Healthcare</text>
    <text x="200" y="210" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="11" fontWeight="500">Platform</text>
  </svg>
);

const DefinitionSection = () => (
  <section id="definition" className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-[36px] font-medium text-foreground mb-5" style={{ letterSpacing: "-0.5px" }}>
            What is an AI healthcare platform?
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">
            An AI healthcare platform integrates patient communication, CRM, analytics, and automation into a single system to improve efficiency, patient experience, and decision-making.
          </p>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Unlike standalone tools, it connects data and workflows across the entire patient lifecycle.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel p-8 relative"
        >
          <ConceptDiagram />
          {/* Overlay icon labels */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {nodes.map((node) => {
              const Icon = node.Icon;
              const posStyle: React.CSSProperties = {
                position: "absolute",
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate(-50%, -50%)",
              };
              return (
                <div key={node.label} style={posStyle} className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(0,222,196,0.12)" }}>
                    <Icon className="w-4 h-4" style={{ color: "#00DEC4" }} />
                  </div>
                  <span className="text-[10px] md:text-xs font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>{node.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default DefinitionSection;
