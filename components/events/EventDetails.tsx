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
      <div className="reveal text-center">
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gold/10 relative overflow-hidden group"
          >
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blush via-[#e8c97a]-light to-blush" />
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              className="w-14 h-14 bg-gradient-to-br from-[#fdecea] to-[#fdf6ef] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-5 border border-blush/50"
            >
              {item.icon}
            </motion.div>
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold font-medium mb-2">
              {item.label}
            </p>
            <p className="font-serif text-[1.5rem] font-normal text-dark leading-tight mb-1 whitespace-pre-line">
              {item.value}
            </p>
            <p className="text-[0.8rem] text-text-light">{item.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};