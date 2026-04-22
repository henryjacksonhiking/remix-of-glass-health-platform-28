import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, FileText, CreditCard, Users, RefreshCw, Building2, ClipboardMinus, UserCheck, BellRing, Banknote, ArrowRight, ChevronDown } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { SparklesCore } from "@/components/ui/sparkles-core";
import { useState } from "react";

/* ── Breadcrumb ── */
const Breadcrumb = () => (
  <div className="container mx-auto px-4 md:px-6 pt-6">
    <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
      <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
      <span>/</span>
      <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
      <span>/</span>
      <span className="text-primary">Borna Care</span>
    </nav>
  </div>
);

/* ── Device Frame Mockups ── */
const MobileFrame = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative rounded-[2rem] p-2 ${className}`} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
    <div className="rounded-[1.5rem] overflow-hidden" style={{ background: 'hsl(226 60% 10%)' }}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-2" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.5)' }}>9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-2 rounded-sm" style={{ background: 'rgba(255,255,255,0.3)' }} />
          <div className="w-3 h-2 rounded-sm" style={{ background: 'rgba(255,255,255,0.3)' }} />
        </div>
      </div>
      {children}
    </div>
  </div>
);

const DesktopFrame = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative rounded-xl overflow-hidden ${className}`} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
    {/* Title bar */}
    <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
      </div>
      <div className="flex-1 text-center">
        <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>Borna Care · Practice Portal</span>
      </div>
    </div>
    <div style={{ background: 'hsl(226 60% 10%)' }}>{children}</div>
  </div>
);

/* ── Scheduling Screen Mockup ── */
const SchedulingScreen = () => (
  <div className="p-4 space-y-3">
    <div className="flex items-center justify-between">
      <h4 className="text-sm font-medium text-foreground">Book appointment</h4>
      <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(0,222,196,0.15)', color: '#00DEC4' }}>Online</span>
    </div>
    <div className="grid grid-cols-7 gap-1">
      {["M","T","W","T","F","S","S"].map((d, i) => (
        <div key={i} className="text-center text-[9px] py-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{d}</div>
      ))}
      {Array.from({ length: 28 }, (_, i) => (
        <div key={i} className={`text-center text-[10px] py-1.5 rounded ${i === 14 ? 'bg-primary text-primary-foreground font-medium' : ''}`} style={i !== 14 ? { color: 'rgba(255,255,255,0.5)' } : {}}>
          {i + 1}
        </div>
      ))}
    </div>
    <div className="space-y-1.5">
      {["9:00 AM", "10:30 AM", "2:00 PM"].map((t, i) => (
        <div key={t} className={`px-3 py-2 rounded-lg text-xs ${i === 1 ? 'border-primary' : ''}`} style={{ background: i === 1 ? 'rgba(0,222,196,0.1)' : 'rgba(255,255,255,0.04)', border: `1px solid ${i === 1 ? 'rgba(0,222,196,0.3)' : 'rgba(255,255,255,0.08)'}`, color: i === 1 ? '#00DEC4' : 'rgba(255,255,255,0.6)' }}>
          {t}
        </div>
      ))}
    </div>
    <button className="w-full py-2.5 rounded-lg text-xs font-medium text-primary-foreground" style={{ background: 'linear-gradient(135deg, #00DEC4, #00479B)' }}>
      Confirm appointment
    </button>
  </div>
);

/* ── Dashboard Screen Mockup ── */
const DashboardScreen = () => (
  <div className="p-4 space-y-3">
    <div className="flex items-center justify-between mb-2">
      <h4 className="text-sm font-medium text-foreground">Practice dashboard</h4>
      <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Today</span>
    </div>
    <div className="grid grid-cols-3 gap-2">
      {[{ label: "Appointments", val: "12" }, { label: "Pending", val: "3" }, { label: "Revenue", val: "$2,480" }].map(s => (
        <div key={s.label} className="rounded-lg p-2.5 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="text-base font-semibold text-foreground">{s.val}</div>
          <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
        </div>
      ))}
    </div>
    <div className="space-y-1.5">
      {[{ name: "Sarah J.", time: "9:00 AM", status: "Confirmed" }, { name: "Mike T.", time: "10:30 AM", status: "Pending" }, { name: "Lisa R.", time: "2:00 PM", status: "Confirmed" }].map(apt => (
        <div key={apt.name} className="flex items-center justify-between px-3 py-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div>
            <span className="text-xs text-foreground">{apt.name}</span>
            <span className="text-[10px] ml-2" style={{ color: 'rgba(255,255,255,0.4)' }}>{apt.time}</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: apt.status === "Confirmed" ? 'rgba(0,222,196,0.12)' : 'rgba(255,180,0,0.12)', color: apt.status === "Confirmed" ? '#00DEC4' : '#FFB400' }}>
            {apt.status}
          </span>
        </div>
      ))}
    </div>
    <div className="text-[10px] text-center py-2" style={{ color: 'rgba(255,255,255,0.3)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      12 appointments today · 3 pending confirmations · 2 payments due
    </div>
  </div>
);

const features = [
  { icon: Calendar, title: "Online appointment scheduling", desc: "Patients book, reschedule, or cancel appointments 24/7 with online appointment scheduling for clinics." },
  { icon: FileText, title: "Digital intake forms", desc: "Paperless consent, referral, and intake forms that sync directly to patient records." },
  { icon: CreditCard, title: "Secure payments", desc: "Invoice tracking and secure payment requests — patients pay online before or after visits." },
  { icon: Users, title: "Family management", desc: "Manage dependents and family bookings in one unified patient account." },
  { icon: RefreshCw, title: "EHR sync", desc: "Bidirectional sync with your existing health record system for seamless data flow." },
  { icon: Building2, title: "Multi-clinic profile", desc: "One patient identity across all connected clinics — no duplicate records." },
];

const benefits = [
  { icon: ClipboardMinus, title: "Reduce administrative workload", desc: "Eliminate manual scheduling and paper forms" },
  { icon: UserCheck, title: "Improve patient experience", desc: "Self-service booking and digital communications" },
  { icon: BellRing, title: "Increase appointment efficiency", desc: "Reduce no-shows with automated reminders" },
  { icon: Banknote, title: "Recover more revenue", desc: "Frictionless online payment requests" },
];

const patientSteps = [
  { label: "Book", desc: "Schedule appointments online" },
  { label: "Forms", desc: "Complete intake digitally" },
  { label: "Pay", desc: "Settle invoices online" },
  { label: "Done", desc: "Confirmation & reminders" },
];

const faqItems = [
  { q: "What is patient engagement software?", a: "Patient engagement software helps healthcare practices communicate with patients, manage appointments, and improve overall experience and retention. Modern platforms like Borna Care include online scheduling, digital forms, secure payments, and integrated communication tools — all in one unified system." },
  { q: "What is a patient portal?", a: "A patient portal is a digital platform that gives patients secure, convenient access to healthcare services — including scheduling appointments, completing intake forms, making payments, and communicating with their practice. Borna Care is available as a desktop web application and mobile PWA." },
  { q: "How does patient engagement software help practices?", a: "Patient engagement software reduces administrative overhead by automating scheduling, forms, and payment collection — freeing staff to focus on patient care. It also improves patient satisfaction and retention by making every interaction easier and more responsive." },
  { q: "Does Borna Care integrate with existing EHR systems?", a: "Yes. Borna Care provides bidirectional sync with major EHR systems including Open Dental, Dentrix, Eaglesoft, and Curve Dental — keeping patient records, appointments, and billing data synchronized in real time." },
  { q: "Is Borna Care HIPAA compliant?", a: "Absolutely. Borna Care is built with HIPAA-compliant infrastructure including encrypted data transmission, role-based access controls, audit logging, and secure cloud hosting — meeting the security requirements of modern healthcare practices." },
];

const ecosystemModules = [
  { name: "Borna Connect", color: "#00DEC4", status: "Coming Soon" },
  { name: "Borna Engage", color: "#D6007F", status: "Coming Soon" },
  { name: "Borna Insight", color: "#818CF8", status: "Coming Soon" },
  { name: "Borna Core", color: "#4F6AFF", status: "Coming Soon" },
];

const BornaCarePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageWrapper>
      <Helmet>
        <title>Patient Engagement & Portal Software for Healthcare | Borna Care</title>
        <meta name="description" content="Borna Care is a patient engagement and portal platform with scheduling, forms, payments, and communication. Improve patient experience and practice efficiency." />
        <link rel="canonical" href="https://borna.ai/products/borna-care" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Borna Care",
          "applicationCategory": "HealthApplication", "operatingSystem": "Web, iOS, Android",
          "description": "Patient engagement and portal software for scheduling, forms, payments, and communication.",
          "featureList": ["Online scheduling", "Digital forms", "Secure payments", "Patient communication"]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": faqItems.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        })}</script>
      </Helmet>

      <Breadcrumb />

      {/* SECTION 1 — Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] bg-primary/10 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 text-sm text-muted-foreground mb-6">
                <span>Borna Care</span>
                <span className="text-primary">Live</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="hero-headline text-foreground mb-6">
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>Patient engagement software</span> your clinic actually deserves
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="body-text mb-8">
                Give patients a seamless digital experience — online scheduling, digital intake forms, payments, and communication — while giving staff the tools to manage everything from one place.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-row gap-3">
                <Link to="/demo" className="gradient-btn text-sm sm:text-base px-6 py-3">Book a demo</Link>
                <Link to="/sign-up" className="ghost-btn text-sm sm:text-base px-6 py-3">Start free trial</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex gap-3 mt-6">
                <span className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}>Desktop Web App</span>
                <span className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}>Mobile PWA</span>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="relative flex items-end gap-4 justify-center">
              <MobileFrame className="w-48 md:w-56 animate-[float_6s_ease-in-out_infinite]">
                <SchedulingScreen />
              </MobileFrame>
              <DesktopFrame className="w-72 md:w-96 -ml-6 animate-[float_6s_ease-in-out_infinite_0.5s]">
                <DashboardScreen />
              </DesktopFrame>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Definition */}
      <section className="py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-headline text-foreground mb-6">
            What is patient engagement software?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Patient engagement software is a digital platform that connects patients with their healthcare practice — enabling online scheduling, digital forms, secure payments, and two-way communication. It replaces manual, paper-based processes with a seamless digital experience that benefits both patients and practice staff.
          </motion.p>
          <div className="mt-8 h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,222,196,0.3), transparent)' }} />
        </div>
      </section>

      {/* SECTION 3 — Problem */}
      <section className="py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-headline text-foreground text-center mb-12">
            Why traditional patient systems fall short
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Before */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-base font-medium mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>Before Borna Care</h3>
              <ul className="space-y-3">
                {["Phone-only scheduling", "Paper intake forms", "Manual payment follow-up", "No patient self-service", "Disconnected tools"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            {/* After */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-xl p-6" style={{ background: 'rgba(0,222,196,0.04)', border: '1px solid rgba(0,222,196,0.12)' }}>
              <h3 className="text-base font-medium text-primary mb-4">With Borna Care</h3>
              <ul className="space-y-3">
                {["24/7 online scheduling", "Digital forms & consent", "Automated payment requests", "Full patient self-service", "One unified platform"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Patient Experience */}
      <section className="py-24 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-headline text-foreground mb-4">
            A seamless experience for patients
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="body-text mx-auto mb-12">
            From first appointment to follow-up, patients manage everything from one place.
          </motion.p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {patientSteps.map((step, i) => (
              <motion.div key={step.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-2" style={{ background: 'rgba(0,222,196,0.08)', border: '1px solid rgba(0,222,196,0.15)' }}>
                    <span className="text-primary font-semibold">{i + 1}</span>
                  </div>
                  <h4 className="text-sm font-medium text-foreground">{step.label}</h4>
                  <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>{step.desc}</p>
                </div>
                {i < patientSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-primary hidden md:block shrink-0" />
                )}
              </motion.div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/products/care/patient-app" className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
              Explore the Patient App <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Practice Experience */}
      <section className="py-24 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-headline text-foreground mb-6">
                A powerful management portal for your practice
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="body-text mb-6">
                Your team gets a centralized dashboard to manage scheduling, providers, billing, and EHR sync — all in one unified view.
              </motion.p>
              <ul className="space-y-3">
                {["Provider schedule management", "Real-time appointment overview", "Patient record management", "Billing & payment tracking", "Multi-location management"].map((item, i) => (
                  <motion.li key={item} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.05 }} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <DesktopFrame className="animate-[float_6s_ease-in-out_infinite]">
                <DashboardScreen />
              </DesktopFrame>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Core Features */}
      <section id="features" className="py-24 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-16">Key features of Borna Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {features.map((feat, i) => (
              <motion.div key={feat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(0,71,155,0.15)' }}>
                  <feat.icon className="w-5 h-5" style={{ color: '#00479B' }} />
                </div>
                <h3 className="text-base font-medium text-foreground mb-1">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — How it Works */}
      <section className="py-24 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-16">How Borna Care works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Patient signs up", desc: "Patients create a profile and connect to your clinic in minutes." },
              { step: "2", title: "Book and complete forms", desc: "Online booking, digital intake, and consent — all before the visit." },
              { step: "3", title: "Visit and follow up", desc: "Check-in, treatment, payment, and automated follow-up in one flow." },
            ].map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="glass-panel p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-semibold text-primary">{s.step}</span>
                </div>
                <h3 className="text-base font-medium text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — Platform Connection */}
      <section className="py-24 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="section-headline text-foreground mb-6">Built as part of the Borna AI platform</h2>
              <p className="body-text mb-6">
                Borna Care is the first live module of the Borna ecosystem. As additional modules launch, your clinic gains communication, CRM, analytics, and AI capabilities — all connected to the same patient data.
              </p>
              <Link to="/platform" className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
                See the full platform <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Center node */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,71,155,0.2)', border: '2px solid rgba(0,71,155,0.4)', boxShadow: '0 0 30px rgba(0,71,155,0.2)' }}>
                    <div className="text-center">
                      <div className="text-[10px] font-medium text-foreground">Borna Care</div>
                      <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-primary/20 text-primary">Live</span>
                    </div>
                  </div>
                </div>
                {/* Surrounding nodes */}
                {ecosystemModules.map((mod, i) => {
                  const angle = (i * 90 - 45) * (Math.PI / 180);
                  const x = 50 + 38 * Math.cos(angle);
                  const y = 50 + 38 * Math.sin(angle);
                  return (
                    <div key={mod.name} className="absolute w-16 text-center" style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
                      <div className="w-10 h-10 rounded-full mx-auto mb-1 flex items-center justify-center" style={{ background: `${mod.color}15`, border: `1px solid ${mod.color}30` }}>
                        <div className="w-2 h-2 rounded-full" style={{ background: mod.color, opacity: 0.5 }} />
                      </div>
                      <div className="text-[9px] text-muted-foreground">{mod.name.replace("Borna ", "")}</div>
                      <span className="text-[7px] px-1 rounded" style={{ color: 'rgba(255,255,255,0.3)' }}>{mod.status}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — Benefits */}
      <section className="py-24 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-16">What Borna Care delivers for your clinic</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-4 p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.08)' }}>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-foreground">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — Differentiation */}
      <section className="py-24 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="section-headline text-foreground mb-12">Why Borna Care is different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 text-left" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-sm font-medium mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>Traditional tools</h3>
              {["Separate scheduling app", "Paper forms", "Manual billing follow-up", "No communication layer", "Single-clinic only"].map(item => (
                <div key={item} className="text-sm py-1.5" style={{ color: 'rgba(255,255,255,0.4)' }}>× {item}</div>
              ))}
            </div>
            <div className="rounded-xl p-6 text-left" style={{ background: 'rgba(0,222,196,0.04)', border: '1px solid rgba(0,222,196,0.12)' }}>
              <h3 className="text-sm font-medium text-primary mb-4">Borna Care</h3>
              {["Integrated scheduling + forms + payments", "Digital-first patient experience", "Automated payment collection", "Built-in communication ready", "Multi-clinic capable"].map(item => (
                <div key={item} className="text-sm py-1.5" style={{ color: 'rgba(255,255,255,0.7)' }}>✓ {item}</div>
              ))}
            </div>
          </div>
          <p className="text-sm mt-8" style={{ color: 'rgba(255,255,255,0.4)' }}>The first step toward a fully unified healthcare operating system.</p>
        </div>
      </section>

      {/* SECTION 11 — Key Takeaways */}
      <section className="py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="section-headline text-foreground text-center mb-10">Key takeaways</h2>
          <div className="space-y-4">
            {[
              "Borna Care is a full patient portal — scheduling, forms, payments, and communication in one platform",
              "Both patients and staff benefit — dual-sided experience designed for both audiences",
              "Built for multi-location practices — one system across all connected clinics",
              "The first live module of the Borna ecosystem — with communication, CRM, and AI layers integrating as they launch",
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] text-primary font-medium">{i + 1}</span>
                </span>
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — FAQ */}
      <section className="py-24 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="section-headline text-foreground text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-2">
            {faqItems.map((faq, i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm font-medium text-foreground pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13 — EHR Integration */}
      <section className="py-16 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="section-headline text-foreground mb-4">Works with your existing EHR</h2>
          <p className="body-text mx-auto mb-8">Bidirectional sync with major electronic health record systems and payment gateways.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Open Dental", "Dentrix", "Eaglesoft", "Curve Dental"].map(ehr => (
              <div key={ehr} className="glass-panel px-5 py-2.5 text-sm text-muted-foreground">{ehr}</div>
            ))}
          </div>
          <Link to="/platform/integrations" className="ghost-btn text-sm">See all integrations</Link>
        </div>
      </section>

      {/* SECTION 14 — Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="section-headline text-foreground mb-4">See Borna Care in action</h2>
          <p className="body-text mx-auto mb-6">Book a demo or start a free trial — our team will get back to you within one business day.</p>
          <div className="flex flex-row items-center justify-center gap-3 mb-8">
            <Link to="/demo" className="gradient-btn px-8 py-3.5">Book a demo</Link>
            <Link to="/contact" className="ghost-btn px-8 py-3.5">Talk to sales</Link>
          </div>
          <div className="relative w-full max-w-lg mx-auto h-40 -mt-5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            <SparklesCore className="w-full h-full" background="transparent" particleColor="#ffffff" particleDensity={100} minSize={0.6} maxSize={1.4} speed={3} />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default BornaCarePage;
