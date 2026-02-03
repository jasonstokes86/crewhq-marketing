'use client';

import { motion } from 'framer-motion';
import { TrendingDown, Clock, DollarSign, Frown } from 'lucide-react';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';

export function ProblemSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(239, 68, 68, 0.05) 0%, transparent 50%)',
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeUp>
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                color: '#F87171',
              }}
            >
              The Problem
            </span>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-display">
              <span className="text-white">Ambassador marketing is </span>
              <span className="text-red-400">broken.</span>
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <p className="text-lg text-zinc-400 leading-relaxed">
              You know your customers could be your best marketers. 
              But the tools to find, manage, and pay them? They&apos;re either 
              too expensive, too complicated, or just don&apos;t work.
            </p>
          </FadeUp>
        </div>
        
        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Problem 1 */}
          <StaggerItem>
            <ProblemCard
              icon={<TrendingDown className="w-5 h-5 text-red-400" />}
              title="Rising CAC is killing margins"
              description="Paid ads cost more every quarter. ROAS keeps dropping. You need a channel that compounds."
              stat="+67%"
              statLabel="avg CAC increase YoY"
            />
          </StaggerItem>
          
          {/* Problem 2 */}
          <StaggerItem>
            <ProblemCard
              icon={<Clock className="w-5 h-5 text-red-400" />}
              title="Manual outreach doesn't scale"
              description="You're drowning in DMs, spreadsheets, and follow-ups. Finding the right creators takes forever."
              stat="15hrs"
              statLabel="wasted weekly"
            />
          </StaggerItem>
          
          {/* Problem 3 */}
          <StaggerItem>
            <ProblemCard
              icon={<DollarSign className="w-5 h-5 text-red-400" />}
              title="Enterprise tools, enterprise prices"
              description="The platforms that actually work charge $500+/month and require year-long contracts."
              stat="$6K+"
              statLabel="typical annual cost"
            />
          </StaggerItem>
          
          {/* Problem 4 */}
          <StaggerItem>
            <ProblemCard
              icon={<Frown className="w-5 h-5 text-red-400" />}
              title="Wrong creators = wasted spend"
              description="Follower count doesn't equal conversion. You're paying for reach, not results."
              stat="2.3%"
              statLabel="avg influencer conversion"
            />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

function ProblemCard({ 
  icon, 
  title, 
  description, 
  stat, 
  statLabel 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}) {
  return (
    <motion.div
      className="relative p-8 rounded-2xl h-full"
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
      }}
      whileHover={{
        background: 'rgba(255, 255, 255, 0.04)',
        borderColor: 'rgba(239, 68, 68, 0.15)',
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start gap-4">
        <div 
          className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.15)',
          }}
        >
          {icon}
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2">
            {title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-red-400 font-display">
              {stat}
            </span>
            <span className="text-xs text-zinc-500">
              {statLabel}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
