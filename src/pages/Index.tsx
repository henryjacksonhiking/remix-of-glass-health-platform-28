import { Helmet } from "react-helmet-async";
import PageWrapper from "@/components/layout/PageWrapper";
import HeroSection from "@/components/homepage/HeroSection";
import DefinitionSection from "@/components/homepage/DefinitionSection";
import ProblemSection from "@/components/homepage/ProblemSection";
import SolutionSection from "@/components/homepage/SolutionSection";
import CapabilitiesSection from "@/components/homepage/CapabilitiesSection";
import ComparisonSection from "@/components/homepage/ComparisonSection";
import GrowthSection from "@/components/homepage/GrowthSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import OperationalSection from "@/components/homepage/OperationalSection";
import BornaCareSection from "@/components/homepage/BornaCareSection";
import FAQSection from "@/components/homepage/FAQSection";
import FinalCTASection from "@/components/homepage/FinalCTASection";

const Index = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>AI Healthcare Platform for Patient Engagement, CRM & Automation | Borna AI</title>
        <meta name="description" content="Borna AI is a unified healthcare platform for patient engagement, CRM, communication, and automation. Start with Borna Care and scale your practice with AI." />
        <meta property="og:title" content="AI Healthcare Platform for Patient Engagement, CRM & Automation | Borna AI" />
        <meta property="og:description" content="Borna AI is a unified healthcare platform for patient engagement, CRM, communication, and automation. Start with Borna Care and scale your practice with AI." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Healthcare Platform for Patient Engagement, CRM & Automation | Borna AI" />
        <meta name="twitter:description" content="Borna AI is a unified healthcare platform for patient engagement, CRM, communication, and automation. Start with Borna Care and scale your practice with AI." />
        <script type="application/ld+json">{`
          [
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Borna AI",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "Web, iOS, Android",
              "description": "AI healthcare platform for patient engagement, CRM, communication, analytics, and automation."
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Borna AI",
              "url": "https://borna.ai"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Borna AI and how does it work for dental and healthcare practices?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Borna AI is a modular, AI-powered healthcare SaaS platform that acts as an operating system for clinics."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Borna HIPAA compliant?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Borna is built with HIPAA compliance as a foundational requirement. AES-256 encryption, TLS 1.3, BAA available."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What measurable results can a clinic expect?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "38% reduction in no-shows, $150K average revenue recovered, 3x faster onboarding, 90% call answer rate."
                  }
                }
              ]
            }
          ]
        `}</script>
      </Helmet>
      <HeroSection />
      <DefinitionSection />
      <ProblemSection />
      <SolutionSection />
      <CapabilitiesSection />
      <ComparisonSection />
      <GrowthSection />
      <TestimonialsSection />
      <OperationalSection />
      <BornaCareSection />
      <FAQSection />
      <FinalCTASection />
    </PageWrapper>
  );
};

export default Index;
