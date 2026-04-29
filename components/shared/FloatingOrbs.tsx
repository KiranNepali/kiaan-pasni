// components/shared/FloatingOrbs.tsx
'use client';

import React, { useEffect, useRef } from 'react';

export const FloatingOrbs: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const orbs: HTMLDivElement[] = [];
    for (let i = 0; i < 8; i++) {
      const orb = document.createElement("div");
      orb.className = "floating-orb";
      const size = 80 + Math.random() * 200;
      orb.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(247,197,192,0.12) 0%, rgba(232,200,122,0.04) 100%);
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation: floatOrb ${15 + Math.random() * 20}s ease-in-out infinite;
        animation-delay: ${Math.random() * 5}s;
        pointer-events: none;
        z-index: 0;
      `;
      container.appendChild(orb);
      orbs.push(orb);
    }

    return () => {
      orbs.forEach(orb => orb.remove());
    };
  }, []);

  return <div ref={containerRef as any} className="absolute inset-0" />;
};