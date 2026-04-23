import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  q: string;
  a: string;
}

interface StandardFAQProps {
  items: FAQItem[];
  eyebrow?: string;
  title?: string;
  className?: string;
}

/**
 * StandardFAQ — unified FAQ section matching the Homepage design.
 * Use this on every page that renders an FAQ to keep layout, glassmorphism,
 * accordion behavior, spacing, and typography consistent across the site.
 */
const StandardFAQ = ({
  items,
  eyebrow = "What people ask",
  title = "FAQ",
  className = "",
}: StandardFAQProps) => (
  <section className={`py-10 md:py-16 ${className}`}>
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12 md:mb-16">
        {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
        {title && <h2 className="section-title mt-4">{title}</h2>}
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {items.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <AccordionItem
                value={`faq-${i}`}
                className="border-none"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "0.5px solid rgba(255,255,255,0.08)",
                  borderRadius: "14px",
                  overflow: "hidden",
                }}
              >
                <AccordionTrigger
                  className="px-5 md:px-6 py-4 md:py-5 text-left text-[14px] md:text-[15px] font-medium hover:no-underline"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="px-5 md:px-6 pb-4 md:pb-5 text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default StandardFAQ;
