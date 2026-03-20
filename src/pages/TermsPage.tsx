import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";

const sections = [
  {
    title: "Acceptance of terms",
    content: "By accessing or using Borna.ai services, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services.",
  },
  {
    title: "Description of services",
    content: "Borna.ai provides a healthcare operations platform including patient portal software (Borna Care), communication tools, analytics, and related services. Features and availability may vary by plan.",
  },
  {
    title: "User accounts",
    content: "You are responsible for maintaining the security of your account credentials and for all activities that occur under your account. You must provide accurate and complete information during registration.",
  },
  {
    title: "Acceptable use",
    content: "You agree to use our services only for lawful purposes and in accordance with applicable healthcare regulations. You may not use the platform to store or transmit harmful, fraudulent, or unauthorized content.",
  },
  {
    title: "Data ownership",
    content: "You retain ownership of all data you upload or create through our platform. We do not claim ownership of your content. We use your data solely to provide and improve our services as described in our Privacy Policy.",
  },
  {
    title: "HIPAA compliance",
    content: "Borna.ai maintains HIPAA-ready architecture and will enter into a Business Associate Agreement (BAA) with covered entities as required. Both parties agree to uphold their respective obligations under HIPAA.",
  },
  {
    title: "Service availability",
    content: "We strive to maintain high availability but do not guarantee uninterrupted access. We may perform maintenance or updates that temporarily affect service availability. We will provide reasonable notice when possible.",
  },
  {
    title: "Limitation of liability",
    content: "To the maximum extent permitted by law, Borna.ai shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.",
  },
  {
    title: "Termination",
    content: "Either party may terminate the agreement with 30 days written notice. Upon termination, we will provide a reasonable period for data export before securely deleting your data.",
  },
  {
    title: "Changes to terms",
    content: "We may update these terms from time to time. Material changes will be communicated via email or in-app notification at least 30 days before taking effect.",
  },
  {
    title: "Contact",
    content: "For questions about these terms, contact us at legal@borna.ai.",
  },
];

const TermsPage = () => (
  <PageWrapper>
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-headline text-foreground mb-4"
        >
          Terms of service
        </motion.h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: March 2026</p>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
            >
              <h2 className="text-lg font-semibold text-foreground mb-3">{section.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default TermsPage;
