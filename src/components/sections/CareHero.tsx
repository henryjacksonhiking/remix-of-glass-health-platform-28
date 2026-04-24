import { Link } from "react-router-dom";

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

        {/* Dual mockup — patient + practice. Stacks on mobile (24px gap), side-by-side on desktop (48px gap), no horizontal clip. */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto overflow-visible">
          <div
            className="rounded-2xl p-3 md:p-4"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "0.5px solid rgba(255,255,255,0.1)",
              boxShadow: "0 0 40px 8px hsla(170, 100%, 43%, 0.08)",
            }}
          >
            <img
              src="/images/Hero_-_patient_Dashboard__1_.webp"
              alt="Borna Care patient portal — appointments, forms, payments"
              className="w-full h-auto rounded-xl block"
              loading="eager"
            />
            <p className="text-[11px] uppercase tracking-wider text-primary mt-3 font-semibold">Patient experience</p>
          </div>
          <div
            className="rounded-2xl p-3 md:p-4"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "0.5px solid rgba(255,255,255,0.1)",
              boxShadow: "0 0 40px 8px hsla(170, 100%, 43%, 0.08)",
            }}
          >
            <img
              src="/images/Admin_Dashboard.webp"
              alt="Borna Care admin dashboard — scheduling, patient management"
              className="w-full h-auto rounded-xl block"
              loading="eager"
            />
            <p className="text-[11px] uppercase tracking-wider text-primary mt-3 font-semibold">Practice experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareHero;
