import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CalendarCheck, MessageSquare, RefreshCw, ArrowRight, Bot, BarChart3, Sparkles, CheckCircle2, XCircle, Users, TrendingUp, Network, Phone, Filter, Zap, Heart } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SparklesCore } from "@/components/ui/sparkles-core";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (<span className="inline-block text-[11px] tracking-[0.18em] uppercase font-semibold text-primary mb-3">{children}</span>);
const fadeUp = { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.5 } };
const SectionDark = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (<section id={id} className={`relative py-12 md:py-20 border-t border-glass-border ${className}`}><div className="container mx-auto px-4 md:px-6 relative z-10">{children}</div></section>);

const faqData = [
  { q: "What is dental practice management software?", a: "Dental practice management software helps offices manage patient interactions, scheduling, communication, and operations. Modern platforms like Borna integrate communication, CRM, analytics, and automation into one system." },
  { q: "How can dental practices get more patients?", a: "By capturing every inquiry from calls, forms, and referrals; responding immediately; following up consistently; and tracking which marketing activities convert to booked appointments." },
  { q: "How does Borna help dental practices grow?", a: "Borna connects patient acquisition, communication, scheduling, retention, and automation into one platform." },
  { q: "How does Borna help reduce no-shows?", a: "Borna automates appointment reminders through SMS, email, and phone. When a cancellation occurs, an automated rebooking prompt is sent immediately." },
  { q: "Does Borna support multi-location dental practices and DSOs?", a: "Yes. Borna is built for scalable multi-location management — centralizing operations, communication, and performance data across all locations." },
];

const DentalPracticesPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Dental Practice Management & Patient Engagement Software | Borna AI</title>
      <meta name="description" content="Grow your dental practice with Borna AI. Improve patient acquisition, retention, scheduling, and communication with AI-powered dental practice software." />
      <link rel="canonical" href="https://borna.ai/industries/dental" />
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://borna.ai" }, { "@type": "ListItem", position: 2, name: "Industries", item: "https://borna.ai/industries" }, { "@type": "ListItem", position: 3, name: "Dental Practices", item: "https://borna.ai/industries/dental" }] })}</script>
    </Helmet>
    <nav aria-label="breadcrumb" className="container mx-auto px-4 md:px-6 pt-20 md:pt-20 pb-0 md:pb-2"><p className="text-xs text-muted-foreground"><Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/industries" className="hover:text-foreground">Industries</Link> / <span className="text-primary">Dental Practices</span></p></nav>

    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <Eyebrow>Dental Practices</Eyebrow>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">AI-powered platform for dental practices</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">Borna AI helps dental practices attract more patients, improve retention, streamline operations, and increase production. From patient acquisition to long-term engagement, Borna connects every part of your dental practice into one intelligent system.</p>
            <div className="flex flex-row items-center gap-2 sm:gap-3"><Link to="/demo" className="gradient-btn whitespace-nowrap">Request Demo</Link><a href="#use-cases" className="ghost-btn whitespace-nowrap">See Dental Solutions</a></div>
          </motion.div>
          <motion.div {...fadeUp} aria-hidden="true">
            <svg viewBox="0 0 400 180" className="w-full max-w-md mx-auto">
              {[{ x: 50, l: "Inquiry", icon: "📞" }, { x: 160, l: "Booked", icon: "📅" }, { x: 270, l: "Treated", icon: "🦷" }, { x: 380, l: "Follow-Up", icon: "💬" }].map((s, i) => (
                <g key={s.l}>
                  <circle cx={s.x} cy={60} r="16" className="fill-primary/10 stroke-primary/40" strokeWidth="1" />
                  <text x={s.x} y={64} textAnchor="middle" fontSize="14">{s.icon}</text>
                  <text x={s.x} y={90} textAnchor="middle" className="fill-foreground" fontSize="9" fontWeight="500">{s.l}</text>
                  {i < 3 && <line x1={s.x + 16} y1={60} x2={s.x + 94} y2={60} className="stroke-primary/30" strokeWidth="1" />}
                </g>
              ))}
              <circle cx="215" cy="140" r="14" className="fill-primary/10 stroke-primary/50" strokeWidth="1"><animate attributeName="r" values="14;16;14" dur="3s" repeatCount="indefinite" /></circle>
              <text x="215" y="143" textAnchor="middle" className="fill-primary" fontSize="6" fontWeight="600">Borna AI</text>
              {[50, 160, 270, 380].map((x) => (<line key={x} x1={x} y1={76} x2="215" y2="126" className="stroke-primary/15" strokeWidth="0.5" />))}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">What is dental practice management software?</h2><p className="text-muted-foreground leading-relaxed">Modern platforms integrate communication, CRM, data analytics, and automation into a unified system — connecting every stage of the patient journey from first contact to long-term loyalty.</p></motion.div></SectionDark>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Challenges dental practices face today</h2><p className="text-muted-foreground leading-relaxed mb-4">Most dental practices run on disconnected systems. Leads from calls, online forms, and referrals are often never followed up. Appointments are confirmed late. Patients who haven't been in for months are never reactivated.</p><p className="text-foreground font-semibold mt-6">Every missed call, every no-show, every lapsed patient is production that could have been kept.</p></motion.div></SectionDark>

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">A unified platform for dental growth and efficiency</h2><p className="text-muted-foreground leading-relaxed">Borna connects every stage of the dental patient journey — capturing inquiries from every channel, guiding leads to booked appointments, automating confirmations and reminders, and reactivating patients who haven't returned.</p></motion.div></SectionDark>

    <SectionDark id="use-cases">
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How Borna helps dental practices grow</h2></motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Filter, badge: "Growth", title: "Patient Acquisition", body: "Capture every new patient inquiry — from calls, forms, ads, and referrals.", link: "/solutions/patient-acquisition", linkText: "Explore Patient Acquisition →" },
          { icon: RefreshCw, badge: "Loyalty", title: "Patient Retention", body: "Keep patients returning with automated recall reminders, follow-ups, and reactivation campaigns.", link: "/solutions/patient-retention", linkText: "Explore Patient Retention →" },
          { icon: CalendarCheck, badge: "Efficiency", title: "Appointment Scheduling", body: "Automate booking confirmations, reminders, and rescheduling prompts." },
          { icon: MessageSquare, badge: "Connected", title: "Communication Management", body: "Manage all patient communication — SMS, phone, email, and chat — from one interface.", link: "/ecosystem/communication", linkText: "Explore Communication Layer →" },
          { icon: Zap, badge: "Automated", title: "Practice Automation", body: "Automate reminders, follow-ups, recall notifications, and administrative workflows." },
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

    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Manage multi-location dental practices</h2><p className="text-muted-foreground leading-relaxed mb-4">For dental organizations operating multiple offices, Borna provides centralized management across all locations.</p><Link to="/solutions/multi-location" className="text-sm text-primary hover:underline inline-flex items-center gap-1">Explore Multi-Location Management <ArrowRight className="w-3.5 h-3.5" /></Link></motion.div></SectionDark>

    <SectionDark>
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground">Why dental practices choose Borna</h2></motion.div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="glass-panel rounded-2xl p-6 opacity-60"><p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Without a Unified System</p>{["Missed calls and unanswered inquiries", "No systematic follow-up process", "High no-show rate with no recovery", "No visibility into which marketing works", "Front desk overwhelmed"].map((t) => (<div key={t} className="flex items-start gap-2 mb-2"><XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" /><span className="text-sm text-muted-foreground">{t}</span></div>))}</div>
        <div className="glass-panel rounded-2xl p-6 border-primary/20"><p className="text-xs text-primary uppercase tracking-wider mb-4">With Borna</p>{["Every lead captured and responded to immediately", "Automated follow-up at every stage", "No-shows recovered with instant rebooking", "Full acquisition tracking from source to patient", "Staff freed from repetitive workflows"].map((t) => (<div key={t} className="flex items-start gap-2 mb-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span className="text-sm text-foreground">{t}</span></div>))}</div>
      </div>
      <p className="text-center text-foreground font-semibold mt-8">More patients. More production. Smoother operations.</p>
    </SectionDark>

    <SectionDark><motion.div {...fadeUp} className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-bold text-foreground">Key takeaways</h2></motion.div><div className="grid grid-cols-2 md:grid-cols-4 gap-4">{["Borna connects acquisition, communication, scheduling, retention, and automation for dental practices", "Automated workflows reduce front desk workload", "AI continuously analyzes patient behavior and practice performance", "From single offices to DSOs, Borna scales without adding complexity"].map((t, i) => (<motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-4 text-center"><Sparkles className="w-5 h-5 text-primary mx-auto mb-2" /><p className="text-xs text-muted-foreground">{t}</p></motion.div>))}</div></SectionDark>

    <StandardFAQ items={faqData} />

    <section className="py-12 md:py-20 relative overflow-hidden"><div className="container mx-auto px-4 md:px-6 relative z-10 text-center"><h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Grow your dental practice with Borna AI.</h2><p className="text-muted-foreground max-w-xl mx-auto mb-8">Borna AI helps dental practices attract more patients, improve efficiency, and increase production — through one connected platform.</p><div className="cta-row"><Link to="/demo" className="gradient-btn whitespace-nowrap">Request Demo</Link><Link to="/platform" className="ghost-btn whitespace-nowrap">Explore Platform →</Link></div><div className="relative w-full max-w-lg mx-auto h-40 mt-8"><div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" /><SparklesCore className="w-full h-full" background="transparent" particleColor="#ffffff" particleDensity={80} minSize={0.6} maxSize={1.4} speed={3} /></div></div></section>
  </PageWrapper>
);
export default DentalPracticesPage;
