const rows = [
  {
    step: "STEP 01",
    badge: "No more phone tag",
    headline: "Patients book themselves, any time",
    body: "Patients choose their service, provider, and time slot — from any device, at any hour. Your schedule fills automatically, even while your team is with other patients.",
    link: "See online booking ›",
    image: "/images/step_1_-_Choose_your_appointment.png",
    mobileImage: false,
  },
  {
    step: "STEP 02",
    badge: "Full clinic visibility",
    headline: "Your team starts the day ready",
    body: "Every appointment confirmed, every pending payment visible, every provider accounted for — before your first patient walks in.",
    link: "See admin dashboard ›",
    image: "/images/step_2_and_hero_-_admin_Dashboard.png",
    mobileImage: false,
  },
  {
    step: "STEP 03",
    badge: "Zero manual data entry",
    headline: "No more paper forms",
    body: "Intake, consent, and referral forms completed digitally before patients arrive. All submitted forms are searchable, downloadable, and linked to the patient record.",
    link: "See digital forms ›",
    image: "/images/step_3_-_new_patient_forms.png",
    mobileImage: false,
  },
  {
    step: "STEP 04",
    badge: "Secure online payments",
    headline: "Get paid without chasing",
    body: "Create a payment request in seconds, send it by email or SMS, and let patients pay securely online. No awkward front-desk conversations. No outstanding invoices slipping through.",
    link: "See payments ›",
    image: "/images/admin_vs_patient_-_New_Payment_Request.png",
    mobileImage: false,
  },
  {
    step: "STEP 05",
    badge: "Dependents & family profiles",
    headline: "One account for the whole family",
    body: "Parents manage every family member's appointments, forms, and payments from a single account. Fewer duplicates, cleaner records, happier patients.",
    link: "See family management ›",
    image: "/images/step_5_-_Dependents.png",
    mobileImage: true,
  },
];

const BrowserChrome = () => (
  <div
    className="flex items-center gap-2 px-3"
    style={{
      height: 28,
      borderBottom: "0.5px solid rgba(255,255,255,0.07)",
      marginBottom: 12,
    }}
  >
    <span className="inline-block w-[10px] h-[10px] rounded-full" style={{ background: "#ff5f57" }} />
    <span className="inline-block w-[10px] h-[10px] rounded-full" style={{ background: "#febc2e" }} />
    <span className="inline-block w-[10px] h-[10px] rounded-full" style={{ background: "#28c840" }} />
    <span
      className="ml-3 flex-1 max-w-[160px] h-[14px] rounded-full"
      style={{ background: "rgba(255,255,255,0.08)" }}
    />
  </div>
);

const ProductStory = () => {
  return (
    <section
      id="how-it-works"
      className="overflow-hidden"
      style={{ background: "#0d1535" }}
    >
      {/* Header */}
      <div className="text-center px-4 pt-20 pb-16">
        <span
          className="inline-block mb-3"
          style={{
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            color: "#00DEC4",
            fontWeight: 600,
          }}
        >
          How it works
        </span>
        <h2
          className="mb-4"
          style={{
            fontSize: 36,
            fontWeight: 500,
            color: "rgba(255,255,255,0.95)",
            letterSpacing: "-1px",
          }}
        >
          A full day at your clinic — without the chaos
        </h2>
        <p
          className="mx-auto"
          style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.45)",
            maxWidth: 480,
          }}
        >
          See how Borna Care handles every touchpoint, from the moment a patient books to the moment they pay.
        </p>
      </div>

      {/* Feature rows */}
      {rows.map((row, i) => {
        const reversed = i % 2 !== 0;
        return (
          <div
            key={row.step}
            className={`flex flex-col md:items-center mx-auto py-12 px-6 gap-8 md:py-16 md:px-20 md:gap-16 ${
              reversed ? "md:flex-row-reverse" : "md:flex-row"
            }`}
            style={{
              maxWidth: 1200,
              borderTop: "0.5px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Copy */}
            <div className="w-full md:w-auto md:shrink-0" style={{ flex: "0 0 380px" }}>
              <span
                className="block"
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  color: "rgba(255,255,255,0.25)",
                  marginBottom: 12,
                }}
              >
                {row.step}
              </span>

              <span
                className="inline-flex items-center gap-1.5"
                style={{
                  background: "rgba(0,222,196,0.1)",
                  border: "0.5px solid rgba(0,222,196,0.25)",
                  color: "#00DEC4",
                  fontSize: 11,
                  borderRadius: 980,
                  padding: "4px 12px",
                  marginBottom: 16,
                }}
              >
                <span className="inline-block w-[5px] h-[5px] rounded-full" style={{ background: "#00DEC4" }} />
                {row.badge}
              </span>

              <h3
                style={{
                  fontSize: 26,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.95)",
                  letterSpacing: "-0.5px",
                  lineHeight: 1.25,
                  marginBottom: 12,
                }}
              >
                {row.headline}
              </h3>

              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.75,
                  marginBottom: 20,
                }}
              >
                {row.body}
              </p>

              <span style={{ fontSize: 13, color: "#00DEC4", fontWeight: 500, cursor: "pointer" }}>
                {row.link}
              </span>
            </div>

            {/* Screenshot */}
            <div className="min-w-0 flex-1">
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "0.5px solid rgba(255,255,255,0.12)",
                  borderRadius: 16,
                  padding: 16,
                  overflow: "hidden",
                }}
              >
                <BrowserChrome />
                <div style={{ overflow: "hidden", ...(i === 0 ? { maxHeight: 480 } : {}), borderRadius: 12 }}>
                  <img
                    src={row.image}
                    alt={row.headline}
                    loading="lazy"
                    className={row.mobileImage ? "max-h-[280px] md:max-h-[320px] object-cover object-top" : "max-h-[280px] md:max-h-none object-cover md:object-contain object-top md:object-center"}
                    style={{
                      width: "100%",
                      display: "block",
                      borderRadius: 12,
                      ...(i === 0 ? { maxHeight: 480, objectFit: "cover" as const, objectPosition: "top center" } : {}),
                      ...(row.mobileImage ? {} : { height: "auto" }),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Notifications strip */}
      <div
        className="flex flex-col md:flex-row md:items-center mx-auto py-12 px-6 gap-8 md:py-12 md:px-20 md:gap-16"
        style={{
          maxWidth: 1200,
          background: "rgba(255,255,255,0.03)",
          borderTop: "0.5px solid rgba(255,255,255,0.07)",
          borderBottom: "0.5px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="w-full md:w-auto md:shrink-0" style={{ flex: "0 0 340px" }}>
          <span
            className="inline-flex items-center gap-1.5 mb-4"
            style={{
              background: "rgba(0,222,196,0.1)",
              border: "0.5px solid rgba(0,222,196,0.25)",
              color: "#00DEC4",
              fontSize: 11,
              borderRadius: 980,
              padding: "4px 12px",
            }}
          >
            <span className="inline-block w-[5px] h-[5px] rounded-full" style={{ background: "#00DEC4" }} />
            Automated notifications
          </span>

          <h3
            style={{
              fontSize: 22,
              fontWeight: 500,
              color: "rgba(255,255,255,0.95)",
              marginBottom: 12,
            }}
          >
            Patients stay informed automatically
          </h3>

          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }}>
            Confirmation emails and SMS sent the moment a booking is made. Zero manual work from your team.
          </p>
        </div>

        <div className="flex items-start gap-4 flex-1">
          <img
            src="/images/Admin_vs_patient_-_patient_Email_notification.png"
            alt="Patient email notification"
            loading="lazy"
            className="flex-1"
            style={{ borderRadius: 12, maxHeight: 280, objectFit: "cover", objectPosition: "top" }}
          />
          <img
            src="/images/Admin_vs_patient_-_patient_SMS_notification.png"
            alt="Patient SMS notification"
            loading="lazy"
            className="hidden md:block"
            style={{ flex: "0 0 140px", borderRadius: 12, maxHeight: 280, objectFit: "cover", objectPosition: "top" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductStory;
