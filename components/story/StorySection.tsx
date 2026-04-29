// components/story/StorySection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TimelineCard } from './TimelineCard';
import { MandalaDivider } from '../shared/MandalaDivider';

const timelineItems = [
  {
    icon: "🌅",
    month: "March 2024",
    title: "I Arrived",
    text: "A tiny miracle wrapped in warmth, I came into this world and filled our home with light, laughter, and love we never knew possible.",
  },
  {
    icon: "🌱",
    month: "Now · 6 Months",
    title: "I Grew",
    text: "With each sunrise I discovered something new — a smile, a giggle, curious eyes wide open to the beauty of the world around me.",
  },
  {
    icon: "🍚",
    month: "June 2025",
    title: "First Rice",
    text: "Now comes the sacred moment — the first grain of rice touches my lips, blessed by family, tradition, and the prayers of those who love me.",
  },
];

export const StorySection: React.FC = () => {
  return (
    <section className="relative z-10 py-12 bg-gradient-to-b from-cream via-blush-light to-cream" id="story">
      <MandalaDivider />

      <div className="text-center mt-8">
        <p className="section-label-inline text-gold text-xs tracking-[0.25em] uppercase font-medium mb-2">
          ✦ His little milestones ✦
        </p>
        <h2 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-light text-dark mb-4">
          My <em className="italic text-rose not-italic">Journey</em>
        </h2>
        <p className="max-w-[520px] mx-auto text-text-mid text-[0.95rem] leading-relaxed">
          From the very first breath to this golden milestone — every moment
          has been a blessing worth celebrating.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {timelineItems.map((item, idx) => (
          <TimelineCard key={idx} {...item} index={idx} />
        ))}
      </div>
    </section>
  );
};