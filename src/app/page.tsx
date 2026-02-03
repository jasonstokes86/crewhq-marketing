'use client';

import {
  Header,
  Hero,
  LogoBar,
  ProblemSection,
  SolutionSection,
  HowItWorks,
  StatsSection,
  DualAudienceSection,
  TestimonialsSection,
  PricingSection,
  FinalCTA,
  Footer,
} from '@/components/landing';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white overflow-hidden">
      <Header />
      <Hero />
      <LogoBar />
      <ProblemSection />
      <SolutionSection />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <StatsSection />
      <div id="features">
        <DualAudienceSection />
      </div>
      <TestimonialsSection />
      <div id="pricing">
        <PricingSection />
      </div>
      <FinalCTA />
      <Footer />
    </main>
  );
}
