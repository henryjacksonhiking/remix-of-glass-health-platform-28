import { Helmet } from "react-helmet-async";
import PageWrapper from "@/components/layout/PageWrapper";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSectionNew from "@/components/ProblemSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SocialProofBar from "@/components/sections/SocialProofBar";
import BornaCareSection from "@/components/BornaCareSection";
import ProductStory from "@/components/sections/ProductStory";
import ROISection from "@/components/sections/ROISection";
import ProductGrid from "@/components/sections/ProductGrid";
import OutcomesSection from "@/components/OutcomesSection";
import ValueProps from "@/components/sections/ValueProps";
import Testimonials from "@/components/sections/Testimonials";
import SecurityBanner from "@/components/sections/SecurityBanner";
import DifferentiationSection from "@/components/sections/DifferentiationSection";
import EmotionalSection from "@/components/EmotionalSection";
import InvestorSection from "@/components/InvestorSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Borna.ai — AI-Powered Healthcare Operations Platform</title>
        <meta name="description" content="Borna.ai is an AI healthcare platform and clinic management software that unifies patient engagement, healthcare workflow automation, and unified communications in one modular ecosystem." />
      </Helmet>
      <HeroSection />
      <ProblemSectionNew />
      <ProblemSection />
      <SocialProofBar />
      <BornaCareSection />
      <ProductStory />
      <ROISection />
      <ProductGrid />
      <OutcomesSection />
      <ValueProps />
      <Testimonials />
      <SecurityBanner />
      <DifferentiationSection />
      <EmotionalSection />
      <InvestorSection />
      <CTASection />
    </PageWrapper>
  );
};

export default Index;
