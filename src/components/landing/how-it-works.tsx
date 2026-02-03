'use client';

import { motion } from 'framer-motion';
import { Search, Users, BarChart3 } from 'lucide-react';
import { FadeUp } from '@/components/ui/motion';

export function HowItWorks() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeUp>
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#A1A1AA',
              }}
            >
              How It Works
            </span>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-display text-white">
              Three steps to your own
              <br />
              <span 
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #EC4899, #F97316)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                revenue-generating crew
              </span>
            </h2>
          </FadeUp>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Step 1 - Discover */}
          <FadeUp delay={0}>
            <StepSection
              number="01"
              icon={<Search className="w-6 h-6 text-violet-400" />}
              title="Discover"
              headline="Find your perfect creators"
              description="Connect your store and our AI instantly identifies your best customers, finds their social profiles, and scores them on influence potential. No manual digging required."
              features={[
                'Auto-analyze customer purchase history',
                'Social profile discovery & enrichment',
                'AI scoring for conversion potential',
              ]}
              stats={[
                { label: 'Customers analyzed', value: '12,847' },
                { label: 'Creators identified', value: '347' },
                { label: 'Avg. score', value: '84' },
              ]}
              reverse={false}
            />
          </FadeUp>
          
          {/* Step 2 - Recruit */}
          <FadeUp delay={0.15}>
            <StepSection
              number="02"
              icon={<Users className="w-6 h-6 text-pink-400" />}
              title="Recruit"
              headline="Onboard in seconds"
              description="Send personalized invites, let creators apply through your branded portal, and auto-approve based on your criteria. From stranger to ambassador in minutes."
              features={[
                'Branded ambassador portal',
                'Automated approval workflows',
                'Custom commission tiers',
              ]}
              stats={[
                { label: 'Avg. response rate', value: '34%' },
                { label: 'Onboarding time', value: '<2min' },
                { label: 'Approval rate', value: '78%' },
              ]}
              reverse={true}
            />
          </FadeUp>
          
          {/* Step 3 - Scale */}
          <FadeUp delay={0.3}>
            <StepSection
              number="03"
              icon={<BarChart3 className="w-6 h-6 text-orange-400" />}
              title="Scale"
              headline="Watch revenue grow"
              description="Track every click, sale, and dollar. See which ambassadors drive real results, optimize your program, and scale what works — all on autopilot."
              features={[
                'Real-time attribution tracking',
                'Automated payouts via Stripe',
                'Performance analytics & insights',
              ]}
              stats={[
                { label: 'Revenue tracked', value: '$487K' },
                { label: 'Avg. order value', value: '+23%' },
                { label: 'ROI', value: '12.4x' },
              ]}
              reverse={false}
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function StepSection({
  number,
  icon,
  title,
  headline,
  description,
  features,
  stats,
  reverse,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  headline: string;
  description: string;
  features: string[];
  stats: { label: string; value: string }[];
  reverse: boolean;
}) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center mb-24 last:mb-0`}>
      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-6">
          <span 
            className="text-5xl font-bold font-display"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {number}
          </span>
          <div 
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.1))',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              color: '#C4B5FD',
            }}
          >
            {title}
          </div>
        </div>
        
        <h3 className="text-3xl font-bold text-white mb-4 font-display">
          {headline}
        </h3>
        
        <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-3">
          {features.map((feature, j) => (
            <li key={j} className="flex items-center gap-3 text-zinc-300">
              <div 
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                }}
              >
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Visual */}
      <div className="flex-1 w-full">
        <motion.div
          className="relative p-8 rounded-3xl"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
          whileHover={{
            borderColor: 'rgba(139, 92, 246, 0.2)',
            boxShadow: '0 0 80px rgba(139, 92, 246, 0.1)',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.1))',
                border: '1px solid rgba(139, 92, 246, 0.2)',
              }}
            >
              {icon}
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, j) => (
              <div 
                key={j}
                className="p-4 rounded-xl text-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <div 
                  className="text-2xl font-bold font-display mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Decorative glow */}
          <div 
            className="absolute -top-3 -right-3 w-24 h-24 rounded-full opacity-50 blur-2xl"
            style={{
              background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
