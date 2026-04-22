import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Bell, Mail, Share2, Star, Route, ArrowRight, ChevronDown, Funnel, Bot } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { SparklesCore } from "@/components/ui/sparkles-core";
import { useState } from "react";

const lifecycleStages = [
  { label: "Lead", desc: "First contact", color: "rgba(214,0,127,0.15)" },
  { label: "Contact", desc: "Initial outreach", color: "rgba(214,0,127,0.2)" },
  { label: "Appointment", desc: "Booked visit", color: "rgba(214,0,127,0.3)" },
  { label: "Treatment", desc: "Service delivered", color: "rgba(214,0,127,0.4)" },
  { label: "Follow-Up", desc: "Post-visit care", color: "rgba(214,0,127,0.5)" },
  { label: "Retention", desc: "Long-term loyalty", color: "rgba(214,0,127,0.6)" },
];

const capabilities = [
  { icon: Funnel, title: "Patient pipeline", desc: "Track every lead from first inquiry through conversion. Visual pipeline with drag-and-drop stage management." },
  { icon: Bell, title: "Automated follow-ups", desc: "Triggered messages for recalls, no-shows, check-ins, and reactivation — running on autopilot." },
  { icon: Mail, title: "SMS & email campaigns", desc: "Targeted campaigns with patient segmentation, tagging, and performance tracking." },
  { icon: Share2, title: "Referral tracking", desc: "Track and reward patient referral sources. Know which channels bring the highest-value patients." },
  { icon: Star, title: "Review collection", desc: "Automated review requests after appointments — boost your online reputation effortlessly." },
  { icon: Route, title: "Lifecycle tracking", desc: "From first visit to long-term retention — see where every patient stands in the journey." },
];

const faqItems = [
  { q: "What is a healthcare CRM platform?", a: "A healthcare CRM platform helps practices manage patient interactions, track leads from first contact, and maintain ongoing communication. Unlike traditional CRMs, Borna Engage integrates communication automation, lifecycle tracking, and AI-driven insights to manage the full patient journey." },
  { q: "How does Borna Engage improve patient retention?", a: "Borna Engage improves retention by automating ongoing communication — recall reminders, reactivation campaigns, post-visit follow-ups, and engagement sequences — so patients stay connected to the practice without manual staff effort." },
  { q: "Can Borna Engage track referral sources?", a: "Yes. Borna Engage tracks referral sources across all channels — online, word-of-mouth, advertising, and partner referrals — so you know exactly which sources bring the highest-value patients." },
  { q: "Does Borna Engage integrate with Borna Care?", a: "Absolutely. Borna Engage shares patient data with Borna Care — scheduling, form completion, and payment activity feed directly into the CRM lifecycle, giving you a complete view of every patient relationship." },
  { q: "Is Borna Engage available now?", a: "Borna Engage is currently in development. Request a demo to learn about early access availability and be among the first practices to use the platform." },
];

const BornaEngagePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageWrapper>
      <Helmet>
        <title>Healthcare CRM & Patient Engagement Platform | Borna Engage</title>
        <meta name="description" content="Manage patient relationships and engagement with Borna Engage. A healthcare CRM platform to track leads, automate follow-ups, and improve patient retention." />
        <link rel="canonical" href="https://borna.ai/products/borna-engage" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Borna Engage",
          "applicationCategory": "HealthApplication",
          "description": "Healthcare CRM platform for patient lifecycle management and engagement.",
          "featureList": ["Lead tracking", "Patient lifecycle management", "Automated follow-ups", "Multi-channel engagement"]
        })}</script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 pt-6">
        <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link><span>/</span>
          <Link to="/products" className="hover:text-foreground transition-colors">Products</Link><span>/</span>
          <span style={{ color: '#D6007F' }}>Borna Engage</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(214,0,127,0.06)' }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 text-sm text-muted-foreground mb-6">
              <span>Borna Engage</span>
              <span style={{ color: '#D6007F' }}>CRM</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="hero-headline text-foreground mb-6">
              A continuous <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #D6007F, #00DEC4)' }}>patient lifecycle</span>, intelligently managed
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="body-text mb-8">
              Track every patient from first lead contact through long-term retention. Automate follow-ups, campaigns, and lifecycle management — so no opportunity is lost.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-row justify-center gap-3">
              <Link to="/demo" className="gradient-btn px-6 py-3">Request demo</Link>
              <Link to="/platform" className="ghost-btn px-6 py-3">Explore platform</Link>
            </motion.div>
          </div>
          {/* Lifecycle Flow */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap justify-center gap-3 mt-16">
            {lifecycleStages.map((stage, i) => (
              <div key={stage.label} className="flex items-center gap-3">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-1" style={{ background: stage.color, border: '1px solid rgba(214,0,127,0.2)' }}>
                    <span className="text-xs font-medium" style={{ color: '#D6007F' }}>{i + 1}</span>
                  </div>
                  <div className="text-[11px] font-medium text-foreground">{stage.label}</div>
                  <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{stage.desc}</div>
                </div>
                {i < lifecycleStages.length - 1 && <ArrowRight className="w-3.5 h-3.5 shrink-0 hidden md:block" style={{ color: '#D6007F' }} />}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Definition */}
      <section className="py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="section-headline text-foreground mb-6">What is a healthcare CRM platform?</h2>
          <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            A healthcare CRM platform manages the full patient relationship — from the moment a lead first contacts your practice through years of ongoing care. Unlike generic CRMs, Borna Engage is purpose-built for healthcare with HIPAA compliance, EHR integration, and lifecycle tracking designed for patient retention.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="section-headline text-foreground mb-12">Why healthcare practices lose patients and leads</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {["Leads fall through cracks", "No follow-up after first visit", "Manual recall reminders", "No referral tracking", "Zero lifecycle visibility"].map(p => (
              <span key={p} className="px-4 py-2 rounded-full text-sm" style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)' }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-16">What Borna Engage enables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(214,0,127,0.12)' }}>
                  <cap.icon className="w-5 h-5" style={{ color: '#D6007F' }} />
                </div>
                <h3 className="text-base font-medium text-foreground mb-1">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion & Retention */}
      <section className="py-24 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-xl p-8" style={{ background: 'rgba(214,0,127,0.04)', border: '1px solid rgba(214,0,127,0.1)' }}>
              <h3 className="text-lg font-medium text-foreground mb-4">Convert more leads into patients</h3>
              <p className="text-sm text-muted-foreground mb-4">Track every lead from first contact. Automated outreach ensures no opportunity is missed.</p>
              <ul className="space-y-2">
                {["Automatic lead capture", "Drip campaign sequences", "Conversion tracking", "Source attribution"].map(item => (
                  <li key={item} className="text-sm flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#D6007F' }} />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-8" style={{ background: 'rgba(0,222,196,0.04)', border: '1px solid rgba(0,222,196,0.1)' }}>
              <h3 className="text-lg font-medium text-foreground mb-4">Keep patients engaged over time</h3>
              <p className="text-sm text-muted-foreground mb-4">Automated recall, reactivation, and engagement workflows keep patients returning.</p>
              <ul className="space-y-2">
                {["Recall reminders", "Reactivation campaigns", "Post-visit follow-ups", "Loyalty tracking"].map(item => (
                  <li key={item} className="text-sm flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-16">How Borna Engage works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Capture leads", desc: "Every inquiry becomes a tracked lead in the pipeline." },
              { step: "2", title: "Nurture & convert", desc: "Automated sequences guide leads to appointment booking." },
              { step: "3", title: "Manage lifecycle", desc: "Track patients through treatment, follow-up, and retention." },
              { step: "4", title: "Optimize & grow", desc: "AI identifies patterns, predicts churn, and recommends actions." },
            ].map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="glass-panel p-5 text-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: 'rgba(214,0,127,0.12)' }}>
                  <span className="text-xs font-semibold" style={{ color: '#D6007F' }}>{s.step}</span>
                </div>
                <h3 className="text-sm font-medium text-foreground mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="section-headline text-foreground text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-2">
            {faqItems.map((faq, i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left" aria-expanded={openFaq === i}>
                  <span className="text-sm font-medium text-foreground pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-4"><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[400px] rounded-full blur-[120px]" style={{ background: 'rgba(214,0,127,0.05)' }} />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="section-headline text-foreground mb-4">Ready to manage the full patient lifecycle?</h2>
          <p className="body-text mx-auto mb-6">See how Borna Engage transforms patient relationships and retention.</p>
          <div className="flex flex-row items-center justify-center gap-3 mb-8">
            <Link to="/demo" className="gradient-btn px-8 py-3.5">Request demo</Link>
            <Link to="/platform" className="ghost-btn px-8 py-3.5">Explore platform</Link>
          </div>
          <div className="relative w-full max-w-lg mx-auto h-32">
            <SparklesCore className="w-full h-full" background="transparent" particleColor="#D6007F" particleDensity={80} minSize={0.4} maxSize={1.2} speed={2.5} />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default BornaEngagePage;
