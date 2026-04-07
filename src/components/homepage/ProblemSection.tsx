import { motion } from "framer-motion";
import { Phone, MessageSquare, Calendar, BarChart3, X, Check } from "lucide-react";

const fragmentedIcons = [
  { Icon: Phone, label: "Calls" },
  { Icon: MessageSquare, label: "SMS" },
  { Icon: Calendar, label: "Scheduling" },
  { Icon: BarChart3, label: "Analytics" },
];

const glassStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "0.5px solid rgba(255,255,255,0.12)",
  borderRadius: 16,
  backdropFilter: "blur(12px)",
  padding: 28,
};

const ProblemSection = () => (
  <section id="problem" className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 max-w-3xl mx-auto"
      >
        <h2 className="text-2xl md:text-[36px] font-medium text-foreground mb-5" style={{ letterSpacing: "-0.5px" }}>
          Why healthcare practices struggle with fragmented systems
        </h2>
        <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">
          Most practices rely on multiple disconnected tools: patient communication software, healthcare CRM systems, scheduling platforms, and analytics dashboards.
        </p>
        <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">
          This leads to missed patient opportunities, inefficient workflows, and lack of visibility.
        </p>
        <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
          According to the Agency for Healthcare Research and Quality, integrated systems improve coordination and outcomes in healthcare environments.
        </p>
      </motion.div>

      {/* Before / After comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Before — Fragmented */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={glassStyle}
        >
          <div className="text-center mb-6">
            <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(239,68,68,0.15)", color: "#ef4444" }}>
              Fragmented tools
            </span>
          </div>
          <div className="relative h-[200px]">
            <svg className="absolute inset-0 w-full h-full" role="img" aria-label="Disconnected tools diagram">
              {/* Dashed broken lines */}
              <line x1="25%" y1="30%" x2="75%" y2="30%" stroke="rgba(239,68,68,0.3)" strokeWidth="1" strokeDasharray="6 4" className="animate-broken-dash" />
              <line x1="25%" y1="70%" x2="75%" y2="70%" stroke="rgba(239,68,68,0.3)" strokeWidth="1" strokeDasharray="6 4" className="animate-broken-dash" style={{ animationDelay: "0.5s" }} />
              <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="rgba(239,68,68,0.3)" strokeWidth="1" strokeDasharray="6 4" className="animate-broken-dash" style={{ animationDelay: "1s" }} />
            </svg>
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 p-4">
              {fragmentedIcons.map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center justify-center gap-1.5" style={{ opacity: 0.5 }}>
                  <Icon className="w-6 h-6" style={{ color: "rgba(255,255,255,0.4)" }} />
                  <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>{label}</span>
                  <X className="w-3 h-3" style={{ color: "rgba(239,68,68,0.5)" }} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* After — Borna AI */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ ...glassStyle, borderColor: "rgba(0,222,196,0.2)" }}
        >
          <div className="text-center mb-6">
            <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(0,222,196,0.15)", color: "#00DEC4" }}>
              Borna AI
            </span>
          </div>
          <div className="relative h-[200px]">
            <svg className="absolute inset-0 w-full h-full" role="img" aria-label="Unified Borna platform diagram">
              {/* Solid teal lines to center */}
              <line x1="25%" y1="30%" x2="50%" y2="50%" stroke="rgba(0,222,196,0.3)" strokeWidth="1" className="animate-pulse-line" />
              <line x1="75%" y1="30%" x2="50%" y2="50%" stroke="rgba(0,222,196,0.3)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: "0.3s" }} />
              <line x1="25%" y1="70%" x2="50%" y2="50%" stroke="rgba(0,222,196,0.3)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: "0.6s" }} />
              <line x1="75%" y1="70%" x2="50%" y2="50%" stroke="rgba(0,222,196,0.3)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: "0.9s" }} />
              {/* Center glow */}
              <circle cx="50%" cy="50%" r="20" fill="rgba(0,222,196,0.08)" />
              <circle cx="50%" cy="50%" r="12" fill="rgba(0,222,196,0.15)" />
            </svg>
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 p-4">
              {fragmentedIcons.map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center justify-center gap-1.5">
                  <Icon className="w-6 h-6" style={{ color: "#00DEC4" }} />
                  <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.7)" }}>{label}</span>
                  <Check className="w-3 h-3" style={{ color: "#00DEC4" }} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
