import { motion } from "framer-motion";
import { Clock, TrendingUp, Heart } from "lucide-react";

const cards = [
  { icon: Clock, label: "Save time", body: "Automate recurring tasks and free your staff from manual follow-up." },
  { icon: TrendingUp, label: "Grow revenue", body: "Stop losing leads. Every prospective patient is tracked and followed up." },
  { icon: Heart, label: "Focus on care", body: "Let Borna handle operations so your team stays focused on patients." },
];

const EmotionalSection = () => (
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
          Built to give you back time and control
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 mx-auto"
          style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", maxWidth: 680, lineHeight: 1.7 }}
        >
          Borna removes the chaos of managing multiple systems and manual processes — so your team can focus on what truly matters: delivering quality care.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "0.5px solid rgba(255,255,255,0.12)",
                borderRadius: 16,
                padding: 28,
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(0,222,196,0.12)" }}
              >
                <Icon className="w-5 h-5" style={{ color: "#00DEC4" }} />
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ color: "rgba(255,255,255,0.95)" }}>
                {card.label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                {card.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default EmotionalSection;
