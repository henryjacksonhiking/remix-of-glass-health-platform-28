import { Helmet } from "react-helmet-async";
import PageWrapper from "@/components/layout/PageWrapper";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofBar from "@/components/sections/SocialProofBar";
import ProductDemo from "@/components/sections/ProductDemo";
import ROISection from "@/components/sections/ROISection";
import ProductGrid from "@/components/sections/ProductGrid";
import ValueProps from "@/components/sections/ValueProps";
import Testimonials from "@/components/sections/Testimonials";
import DifferentiationSection from "@/components/sections/DifferentiationSection";
import CTASection from "@/components/sections/CTASection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Borna.ai — AI-Powered Healthcare Operations Platform</title>
        <meta name="description" content="Borna.ai is an AI healthcare platform and clinic management software that unifies patient engagement, healthcare workflow automation, and unified communications in one modular ecosystem." />
      </Helmet>
      <HeroSection />
      <DifferentiationSection />
      <ProductGrid />
      <SocialProofBar />
      <BenefitsSection />
      <ROISection />
      <Testimonials />
      <ValueProps />
      <ComparisonSection />
      <FAQSection />
      <ProductDemo />
      <CTASection />
    </PageWrapper>
  );
};

export default Index;
