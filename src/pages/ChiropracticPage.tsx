import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CalendarCheck, MessageSquare, RefreshCw, ArrowRight, Bot, Sparkles, CheckCircle2, XCircle, Filter, Zap, Heart, Activity, Repeat, Radar, Building2 } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import StandardFAQ from "@/components/sections/StandardFAQ";
import KeyTakeaways from "@/components/sections/KeyTakeaways";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SparklesCore } from "@/components/ui/sparkles-core";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (<span className="inline-block text-[11px] tracking-[0.18em] uppercase font-semibold text-primary mb-3">{children}</span>);
const fadeUp = { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.5 } };
const SectionDark = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (<section id={id} className={`relative py-12 md:py-20 border-t border-glass-border ${className}`}><div className="container mx-auto px-4 md:px-6 relative z-10">{children}</div></section>);

const faqData = [
  { q: "What is chiropractic practice software?", a: "Chiropractic practice software helps clinics manage patient interactions, scheduling, communication, and care plans. Advanced platforms like Borna integrate automation, CRM, and analytics to support recurring care management." },
  { q: "How can chiropractic clinics improve patient retention?", a: "By managing care plans systematically, maintaining consistent follow-up, automating recall reminders, and proactively identifying patients at risk of dropping off." },
  { q: "How does Borna help chiropractic clinics grow?", a: "Borna connects patient acquisition, recurring care plan management, automated scheduling, and retention into one platform." },
  { q: "How does Borna support chiropractic care plan management?", a: "Borna schedules recurring visits, tracks patient adherence, automates follow-up reminders, and surfaces patients falling behind in visits." },
  { q: "How does Borna reduce no-shows for chiropractic clinics?", a: "Borna automates multi-step appointment reminders through SMS, email, and phone. When a cancellation occurs, an automated rebooking prompt keeps patients in their care plan." },
];

const ChiropracticPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Chiropractic Practice Software | Patient Retention & Growth Platform | Borna AI</title>
      <meta name="description" content="Grow your chiropractic clinic with Borna AI. Improve patient retention, automate scheduling, and increase recurring visits with AI-powered communication and insights." />
      <link rel="canonical" href="https://borna.ai/industries/chiropractic" />
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://borna.ai" }, { "@type": "ListItem", position: 2, name: "Industries", item: "https://borna.ai/industries" }, { "@type": "ListItem", position: 3, name: "Chiropractic Clinics", item: "https://borna.ai/industries/chiropractic" }] })}</script>
    </Helmet>
    <nav aria-label="breadcrumb" className="container mx-auto px-4 md:px-6 pt-20 md:pt-20 pb-0 md:pb-2"><p className="text-xs text-muted-foreground"><Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/industries" className="hover:text-foreground">Industries</Link> / <span className="text-primary">Chiropractic Clinics</span></p></nav>

    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <Eyebrow>Chiropractic Clinics</Eyebrow>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">AI platform for chiropractic clinics</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">Borna AI helps chiropractic clinics attract new patients, improve retention, and manage recurring care plans through intelligent automation and communication.</p>
            <div className="flex flex-row items-center gap-2 sm:gap-3"><Link to="/demo" className="gradient-btn whitespace-nowrap">Request Demo</Link><a href="#use-cases" className="ghost-btn whitespace-nowrap">See Chiropractic Solutions</a></div>
          </motion.div>
          <motion.div {...fadeUp} className="flex items-center justify-center w-full" aria-hidden="true">
            <svg viewBox="0 0 360 360" className="w-full max-w-sm md:max-w-md h-auto" preserveAspectRatio="xMidYMid meet">
              <ellipse cx="180" cy="180" rx="120" ry="120" fill="none" className="stroke-primary/40" strokeWidth="1.5" />
              {[{ a: 270, l: "Visit" }, { a: 0, l: "Follow-Up" }, { a: 90, l: "Next Appt" }, { a: 180, l: "Return" }].map((node) => {
                const rad = (node.a * Math.PI) / 180;
                const x = 180 + 120 * Math.cos(rad);
                const y = 180 + 120 * Math.sin(rad);
                return (
                  <g key={node.l}>
                    <circle cx={x} cy={y} r="30" className="fill-primary/15 stroke-primary/60" strokeWidth="1.5" />
                    <text x={x} y={y + 5} textAnchor="middle" className="fill-foreground" fontSize="13" fontWeight="600">{node.l}</text>
                  </g>
                );
              })}
              <circle r="5" className="fill-primary"><animateMotion dur="5s" repeatCount="indefinite" path="M180,60 A120,120 0 1,1 179.9,60" /></circle>
              <circle r="4" className="fill-primary/60"><animateMotion dur="5s" repeatCount="indefinite" begin="2.5s" path="M180,60 A120,120 0 1,1 179.9,60" /></circle>
              <text x="180" y="186" textAnchor="middle" className="fill-foreground" fontSize="14" fontWeight="600">Active Care Plan</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">What is chiropractic practice software?</h2><p className="text-muted-foreground leading-relaxed">Chiropractic practice software helps clinics manage patient interactions, scheduling, communication, and care plans. Advanced platforms integrate automation, CRM, and analytics to support long-term patient relationships and recurring care management.</p></motion.div></SectionDark>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Challenges chiropractic clinics face</h2><p className="text-muted-foreground leading-relaxed mb-4">The business model depends on patients returning consistently for their full care plan. Without systematic follow-up, patients drift — they miss one appointment, intend to reschedule, and never return.</p><p className="text-foreground font-semibold mt-6">Every patient who drops off a care plan early represents both a clinical gap and a revenue loss.</p></motion.div></SectionDark>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">A system designed for recurring care</h2><p className="text-muted-foreground leading-relaxed">Borna closes the gaps. Automated follow-up sequences keep patients on schedule. When a patient misses an appointment, the system detects the gap and sends a re-engagement prompt immediately.</p></motion.div></SectionDark>

    <SectionDark id="use-cases">
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How Borna supports chiropractic clinics</h2></motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Filter, badge: "Growth", title: "Patient Acquisition", body: "Capture every new patient inquiry from calls, forms, referrals, and campaigns.", link: "/solutions/patient-acquisition", linkText: "Explore Patient Acquisition →" },
          { icon: RefreshCw, badge: "Recurring Care", title: "Patient Retention & Care Plans", body: "Keep patients adherent to their care plan through automated reminders and proactive re-engagement.", link: "/solutions/patient-retention", linkText: "Explore Patient Retention →" },
          { icon: CalendarCheck, badge: "Automated", title: "Appointment Scheduling", body: "Automate the scheduling of recurring appointments across a care plan." },
          { icon: MessageSquare, badge: "Connected", title: "Communication Management", body: "Manage all patient communication from one unified interface.", link: "/ecosystem/communication", linkText: "Explore Communication Layer →" },
          { icon: Zap, badge: "Efficient", title: "Practice Automation", body: "Automate reminders, follow-ups, recall notifications, and post-visit check-ins." },
        ].map((card, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-2xl p-6 hover:bg-glass-hover transition-all">
            <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><card.icon className="w-5 h-5" /></div><span className="text-[10px] uppercase tracking-wider font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{card.badge}</span></div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{card.body}</p>
            {card.link && <Link to={card.link} className="text-sm text-primary hover:underline inline-flex items-center gap-1">{card.linkText} <ArrowRight className="w-3.5 h-3.5" /></Link>}
          </motion.div>
        ))}
      </div>
    </SectionDark>

    <SectionDark><motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground">Why chiropractic clinics choose Borna</h2></motion.div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="glass-panel rounded-2xl p-6 opacity-60"><p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Without a System</p>{["Patients drop off care plans", "No follow-up between visits", "High no-show rate", "No visibility into care plan adherence", "Revenue unpredictable"].map((t) => (<div key={t} className="flex items-start gap-2 mb-2"><XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" /><span className="text-sm text-muted-foreground">{t}</span></div>))}</div>
        <div className="glass-panel rounded-2xl p-6 border-primary/20"><p className="text-xs text-primary uppercase tracking-wider mb-4">With Borna</p>{["Automated care plan management", "Follow-ups between every visit", "No-shows recovered with rebooking", "Full visibility into patient adherence", "Predictable recurring revenue"].map((t) => (<div key={t} className="flex items-start gap-2 mb-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span className="text-sm text-foreground">{t}</span></div>))}</div>
      </div>
    </SectionDark>

    <KeyTakeaways
      items={[
        { icon: Repeat, text: "Borna manages the recurring care cycle for chiropractic clinics" },
        { icon: CalendarCheck, text: "Automated follow-ups keep patients on schedule" },
        { icon: Radar, text: "AI identifies patients at risk of dropping off care plans" },
        { icon: Building2, text: "From single clinics to multi-location groups, Borna scales" },
      ]}
    />

    <StandardFAQ items={faqData} />

    <section className="py-12 md:py-20 relative overflow-hidden"><div className="container mx-auto px-4 md:px-6 relative z-10 text-center"><h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Grow your chiropractic clinic with Borna AI.</h2><p className="text-muted-foreground max-w-xl mx-auto mb-8">Manage recurring care plans, improve retention, and increase revenue — through one connected platform built for chiropractic clinics.</p><div className="cta-row"><Link to="/demo" className="gradient-btn whitespace-nowrap">Request Demo</Link><Link to="/platform" className="ghost-btn whitespace-nowrap">Explore Platform →</Link></div><div className="relative w-full max-w-lg mx-auto h-40 mt-8"><div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" /><SparklesCore className="w-full h-full" background="transparent" particleColor="#ffffff" particleDensity={80} minSize={0.6} maxSize={1.4} speed={3} /></div></div></section>
  </PageWrapper>
);
export default ChiropracticPage;
