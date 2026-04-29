// components/story/StorySection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TimelineCard } from './TimelineCard';
import { MandalaDivider } from '../shared/MandalaDivider';

const timelineItems = [
  {
    icon: "👶",
    month: "Jan 2026",
    title: "I Arrived",
    text: "A tiny miracle arrived, filling our home with light, laughter, and love.",
  },
  {
    icon: "🍼",
    month: "Now · 3 Months",
    title: "I Grew",
    text: "Each day brings something new — smiles, giggles, and curious little discoveries.",
  },
  {
    icon: "🍚",
    month: "June 2026",
    title: "First Rice",
    text: "A special moment — my first taste of rice, blessed with love and tradition.",
  },
];

export const StorySection: React.FC = () => {
  return (
    <section className="relative z-10 py-12 bg-gradient-to-b from-cream via-blush-light to-cream" id="story">
      <MandalaDivider />

      <div className="text-center mt-8 px-8">
        <p className="section-label-inline text-gold text-xs tracking-[0.25em] uppercase font-medium mb-2">
          ✦ His little milestones ✦
        </p>
        <h2 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-light text-dark mb-4">
          My <em className="italic text-rose not-italic">Journey</em>
        </h2>
        <p className="max-w-130 mx-auto text-text-mid text-[0.95rem] leading-relaxed">
          From the very first breath to this golden milestone — every moment
          has been a blessing worth celebrating.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {timelineItems.map((item, idx) => (
          <TimelineCard key={idx} {...item} index={idx}  />
        ))}
      </div>
    </section>
  );
};