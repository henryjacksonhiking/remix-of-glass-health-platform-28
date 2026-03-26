import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { caseStudies } from "@/lib/case-studies";

const CaseStudiesSection = () => (
  <section className="pb-12 pt-12">
    {/* Header */}
    <div className="text-center" style={{ paddingBottom: 48 }}>
      <span
        style={{
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          color: "#00DEC4",
          fontWeight: 500,
        }}
      >
        Case Studies
      </span>
      <h2
        style={{
          fontSize: 32,
          fontWeight: 500,
          color: "rgba(255,255,255,0.95)",
          marginTop: 12,
          marginBottom: 12,
        }}
      >
        Healthcare case studies
      </h2>
      <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)" }}>
        See how real clinics improved operations with Borna Care.
      </p>
    </div>

    {/* Cards grid */}
    <div
      className="grid grid-cols-1 lg:grid-cols-3 mx-auto"
      style={{ gap: 24, maxWidth: 1100, padding: "0 40px" }}
    >
      {caseStudies.map((cs, i) => (
        <motion.div
          key={cs.slug}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
        >
          <Link
            to={`/resources/case-studies/${cs.slug}`}
            className="flex flex-col h-full transition-all duration-200 group"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "0.5px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            {/* Hero image */}
            <div style={{ width: "100%", height: 200, overflow: "hidden", position: "relative", borderRadius: "12px 12px 0 0" }}>
              <img
                src={cs.cardImage || cs.heroImage}
                alt={cs.title}
                className="transition-transform duration-[400ms] ease-in-out group-hover:scale-[1.03]"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: cs.slug === "texas-medical-practice-digital-forms" ? "center 20%" : "center center", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(11,17,48,0.4) 100%)" }} />
            </div>

            <div style={{ padding: 28, display: "flex", flexDirection: "column", flex: 1 }}>
            {/* Badge */}
            <span
              style={{
                display: "inline-block",
                background: "rgba(0,222,196,0.1)",
                border: "0.5px solid rgba(0,222,196,0.25)",
                color: "#00DEC4",
                fontSize: 11,
                borderRadius: 980,
                padding: "4px 12px",
                marginBottom: 14,
                alignSelf: "flex-start",
              }}
            >
              {cs.category}
            </span>

            {/* Title */}
            <h3
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: "rgba(255,255,255,0.95)",
                lineHeight: 1.35,
                marginBottom: 12,
              }}
            >
              {cs.title}
            </h3>

            {/* Clinic */}
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 16 }}>
              {cs.clinic}
            </p>

            {/* Key stat */}
            <div style={{ marginBottom: 16 }}>
              <span
                style={{
                  fontSize: 32,
                  fontWeight: 500,
                  color: "#00DEC4",
                  letterSpacing: -1,
                  display: "block",
                }}
              >
                {cs.keyStat.value}
              </span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
                {cs.keyStat.label}
              </span>
            </div>

            {/* Read more */}
            <span
              style={{
                fontSize: 13,
                color: "#00DEC4",
                fontWeight: 500,
                marginTop: "auto",
              }}
            >
              Read case study →
            </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CaseStudiesSection;
