import { FeatureSteps } from "@/components/ui/feature-section";
import { motion } from "framer-motion";
import { ShieldCheck, GitBranch, Lock, Server } from "lucide-react";
import doctorDesk from "@/assets/doctor-desk.webp";
import doctorTeleconsultation from "@/assets/doctor-teleconsultation.webp";
import nursePortrait from "@/assets/nurse-portrait.webp";

const features = [
  {
    step: "Step 1",
    title: "Unified communications",
    content:
      "Calls, SMS, chat, and email in one place — every conversation linked to a patient profile on your patient engagement platform.",
    image: doctorDesk,
  },
  {
    step: "Step 2",
    title: "Healthcare workflow automation",
    content:
      "Smart routing, call summaries, and predictive scheduling that reduce manual work by hours through intelligent healthcare workflow automation.",
    image: doctorTeleconsultation,
  },
  {
    step: "Step 3",
    title: "Patient-centric design",
    content:
      "A single patient profile across multiple clinics, with full history and preferences — powered by our clinic management software.",
    image: nursePortrait,
  },
];

const securityCards = [
  {
    icon: ShieldCheck,
    title: "HIPAA Compliant",
    description: "Built with HIPAA compliance as a foundation. Business Associate Agreements available for all US clinic accounts.",
  },
  {
    icon: GitBranch,
    title: "EHR & PMS Integration",
    description: "Connects to Dentrix, Open Dental, Jane App, and more. Borna sits on top of your existing system — no migration required.",
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    description: "AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls, and SOC 2 certification in progress.",
  },
  {
    icon: Server,
    title: "99.9% Uptime SLA",
    description: "Cloud-native infrastructure with redundant architecture, automated backups, and real-time monitoring across all clinic accounts.",
  },
];

const cardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '0.5px solid rgba(255,255,255,0.08)',
  borderRadius: '14px',
  padding: '28px',
};

const ValueProps = () => {
  return (
    <section className="py-24 border-t border-glass-border">
      <FeatureSteps
        features={features}
        title="Built for the operational realities of real clinics"
        autoPlayInterval={4000}
        imageHeight="h-[400px] md:h-[500px]"
      />

      {/* Security & compliance cards - Row 2 */}
      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {securityCards.map((item, i) => {
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
};

export default ValueProps;
