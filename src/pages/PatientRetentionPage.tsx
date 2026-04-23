import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Heart, Bell, CalendarCheck, MessageSquare, RefreshCw, ArrowRight,
  Bot, Users, TrendingUp, Sparkles, CheckCircle2, XCircle, Shield, Activity,
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import StandardFAQ from "@/components/sections/StandardFAQ";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SparklesCore } from "@/components/ui/sparkles-core";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-[11px] tracking-[0.18em] uppercase font-semibold text-primary mb-3">{children}</span>
);
const fadeUp = { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.5 } };
const SectionDark = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`relative py-12 md:py-20 border-t border-glass-border ${className}`}><div className="container mx-auto px-4 md:px-6 relative z-10">{children}</div></section>
);

const faqData = [
  { q: "What is patient retention in healthcare?", a: "Patient retention refers to the ability of a healthcare practice to keep patients engaged, returning for care, and maintaining long-term relationships through follow-ups, communication, scheduling, and engagement strategies." },
  { q: "How can healthcare practices improve patient retention?", a: "Through automated follow-ups, proactive reactivation of inactive patients, appointment reminders to reduce no-shows, AI-driven prediction of at-risk patients, and consistent communication that maintains the relationship between visits." },
  { q: "How does Borna help reduce no-shows?", a: "Borna automates appointment reminders through SMS, email, and chat — sending confirmation requests and proactive follow-ups before appointments to reduce missed visits and enable easy rescheduling." },
  { q: "What is patient reactivation?", a: "Patient reactivation is the process of identifying patients who haven't engaged with a practice for a defined period and re-engaging them through targeted outreach campaigns — bringing dormant patient relationships back into active status." },
  { q: "How does AI improve patient retention?", a: "Borna's AI analyzes engagement patterns and communication history to predict which patients are at risk of disengaging — enabling proactive intervention before drop-off occurs, and continuously optimizing retention strategies based on observed outcomes." },
];

const PatientRetentionPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Patient Retention for Healthcare Practices | Improve Loyalty & Engagement | Borna AI</title>
      <meta name="description" content="Improve patient retention with Borna AI. Automate follow-ups, reduce no-shows, and increase lifetime value with AI-driven engagement and communication tools." />
      <link rel="canonical" href="https://borna.ai/solutions/patient-retention" />
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://borna.ai" }, { "@type": "ListItem", position: 2, name: "Solutions", item: "https://borna.ai/solutions" }, { "@type": "ListItem", position: 3, name: "Patient Retention", item: "https://borna.ai/solutions/patient-retention" }] })}</script>
    </Helmet>

    <nav aria-label="breadcrumb" className="container mx-auto px-4 md:px-6 pt-20 md:pt-20 pb-0 md:pb-2">
      <p className="text-xs text-muted-foreground"><Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/solutions" className="hover:text-foreground">Solutions</Link> / <span className="text-primary">Patient Retention</span></p>
    </nav>

    {/* Hero */}
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <Eyebrow>Patient Retention</Eyebrow>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">Patient retention platform for healthcare practices</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">Borna AI helps healthcare practices retain patients, improve engagement, and increase lifetime value through intelligent communication, automation, and data-driven insights. From follow-ups to reactivation, Borna ensures every patient stays connected to your practice.</p>
            <div className="flex flex-row items-center gap-2 sm:gap-3">
              <Link to="/demo" className="gradient-btn whitespace-nowrap">Request Demo</Link>
              <a href="#retention-journey" className="ghost-btn whitespace-nowrap">See Retention Strategies</a>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="relative flex items-center justify-center" aria-hidden="true">
            <svg viewBox="0 0 320 320" className="w-full max-w-sm md:max-w-md mx-auto h-auto" preserveAspectRatio="xMidYMid meet">
              <defs>
                <radialGradient id="ret-node-grad" cx="40%" cy="35%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                </radialGradient>
              </defs>
              <ellipse cx="160" cy="160" rx="115" ry="115" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 5" />
              {[{ a: 270, l: "Visit" }, { a: 0, l: "Follow-Up" }, { a: 90, l: "Engagement" }, { a: 180, l: "Return" }].map((node) => {
                const rad = (node.a * Math.PI) / 180;
                const x = 160 + 115 * Math.cos(rad);
                const y = 160 + 115 * Math.sin(rad);
                return (
                  <g key={node.l}>
                    <circle cx={x} cy={y} r="22" fill="url(#ret-node-grad)" stroke="hsl(var(--primary))" strokeOpacity="0.6" strokeWidth="1.25" />
                    <text x={x} y={y + 4} textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="500">{node.l}</text>
                  </g>
                );
              })}
              <circle r="6" fill="hsl(var(--primary))">
                <animateMotion dur="6s" repeatCount="indefinite" path="M160,45 A115,115 0 1,1 159.9,45" />
              </circle>
              <circle r="5" fill="hsl(var(--primary))" fillOpacity="0.7">
                <animateMotion dur="6s" repeatCount="indefinite" begin="3s" path="M160,45 A115,115 0 1,1 159.9,45" />
              </circle>
              <text x="160" y="164" textAnchor="middle" className="fill-muted-foreground" fontSize="10" fontWeight="500">Always Connected</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Definition */}
    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">What is patient retention in healthcare?</h2><p className="text-muted-foreground leading-relaxed">Patient retention refers to the ability of a healthcare practice to keep patients engaged, returning for care, and maintaining long-term relationships. It includes follow-ups, communication, scheduling, and engagement strategies that ensure patients continue their care journey — not as a one-time visit, but as an ongoing relationship.</p></motion.div></SectionDark>

    {/* Problem */}
    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Why healthcare practices lose patients</h2><p className="text-muted-foreground leading-relaxed mb-4">Most practices are focused on getting new patients — and forget about the ones they already have. Without a structured retention system, patients drift away after their first visit or two. Follow-ups don't happen. Reminders aren't sent. Inactive patients are never re-engaged.</p><p className="text-foreground font-semibold mt-6">Patients don't leave because they stop caring. They leave because the practice stops reaching out.</p></motion.div></SectionDark>

    {/* Solution */}
    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">A systematic approach to patient retention</h2><p className="text-muted-foreground leading-relaxed">Borna closes the gaps in the retention cycle — automating every touchpoint so no patient falls away due to missed communication. The loop runs continuously, and no stage is left unattended.</p></motion.div></SectionDark>

    {/* Retention Journey */}
    <SectionDark id="retention-journey">
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Managing the post-visit patient journey</h2><p className="text-muted-foreground">Four retention stages — each representing a critical touchpoint in the ongoing patient relationship.</p></motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: MessageSquare, badge: "Automated", title: "Follow-up engagement", body: "Every patient visit automatically triggers a post-visit follow-up sequence — check-in messages, care reminders, and satisfaction touchpoints." },
          { icon: CalendarCheck, badge: "Proactive", title: "Appointment continuity", body: "Appointment reminders and confirmations are sent automatically — reducing no-shows, enabling easy rescheduling, and maintaining visit cadence." },
          { icon: Heart, badge: "Multi-Channel", title: "Ongoing communication", body: "Continuous engagement through SMS, email, and chat maintains the patient relationship between visits.", link: "/ecosystem/communication", linkText: "Explore Communication Layer →" },
          { icon: RefreshCw, badge: "Re-Engage", title: "Reactivation of inactive patients", body: "Patients who haven't engaged within a defined period are automatically identified and entered into targeted reactivation campaigns." },
        ].map((card, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-2xl p-6 hover:bg-glass-hover transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><card.icon className="w-5 h-5" /></div>
              {card.badge && <span className="text-[10px] uppercase tracking-wider font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{card.badge}</span>}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{card.body}</p>
            {card.link && <Link to={card.link} className="text-sm text-primary hover:underline inline-flex items-center gap-1">{card.linkText} <ArrowRight className="w-3.5 h-3.5" /></Link>}
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* Automated engagement */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Automating patient engagement and follow-ups</h2><p className="text-muted-foreground leading-relaxed">Retention doesn't require staff to remember every patient. Borna automates every engagement touchpoint — so the right message reaches the right patient at the right time, automatically.</p></motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Bell, title: "Appointment Reminders", body: "Sent automatically before every scheduled appointment — reducing no-shows without any manual effort." },
          { icon: CalendarCheck, title: "Recall Notifications", body: "Patients due for their next visit are automatically identified and notified — maintaining visit cadence." },
          { icon: MessageSquare, title: "Post-Visit Follow-Up", body: "Every visit triggers an automated follow-up — a care check-in, satisfaction inquiry, or next-step prompt." },
          { icon: RefreshCw, title: "Reactivation Campaigns", body: "Inactive patients are automatically entered into re-engagement sequences at defined intervals." },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-5 text-center">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3"><item.icon className="w-5 h-5" /></div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* CRM */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Tracking patient relationships over time</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">Retention requires memory — knowing when each patient last visited, what they discussed, and what stage of the lifecycle they're in. Borna's CRM captures and maintains this history continuously.</p>
        <Link to="/ecosystem/crm-lifecycle" className="text-sm text-primary hover:underline inline-flex items-center gap-1">Explore CRM & Lifecycle Layer <ArrowRight className="w-3.5 h-3.5" /></Link>
      </motion.div>
    </SectionDark>

    {/* AI */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">AI-powered retention optimization</h2><p className="text-muted-foreground leading-relaxed">Borna's AI layer doesn't wait for patients to disengage — it predicts disengagement before it happens. By analyzing engagement patterns and behavioral signals, the AI identifies patients at risk and triggers proactive interventions automatically.</p></motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {[
          { icon: Activity, title: "Patient Behavior Analysis", body: "AI tracks how patients respond to communications — which messages they engage with and when they go silent." },
          { icon: Shield, title: "Drop-Off Prediction", body: "Using historical data, AI identifies patients who show early signs of disengagement — allowing intervention before the relationship is lost." },
          { icon: Bot, title: "Proactive Interventions", body: "When AI detects an at-risk patient, it automatically triggers a targeted re-engagement sequence." },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-5 text-center">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3"><item.icon className="w-5 h-5" /></div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* No-show */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Minimize missed appointments</h2><p className="text-muted-foreground leading-relaxed">A no-show is more than a missed appointment — it's a break in the care relationship. Borna prevents no-shows proactively, and when they do occur, turns them into immediate rebooking opportunities.</p></motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {[
          { icon: Bell, title: "Automated Appointment Reminders", body: "Reminders sent through SMS, email, and chat at defined intervals before every appointment." },
          { icon: CheckCircle2, title: "Real-Time Confirmations", body: "Patients can confirm, reschedule, or cancel with a single reply — and the office is instantly notified." },
          { icon: RefreshCw, title: "Proactive Rebooking", body: "When a no-show occurs, an automated rebooking prompt is sent immediately." },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-5 text-center">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3"><item.icon className="w-5 h-5" /></div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* Business Value */}
    <SectionDark>
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why patient retention matters</h2><p className="text-muted-foreground">Retaining an existing patient costs significantly less than acquiring a new one — and retained patients generate predictable, compounding revenue over time.</p></motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { icon: TrendingUp, title: "Increased Patient Lifetime Value", body: "Retained patients generate more revenue per patient over time — compounding the return on acquisition investment." },
          { icon: Users, title: "Reduced Patient Churn", body: "Every patient who stays is one who doesn't need to be re-acquired — directly improving the efficiency of growth." },
          { icon: Shield, title: "Improved Revenue Predictability", body: "A practice with high retention has a predictable, stable revenue base — enabling better planning and staffing." },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-5 text-center">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3"><item.icon className="w-5 h-5" /></div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* How It Works */}
    <SectionDark>
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How Borna improves patient retention</h2></motion.div>
      <div className="grid md:grid-cols-5 gap-4">
        {[
          { n: 1, title: "Engage", body: "Track patient lifecycle and behavior — understanding where each patient is in their relationship" },
          { n: 2, title: "Follow-Up", body: "Automate follow-ups and communication — post-visit touchpoints sent without manual effort" },
          { n: 3, title: "Retain", body: "Identify engagement gaps and prevent drop-off before patients disengage" },
          { n: 4, title: "Reactivate", body: "Re-engage inactive patients through targeted campaigns" },
          { n: 5, title: "Optimize", body: "AI continuously analyzes retention performance and refines strategies" },
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
      <motion.div {...fadeUp} className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-bold text-foreground">Key takeaways</h2></motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Borna improves patient retention through automated communication, follow-ups, and reactivation", "The CRM tracks the full patient lifecycle — making personalized retention possible at scale", "AI predicts patient drop-off before it happens and triggers proactive interventions automatically", "Patient retention increases lifetime value, reduces churn, and builds a stable revenue foundation"].map((t, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-4 text-center"><Sparkles className="w-5 h-5 text-primary mx-auto mb-2" /><p className="text-xs text-muted-foreground">{t}</p></motion.div>
        ))}
      </div>
    </SectionDark>

    {/* FAQ */}
    <StandardFAQ items={faqData} />

    {/* CTA */}
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Keep your patients engaged and coming back.</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">Borna AI helps healthcare practices build lasting patient relationships through automated engagement, intelligent communication, and AI-powered retention strategies — creating a cycle of care that never stops.</p>
        <div className="cta-row">
          <Link to="/demo" className="gradient-btn whitespace-nowrap">Request Demo</Link>
          <Link to="/platform" className="ghost-btn whitespace-nowrap">Explore Platform →</Link>
        </div>
        <div className="relative w-full max-w-lg mx-auto h-40 mt-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
          <SparklesCore className="w-full h-full" background="transparent" particleColor="#ffffff" particleDensity={80} minSize={0.6} maxSize={1.4} speed={3} />
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default PatientRetentionPage;
