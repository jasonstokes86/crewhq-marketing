'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, Target, Wallet } from 'lucide-react';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { AnimatedBackground } from '@/components/ui/animated-background';

export function SolutionSection() {
  return (
    <AnimatedBackground variant="section" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeUp>
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.1))',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                color: '#C4B5FD',
              }}
            >
              The Solution
            </span>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-display">
              <span className="text-white">Meet </span>
              <span 
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                CrewHQ.
              </span>
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <p className="text-lg text-zinc-400 leading-relaxed">
              The AI-powered ambassador platform that makes it ridiculously easy 
              to find creators who love your brand — and turn them into a 
              revenue-generating army.
            </p>
          </FadeUp>
        </div>
        
        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <StaggerItem>
            <FeatureCard
              icon={<Sparkles className="w-6 h-6" style={{ color: '#A78BFA' }} />}
              title="AI-Powered Discovery"
              description="Our AI analyzes your customer data and social signals to find creators who actually convert — not just those with big followings."
              color="violet"
            />
          </StaggerItem>
          
          <StaggerItem>
            <FeatureCard
              icon={<Zap className="w-6 h-6" style={{ color: '#F472B6' }} />}
              title="Instant Onboarding"
              description="Creators apply, get approved, and start earning in minutes. No back-and-forth. No contracts. Just a seamless portal experience."
              color="pink"
            />
          </StaggerItem>
          
          <StaggerItem>
            <FeatureCard
              icon={<Target className="w-6 h-6" style={{ color: '#FB923C' }} />}
              title="Performance Tracking"
              description="See exactly which ambassadors drive revenue. Real attribution, real ROI — no more guessing who's actually moving the needle."
              color="orange"
            />
          </StaggerItem>
          
          <StaggerItem>
            <FeatureCard
              icon={<Wallet className="w-6 h-6" style={{ color: '#22D3EE' }} />}
              title="Automated Payouts"
              description="Creators get paid automatically via Stripe. Set your commission tiers, approval rules, and let the platform handle the rest."
              color="cyan"
            />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </AnimatedBackground>
  );
}

const colorMap = {
  violet: {
    bg: 'rgba(139, 92, 246, 0.1)',
    border: 'rgba(139, 92, 246, 0.2)',
    glow: 'rgba(139, 92, 246, 0.3)',
  },
  pink: {
    bg: 'rgba(236, 72, 153, 0.1)',
    border: 'rgba(236, 72, 153, 0.2)',
    glow: 'rgba(236, 72, 153, 0.3)',
  },
  orange: {
    bg: 'rgba(249, 115, 22, 0.1)',
    border: 'rgba(249, 115, 22, 0.2)',
    glow: 'rgba(249, 115, 22, 0.3)',
  },
  cyan: {
    bg: 'rgba(6, 182, 212, 0.1)',
    border: 'rgba(6, 182, 212, 0.2)',
    glow: 'rgba(6, 182, 212, 0.3)',
  },
};

function FeatureCard({ 
  icon, 
  title, 
  description,
  color,
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  color: keyof typeof colorMap;
}) {
  const colors = colorMap[color];
  
  return (
    <motion.div
      className="relative p-8 rounded-2xl h-full group cursor-pointer"
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
      }}
      whileHover={{
        background: colors.bg,
        borderColor: colors.border,
        boxShadow: `0 0 60px ${colors.glow}`,
      }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
        style={{
          background: colors.bg,
          border: `1px solid ${colors.border}`,
        }}
      >
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>
      
      <p className="text-zinc-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
