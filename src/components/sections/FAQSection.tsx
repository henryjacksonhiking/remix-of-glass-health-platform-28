import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Borna AI and how does it work for dental and healthcare practices?",
    a: "Borna AI is a modular, AI-powered healthcare SaaS platform that acts as an operating system for clinics. Instead of managing separate tools for patient communication, scheduling, billing, and CRM, Borna unifies all of these into one connected platform. Clinics start with Borna Care — a white-labeled patient portal — and progressively adopt Borna Connect for communications, Borna Engage for CRM, Borna Insight for analytics, and Borna Core as the AI automation engine. Borna sits on top of your existing PMS or EHR system (such as Dentrix, Open Dental, or Jane App), so there is no data migration and no disruption to your clinical workflows.",
  },
  {
    q: "How does Borna replace tools like NexHealth, Weave, or Podium — and at what cost?",
    a: "Clinics currently paying for NexHealth (~$400/month), Weave (~$600/month), and PatientPop (~$400/month) are spending $1,000–$1,500 monthly for three disconnected systems with no shared data layer. Borna replaces all three with a single platform, starting at $199/month per location for the Starter tier and $399–$699/month for Growth and Pro tiers. Beyond cost savings, Borna delivers features none of those tools offer individually — including a fully white-labeled, clinic-branded patient portal, AI call summaries that auto-log to patient records, and a unified inbox for calls, SMS, and email. The result is fewer vendor relationships, one data model, and a complete view of every patient interaction in one place.",
  },
  {
    q: "Is Borna HIPAA compliant, and how does it protect patient data?",
    a: "Borna is built with HIPAA compliance as a foundational requirement, not an afterthought. All patient data is encrypted at rest using AES-256 and in transit using TLS 1.3. Business Associate Agreements (BAA) are available for all US clinic accounts, and Canadian clinics are supported under PIPEDA. Role-based access controls ensure that staff only see the patient information relevant to their role. Borna does not sell or share patient data with third parties, and all data handling policies are documented and available upon request. SOC 2 certification is currently in progress.",
  },
  {
    q: "Will Borna work with my existing practice management software (PMS) or EHR system?",
    a: "Yes. Borna is designed to sit on top of your existing PMS or EHR — it does not replace it. Current integration support includes Open Dental, Jane App, and Dentrix, with Cliniko, Eaglesoft, and Curve Dental on the roadmap. Borna reads appointment and patient data from your PMS to power features like CRM-aware caller ID, automated reminders, and recall campaigns — without you having to re-enter anything. For practices without an integrated PMS, Borna supports manual appointment entry and CSV patient import as a fallback. New integrations are added based on client demand.",
  },
  {
    q: "Do I need to sign a long-term contract to use Borna?",
    a: "No—Borna is offered on a flexible, month-to-month basis with no long-term commitment. You can start, scale, or cancel at any time. That said, many practices experience the greatest value over time, as Borna continuously aggregates and analyzes your operational, communication, and patient data to deliver deeper, more meaningful insights and performance improvements.",
  },
];

const FAQSection = () => (
  <section className="py-10 md:py-16">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <span className="section-eyebrow">
          What people ask
        </span>
        <h2 className="section-title mt-4">
          FAQ
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
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
                  background: 'rgba(255,255,255,0.04)',
                  border: '0.5px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                }}
              >
                <AccordionTrigger
                  className="px-6 py-5 text-left text-[15px] font-medium hover:no-underline"
                  style={{ color: 'rgba(255,255,255,0.9)' }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="px-6 pb-5 text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
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

export default FAQSection;
