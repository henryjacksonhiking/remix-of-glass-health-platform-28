import { motion } from "framer-motion";
import { CalendarCog, FileText, CreditCard, Database } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const capabilities = [
  { icon: CalendarCog, title: "Provider scheduling & availability", desc: "Manage provider calendars, working hours, and appointment slots from one dashboard." },
  { icon: FileText, title: "Form templates & workflows", desc: "Create, assign, and track intake forms, consents, and referrals with customizable templates." },
  { icon: CreditCard, title: "Billing and payment tracking", desc: "Send payment requests, track outstanding balances, and reconcile payments automatically." },
  { icon: Database, title: "EHR integration support", desc: "Bidirectional sync with major EHR systems keeps patient records accurate and up to date." },
];

const CareAdminCapabilities = () => {
  return (
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <p
          className="text-center mb-4 uppercase tracking-[1.5px]"
          style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}
        >
          For your clinic team
        </p>
        <h2 className="section-headline text-foreground text-center mb-16">
          Everything your team needs on the admin side
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group/glowing relative rounded-xl p-7"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: "14px",
              }}
            >
              <GlowingEffect spread={40} glow={false} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <cap.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-medium text-foreground mb-1">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareAdminCapabilities;
