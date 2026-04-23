import { motion } from "framer-motion";
import { Phone, FileText, Clipboard, BarChart2 } from "lucide-react";

const problems = [
  { icon: Phone, title: "Missed calls", body: "Patients who can't reach your front desk don't wait — they book elsewhere. Every missed call is potential lost revenue." },
  { icon: FileText, title: "Manual appointment handling", body: "Hours spent on the phone scheduling, rescheduling, and confirming appointments your patients could manage themselves." },
  { icon: Clipboard, title: "Paper forms", body: "Clipboards, scanning, and manual data entry — a slow, error-prone process that frustrates patients before they've even been seen." },
  { icon: BarChart2, title: "No visibility into performance", body: "Without centralized data, it's impossible to know where revenue is leaking or which workflows are breaking down." },
];

const cardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '0.5px solid rgba(255,255,255,0.08)',
  borderRadius: '14px',
  padding: '28px',
};

const ProblemSection = () => (
  <section className="py-12 md:py-20">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.3)' }}>
          THE PROBLEM
        </span>
        <h2 className="mt-4 text-[22px] md:text-[36px]" style={{ fontWeight: 500, color: 'rgba(255,255,255,0.95)' }}>
          Running a clinic shouldn't feel this hard
        </h2>
        <p className="mt-4 mx-auto max-w-xl" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)' }}>
          Most clinics are held back by the same operational problems — every single day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {problems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, borderColor: 'rgba(0,222,196,0.35)', backgroundColor: 'rgba(255,255,255,0.06)' }}
              style={cardStyle}
              className="transition-colors cursor-default"
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

      <p className="text-center mt-10 italic" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)' }}>
        Borna.ai is built to eliminate all of it.
      </p>
    </div>
  </section>
);

export default ProblemSection;
