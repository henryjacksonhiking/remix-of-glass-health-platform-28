import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageWrapper>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="hero-headline text-foreground mb-6">Get in touch</h1>
              <p className="body-text mb-8">
                Have questions about Borna.ai? Want to explore a partnership? We'd love to hear from you.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  hello@borna.ai
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  Contact via demo request
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  Remote-first company
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {submitted ? (
                <div className="glass-panel p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-xl font-semibold text-foreground mb-2">Message sent</h2>
                  <p className="text-sm text-muted-foreground">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-panel p-8 space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-glass border border-glass-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-glass border border-glass-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full bg-glass border border-glass-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button type="submit" className="gradient-btn w-full py-3 text-base">
                    Send message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ContactPage;
