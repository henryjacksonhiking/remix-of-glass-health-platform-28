import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const glassStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "0.5px solid rgba(255,255,255,0.12)",
  borderRadius: 16,
  backdropFilter: "blur(12px)",
  padding: 32,
  position: "relative",
};

const patientFeatures = [
  "Online appointment booking",
  "Digital forms and document signing",
  "Secure messaging and notifications",
  "Online payments",
  "Dual-branded or white-label capable",
];

const officeFeatures = [
  "Provider and schedule management",
  "Patient record and PMS connection",
  "Online booking availability control",
  "Form and document management",
  "Online payment workflows",
];

const FeatureList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 mt-4">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2.5">
        <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#00DEC4" }} />
        <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{item}</span>
      </li>
    ))}
  </ul>
);

const BornaCareSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-medium text-foreground"
          style={{ letterSpacing: "-0.5px" }}
        >
          Start today with Borna Care
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 mx-auto max-w-2xl"
          style={{ fontSize: 15, color: "rgba(255,255,255,0.45)" }}
        >
          Borna Care is the first live component of the Borna platform — delivering immediate value while laying the foundation for the full ecosystem.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Patient side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={glassStyle}
        >
          <span
            className="absolute top-4 right-4 text-[10px] font-medium px-2.5 py-1 rounded-full"
            style={{ backgroundColor: "rgba(0,222,196,0.15)", color: "#00DEC4" }}
          >
            PWA · Mobile-first
          </span>
          <h3 className="text-lg font-medium text-foreground mb-2">Patient app</h3>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            A seamless patient-facing experience — available on desktop and as a mobile app, dual-branded or fully white-labeled under the practice's name.
          </p>
          <FeatureList items={patientFeatures} />
        </motion.div>

        {/* Office side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={glassStyle}
        >
          <span
            className="absolute top-4 right-4 text-[10px] font-medium px-2.5 py-1 rounded-full"
            style={{ backgroundColor: "rgba(0,71,155,0.25)", color: "#4F6AFF" }}
          >
            Admin · Practice management
          </span>
          <h3 className="text-lg font-medium text-foreground mb-2">Office portal</h3>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            A powerful back-office portal for practice managers and front desk staff to control scheduling, patient records, and platform connectivity.
          </p>
          <FeatureList items={officeFeatures} />
        </motion.div>
      </div>

      <div className="text-center mt-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
          style={{ fontSize: 16, color: "rgba(255,255,255,0.6)" }}
        >
          Borna Care is where your transformation begins.
        </motion.p>
        <Link to="/demo" className="gradient-btn text-sm md:text-base px-8 py-3 h-11 inline-flex items-center justify-center">
          Book a demo
        </Link>
      </div>
    </div>
  </section>
);

export default BornaCareSection;
