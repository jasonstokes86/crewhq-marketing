'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Store, 
  Users, 
  TrendingUp, 
  Sparkles, 
  Gift, 
  DollarSign,
  BarChart3,
  Heart,
  Zap,
  Shield
} from 'lucide-react';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.crewhq.com';

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div 
      className="flex items-start gap-4 p-4 rounded-xl transition-all"
      whileHover={{
        background: 'rgba(139, 92, 246, 0.05)',
        x: 4,
      }}
    >
      <div 
        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
        style={{
          background: 'rgba(139, 92, 246, 0.1)',
          border: '1px solid rgba(139, 92, 246, 0.15)',
        }}
      >
        {icon}
      </div>
      <div>
        <div className="font-semibold text-white mb-1">{title}</div>
        <div className="text-sm text-zinc-400">{description}</div>
      </div>
    </motion.div>
  );
}

function CreatorFeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div 
      className="flex items-start gap-4 p-4 rounded-xl transition-all"
      whileHover={{
        background: 'rgba(236, 72, 153, 0.05)',
        x: 4,
      }}
    >
      <div 
        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
        style={{
          background: 'rgba(236, 72, 153, 0.1)',
          border: '1px solid rgba(236, 72, 153, 0.15)',
        }}
      >
        {icon}
      </div>
      <div>
        <div className="font-semibold text-white mb-1">{title}</div>
        <div className="text-sm text-zinc-400">{description}</div>
      </div>
    </motion.div>
  );
}

export function DualAudienceSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* For Brands */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp>
                <span 
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
                  style={{
                    background: 'rgba(139, 92, 246, 0.1)',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    color: '#A78BFA',
                  }}
                >
                  <Store className="w-4 h-4" />
                  For Brands
                </span>
              </FadeUp>
              
              <FadeUp delay={0.1}>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-display">
                  <span className="text-white">Turn customers into your </span>
                  <span 
                    style={{
                      background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    growth engine.
                  </span>
                </h2>
              </FadeUp>
              
              <FadeUp delay={0.2}>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                  Stop wasting money on influencers who don&apos;t convert. 
                  CrewHQ helps you find and activate the people who already 
                  love your brand — turning authentic fans into a scalable acquisition channel.
                </p>
              </FadeUp>
              
              <StaggerContainer className="space-y-4 mb-8">
                <StaggerItem>
                  <FeatureItem 
                    icon={<Sparkles className="w-5 h-5 text-violet-400" />}
                    title="AI-Powered Discovery"
                    description="Find high-converting creators hiding in your customer base"
                  />
                </StaggerItem>
                <StaggerItem>
                  <FeatureItem 
                    icon={<TrendingUp className="w-5 h-5 text-violet-400" />}
                    title="Real Attribution"
                    description="See exactly which ambassadors drive actual revenue"
                  />
                </StaggerItem>
                <StaggerItem>
                  <FeatureItem 
                    icon={<Users className="w-5 h-5 text-violet-400" />}
                    title="Scalable Management"
                    description="Handle 10 or 10,000 ambassadors from one dashboard"
                  />
                </StaggerItem>
                <StaggerItem>
                  <FeatureItem 
                    icon={<Shield className="w-5 h-5 text-violet-400" />}
                    title="Brand Protection"
                    description="Control who represents your brand with approval workflows"
                  />
                </StaggerItem>
              </StaggerContainer>
              
              <FadeUp delay={0.4}>
                <Link 
                  href={`${APP_URL}/sign-up`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all group"
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                    boxShadow: '0 0 40px rgba(139, 92, 246, 0.3)',
                  }}
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </FadeUp>
            </div>
            
            {/* Visual placeholder */}
            <FadeUp delay={0.3}>
              <div 
                className="relative aspect-square rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.05))',
                  border: '1px solid rgba(139, 92, 246, 0.15)',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <BarChart3 className="w-16 h-16 text-violet-400/30 mx-auto mb-4" />
                    <p className="text-zinc-500 text-sm">Brand Dashboard Preview</p>
                  </div>
                </div>
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30"
                  style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)' }}
                />
              </div>
            </FadeUp>
          </div>
        </div>
        
        {/* For Creators */}
        <div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp delay={0.3} className="order-2 lg:order-1">
              <div 
                className="relative aspect-square rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(249, 115, 22, 0.05))',
                  border: '1px solid rgba(236, 72, 153, 0.15)',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Heart className="w-16 h-16 text-pink-400/30 mx-auto mb-4" />
                    <p className="text-zinc-500 text-sm">Creator Portal Preview</p>
                  </div>
                </div>
                <div 
                  className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-3xl opacity-30"
                  style={{ background: 'linear-gradient(135deg, #EC4899, #F97316)' }}
                />
              </div>
            </FadeUp>
            
            <div className="order-1 lg:order-2">
              <FadeUp>
                <span 
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
                  style={{
                    background: 'rgba(236, 72, 153, 0.1)',
                    border: '1px solid rgba(236, 72, 153, 0.2)',
                    color: '#F472B6',
                  }}
                >
                  <Users className="w-4 h-4" />
                  For Creators
                </span>
              </FadeUp>
              
              <FadeUp delay={0.1}>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-display">
                  <span className="text-white">Get paid to share </span>
                  <span 
                    style={{
                      background: 'linear-gradient(135deg, #EC4899, #F97316)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    what you love.
                  </span>
                </h2>
              </FadeUp>
              
              <FadeUp delay={0.2}>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                  Forget brand deals that never materialize. CrewHQ connects you 
                  directly with brands that match your vibe — no minimum followers, 
                  no complicated contracts. Just authentic partnerships and real earnings.
                </p>
              </FadeUp>
              
              <StaggerContainer className="space-y-4 mb-8">
                <StaggerItem>
                  <CreatorFeatureItem 
                    icon={<Gift className="w-5 h-5 text-pink-400" />}
                    title="Exclusive Products"
                    description="Get early access and free products from brands you love"
                  />
                </StaggerItem>
                <StaggerItem>
                  <CreatorFeatureItem 
                    icon={<DollarSign className="w-5 h-5 text-pink-400" />}
                    title="Real Earnings"
                    description="Commission on every sale, paid directly to your bank"
                  />
                </StaggerItem>
                <StaggerItem>
                  <CreatorFeatureItem 
                    icon={<Zap className="w-5 h-5 text-pink-400" />}
                    title="No Minimums"
                    description="Start earning with any follower count — results matter"
                  />
                </StaggerItem>
                <StaggerItem>
                  <CreatorFeatureItem 
                    icon={<Heart className="w-5 h-5 text-pink-400" />}
                    title="Authentic Collabs"
                    description="Partner with brands that match your vibe and values"
                  />
                </StaggerItem>
              </StaggerContainer>
              
              <FadeUp delay={0.4}>
                <Link 
                  href="/portal"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all group"
                  style={{
                    background: 'linear-gradient(135deg, #EC4899, #F97316)',
                    boxShadow: '0 0 40px rgba(236, 72, 153, 0.3)',
                  }}
                >
                  Join as Creator
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
