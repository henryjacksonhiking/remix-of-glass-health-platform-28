import { Shield, RefreshCw, Lock, Server } from "lucide-react";

const badges = [
  { icon: Shield, label: "HIPAA ready" },
  { icon: RefreshCw, label: "EHR integration" },
  { icon: Lock, label: "End-to-end encryption" },
  { icon: Server, label: "99.9% uptime" },
];

const SecurityBanner = () => {
  return (
    <section className="py-16 bg-muted/30 border-y border-glass-border">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-lg font-medium text-foreground mb-8">
          HIPAA-ready architecture. EHR integration. Enterprise-grade security.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-muted-foreground">
              <b.icon className="w-5 h-5 text-primary" />
              <span className="text-sm">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityBanner;
