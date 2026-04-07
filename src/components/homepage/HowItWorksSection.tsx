import { motion } from "framer-motion";
import { Radio, Database, Brain, Zap, ArrowRight } from "lucide-react";

const glassStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "0.5px solid rgba(255,255,255,0.12)",
  borderRadius: 16,
  backdropFilter: "blur(12px)",
  padding: 24,
};

const steps = [
  { num: "1", label: "Capture patient interactions", Icon: Radio },
  { num: "2", label: "Centralise data", Icon: Database },
  { num: "3", label: "Analyse with AI", Icon: Brain },
  { num: "4", label: "Automate workflows", Icon: Zap },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-[36px] font-medium text-foreground text-center mb-14"
        style={{ letterSpacing: "-0.5px" }}
      >
        How Borna works
      </motion.h2>

      <div className="flex flex-col md:flex-row items-stretch gap-4 max-w-5xl mx-auto">
        {steps.map((step, i) => {
          const Icon = step.Icon;
          return (
            <div key={step.num} className="flex items-center gap-4 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={glassStyle}
                className="flex-1 text-center"
              >
                <span className="text-2xl font-bold block mb-3" style={{ color: "#00DEC4" }}>{step.num}</span>
                <Icon className="w-6 h-6 mx-auto mb-3" style={{ color: "#00DEC4" }} />
                <p className="text-sm font-medium text-foreground">{step.label}</p>
              </motion.div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-5 h-5 shrink-0 animate-pulse" style={{ color: "rgba(255,255,255,0.2)" }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
