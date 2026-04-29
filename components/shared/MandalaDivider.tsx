// components/shared/MandalaDivider.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const MandalaDivider: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-8 px-4 max-w-7xl mx-auto">
      <div className="flex-1 max-w-[200px] h-px bg-gradient-to-r from-transparent via-[#e8c97a]/40 to-transparent" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        whileHover={{ rotate: 360, transition: { duration: 3 } }}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="#c9994a"
            strokeWidth=".5"
            opacity=".3"
          />
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="#d4847a"
            strokeWidth=".5"
            opacity=".4"
          />
          <circle
            cx="50"
            cy="50"
            r="28"
            stroke="#c9994a"
            strokeWidth=".8"
            opacity=".5"
          />
          <circle cx="50" cy="50" r="10" fill="#f7c5c0" opacity=".6" />
          <g stroke="#c9994a" strokeWidth=".5" opacity=".5">
            <line x1="50" y1="2" x2="50" y2="98" />
            <line x1="2" y1="50" x2="98" y2="50" />
            <line x1="15" y1="15" x2="85" y2="85" />
            <line x1="85" y1="15" x2="15" y2="85" />
          </g>
          <g fill="#c9994a" opacity=".6">
            <circle cx="50" cy="12" r="2" />
            <circle cx="88" cy="50" r="2" />
            <circle cx="50" cy="88" r="2" />
            <circle cx="12" cy="50" r="2" />
            <circle cx="71" cy="21" r="1.5" />
            <circle cx="79" cy="71" r="1.5" />
            <circle cx="29" cy="79" r="1.5" />
            <circle cx="21" cy="29" r="1.5" />
          </g>
        </svg>
      </motion.div>
      <div className="flex-1 max-w-[200px] h-px bg-gradient-to-r from-transparent via-[#e8c97a]/40 to-transparent" />
    </div>
  );
};