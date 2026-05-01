// components/hero/LotusIcon.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const LotusIcon: React.FC = () => {
  return (
    <motion.div
      className="relative"
      style={{ width: "160px", height: "160px" }}
    >
      {/* Rotating outer petals */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          <defs>
            <linearGradient id="petalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f7c5c0" />
              <stop offset="50%" stopColor="#e8c97a" />
              <stop offset="100%" stopColor="#c9994a" />
            </linearGradient>
          </defs>

          <g transform="translate(80, 80)">
            {[...Array(12)].map((_, i) => (
              <path
                key={i}
                d="M0 -35 Q-12 -55 0 -70 Q12 -55 0 -35"
                fill="url(#petalGrad)"
                opacity={0.8}
                transform={`rotate(${i * 30})`}
              />
            ))}
          </g>
        </svg>
      </motion.div>

      {/* Rotating inner petals (opposite direction) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          <g transform="translate(80, 80)">
            {[...Array(8)].map((_, i) => (
              <path
                key={i}
                d="M0 -22 Q-7 -35 0 -45 Q7 -35 0 -22"
                fill="#e8c97a"
                opacity={0.6}
                transform={`rotate(${i * 45 + 15})`}
              />
            ))}
          </g>
        </svg>
      </motion.div>

      {/* Center circle with baby image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Glowing ring */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -inset-3 rounded-full bg-gradient-to-r from-gold/40 to-rose/30 blur-md"
          />
          
          {/* Image circle */}
          <div className="relative w-20 h-20 rounded-full border-2 border-white/50 overflow-hidden shadow-lg bg-transparent">
            <Image
              src="/img2.jpg"
              alt="Kiaan"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};