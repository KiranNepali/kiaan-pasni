// components/events/EventDetails.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const eventDetails = [
  { icon: "📅", label: "Date", value: "14th June\n2025", sub: "Saturday · Auspicious Tithi" },
  { icon: "🕙", label: "Time", value: "10:00 AM\nOnwards", sub: "Ceremony begins at 10:30 AM" },
  { icon: "📍", label: "Venue", value: "Raut\nResidence", sub: "Baneshwor-10, Kathmandu" },
  { icon: "🎊", label: "Dress Code", value: "Traditional\nAttire", sub: "Daura Suruwal · Lehenga · Sari" },
  { icon: "🍽️", label: "Feast", value: "Grand\nBhoj", sub: "Traditional Nepali lunch follows" },
  { icon: "🙏", label: "Blessing", value: "Tika &\nAshirwad", sub: "Bring your warmest blessings" },
];

export const EventDetails: React.FC = () => {
  return (
    <section className="relative z-10 py-20 px-6 bg-cream" id="details">
      <div className="text-center">
        <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-2">
          ✦ Mark your calendar ✦
        </p>
        <h2 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-light text-dark">
          Event <em className="italic text-rose">Details</em>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventDetails.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white/65 backdrop-blur-xl border border-white/80 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
            
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-blush to-warm rounded-full flex items-center justify-center text-[1.8rem] shadow-md"
            >
              {item.icon}
            </motion.div>
            
            <p className="text-[0.7rem] tracking-[0.15em] uppercase text-gold font-medium mb-1">
              {item.label}
            </p>
            
            <h3 className="font-serif text-[1.4rem] font-normal text-dark mb-2 whitespace-pre-line leading-tight">
              {item.value}
            </h3>
            
            <p className="text-[0.85rem] text-text-mid leading-relaxed">
              {item.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};