import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import PageWrapper from "@/components/layout/PageWrapper";

const sections = [
  {
    title: "Acceptance of terms",
    content: "By accessing or using Borna.ai services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not access or use our services. These terms apply to all users of the platform, including clinic administrators, staff members, and patients who interact with the system.",
  },
  {
    title: "Use of service",
    content: "Borna.ai provides a healthcare operations platform including patient portal software, appointment scheduling, digital intake forms, payment processing, and related services. You agree to use our services only for lawful purposes and in accordance with applicable healthcare regulations, including HIPAA where applicable. You may not use the platform to store, transmit, or process any content that is unlawful, harmful, or violates the rights of others.",
  },
  {
    title: "Account responsibilities",
    content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate, current, and complete information during registration and keep your account information updated. You agree to notify us immediately of any unauthorised access to or use of your account. Borna.ai is not liable for any loss or damage arising from your failure to comply with these security obligations.",
  },
  {
    title: "Intellectual property",
    content: "The Borna.ai platform, including its software, design, content, and trademarks, is owned by Borna.ai and protected by intellectual property laws. You retain full ownership of all data you upload, create, or process through our platform. We do not claim any ownership rights over your content. You grant us a limited licence to use your data solely to provide and improve our services as described in our Privacy Policy.",
  },
  {
    title: "Limitation of liability",
    content: "To the maximum extent permitted by applicable law, Borna.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our services, including but not limited to loss of revenue, data, or business opportunities. Our total liability for any claim arising from these terms shall not exceed the amount you paid to us in the twelve months preceding the claim.",
  },
  {
    title: "Termination",
    content: "Either party may terminate this agreement with 30 days' written notice. Upon termination, we will provide a reasonable period (minimum 30 days) for you to export your data. After the export period, your data will be securely deleted from our systems within 90 days, except where retention is required by law or regulation. We may immediately suspend or terminate your account if you violate these terms.",
  },
  {
    title: "Governing law",
    content: "These terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or your use of our services shall be resolved through good-faith negotiation. If a resolution cannot be reached, disputes shall be submitted to binding arbitration in accordance with the rules of the applicable arbitration authority.",
  },
  {
    title: "Contact",
    content: "For questions about these Terms of Service, please contact us at legal@borna.ai.",
  },
];

const TermsPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Terms of Service — Borna.ai</title>
      <meta name="description" content="Read the Borna.ai Terms of Service covering acceptable use, account responsibilities, intellectual property, and liability for our healthcare platform." />
    </Helmet>
    <section className="py-12 md:py-20">
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
