import { motion } from "framer-motion";

const pills = ["AI-native architecture", "Multi-location ready", "Built to scale"];

const InvestorSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-medium text-foreground"
          style={{ letterSpacing: "-0.5px" }}
        >
          Built for the future of healthcare
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 mx-auto"
          style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", maxWidth: 680 }}
        >
          Borna sits at the intersection of AI, SaaS, and healthcare — designed as a scalable platform that evolves with the industry.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        {pills.map((text) => (
          <span
            key={text}
            className="px-5 py-2.5 rounded-full text-sm font-medium text-white"
            style={{ background: "linear-gradient(135deg, #00DEC4, #00479B)" }}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default InvestorSection;
