import { motion } from "framer-motion";
import { Layers, Cpu, Building2 } from "lucide-react";

const differentiators = [
  { icon: Layers, title: "Modular by design", body: "Start with Borna Care today. Add communications, CRM, analytics, and AI automation as your clinic grows — without switching platforms." },
  { icon: Cpu, title: "AI at the core", body: "Every module is powered by the same AI infrastructure — not bolted on as an afterthought. Automation, insights, and predictions built in from day one." },
  { icon: Building2, title: "Built for real clinics", body: "Designed around how dental and medical practices actually operate — not generic software assumptions adapted for healthcare." },
];

const cardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '0.5px solid rgba(255,255,255,0.08)',
  borderRadius: '14px',
  padding: '28px',
};

const DifferentiationSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <span className="section-eyebrow">
          WHY BORNA
        </span>
        <h2 className="section-title mt-4">
          Why healthcare practices struggle with fragmented systems
        </h2>
        <p className="mt-4 mx-auto max-w-2xl" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)' }}>
          Most practices rely on multiple disconnected tools: patient communication software, healthcare CRM systems, scheduling platforms, and analytics dashboards.
        </p>
        <p className="mt-3 mx-auto max-w-2xl" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)' }}>
          This leads to missed patient opportunities, inefficient workflows, and lack of visibility.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {differentiators.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={cardStyle}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                <Icon className="w-5 h-5" style={{ color: 'rgba(255,255,255,0.5)' }} />
              </div>
              <h3 className="text-base font-medium mb-2" style={{ color: 'rgba(255,255,255,0.9)' }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.body}</p>
            </motion.div>
          );
        })}
      </div>

      <blockquote
        className="mx-auto mt-10"
        style={{
          borderLeft: '3px solid #00DEC4',
          background: 'rgba(0,222,196,0.05)',
          padding: '20px 24px',
          borderRadius: '0 10px 10px 0',
          fontSize: '16px',
          color: 'rgba(255,255,255,0.8)',
          maxWidth: '680px',
        }}
      >
        Borna.ai is not a CRM. Not a booking tool. Not just another patient portal. It is a unified healthcare operations platform — built with AI at its core.
      </blockquote>
    </div>
  </section>
);

export default DifferentiationSection;
