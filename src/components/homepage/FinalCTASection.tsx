import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCTASection = () => {
  const ref = useScrollAnimation();
  return (
    <section className="py-20 md:py-28" style={{ background: "linear-gradient(135deg, rgba(0,201,177,0.1) 0%, rgba(14,165,233,0.08) 100%)", borderTop: "1px solid rgba(0,201,177,0.2)", borderBottom: "1px solid rgba(0,201,177,0.2)" }}>
      <div className="container mx-auto px-5 md:px-6 text-center" ref={ref}>
        <h2 className="animate-on-scroll section-headline mb-5">Start with Borna Care. Grow with AI.</h2>
        <p className="animate-on-scroll text-base mb-8 max-w-lg mx-auto" style={{ color: "#94A3B8" }}>Join clinics already using Borna to recover revenue, reduce no-shows, and deliver a better patient experience.</p>
        <div className="animate-on-scroll flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/demo" className="gradient-btn text-base inline-flex items-center justify-center">Book a demo</Link>
          <Link to="/contact" className="ghost-btn text-base inline-flex items-center justify-center">Talk to sales</Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
