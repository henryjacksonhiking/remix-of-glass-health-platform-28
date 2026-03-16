import { motion } from "framer-motion";
import { Phone, Bot, User } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Unified communications",
    description: "Calls, SMS, chat, and email in one place — every conversation linked to a patient profile.",
  },
  {
    icon: Bot,
    title: "AI automation",
    description: "Smart routing, call summaries, and predictive scheduling that reduce manual work by hours.",
  },
  {
    icon: User,
    title: "Patient-centric design",
    description: "A single patient profile across multiple clinics, with full history and preferences.",
  },
];

const ValueProps = () => {
  return (
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-16">
          Built for the operational realities of real clinics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
