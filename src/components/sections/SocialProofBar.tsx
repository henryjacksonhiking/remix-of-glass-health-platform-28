import { motion } from "framer-motion";
import { PhoneOff, Clock, Server } from "lucide-react";

const stats = [
  { value: "40%", label: "fewer missed calls", icon: PhoneOff },
  { value: "3×", label: "faster patient intake", icon: Clock },
  { value: "99.9%", label: "platform uptime", icon: Server },
];

const clinics = ["Bright Dental", "Summit Health", "Metro Clinic Group", "Pacific Dental"];

const SocialProofBar = () => {
  return (
    <section className="py-16 border-y border-glass-border">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-sm text-muted-foreground text-center mb-8">Trusted by forward-thinking clinics</p>

        {/* Clinic logos placeholder */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {clinics.map((name) => (
            <div key={name} className="glass-panel px-6 py-3 text-sm font-medium text-muted-foreground">
              {name}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-3xl font-semibold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
