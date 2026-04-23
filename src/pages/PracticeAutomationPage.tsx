import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Zap, MessageSquare, CalendarCheck, RefreshCw, FileText, Workflow,
  ArrowRight, CheckCircle2, XCircle, Users, TrendingUp,
  Cpu, Radar, GitBranch, RotateCw, Rocket, LineChart, UserPlus,
  Layers, Bell, Wand2, ShieldCheck, Target,
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import StandardFAQ from "@/components/sections/StandardFAQ";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SparklesCore } from "@/components/ui/sparkles-core";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (<span className="inline-block text-[11px] tracking-[0.18em] uppercase font-semibold text-primary mb-3">{children}</span>);
const fadeUp = { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.5 } };
const SectionDark = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (<section id={id} className={`relative py-12 md:py-20 border-t border-glass-border ${className}`}><div className="container mx-auto px-4 md:px-6 relative z-10">{children}</div></section>);

const faqData = [
  { q: "What is practice automation in healthcare?", a: "Practice automation refers to the use of software and AI to automate routine administrative and operational tasks — including scheduling, communication, follow-ups, data management, and workflow coordination." },
  { q: "What tasks can be automated in a healthcare practice?", a: "Communication automation (responses, reminders, follow-ups), scheduling automation (booking, confirmations), patient lifecycle automation (reactivation campaigns), administrative tasks (form processing, data entry), and workflow coordination." },
  { q: "How does Borna use AI for automation?", a: "Borna's AI layer analyzes data from all connected systems to detect triggering events and automatically fires the appropriate workflow response — selecting from multiple possible responses based on context." },
  { q: "How does automation improve healthcare practice efficiency?", a: "Automation eliminates repetitive manual tasks — freeing staff to focus on direct patient care. It reduces errors, improves consistency, and enables practices to scale without proportionally increasing staff." },
  { q: "What is the difference between rule-based and AI automation?", a: "Rule-based automation fires predefined responses to specific triggers. AI automation analyzes patterns, selects from multiple possible responses, predicts outcomes, and adapts over time. Borna uses both." },
];

const PracticeAutomationPage = () => (
  <PageWrapper>
    <Helmet>
      <title>Healthcare Practice Automation Software | AI Workflow Automation | Borna AI</title>
      <meta name="description" content="Automate your healthcare practice with Borna AI. Streamline workflows, reduce manual tasks, and improve efficiency with AI-powered automation." />
      <link rel="canonical" href="https://borna.ai/solutions/practice-automation" />
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://borna.ai" }, { "@type": "ListItem", position: 2, name: "Solutions", item: "https://borna.ai/solutions" }, { "@type": "ListItem", position: 3, name: "Practice Automation", item: "https://borna.ai/solutions/practice-automation" }] })}</script>
    </Helmet>

    <nav aria-label="breadcrumb" className="container mx-auto px-4 md:px-6 pt-20 md:pt-20 pb-0 md:pb-2"><p className="text-xs text-muted-foreground"><Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/solutions" className="hover:text-foreground">Solutions</Link> / <span className="text-primary">Practice Automation</span></p></nav>

    {/* Hero */}
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <Eyebrow>Practice Automation</Eyebrow>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">Healthcare practice automation platform</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">Borna AI automates repetitive tasks, streamlines workflows, and enables healthcare practices to operate more efficiently. From communication to scheduling and follow-ups, Borna reduces manual work and empowers teams to focus on patient care.</p>
            <div className="flex flex-row items-center gap-2 sm:gap-3">
              <Link to="/demo" className="gradient-btn whitespace-nowrap">Request Demo</Link>
              <a href="#automation-areas" className="ghost-btn whitespace-nowrap">See Automation</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="relative w-full min-w-0" aria-hidden="true">
            <div className="space-y-3 w-full">
              {[
                { trigger: "Missed Call", action: "Follow-Up SMS Sent" },
                { trigger: "Appointment Due", action: "Reminder Sent" },
                { trigger: "Patient Inactive 90 Days", action: "Reactivation Started" },
              ].map((lane, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-panel rounded-xl p-2.5 sm:p-3 flex items-center gap-1.5 sm:gap-3 overflow-hidden w-full"
                >
                  <div className="glass-panel rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs text-muted-foreground shrink min-w-0 truncate">{lane.trigger}</div>
                  <motion.div
                    initial={{ x: -4, opacity: 0.4 }}
                    animate={{ x: [-4, 2, -4], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                    className="shrink-0"
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </motion.div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0"><Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-primary" /></div>
                  <motion.div
                    initial={{ x: -4, opacity: 0.4 }}
                    animate={{ x: [-4, 2, -4], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.6, repeat: Infinity, delay: 0.4 + i * 0.3, ease: "easeInOut" }}
                    className="shrink-0"
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </motion.div>
                  <div className="glass-panel rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs text-primary border-primary/20 shrink min-w-0 truncate">{lane.action}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Definition */}
    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">What is practice automation in healthcare?</h2><p className="text-muted-foreground leading-relaxed">Practice automation refers to the use of software and AI to automate routine administrative and operational tasks in healthcare practices. This includes scheduling, communication, follow-ups, data management, and workflow coordination — tasks that currently consume staff time without requiring clinical judgment.</p></motion.div></SectionDark>

    {/* Problem */}
    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Why manual work slows down healthcare practices</h2><p className="text-muted-foreground leading-relaxed mb-4">Most healthcare practices run on a web of manual processes — staff manually sending appointment reminders, manually following up on missed calls, manually entering data from forms. Each task is individually small; collectively, they consume hours every day.</p><p className="text-foreground font-semibold mt-6">Every manual task is staff time that could have been spent on patient care.</p></motion.div></SectionDark>

    {/* Solution */}
    <SectionDark><motion.div {...fadeUp} className="max-w-3xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">A unified automation system for healthcare practices</h2><p className="text-muted-foreground leading-relaxed">Borna organizes the chaos — collecting events from every system, routing them through an intelligent automation engine, and executing the appropriate response automatically. Every task has a defined trigger and a defined response.</p></motion.div></SectionDark>

    {/* Automation Areas */}
    <SectionDark id="automation-areas">
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What can be automated in a healthcare practice?</h2><p className="text-muted-foreground">Five automation categories — covering every operational area where manual work slows down practices.</p></motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: MessageSquare, badge: "Live", title: "Communication Automation", body: "Automated responses to inquiries, appointment reminders, post-visit follow-ups, and reactivation messages.", link: "/ecosystem/communication", linkText: "Explore Communication Layer →" },
          { icon: CalendarCheck, badge: "Available", title: "Scheduling Automation", body: "Automated booking confirmations, reminders, rescheduling prompts when gaps appear, and no-show follow-ups." },
          { icon: RefreshCw, badge: "Available", title: "Patient Lifecycle Automation", body: "Follow-up sequences triggered by lifecycle events, reactivation campaigns for inactive patients.", link: "/ecosystem/crm-lifecycle", linkText: "Explore CRM & Lifecycle Layer →" },
          { icon: FileText, badge: "Available", title: "Administrative Task Automation", body: "Digital form processing, automated data capture from patient submissions, and routine admin workflows." },
          { icon: Workflow, badge: "Available", title: "Workflow Coordination", body: "Automated task routing between team members, priority alerts, and coordination workflows for operations." },
        ].map((card, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-2xl p-6 hover:bg-glass-hover transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><card.icon className="w-5 h-5" /></div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{card.badge}</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{card.body}</p>
            {card.link && <Link to={card.link} className="text-sm text-primary hover:underline inline-flex items-center gap-1">{card.linkText} <ArrowRight className="w-3.5 h-3.5" /></Link>}
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* AI Automation */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">AI-driven workflow automation</h2><p className="text-muted-foreground leading-relaxed">Borna's automation is not just rule-based — it is AI-driven. The AI layer analyzes context, selects the optimal response, and adapts decisions over time based on observed outcomes.</p></motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {[
          { icon: Radar, title: "Intelligent Event Detection", body: "AI identifies triggering events across all systems — not just obvious ones, but subtle signals." },
          { icon: GitBranch, title: "Dynamic Workflow Selection", body: "Instead of one rigid response per trigger, AI selects from multiple possible workflows based on context." },
          { icon: RotateCw, title: "Adaptive Optimization", body: "Automation workflows improve over time as AI observes which responses achieve the best outcomes." },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-5 text-center">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3"><item.icon className="w-5 h-5" /></div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </SectionDark>

    <SectionDark>
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground">Eliminate repetitive tasks</h2></motion.div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="glass-panel rounded-2xl p-6 opacity-60">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Staff Manual Work</p>
          {["Call Back Patient", "Send Reminder", "Update Record", "Schedule Follow-Up", "Process Form", "Enter Data"].map((t) => (
            <div key={t} className="flex items-start gap-2 mb-2"><XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" /><span className="text-sm text-muted-foreground">{t}</span></div>
          ))}
        </div>
        <div className="glass-panel rounded-2xl p-6 border-primary/20">
          <p className="text-xs text-primary uppercase tracking-wider mb-4">Handled by Borna</p>
          {["Call Back Patient", "Send Reminder", "Update Record", "Schedule Follow-Up", "Process Form", "Enter Data"].map((t) => (
            <div key={t} className="flex items-start gap-2 mb-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span className="text-sm text-foreground">{t}</span></div>
          ))}
        </div>
      </div>
      <p className="text-center text-foreground font-semibold mt-8">Staff time redirected to patient care.</p>
    </SectionDark>

    {/* Connection to AI */}
    <SectionDark>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Powered by data and AI intelligence</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">Every automation trigger is informed by data from across all connected systems, and every decision is made by the AI Intelligence Layer. The more data flows through Borna, the smarter the automation becomes.</p>
        <Link to="/ecosystem/ai-intelligence" className="text-sm text-primary hover:underline inline-flex items-center gap-1">Explore AI Intelligence Layer <ArrowRight className="w-3.5 h-3.5" /></Link>
      </motion.div>
    </SectionDark>

    {/* Business Value */}
    <SectionDark>
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground">Why practice automation matters</h2></motion.div>
      <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[
          { icon: Wand2, title: "Automation", body: "Workflows run without manual effort" },
          { icon: TrendingUp, title: "Efficiency", body: "Staff time used more effectively" },
          { icon: Users, title: "Capacity", body: "Handle more patients with same team" },
          { icon: Rocket, title: "Growth", body: "Revenue scales without proportional cost" },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-5 text-center">
            <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
            <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </SectionDark>

    {/* How It Works - Sequential Card Animation */}
    <SectionDark>
      <motion.div {...fadeUp} className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold text-foreground">How Borna automates your practice</h2></motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {[
          { n: 1, title: "Trigger", body: "An event occurs — missed call, appointment due, patient inactive, form submitted" },
          { n: 2, title: "Analyze", body: "Borna AI evaluates the event and selects the appropriate automated response" },
          { n: 3, title: "Execute", body: "The automation fires — message sent, record updated, alert dispatched — instantly" },
          { n: 4, title: "Monitor", body: "Outcomes are tracked — did the message reach the patient? Was the action completed?" },
          { n: 5, title: "Optimize", body: "AI analyzes performance and continuously refines workflows for better outcomes" },
        ].map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-xl p-5 text-center"
          >
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
        {[
          { icon: Layers, t: "Borna automates communication, scheduling, lifecycle management, and administrative workflows" },
          { icon: Target, t: "AI-driven automation selects the optimal response for each event and adapts over time" },
          { icon: Zap, t: "Manual repetitive tasks are eliminated — freeing staff to focus on patient care" },
          { icon: LineChart, t: "Automation enables practices to scale capacity without proportionally increasing headcount" },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp} className="glass-panel rounded-xl p-4 text-center"><item.icon className="w-5 h-5 text-primary mx-auto mb-2" /><p className="text-xs text-muted-foreground">{item.t}</p></motion.div>
        ))}
      </div>
    </SectionDark>

    {/* FAQ */}
    <StandardFAQ items={faqData} />

    {/* CTA */}
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Automate your practice and focus on care.</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">Borna AI helps healthcare practices streamline operations, eliminate manual work, and scale efficiently — through intelligent automation that runs continuously in the background.</p>
        <div className="cta-row">
          <Link to="/demo" className="gradient-btn whitespace-nowrap">Request Demo</Link>
          <Link to="/platform" className="ghost-btn whitespace-nowrap">Explore Platform →</Link>
        </div>
        <div className="relative w-full max-w-lg mx-auto h-32 sm:h-40 mt-6 sm:mt-8"><div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" /><SparklesCore className="w-full h-full" background="transparent" particleColor="#ffffff" particleDensity={80} minSize={0.6} maxSize={1.4} speed={3} /></div>
      </div>
    </section>
  </PageWrapper>
);

export default PracticeAutomationPage;
