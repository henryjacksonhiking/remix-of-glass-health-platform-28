import { motion } from "framer-motion";
import { Layers, Zap, TrendingUp, Expand } from "lucide-react";

const items = [
  { Icon: Layers, text: "Borna is a unified AI healthcare platform" },
  { Icon: Zap, text: "It replaces fragmented systems" },
  { Icon: TrendingUp, text: "It improves patient engagement and efficiency" },
  { Icon: Expand, text: "It scales with your practice" },
];

const TakeawaysSection = () => (
  <section id="takeaways" className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-[36px] font-medium text-foreground text-center mb-14"
        style={{ letterSpacing: "-0.5px" }}
      >
        Key takeaways
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {items.map((item, i) => {
          const Icon = item.Icon;
          return (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="text-center"
            >
              <Icon className="w-7 h-7 mx-auto mb-3" style={{ color: "#00DEC4" }} />
              <p className="text-sm text-foreground leading-snug">{item.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default TakeawaysSection;
