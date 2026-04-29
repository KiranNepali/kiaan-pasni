// components/hero/ScrollIndicator.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ScrollIndicator: React.FC = () => {
  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1 }}
      onClick={scrollToStory}
      className="absolute  bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-light text-[0.7rem] tracking-[0.12em] uppercase z-10 cursor-pointer hover:text-gold transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-px h-10 bg-gradient-to-b from-[#e8c97a] to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]" />
      scroll
    </motion.div>
  );
};