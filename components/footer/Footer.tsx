// components/footer/Footer.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-8 text-center bg-dark text-black/50 text-[0.75rem] tracking-[0.1em]">
      Made with{" "}
      <motion.span
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-gold inline-block"
      >
        ❤️
      </motion.span>{" "}
      for little Kiaan &nbsp;·&nbsp; Pasni 2026
    </footer>
  );
};