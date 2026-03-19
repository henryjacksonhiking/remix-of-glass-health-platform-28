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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link to="/demo" className="gradient-btn text-base px-8 py-3.5">Book a demo</Link>
          <Link to="/contact" className="ghost-btn text-base px-8 py-3.5">Request a consultation</Link>
        </div>

        {/* Sparkles effect below buttons — matching Acme reference */}
        <div className="relative w-full max-w-lg mx-auto h-40">
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

          {/* Radial fade to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
