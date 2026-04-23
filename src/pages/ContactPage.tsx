import { useState } from "react";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Book a Demo — Healthcare Software for Clinics | Borna.ai</title>
        <meta name="description" content="Book a healthcare software demo and see Borna.ai in action. Request a clinic software consultation and discover how Borna Care can transform your practice." />
      </Helmet>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="hero-headline text-foreground mb-6">Book a healthcare software demo</h1>
              <p className="body-text mb-8">
                See how Borna Care can transform your clinic operations in a 30-minute demo. No commitment required.
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
                <>
                  <form onSubmit={handleSubmit} className="glass-panel p-8 space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Full name</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-glass border border-glass-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Your full name"
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
                      <label className="block text-sm font-medium text-foreground mb-1.5">Clinic name</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-glass border border-glass-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Your clinic name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Clinic type</label>
                      <select
                        required
                        className="w-full bg-glass border border-glass-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary appearance-none"
                      >
                        <option value="" className="bg-background">Select clinic type</option>
                        <option value="dental" className="bg-background">Dental clinic</option>
                        <option value="medical" className="bg-background">Medical clinic</option>
                        <option value="multi-location" className="bg-background">Multi-location practice</option>
                        <option value="other" className="bg-background">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Clinic size</label>
                      <select
                        required
                        className="w-full bg-glass border border-glass-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary appearance-none"
                      >
                        <option value="" className="bg-background">Select clinic size</option>
                        <option value="1-5" className="bg-background">1–5 staff</option>
                        <option value="6-20" className="bg-background">6–20 staff</option>
                        <option value="20+" className="bg-background">20+ staff</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message <span className="text-muted-foreground font-normal">(optional)</span></label>
                      <textarea
                        rows={3}
                        className="w-full bg-glass border border-glass-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                        placeholder="Tell us about your clinic"
                      />
                    </div>
                    <button type="submit" className="gradient-btn w-full py-3 text-base">
                      Book a demo
                    </button>
                  </form>

                  {/* Trust message */}
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    We will show you exactly how Borna Care handles booking, forms, and payments for clinics like yours.
                  </p>

                  {/* Secondary option */}
                  <p className="text-sm text-muted-foreground text-center mt-6">
                    Prefer to talk first?{" "}
                    <a href="mailto:hello@borna.ai" className="text-primary hover:underline">
                      Request a clinic software consultation
                    </a>
                  </p>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ContactPage;
