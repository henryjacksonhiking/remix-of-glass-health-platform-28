import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layers, MessageSquare, CalendarCheck, RefreshCw, ArrowRight, Bot, Sparkles, CheckCircle2, XCircle, Filter, Zap, Users, Network, Stethoscope, BarChart3 } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SparklesCore } from "@/components/ui/sparkles-core";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (<span className="inline-block text-[11px] tracking-[0.18em] uppercase font-semibold text-primary mb-3">{children}</span>);
const fadeUp = { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.5 } };
const SectionDark = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (<section id={id} className={`relative py-12 md:py-20 border-t border-glass-border ${className}`}><div className="container mx-auto px-4 md:px-6 relative z-10">{children}</div></section>);

const faqData = [
  { q: "What is medical practice management software?", a: "Medical practice management software enables healthcare providers to manage patient interactions, scheduling, communication, and operations. Modern systems like Borna integrate CRM, communication, analytics, and automation into a unified platform." },
  { q: "How can medical practices improve operational efficiency?", a: "By integrating disconnected systems into one platform — centralizing patient data, automating administrative tasks, standardizing communication workflows, and gaining real-time operational visibility." },
  { q: "How does Borna help medical practices?", a: "Borna connects all operational layers — patient engagement, communication, scheduling, workflow automation, and AI-driven analytics — into one cohesive platform." },
  { q: "How does Borna improve patient care coordination?", a: "Borna centralizes all patient interactions into one system — ensuring continuity across appointments, providers, and communication channels." },
  { q: "Does Borna support group medical practices?", a: "Yes. Borna scales across multiple providers, departments, and locations — with centralized management and cross-location performance visibility." },
];

const MedicalPracticesPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Medical Practice Management Software | Patient Engagement & Automation | Borna AI</title>
      <meta name="description" content="Transform your medical practice with Borna AI. Improve patient engagement, streamline operations, and optimize performance with AI-powered healthcare software." />
      <link rel="canonical" href="https://borna.ai/industries/medical" />
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://borna.ai" }, { "@type": "ListItem", position: 2, name: "Industries", item: "https://borna.ai/industries" }, { "@type": "ListItem", position: 3, name: "Medical Practices", item: "https://borna.ai/industries/medical" }] })}</script>
    </Helmet>
    <nav aria-label="breadcrumb" className="container mx-auto px-4 md:px-6 pt-20 md:pt-20 pb-0 md:pb-2"><p className="text-xs text-muted-foreground"><Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/industries" className="hover:text-foreground">Industries</Link> / <span className="text-primary">Medical Practices</span></p></nav>

    <section className="relative py-16 md:py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <Eyebrow>Medical Practices</Eyebrow>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">AI platform for medical practices</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">Borna AI helps medical practices improve patient engagement, streamline operations, and optimize performance through a unified platform. From patient acquisition to care coordination and follow-up, Borna connects every part of your practice.</p>
            <div className="flex flex-row items-center gap-2 sm:gap-3"><Link to="/demo" className="gradient-btn whitespace-nowrap">Request Demo</Link><a href="#use-cases" className="ghost-btn whitespace-nowrap">Explore Healthcare Solutions</a></div>
          </motion.div>
          <motion.div {...fadeUp} aria-hidden="true">
            <div className="space-y-3">
              {[{ icon: Users, label: "Patient Layer", sub: "Acquisition · Engagement · Experience" }, { icon: MessageSquare, label: "Communication", sub: "Calls · SMS · Email · Chat" }, { icon: CalendarCheck, label: "Operations", sub: "Scheduling · Workflows · Admin" }, { icon: Bot, label: "Data & AI", sub: "Analytics · Insights · Optimization" }].map((layer, i) => (
                <div key={i} className="glass-panel rounded-xl p-4 flex items-center gap-4 border-l-2 border-primary/30">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0"><layer.icon className="w-4 h-4" /></div>
                  <div><p className="text-sm font-medium text-foreground">{layer.label}</p><p className="text-xs text-muted-foreground">{layer.sub}</p></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">What is medical practice management software?</h2><p className="text-muted-foreground leading-relaxed">Modern systems integrate CRM, communication, analytics, and automation to improve efficiency and patient outcomes — connecting what were previously siloed systems into one operational platform.</p></motion.div></SectionDark>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Challenges medical practices face</h2><p className="text-muted-foreground leading-relaxed mb-4">Most medical practices operate across 3–5 disconnected systems: an EHR, a scheduling tool, a phone system with no integration, email for follow-up, and spreadsheets for performance tracking. None talk to each other.</p><p className="text-foreground font-semibold mt-6">A practice running on disconnected tools is not running efficiently — it is running in spite of its systems.</p></motion.div></SectionDark>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">A unified platform for modern medical practices</h2><p className="text-muted-foreground leading-relaxed">Borna connects all four operational layers into one system. Patient data flows through communication, into operations, and down to the analytics layer — with insights flowing back up in real time.</p></motion.div></SectionDark>

    <SectionDark id="use-cases">
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How Borna helps medical practices</h2></motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Filter, badge: "Growth", title: "Patient Acquisition", body: "Capture every patient inquiry across all channels.", link: "/solutions/patient-acquisition", linkText: "Explore Patient Acquisition →" },
          { icon: RefreshCw, badge: "Loyalty", title: "Patient Retention", body: "Keep patients engaged with automated follow-ups and care continuity.", link: "/solutions/patient-retention", linkText: "Explore Patient Retention →" },
          { icon: MessageSquare, badge: "Connected", title: "Communication Management", body: "Manage all patient communication from one unified interface.", link: "/ecosystem/communication", linkText: "Explore Communication Layer →" },
          { icon: Zap, badge: "Automated", title: "Practice Automation", body: "Automate administrative tasks, reminders, and workflow coordination." },
          { icon: BarChart3, badge: "Insights", title: "Performance Analytics", body: "AI-driven insights into patient behavior, scheduling patterns, and operational performance." },
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

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Support for group and multi-location practices</h2><p className="text-muted-foreground leading-relaxed mb-4">For medical groups operating multiple offices, Borna provides centralized management across all locations.</p><Link to="/solutions/multi-location" className="text-sm text-primary hover:underline inline-flex items-center gap-1">Explore Multi-Location Management <ArrowRight className="w-3.5 h-3.5" /></Link></motion.div></SectionDark>

    <SectionDark><motion.div {...fadeUp} className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-bold text-foreground">Key takeaways</h2></motion.div><div className="grid grid-cols-2 md:grid-cols-4 gap-4">{["Borna unifies all operational layers of a medical practice into one platform", "Automated workflows reduce administrative burden", "AI continuously optimizes patient engagement and operational performance", "Scalable from single practices to multi-location medical groups"].map((t, i) => (<motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-4 text-center"><Sparkles className="w-5 h-5 text-primary mx-auto mb-2" /><p className="text-xs text-muted-foreground">{t}</p></motion.div>))}</div></SectionDark>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto"><h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">Frequently asked questions</h2><Accordion type="single" collapsible>{faqData.map((f, i) => (<AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger>{f.q}</AccordionTrigger><AccordionContent>{f.a}</AccordionContent></AccordionItem>))}</Accordion></motion.div></SectionDark>

    <section className="py-12 md:py-12 relative overflow-hidden"><div className="container mx-auto px-4 md:px-6 relative z-10 text-center"><h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Transform your medical practice with Borna AI.</h2><p className="text-muted-foreground max-w-xl mx-auto mb-8">Improve patient engagement, streamline operations, and optimize performance — through one connected platform.</p><div className="cta-row"><Link to="/demo" className="gradient-btn whitespace-nowrap">Request Demo</Link><Link to="/platform" className="ghost-btn whitespace-nowrap">Explore Platform →</Link></div><div className="relative w-full max-w-lg mx-auto h-40 mt-8"><div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" /><SparklesCore className="w-full h-full" background="transparent" particleColor="#ffffff" particleDensity={80} minSize={0.6} maxSize={1.4} speed={3} /></div></div></section>
  </PageWrapper>
);
export default MedicalPracticesPage;
