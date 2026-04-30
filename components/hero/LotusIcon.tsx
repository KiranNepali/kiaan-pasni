// components/hero/LotusIcon.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const LotusIcon: React.FC = () => {
  return (
    <motion.div
      // animate={{ 
      //   y: [0, -5, 0],
      // }}
      // transition={{ 
      //   duration: 3, 
      //   repeat: Infinity, 
      //   ease: "easeInOut" 
      // }}
      className="relative"
      style={{ width: "120px", height: "120px" }}
    >
      {/* Rotating outer petals */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <defs>
            <linearGradient id="petalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f7c5c0" />
              <stop offset="50%" stopColor="#e8c97a" />
              <stop offset="100%" stopColor="#c9994a" />
            </linearGradient>
          </defs>

          <g transform="translate(60, 60)">
            {[...Array(12)].map((_, i) => (
              <path
                key={i}
                d="M0 -25 Q-8 -40 0 -50 Q8 -40 0 -25"
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
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <g transform="translate(60, 60)">
            {[...Array(8)].map((_, i) => (
              <path
                key={i}
                d="M0 -15 Q-5 -25 0 -32 Q5 -25 0 -15"
                fill="#e8c97a"
                opacity={0.6}
                transform={`rotate(${i * 45 + 15})`}
              />
            ))}
          </g>
        </svg>
      </motion.div>

      {/* Floating sparkles */}
      {/* {[...Array(6)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          animate={{ 
            y: [0, -20, 0],
            x: [0, (i % 2 === 0 ? 15 : -15), 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{ 
            duration: 3, 
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute text-yellow-300 text-sm"
          style={{ 
            left: "50%", 
            top: "50%",
            transform: `rotate(${i * 60}deg) translateY(-55px)`
          }}
        >
          ✨
        </motion.div>
      ))} */}

      {/* Center circle with baby image - no black border */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Glowing ring */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -inset-2 rounded-full bg-gradient-to-r from-gold/40 to-rose/30 blur-md"
          />
          
          {/* Image circle - transparent background */}
          <div className="relative w-12 h-12 rounded-full border border-white/50 overflow-hidden shadow-lg bg-transparent">
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