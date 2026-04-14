import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const patientFeatures = ["Online booking", "Digital forms", "Payments", "Communication"];
const practiceFeatures = ["Scheduling", "Patient management", "PMS Integration"];

const BornaCareSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28" style={{ background: "#0D1117" }}>
      <div className="container mx-auto px-5 md:px-6" ref={ref}>
        <h2 className="animate-on-scroll section-headline text-center mb-14">
          Watch Borna Care work
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {/* Patient side */}
          <div className="animate-on-scroll text-center">
            <div
              className="glass-panel p-2 inline-block w-full max-w-[390px] mx-auto animate-float"
              style={{ boxShadow: "0 32px 60px rgba(0,0,0,0.4), 0 0 80px rgba(0,201,177,0.1)" }}
            >
              <img
                src="/images/patient_appointment_Confirmation.webp"
                alt="Borna Care patient mobile app showing appointment booking confirmation"
                width={390}
                height={720}
                className="w-full h-auto rounded-xl object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-sm font-semibold mt-5 mb-3" style={{ color: "#F8FAFC" }}>Patient experience</p>
            <ul className="space-y-2 max-w-[260px] mx-auto">
              {patientFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#94A3B8" }}>
                  <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#00C9B1" }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Practice side */}
          <div className="animate-on-scroll text-center">
            <div
              className="glass-panel p-2 inline-block w-full animate-float"
              style={{ animationDelay: "1s", boxShadow: "0 32px 60px rgba(0,0,0,0.4), 0 0 80px rgba(0,201,177,0.1)" }}
            >
              <img
                src="/images/Admin_Dashboard.webp"
                alt="Borna Care office dashboard for clinic staff managing patient appointments"
                width={680}
                height={440}
                className="w-full h-auto rounded-xl object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-sm font-semibold mt-5 mb-3" style={{ color: "#F8FAFC" }}>Practice control</p>
            <ul className="space-y-2 max-w-[260px] mx-auto">
              {practiceFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#94A3B8" }}>
                  <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#00C9B1" }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BornaCareSection;
