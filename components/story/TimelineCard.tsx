// components/story/TimelineCard.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineCardProps {
  icon: string;
  month: string;
  title: string;
  text: string;
  index: number;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({ icon, month, title, text, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="bg-white/65 backdrop-blur-xl border border-white/80 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-blush to-warm rounded-full flex items-center justify-center text-[1.8rem] shadow-md"
      >
        {icon}
      </motion.div>
      <p className="text-[0.7rem] tracking-[0.15em] uppercase text-gold font-medium mb-1">
        {month}
      </p>
      <h3 className="font-serif text-[1.4rem] font-normal text-dark mb-2">
        {title}
      </h3>
      <p className="text-[0.85rem] text-text-mid leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
};