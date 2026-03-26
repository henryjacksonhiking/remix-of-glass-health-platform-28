import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import BlogContent from "@/components/BlogContent";
import { getCaseStudy } from "@/lib/case-studies";

function markdownToHtml(md: string): string {
  return md
    .trim()
    .split("\n\n")
    .map((block) => {
      block = block.trim();
      if (!block) return "";
      if (block.startsWith("### ")) return `<h3>${inline(block.slice(4))}</h3>`;
      if (block.startsWith("## ")) return `<h2>${inline(block.slice(3))}</h2>`;
      if (block.startsWith("# ")) return `<h1>${inline(block.slice(2))}</h1>`;
      if (block.startsWith("> ")) {
        const text = block.replace(/^> ?/gm, "");
        return `<blockquote><p>${inline(text.replace(/\n/g, " "))}</p></blockquote>`;
      }
      if (/^- /.test(block)) {
        const items = block.split("\n").map((l) => `<li>${inline(l.replace(/^- /, ""))}</li>`).join("");
        return `<ul>${items}</ul>`;
      }
      if (/^\d+\. /.test(block)) {
        const items = block.split("\n").map((l) => `<li>${inline(l.replace(/^\d+\.\s*/, ""))}</li>`).join("");
        return `<ol>${items}</ol>`;
      }
      return `<p>${inline(block.replace(/\n/g, " "))}</p>`;
    })
    .join("\n");
}

function inline(s: string): string {
  return s
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
}

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const cs = slug ? getCaseStudy(slug) : undefined;

  if (!cs) return <Navigate to="/resources" replace />;

  const bodyHtml = [
    `<h2>The problem</h2>`,
    markdownToHtml(cs.problem),
    `<h2>The solution</h2>`,
    markdownToHtml(cs.solution),
    `<div style="width:100%;margin:32px 0;border-radius:12px;overflow:hidden"><img src="${cs.bodyImage}" alt="${cs.bodyCaption}" style="width:100%;height:auto;max-height:360px;object-fit:cover;object-position:center;display:block;border-radius:12px" /><p style="font-size:12px;color:rgba(255,255,255,0.35);text-align:center;margin-top:8px;font-style:italic">${cs.bodyCaption}</p></div>`,
    `<h2>The results</h2>`,
    markdownToHtml(cs.results),
    `<blockquote><p>${cs.quote.text}</p><p>— ${cs.quote.author}</p></blockquote>`,
  ].join("\n");

  return (
    <PageWrapper>
      <Helmet>
        <title>{cs.title} | Borna.ai Case Study</title>
        <meta name="description" content={`${cs.clinic}. ${cs.keyStat.value} ${cs.keyStat.label}. Read the full case study.`} />
      </Helmet>

      {/* Full-bleed hero image */}
      <div style={{ width: "100%", maxHeight: 460, overflow: "hidden", position: "relative" }}>
        <img
          src={cs.heroImage}
          alt={cs.title}
          className="w-full h-[460px] max-md:h-[240px]"
          style={{ objectFit: "cover", objectPosition: "center top", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, #0B1130 100%)" }} />
      </div>

      <article className="mx-auto px-6 py-12" style={{ maxWidth: 680 }}>
        {/* Back link */}
        <Link
          to="/resources"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to resources
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
              marginBottom: 16,
            }}
          >
            {cs.category}
          </span>

          <h1
            className="text-foreground"
            style={{
              fontSize: "clamp(26px, 4vw, 36px)",
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
              marginBottom: 16,
            }}
          >
            {cs.title}
          </h1>

          <div
            className="flex items-center gap-2"
            style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 24 }}
          >
            <span>{cs.clinic}</span>
            <span>·</span>
            <span>{cs.readTime}</span>
          </div>

          {/* Key stat callout */}
          <div
            style={{
              background: "rgba(0,222,196,0.06)",
              border: "1px solid rgba(0,222,196,0.2)",
              borderRadius: 12,
              padding: "20px 24px",
              marginBottom: 40,
              display: "flex",
              alignItems: "baseline",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 36, fontWeight: 500, color: "#00DEC4", letterSpacing: -1 }}>
              {cs.keyStat.value}
            </span>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>
              {cs.keyStat.label}
            </span>
          </div>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <BlogContent html={bodyHtml} />
        </motion.div>
      </article>

      {/* CTA */}
      <section className="border-t border-glass-border py-16">
        <div className="text-center">
          <h2
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: "rgba(255,255,255,0.95)",
              marginBottom: 16,
            }}
          >
            Ready to see results like these?
          </h2>
          <Link
            to="/demo"
            className="gradient-btn inline-block text-sm px-6 py-3"
          >
            Book a demo
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
};

export default CaseStudyPage;
