// components/events/EventDetails.tsx
"use client";

import React from "react";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";

const eventDetails = [
  {
    icon: "📅",
    label: "DATE",
    detail: "28th June 2026",
    info: "Sunday · Auspicious Tithi",
    bgImage: null,
    mapLink: null,
  },
  {
    icon: "🕙",
    label: "TIME",
    detail: "10:00 AM",
    info: "Ceremony begins at 10:30 AM",
    bgImage: null,
    mapLink: null,
  },
  {
    icon: "📍",
    label: "VENUE",
    detail: "Pajkka",
    info: "Seuralantie 11, 60200 Seinäjoki",
    bgImage: "/venue.avif",
    mapLink: "https://www.google.com/maps?q=Seuralantie+11+Seinäjoki+Finland",
  },
  {
    icon: "🎊",
    label: "DRESS",
    detail: "Maroon",
    info: "Optional · Traditional welcome",
    bgImage: null,
    mapLink: null,
  },
  {
    icon: "🍽️",
    label: "FEAST",
    detail: "Nepali Bhoj",
    info: "Traditional lunch",
    bgImage: null,
    mapLink: null,
  },
  {
    icon: "🙏",
    label: "BLESSING",
    detail: "Tika & Ashirwad",
    info: "Bring warmest blessings",
    bgImage: null,
    mapLink: null,
  },
];

export const EventDetails: React.FC = () => {
  const handleCardClick = (mapLink: string | null) => {
    if (mapLink) {
      window.open(mapLink, "_blank");
    }
  };

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
              transition={{ duration: 1, ease: easeInOut }}
              viewport={{ once: true, margin: "100px" }}
              onClick={() => handleCardClick(item.mapLink)}
              className={`mx-auto mt-1 w-full bg-white rounded-[28px] p-5 shadow-xl border border-gold/20 relative overflow-hidden group ${
                item.mapLink ? 'cursor-pointer hover:shadow-2xl transition-all duration-300' : 'cursor-default'
              }`}
            >
              {/* Background Image for Venue Card - Always visible */}
              {item.bgImage && (
                <>
                  <div className="absolute inset-0">
                    <Image
                      src={item.bgImage}
                      alt="Venue"
                      fill
                      className="object-cover"
                    />
                    {/* Dark overlay for better text visibility */}
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                </>
              )}

              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              {/* Subtle background glow for non-venue cards */}
              {!item.bgImage && (
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-rose/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
              
              <div className="relative z-10">
                <div className={`text-3xl mb-3 transition-transform duration-300 ${
                  item.mapLink ? 'group-hover:scale-110' : 'group-hover:rotate-2'
                }`}>
                  {item.icon}
                </div>
                <p className={`text-[0.6rem] tracking-[0.2em] font-semibold mb-2 ${
                  item.bgImage ? 'text-white' : 'text-gold'
                }`}>
                  {item.label}
                </p>
                <p className={`font-serif text-base md:text-lg font-medium mb-1 transition-colors duration-300 ${
                  item.bgImage ? 'text-white' : 'text-dark group-hover:text-gold'
                }`}>
                  {item.detail}
                </p>
                <div className={`w-8 h-px mx-auto my-2 transition-all duration-300 group-hover:w-12 ${
                  item.bgImage ? 'bg-gold/60' : 'bg-gold/30'
                }`} />
                <p className={`text-[0.7rem] md:text-[0.9rem] transition-colors duration-300 ${
                  item.bgImage ? 'text-white/85' : 'text-text-light'
                }`}>
                  {item.info}
                </p>
                {/* Open Maps indicator for venue card */}
                {item.mapLink && (
                  <div className="mt-3 inline-flex items-center gap-1 text-[0.6rem] text-gold/70 group-hover:text-gold transition-colors duration-300">
                    <span>📍</span>
                    <span>Open in Maps →</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};