import { motion } from "framer-motion";

const problems = [
  "Missed appointments",
  "Paper intake forms",
  "Manual payment follow-up",
  "No patient self-service",
];

const CareProblemSection = () => {
  return (
    <section className="py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-headline text-foreground mb-10"
        >
          Managing patient interactions manually is costing your clinic
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {problems.map((p) => (
            <span
              key={p}
              className="px-5 py-2.5 rounded-full text-sm"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {p}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CareProblemSection;
