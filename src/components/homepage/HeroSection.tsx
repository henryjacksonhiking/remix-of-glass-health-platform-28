import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Calendar, MessageSquare, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const ref = useScrollAnimation(0.1, 80);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center py-20 md:py-28" style={{ background: "#07090F" }}>
      {/* Ambient gradient mesh */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(0,201,177,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(14,165,233,0.04) 0%, transparent 60%)",
          backgroundSize: "200% 200%",
          animation: "gradient-mesh 20s ease infinite",
        }}
      />

      <div className="container mx-auto px-5 md:px-6 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
          {/* Left — text */}
          <div>
            {/* Badge */}
            <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6" style={{ border: "1px solid rgba(0,201,177,0.4)", background: "rgba(0,201,177,0.08)" }}>
              <Sparkles className="w-3.5 h-3.5" style={{ color: "#00C9B1" }} />
              <span className="font-mono text-xs font-medium" style={{ color: "#00C9B1" }}>AI-Powered Healthcare Platform</span>
            </div>

            {/* Headline */}
            <h1 className="animate-on-scroll hero-headline mb-6">
              The <span className="gradient-text">Operating System</span>
              <br />for Modern Clinics
            </h1>

            {/* Subtitle */}
            <div className="animate-on-scroll max-w-[480px] mb-8">
              <p className="text-base leading-[1.7] mb-3" style={{ color: "#94A3B8" }}>
                Borna AI is a unified healthcare platform designed to help practices improve patient engagement, streamline communication, and automate operations through one intelligent system.
              </p>
              <p className="text-base leading-[1.7]" style={{ color: "#94A3B8" }}>
                Start with Borna Care and expand into a complete AI-powered healthcare ecosystem.
              </p>
            </div>

            {/* CTAs */}
            <div className="animate-on-scroll flex flex-col sm:flex-row gap-3 mb-6">
              <Link to="/demo" className="gradient-btn text-sm md:text-base inline-flex items-center justify-center gap-2">
                Book a demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/platform" className="ghost-btn text-sm md:text-base inline-flex items-center justify-center">
                Explore platform
              </Link>
            </div>

            {/* Trust signals */}
            <div className="animate-on-scroll flex flex-wrap items-center gap-2 text-xs" style={{ color: "#475569" }}>
              <span>✓ No credit card required</span>
              <span>·</span>
              <span>✓ 90-day free trial</span>
              <span>·</span>
              <span>✓ HIPAA Compliant</span>
            </div>
          </div>

          {/* Right — screenshot with floating cards */}
          <div className="animate-on-scroll relative">
            <div
              className="relative rounded-2xl overflow-hidden animate-float"
              style={{
                boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 120px rgba(0,201,177,0.15)",
                border: "1px solid rgba(255,255,255,0.1)",
                transform: "perspective(1200px) rotateY(-4deg) rotateX(2deg)",
              }}
            >
              <img
                src="/images/Admin_Dashboard.webp"
                alt="Borna Care admin dashboard showing patient scheduling and management"
                className="w-full h-auto"
                loading="eager"
                width={680}
                height={440}
              />
            </div>

            {/* Floating Card 1 — top-left */}
            <div
              className="hidden lg:flex absolute -top-4 -left-6 glass-panel p-3 items-center gap-3 animate-float"
              style={{ animationDelay: "0.5s", zIndex: 2, minWidth: 220 }}
            >
              <div className="glow-icon-container" style={{ padding: 8 }}>
                <Calendar className="w-4 h-4" style={{ color: "#00C9B1" }} />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "#F8FAFC" }}>Appointment Booked</p>
                <p className="text-xs" style={{ color: "#94A3B8" }}>Dr. Turner · 2:30 PM</p>
              </div>
              <div className="w-2 h-2 rounded-full ml-auto animate-pulse" style={{ background: "#22C55E" }} />
            </div>

            {/* Floating Card 2 — right */}
            <div
              className="hidden lg:flex absolute top-1/3 -right-8 glass-panel p-3 items-center gap-3 animate-float"
              style={{ animationDelay: "1s", zIndex: 2, minWidth: 210 }}
            >
              <div className="glow-icon-container" style={{ padding: 8 }}>
                <MessageSquare className="w-4 h-4" style={{ color: "#00C9B1" }} />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "#F8FAFC" }}>SMS Reminder Sent</p>
                <p className="text-xs" style={{ color: "#94A3B8" }}>38% fewer no-shows</p>
              </div>
            </div>

            {/* Floating Card 3 — bottom-left */}
            <div
              className="hidden lg:flex absolute -bottom-6 -left-4 glass-panel p-3 items-center gap-3 animate-float"
              style={{ animationDelay: "1.5s", zIndex: 2, minWidth: 220 }}
            >
              <div className="glow-icon-container" style={{ padding: 8 }}>
                <TrendingUp className="w-4 h-4" style={{ color: "#00C9B1" }} />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "#F8FAFC" }}>$12,400 Recovered</p>
                <p className="text-xs" style={{ color: "#94A3B8" }}>This month · recalls</p>
              </div>
            </div>

            {/* Mobile: show one card below */}
            <div className="lg:hidden flex glass-panel p-3 items-center gap-3 mt-4 mx-auto max-w-[260px]">
              <div className="glow-icon-container" style={{ padding: 8 }}>
                <Calendar className="w-4 h-4" style={{ color: "#00C9B1" }} />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "#F8FAFC" }}>Appointment Booked</p>
                <p className="text-xs" style={{ color: "#94A3B8" }}>Dr. Turner · 2:30 PM</p>
              </div>
              <div className="w-2 h-2 rounded-full ml-auto animate-pulse" style={{ background: "#22C55E" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
