import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
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
          className="w-full h-full object-cover"
          loading="eager"
          width={1200}
          height={630}
        />
      </div>

      <article className="container mx-auto px-4 md:px-6 max-w-3xl py-12 md:py-16">
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
          <span className="text-xs font-medium text-primary">{post.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-10">
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
          className="prose prose-lg prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 max-w-none"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
        />
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="border-t border-glass-border py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
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
                    className="w-full h-40 object-cover"
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

/** Minimal markdown→HTML (headings, bold, lists, links, paragraphs) */
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
