"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/animation";

export default function Event() {
  return (
    <section className="py-20 px-6 bg-[#fff] text-center">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="text-4xl font-serif mb-10"
      >
        Event Details
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {["Date", "Time", "Venue"].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="p-6 rounded-xl border shadow-sm"
          >
            <p className="text-yellow-600 text-xs uppercase">{item}</p>
            <h3 className="font-serif text-xl mt-2">
              {item === "Date" && "14 June 2025"}
              {item === "Time" && "10:00 AM"}
              {item === "Venue" && "Kathmandu"}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}