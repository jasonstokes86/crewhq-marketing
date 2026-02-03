'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { Magnetic, Counter } from '@/components/ui/motion';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.crewhq.com';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const }
  })
};

export function Hero() {
  return (
    <AnimatedBackground variant="hero" className="min-h-screen flex items-center pt-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20">
        {/* Two-column layout on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-20 max-w-6xl mx-auto">
          {/* Left column - Text content */}
          <div className="flex-1 text-center lg:text-left lg:max-w-none">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.1))',
                border: '1px solid rgba(139, 92, 246, 0.25)',
              }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <span className="text-sm font-medium text-violet-200">
                Powered by AI — Find creators who convert
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 font-display"
            >
              <span className="block text-white">Build your</span>
              <span 
                className="block mt-2"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F97316 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                creator crew.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              The AI-powered platform that helps brands find their perfect ambassadors 
              and creators monetize their influence. No follower minimums. 
              No complicated contracts. Just results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12"
            >
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
                href="#demo"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/90 transition-all hover:text-white"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Play className="w-4 h-4" />
                <span>Watch Demo</span>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-6 pt-8 border-t border-white/10"
            >
              {/* Avatar stack */}
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[
                    'linear-gradient(135deg, #8B5CF6, #EC4899)',
                    'linear-gradient(135deg, #EC4899, #F97316)',
                    'linear-gradient(135deg, #F97316, #FBBF24)',
                    'linear-gradient(135deg, #06B6D4, #8B5CF6)',
                    'linear-gradient(135deg, #22C55E, #06B6D4)',
                  ].map((gradient, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-[#0A0A0F]"
                      style={{ background: gradient }}
                    />
                  ))}
                </div>
                <span className="ml-4 text-sm text-zinc-400">
                  <span className="font-semibold text-white">
                    <Counter to={2847} suffix="+" className="tabular-nums" />
                  </span> creators earning
                </span>
              </div>
              
              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              
              {/* Stats */}
              <div className="flex items-center gap-6 text-sm">
                <div className="text-center lg:text-left">
                  <div className="font-semibold text-white">$<Counter to={4.2} decimals={1} />M+</div>
                  <div className="text-zinc-500">Paid out</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-semibold text-white"><Counter to={12} />x</div>
                  <div className="text-zinc-500">Avg. ROI</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Dashboard Preview */}
          <motion.div 
            className="flex-1 mt-16 lg:mt-0 relative max-w-md mx-auto lg:max-w-xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
          >
            <div 
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 0 100px rgba(139, 92, 246, 0.1)',
              }}
            >
              {/* Dashboard mockup */}
              <Image
                src="/dashboard-mockup.png"
                alt="CrewHQ Dashboard"
                width={900}
                height={650}
                className="w-full h-auto"
                priority
              />
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 sm:top-4 sm:-right-6 z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div 
                className="px-4 py-3 rounded-xl text-sm font-medium"
                style={{
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  color: '#4ADE80',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>+$847 earned today</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 sm:bottom-8 sm:-left-6 z-10"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div 
                className="px-4 py-3 rounded-xl text-sm"
                style={{
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
                  <div>
                    <div className="text-white font-medium">Sarah just joined</div>
                    <div className="text-zinc-500 text-xs">127K followers • Fashion</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
