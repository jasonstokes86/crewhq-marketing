'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Instagram, TrendingUp } from 'lucide-react';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';

const testimonials = [
  {
    type: 'brand',
    quote: "We went from managing ambassadors in spreadsheets to having a fully automated program in one afternoon. CrewHQ found 47 potential ambassadors we didn't even know we had. Our CAC dropped 34% in the first quarter.",
    author: 'Sarah Chen',
    role: 'Head of Growth',
    company: 'Glow Skincare',
    avatar: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
    stats: {
      label: 'CAC reduction',
      value: '34%',
    },
  },
  {
    type: 'creator',
    quote: "I've tried every affiliate program out there. CrewHQ is the first one where I actually feel like a partner, not just a number. The portal is beautiful, payouts are fast, and I've already earned more than I did all last year.",
    author: 'Maya Rodriguez',
    role: 'Lifestyle Creator',
    company: '127K followers',
    avatar: 'linear-gradient(135deg, #EC4899, #F97316)',
    stats: {
      label: 'Monthly earnings',
      value: '$3,200',
    },
  },
  {
    type: 'brand',
    quote: "The AI discovery feature is like magic. It identified customers who were already posting about us organically — people we'd never found manually. Now they're our top performers.",
    author: 'James Park',
    role: 'Founder',
    company: 'Ripple Coffee',
    avatar: 'linear-gradient(135deg, #F97316, #FBBF24)',
    stats: {
      label: 'Ambassador revenue',
      value: '$127K',
    },
  },
  {
    type: 'creator',
    quote: "No minimum followers. No complicated contracts. I signed up, got approved in 2 minutes, and made my first commission the same day. This is how all brand collabs should work.",
    author: 'Alex Turner',
    role: 'Fitness Creator',
    company: '42K followers',
    avatar: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
    stats: {
      label: 'First sale',
      value: '< 24hrs',
    },
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)',
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
              Testimonials
            </span>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-display">
              <span className="text-white">Loved by brands </span>
              <span 
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #EC4899, #F97316)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                and creators
              </span>
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <p className="text-lg text-zinc-400">
              Don't take our word for it — hear from the people already growing with CrewHQ.
            </p>
          </FadeUp>
        </div>
        
        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="relative p-8 rounded-2xl h-full"
                style={{
                  background: testimonial.type === 'brand' 
                    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(236, 72, 153, 0.04))'
                    : 'linear-gradient(135deg, rgba(236, 72, 153, 0.08), rgba(249, 115, 22, 0.04))',
                  border: `1px solid ${testimonial.type === 'brand' 
                    ? 'rgba(139, 92, 246, 0.15)' 
                    : 'rgba(236, 72, 153, 0.15)'}`,
                }}
                whileHover={{
                  y: -4,
                  boxShadow: testimonial.type === 'brand'
                    ? '0 20px 60px rgba(139, 92, 246, 0.15)'
                    : '0 20px 60px rgba(236, 72, 153, 0.15)',
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Quote icon */}
                <Quote 
                  className="w-10 h-10 mb-6 opacity-20"
                  style={{
                    color: testimonial.type === 'brand' ? '#8B5CF6' : '#EC4899',
                  }}
                />
                
                {/* Quote text */}
                <p className="text-zinc-300 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-full"
                      style={{ background: testimonial.avatar }}
                    />
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-zinc-500">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                  
                  {/* Stat badge */}
                  <div 
                    className="px-3 py-2 rounded-lg text-right"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <div 
                      className="text-lg font-bold font-display"
                      style={{
                        background: testimonial.type === 'brand' 
                          ? 'linear-gradient(135deg, #8B5CF6, #EC4899)' 
                          : 'linear-gradient(135deg, #EC4899, #F97316)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {testimonial.stats.value}
                    </div>
                    <div className="text-xs text-zinc-500">
                      {testimonial.stats.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
