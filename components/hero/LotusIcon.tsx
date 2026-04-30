// components/hero/LotusIcon.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const LotusIcon: React.FC = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="drop-shadow-lg"
      style={{ filter: "drop-shadow(0 8px 20px rgba(201,153,74,0.3))" }}
    >
      <svg
        width="100"
        height="100"
        viewBox="0 10 120 120"
        fill="none"
        overflow="visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="lg1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f7c5c0" />
            <stop offset="100%" stopColor="#e8c97a" />
          </radialGradient>
        </defs>

        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
          <ellipse
            key={angle}
            cx="60"
            cy="42"
            rx="12"
            ry="28"
            fill="url(#lg1)"
            opacity={idx % 2 === 0 ? 0.9 : 0.7}
            transform={`rotate(${angle} 60 70)`}
          />
        ))}

        <circle
          cx="60"
          cy="70"
          r="14"
          fill="none"
          stroke="#e8c97a"
          strokeWidth="4"
          strokeDasharray="70 40"
          strokeLinecap="round"
          opacity=".9"
        />

        <circle cx="60" cy="70" r="8" fill="#c9994a" />
        <circle cx="60" cy="70" r="4" fill="#f7c5c0" />
      </svg>
    </motion.div>
  );
};