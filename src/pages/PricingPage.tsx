import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";

const plans = [
  {
    name: "Free Trial",
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
    cta: "Start free trial",
    highlighted: false,
  },
  {
    name: "Starter Plan",
    description: "Everything you need to run your clinic",
    price: "$249",
    period: "/month",
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
    cta: "Get started",
    highlighted: true,
  },
];

const faqs = [
  { q: "What is included in the Free Trial?", a: "The Free Trial includes all core features for 1 branch and 1 user, including online booking (without EHR integration), intake forms, payments, and notifications." },
  { q: "Can I add more branches?", a: "Yes. Additional branches can be added to the Starter Plan for $199 per branch per month." },
  { q: "How does pricing scale?", a: "The Starter Plan supports up to 20 users per clinic. Contact our team for custom pricing if you need more." },
  { q: "Is there a long-term contract?", a: "No. The Starter Plan is a monthly subscription — cancel anytime." },
  { q: "What happens after my free trial ends?", a: "You can upgrade to the Starter Plan to keep all your data and unlock the full feature set." },
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
          Simple and transparent pricing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="body-text mx-auto max-w-xl"
        >
          Start free, upgrade when you're ready. No hidden fees, no long-term contracts.
        </motion.p>
      </div>
    </section>

    {/* Plans */}
    <section className="pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`rounded-xl p-8 flex flex-col relative ${
                plan.highlighted
                  ? "border-2 border-primary bg-primary/5"
                  : "glass-panel"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute top-4 right-4 inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                  Recommended
                </span>
              )}
              <h3 className="text-xl font-semibold text-foreground mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
              <div className="text-3xl font-bold text-foreground mb-1">
                {plan.price}
                {plan.period && <span className="text-base font-normal text-muted-foreground">{plan.period}</span>}
              </div>
              {plan.highlighted && (
                <p className="text-xs text-muted-foreground mb-6">per clinic</p>
              )}
              {!plan.highlighted && <div className="mb-6" />}
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

export default PricingPage;
