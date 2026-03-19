import { Link } from "react-router-dom";
import { SparklesCore } from "@/components/ui/sparkles-core";

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
          {/* Book a demo button with sparkles */}
          <Link to="/demo" className="gradient-btn text-base px-8 py-3.5 relative overflow-hidden">
            <span className="relative z-10">Book a demo</span>
            <SparklesCore
              className="absolute inset-0 w-full h-full"
              background="transparent"
              particleColor="#ffffff"
              particleDensity={80}
              minSize={0.6}
              maxSize={1.4}
              speed={3}
            />
          </Link>

          {/* Request a consultation button with sparkles */}
          <Link to="/contact" className="ghost-btn text-base px-8 py-3.5 relative overflow-hidden">
            <span className="relative z-10">Request a consultation</span>
            <SparklesCore
              className="absolute inset-0 w-full h-full"
              background="transparent"
              particleColor="hsl(var(--primary))"
              particleDensity={60}
              minSize={0.4}
              maxSize={1.2}
              speed={2}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
