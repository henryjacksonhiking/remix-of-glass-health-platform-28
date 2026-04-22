import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, MessageSquare, Mail, Video, MessagesSquare, Bot, Mic, ArrowRight, ChevronDown, AlertTriangle } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { SparklesCore } from "@/components/ui/sparkles-core";
import { useState } from "react";

const channels = [
  { icon: Phone, label: "Voice", desc: "Inbound and outbound calls", color: "#00DEC4" },
  { icon: MessageSquare, label: "SMS", desc: "Two-way text messaging", color: "#00DEC4" },
  { icon: Mail, label: "Email", desc: "Automated email workflows", color: "#00DEC4" },
  { icon: MessagesSquare, label: "Chat", desc: "Real-time patient chat", color: "#00DEC4" },
  { icon: Video, label: "Video", desc: "Telehealth consultations", color: "#00DEC4" },
];

const aiCapabilities = [
  { title: "AI answering service", desc: "Automatically answer routine patient inquiries — appointment availability, office hours, insurance questions — without staff involvement." },
  { title: "AI call summaries", desc: "Every call auto-summarized and tagged with patient context, action items, and follow-up requirements." },
  { title: "Sentiment analysis", desc: "Real-time sentiment detection on calls and messages — flag frustrated patients for immediate attention." },
  { title: "Smart routing", desc: "AI routes messages to the right team member based on content, urgency, and patient history." },
];

const features = [
  { title: "Unified inbox", desc: "Every patient conversation — calls, SMS, email, chat — in one centralized inbox. No switching between tools." },
  { title: "Call recording & transcription", desc: "Full recordings with AI-powered transcription, searchable history, and CRM integration." },
  { title: "Telehealth sessions", desc: "Video consultations built directly into the platform — no third-party app required." },
  { title: "Team collaboration", desc: "Internal channels, task assignment, file sharing, and conversation handoffs between team members." },
  { title: "Patient context cards", desc: "Every conversation shows the patient's full history — appointments, treatments, billing, and prior messages." },
  { title: "Automated workflows", desc: "Trigger follow-ups, reminders, and escalations based on conversation events and patient status." },
];

const faqItems = [
  { q: "What is omnichannel patient communication?", a: "Omnichannel patient communication means managing all communication channels — phone calls, SMS, email, live chat, and video — from a single unified platform. Instead of separate tools for each channel, Borna Connect brings everything into one inbox with full patient context." },
  { q: "Does Borna Connect replace our phone system?", a: "Borna Connect can serve as your complete communication system — web-based calling eliminates the need for desk phones. It also integrates with existing phone systems if you prefer a hybrid approach." },
  { q: "How does AI answering work?", a: "Borna Connect's AI answering service handles routine patient inquiries automatically — checking appointment availability, confirming office hours, answering insurance questions — and only escalates to staff when human attention is needed." },
  { q: "Is Borna Connect available now?", a: "Borna Connect is currently in development and available for early access. Request early access to be among the first practices to use the platform when it launches." },
  { q: "How does it connect to Borna Care?", a: "Borna Connect integrates directly with Borna Care — every communication interaction is linked to the patient's scheduling, forms, and payment records. Staff see the full patient picture in every conversation." },
];

const BornaConnectPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageWrapper>
      <Helmet>
        <title>Omnichannel Patient Communication Software Powered by AI | Borna Connect</title>
        <meta name="description" content="Borna Connect is a unified patient communication platform bringing calls, SMS, email, chat, and video into one system with AI automation, answering, and real-time insights." />
        <link rel="canonical" href="https://borna.ai/products/borna-connect" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Borna Connect",
          "applicationCategory": "HealthApplication", "operatingSystem": "Web",
          "description": "Omnichannel patient communication software with AI automation.",
          "featureList": ["Omnichannel communication", "AI answering service", "Sentiment analysis", "Unified inbox"]
        })}</script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 pt-6">
        <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link><span>/</span>
          <Link to="/products" className="hover:text-foreground transition-colors">Products</Link><span>/</span>
          <span className="text-primary">Borna Connect</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(0,222,196,0.08)' }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 text-sm text-muted-foreground mb-6">
                <span>Borna Connect</span>
                <span className="text-primary">Communication</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="hero-headline text-foreground mb-6">
                All communication, <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>one place</span> — with AI
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="body-text mb-4">
                Unify calls, SMS, email, chat, and video into one platform with AI-powered answering, automation, and real-time patient insights.
              </motion.p>
              {/* Status indicator */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6" style={{ background: 'rgba(255,180,0,0.08)', border: '1px solid rgba(255,180,0,0.2)' }}>
                <AlertTriangle className="w-3.5 h-3.5" style={{ color: '#FFB400' }} />
                <span className="text-xs" style={{ color: '#FFB400' }}>Currently in development — available for early access</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-row gap-3">
                <Link to="/demo" className="gradient-btn px-6 py-3">Request early access</Link>
                <Link to="/contact" className="ghost-btn px-6 py-3">Talk to sales</Link>
              </motion.div>
            </div>
            {/* Channel convergence hub */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="flex justify-center">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Center inbox */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center" style={{ background: 'rgba(0,222,196,0.1)', border: '1.5px solid rgba(0,222,196,0.3)', boxShadow: '0 0 40px rgba(0,222,196,0.15)' }}>
                    <MessagesSquare className="w-6 h-6 text-primary mb-1" />
                    <span className="text-[10px] text-primary font-medium">Inbox</span>
                  </div>
                </div>
                {/* Channel nodes */}
                {channels.map((ch, i) => {
                  const angle = (i * 72 - 90) * (Math.PI / 180);
                  const x = 50 + 40 * Math.cos(angle);
                  const y = 50 + 40 * Math.sin(angle);
                  return (
                    <motion.div key={ch.label} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.1 }} className="absolute" style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,222,196,0.08)', border: '1px solid rgba(0,222,196,0.15)' }}>
                        <ch.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-[9px] text-center mt-1 text-muted-foreground">{ch.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="section-headline text-foreground mb-6">What is omnichannel patient communication software?</h2>
          <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Omnichannel patient communication software centralizes every communication channel — phone calls, SMS, email, live chat, and video — into a single platform. Instead of managing separate tools for each channel, practices use one unified inbox with full patient context, AI automation, and real-time insights.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-12">Why healthcare communication systems are inefficient</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-3xl mx-auto">
            {["Desk Phone", "Personal SMS", "Gmail", "Zoom", "Voicemail"].map((tool, i) => (
              <motion.div key={tool} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{tool}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs mt-4" style={{ color: 'rgba(255,255,255,0.3)' }}>5 separate tools. 0 unified view.</p>
        </div>
      </section>

      {/* Channels */}
      <section className="py-24 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-16">One platform for all patient communication</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {features.map((feat, i) => (
              <motion.div key={feat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-base font-medium text-foreground mb-1">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-24 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-4">AI-powered communication automation</h2>
          <p className="body-text mx-auto text-center mb-16">Intelligence built into every conversation.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {aiCapabilities.map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl p-6" style={{ background: 'rgba(0,222,196,0.04)', border: '1px solid rgba(0,222,196,0.1)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="w-4 h-4 text-primary" />
                  <h3 className="text-base font-medium text-foreground">{cap.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-headline text-foreground text-center mb-16">How Borna Connect works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Connect channels", desc: "Link phone, SMS, email, chat, and video to one platform." },
              { step: "2", title: "Unified inbox", desc: "All conversations appear in a single, searchable inbox." },
              { step: "3", title: "AI processes", desc: "Every interaction is summarized, tagged, and routed automatically." },
              { step: "4", title: "Team acts", desc: "Staff respond, follow up, and collaborate — without switching tools." },
            ].map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="glass-panel p-5 text-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xs font-semibold text-primary">{s.step}</span>
                </div>
                <h3 className="text-sm font-medium text-foreground mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-24 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="section-headline text-foreground mb-12">Why Borna Connect is different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 text-left" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-sm font-medium mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>Traditional approach</h3>
              {["Separate phone system", "Personal text messaging", "Generic email client", "Third-party video tool", "No AI, no insights"].map(item => (
                <div key={item} className="text-sm py-1.5" style={{ color: 'rgba(255,255,255,0.4)' }}>× {item}</div>
              ))}
            </div>
            <div className="rounded-xl p-6 text-left" style={{ background: 'rgba(0,222,196,0.04)', border: '1px solid rgba(0,222,196,0.12)' }}>
              <h3 className="text-sm font-medium text-primary mb-4">Borna Connect</h3>
              {["Unified communication platform", "HIPAA-compliant messaging", "AI-powered answering & routing", "Built-in telehealth", "Real-time sentiment & insights"].map(item => (
                <div key={item} className="text-sm py-1.5" style={{ color: 'rgba(255,255,255,0.7)' }}>✓ {item}</div>
              ))}
            </div>
          </div>
          <p className="text-sm mt-8" style={{ color: 'rgba(255,255,255,0.4)' }}>True omnichannel — not a collection of integrations.</p>
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
          <div className="w-[600px] h-[400px] rounded-full blur-[120px]" style={{ background: 'rgba(0,222,196,0.05)' }} />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="section-headline text-foreground mb-4">Ready to unify your patient communication?</h2>
          <p className="body-text mx-auto mb-6">Request early access to Borna Connect and be first in line.</p>
          <div className="flex flex-row items-center justify-center gap-3 mb-8">
            <Link to="/demo" className="gradient-btn px-8 py-3.5">Request early access</Link>
            <Link to="/contact" className="ghost-btn px-8 py-3.5">Talk to sales</Link>
          </div>
          <div className="relative w-full max-w-lg mx-auto h-32">
            <SparklesCore className="w-full h-full" background="transparent" particleColor="#00DEC4" particleDensity={80} minSize={0.4} maxSize={1.2} speed={2.5} />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default BornaConnectPage;
