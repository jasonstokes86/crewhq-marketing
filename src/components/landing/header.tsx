'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'For Creators', href: '#creators' },
];

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.crewhq.com';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div 
          className={`mx-4 mt-4 rounded-2xl transition-all duration-300 ${
            scrolled 
              ? 'bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20' 
              : 'bg-transparent'
          }`}
        >
          <div className="container mx-auto px-6">
            <nav className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <span 
                  className="text-xl font-bold font-display"
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  CrewHQ
                </span>
              </Link>
              
              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              {/* Desktop CTAs */}
              <div className="hidden md:flex items-center gap-4">
                <a
                  href={`${APP_URL}/sign-in`}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  Sign In
                </a>
                <a
                  href={`${APP_URL}/sign-up`}
                  className="group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                    boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
                  }}
                >
                  Get Started
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white transition-colors"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                }}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </nav>
          </div>
        </div>
      </motion.header>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            
            {/* Menu panel */}
            <motion.div
              className="absolute top-24 left-4 right-4 rounded-2xl p-6"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(10, 10, 15, 0.98))',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                backdropFilter: 'blur(20px)',
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-white hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
                  <a
                    href={`${APP_URL}/sign-in`}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Sign In
                  </a>
                  <a
                    href={`${APP_URL}/sign-up`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white font-semibold"
                    style={{
                      background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                    }}
                  >
                    <Sparkles className="w-4 h-4" />
                    Get Started Free
                  </a>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
