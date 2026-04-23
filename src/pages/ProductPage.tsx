import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { FeatureSteps } from "@/components/ui/feature-section";
import { products } from "@/lib/products";
import PageWrapper from "@/components/layout/PageWrapper";
import CTASection from "@/components/sections/CTASection";
import CareHero from "@/components/sections/CareHero";
import CareProblemSection from "@/components/sections/CareProblemSection";
import CareSolutionOverview from "@/components/sections/CareSolutionOverview";
import CarePatientJourney from "@/components/sections/CarePatientJourney";
import CareAdminCapabilities from "@/components/sections/CareAdminCapabilities";
import CareBenefitsSection from "@/components/sections/CareBenefitsSection";
import CareCTASection from "@/components/sections/CareCTASection";
import DevelopmentBanner from "@/components/sections/DevelopmentBanner";
import AetherFlowBackground from "@/components/ui/aether-flow-hero";
import careDashboardScreen from "@/assets/care-dashboard-screen.webp";
import careFormsScreen from "@/assets/care-forms-screen.webp";
import careAppointmentScreen from "@/assets/care-appointment-screen.webp";
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = LucideIcons as any;

const howItWorks: Record<string, { step: string; description: string; icon: string }[]> = {
  connect: [
    { step: "All channels, one inbox", description: "Calls, SMS, chat, and email arrive in a single shared inbox.", icon: "Inbox" },
    { step: "AI tags and summarizes", description: "Every interaction is auto-summarized and linked to the patient record.", icon: "Bot" },
    { step: "Team collaborates", description: "Route messages, assign tasks, and follow up — without switching tools.", icon: "Users" },
  ],
};

const careFeatureSteps = [
  {
    step: "Step 1",
    title: "Patient signs up",
    content: "Patients create a profile and connect to your clinic in minutes.",
    image: careDashboardScreen,
  },
  {
    step: "Step 2",
    title: "Book and complete forms",
    content: "Online booking, digital intake, and consent — all before the visit.",
    image: careFormsScreen,
  },
  {
    step: "Step 3",
    title: "Visit and follow up",
    content: "Check-in, treatment, payment, and automated follow-up in one flow.",
    image: careAppointmentScreen,
  },
];

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <PageWrapper>
        <div className="container mx-auto px-4 py-16 md:py-12 text-center">
          <h1 className="section-headline text-foreground">Product not found</h1>
          <Link to="/" className="gradient-btn mt-8 inline-block">Back to home</Link>
        </div>
      </PageWrapper>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);
  const steps = howItWorks[product.slug];
  const showIntegrations = product.slug === "care" || product.slug === "core";

  const isCare = product.slug === "care";

  const metaTags: Record<string, { title: string; description: string }> = {
    care: {
      title: "Borna Care — Patient Portal Software & Online Appointment Scheduling",
      description: "Borna Care is patient portal software that enables online appointment scheduling for clinics, digital intake forms, online payments, and family management in one place.",
    },
    connect: {
      title: "Borna Connect — Healthcare Communication Platform for Clinics",
      description: "Borna Connect is a unified communications platform for clinics combining web calling, SMS, email, telehealth, and AI call summaries in one place.",
    },
    core: {
      title: "Borna Core — Healthcare AI Infrastructure & Medical Workflow Automation",
      description: "Borna Core is the healthcare AI infrastructure powering the entire Borna platform — enabling medical workflow automation, EHR sync, and enterprise-grade security.",
    },
    insight: {
      title: "Borna Insight — Healthcare Analytics Dashboard for Clinics",
      description: "Borna Insight is a healthcare analytics dashboard providing clinic performance analytics, revenue insights, and AI-generated operational summaries.",
    },
    engage: {
      title: "Borna Engage — Healthcare CRM Software & Patient Retention Platform",
      description: "Borna Engage is healthcare CRM software and a patient retention platform that automates follow-ups and manages patient lifecycle.",
    },
  };

  const meta = metaTags[product.slug];

  if (isCare) {
    return (
      <PageWrapper>
        {meta && (
          <Helmet>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>
        )}
        <CareHero />
        <CareProblemSection />
        <CareSolutionOverview />

        {/* Features grid */}
        <section id="features" className="py-12 md:py-12 border-t border-glass-border">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="section-headline text-foreground text-center mb-16">
              Everything Borna Care does for your clinic
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {product.features.map((feat, i) => {
                const IconComp = iconMap[feat.icon] || LucideIcons.Box;
                return (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="group/glowing relative rounded-xl glass-panel p-6"
                  >
                    <GlowingEffect spread={40} glow={false} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative z-10">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${product.accentColor}15` }}>
                        <IconComp className="w-5 h-5" style={{ color: product.accentColor }} />
                      </div>
                      <h3 className="text-base font-medium text-foreground mb-1">{feat.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <CarePatientJourney />
        <CareAdminCapabilities />
        <CareBenefitsSection />

        {/* Integration callout */}
        <section className="py-16 bg-muted/30 border-y border-glass-border">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="section-headline text-foreground mb-4">Works with your existing EHR</h2>
            <p className="body-text mx-auto mb-8">
              Bidirectional sync with major electronic health record systems and payment gateways.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Open Dental", "Dentrix", "Eaglesoft", "Curve Dental"].map((ehr) => (
                <div key={ehr} className="glass-panel px-5 py-2.5 text-sm text-muted-foreground">{ehr}</div>
              ))}
            </div>
            <Link to="/contact" className="ghost-btn text-sm">See all integrations</Link>
          </div>
        </section>

        <CareCTASection />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {meta && (
        <Helmet>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
      )}
      <DevelopmentBanner moduleName={product.name} />
      {/* Hero */}
      <section className="relative overflow-hidden py-12 md:py-12">
        <AetherFlowBackground accentColor={product.accentColor} />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full blur-[120px] animate-glow-pulse" style={{ backgroundColor: `${product.accentColor}15` }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span>Products</span>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-6" style={{ backgroundColor: `${product.accentColor}20`, color: product.accentColor }}>
              {product.name}
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="hero-headline text-foreground max-w-2xl mb-6">
            {product.tagline}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="body-text max-w-xl mb-8">
            {product.description}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
            <Link to="/demo" className="gradient-btn text-base px-8 py-3.5">Book a demo</Link>
            <a href="#features" className="ghost-btn text-base px-8 py-3.5">See features</a>
          </motion.div>
        </div>
      </section>

      {/* Features grid */}
      <section id="features" className="py-12 md:py-12 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-16">
            Everything {product.name} does for your clinic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {product.features.map((feat, i) => {
              const IconComp = iconMap[feat.icon] || LucideIcons.Box;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group/glowing relative rounded-xl glass-panel p-6"
                >
                  <GlowingEffect spread={40} glow={false} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${product.accentColor}15` }}>
                      <IconComp className="w-5 h-5" style={{ color: product.accentColor }} />
                    </div>
                    <h3 className="text-base font-medium text-foreground mb-1">{feat.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      {steps && (
        <section className="py-12 md:py-12 border-t border-glass-border">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="section-headline text-foreground text-center mb-16">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {steps.map((s, i) => {
                const IconComp = iconMap[s.icon] || LucideIcons.Box;
                return (
                  <motion.div
                    key={s.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="glass-panel p-6 text-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-sm font-semibold text-primary">{i + 1}</span>
                    </div>
                    <h3 className="text-base font-medium text-foreground mb-2">{s.step}</h3>
                    <p className="text-sm text-muted-foreground">{s.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Integration callout */}
      {showIntegrations && (
        <section className="py-16 bg-muted/30 border-y border-glass-border">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="section-headline text-foreground mb-4">Works with your existing EHR</h2>
            <p className="body-text mx-auto mb-8">
              Bidirectional sync with major electronic health record systems and payment gateways.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Open Dental", "Dentrix", "Eaglesoft", "Curve Dental"].map((ehr) => (
                <div key={ehr} className="glass-panel px-5 py-2.5 text-sm text-muted-foreground">{ehr}</div>
              ))}
            </div>
            <Link to="/contact" className="ghost-btn text-sm">See all integrations</Link>
          </div>
        </section>
      )}

      {/* Related modules */}
      <section className="py-12 md:py-12 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-12">Works best together with</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {relatedProducts.map((rp) => {
              const IconComp = iconMap[rp.features[0]?.icon] || LucideIcons.Box;
              return (
                <Link key={rp.id} to={rp.href} className="glass-panel-hover p-6 group">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${rp.accentColor}15` }}>
                    <IconComp className="w-5 h-5" style={{ color: rp.accentColor }} />
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-1">{rp.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{rp.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
};

export default ProductPage;
