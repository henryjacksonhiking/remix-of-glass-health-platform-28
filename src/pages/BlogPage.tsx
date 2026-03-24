import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";
import { blogPosts } from "@/lib/blog-posts";

const categories = ["All", "Patient engagement", "Clinic operations", "Automation", "Revenue growth"];

const BlogPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? blogPosts : blogPosts.filter((a) => a.category === active);

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-headline text-foreground mb-6"
          >
            Healthcare insights and best practices
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="body-text mx-auto max-w-xl"
          >
            Practical advice on patient engagement, clinic operations, automation, and revenue growth.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm px-4 py-2 rounded-lg transition-colors ${
                  cat === active ? "bg-primary/10 text-primary" : "glass-panel text-muted-foreground hover:bg-glass-hover"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <Link
                  to={`/blog/${article.slug}`}
                  className="glass-panel overflow-hidden h-full flex flex-col hover:bg-glass-hover transition-colors group block"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs text-primary font-medium mb-3">{article.category}</span>
                    <h3 className="text-base font-medium text-foreground mb-2 flex-1 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 border-t border-glass-border">
        <div className="container mx-auto px-4 md:px-6 max-w-xl text-center">
          <h2 className="text-xl font-semibold text-foreground mb-3">Stay in the loop</h2>
          <p className="text-sm text-muted-foreground mb-6">Subscribe for new articles and product updates.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-glass border border-glass-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              aria-label="Email for newsletter"
            />
            <button className="gradient-btn text-sm px-5 py-2.5">Subscribe</button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default BlogPage;
