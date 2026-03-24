import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import BlogContent from "@/components/BlogContent";
import { getBlogPost, blogPosts } from "@/lib/blog-posts";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <PageWrapper>
      {/* Hero image */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-top"
          loading="eager"
          width={1200}
          height={630}
        />
      </div>

      <article className="mx-auto px-6 py-12" style={{ maxWidth: 680 }}>
        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="block mb-3"
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#00DEC4",
              fontWeight: 500,
            }}
          >
            {post.category}
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
            {post.title}
          </h1>
          <div
            className="flex items-center gap-2"
            style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 40 }}
          >
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <BlogContent html={markdownToHtml(post.content)} />
        </motion.div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="border-t border-glass-border py-16">
          <div className="mx-auto px-6" style={{ maxWidth: 680 }}>
            <h2 className="text-xl font-semibold text-foreground mb-8">Related articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="glass-panel overflow-hidden hover:bg-glass-hover transition-colors group"
                >
                  <img
                    src={r.image}
                    alt={r.title}
                    loading="lazy"
                    width={800}
                    height={420}
                    className="w-full h-40 object-cover object-top"
                  />
                  <div className="p-5">
                    <span className="text-xs text-primary font-medium">{r.category}</span>
                    <h3 className="text-sm font-medium text-foreground mt-1.5 group-hover:text-primary transition-colors">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageWrapper>
  );
};

/** Enhanced markdown→HTML with blockquote support */
function markdownToHtml(md: string): string {
  return md
    .trim()
    .split("\n\n")
    .map((block) => {
      block = block.trim();
      if (!block) return "";
      // headings
      if (block.startsWith("### ")) return `<h3>${inline(block.slice(4))}</h3>`;
      if (block.startsWith("## ")) return `<h2>${inline(block.slice(3))}</h2>`;
      if (block.startsWith("# ")) return `<h1>${inline(block.slice(2))}</h1>`;
      // blockquote
      if (block.startsWith("> ")) {
        const text = block.replace(/^> ?/gm, "");
        return `<blockquote><p>${inline(text.replace(/\n/g, " "))}</p></blockquote>`;
      }
      // unordered list
      if (/^- /.test(block)) {
        const items = block.split("\n").map((l) => `<li>${inline(l.replace(/^- /, ""))}</li>`).join("");
        return `<ul>${items}</ul>`;
      }
      // ordered list
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

export default BlogPostPage;
