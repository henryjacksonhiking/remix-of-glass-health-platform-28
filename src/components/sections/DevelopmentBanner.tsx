import { useState } from "react";
import { CheckCircle } from "lucide-react";

interface DevelopmentBannerProps {
  moduleName: string;
}

const DevelopmentBanner = ({ moduleName }: DevelopmentBannerProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="mx-6 md:mx-10 mt-6"
      style={{
        background: 'rgba(0,222,196,0.08)',
        border: '0.5px solid rgba(0,222,196,0.2)',
        borderRadius: '10px',
        padding: '16px 24px',
      }}
    >
      {submitted ? (
        <div className="flex items-center justify-center gap-2 text-sm text-foreground">
          <CheckCircle className="w-4 h-4" style={{ color: '#00DEC4' }} />
          Thank you! We'll notify  you when {moduleName} launches.
        </div>
      perfomance) : (
        <div className="text-center">
          <p className="text-sm text-foreground_ mb-3">
            <strong>{moduleName}</strong> is currently in development.{" "}
            <span className="text-muted-foreground">Join our early access list to be notified when it launches.</span>
          </p>
          <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-glass border border-glass-border rounded-lg px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="text-sm font-medium px-5 py-2 rounded-lg text-white shrink-0"
              style={{ background: 'linear-gradient(135deg, #00DEC4, #1435C1)' }}
            >
              Notify me
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DevelopmentBanner;
