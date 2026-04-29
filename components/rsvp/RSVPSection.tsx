// components/rsvp/RSVPSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export const RSVPSection: React.FC = () => {
  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSf1xgzw9bRuSsijp528cbGi6MDdeDj-kf2jlFJdE5gT_IoApw/viewform?usp=publish-editor"; // Replace with your actual Google Form link

  return (
    <section className="relative z-10 py-20 px-6 pb-28 bg-cream" id="rsvp">
      <div className="text-center">
        <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-2">
          ✦ Save the date ✦
        </p>
        <h2 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-light text-dark">
          Confirm Your <em className="italic text-rose">Presence</em>
        </h2>
        <p className="text-text-mid text-[0.9rem] mt-2">
          Please let us know by 1st June 2025
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto mt-12 bg-white rounded-[28px] p-10 shadow-xl border border-gold/20 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-rose to-gold" />

        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-5xl mb-4"
          >
            🍚
          </motion.div>

          <h3 className="font-serif text-2xl text-dark mb-3">
            Join Kiaan's Celebration
          </h3>

          <p className="text-text-mid text-[0.9rem] leading-relaxed mb-8">
            Kindly fill out the Google Form below to confirm your attendance.
            Your blessings mean the world to our little prince! 🙏
          </p>

          <motion.a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            // whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-gold to-rose text-dark rounded-xl font-sans font-semibold text-base cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
          >
            📝 RSVP on Google Form
          </motion.a>

          <p className="text-text-light text-[0.7rem] mt-6">
            No account needed • Takes less than a minute
          </p>
        </div>
      </motion.div>
    </section>
  );
};
