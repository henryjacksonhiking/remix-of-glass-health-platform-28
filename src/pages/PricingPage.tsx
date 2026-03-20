import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";

const plans = [
  {
    name: "Starter",
    description: "Basic patient portal and scheduling",
    price: "Contact us",
    features: [
      "Online appointment booking",
      "Digital intake forms",
      "Patient portal",
      "Email notifications",
      "Basic reporting",
    ],
    cta: "Book a demo",
    highlighted: false,
  },
  {
    name: "Growth",
    description: "Advanced features and automation",
    price: "Contact us",
    features: [
      "Everything in Starter",
      "Online payments",
      "Automated reminders",
      "Family management",
      "EHR integration",
      "Priority support",
    ],
    cta: "Book a demo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions and scaling support",
    price: "Custom",
    features: [
      "Everything in Growth",
      "Multi-location support",
      "Custom workflows",
      "Dedicated account manager",
      "API access",
      "SLA guarantees",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

const faqs = [
  { q: "What is included in Borna Care?", a: "Borna Care includes online booking, digital forms, patient portal, online payments, automated reminders, and EHR integration. The exact features depend on your plan." },
  { q: "How does pricing scale?", a: "Pricing scales based on the number of providers and locations. Contact our team for a custom quote tailored to your clinic's needs." },
  { q: "When will future modules be available?", a: "Borna Connect is coming soon. Borna Engage, Insight, and Core are in active development. Join our early access list to be notified." },
  { q: "Can I add more clinic locations later?", a: "Yes. You can add locations at any time. Multi-location support is available on the Growth and Enterprise plans." },
  { q: "Is there a free trial?", a: "We offer guided demos and pilot programs. Book a demo to discuss options with our team." },
];

const PricingPage = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-headline text-foreground mb-6"
        >
          Simple and flexible pricing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="body-text mx-auto max-w-xl"
        >
          Start with Borna Care and expand as your clinic grows. No hidden fees, no long-term contracts.
        </motion.p>
      </div>
    </section>

    {/* Plans */}
    <section className="pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`rounded-xl p-8 flex flex-col ${
                plan.highlighted
                  ? "border-2 border-primary bg-primary/5"
                  : "glass-panel"
              }`}
            >
              {plan.highlighted && (
                <span className="text-xs font-medium text-primary mb-4">Most popular</span>
              )}
              <h3 className="text-xl font-semibold text-foreground mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
              <div className="text-2xl font-bold text-foreground mb-8">{plan.price}</div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/demo"
                className={plan.highlighted ? "gradient-btn text-center py-3" : "ghost-btn text-center py-3"}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Add-ons */}
    <section className="py-16 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <h2 className="section-headline text-foreground mb-4">Add-ons</h2>
        <p className="body-text mx-auto mb-8">Extend your setup with additional capabilities as your clinic grows.</p>
        <div className="flex flex-wrap justify-center gap-3">
          {["Additional clinic locations", "Communication features", "Future modules (early access)"].map((addon) => (
            <div key={addon} className="glass-panel px-5 py-2.5 text-sm text-muted-foreground">{addon}</div>
          ))}
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

export default PricingPage;
