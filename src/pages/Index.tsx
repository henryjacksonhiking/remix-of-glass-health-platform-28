import PageWrapper from "@/components/layout/PageWrapper";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofBar from "@/components/sections/SocialProofBar";
import ProductStory from "@/components/sections/ProductStory";
import ProductGrid from "@/components/sections/ProductGrid";
import ValueProps from "@/components/sections/ValueProps";
import Testimonials from "@/components/sections/Testimonials";
import SecurityBanner from "@/components/sections/SecurityBanner";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <SocialProofBar />
      <ProductStory />
      <ProductGrid />
      <ValueProps />
      <Testimonials />
      <SecurityBanner />
      <CTASection />
    </PageWrapper>
  );
};

export default Index;
