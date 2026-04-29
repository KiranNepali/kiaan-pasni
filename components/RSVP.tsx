"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 px-6 text-center">
      {!submitted ? (
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow">
          <h2 className="text-3xl font-serif mb-4">RSVP</h2>

          <input
            placeholder="Your name"
            className="w-full p-3 border rounded mb-3"
          />

          <select className="w-full p-3 border rounded mb-3">
            <option>Guests</option>
            <option>1</option>
            <option>2</option>
          </select>

          <button
            onClick={() => setSubmitted(true)}
            className="w-full bg-rose-400 text-white p-3 rounded"
          >
            Count Me In
          </button>
        </div>
      ) : (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <h2 className="text-3xl font-serif">Thank You 💛</h2>
        </motion.div>
      )}
    </section>
  );
}