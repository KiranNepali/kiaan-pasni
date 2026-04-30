// components/story/TimelineCard.tsx
"use client";

import React from "react";
import { easeInOut, motion } from "framer-motion";

interface TimelineCardProps {
  icon: string;
  month: string;
  title: string;
  text: string;
  index: number;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  icon,
  month,
  title,
  text,
  index,
}) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease:easeInOut }}
      viewport={{ once: true, margin: "100px" }}
      className="bg-white/65 backdrop-blur-xl border cursor-pointer border-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

      {/* Icon at top left */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-12 h-12 mb-4 bg-gradient-to-br from-blush to-warm rounded-full flex items-center justify-center text-[1.5rem] shadow-md"
      >
        {icon}
      </motion.div>

      {/* Content */}
      <div>
        <p className="text-[0.65rem] tracking-[0.15em] uppercase text-gold font-medium mb-2">
          {month}
        </p>
        <h3 className="font-serif text-[1.3rem] font-normal text-dark mb-2">
          {title}
        </h3>
        <p className="text-[0.8rem] text-text-mid leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
};
