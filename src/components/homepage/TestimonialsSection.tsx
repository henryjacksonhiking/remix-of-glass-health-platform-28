import { Quote, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "Borna Care completely transformed how our patients book and communicate with us. We've cut no-shows by over 30% in the first two months.",
    name: "Dr. Sarah Mitchell",
    clinic: "Bright Smiles Dental",
    location: "Toronto, ON",
  },
  {
    quote: "The unified dashboard saves our front desk at least an hour every day. No more switching between four different apps just to manage appointments.",
    name: "James Rodriguez",
    clinic: "Premier Family Health",
    location: "Austin, TX",
  },
  {
    quote: "Having a white-labeled patient portal that looks like our own brand has been a game changer. Patients trust it more, and engagement has skyrocketed.",
    name: "Dr. Emily Chen",
    clinic: "Pacific Coast Orthodontics",
    location: "Vancouver, BC",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28" style={{ background: "#0D1117" }}>
      <div className="container mx-auto px-5 md:px-6" ref={ref}>
        <div className="text-center mb-14">
          <span className="animate-on-scroll section-label block mb-4">WHAT CLINICS SAY</span>
          <h2 className="animate-on-scroll section-headline">Trusted by clinic owners and practice managers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="animate-on-scroll glass-panel-hover p-6 relative">
              <Quote className="w-8 h-8 mb-4" style={{ color: "#00C9B1", opacity: 0.4 }} />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#00C9B1" }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#94A3B8" }}>"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "linear-gradient(135deg, #00C9B1, #0EA5E9)", color: "#07090F" }}>
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "#F8FAFC" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#475569" }}>{t.clinic} · {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
