import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";
import { ModernPricingPage, PricingCardProps } from "@/components/ui/animated-glassy-pricing";

const faqs = [
  { q: "What is included in Borna Care?", a: "Borna Care includes online appointment booking, digital intake and consent forms, online payments, patient dashboard, family management, and EHR integration support." },
  { q: "When will other modules be available?", a: "Borna Connect and Borna Insight are currently in development. Join our early access list to be notified." },
  { q: "Can I start with one location and add more?", a: "Yes — Borna Care supports multi-location practices. Additional locations are available as an add-on." },
];

const PricingPage = () => {
  const navigate = useNavigate();

  const plans: PricingCardProps[] = [
    {
      planName: "Free Trial",
      description: "Try Borna Care with no commitment",
      price: "Free",
      features: [
        "1 Branch",
        "1 User",
        "Online appointment booking (without EHR integration)",
        "New patient intake forms",
        "Referral, Consent forms with eSignature",
        "Appointment notifications",
      ],
      buttonText: "Start free trial",
      buttonVariant: "secondary",
      onClick: () => navigate("/sign-up?plan=free-trial"),
    },
    {
      planName: "Starter Plan",
      description: "Everything you need to run your clinic",
      price: "$249",
      priceLabel: "/month",
      features: [
        "1 Branch",
        "Up to 20 Users per clinic",
        "Online appointment booking",
        "New patient intake forms",
        "Referral, Consent forms with eSignature",
        "Online payments",
        "Appointment notifications",
        "Support",
        "Role-based user permissions",
      ],
      buttonText: "Get started",
      isPopular: true,
      buttonVariant: "primary",
      badge: "Recommended",
      onClick: () => navigate("/sign-up?plan=starter"),
    },
  ];

  return (
    <PageWrapper>
      <Helmet>
        <title>Pricing — Healthcare Software for Clinics | Borna.ai</title>
        <meta name="description" content="Simple and transparent healthcare software pricing. Explore Borna.ai clinic management software plans and find the right fit for your practice." />
      </Helmet>
      <ModernPricingPage
        title="Simple and transparent healthcare software pricing"
        subtitle="Explore our clinic management software cost — start free, upgrade when you're ready. No hidden fees, no long-term contracts."
        plans={plans}
        showAnimatedBackground={true}
      />

      {/* Add-on */}
      <section className="py-16 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="section-headline text-foreground mb-4">Add-on</h2>
          <p className="body-text mx-auto mb-8">Scale your setup as your clinic grows.</p>
          <div className="glass-panel inline-flex items-center gap-4 px-8 py-5">
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">Additional Branch Setup</p>
              <p className="text-xs text-muted-foreground">Add more locations to your Starter Plan</p>
            </div>
            <div className="text-xl font-bold text-foreground whitespace-nowrap">$199<span className="text-sm font-normal text-muted-foreground">/branch</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="section-headline text-foreground text-center mb-16">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="glass-panel p-6"
              >
                <h3 className="text-base font-medium text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default PricingPage;
