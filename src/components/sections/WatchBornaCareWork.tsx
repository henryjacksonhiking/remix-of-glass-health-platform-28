import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const patientChecklist = [
  "Online booking",
  "Digital forms",
  "Payments",
  "Communication",
];

const adminChecklist = [
  "Scheduling",
  "Patient management",
  "PMS Integration",
];

const WatchBornaCareWork = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block mb-3"
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#00DEC4",
              fontWeight: 600,
              fontFamily: "monospace",
            }}
          >
            PRODUCT DEMO
          </span>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 500,
              color: "rgba(255,255,255,0.95)",
              letterSpacing: "-1px",
            }}
          >
            Watch Borna Care work
          </h2>
          <p
            className="mt-4 mx-auto max-w-2xl"
            style={{ fontSize: 15, color: "rgba(255,255,255,0.45)" }}
          >
            See how Borna Care creates a seamless experience for both patients and clinic staff — from booking to billing, all under your clinic's brand.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left - Patient portal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "0.5px solid rgba(255,255,255,0.12)",
                borderRadius: 16,
                padding: 16,
                boxShadow: "0 0 40px 10px hsla(170, 100%, 43%, 0.06)",
              }}
            >
              <img
                src="/images/Hero_-_patient_Dashboard__1_.webp"
                alt="Borna Care patient portal — online booking, forms, payments"
                loading="lazy"
                className="w-full h-auto rounded-xl"
                style={{ display: "block" }}
              />
            </div>

            <div className="mt-6">
              <span
                className="block mb-3"
                style={{ fontSize: 13, fontWeight: 600, color: "#00DEC4" }}
              >
                Patient experience
              </span>
              <ul className="space-y-2">
                {patientChecklist.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right - Admin dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "0.5px solid rgba(255,255,255,0.12)",
                borderRadius: 16,
                padding: 16,
                boxShadow: "0 0 40px 10px hsla(170, 100%, 43%, 0.06)",
              }}
            >
              <img
                src="/images/Admin_Dashboard.webp"
                alt="Borna Care admin dashboard — scheduling, patient management"
                loading="lazy"
                className="w-full h-auto rounded-xl"
                style={{ display: "block" }}
              />
            </div>

            <div className="mt-6">
              <span
                className="block mb-3"
                style={{ fontSize: 13, fontWeight: 600, color: "#00DEC4" }}
              >
                Practice control
              </span>
              <ul className="space-y-2">
                {adminChecklist.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/products/care"
            className="gradient-btn text-sm md:text-base px-8 py-3 inline-flex items-center gap-2"
          >
            Explore Borna Care →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WatchBornaCareWork;
