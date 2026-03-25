import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";

const inquiryTypes = ["Request demo", "Sales inquiry", "Partnership inquiry"];

const trustPoints = [
  "See Borna Care in action with a live walkthrough",
  "Get answers to your specific clinic questions",
  "No commitment — just a conversation",
];

const DemoPage = () => {
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
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="hero-headline text-foreground mb-6">Book a demo</h1>
              <p className="body-text mb-8">
                We'll show you how Borna Care can improve your clinic operations. Pick a time that works and we'll handle the rest.
              </p>
              <ul className="space-y-4">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
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
                  <h2 className="text-xl font-semibold text-foreground mb-2">Thank you</h2>
                  <p className="text-sm text-muted-foreground">We'll be in touch within one business day to schedule your demo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-panel p-8 space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-glass border border-glass-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Dr. Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-glass border border-glass-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="jane@clinic.com"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Clinic type</label>
                      <select
                        className="w-full bg-glass border border-glass-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select</option>
                        <option>Dental</option>
                        <option>Medical</option>
                        <option>Specialist</option>
                        <option>Multi-location</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Clinic size</label>
                      <select
                        className="w-full bg-glass border border-glass-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select</option>
                        <option>1–5 providers</option>
                        <option>6–15 providers</option>
                        <option>16–50 providers</option>
                        <option>50+ providers</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Inquiry type</label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryTypes.map((type) => (
                        <label key={type} className="flex items-center gap-2 glass-panel px-3 py-2 rounded-lg cursor-pointer text-sm text-muted-foreground hover:bg-glass-hover transition-colors">
                          <input type="radio" name="inquiry" value={type} className="accent-primary" defaultChecked={type === "Request demo"} />
                          {type}
                        </label>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="gradient-btn w-full py-3 text-base">
                    Submit request
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

export default DemoPage;
