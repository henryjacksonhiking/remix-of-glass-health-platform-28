import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";

const sections = [
  {
    title: "Information we collect",
    content: "We collect information you provide directly, such as your name, email address, clinic details, and any data entered through our platform. We also collect usage data automatically, including device information, IP address, and interaction patterns within the application.",
  },
  {
    title: "How we use your information",
    content: "We use collected information to provide and improve our services, communicate with you about your account, process transactions, ensure platform security, and comply with legal obligations. We do not sell your personal information to third parties.",
  },
  {
    title: "Data storage and security",
    content: "All data is stored using enterprise-grade cloud infrastructure with AES-256 encryption at rest and TLS 1.2+ in transit. We implement role-based access controls, regular security audits, and comprehensive monitoring to protect your data.",
  },
  {
    title: "Patient data handling",
    content: "Patient data processed through Borna.ai is handled in accordance with HIPAA requirements. We act as a Business Associate and maintain appropriate safeguards, including encryption, access controls, audit logging, and incident response procedures.",
  },
  {
    title: "Data retention",
    content: "We retain your data for as long as your account is active or as needed to provide services. Upon account termination, data is securely deleted within 90 days unless retention is required by law.",
  },
  {
    title: "Your rights",
    content: "You have the right to access, correct, or delete your personal information. You may also request data portability or object to certain processing activities. Contact us at privacy@borna.ai to exercise these rights.",
  },
  {
    title: "Changes to this policy",
    content: "We may update this privacy policy from time to time. We will notify you of any material changes by posting the updated policy on our website and, where appropriate, via email.",
  },
  {
    title: "Contact",
    content: "For questions about this privacy policy or our data practices, contact us at privacy@borna.ai.",
  },
];

const PrivacyPage = () => (
  <PageWrapper>
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-headline text-foreground mb-4"
        >
          Privacy policy
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

export default PrivacyPage;
