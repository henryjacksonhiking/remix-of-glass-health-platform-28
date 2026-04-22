import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlight-card";

const outcomes = [
  { stat: "38%", label: "Reduction in no-show rates with automated SMS appointment reminders", desc: "" },
  { stat: "$150K", label: "Average annual revenue recovered per practice from missed call automation", desc: "" },
  { stat: "3×", label: "Faster patient onboarding with digital intake forms and white-labeled portal", desc: "" },
  { stat: "90%", label: "Call answer rate achieved versus the 65% dental industry average", desc: "" },
];

const outcomes2 = [
  { stat: "0", label: "Security-first architecture with HIPAA-compliant data handling across all patient interactions", desc: "", prefix: "", suffix: " Incidents" },
  { stat: "<1", label: "Real-time data sync between Borna and EHR systems for instant updates and zero manual lag", desc: "", prefix: "", suffix: " Sec" },
  { stat: "100%", label: "End-to-end encrypted communications across calls, SMS, forms, and patient portal", desc: "" },
  { stat: "99.9%", label: "Platform uptime ensuring uninterrupted access to scheduling, communication, and patient data", desc: "" },
];

const cardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '0.5px solid rgba(255,255,255,0.08)',
  borderRadius: '14px',
};

const statClass = "text-[26px] md:text-[38px] font-medium bg-clip-text text-transparent";
const statStyle: React.CSSProperties = {
  background: 'linear-gradient(90deg, #00DEC4, #6eb3ff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const suffixClass = "text-[20px] md:text-[30px]";

const ROISection = () => (
  <section className="py-10 md:py-16">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <span className="section-eyebrow">WHAT YOU GET</span>
        <h2 className="section-title mt-4">Built to drive measurable growth</h2>
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
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <SpotlightCard className="rounded-[14px] h-full" style={cardStyle}>
              <div className="p-7">
                <div className={statClass} style={statStyle}>{item.stat}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.9)', fontWeight: 500, marginTop: '4px' }}>{item.label}</div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mt-5">
        {outcomes2.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <SpotlightCard className="rounded-[14px] h-full" style={cardStyle}>
              <div className="p-7">
                <div className={statClass} style={statStyle}>{'prefix' in item && item.prefix ? item.prefix : ''}{item.stat}{'suffix' in item && item.suffix ? <span className={suffixClass}>{item.suffix}</span> : ''}</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', fontWeight: 500, marginTop: '4px' }}>{item.label}</div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ROISection;
