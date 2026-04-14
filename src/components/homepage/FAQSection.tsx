import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  { q: "What is Borna AI and how does it work for dental and healthcare practices?", a: "Borna AI is a modular, AI-powered healthcare SaaS platform that acts as an operating system for clinics. Instead of managing separate tools for patient communication, scheduling, billing, and CRM, Borna unifies all of these into one connected platform. Clinics start with Borna Care — a white-labeled patient portal — and progressively adopt Borna Connect for communications, Borna Engage for CRM, Borna Insight for analytics, and Borna Core as the AI automation engine. Borna sits on top of your existing PMS or EHR system (such as Dentrix, Open Dental, or Jane App), so there is no data migration and no disruption to your clinical workflows." },
  { q: "How does Borna replace tools like NexHealth, Weave, or Podium — and at what cost?", a: "Clinics currently paying for NexHealth (~$400/month), Weave (~$600/month), and PatientPop (~$400/month) are spending $1,000–$1,500 monthly for three disconnected systems with no shared data layer. Borna replaces all three with a single platform, starting at $199/month per location for the Starter tier and $399–$699/month for Growth and Pro tiers. Beyond cost savings, Borna delivers features none of those tools offer individually — including a fully white-labeled, clinic-branded patient portal, AI call summaries that auto-log to patient records, and a unified inbox for calls, SMS, and email. The result is fewer vendor relationships, one data model, and a complete view of every patient interaction in one place." },
  { q: "Is Borna HIPAA compliant, and how does it protect patient data?", a: "Borna is built with HIPAA compliance as a foundational requirement, not an afterthought. All patient data is encrypted at rest using AES-256 and in transit using TLS 1.3. Business Associate Agreements (BAA) are available for all US clinic accounts, and Canadian clinics are supported under PIPEDA. Role-based access controls ensure that staff only see the patient information relevant to their role. Borna does not sell or share patient data with third parties, and all data handling policies are documented and available upon request. SOC 2 certification is currently in progress." },
  { q: "Will Borna work with my existing practice management software (PMS) or EHR system?", a: "Yes. Borna is designed to sit on top of your existing PMS or EHR — it does not replace it. Current integration support includes Open Dental, Jane App, and Dentrix, with Cliniko, Eaglesoft, and Curve Dental on the roadmap. Borna reads appointment and patient data from your PMS to power features like CRM-aware caller ID, automated reminders, and recall campaigns — without you having to re-enter anything. For practices without an integrated PMS, Borna supports manual appointment entry and CSV patient import as a fallback. New integrations are added based on client demand." },
  { q: "What measurable results can a dental or medical clinic expect after adopting Borna?", a: "Based on industry research and early clinic data: practices using automated SMS appointment reminders see a 38–40% reduction in no-show rates. Clinics that implement missed-call auto-reply reduce their annual revenue loss from missed calls — which averages $100,000–$150,000 per practice — by recovering 30–50% of those opportunities. Recall campaigns through Borna Engage achieve 15–25% patient reactivation rates per campaign, adding thousands in recovered monthly revenue with zero additional staff effort. Onboarding to Borna Care takes under 30 minutes using the URL-based auto-fill system. Most clinics see measurable efficiency gains in the first 2 weeks." },
];

const FAQSection = () => {
  const ref = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28" style={{ background: "#07090F" }}>
      <div className="container mx-auto px-5 md:px-6" ref={ref}>
        <div className="text-center mb-14">
          <span className="animate-on-scroll section-label block mb-4">FAQ</span>
          <h2 className="animate-on-scroll section-headline mb-4">Frequently asked questions</h2>
          <p className="animate-on-scroll text-base" style={{ color: "#94A3B8" }}>Everything you need to know about Borna and how it works for your practice.</p>
        </div>
        <div className="animate-on-scroll glass-panel max-w-3xl mx-auto overflow-hidden">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", background: isOpen ? "rgba(0,201,177,0.03)" : "transparent", transition: "background 300ms ease" }}>
                <button className="w-full flex items-center justify-between p-5 md:px-6 text-left" onClick={() => setOpenIndex(isOpen ? null : i)}>
                  <span className="text-base font-semibold pr-4" style={{ color: "#F8FAFC" }}>{faq.q}</span>
                  <ChevronDown className="w-[18px] h-[18px] shrink-0 transition-transform duration-300" style={{ color: "#00C9B1", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? 600 : 0, opacity: isOpen ? 1 : 0 }}>
                  <p className="text-[15px] leading-[1.8] px-5 md:px-6 pb-5" style={{ color: "#94A3B8" }}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
