// components/shared/ParticleCanvas.tsx
'use client';

import React, { useRef } from 'react';
import { useParticleAnimation } from '@/hooks/useParticleAnimation';

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticleAnimation(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};