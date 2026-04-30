// components/cultural/CulturalSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const culturalSymbols = [
  { symbol: "🍚", name: "Annaprashan" },
  { symbol: "🔴", name: "Tika" },
  { symbol: "🪔", name: "Deepa" },
  { symbol: "🌸", name: "Phool" },
  { symbol: "🎵", name: "Mantra" },
  { symbol: "👶", name: "Kiaan" },
];

export const CulturalSection: React.FC = () => {
  return (
    <section className="relative z-10 py-20 px-6 bg-gradient-to-br from-[#3d2c2c] via-[#5c3a3a] to-[#3d2c2c] text-white text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(201,153,74,0.08) 0, rgba(201,153,74,0.08) 1px, transparent 1px, transparent 10px),
              repeating-linear-gradient(-45deg, rgba(201,153,74,0.04) 0, rgba(201,153,74,0.04) 1px, transparent 1px, transparent 10px)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="">
          <p className="text-gold-light text-xs tracking-[0.25em] uppercase font-medium mb-2">
            ✦ Our sacred tradition ✦
          </p>
          <h2 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-light text-white">
            What is <em className="italic text-blush">Pasni?</em>
          </h2>
        </div>

        <motion.blockquote
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ x: 5 }}
          className="max-w-2xl mx-auto my-10 font-serif text-[clamp(1.1rem,3vw,1.4rem)] italic leading-relaxed text-white/85 border-l-3 border-gold pl-8 text-left"
        >
          When a child first tastes rice,
          <br />
          the universe expands a little —<br />
          ancestors smile from above,
          <br />
          and the earth receives a new soul
          <em className="block text-sm opacity-70 not-italic mt-2">
            ready to feast upon its beauty.
          </em>
        </motion.blockquote>

        <p className="max-w-2xl mx-auto text-[0.9rem] leading-relaxed text-white/60">
          Pasni (पस्नी), meaning &quot;rice feeding,&quot; is one of the most cherished
          Hindu rites of passage — the Annaprashan ceremony. When a baby is
          six months old, the family gathers to offer the child their first
          taste of cooked rice, symbolizing the transition from milk to solid
          food, and welcoming them into the full richness of life.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {culturalSymbols.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{  type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-2"
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="w-16 h-16 bg-white/10 border border-gold/30 rounded-full flex items-center justify-center text-2xl backdrop-blur-md"
              >
                {item.symbol}
              </motion.div>
              <span className="text-[0.65rem] tracking-[0.15em] uppercase text-white/50">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};