'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.crewhq.com';
const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for brands just getting started with ambassador marketing.',
    features: [
      'Up to 50 ambassadors',
      'AI discovery (basic)',
      'Email outreach tools',
      'Shopify integration',
      'Ambassador portal',
      'Commission tracking',
    ],
    cta: 'Start Free Trial',
    popular: false,
    color: 'zinc',
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/month',
    description: 'For growing programs that need more power and flexibility.',
    features: [
      'Up to 500 ambassadors',
      'Advanced AI discovery',
      'Lookalike creator search',
      'All integrations',
      'Custom commission tiers',
      'Automated sequences',
      'Priority support',
      'Analytics dashboard',
    ],
    cta: 'Start Free Trial',
    popular: true,
    color: 'violet',
  },
  {
    name: 'Business',
    price: '$349',
    period: '/month',
    description: 'For scaling brands with serious ambassador programs.',
    features: [
      'Unlimited ambassadors',
      'White-label portal',
      'API access',
      'Custom integrations',
      'Dedicated success manager',
      'Advanced analytics',
      'SSO & security features',
      'Custom workflows',
    ],
    cta: 'Contact Sales',
    popular: false,
    color: 'orange',
  },
];

export function PricingSection() {
  return (
    <section className="py-24 relative" id="pricing">
      {/* Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)',
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeUp>
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#A1A1AA',
              }}
            >
              Pricing
            </span>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-display">
              <span className="text-white">Simple pricing, </span>
              <span 
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                serious results
              </span>
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <p className="text-lg text-zinc-400">
              No hidden fees. No annual contracts. Start free and scale as you grow.
            </p>
          </FadeUp>
        </div>
        
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <StaggerItem key={i}>
              <motion.div
                className={`relative p-8 rounded-2xl h-full flex flex-col ${plan.popular ? 'ring-2 ring-violet-500/50' : ''}`}
                style={{
                  background: plan.popular 
                    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.08))'
                    : 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid ${plan.popular ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255, 255, 255, 0.06)'}`,
                }}
                whileHover={{
                  y: -4,
                  boxShadow: plan.popular 
                    ? '0 20px 60px rgba(139, 92, 246, 0.2)'
                    : '0 20px 60px rgba(255, 255, 255, 0.05)',
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div 
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium"
                    style={{
                      background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                      boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
                    }}
                  >
                    <span className="flex items-center gap-1 text-white">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-zinc-400">{plan.description}</p>
                </div>
                
                {/* Price */}
                <div className="mb-6">
                  <span 
                    className="text-5xl font-bold font-display"
                    style={{
                      background: plan.popular 
                        ? 'linear-gradient(135deg, #FAFAFA, #C4B5FD)'
                        : 'linear-gradient(180deg, #FAFAFA, #A1A1AA)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-zinc-500">{plan.period}</span>
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-zinc-300">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          background: plan.popular 
                            ? 'linear-gradient(135deg, #8B5CF6, #EC4899)'
                            : 'rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <Link 
                  href={plan.name === 'Business' ? '#contact' : '/sign-up'}
                  className={`w-full py-3 rounded-xl font-semibold text-center transition-all flex items-center justify-center gap-2 group ${
                    plan.popular 
                      ? 'text-white' 
                      : 'text-white/90 hover:text-white'
                  }`}
                  style={{
                    background: plan.popular 
                      ? 'linear-gradient(135deg, #8B5CF6, #EC4899)'
                      : 'rgba(255, 255, 255, 0.05)',
                    border: plan.popular 
                      ? 'none'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: plan.popular 
                      ? '0 0 30px rgba(139, 92, 246, 0.3)'
                      : 'none',
                  }}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        {/* Trust badges */}
        <FadeUp delay={0.5}>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm text-zinc-500">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              14-day free trial
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              Cancel anytime
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
