// components/shared/RiceGrains.tsx
'use client';

import React, { useEffect, useRef } from 'react';

export const RiceGrains: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";
    for (let i = 0; i < 30; i++) {
      const grain = document.createElement("div");
      grain.className = "rice-grain";
      const size = 4 + Math.random() * 8;
      grain.style.cssText = `
        left: ${Math.random() * 100}%;
        width: ${size * 0.4}px;
        height: ${size}px;
        animation-duration: ${6 + Math.random() * 10}s;
        animation-delay: ${Math.random() * 15}s;
        transform: rotate(${Math.random() * 60 - 30}deg);
      `;
      container.appendChild(grain);
    }

    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0" />;
};