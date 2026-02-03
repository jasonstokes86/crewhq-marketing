import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "default" | "gradient";
}

export function CTASection({
  title,
  subtitle,
  primaryCTA = { text: "Start Free Trial", href: "/sign-up" },
  secondaryCTA,
  variant = "default",
}: CTASectionProps) {
  const isGradient = variant === "gradient";

  return (
    <section className={`py-20 ${isGradient ? "bg-gradient-to-r from-violet-600 to-purple-600" : "bg-muted/30"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold ${isGradient ? "text-white" : ""}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-4 text-lg ${isGradient ? "text-white/80" : "text-muted-foreground"}`}>
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={primaryCTA.href}>
              <Button 
                size="lg" 
                className={isGradient ? "bg-white text-violet-600 hover:bg-white/90" : "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"}
              >
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <Button 
                  variant={isGradient ? "outline" : "ghost"} 
                  size="lg"
                  className={isGradient ? "border-white text-white hover:bg-white/10" : ""}
                >
                  {secondaryCTA.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
