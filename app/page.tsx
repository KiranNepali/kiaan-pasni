'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from '@/components/LoadingScreen';
import { HeroSection } from '@/components/hero/HeroSection';
import { StorySection } from '@/components/story/StorySection';
import { EventDetails } from '@/components/events/EventDetails';
import { CulturalSection } from '@/components/cultural/CulturalSection';
import { GallerySection } from '@/components/gallery/GallerySection';
import { RSVPSection } from '@/components/rsvp/RSVPSection';
import { Footer } from '@/components/footer/Footer';
import { ParticleCanvas } from '@/components/shared/ParticleCanvas';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  useScrollReveal();

  // Optional: Preload main content while loading screen shows
  useEffect(() => {
    // Prevent body scroll while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Fixed Background Elements */}
          <div
            className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, #c9994a 0, #c9994a 1px, transparent 1px, transparent 8px),
                repeating-linear-gradient(-45deg, #d4847a 0, #d4847a 1px, transparent 1px, transparent 8px),
                repeating-linear-gradient(90deg, #c9994a 0, #c9994a 1px, transparent 1px, transparent 16px)
              `,
            }}
          />
          <ParticleCanvas />

          <HeroSection />
          <StorySection />
          <EventDetails />
          <CulturalSection />
          <GallerySection />
          <RSVPSection />
          <Footer />
        </>
      )}
    </>
  );
}