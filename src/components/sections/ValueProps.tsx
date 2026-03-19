import { FeatureSteps } from "@/components/ui/feature-section";
import doctorDesk from "@/assets/doctor-desk.jpg";
import doctorTeleconsultation from "@/assets/doctor-teleconsultation.jpg";
import nursePortrait from "@/assets/nurse-portrait.jpg";

const features = [
  {
    step: "Step 1",
    title: "Unified communications",
    content:
      "Calls, SMS, chat, and email in one place — every conversation linked to a patient profile.",
    image: doctorDesk,
  },
  {
    step: "Step 2",
    title: "AI automation",
    content:
      "Smart routing, call summaries, and predictive scheduling that reduce manual work by hours.",
    image: doctorTeleconsultation,
  },
  {
    step: "Step 3",
    title: "Patient-centric design",
    content:
      "A single patient profile across multiple clinics, with full history and preferences.",
    image: nursePortrait,
  },
];

const ValueProps = () => {
  return (
    <section className="py-24 border-t border-glass-border">
      <FeatureSteps
        features={features}
        title="Built for the operational realities of real clinics"
        autoPlayInterval={4000}
        imageHeight="h-[400px] md:h-[500px]"
      />
    </section>
  );
};

export default ValueProps;
