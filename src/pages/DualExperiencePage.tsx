import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Smartphone,
  Monitor,
  Calendar,
  MessageSquare,
  CreditCard,
  FileText,
  Star,
  Users,
  BarChart3,
  RefreshCcw,
  ArrowRight,
  CheckCircle2,
  Zap,
  Heart,
  Eye,
  Layers,
  Activity,
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ============================================================
   HERO — Split System Visual
   ============================================================ */
const DualPanelHero = () => {
  const reduced = useReducedMotion();

  return (
    <div className="relative w-full max-w-[520px] mx-auto">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center">
        {/* Patient Side */}
        <div className="relative">
          <span className="text-[10px] uppercase tracking-wider text-primary/70 block mb-2">Patient experience</span>
          <div className="rounded-2xl border border-white/[0.1] bg-white/[0.03] p-4 backdrop-blur-sm" style={{ boxShadow: "0 0 30px rgba(0,222,196,0.06)" }}>
            <div className="text-xs text-foreground/80 mb-3 font-medium">Welcome back</div>
            <div className="grid grid-cols-2 gap-2">
              {[{ Icon: Calendar, l: "Booking" }, { Icon: MessageSquare, l: "Messages" }, { Icon: CreditCard, l: "Payments" }, { Icon: FileText, l: "Forms" }].map((item) => (
                <div key={item.l} className="flex items-center gap-1.5 text-[9px] text-muted-foreground bg-white/[0.04] rounded-lg px-2 py-1.5">
                  <item.Icon className="w-3 h-3 text-primary/70" />{item.l}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center sync */}
        <div className="flex flex-col items-center h-full justify-center py-6">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent relative min-h-[80px]">
            {!reduced && (
              <>
                <motion.div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{ y: [0, 80, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                <motion.div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/70"
                  animate={{ y: [80, 0, 80] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
              </>
            )}
          </div>
          <div className="w-5 h-5 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center my-1">
            <RefreshCcw className="w-2.5 h-2.5 text-primary" />
          </div>
        </div>

        {/* Office Side */}
        <div className="relative">
          <span className="text-[10px] uppercase tracking-wider text-primary/70 block mb-2 text-right">Office experience</span>
          <div className="rounded-2xl border border-white/[0.1] bg-white/[0.03] p-4 backdrop-blur-sm" style={{ boxShadow: "0 0 30px rgba(0,222,196,0.08)" }}>
            <div className="text-xs text-foreground/80 mb-3 font-medium">Dashboard</div>
            <div className="space-y-1.5">
              {["Patient list", "Schedule", "Messages", "Analytics"].map((item) => (
                <div key={item} className="text-[9px] text-muted-foreground bg-white/[0.04] rounded px-2 py-1">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) => (
  <section id={id} className={`py-12 md:py-20 md:py-12 md:py-12 md:py-20 ${className}`}>
    <div className="container mx-auto px-4 md:px-6">{children}</div>
  </section>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const DualExperiencePage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Patient Experience vs Practice Management Platform | Borna AI Healthcare System</title>
        <meta name="description" content="Compare patient experience and office management in Borna AI. Discover how dual interfaces improve engagement, efficiency, and healthcare operations." />
        <link rel="canonical" href="https://borna.ai/ecosystem/dual-experience" />
        <script type="application/ld+json">{JSON.stringify([
          { "@context": "https://schema.org", "@type": "WebPage", name: "Patient and Office Experience Platform", description: "Dual healthcare platform for patient experience and office management." },
          { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Borna Patient & Office Experience Platform", applicationCategory: "HealthApplication", description: "Healthcare platform connecting patient and provider experiences." },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://borna.ai" },
            { "@type": "ListItem", position: 2, name: "Ecosystem", item: "https://borna.ai/ecosystem" },
            { "@type": "ListItem", position: 3, name: "Patient vs Office Experience", item: "https://borna.ai/ecosystem/dual-experience" },
          ]},
          { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "What is a patient experience platform?", acceptedAnswer: { "@type": "Answer", text: "A patient experience platform allows patients to interact with their healthcare provider — scheduling, completing forms, making payments, and communicating — through a seamless interface." }},
            { "@type": "Question", name: "What is office experience in healthcare software?", acceptedAnswer: { "@type": "Answer", text: "Office experience refers to internal tools and dashboards that healthcare teams use to manage patient data, scheduling, communication, and workflows." }},
            { "@type": "Question", name: "How does Borna connect patient and office experiences?", acceptedAnswer: { "@type": "Answer", text: "Borna synchronizes both sides in real time through a shared data layer. Both sides always share the same accurate, current information." }},
            { "@type": "Question", name: "What can patients do through the Borna patient experience?", acceptedAnswer: { "@type": "Answer", text: "Patients can book appointments, complete digital forms, make payments, and communicate through SMS, chat, and email." }},
            { "@type": "Question", name: "What can practice staff manage through the Borna office experience?", acceptedAnswer: { "@type": "Answer", text: "Staff can manage patient records, control scheduling, centralize communication, coordinate workflows, and access performance data." }},
          ]},
        ])}</script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 pt-20 md:pt-20 md:pt-24 pb-0 md:pb-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/ecosystem">Ecosystem</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage className="text-primary">Patient vs Office Experience</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* HERO */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-primary text-xs uppercase tracking-widest font-medium">Dual Experience Platform</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              Patient experience and office management in one unified platform
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Borna AI delivers a dual-experience platform designed for both patients and healthcare providers. While patients enjoy a seamless digital experience, offices gain full control over operations, communication, and data — creating a connected and efficient healthcare environment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/products/borna-care" className="gradient-btn text-sm">Explore Borna Care →</Link>
              <Link to="/demo" className="text-sm font-medium rounded-lg px-5 py-3 border border-white/[0.18] text-white/85 hover:bg-white/[0.08] transition-all">
                Request demo
              </Link>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <DualPanelHero />
          </motion.div>
        </div>
      </Section>

      {/* DEFINITION */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What is patient experience vs office experience in healthcare?</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Patient experience refers to how patients interact with a healthcare provider through digital tools — scheduling, communication, and payments. Office experience refers to how healthcare teams manage operations, patient data, workflows, and communication internally. A unified system connects both experiences seamlessly.
          </p>
          <div className="flex justify-center gap-12 mb-6">
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-primary" />
              <span className="text-xs text-muted-foreground">Patient Experience</span>
            </div>
            <div className="w-px h-6 bg-primary/30" />
            <div className="flex items-center gap-2">
              <Monitor className="w-5 h-5 text-primary" />
              <span className="text-xs text-muted-foreground">Office Experience</span>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </motion.div>
      </Section>

      {/* PROBLEM */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The disconnect between patients and healthcare operations</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most healthcare software treats patient experience and office management as separate domains — a patient portal here, an internal system there, with no real-time connection between them. Patients use one app; staff use another. Data doesn't flow between them automatically.
          </p>
          <p className="font-semibold text-foreground mb-8">When the two sides don't talk, both sides lose.</p>
          {/* Disconnected panels */}
          <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-center max-w-sm mx-auto">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 text-center opacity-50">
              <Smartphone className="w-6 h-6 text-muted-foreground/40 mx-auto mb-2" />
              <span className="text-[10px] text-muted-foreground/40">Patient</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-px h-12 border-l border-dashed border-white/[0.08]" />
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 text-center opacity-50">
              <Monitor className="w-6 h-6 text-muted-foreground/40 mx-auto mb-2" />
              <span className="text-[10px] text-muted-foreground/40">Office</span>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* SOLUTION */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">A connected experience for patients and providers</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Borna bridges the gap — connecting patient-facing digital tools directly to internal practice management systems through a shared data layer and synchronized communication. Both sides operate independently and intuitively, while staying perfectly in sync.
          </p>
        </motion.div>
      </Section>

      {/* PATIENT EXPERIENCE */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">The patient experience with Borna AI</h2>
          <p className="text-muted-foreground">Patients interact with Borna through a clean, branded digital interface — accessible on any device, at any time.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { Icon: Smartphone, title: "Digital access", desc: "Web-based and mobile access — easy login, clean navigation, any device." },
            { Icon: Calendar, title: "Online scheduling", desc: "View real availability and book appointments directly — no phone calls required." },
            { Icon: MessageSquare, title: "Patient communication", desc: "SMS, chat, and email — the patient reaches out through whichever channel they prefer." },
            { Icon: FileText, title: "Forms & intake", desc: "Digital forms completed before the appointment — no paper, no waiting room delays." },
            { Icon: CreditCard, title: "Secure payments", desc: "Pay invoices, view billing history, and manage transactions securely online." },
            { Icon: Star, title: "Branded experience", desc: "A white-label interface that reflects the practice's identity, not generic software." },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.08 } } }}
              className="rounded-xl p-5 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] transition-all">
              <item.Icon className="w-5 h-5 text-primary mb-3" />
              <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* OFFICE EXPERIENCE */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">The office experience for healthcare teams</h2>
          <p className="text-muted-foreground">Practice staff work from a structured office dashboard — a centralized control center for every aspect of patient management.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { Icon: Users, title: "Patient management", desc: "Access full patient profiles, records, and interaction history in one place." },
            { Icon: Calendar, title: "Scheduling & availability", desc: "Control appointment slots, manage calendars, and prevent scheduling conflicts." },
            { Icon: MessageSquare, title: "Communication management", desc: "All patient communications — calls, SMS, email, chat — centralized in one view." },
            { Icon: Activity, title: "Workflow control", desc: "Coordinate tasks, manage processes, and automate routine administrative workflows." },
            { Icon: BarChart3, title: "Data & insights", desc: "Monitor operational performance, patient metrics, and practice health in real time." },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.08 } } }}
              className="rounded-xl p-5 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] transition-all">
              <item.Icon className="w-5 h-5 text-primary mb-3" />
              <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SYNCHRONIZATION */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Connecting patient and office experiences</h2>
          <p className="text-muted-foreground leading-relaxed">
            When a patient books an appointment, the office calendar updates immediately. When a patient sends a message, it appears in the office communication hub. Both sides operate on the same data, at the same time.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { Icon: RefreshCcw, title: "Real-time synchronization", desc: "Data updated on either side is immediately reflected on the other — no manual syncing." },
            { Icon: Layers, title: "Shared data foundation", desc: "Both interfaces draw from and write to the same unified patient record." },
            { Icon: CheckCircle2, title: "Consistent communication", desc: "All communication is captured in one place regardless of who initiates it." },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.1 } } }}
              className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-center">
              <item.Icon className="w-6 h-6 text-primary mx-auto mb-4" />
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* REAL-TIME ENGAGEMENT */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Real-time engagement between patients and staff</h2>
          <p className="text-muted-foreground leading-relaxed">
            Communication in Borna is not one-directional. Patients can reach the practice through their preferred channel — and the practice can reach patients through the same unified system.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { Icon: Zap, title: "Instant communication", desc: "Messages, confirmations, and alerts delivered in real time — no queuing." },
            { Icon: RefreshCcw, title: "Immediate updates", desc: "Scheduling changes, form submissions, and payments reflect on both sides instantly." },
            { Icon: Heart, title: "Seamless interaction", desc: "Patients and staff interact as if they're using one system — because they are." },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.1 } } }}
              className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-center">
              <item.Icon className="w-6 h-6 text-primary mx-auto mb-4" />
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ECOSYSTEM CONNECTION */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Integrated across the Borna ecosystem</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The patient and office experiences don't exist in isolation — they are the visible surfaces of a much deeper system. Every interaction on either side is captured by the Communication Layer, enriched by the CRM & Lifecycle Layer, structured by the Data & Integration Layer, and made intelligent by the AI Intelligence Layer.
            </p>
            <Link to="/ecosystem" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline">
              Explore the full ecosystem <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex justify-center">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mx-auto mb-1">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[10px] text-muted-foreground">Patient</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mx-auto mb-1">
                  <Monitor className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[10px] text-muted-foreground">Office</span>
              </div>
              <ArrowRight className="w-4 h-4 text-primary" />
              <div className="text-center">
                <div className="w-14 h-14 rounded-full border border-primary/40 bg-primary/15 flex items-center justify-center mx-auto mb-1">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[10px] text-muted-foreground">Ecosystem</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* BUSINESS VALUE */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why dual experience matters in healthcare</h2>
          <p className="text-muted-foreground leading-relaxed">
            For patients, it means less friction and more convenience. For practices, it means less administrative burden and more visibility. And when both sides work better, outcomes improve for everyone.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">Patient outcomes</h3>
            <div className="space-y-3">
              {["Better convenience — easier booking, digital forms, seamless communication", "Greater engagement — timely reminders, personalized outreach", "More satisfaction — consistent, branded, professional experience"].map((text, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="w-px h-full bg-primary/20" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">Practice outcomes</h3>
            <div className="space-y-3">
              {["Reduced admin workload — automation replaces manual processes", "Improved efficiency — centralized communication eliminates tool-switching", "Better control — full visibility into interactions and performance"].map((text, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How the dual experience platform works</h2>
          <p className="text-muted-foreground">Four steps — from patient action to synchronized outcome.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { n: 1, Icon: Smartphone, title: "Patient acts", desc: "Patient books, sends a message, submits a form, or makes a payment" },
            { n: 2, Icon: RefreshCcw, title: "System syncs", desc: "Borna's unified data layer instantly synchronizes across both sides" },
            { n: 3, Icon: Monitor, title: "Office responds", desc: "The office team sees the update and can respond in real time" },
            { n: 4, Icon: CheckCircle2, title: "Outcome", desc: "Both sides benefit — patient gets confirmation, practice gains accurate info" },
          ].map((step) => (
            <motion.div key={step.n} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: step.n * 0.08 } } }}
              className="rounded-xl p-5 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-center">
              <div className="w-8 h-8 rounded-full bg-primary/15 text-primary text-sm font-bold flex items-center justify-center mx-auto mb-3">{step.n}</div>
              <step.Icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <h4 className="text-sm font-semibold mb-1">{step.title}</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* KEY TAKEAWAYS */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Key takeaways</h2>
        </motion.div>
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 max-w-4xl mx-auto mb-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm font-medium">Patients enjoy seamless digital access to booking, communication, forms, and payments</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm font-medium">A branded, consistent experience that reflects the practice's identity</p>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="w-px h-full bg-primary/20" />
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm font-medium">Staff gain full visibility and control over scheduling, communication, and workflows</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm font-medium">Real-time synchronization ensures office systems always reflect patient activity</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex items-start gap-3 max-w-md">
            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm font-medium">Both sides operate within one unified system — improving engagement and efficiency for everyone</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "What is a patient experience platform?", a: "A patient experience platform is a digital system that allows patients to interact with their healthcare provider — scheduling appointments, completing forms, making payments, and communicating — through a seamless, accessible interface." },
              { q: "What is office experience in healthcare software?", a: "Office experience refers to the internal dashboard and tools that healthcare teams use to manage patient data, scheduling, communication, workflows, and operational performance." },
              { q: "How does Borna connect patient and office experiences?", a: "Borna synchronizes both sides in real time through a shared data layer. When a patient books an appointment, the office calendar updates immediately. Both sides always share the same accurate, current information." },
              { q: "What can patients do through the Borna patient experience?", a: "Patients can book appointments online, complete digital intake forms, make secure payments, and communicate with the practice through SMS, chat, and email — all through a branded interface." },
              { q: "What can practice staff manage through the Borna office experience?", a: "Staff can manage patient records, control scheduling, centralize all communication, coordinate and automate workflows, and access real-time performance data — all from one unified dashboard." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-white/[0.08] rounded-xl bg-white/[0.02] px-5">
                <AccordionTrigger className="text-sm font-medium text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Section>

      {/* FINAL CTA */}
      <section className="py-12 md:py-12 md:py-20 md:py-16 md:py-12 md:py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Deliver better experiences on both sides.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Borna AI ensures that patients and providers are connected in one seamless system — improving engagement, reducing friction, and creating a healthcare experience that works better for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/demo" className="gradient-btn text-sm">Request demo</Link>
              <Link to="/products/borna-care" className="text-sm font-medium rounded-lg px-5 py-3 border border-white/[0.18] text-white/85 hover:bg-white/[0.08] transition-all">
                Explore Borna Care →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default DualExperiencePage;
