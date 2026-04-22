import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ProductsOverviewPage from "./pages/ProductsOverviewPage.tsx";
import BornaCarePage from "./pages/BornaCarePage.tsx";
import PatientAppPage from "./pages/PatientAppPage.tsx";
import BornaConnectPage from "./pages/BornaConnectPage.tsx";
import BornaEngagePage from "./pages/BornaEngagePage.tsx";
import BornaInsightPage from "./pages/BornaInsightPage.tsx";
import BornaCorePage from "./pages/BornaCorePage.tsx";
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
import IntegrationsPage from "./pages/IntegrationsPage.tsx";
import SecurityCompliancePage from "./pages/SecurityCompliancePage.tsx";
import CommunicationLayerPage from "./pages/CommunicationLayerPage.tsx";
import CRMLifecyclePage from "./pages/CRMLifecyclePage.tsx";
import DataIntegrationPage from "./pages/DataIntegrationPage.tsx";
import AIIntelligencePage from "./pages/AIIntelligencePage.tsx";
import DualExperiencePage from "./pages/DualExperiencePage.tsx";
import PatientAcquisitionPage from "./pages/PatientAcquisitionPage.tsx";
import PatientRetentionPage from "./pages/PatientRetentionPage.tsx";
import PracticeAutomationPage from "./pages/PracticeAutomationPage.tsx";
import RevenueOptimizationPage from "./pages/RevenueOptimizationPage.tsx";
import MultiLocationPage from "./pages/MultiLocationPage.tsx";
import DentalPracticesPage from "./pages/DentalPracticesPage.tsx";
import ChiropracticPage from "./pages/ChiropracticPage.tsx";
import MedicalPracticesPage from "./pages/MedicalPracticesPage.tsx";
import DsoMsoPage from "./pages/DsoMsoPage.tsx";
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
          <Route path="/products/care" element={<BornaCarePage />} />
          <Route path="/products/care/patient-app" element={<PatientAppPage />} />
          <Route path="/products/connect" element={<BornaConnectPage />} />
          <Route path="/products/engage" element={<BornaEngagePage />} />
          <Route path="/products/insight" element={<BornaInsightPage />} />
          <Route path="/products/core" element={<BornaCorePage />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/platform/architecture" element={<ArchitecturePage />} />
          <Route path="/platform/integrations" element={<IntegrationsPage />} />
          <Route path="/platform/security" element={<SecurityCompliancePage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/ecosystem/communication" element={<CommunicationLayerPage />} />
          <Route path="/ecosystem/crm-lifecycle" element={<CRMLifecyclePage />} />
          <Route path="/ecosystem/data-integration" element={<DataIntegrationPage />} />
          <Route path="/ecosystem/ai-intelligence" element={<AIIntelligencePage />} />
          <Route path="/ecosystem/dual-experience" element={<DualExperiencePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/patient-acquisition" element={<PatientAcquisitionPage />} />
          <Route path="/solutions/patient-retention" element={<PatientRetentionPage />} />
          <Route path="/solutions/practice-automation" element={<PracticeAutomationPage />} />
          <Route path="/solutions/revenue-optimization" element={<RevenueOptimizationPage />} />
          <Route path="/solutions/multi-location" element={<MultiLocationPage />} />
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
          <Route path="/industries/dental" element={<DentalPracticesPage />} />
          <Route path="/industries/chiropractic" element={<ChiropracticPage />} />
          <Route path="/industries/medical" element={<MedicalPracticesPage />} />
          <Route path="/industries/dso-mso" element={<DsoMsoPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
