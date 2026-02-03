'use client';

import { motion } from 'framer-motion';

interface OrbProps {
  className?: string;
  size: number;
  color: 'violet' | 'pink' | 'orange' | 'cyan';
  position: { top?: string; left?: string; right?: string; bottom?: string };
  delay?: number;
}

const colorMap = {
  violet: 'rgba(139, 92, 246, 0.35)',
  pink: 'rgba(236, 72, 153, 0.3)',
  orange: 'rgba(249, 115, 22, 0.25)',
  cyan: 'rgba(6, 182, 212, 0.25)',
};

function Orb({ size, color, position, delay = 0 }: OrbProps) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: colorMap[color],
        filter: 'blur(100px)',
        ...position,
      }}
      animate={{
        x: [0, 30, -20, 20, 0],
        y: [0, -30, 20, 10, 0],
        scale: [1, 1.05, 0.98, 1.02, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'section' | 'subtle';
  children?: React.ReactNode;
  className?: string;
}

export function AnimatedBackground({ 
  variant = 'section', 
  children, 
  className = '' 
}: AnimatedBackgroundProps) {
  const orbs = {
    hero: [
      { size: 600, color: 'violet' as const, position: { top: '-15%', left: '-10%' }, delay: 0 },
      { size: 500, color: 'pink' as const, position: { top: '20%', right: '-15%' }, delay: 3 },
      { size: 400, color: 'orange' as const, position: { bottom: '-10%', left: '30%' }, delay: 6 },
      { size: 300, color: 'cyan' as const, position: { bottom: '20%', right: '20%' }, delay: 9 },
    ],
    section: [
      { size: 400, color: 'violet' as const, position: { top: '10%', left: '-5%' }, delay: 0 },
      { size: 350, color: 'pink' as const, position: { bottom: '10%', right: '-5%' }, delay: 4 },
    ],
    subtle: [
      { size: 300, color: 'violet' as const, position: { top: '50%', left: '50%' }, delay: 0 },
    ],
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Orbs */}
      {orbs[variant].map((orb, index) => (
        <Orb key={index} {...orb} />
      ))}
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export function GradientBlur({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 30%, rgba(236, 72, 153, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 50% 80%, rgba(249, 115, 22, 0.08) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  );
}
