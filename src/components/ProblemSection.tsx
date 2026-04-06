import { motion } from "framer-motion";
import { XCircle, EyeOff, Shuffle, Users } from "lucide-react";

const painPoints = [
  { icon: XCircle, label: "Missed patient opportunities" },
  { icon: EyeOff, label: "Lack of visibility into performance" },
  { icon: Shuffle, label: "Inefficient workflows" },
  { icon: Users, label: "Poor coordination across teams" },
];

const ProblemSectionNew = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: 36, fontWeight: 500, color: "rgba(255,255,255,0.95)", letterSpacing: "-1px" }}
        >
          Healthcare practices are running on fragmented systems
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 mx-auto max-w-xl"
          style={{ fontSize: 15, color: "rgba(255,255,255,0.45)" }}
        >
          Today's practices rely on disconnected tools for communication, CRM, analytics, and operations.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {painPoints.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "0.5px solid rgba(255,255,255,0.12)",
                borderRadius: 16,
                padding: 28,
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(0,222,196,0.12)" }}
              >
                <Icon className="w-5 h-5" style={{ color: "#00DEC4" }} />
              </div>
              <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.9)" }}>
                {item.label}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mt-12"
        style={{ fontSize: 18, color: "#00DEC4", fontWeight: 500 }}
      >
        Borna is built to unify all of it.
      </motion.p>
    </div>
  </section>
);

export default ProblemSectionNew;
