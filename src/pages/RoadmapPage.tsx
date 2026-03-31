import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { BeamsBackground } from "@/components/ui/beams-background";
import PageWrapper from "@/components/layout/PageWrapper";

const nowItems = [
  "Borna Care — Patient portal",
  "Online appointment booking",
  "Digital intake and consent forms",
  "Online payments and invoicing",
  "Family and dependent management",
  "EHR integration support",
  "Admin dashboard",
  "Provider availability management",
];

const devItems = [
  { heading: "Borna Connect — Unified communications", items: ["Web-based calling and SMS", "AI call summaries and transcription", "Telehealth video sessions"] },
  { heading: "Borna Insight — Analytics dashboard", items: ["Clinic performance reporting"] },
];

const soonItems = [
  { heading: "Borna Engage — Patient CRM", items: ["Campaign management and follow-ups"] },
  { heading: "Borna Core — AI engine", items: ["Predictive analytics and automation"] },
  { heading: null, items: ["Mobile app (iOS + Android)"] },
];

const RoadmapPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Roadmap — What We're Building | Borna.ai</title>
      <meta name="description" content="See what's live, in development, and coming next on the Borna.ai healthcare platform roadmap." />
    </Helmet>

    {/* Hero */}
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 opacity-50">
        <BeamsBackground intensity="medium" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="hero-headline text-foreground mb-6"
        >
          What we're building
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="body-text mx-auto max-w-xl"
        >
          Borna.ai is being built transparently — here's exactly what's live, what's in development, and what's coming next.
        </motion.p>
      </div>
    </section>

    {/* Status Timeline */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Now */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-[14px] p-6"
            style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#00DEC4' }} />
              <h3 className="text-lg font-medium text-foreground">Now</h3>
            </div>
            <ul className="space-y-3">
              {nowItems.map((item, i) => (
                <li key={i} className={`text-sm ${i === 0 ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* In development */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[14px] p-6"
            style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#F59E0B' }} />
              <h3 className="text-lg font-medium text-foreground">In development</h3>
            </div>
            <div className="space-y-5">
              {devItems.map((group, gi) => (
                <div key={gi}>
                  <p className="text-sm font-medium text-foreground mb-2">{group.heading}</p>
                  <ul className="space-y-2 pl-0">
                    {group.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Coming soon */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-[14px] p-6"
            style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} />
              <h3 className="text-lg font-medium text-foreground">Coming soon</h3>
            </div>
            <div className="space-y-5">
              {soonItems.map((group, gi) => (
                <div key={gi}>
                  {group.heading && <p className="text-sm font-medium text-foreground mb-2">{group.heading}</p>}
                  <ul className="space-y-2 pl-0">
                    {group.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Trust statement */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
        <h2 className="section-headline text-foreground mb-4">Built to last, not to ship fast</h2>
        <p className="body-text mx-auto">
          Every module is being developed as part of one unified architecture. When Borna Connect launches, it will share the same patient profiles, data layer, and AI infrastructure as Borna Care — not as a bolt-on.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="gradient-btn text-base px-8 py-3.5">Join Early Access</Link>
          <Link to="/demo" className="ghost-btn text-base px-8 py-3.5">Book a Demo</Link>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default RoadmapPage;
