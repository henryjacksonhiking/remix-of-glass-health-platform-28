import { Helmet } from "react-helmet-async";
import PageWrapper from "@/components/layout/PageWrapper";
import HeroSection from "@/components/sections/HeroSection";
import HomeProblemSection from "@/components/ProblemSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SocialProofBar from "@/components/sections/SocialProofBar";
import ProductDemo from "@/components/sections/ProductDemo";
import ProductStory from "@/components/sections/ProductStory";
import BornaCareSection from "@/components/BornaCareSection";
import ROISection from "@/components/sections/ROISection";
import ProductGrid from "@/components/sections/ProductGrid";
import OutcomesSection from "@/components/OutcomesSection";
import EmotionalSection from "@/components/EmotionalSection";
import ValueProps from "@/components/sections/ValueProps";
import Testimonials from "@/components/sections/Testimonials";
import SecurityBanner from "@/components/sections/SecurityBanner";
import DifferentiationSection from "@/components/sections/DifferentiationSection";
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
      <HomeProblemSection />
      <ProblemSection />
      <SocialProofBar />
      <ProductDemo />
      <ProductStory />
      <BornaCareSection />
      <ROISection />
      <ProductGrid />
      <OutcomesSection />
      <EmotionalSection />
      <ValueProps />
      <Testimonials />
      <SecurityBanner />
      <DifferentiationSection />
      <InvestorSection />
      <CTASection />
    </PageWrapper>
  );
};

export default Index;
