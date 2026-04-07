import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is patient engagement software?",
    a: "Software that helps practices communicate with patients and improve retention.",
  },
  {
    q: "What is a healthcare CRM?",
    a: "A system that manages patient relationships and tracks interactions.",
  },
  {
    q: "How does Borna AI help healthcare practices?",
    a: "By unifying communication, CRM, analytics, and automation into one platform.",
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="glass-panel overflow-hidden transition-all"
      style={{ borderLeft: open ? "3px solid #00DEC4" : "3px solid transparent" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <h3 className="text-sm md:text-base font-medium text-foreground pr-4">{q}</h3>
        <ChevronDown
          className="w-4 h-4 shrink-0 transition-transform duration-300"
          style={{ color: "rgba(255,255,255,0.4)", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-[36px] font-medium text-foreground text-center mb-14"
        style={{ letterSpacing: "-0.5px" }}
      >
        Frequently asked questions
      </motion.h2>

      <div className="max-w-2xl mx-auto space-y-3">
        {faqs.map((faq) => (
          <FAQItem key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
