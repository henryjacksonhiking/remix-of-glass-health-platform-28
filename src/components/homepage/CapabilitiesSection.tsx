import { motion } from "framer-motion";

const glassStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "0.5px solid rgba(255,255,255,0.12)",
  borderRadius: 16,
  backdropFilter: "blur(12px)",
  padding: 24,
};

const ChannelDiagram = () => (
  <svg viewBox="0 0 120 80" className="w-[120px] h-[80px]" role="img" aria-label="Multiple channels converging into one">
    <circle cx="15" cy="20" r="6" fill="rgba(0,222,196,0.2)" stroke="#00DEC4" strokeWidth="0.5" />
    <circle cx="15" cy="40" r="6" fill="rgba(0,222,196,0.2)" stroke="#00DEC4" strokeWidth="0.5" />
    <circle cx="15" cy="60" r="6" fill="rgba(0,222,196,0.2)" stroke="#00DEC4" strokeWidth="0.5" />
    <circle cx="105" cy="40" r="10" fill="rgba(0,222,196,0.15)" stroke="#00DEC4" strokeWidth="1" />
    <line x1="21" y1="20" x2="95" y2="40" stroke="rgba(0,222,196,0.3)" strokeWidth="0.5" />
    <line x1="21" y1="40" x2="95" y2="40" stroke="rgba(0,222,196,0.3)" strokeWidth="0.5" />
    <line x1="21" y1="60" x2="95" y2="40" stroke="rgba(0,222,196,0.3)" strokeWidth="0.5" />
  </svg>
);

const FunnelDiagram = () => (
  <svg viewBox="0 0 120 80" className="w-[120px] h-[80px]" role="img" aria-label="CRM funnel with three stages">
    <rect x="20" y="8" width="80" height="16" rx="3" fill="rgba(0,222,196,0.15)" stroke="#00DEC4" strokeWidth="0.5" />
    <rect x="30" y="32" width="60" height="16" rx="3" fill="rgba(0,222,196,0.1)" stroke="#00DEC4" strokeWidth="0.5" />
    <rect x="40" y="56" width="40" height="16" rx="3" fill="rgba(0,222,196,0.07)" stroke="#00DEC4" strokeWidth="0.5" />
  </svg>
);

const GraphDiagram = () => (
  <svg viewBox="0 0 120 80" className="w-[120px] h-[80px]" role="img" aria-label="Upward trend line graph">
    <polyline points="10,65 35,50 60,55 85,30 110,15" fill="none" stroke="#00DEC4" strokeWidth="1.5" />
    {[{ x: 10, y: 65 }, { x: 35, y: 50 }, { x: 60, y: 55 }, { x: 85, y: 30 }, { x: 110, y: 15 }].map((p, i) => (
      <circle key={i} cx={p.x} cy={p.y} r="3" fill="#00DEC4" />
    ))}
  </svg>
);

const GearDiagram = () => (
  <svg viewBox="0 0 120 80" className="w-[120px] h-[80px]" role="img" aria-label="Automation gear with signal lines">
    <circle cx="60" cy="40" r="16" fill="rgba(0,222,196,0.1)" stroke="#00DEC4" strokeWidth="1" />
    <circle cx="60" cy="40" r="8" fill="rgba(0,222,196,0.2)" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      return (
        <line
          key={angle}
          x1={60 + 20 * Math.cos(rad)} y1={40 + 20 * Math.sin(rad)}
          x2={60 + 32 * Math.cos(rad)} y2={40 + 32 * Math.sin(rad)}
          stroke="rgba(0,222,196,0.3)" strokeWidth="1"
        />
      );
    })}
  </svg>
);

const cards = [
  { title: "Improve patient engagement", body: "Communicate with patients across all channels.", Diagram: ChannelDiagram },
  { title: "Manage patient relationships", body: "Track leads, appointments, and retention.", Diagram: FunnelDiagram },
  { title: "Analyse performance", body: "Measure marketing ROI and patient flow.", Diagram: GraphDiagram },
  { title: "Automate workflows with AI", body: "Reduce manual tasks and improve efficiency.", Diagram: GearDiagram },
];

const CapabilitiesSection = () => (
  <section id="capabilities" className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-[36px] font-medium text-foreground text-center mb-14"
        style={{ letterSpacing: "-0.5px" }}
      >
        What you can do with Borna AI
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            style={glassStyle}
          >
            <card.Diagram />
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">{card.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{card.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
