import { Link } from "react-router-dom";
import careHero from "@/assets/care-hero.webp";

const CareHero = () => {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-24 pb-12 md:pb-16">
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

        <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 mb-16">
          <Link to="/demo" className="gradient-btn text-sm sm:text-base px-4 sm:px-8 py-2.5 sm:py-3.5 whitespace-nowrap">Book a demo</Link>
          <Link to="/sign-up" className="ghost-btn text-sm sm:text-base px-4 sm:px-8 py-2.5 sm:py-3.5 whitespace-nowrap">Start free trial</Link>
        </div>

        <div className="relative w-full mx-auto">
          <img
            src={careHero}
            alt="Borna Care patient portal showing appointments, forms, payments, and scheduling"
            className="w-full h-auto"
            loading="eager"
            width={1600}
            height={611}
          />
        </div>
      </div>
    </section>
  );
};

export default CareHero;
