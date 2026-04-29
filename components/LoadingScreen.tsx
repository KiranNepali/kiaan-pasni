// components/LoadingScreen.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Preparing the celebration...");
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const loadingMessages = [
    "Sprinkling rice grains...",
    "Lighting the diyas...",
    "Waiting for Kiaan...",
    "Arranging blessings...",
    "Almost ready...",
  ];

  useEffect(() => {
    // Set dimensions after mount
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      if (messageIndex < loadingMessages.length - 1) {
        messageIndex++;
        setLoadingText(loadingMessages[messageIndex]);
      }
    }, 800);

    const duration = 3000;
    const interval = 25;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      
      if (currentStep >= steps) {
        clearInterval(timer);
        clearInterval(messageInterval);
        setTimeout(onComplete, 500);
      }
    }, interval);

    return () => {
      clearInterval(timer);
      clearInterval(messageInterval);
    };
  }, [onComplete]);

  // Don't render until we have dimensions
  if (dimensions.width === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, #fef8e8 0%, #fdf0e0 40%, #f5e6d3 100%)"
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Traditional Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, #c9994a 0, #c9994a 1px, transparent 1px, transparent 40px),
              repeating-linear-gradient(-45deg, #d4847a 0, #d4847a 1px, transparent 1px, transparent 40px)
            `
          }}
        />
        
        {/* Soft Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Floating rice grains */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * dimensions.width,
              y: dimensions.height + 100,
              rotate: 0,
              opacity: 0
            }}
            animate={{ 
              y: -100,
              rotate: 360,
              opacity: [0, 0.8, 0.8, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-2 h-4 bg-gradient-to-b from-gold to-rose rounded-full"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}

        {/* Floating lotus petals */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`petal-${i}`}
            initial={{ 
              x: Math.random() * dimensions.width,
              y: dimensions.height,
              rotate: 0,
              scale: 0
            }}
            animate={{ 
              y: -150,
              rotate: 180,
              scale: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 4 + Math.random() * 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
            className="absolute"
          >
            <div className="w-3 h-3 bg-pink-300/40 rounded-full blur-sm" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Animated Baby Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.5 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 mx-auto">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img src="/img1.jpg" alt="Kiaan" className='w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl' />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -top-4 -right-4 text-2xl"
            >
              ✨
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-2 -left-4 text-2xl"
            >
              🌟
            </motion.div>
          </div>
        </motion.div>

        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-2"
        >
          <h1 className="font-serif text-4xl md:text-5xl text-dark">
            Kiaan's
          </h1>
          <h2 className="font-serif text-3xl md:text-4xl text-gold">
            Pasni Ceremony
          </h2>
        </motion.div>

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-6"
        />

        {/* Loading Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-text-mid text-sm mb-6"
        >
          {loadingText}
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-gold/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold to-rose rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>

        {/* Rotating Mandala */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="mt-8 opacity-30"
        >
          <svg width="40" height="40" viewBox="0 0 100 100" className="mx-auto">
            <circle cx="50" cy="50" r="48" stroke="#c9994a" strokeWidth=".5" fill="none"/>
            <circle cx="50" cy="50" r="38" stroke="#d4847a" strokeWidth=".5" fill="none"/>
            <circle cx="50" cy="50" r="28" stroke="#c9994a" strokeWidth=".8" fill="none"/>
            <circle cx="50" cy="50" r="10" fill="#f7c5c0" opacity=".6"/>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};