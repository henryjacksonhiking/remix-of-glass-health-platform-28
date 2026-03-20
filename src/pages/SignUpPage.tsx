import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import PageWrapper from "@/components/layout/PageWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CreditCard, Shield } from "lucide-react";

const signUpSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  clinicName: z.string().trim().min(2, "Clinic name must be at least 2 characters").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const plans = [
  {
    id: "free-trial",
    name: "Free Trial",
    price: "Free",
    period: "",
    features: [
      "1 Branch",
      "1 User",
      "Online appointment booking (without EHR integration)",
      "New patient intake forms",
      "Referral, Consent forms with eSignature",
      "Online payments",
      "Appointment notifications",
      "Support",
      "Role-based user permissions",
    ],
  },
  {
    id: "starter",
    name: "Starter Plan",
    price: "$249",
    period: "/month",
    features: [
      "1 Branch",
      "Up to 20 Users per clinic",
      "Online appointment booking",
      "New patient intake forms",
      "Referral, Consent forms with eSignature",
      "Online payments",
      "Appointment notifications",
      "Support",
      "Role-based user permissions",
    ],
  },
];

const SignUpPage = () => {
  const [searchParams] = useSearchParams();
  const planParam = searchParams.get("plan") || "free-trial";
  const [selectedPlan, setSelectedPlan] = useState(planParam);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Sign-up submitted:", { ...data, plan: selectedPlan });
    setSubmitted(true);
    toast.success("Your account request has been received!");
  };

  if (submitted) {
    return (
      <PageWrapper>
        <section className="min-h-[calc(100vh-56px)] flex items-center justify-center py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel p-12 max-w-lg text-center mx-4"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-3">You're all set!</h1>
            <p className="text-muted-foreground mb-8">
              We've received your sign-up request. Our team will reach out shortly to get your clinic onboarded.
            </p>
            <Link to="/" className="gradient-btn inline-block px-8 py-3">
              Back to Home
            </Link>
          </motion.div>
        </section>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Pricing
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="hero-headline text-foreground mb-3">Start with Borna Care</h1>
            <p className="body-text max-w-xl mb-12">
              Choose your plan and fill in your details to get started.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Plan selection */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h2 className="text-lg font-semibold text-foreground mb-4">Select your plan</h2>
              <div className="space-y-4">
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full text-left rounded-xl p-6 transition-all border-2 ${
                      selectedPlan === plan.id
                        ? "border-primary bg-primary/5"
                        : "border-transparent glass-panel hover:border-muted-foreground/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{plan.name}</h3>
                      <div className="text-lg font-bold text-foreground">
                        {plan.price}
                        {plan.period && (
                          <span className="text-sm font-normal text-muted-foreground">
                            {plan.period}
                          </span>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-1.5 mt-3">
                      {plan.features.slice(0, 4).map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Check className="w-3 h-3 text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                      {plan.features.length > 4 && (
                        <li className="text-xs text-muted-foreground/60">
                          +{plan.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Sign-up form */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-lg font-semibold text-foreground mb-4">Your details</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="glass-panel p-8 rounded-xl space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="Dr. Jane Smith"
                    {...register("fullName")}
                    className={errors.fullName ? "border-destructive" : ""}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-destructive">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@clinic.com"
                    {...register("email")}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clinicName">Clinic Name</Label>
                  <Input
                    id="clinicName"
                    placeholder="Downtown Family Clinic"
                    {...register("clinicName")}
                    className={errors.clinicName ? "border-destructive" : ""}
                  />
                  {errors.clinicName && (
                    <p className="text-xs text-destructive">{errors.clinicName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    {...register("phone")}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                {selectedPlan === "starter" && (
                  <div className="rounded-lg bg-primary/5 border border-primary/10 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <CreditCard className="w-4 h-4 text-primary" />
                      Credit card required
                    </div>
                    <p className="text-xs text-muted-foreground">
                      30 days free, then $249/month. Cancel anytime — no long-term contracts.
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-btn py-3 text-base"
                >
                  {isSubmitting
                    ? "Processing…"
                    : selectedPlan === "free-trial"
                    ? "Start Free Trial"
                    : "Start 30-Day Free Trial"}
                </Button>

                <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  <Shield className="w-3 h-3" />
                  Secure & encrypted
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  By signing up you agree to our{" "}
                  <Link to="/terms" className="underline hover:text-foreground">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="underline hover:text-foreground">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default SignUpPage;
