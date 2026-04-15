import { motion } from "framer-motion";
import { PhoneOff, Clock, Server } from "lucide-react";
import { Sparkles } from "@/components/ui/sparkles";

const stats = [
  { value: "40%", label: "fewer missed calls", icon: PhoneOff },
  { value: "3×", label: "faster patient intake", icon: Clock },
  { value: "99.9%", label: "platform uptime", icon: Server },
];

const clinics = ["Bright Dental", "Summit Health", "Metro Clinic Group", "Pacific Dental"];

const SocialProofBar = () => {
  return (
    <section className="relative py-16 border-y border-glass-border overflow-hidden">
      {/* Sparkles background */}
      <div className="absolute inset-0 z-0">
        <Sparkles
          className="absolute inset-0 h-full w-full"
          color="var(--sparkles-color)"
          size={1.2}
          density={400}
          speed={0.8}
          opacity={0.6}
        />
        {/* Bottom gradient fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          style={{
            background: "linear-gradient(to top, hsl(var(--background)), transparent)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <p className="text-sm text-muted-foreground text-center mb-8">Trusted by forward-thinking clinics</p>

        {/* Clinic logos placeholder */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-8 mb-12">
          {clinics.map((name) => (
            <div key={name} className="glass-panel px-4 sm:px-6 py-3 text-xs sm:text-sm font-medium text-muted-foreground text-center">
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
