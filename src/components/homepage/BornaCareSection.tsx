import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const glassStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "0.5px solid rgba(255,255,255,0.12)",
  borderRadius: 16,
  backdropFilter: "blur(12px)",
};

const patientFeatures = ["Online booking", "Digital forms", "Payments", "Communication"];
const practiceFeatures = ["Scheduling", "Patient management", "PMS integration"];

const BornaCareSection = () => (
  <section id="borna-care" className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 max-w-3xl mx-auto"
      >
        <h2 className="text-2xl md:text-[36px] font-medium text-foreground mb-5" style={{ letterSpacing: "-0.5px" }}>
          Start today with Borna Care — patient engagement and portal software
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto items-start relative">
        {/* Patient side — mobile frame */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div style={glassStyle} className="p-2 inline-block hover:-translate-y-1 transition-transform duration-300 w-full max-w-[390px] mx-auto">
            <img
              src="/images/patient_appointment_Confirmation.webp"
              alt="Borna Care patient mobile app showing appointment booking confirmation"
              width={390}
              height={720}
              className="w-full h-auto rounded-xl object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-sm font-medium text-foreground mt-4 mb-2">Patient experience</p>
          <ul className="space-y-2 max-w-[280px] mx-auto">
            {patientFeatures.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: "#00DEC4" }} />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Practice side — desktop frame */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center"
        >
          <div style={glassStyle} className="p-2 inline-block hover:-translate-y-1 transition-transform duration-300 w-full">
            <img
              src="/images/Admin_Dashboard.webp"
              alt="Borna Care office dashboard for clinic staff managing patient appointments"
              width={680}
              height={440}
              className="w-full h-auto rounded-xl object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-sm font-medium text-foreground mt-4 mb-2">Practice control</p>
          <ul className="space-y-2 max-w-[280px] mx-auto">
            {practiceFeatures.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: "#00DEC4" }} />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SVG connecting lines overlay */}
        <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.15, zIndex: 1 }}>
          <line x1="45%" y1="40%" x2="55%" y2="40%" stroke="#00DEC4" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="text-center mt-10">
        <Link to="/products/care" className="text-sm font-medium transition-colors" style={{ color: "#00DEC4" }}>
          Explore Borna Care →
        </Link>
      </div>
    </div>
  </section>
);

export default BornaCareSection;
