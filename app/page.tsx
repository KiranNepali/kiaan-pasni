"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import { HeroSection } from "@/components/hero/HeroSection";
import { StorySection } from "@/components/story/StorySection";
import { EventDetails } from "@/components/events/EventDetails";
import { CulturalSection } from "@/components/cultural/CulturalSection";
import { GallerySection } from "@/components/gallery/GallerySection";
import { RSVPSection } from "@/components/rsvp/RSVPSection";
import { Footer } from "@/components/footer/Footer";
import { ParticleCanvas } from "@/components/shared/ParticleCanvas";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  useScrollReveal();

  // Optional: Preload main content while loading screen shows
  useEffect(() => {
    // Prevent body scroll while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (!isLoading && audioRef.current) {
      const playAudio = () => {
        audioRef.current?.play().catch(() => {});
        window.removeEventListener("click", playAudio);
      };

      // try autoplay
      audioRef.current.play().catch(() => {});

      // fallback: first user interaction
      window.addEventListener("click", playAudio);

      return () => {
        window.removeEventListener("click", playAudio);
      };
    }
  }, [isLoading]);

  useEffect(() => {
    // Initialize Lenis with correct options
    const lenis = new Lenis({
      lerp: 0.1, // Smoothness (0.05-0.15 recommended)
      duration: 1.2, // Animation duration in seconds
      orientation: "vertical", // Scroll direction
      gestureOrientation: "vertical", // Gesture direction
      smoothWheel: true, // Enable smooth wheel scrolling
      wheelMultiplier: 1, // Wheel scroll multiplier
      touchMultiplier: 2, // Touch scroll multiplier
      infinite: false, // Prevent infinite scrolling
    });

    // Animation frame loop for smooth 60fps
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

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
          <audio ref={audioRef} src="/mangal-dhun.mp3" loop />
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
