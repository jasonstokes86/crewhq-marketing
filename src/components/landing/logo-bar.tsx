'use client';

import { motion } from 'framer-motion';
import { FadeUp } from '@/components/ui/motion';

const logos = [
  { name: 'Shopify', width: 120 },
  { name: 'Glossier', width: 100 },
  { name: 'Allbirds', width: 100 },
  { name: 'Gymshark', width: 110 },
  { name: 'MVMT', width: 80 },
  { name: 'Casper', width: 90 },
  { name: 'Away', width: 70 },
  { name: 'Warby Parker', width: 120 },
];

export function LogoBar() {
  return (
    <section className="py-16 border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="text-center text-sm text-zinc-500 mb-10 uppercase tracking-wider font-medium">
            Trusted by fast-growing DTC brands
          </p>
        </FadeUp>
        
        {/* Infinite scroll marquee */}
        <div className="relative overflow-hidden">
          <div className="flex gap-16 animate-marquee">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center shrink-0 px-4"
                style={{ minWidth: logo.width }}
              >
                <span className="text-xl font-bold text-zinc-600 whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0A0A0F] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0A0A0F] to-transparent pointer-events-none" />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
