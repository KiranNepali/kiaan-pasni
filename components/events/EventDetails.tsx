// components/events/EventDetails.tsx
"use client";

import React from "react";
import { easeInOut, motion } from "framer-motion";

const eventDetails = [
  {
    icon: "📅",
    label: "DATE",
    detail: "28th June 2026",
    info: "Sunday · Auspicious Tithi",
  },
  {
    icon: "🕙",
    label: "TIME",
    detail: "10:00 AM",
    info: "Ceremony begins at 10:30 AM",
  },
  {
    icon: "📍",
    label: "VENUE",
    detail: "Pajkka",
    info: "Seuralantie 11, 60200 Seinäjoki",
  },
  {
    icon: "🎊",
    label: "DRESS",
    detail: "Maroon",
    info: "Optional · Traditional welcome",
  },
  {
    icon: "🍽️",
    label: "FEAST",
    detail: "Nepali Bhoj",
    info: "Traditional lunch",
  },
  {
    icon: "🙏",
    label: "BLESSING",
    detail: "Tika & Ashirwad",
    info: "Bring warmest blessings",
  },
];

export const EventDetails: React.FC = () => {
  return (
    <section className="relative z-10 py-16 px-6 bg-cream" id="details">
      <div className="text-center mb-12">
        <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-2">
          ✦ Mark your calendar ✦
        </p>
        <h2 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-light text-dark">
          Event <em className="italic text-rose not-italic">Details</em>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {eventDetails.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{  duration: 1, ease:easeInOut }}
              viewport={{ once: true, margin:"100px" }}
              className="mx-auto mt-1 w-full bg-white rounded-[28px] cursor-pointer p-5 shadow-xl border border-gold/20 relative overflow-hidden  group"
            >
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-rose/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-3xl mb-3 group-hover:translate-x-1 transition-transform duration-300">{item.icon}</div>
                <p className="text-[0.6rem] tracking-[0.2em] text-gold font-semibold mb-2">
                  {item.label}
                </p>
                <p className="font-serif text-base  md:text-lg font-medium text-dark mb-1">
                  {item.detail}
                </p>
                <div className="w-8 h-px bg-gold/30 mx-auto my-2 group-hover:w-12 transition-all duration-300" />
                <p className="text-[0.7rem] md:text-[0.9rem] text-text-light">
                  {item.info}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};