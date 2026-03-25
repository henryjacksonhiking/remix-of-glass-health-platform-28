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
          Book a 30-minute demo and discover our digital healthcare solutions for modern clinics.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link to="/contact" className="ghost-btn text-base px-8 py-3.5 w-full sm:w-[260px]">Request a clinic software consultation</Link>
          <Link to="/demo" className="gradient-btn text-base px-8 py-3.5 w-full sm:w-[260px]">Book a demo</Link>
        </div>

        {/* Sparkles effect below buttons — matching Acme reference */}
        <div className="relative w-full max-w-lg mx-auto h-40 -mt-5">
          {/* Gradient line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
          {/* Secondary glow line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

          {/* Sparkles */}
          <SparklesCore
            className="w-full h-full"
            background="transparent"
            particleColor="#ffffff"
            particleDensity={100}
            minSize={0.6}
            maxSize={1.4}
            speed={3}
          />

        </div>
      </div>
    </section>
  );
};

export default CTASection;
