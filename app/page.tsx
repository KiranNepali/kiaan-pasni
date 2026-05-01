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

  // Prevent body scroll while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  // Audio setup
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (!isLoading && audioRef.current && !hasPlayed) {
      const playAudio = () => {
        if (audioRef.current && !hasPlayed) {
          audioRef.current.play()
            .then(() => {
              setHasPlayed(true);
            })
            .catch((error) => {
              console.log("Audio play failed:", error);
            });
        }
        // Remove listeners after first play attempt
        window.removeEventListener("scroll", playAudio);
        window.removeEventListener("click", playAudio);
        window.removeEventListener("touchstart", playAudio);
      };

      const handleVisibilityChange = () => {
        if (document.hidden && audioRef.current) {
          audioRef.current.pause();
        } else if (!document.hidden && audioRef.current && hasPlayed) {
          // Optional: Resume when page becomes visible again
          // audioRef.current.play().catch(() => {});
        }
      };

      // Try autoplay first (may fail due to browser policies)
      audioRef.current.play()
        .then(() => setHasPlayed(true))
        .catch(() => {});

      // Fallback: play on user interaction
      document.addEventListener("visibilitychange", handleVisibilityChange);
      window.addEventListener("scroll", playAudio);
      window.addEventListener("click", playAudio);
      window.addEventListener("touchstart", playAudio);

      return () => {
        window.removeEventListener("scroll", playAudio);
        window.removeEventListener("click", playAudio);
        window.removeEventListener("touchstart", playAudio);
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    }
  }, [isLoading, hasPlayed]);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

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
          <audio ref={audioRef} src="/mangal-dhun.mp3" loop preload="auto" />
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