'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FadeUp, Magnetic, Counter } from '@/components/ui/motion';
import { AnimatedBackground } from '@/components/ui/animated-background';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.crewhq.com';

export function FinalCTA() {
  return (
    <AnimatedBackground variant="hero" className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.15))',
                border: '1px solid rgba(139, 92, 246, 0.3)',
              }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(139, 92, 246, 0.2)',
                  '0 0 40px rgba(139, 92, 246, 0.3)',
                  '0 0 20px rgba(139, 92, 246, 0.2)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-violet-300" />
              <span className="text-sm font-medium text-violet-200">
                Join <Counter to={2847} className="font-bold" />+ brands & creators
              </span>
            </motion.div>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-display">
              <span className="text-white">Ready to build your </span>
              <span 
                className="block sm:inline"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F97316 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                creator crew?
              </span>
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Start your free trial today. No credit card required. 
              Set up your ambassador program in minutes and watch your 
              community become your most powerful growth channel.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Magnetic>
                <Link 
                  href={`${APP_URL}/sign-up`}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                    boxShadow: '0 0 60px rgba(139, 92, 246, 0.4), 0 0 100px rgba(236, 72, 153, 0.2)',
                  }}
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              
              <Link 
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/90 transition-all hover:text-white"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span>Talk to Sales</span>
              </Link>
            </div>
          </FadeUp>
          
          {/* Trust indicators */}
          <FadeUp delay={0.4}>
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Setup in 5 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </AnimatedBackground>
  );
}

// Footer component
export function Footer() {
  const links = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Changelog', href: '/changelog' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
    resources: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Help Center', href: '/help' },
      { label: 'Community', href: '/community' },
      { label: 'API', href: '/api' },
    ],
    legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Security', href: '/security' },
    ],
  };
  
  return (
    <footer className="py-16 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span 
                className="text-2xl font-bold font-display"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                CrewHQ
              </span>
            </Link>
            <p className="text-sm text-zinc-500 mb-4">
              The AI-powered platform for ambassador marketing.
            </p>
            <div className="flex gap-4">
              {/* Social icons would go here */}
            </div>
          </div>
          
          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4 capitalize">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link 
                      href={item.href}
                      className="text-sm text-zinc-500 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5">
          <p className="text-sm text-zinc-500 mb-4 sm:mb-0">
            © 2024 CrewHQ. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <span>Made with 💜 for brands & creators</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
