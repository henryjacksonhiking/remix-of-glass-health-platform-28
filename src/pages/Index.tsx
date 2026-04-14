import { Helmet } from "react-helmet-async";
import PageWrapper from "@/components/layout/PageWrapper";
import HeroSection from "@/components/homepage/HeroSection";
import DefinitionSection from "@/components/homepage/DefinitionSection";
import ProblemSection from "@/components/homepage/ProblemSection";
import SolutionSection from "@/components/homepage/SolutionSection";
import BornaCareSection from "@/components/homepage/BornaCareSection";
import CapabilitiesSection from "@/components/homepage/CapabilitiesSection";
import EcosystemSection from "@/components/homepage/EcosystemSection";
import HowItWorksSection from "@/components/homepage/HowItWorksSection";
import ComparisonSection from "@/components/homepage/ComparisonSection";
import TakeawaysSection from "@/components/homepage/TakeawaysSection";
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
              "@type": "WebPage",
              "name": "AI Healthcare Platform | Borna AI",
              "description": "Unified healthcare platform for patient engagement, CRM, and automation."
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is an AI healthcare platform?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An AI healthcare platform integrates communication, CRM, analytics, and automation into one system."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is patient engagement software?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Patient engagement software helps healthcare practices communicate with patients and improve retention."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Borna AI work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Borna AI captures interactions, centralizes data, analyzes it using AI, and automates workflows."
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
      <BornaCareSection />
      <CapabilitiesSection />
      <EcosystemSection />
      <HowItWorksSection />
      <ComparisonSection />
      <TakeawaysSection />
      <FAQSection />
      <FinalCTASection />
    </PageWrapper>
  );
};

export default Index;
