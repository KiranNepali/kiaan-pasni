// components/hero/HeroSection.tsx
'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LotusIcon } from './LotusIcon';
import { ScrollIndicator } from './ScrollIndicator';
import { RiceGrains } from '../shared/RiceGrains';
import { FloatingOrbs } from '../shared/FloatingOrbs';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const lotusY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 30%, #fde8e4 0%, #fdf6ef 55%, #f3e8d8 100%)",
      }}
    >
      <RiceGrains />
      <FloatingOrbs />
      
      {/* Animated Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, rgba(247,197,192,0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 70%, rgba(232,200,122,0.2) 0%, transparent 50%),
              repeating-radial-gradient(circle at 50% 50%, rgba(201,153,74,0.05) 0px, rgba(201,153,74,0.05) 2px, transparent 2px, transparent 8px)
            `,
            animation: "slowZoom 20s ease-in-out infinite alternate",
          }}
        />
      </div>

      <motion.div style={{ y: lotusY }} className="relative z-10 mb-6">
        <LotusIcon />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="relative z-10 inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-gold/25 rounded-full px-5 py-1.5 text-xs tracking-wider uppercase text-gold font-medium mb-6"
      >
        ✦ Pasni Ceremony ✦
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative z-10 font-serif text-[clamp(4rem,12vw,9rem)] font-light leading-[0.9] text-dark tracking-[-0.02em]"
      >
        Kiaan
        <motion.span
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="block italic text-[clamp(2rem,6vw,4.5rem)] tracking-wider font-light bg-clip-text text-transparent"
          style={{ 
            backgroundImage: "linear-gradient(to right, #f7c5c0, #e8c97a)",
            backgroundSize: "200% auto"
          }}
        >
          Raut
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 1 }}
        className="relative z-10 font-['Satisfy',cursive] text-[clamp(1.1rem,3vw,1.6rem)] text-gold mt-5 mb-2"
      >
        A Baby's First Rice Journey
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 1 }}
        className="relative z-10 text-sm text-text-light tracking-[0.08em]"
      >
        invites you to share in a moment of pure joy
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 1 }}
        className="relative z-10 flex items-center gap-4 my-10"
      >
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#e8c97a] to-transparent" />
        <motion.span
          animate={{ scale: [1, 0.9, 1], opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#e8c97a] text-xl"
        >
          ❀
        </motion.span>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#e8c97a] to-transparent" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 1 }}
        className="relative z-10 text-[0.95rem] text-text-mid tracking-[0.1em] bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full"
      >
        Saturday, 28th June 2026 &nbsp;·&nbsp; Seinajoki, Finland
      </motion.p>

      <ScrollIndicator />
    </section>
  );
};