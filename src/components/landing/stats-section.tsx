'use client';

import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem, Counter } from '@/components/ui/motion';
import { AnimatedBackground } from '@/components/ui/animated-background';

const stats = [
  {
    value: 4.2,
    prefix: '$',
    suffix: 'M+',
    decimals: 1,
    label: 'Paid to creators',
    description: 'Real money in real pockets',
  },
  {
    value: 2847,
    suffix: '+',
    decimals: 0,
    label: 'Active creators',
    description: 'And growing every day',
  },
  {
    value: 12.4,
    suffix: 'x',
    decimals: 1,
    label: 'Average ROI',
    description: 'Compared to paid ads',
  },
  {
    value: 48,
    suffix: 'hrs',
    decimals: 0,
    label: 'To first sale',
    description: 'Average for new ambassadors',
  },
];

export function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient border effect */}
      <div 
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.5), transparent)',
        }}
      />
      <div 
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.5), rgba(249, 115, 22, 0.5), transparent)',
        }}
      />
      
      {/* Background glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeUp>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-display">
              <span className="text-white">Numbers that </span>
              <span 
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #EC4899, #F97316)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                speak for themselves
              </span>
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <p className="text-lg text-zinc-400">
              Join thousands of brands and creators already growing together.
            </p>
          </FadeUp>
        </div>
        
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="relative p-8 rounded-2xl text-center group"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
                whileHover={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderColor: 'rgba(139, 92, 246, 0.2)',
                  y: -4,
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Top gradient line */}
                <div 
                  className="absolute inset-x-4 top-0 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'linear-gradient(90deg, #8B5CF6, #EC4899)',
                  }}
                />
                
                <div 
                  className="text-4xl sm:text-5xl font-bold font-display mb-2"
                  style={{
                    background: 'linear-gradient(180deg, #FAFAFA 0%, #A1A1AA 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  <Counter 
                    to={stat.value} 
                    prefix={stat.prefix || ''} 
                    suffix={stat.suffix || ''} 
                    decimals={stat.decimals}
                  />
                </div>
                
                <div className="text-white font-semibold mb-1">
                  {stat.label}
                </div>
                
                <div className="text-sm text-zinc-500">
                  {stat.description}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
