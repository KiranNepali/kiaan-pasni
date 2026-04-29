// components/gallery/GallerySection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  { icon: "👶", text: "First day home", bg: "linear-gradient(135deg,#fdecea,#f7c5c0)" },
  { icon: "😄", text: "First smile", bg: "linear-gradient(135deg,#fdf6ef,#f3e8d8)" },
  { icon: "🌸", text: "Bath time joy", bg: "linear-gradient(135deg,#f3e8d8,#e8c97a55)" },
  { icon: "💤", text: "Sweet dreams", bg: "linear-gradient(135deg,#fdecea,#d4847a33)" },
  { icon: "🍃", text: "Garden morning", bg: "linear-gradient(135deg,#b8c9b233,#fdf6ef)" },
  { icon: "🎀", text: "Ready for Pasni!", bg: "linear-gradient(135deg,#e8c97a33,#fdecea)" },
];

export const GallerySection: React.FC = () => {
  return (
    <section className="relative z-10 py-20 px-6 bg-blush-light" id="gallery">
      <div className="reveal text-center">
        <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-2">
          ✦ Little moments, big memories ✦
        </p>
        <h2 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-light text-dark">
          Our <em className="italic text-rose">Gallery</em>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-3 gap-5">
        {galleryItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, rotate: idx % 2 === 0 ? 1 : -1 }}
            className="rounded-2xl overflow-hidden aspect-square bg-white shadow-md border-3 border-white cursor-pointer group"
          >
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:brightness-95"
              style={{ background: item.bg }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-[2.5rem] opacity-50 group-hover:opacity-80 transition-all"
              >
                {item.icon}
              </motion.div>
              <p className="text-[0.7rem] text-text-light tracking-[0.1em] text-center px-4">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="text-center mt-8 text-[0.8rem] text-text-light italic">
        ✦ Replace placeholders with your little one&apos;s precious photos ✦
      </p>
    </section>
  );
};