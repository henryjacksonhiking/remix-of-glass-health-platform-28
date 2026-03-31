import { Link } from "react-router-dom";
import careDashboard from "@/assets/care-dashboard.png";

const CareHero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-0 md:pt-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] bg-primary/10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 text-sm text-muted-foreground mb-8 animate-fade-in">
          <span>Borna Care</span>
          <span className="text-primary">Patient portal</span>
        </div>

        <h1
          className="hero-headline text-foreground max-w-3xl mx-auto mb-6"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
            Patient Portal Software
          </span>{" "}
          for Modern Clinics
        </h1>

        <p className="body-text max-w-xl mx-auto mb-10">
          Streamline patient interactions, reduce administrative workload, and improve clinic efficiency with Borna Care — the online appointment scheduling and patient engagement platform built for dental and medical practices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link to="/demo" className="gradient-btn text-base px-8 py-3.5">
            Book a demo
          </Link>
          <Link
            to="/sign-up"
            className="ghost-btn text-base px-8 py-3.5"
          >
            Start free trial
          </Link>
        </div>

        <div className="relative max-w-5xl mx-auto">
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
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default CareHero;
