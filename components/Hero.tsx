"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#fdecea] to-[#fdf6ef]">

      <motion.div variants={fadeUp} initial="hidden" animate="show">
        <p className="text-xs tracking-widest text-yellow-700 mb-4">
          ✦ Pasni Ceremony ✦
        </p>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-6xl md:text-8xl font-light font-serif"
      >
        Aarav
        <span className="block italic text-rose-400 text-3xl md:text-5xl">
          Sharma
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-4 text-yellow-600 font-script text-xl"
      >
        A Baby's First Rice Journey
      </motion.p>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-sm text-gray-500 mt-2"
      >
        Saturday, 14th June 2025 · Kathmandu
      </motion.p>
    </section>
  );
}