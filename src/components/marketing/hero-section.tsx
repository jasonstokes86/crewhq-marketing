import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Star } from "lucide-react";

interface HeroSectionProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  showRating?: boolean;
}

export function HeroSection({
  badge,
  title,
  titleHighlight,
  subtitle,
  primaryCTA = { text: "Start Free Trial", href: "/sign-up" },
  secondaryCTA = { text: "Watch Demo", href: "#demo" },
  showRating = true,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-purple-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 lg:py-32 text-center max-w-4xl mx-auto">
          {/* Badge */}
          {badge && (
            <Badge variant="secondary" className="mb-6 px-4 py-1.5">
              <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
              {badge}
            </Badge>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}{" "}
            {titleHighlight && (
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                {titleHighlight}
              </span>
            )}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={primaryCTA.href}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-base px-8"
              >
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href={secondaryCTA.href}>
              <Button variant="outline" size="lg" className="text-base px-8">
                <Play className="mr-2 h-4 w-4" />
                {secondaryCTA.text}
              </Button>
            </Link>
          </div>

          {/* Rating */}
          {showRating && (
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>4.9/5 from 500+ reviews</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
