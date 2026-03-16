import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Borna.ai cut our front desk call time in half. Patients actually complete their intake forms before arriving now.",
    name: "Dr. Sarah Mitchell",
    role: "Practice Owner",
    clinic: "Summit Dental Group",
    outcome: "50% less admin time",
  },
  {
    quote: "We manage three locations and finally have a single view of every patient interaction. The communication tools alone justify the switch.",
    name: "James Rivera",
    role: "Operations Manager",
    clinic: "Metro Health Partners",
    outcome: "3 locations unified",
  },
  {
    quote: "The AI summaries after every call are a game-changer. Our team actually reads them because they are concise and actionable.",
    name: "Dr. Priya Patel",
    role: "Clinical Director",
    clinic: "Pacific Dental Care",
    outcome: "98% staff adoption",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-headline text-foreground text-center mb-16">
          Clinics running smarter with Borna.ai
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 flex flex-col"
            >
              <p className="text-sm text-foreground leading-relaxed mb-6 flex-1">"{t.quote}"</p>
              <div>
                <div className="text-sm font-medium text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}, {t.clinic}</div>
                <span className="inline-block mt-3 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {t.outcome}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
