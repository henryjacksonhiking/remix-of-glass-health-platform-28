import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import PageWrapper from "@/components/layout/PageWrapper";

const sections = [
  {
    title: "Information we collect",
    content: "We collect information you provide directly to us, including your name, email address, clinic name, contact details, and any data you enter into the Borna.ai platform. We also automatically collect certain technical information when you use our services, such as your IP address, browser type, device information, and usage patterns within the application. When patients interact with your clinic through Borna Care, we process appointment data, intake form submissions, and payment information on your behalf.",
  },
  {
    title: "How we use your information",
    content: "We use your information to provide, maintain, and improve our services, including processing appointments, managing patient intake forms, and facilitating payments. We also use your data to communicate with you about your account, respond to support requests, send service updates, and ensure the security and reliability of our platform. We do not sell, rent, or share your personal information with third parties for their marketing purposes.",
  },
  {
    title: "Data storage and security",
    content: "All data processed through Borna.ai is stored using enterprise-grade cloud infrastructure. We employ AES-256 encryption for data at rest and TLS 1.2+ encryption for data in transit. Our infrastructure includes automated backups, redundant storage, and disaster recovery procedures. We conduct regular security assessments, vulnerability scanning, and penetration testing to identify and address potential risks.",
  },
  {
    title: "HIPAA compliance",
    content: "Borna.ai maintains a HIPAA-ready architecture designed to protect patient health information (PHI). We implement administrative, physical, and technical safeguards as required under the HIPAA Security Rule. For covered entities, we enter into Business Associate Agreements (BAAs) and maintain comprehensive policies covering access controls, audit logging, breach notification, and incident response. All team members with access to PHI receive regular HIPAA training.",
  },
  {
    title: "Third-party services",
    content: "We use carefully selected third-party service providers to support our platform operations, including cloud hosting, payment processing, email delivery, and analytics. All third-party providers are evaluated for their security practices and, where applicable, are required to sign Business Associate Agreements. We only share the minimum information necessary for these providers to perform their services on our behalf.",
  },
  {
    title: "Your rights",
    content: "You have the right to access, correct, update, or delete your personal information at any time. You may request a copy of the data we hold about you, ask us to restrict certain processing activities, or request data portability. If you are a clinic administrator, you can manage patient data directly through the Borna Care admin dashboard. For all privacy-related requests, contact us at privacy@borna.ai and we will respond within 30 days.",
  },
  {
    title: "Contact us",
    content: "If you have questions about this privacy policy, our data practices, or wish to exercise your privacy rights, please contact us at privacy@borna.ai. For HIPAA-related inquiries, you may also reach our compliance team at compliance@borna.ai.",
  },
];

const PrivacyPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Privacy Policy — Borna.ai</title>
      <meta name="description" content="Learn how Borna.ai collects, uses, and protects your data. Read our privacy policy covering HIPAA compliance, data security, and your rights." />
    </Helmet>
    <section className="py-12 md:py-12">
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
