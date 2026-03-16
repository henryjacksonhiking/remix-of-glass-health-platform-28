import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="section-headline text-foreground mb-4">See Borna.ai in action</h2>
        <p className="body-text mx-auto mb-8">
          Book a 30-minute demo and see how modern clinics operate.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/demo" className="gradient-btn text-base px-8 py-3.5">Book a demo</Link>
          <Link to="/contact" className="ghost-btn text-base px-8 py-3.5">Request a consultation</Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
