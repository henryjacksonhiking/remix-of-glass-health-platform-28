import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Smartphone, Calendar, MessageSquare, FileText, CreditCard, RotateCcw, ArrowRight, ChevronDown } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import StandardFAQ from "@/components/sections/StandardFAQ";
import { SparklesCore } from "@/components/ui/sparkles-core";
import { useState } from "react";

const stages = [
  { icon: Smartphone, label: "Discover", desc: "Find and connect with your practice" },
  { icon: Calendar, label: "Book", desc: "Schedule appointments online" },
  { icon: MessageSquare, label: "Communicate", desc: "Message your practice" },
  { icon: FileText, label: "Visit", desc: "Check-in and complete forms" },
  { icon: CreditCard, label: "Pay", desc: "Settle invoices digitally" },
  { icon: RotateCcw, label: "Return", desc: "Rebook and stay connected" },
];

const capabilities = [
  { title: "Online scheduling", desc: "Browse available times, select a provider, and book — all from a mobile device." },
  { title: "Digital intake forms", desc: "Complete health history, consent, and insurance forms before the visit." },
  { title: "Secure messaging", desc: "Message the practice, receive appointment reminders, and get follow-up instructions." },
  { title: "Online payments", desc: "View invoices and pay securely — before, during, or after the appointment." },
  { title: "Family management", desc: "Add dependents, manage bookings for children or family members." },
  { title: "Visit history", desc: "View past appointments, treatment summaries, and upcoming schedule." },
];

const practiceBenefits = [
  { metric: "Reduce no-shows", desc: "Automated reminders and easy rescheduling", value: "↓ 35%" },
  { metric: "Faster intake", desc: "Digital forms completed before arrival", value: "↓ 12 min" },
  { metric: "Faster payment", desc: "Online collection reduces billing friction", value: "↑ 40%" },
  { metric: "Staff time saved", desc: "Zero phone scheduling, zero paper processing", value: "↑ 8 hrs/wk" },
];

const faqItems = [
  { q: "What is the Borna Patient App?", a: "The Borna Patient App is the patient-facing side of Borna Care — a mobile-first platform that gives patients a seamless experience for scheduling appointments, completing intake forms, communicating with their practice, and making payments." },
  { q: "Is the Patient App a native mobile app?", a: "The Borna Patient App is a Progressive Web App (PWA) — meaning it works in any browser and can be installed on mobile devices like a native app. No app store download required." },
  { q: "Can patients manage family members?", a: "Yes. Patients can add dependents (children, elderly family members) to their account and manage appointments, forms, and payments for the entire family from one place." },
  { q: "How does the Patient App connect to the practice?", a: "The Patient App connects to the practice through Borna Care's unified platform. All data — appointments, forms, payments, and messages — syncs in real time between the patient's app and the practice's management portal." },
  { q: "Is patient data secure?", a: "Absolutely. All data is encrypted in transit and at rest. The platform is built with HIPAA-compliant infrastructure including role-based access, audit logging, and secure cloud hosting." },
];

const PatientAppPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageWrapper>
      <Helmet>
        <title>Healthcare Patient App & Portal | Scheduling, Messaging & Payments | Borna Care</title>
        <meta name="description" content="Give patients a seamless healthcare experience with the Borna Patient App. Enable scheduling, messaging, forms, and payments in one unified platform." />
        <link rel="canonical" href="https://borna.ai/products/borna-care/patient-app" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "WebPage",
          "name": "Borna Patient App", "description": "Healthcare patient app for scheduling, communication, and payments."
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "MobileApplication",
          "name": "Borna Patient App", "applicationCategory": "HealthApplication", "operatingSystem": "Web, iOS, Android",
          "description": "Patient-facing scheduling, forms, messaging, and payment app.",
          "featureList": ["Online scheduling", "Digital forms", "Secure messaging", "Online payments", "Family management"]
        })}</script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 pt-6">
        <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
          <span>/</span>
          <Link to="/products/care" className="hover:text-foreground transition-colors">Borna Care</Link>
          <span>/</span>
          <span className="text-primary">Patient App</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px] rounded-full blur-[120px] bg-primary/8 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 text-sm text-muted-foreground mb-6">
                <span>Patient App</span>
                <span className="text-primary">by Borna Care</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="hero-headline text-foreground mb-6">
                A seamless, effortless <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>patient experience</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="body-text mb-8">
                Everything patients need — scheduling, forms, messaging, and payments — in one beautiful, mobile-first app. No downloads required.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-row gap-3">
                <Link to="/demo" className="gradient-btn px-6 py-3">Request demo</Link>
                <Link to="/products/care" className="ghost-btn px-6 py-3">Explore Borna Care</Link>
              </motion.div>
            </div>
            {/* Mobile device frame */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="flex justify-center">
              <div className="relative w-56 md:w-64 rounded-[2.5rem] p-2.5 animate-[float_7s_ease-in-out_infinite]" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="rounded-[2rem] overflow-hidden" style={{ background: 'hsl(226 60% 10%)' }}>
                  <div className="flex items-center justify-between px-4 py-2" style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.5)' }}>9:41</span>
                    <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.5)' }}>Borna</span>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/15 mx-auto mb-2 flex items-center justify-center">
                        <span className="text-primary text-lg font-medium">S</span>
                      </div>
                      <div className="text-sm text-foreground">Welcome, Sarah</div>
                      <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Your next visit: Tomorrow, 10:30 AM</div>
                    </div>
                    {[
                      { icon: "📅", label: "Book appointment", accent: true },
                      { icon: "📋", label: "Complete forms", accent: false },
                      { icon: "💬", label: "Messages (2)", accent: false },
                      { icon: "💳", label: "Pay invoice", accent: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg" style={{ background: item.accent ? 'rgba(0,222,196,0.08)' : 'rgba(255,255,255,0.04)', border: `1px solid ${item.accent ? 'rgba(0,222,196,0.15)' : 'rgba(255,255,255,0.06)'}` }}>
                        <span className="text-sm">{item.icon}</span>
                        <span className="text-xs" style={{ color: item.accent ? '#00DEC4' : 'rgba(255,255,255,0.6)' }}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="py-12 md:py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-headline text-foreground mb-6">What is a healthcare patient app?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            A healthcare patient app is a mobile-first platform that gives patients direct access to their healthcare experience — scheduling, communication, forms, and payments — without calling the office or visiting in person. The Borna Patient App is the patient-facing side of Borna Care, designed to make every interaction effortless.
          </motion.p>
        </div>
      </section>

      {/* Patient Experience Flow */}
      <section className="py-12 md:py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="section-headline text-foreground mb-4">A unified patient experience platform</h2>
          <p className="body-text mx-auto mb-12">Six stages, one seamless journey.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-3">
            {stages.map((stage, i) => (
              <motion.div key={stage.label} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3">
                <div className="text-center w-20">
                  <div className="w-12 h-12 rounded-xl mx-auto mb-2 flex items-center justify-center" style={{ background: 'rgba(0,222,196,0.08)', border: '1px solid rgba(0,222,196,0.15)' }}>
                    <stage.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-xs font-medium text-foreground">{stage.label}</div>
                  <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{stage.desc}</div>
                </div>
                {i < stages.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 hidden md:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-12 md:py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-16">What patients can do with the Borna App</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-base font-medium text-foreground mb-1">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Benefits */}
      <section className="py-12 md:py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-16">Benefits for healthcare practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {practiceBenefits.map((b, i) => (
              <motion.div key={b.metric} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-2xl font-semibold text-primary mb-2">{b.value}</div>
                <h3 className="text-sm font-medium text-foreground mb-1">{b.metric}</h3>
                <p className="text-xs text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Connection */}
      <section className="py-12 md:py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="section-headline text-foreground mb-6">Connected to the full Borna ecosystem</h2>
          <p className="body-text mx-auto mb-6">
            The Patient App is connected to Borna Care, which in turn connects to the entire Borna platform — communication, CRM, analytics, and AI. Every patient action enriches the full system.
          </p>
          <Link to="/ecosystem" className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
            Explore the Borna ecosystem <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <StandardFAQ items={faqItems} />

      {/* CTA */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[350px] rounded-full bg-primary/5 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="section-headline text-foreground mb-4">Give your patients the experience they expect</h2>
          <p className="body-text mx-auto mb-6">See how the Borna Patient App transforms patient interactions.</p>
          <div className="flex flex-row items-center justify-center gap-3 mb-8">
            <Link to="/demo" className="gradient-btn px-8 py-3.5">Request demo</Link>
            <Link to="/products/care" className="ghost-btn px-8 py-3.5">Explore Borna Care</Link>
          </div>
          <div className="relative w-full max-w-lg mx-auto h-32">
            <SparklesCore className="w-full h-full" background="transparent" particleColor="#ffffff" particleDensity={80} minSize={0.4} maxSize={1.2} speed={2} />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default PatientAppPage;
