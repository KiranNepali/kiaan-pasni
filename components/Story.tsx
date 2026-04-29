"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "../lib/animation";

const data = [
  {
    title: "I Arrived",
    emoji: "🌅",
    text: "A tiny miracle filled our home with love.",
  },
  {
    title: "I Grew",
    emoji: "🌱",
    text: "Every day brought new smiles and joy.",
  },
  {
    title: "First Rice",
    emoji: "🍚",
    text: "Now begins my beautiful journey.",
  },
];

export default function Story() {
  return (
    <section className="py-20 px-6 text-center">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="text-4xl font-serif mb-10"
      >
        My Journey
      </motion.h2>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        className="grid md:grid-cols-3 gap-6"
      >
        {data.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="p-6 bg-white rounded-2xl shadow"
          >
            <div className="text-3xl mb-3">{item.emoji}</div>
            <h3 className="text-xl font-serif">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}