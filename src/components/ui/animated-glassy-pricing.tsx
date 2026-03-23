import { cn } from "@/lib/utils";

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ShaderCanvas = () => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
    <div className="absolute -top-28 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
    <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
    <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/60 to-background/80" />
  </div>
);

export interface PricingCardProps {
  planName: string;
  description: string;
  price: string;
  priceLabel?: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  buttonVariant?: "primary" | "secondary";
  badge?: string;
  onClick?: () => void;
}

export const PricingCard = ({
  planName,
  description,
  price,
  priceLabel,
  features,
  buttonText,
  isPopular = false,
  buttonVariant = "primary",
  badge,
  onClick,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "backdrop-blur-xl bg-gradient-to-br rounded-2xl shadow-xl flex-1 max-w-sm px-7 py-8 flex flex-col transition-all duration-300",
        "from-background/80 to-background/40 border border-border/30",
        isPopular && "scale-[1.02] relative ring-2 ring-primary/20 from-background/90 to-background/50 border-primary/30 shadow-2xl",
      )}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1 text-xs font-semibold text-primary whitespace-nowrap">
          {badge}
        </span>
      )}

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-foreground">{planName}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>

      <div className="mb-6">
        <span className="text-3xl font-bold text-foreground">{price}</span>
        {priceLabel && <span className="text-sm font-normal text-muted-foreground ml-1">{priceLabel}</span>}
      </div>

      <hr className="border-border/20 mb-6" />

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <CheckIcon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={onClick}
        className={cn(
          "mt-auto w-full py-2.5 rounded-xl font-semibold text-sm transition-all",
          buttonVariant === "primary"
            ? "bg-primary hover:bg-primary/90 text-primary-foreground"
            : "bg-muted hover:bg-muted/80 text-foreground border border-border/30",
        )}
      >
        {buttonText}
      </button>
    </div>
  );
};

interface ModernPricingPageProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  plans: PricingCardProps[];
  showAnimatedBackground?: boolean;
}

export const ModernPricingPage = ({
  title,
  subtitle,
  plans,
  showAnimatedBackground = true,
}: ModernPricingPageProps) => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {showAnimatedBackground && <ShaderCanvas />}

      <div className="relative z-10 w-full py-20 px-4 md:px-6">
        <div className="text-center mb-14">
          <h1 className="hero-headline text-foreground mb-4">{title}</h1>
          <p className="body-text mx-auto max-w-xl">{subtitle}</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.planName} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};
