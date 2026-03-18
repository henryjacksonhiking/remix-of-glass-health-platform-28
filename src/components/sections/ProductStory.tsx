import { useState } from "react";

interface ProductStoryTab {
  label: string;
  headline: string;
  body: string;
  badge: string;
  image: string;
  mobileLayout: boolean;
}

const productStoryTabs: ProductStoryTab[] = [
  {
    label: "Online booking",
    headline: "Patients book themselves, any time",
    body: "Patients choose their service, provider, and time slot — from any device, at any hour. Your schedule fills automatically, even while your team is with other patients.",
    badge: "No more phone tag",
    image: "/images/step_1_-_Choose_your_appointment.png",
    mobileLayout: true,
  },
  {
    label: "Admin dashboard",
    headline: "Your team starts the day ready",
    body: "Every appointment confirmed, every pending payment visible, every provider accounted for — before your first patient walks in.",
    badge: "Full clinic visibility in one view",
    image: "/images/step_2_and_hero_-_admin_Dashboard.png",
    mobileLayout: false,
  },
  {
    label: "Digital forms",
    headline: "No more paper forms",
    body: "Intake, consent, and referral forms completed digitally before patients arrive. 128 submitted, 14 pending review — all searchable and downloadable.",
    badge: "Zero manual data entry",
    image: "/images/step_3_-_new_patient_forms.png",
    mobileLayout: false,
  },
  {
    label: "Payments",
    headline: "Get paid without chasing",
    body: "Create a payment request in seconds, send it by email or SMS, and let patients pay securely online. Your billing stays clean without awkward front-desk conversations.",
    badge: "Secure online payments",
    image: "/images/admin_vs_patient_-_New_Payment_Request.png",
    mobileLayout: false,
  },
  {
    label: "Family management",
    headline: "One account for the whole family",
    body: "Parents manage every family member's appointments, forms, and payments from a single account. Fewer duplicates, cleaner records, happier patients.",
    badge: "Dependents & family profiles",
    image: "/images/step_5_-_Dependents.png",
    mobileLayout: true,
  },
];

const ProductStory = () => {
  const [activeTab, setActiveTab] = useState(0);

  if (!productStoryTabs || productStoryTabs.length === 0) {
    return null;
  }

  const safeActiveTab = activeTab >= 0 && activeTab < productStoryTabs.length ? activeTab : 0;
  const current = productStoryTabs[safeActiveTab];

  if (!current) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 relative" id="platform">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-[11px] md:text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">
            How it works
          </span>
          <h2 className="section-headline text-foreground mb-4">
            A full day at your clinic — without the chaos
          </h2>
          <p className="text-[15px] text-muted-foreground max-w-xl mx-auto">
            See how Borna Care handles every touchpoint, from the moment a patient books to the moment they pay.
          </p>
        </div>

        <div className="mb-10 md:mb-14 overflow-x-auto -mx-4 px-4">
          <div className="flex gap-2 md:gap-3 w-max md:w-auto md:justify-center mx-auto">
            {productStoryTabs.map((tab, i) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 border ${
                  i === safeActiveTab
                    ? "text-primary-foreground border-transparent"
                    : "text-foreground/55 border-glass-border bg-[hsla(0,0%,100%,0.06)] hover:bg-[hsla(0,0%,100%,0.1)]"
                }`}
                style={i === safeActiveTab ? { background: "var(--gradient-primary)" } : undefined}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div
          key={`story-content-${safeActiveTab}`}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center max-w-5xl mx-auto animate-fade-in"
        >
          <div className="lg:col-span-2 order-1 animate-fade-in">
            <span className="inline-block rounded-full bg-primary/15 text-primary text-xs font-medium px-3 py-1 mb-4">
              {current.badge}
            </span>
            <h3 className="text-xl md:text-2xl font-medium text-foreground mb-3 tracking-tight">
              {current.headline}
            </h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[50ch]">
              {current.body}
            </p>
          </div>

          <div className="lg:col-span-3 order-2">
            <div className="glass-panel p-4 rounded-2xl">
              <img
                key={`story-image-${safeActiveTab}`}
                src={current.image}
                alt={current.label}
                className={`w-full h-auto object-contain rounded-xl animate-fade-in ${
                  current.mobileLayout ? "max-w-[280px] mx-auto md:max-w-full" : ""
                }`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-24 border-t border-b border-[hsla(0,0%,100%,0.08)] bg-[hsla(0,0%,100%,0.03)]">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl md:text-2xl font-medium text-foreground mb-3 tracking-tight">
                Patients stay informed automatically
              </h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[50ch]">
                Confirmation emails and SMS sent the moment a booking is made. Zero manual work from your team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <img
                src="/images/Admin_vs_patient_-_patient_Email_notification.png"
                alt="Patient email notification"
                className="max-w-[220px] w-full rounded-xl shadow-lg"
                loading="lazy"
              />
              <img
                src="/images/Admin_vs_patient_-_patient_SMS_notification.png"
                alt="Patient SMS notification"
                className="max-w-[220px] w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductStory;
