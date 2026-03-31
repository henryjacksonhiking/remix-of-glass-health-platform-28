import { motion } from "framer-motion";

const CareSolutionOverview = () => {
  return (
    <section className="py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-headline text-foreground mb-6"
        >
          Borna Care centralizes everything in one place
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[15px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          One platform for patients to book, complete forms, and pay — and for your team to manage scheduling, providers, billing, and EHR sync. No more disconnected tools.
        </motion.p>
      </div>
    </section>
  );
};

export default CareSolutionOverview;
