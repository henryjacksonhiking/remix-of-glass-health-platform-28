import { motion } from "framer-motion";
import { Phone, HeartPulse, LineChart, Workflow } from "lucide-react";

const benefits = [
  {
    icon: Phone,
    title: "Improve patient engagement",
    description: "Communicate with patients across all channels",
  },
  {
    icon: HeartPulse,
    title: "Manage patient relationships",
    description: "Keep track of patients from lead to leave.",
  },
  {
    icon: LineChart,
    title: "Analyse performance",
    description: "Get accurate and real-time insight from data all around your business.",
  },
  {
    icon: Workflow,
    title: "Automate workflow",
    description: "Reduce manual tasks and improve efficiency",
  },
];

const cardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '0.5px solid rgba(255,255,255,0.08)',
  borderRadius: '14px',
  padding: '28px',
};

const BenefitsSection = () => (
  <section className="py-10 md:py-16">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-10 md:mb-16">
        <span className="section-eyebrow">
          Explore the Benefits
        </span>
        <h2 className="section-title mt-4">
          What you can do with Borna AI
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
        {benefits.map((item, i) => {
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
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(0,222,196,0.1)' }}>
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-medium mb-2" style={{ color: 'rgba(255,255,255,0.9)' }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
