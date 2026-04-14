import { motion } from "framer-motion";

const outcomes = [
  { stat: "38%", label: "Reduction in no-show rates with automated SMS appointment reminders", desc: "" },
  { stat: "$150K", label: "Average annual revenue recovered per practice from missed call automation", desc: "" },
  { stat: "3×", label: "Faster patient onboarding with digital intake forms and white-labeled portal", desc: "" },
  { stat: "90%", label: "Call answer rate achieved versus the 65% dental industry average", desc: "" },
];

const cardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '0.5px solid rgba(255,255,255,0.08)',
  borderRadius: '14px',
  padding: '28px',
};

const statStyle: React.CSSProperties = {
  fontSize: '48px',
  fontWeight: 500,
  background: 'linear-gradient(90deg, #00DEC4, #6eb3ff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const ROISection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.3)' }}>
          WHAT YOU GET
        </span>
        <h2 className="mt-4" style={{ fontSize: '36px', fontWeight: 500, color: 'rgba(255,255,255,0.95)' }}>
          Built to drive measurable growth
        </h2>
        <p className="mt-4 mx-auto" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', maxWidth: '520px' }}>
          Clinics using Borna Care report real, measurable improvements across every part of their operations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {outcomes.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            style={cardStyle}
          >
            <div style={statStyle}>{item.stat}</div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', fontWeight: 500, marginTop: '4px' }}>{item.label}</div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginTop: '8px' }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ROISection;
