import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

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

const BornaCareSection = () => (
  <section id="demo" className="overflow-hidden py-24" style={{ background: "#0B1130" }}>
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: 36, fontWeight: 500, color: "rgba(255,255,255,0.95)", letterSpacing: "-1px" }}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Patient side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "0.5px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
            padding: 28,
            backdropFilter: "blur(12px)",
          }}
        >
          <span
            className="absolute top-5 right-5 inline-block px-3 py-1 rounded-full text-[10px] font-medium"
            style={{ background: "rgba(0,222,196,0.15)", color: "#00DEC4" }}
          >
            PWA · Mobile-first
          </span>
          <h3 className="text-lg font-semibold mb-3" style={{ color: "rgba(255,255,255,0.95)" }}>
            Patient app
          </h3>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>
            A seamless patient-facing experience — available on desktop and as a mobile app, dual-branded or fully white-labeled under the practice's name.
          </p>
          <ul className="space-y-3">
            {patientFeatures.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#00DEC4" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Office side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "0.5px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
            padding: 28,
            backdropFilter: "blur(12px)",
          }}
        >
          <span
            className="absolute top-5 right-5 inline-block px-3 py-1 rounded-full text-[10px] font-medium"
            style={{ background: "rgba(0,71,155,0.25)", color: "#4F8AFF" }}
          >
            Admin · Practice management
          </span>
          <h3 className="text-lg font-semibold mb-3" style={{ color: "rgba(255,255,255,0.95)" }}>
            Office portal
          </h3>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>
            A powerful back-office portal for practice managers and front desk staff to control scheduling, patient records, and platform connectivity.
          </p>
          <ul className="space-y-3">
            {officeFeatures.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#00DEC4" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mt-12"
        style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", fontWeight: 450 }}
      >
        Borna Care is where your transformation begins.
      </motion.p>

      <div className="text-center mt-6">
        <Link to="/demo" className="gradient-btn text-sm md:text-base px-8 py-3 inline-flex items-center justify-center">
          Book a demo
        </Link>
      </div>
    </div>
  </section>
);

export default BornaCareSection;
