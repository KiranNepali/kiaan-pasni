// components/story/TimelineCard.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
      // style={{ border: "1px solid rgba(232, 200, 122, 0.3)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

      <div className="w-12 h-12 mb-4 bg-gradient-to-br from-rose/20 to-gold/20 rounded-full flex items-center justify-center text-2xl">
        {icon}
      </div>

      <div>
        <p className="text-[0.65rem] tracking-[0.15em] uppercase text-gold font-medium mb-2">
          {month}
        </p>
        <h3 className="font-serif text-xl font-normal text-dark mb-2">
          {title}
        </h3>
        <p className="text-sm text-text-mid leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
};