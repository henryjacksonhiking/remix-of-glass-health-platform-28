import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ProductsOverviewPage from "./pages/ProductsOverviewPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import PlatformPage from "./pages/PlatformPage.tsx";
import EcosystemPage from "./pages/EcosystemPage.tsx";
import SolutionsPage from "./pages/SolutionsPage.tsx";
import PricingPage from "./pages/PricingPage.tsx";
import SecurityPage from "./pages/SecurityPage.tsx";
import ResourcesPage from "./pages/ResourcesPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import DemoPage from "./pages/DemoPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import BlogPostPage from "./pages/BlogPostPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import PrivacyPage from "./pages/PrivacyPage.tsx";
import TermsPage from "./pages/TermsPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import CaseStudyPage from "./pages/CaseStudyPage.tsx";
import RoadmapPage from "./pages/RoadmapPage.tsx";
import IndustriesPage from "./pages/IndustriesPage.tsx";
import InvestorsPage from "./pages/InvestorsPage.tsx";
import ArchitecturePage from "./pages/ArchitecturePage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductsOverviewPage />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/platform/architecture" element={<ArchitecturePage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/case-studies/:slug" element={<CaseStudyPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
