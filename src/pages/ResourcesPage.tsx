import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, BookOpen, Video, BarChart2 } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";

const categories = [
  { icon: BarChart2, label: "Case studies", description: "See how real clinics improved operations with Borna Care." },
  {
    icon: FileText,
    label: "Blog",
    description: "Insights on patient engagement, clinic operations, and automation.",
    href: "/blog",
  },
  { icon: BookOpen, label: "Guides", description: "Step-by-step guides to get the most out of Borna.ai." },
  { icon: Video, label: "Videos", description: "Product walkthroughs, webinars, and customer stories." },
];

const featured = [
  { title: "How a dental clinic reduced no-shows by 40%", category: "Case study", href: "#" },
  { title: "5 ways to automate your clinic's patient intake", category: "Guide", href: "#" },
  { title: "The true cost of manual appointment management", category: "Blog", href: "#" },
];

const ResourcesPage = () => (
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
          Insights for modern clinics
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="body-text mx-auto max-w-xl"
        >
          Case studies, guides, and best practices to help you run a smarter clinic.
        </motion.p>
      </div>
    </section>

    {/* Categories */}
    <section className="pb-24 pt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                {cat.href ? (
                  <Link
                    to={cat.href}
                    className="glass-panel p-6 text-center block hover:bg-glass-hover transition-colors h-full"
                  >
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-medium text-foreground mb-2">{cat.label}</h3>
                    <p className="text-sm text-muted-foreground">{cat.description}</p>
                  </Link>
                ) : (
                  <div className="glass-panel p-6 text-center hover:bg-glass-hover transition-colors h-full">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-medium text-foreground mb-2">{cat.label}</h3>
                    <p className="text-sm text-muted-foreground">{cat.description}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Featured */}
    <section className="py-24 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="section-headline text-foreground text-center mb-12">Featured content</h2>
        <div className="space-y-4">
          {featured.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <Link
                to={item.href}
                className="glass-panel p-6 flex items-center justify-between group hover:bg-glass-hover transition-colors"
              >
                <div>
                  <span className="text-xs text-primary font-medium">{item.category}</span>
                  <h3 className="text-base font-medium text-foreground mt-1">{item.title}</h3>
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Newsletter */}
    <section className="py-16 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 max-w-xl text-center">
        <h2 className="text-xl font-semibold text-foreground mb-3">Subscribe for updates</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Get the latest insights and product updates delivered to your inbox.
        </p>
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

export default ResourcesPage;
