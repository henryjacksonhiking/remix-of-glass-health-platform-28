import { motion } from "framer-motion";
import { ClipboardMinus, UserCheck, BellRing, Banknote } from "lucide-react";

const benefits = [
  { icon: ClipboardMinus, title: "Reduce administrative workload", desc: "Eliminate manual scheduling and paper forms" },
  { icon: UserCheck, title: "Improve patient experience", desc: "Self-service booking and digital communications" },
  { icon: BellRing, title: "Increase appointment efficiency", desc: "Reduce no-shows with automated reminders" },
  { icon: Banknote, title: "Recover more revenue", desc: "Frictionless online payment requests" },
];

const CareBenefitsSection = () => {
  return (
    <section className="py-12 md:py-12 md:py-20 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-16">
          What Borna Care delivers for your clinic
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-medium text-foreground">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareBenefitsSection;
