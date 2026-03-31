import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  { num: 1, title: "Patient books online", desc: "Any time, any device" },
  { num: 2, title: "Completes digital intake forms", desc: "Before arriving at the clinic" },
  { num: 3, title: "Receives automated reminders", desc: "SMS and email confirmations" },
  { num: 4, title: "Attends their visit", desc: "No paperwork, no waiting" },
  { num: 5, title: "Follow-up & payment", desc: "Received digitally after the visit" },
];

const CarePatientJourney = () => {
  return (
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-16">
          The patient experience, reimagined
        </h2>

        <div className="flex flex-col md:flex-row items-start justify-center gap-4 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-1 flex flex-col md:flex-row items-start gap-4"
            >
              <div className="flex flex-col items-center text-center flex-1">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3 text-sm font-semibold"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.6))",
                    color: "hsl(var(--primary-foreground))",
                  }}
                >
                  {s.num}
                </div>
                <h3 className="text-sm font-medium text-foreground mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>

              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-4 h-4 text-muted-foreground/40 shrink-0 mt-5" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarePatientJourney;
