import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import careDashboard from "@/assets/care-dashboard.png";

const CareHero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-0 md:pt-32">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] bg-primary/10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 text-sm text-muted-foreground mb-8 animate-fade-in">
          <span>Borna Care</span>
          <span className="text-primary">Patient portal</span>
        </div>

        {/* Headline */}
        <h1
          className="hero-headline text-foreground max-w-3xl mx-auto mb-6"
          style={{ animationDelay: "0.1s" }}
        >
          The patient portal your clinic{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
            actually deserves
          </span>
        </h1>

        {/* Description */}
        <p className="body-text max-w-xl mx-auto mb-10">
          Borna Care is patient portal software that gives patients a seamless
          digital experience — online appointment scheduling, intake forms,
          payments, and communication — while giving clinic staff the tools to
          manage everything from one place.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link to="/demo" className="gradient-btn text-base px-8 py-3.5">
            Book a demo
          </Link>
          <a
            href="#features"
            className="ghost-btn text-base px-8 py-3.5 inline-flex items-center gap-2"
          >
            See features
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Dashboard image */}
        <div className="relative max-w-5xl mx-auto">
          {/* Top glow line */}
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <div className="rounded-t-xl border border-glass-border border-b-0 overflow-hidden bg-card/50 backdrop-blur-sm shadow-2xl shadow-primary/5">
            <img
              src={careDashboard}
              alt="Borna Care admin dashboard showing appointments, payments, providers, and forms management"
              className="w-full h-auto"
              loading="eager"
              width={1920}
              height={1080}
            />
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default CareHero;
