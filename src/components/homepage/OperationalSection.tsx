import { PhoneOff, Clock, CalendarX, UserMinus, AlertTriangle, Building } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const scenarios = [
  { icon: PhoneOff, title: "Missed calls, lost patients", desc: "Every missed call is a missed opportunity. Borna captures and routes every inquiry automatically." },
  { icon: Clock, title: "Staff buried in manual tasks", desc: "From appointment reminders to intake forms — automate the repetitive work your team shouldn't be doing." },
  { icon: CalendarX, title: "No-shows draining revenue", desc: "Automated SMS and email reminders dramatically reduce no-show rates across all appointment types." },
  { icon: UserMinus, title: "Patients falling through cracks", desc: "Recall campaigns and lifecycle tracking ensure no patient is forgotten after their last visit." },
  { icon: AlertTriangle, title: "No visibility into performance", desc: "Real-time dashboards show exactly where your practice is winning and where it's leaking revenue." },
  { icon: Building, title: "Multi-location chaos", desc: "Manage all branches from one platform. Standardize operations while preserving local flexibility." },
];

const OperationalSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28" style={{ background: "#07090F" }}>
      <div className="container mx-auto px-5 md:px-6" ref={ref}>
        <div className="text-center mb-14">
          <span className="animate-on-scroll section-label block mb-4">REAL-WORLD SOLUTIONS</span>
          <h2 className="animate-on-scroll section-headline">Built for operational realities of real clinics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {scenarios.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="animate-on-scroll glass-panel-hover p-6">
                <div className="glow-icon-container mb-4" style={{ width: 52, height: 52 }}>
                  <Icon className="w-5 h-5" style={{ color: "#00C9B1" }} />
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: "#F8FAFC" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OperationalSection;
