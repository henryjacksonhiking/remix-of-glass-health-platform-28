import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Filter, UserPlus, Phone, Globe, MessageSquare, Mail, Zap, BarChart3,
  CalendarCheck, Target, TrendingUp, ArrowRight, Bot, Search, DollarSign,
  CheckCircle2, XCircle, Sparkles, Layers,
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SparklesCore } from "@/components/ui/sparkles-core";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-[11px] tracking-[0.18em] uppercase font-semibold text-primary mb-3">{children}</span>
);

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5 },
};

const SectionDark = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`relative py-20 md:py-28 border-t border-glass-border ${className}`}>
    <div className="container mx-auto px-4 md:px-6 relative z-10">{children}</div>
  </section>
);

const GlassCard = ({ icon: Icon, badge, title, body, link, linkText }: {
  icon: React.ComponentType<{ className?: string }>;
  badge?: string; title: string; body: string; link?: string; linkText?: string;
}) => (
  <motion.div {...fadeUp} className="glass-panel rounded-2xl p-6 hover:bg-glass-hover transition-all duration-300 group">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><Icon className="w-5 h-5" /></div>
      {badge && <span className="text-[10px] uppercase tracking-wider font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{badge}</span>}
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{body}</p>
    {link && <Link to={link} className="text-sm text-primary hover:underline inline-flex items-center gap-1">{linkText} <ArrowRight className="w-3.5 h-3.5" /></Link>}
  </motion.div>
);

const faqData = [
  { q: "What is patient acquisition in healthcare?", a: "Patient acquisition is the process of attracting new patients, capturing their information, and converting them into active patients through marketing channels, communication systems, and operational workflows working together." },
  { q: "How can healthcare practices get more patients?", a: "By improving lead capture across all channels, responding to inquiries immediately, following up consistently, and tracking conversion performance — connecting marketing spend to actual patient outcomes." },
  { q: "How does Borna improve patient acquisition?", a: "Borna unifies marketing, communication, and CRM into one platform — capturing leads from every channel, responding in real time, tracking every lead through the lifecycle, and using AI to continuously improve conversion performance." },
  { q: "What channels does Borna use to capture patient leads?", a: "Borna captures leads from phone calls, SMS, website forms, live chat, and email — ensuring no inquiry from any channel is missed or untracked." },
  { q: "How does Borna track patient acquisition ROI?", a: "Borna tracks lead sources, conversion rates, cost per patient, and campaign ROI — connecting every new patient back to the marketing activity that generated them." },
];

const PatientAcquisitionPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Patient Acquisition for Healthcare Practices | Get More Patients | Borna AI</title>
      <meta name="description" content="Increase patient acquisition with Borna AI. Capture, track, and convert leads through unified communication, CRM, and AI-powered insights." />
      <link rel="canonical" href="https://borna.ai/solutions/patient-acquisition" />
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", name: "Patient Acquisition Platform", description: "Healthcare patient acquisition system powered by AI." })}</script>
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://borna.ai" }, { "@type": "ListItem", position: 2, name: "Solutions", item: "https://borna.ai/solutions" }, { "@type": "ListItem", position: 3, name: "Patient Acquisition", item: "https://borna.ai/solutions/patient-acquisition" }] })}</script>
    </Helmet>

    {/* Breadcrumb */}
    <nav aria-label="breadcrumb" className="container mx-auto px-4 md:px-6 pt-24 pb-2">
      <p className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/solutions" className="hover:text-foreground">Solutions</Link> / <span className="text-primary">Patient Acquisition</span>
      </p>
    </nav>

    {/* Hero */}
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <Eyebrow>Patient Acquisition</Eyebrow>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">Patient acquisition platform for healthcare practices</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">Borna AI helps healthcare practices attract, capture, and convert more patients through a unified platform that connects marketing, communication, and CRM. From first click to confirmed appointment, every step is tracked, optimized, and improved.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/demo" className="gradient-btn px-8 py-3">Request Demo</Link>
              <a href="#journey" className="ghost-btn px-8 py-3">See How It Works</a>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="relative" aria-hidden="true">
            <svg viewBox="0 0 500 320" className="w-full max-w-lg mx-auto">
              {/* 5 channels */}
              {["Google Ads", "Phone Calls", "Website Forms", "SMS", "Referrals"].map((label, i) => (
                <g key={label}>
                  <circle cx="40" cy={40 + i * 60} r="12" className="fill-primary/10 stroke-primary" strokeWidth="1" />
                  <text x="58" y={44 + i * 60} className="fill-muted-foreground" fontSize="9">{label}</text>
                  <line x1="90" y1={40 + i * 60} x2="200" y2={120 + (i - 2) * 15} className="stroke-primary/40" strokeWidth="1">
                    <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                  </line>
                </g>
              ))}
              {/* Stages */}
              {[{ x: 210, l: "Captured" }, { x: 310, l: "Engaged" }, { x: 400, l: "Converting" }].map((s, i) => (
                <g key={s.l}>
                  <rect x={s.x - 32} y={108} rx="12" ry="12" width="64" height="24" className="fill-primary/10 stroke-primary/30" strokeWidth="1" />
                  <text x={s.x} y={124} textAnchor="middle" className="fill-foreground" fontSize="9" fontWeight="500">{s.l}</text>
                  {i < 2 && <line x1={s.x + 32} y1={120} x2={s.x + 68} y2={120} className="stroke-primary/30" strokeWidth="1" />}
                </g>
              ))}
              {/* Output */}
              <line x1="432" y1="120" x2="480" y2="120" className="stroke-primary" strokeWidth="1.5" />
              <circle cx="490" cy="120" r="8" className="fill-primary/20 stroke-primary" strokeWidth="1.5">
                <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x="490" y="140" textAnchor="middle" className="fill-primary" fontSize="8" fontWeight="600">Confirmed</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Definition */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">What is patient acquisition in healthcare?</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">Patient acquisition refers to the process of attracting new patients, capturing their information, and converting them into active patients. It involves marketing channels, communication systems, and operational workflows working together to drive measurable, sustainable growth.</p>
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          {["Attract", "Capture", "Communicate", "Convert"].map((s, i) => (
            <span key={s} className="flex items-center gap-2">{s}{i < 3 && <ArrowRight className="w-3.5 h-3.5 text-primary/60" />}</span>
          ))}
        </div>
      </motion.div>
    </SectionDark>

    {/* Problem */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Why healthcare practices struggle to get more patients</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">Most practices invest in marketing and then lose the leads before they become patients. Calls go unanswered. Forms are never followed up. Campaign leads are never tracked. The practice spends money to attract patients and has no system to convert them.</p>
        <p className="text-foreground font-semibold mt-6">The problem isn't not enough leads. It's letting them leak away.</p>
      </motion.div>
    </SectionDark>

    {/* Solution */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">A unified patient acquisition system</h2>
        <p className="text-muted-foreground leading-relaxed">Borna seals the funnel — connecting every lead source to a unified capture system, automating immediate response, tracking every interaction, and optimizing conversion at each stage. No lead enters without being tracked. No lead leaves without a follow-up attempt.</p>
      </motion.div>
    </SectionDark>

    {/* Journey */}
    <SectionDark id="journey">
      <motion.div {...fadeUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">From lead to patient: the full acquisition journey</h2>
        <p className="text-muted-foreground">Four stages — each with a specific goal, action, and outcome. All managed through one connected system.</p>
      </motion.div>
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { icon: Filter, badge: "Top of Funnel", title: "Lead Generation", body: "Attract potential patients from multiple marketing channels — ads, social, website, referrals. Every source tracked from the first impression." },
          { icon: UserPlus, badge: "All Channels", title: "Lead Capture", body: "Capture every inquiry — phone call, website form, SMS, chat, or email. No lead enters without being logged automatically." },
          { icon: MessageSquare, badge: "Real-Time", title: "Lead Engagement", body: "Respond to every inquiry immediately through the patient's preferred channel. Automated follow-up sequences ensure no lead goes cold.", link: "/ecosystem/communication", linkText: "Explore Communication Layer →" },
          { icon: CalendarCheck, badge: "Confirmed", title: "Conversion", body: "Guide leads from engagement to booked appointment — through automated scheduling prompts, follow-up reminders, and a frictionless booking experience." },
        ].map((card, i) => <GlassCard key={i} {...card} />)}
      </div>
    </SectionDark>

    {/* Multi-channel capture */}
    <SectionDark>
      <motion.div {...fadeUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Capture every lead across all channels</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">A lead can come from anywhere. Borna captures every inquiry regardless of channel and brings it into one unified acquisition system.</p>
      </motion.div>
      <div className="grid md:grid-cols-5 gap-6">
        {[
          { icon: Phone, title: "Phone Calls", body: "Every inbound call logged, tracked, and connected to its source." },
          { icon: MessageSquare, title: "SMS Inquiries", body: "Text inquiries captured and entered into the lead pipeline automatically." },
          { icon: Globe, title: "Website Forms", body: "Form submissions captured in real time from any page." },
          { icon: MessageSquare, title: "Live Chat", body: "Web chat inquiries routed into the unified lead system instantly." },
          { icon: Mail, title: "Email", body: "Email inquiries captured, logged, and associated with their campaign." },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp} className="text-center glass-panel rounded-xl p-5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3"><item.icon className="w-5 h-5" /></div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* Real-time response */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Respond instantly to every inquiry</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">Speed is the single most important factor in lead conversion. A patient who doesn't hear back within minutes will move on. Borna enables immediate automated responses — so every inquiry receives a response before a competitor does.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Immediate Responses", body: "Automated responses sent the moment an inquiry is received." },
            { icon: ArrowRight, title: "Automated Follow-Up Sequences", body: "If a lead doesn't book immediately, automated messages keep the practice top-of-mind." },
            { icon: CheckCircle2, title: "Consistent Communication", body: "Every lead receives the same quality of attention, regardless of staff availability." },
          ].map((item, i) => (
            <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-5 text-center">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3"><item.icon className="w-5 h-5" /></div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionDark>

    {/* CRM Connection */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Track and manage every lead</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">When a lead is captured through Borna, it automatically enters the CRM — tagged with its source, logged with interaction history, and placed into the appropriate follow-up workflow.</p>
        <Link to="/ecosystem/crm-lifecycle" className="text-sm text-primary hover:underline inline-flex items-center gap-1">Explore CRM & Lifecycle Layer <ArrowRight className="w-3.5 h-3.5" /></Link>
      </motion.div>
    </SectionDark>

    {/* AI Optimization */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">AI-powered patient acquisition insights</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">Borna's AI layer continuously analyzes the acquisition funnel — identifying which channels convert best, which follow-up sequences perform highest, and where leads are most likely to drop off.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Search, title: "Lead Behavior Analysis", body: "AI tracks how leads interact — which messages they open, when they respond, what prompts they click." },
            { icon: Target, title: "Better Targeting", body: "Historical conversion data helps identify high-value lead patterns and most productive channels." },
            { icon: Bot, title: "Conversion Strategy Optimization", body: "AI surfaces where leads drop off and recommends adjustments — improving conversion rates continuously." },
          ].map((item, i) => (
            <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-5 text-center">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3"><item.icon className="w-5 h-5" /></div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionDark>

    {/* Performance & ROI */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Measure what drives patient growth</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">Every lead captured by Borna is tagged with its source. Every conversion is tracked against its originating campaign. For the first time, practices can see exactly what works.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Target, title: "Lead Source Tracking" },
            { icon: BarChart3, title: "Conversion Rate Visibility" },
            { icon: DollarSign, title: "Cost Per Patient" },
            { icon: TrendingUp, title: "Campaign ROI" },
          ].map((item, i) => (
            <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-4 text-center">
              <item.icon className="w-5 h-5 text-primary mx-auto mb-2" /><span className="text-xs font-medium text-foreground">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionDark>

    {/* Before vs After */}
    <SectionDark>
      <motion.div {...fadeUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why patient acquisition matters</h2>
        <p className="text-muted-foreground">Sustainable patient growth requires a system — not just marketing spend.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="glass-panel rounded-2xl p-6 opacity-60">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Without Borna</p>
          {["Untracked leads from campaigns", "Missed calls and unanswered messages", "No follow-up on inquiries", "Marketing spend with no ROI visibility"].map((t) => (
            <div key={t} className="flex items-start gap-2 mb-2"><XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" /><span className="text-sm text-muted-foreground">{t}</span></div>
          ))}
        </div>
        <div className="glass-panel rounded-2xl p-6 border-primary/20">
          <p className="text-xs text-primary uppercase tracking-wider mb-4">With Borna</p>
          {["Every lead captured across all channels", "Immediate response to every inquiry", "Automated follow-up sequences", "Full ROI tracking from lead to patient"].map((t) => (
            <div key={t} className="flex items-start gap-2 mb-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span className="text-sm text-foreground">{t}</span></div>
          ))}
        </div>
      </div>
      <p className="text-center text-foreground font-semibold mt-8">More patients. Less guesswork. Measurable growth.</p>
    </SectionDark>

    {/* How It Works */}
    <SectionDark>
      <motion.div {...fadeUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How Borna improves patient acquisition</h2>
        <p className="text-muted-foreground">Five steps — from capturing the first lead to optimizing the entire acquisition system.</p>
      </motion.div>
      <div className="grid md:grid-cols-5 gap-4">
        {[
          { n: 1, title: "Capture", body: "Capture leads from every channel — calls, forms, SMS, chat, and email — automatically" },
          { n: 2, title: "Centralize", body: "All leads centralized with source tagging and interaction history" },
          { n: 3, title: "Engage", body: "Respond immediately through the lead's preferred channel — automated and personalized" },
          { n: 4, title: "Convert", body: "Guide leads to book — through scheduling prompts, follow-ups, and frictionless booking" },
          { n: 5, title: "Optimize", body: "AI analyzes performance and surfaces improvements — continuously increasing conversion" },
        ].map((step) => (
          <motion.div key={step.n} {...fadeUp} className="glass-panel rounded-xl p-5 text-center">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold mx-auto mb-3">{step.n}</div>
            <h3 className="text-sm font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-xs text-muted-foreground">{step.body}</p>
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* Key Takeaways */}
    <SectionDark>
      <motion.div {...fadeUp} className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Key takeaways</h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "Borna connects the full patient acquisition journey from first click to confirmed appointment",
          "Every lead from every channel is captured, tracked, and entered into the system automatically",
          "AI continuously analyzes and improves conversion performance across the entire funnel",
          "Full ROI tracking connects marketing spend to real patient growth",
        ].map((t, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-4 text-center">
            <Sparkles className="w-5 h-5 text-primary mx-auto mb-2" /><p className="text-xs text-muted-foreground">{t}</p>
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* FAQ */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">Frequently asked questions</h2>
        <Accordion type="single" collapsible>
          {faqData.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger>{f.q}</AccordionTrigger><AccordionContent>{f.a}</AccordionContent></AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </SectionDark>

    {/* CTA */}
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Get more patients with a smarter system.</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">Borna AI helps healthcare practices capture, convert, and grow their patient base — through a unified system that connects every step from first contact to confirmed appointment.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/demo" className="gradient-btn px-8 py-3.5">Request Demo</Link>
          <Link to="/platform" className="ghost-btn px-8 py-3.5">Explore Platform →</Link>
        </div>
        <div className="relative w-full max-w-lg mx-auto h-40 mt-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
          <SparklesCore className="w-full h-full" background="transparent" particleColor="#ffffff" particleDensity={80} minSize={0.6} maxSize={1.4} speed={3} />
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default PatientAcquisitionPage;
