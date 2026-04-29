// components/rsvp/RSVPSection.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  phone: string;
  guests: string;
  message: string;
}

export const RSVPSection: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    guests: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const submitRSVP = () => {
    if (!formData.name.trim() || !formData.guests) {
      alert("Please fill in your name and number of guests 🌸");
      return;
    }
    setShowSuccess(true);
  };

  return (
    <section className="relative z-10 py-20 px-6 pb-28 bg-cream" id="rsvp">
      <div className="reveal text-center">
        <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-2">
          ✦ We&apos;d love to see you ✦
        </p>
        <h2 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-light text-dark">
          RSVP <em className="italic text-rose">Here</em>
        </h2>
        <p className="text-text-mid text-[0.9rem] mt-2">
          Please respond by 1st June 2025
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="max-w-lg mx-auto mt-12 bg-white rounded-[28px] p-10 shadow-xl border border-blush/40 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blush via-[#e8c97a]-light to-rose" />

        {!showSuccess ? (
          <>
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="block text-5xl text-center mb-4"
            >
              🌸
            </motion.span>
            <p className="text-text-mid text-[0.9rem] leading-relaxed text-center mb-8">
              Kiaan can&apos;t wait to receive your blessings on his first rice
              journey! Let us know you&apos;ll be there — your presence means the
              world to our family. 💛
            </p>
            <div className="space-y-5">
              {/* <div> */}
                {/* <label htmlFor="name" className="block text-[0.75rem] font-medium text-text-mid tracking-[0.05em] mb-1">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Priya Auntie &amp; family"
                  className="w-full px-4 py-3 border-2 border-gold/20 rounded-xl font-sans text-[0.9rem] text-dark bg-cream outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,153,74,0.1)] transition-all"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[0.75rem] font-medium text-text-mid tracking-[0.05em] mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+977 98XXXXXXXX"
                  className="w-full px-4 py-3 border-2 border-gold/20 rounded-xl font-sans text-[0.9rem] text-dark bg-cream outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,153,74,0.1)] transition-all"
                />
              </div>
              <div>
                <label htmlFor="guests" className="block text-[0.75rem] font-medium text-text-mid tracking-[0.05em] mb-1">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gold/20 rounded-xl font-sans text-[0.9rem] text-dark bg-cream outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,153,74,0.1)] transition-all appearance-none"
                >
                  <option value="">Select…</option>
                  <option>Just me (1)</option>
                  <option>2 guests</option>
                  <option>3–4 guests</option>
                  <option>5+ guests</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-[0.75rem] font-medium text-text-mid tracking-[0.05em] mb-1">
                  A Blessing for Kiaan (optional)
                </label>
                <input
                  id="message"
                  type="text"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="e.g. Dheeray ramro hoos! 🌟"
                  className="w-full px-4 py-3 border-2 border-gold/20 rounded-xl font-sans text-[0.9rem] text-dark bg-cream outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,153,74,0.1)] transition-all"
                />
              </div> */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={submitRSVP}
                className="w-full py-4 bg-gradient-to-r from-rose to-gold text-zinc-800 rounded-xl font-sans font-medium text-base cursor-pointer mt-2 shadow-md hover:shadow-lg transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">🙏 &nbsp; Count Me In!</span>
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </motion.button>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5 }}
              className="text-5xl mb-4"
            >
              🎉
            </motion.div>
            <div className="font-serif text-[1.6rem] text-dark mb-2">
              Shuva Kamnaa!
            </div>
            <p className="text-text-mid text-[0.9rem]">
              Thank you for RSVPing. Kiaan and our family can&apos;t wait to
              celebrate with you. See you on June 14th! 🌸
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};