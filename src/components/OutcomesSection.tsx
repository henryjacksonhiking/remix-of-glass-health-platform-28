import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const outcomes = [
  "Fewer missed leads and prospective patients",
  "Stronger, more consistent patient relationships",
  "Better operational efficiency across your team",
  "Clear visibility into practice performance",
  "Higher revenue per patient over time",
];

const OutcomesSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: 36, fontWeight: 500, color: "rgba(255,255,255,0.95)", letterSpacing: "-1px" }}
        >
          What Borna delivers
        </motion.h2>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        {outcomes.map((text, i) => (
          <motion.div
            key={text}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="flex items-center gap-4"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "0.5px solid rgba(255,255,255,0.12)",
              borderRadius: 16,
              padding: "20px 24px",
              backdropFilter: "blur(12px)",
            }}
          >
            <CheckCircle className="w-5 h-5 shrink-0" style={{ color: "#00DEC4" }} />
            <span style={{ fontSize: 15, color: "rgba(255,255,255,0.9)", fontWeight: 450 }}>{text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OutcomesSection;
