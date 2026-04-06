import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const outcomes = [
  "Fewer missed leads and prospective patients",
  "Stronger, more consistent patient relationships",
  "Better operational efficiency across your team",
  "Clear visibility into practice performance",
  "Higher revenue per patient over time",
];

const glassRow: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "0.5px solid rgba(255,255,255,0.12)",
  borderRadius: 16,
  backdropFilter: "blur(12px)",
  padding: "20px 28px",
};

const OutcomesSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 md:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-4xl font-medium text-foreground text-center mb-14"
        style={{ letterSpacing: "-0.5px" }}
      >
        What Borna delivers
      </motion.h2>

      <div className="max-w-2xl mx-auto space-y-4">
        {outcomes.map((text, i) => (
          <motion.div
            key={text}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            style={glassRow}
            className="flex items-center gap-4"
          >
            <CheckCircle className="w-5 h-5 shrink-0" style={{ color: "#00DEC4" }} />
            <span className="text-sm md:text-base" style={{ color: "rgba(255,255,255,0.85)" }}>{text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OutcomesSection;
