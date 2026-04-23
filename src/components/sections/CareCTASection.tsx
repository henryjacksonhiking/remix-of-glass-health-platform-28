import { Link } from "react-router-dom";
import { SparklesCore } from "@/components/ui/sparkles-core";

const CareCTASection = () => {
  return (
    <section className="py-12 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="section-headline text-foreground mb-4">See Borna Care in action</h2>
        <p className="body-text mx-auto mb-6">
          Book a demo or start a free trial — our team will get back to you within one business day.
        </p>
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 mb-8">
          <Link to="/demo" className="gradient-btn text-sm sm:text-base px-4 sm:px-8 py-2.5 sm:py-3.5 whitespace-nowrap">Book a demo</Link>
          <Link to="/sign-up" className="ghost-btn text-sm sm:text-base px-4 sm:px-8 py-2.5 sm:py-3.5 whitespace-nowrap">Start free trial</Link>
        </div>

        <div className="relative w-full max-w-lg mx-auto h-40 -mt-5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
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

export default CareCTASection;
