// components/gallery/GallerySection.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, easeIn, easeInOut } from 'framer-motion';
import Image from 'next/image';

const galleryItems = [
  { 
    id: 1,
    image: "/img1.jpg",
    title: "First Day Home",
    description: "Welcoming our little miracle",
    icon: "👶",
  },
  { 
    id: 2,
    image: "/img1.jpg",
    title: "First Smile",
    description: "A smile that lights up our world",
    icon: "😄",
  },
  { 
    id: 3,
    image: "/img1.jpg",
    title: "Bath Time Joy",
    description: "Splish splash fun",
    icon: "🌸",
  },
  { 
    id: 4,
    image: "/img1.jpg",
    title: "Sweet Dreams",
    description: "Peaceful little sleeper",
    icon: "💤",
  },
  { 
    id: 5,
    image: "/img1.jpg",
    title: "Garden Morning",
    description: "Exploring nature's beauty",
    icon: "🍃",
  },
  { 
    id: 6,
    image: "/img1.jpg",
    title: "Ready for Pasni!",
    description: "Our little prince in traditional attire",
    icon: "🎀",
  },
];

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section className="relative z-10 py-20 px-6 bg-gradient-to-b from-blush-light to-cream" id="gallery">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-rose/5 blur-3xl" />
        </div>

        <div className="text-center relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-2 inline-flex items-center gap-2"
          >
            <span className="w-8 h-px bg-gold/40"></span>
            ✦ Little moments, big memories ✦
            <span className="w-8 h-px bg-gold/40"></span>
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-light text-dark mb-4"
          >
            Our <em className="italic text-rose not-italic">Precious</em> Moments
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-text-mid text-sm max-w-md mx-auto px-8"
          >
            A glimpse into Kiaan's journey of love, laughter, and little adventures
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease:easeInOut }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedImage(item.id)}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Icon - always visible in corner */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-xl shadow-lg">
                    {item.icon}
                  </div>
                </div>

                {/* Decorative Border on Hover */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-rose to-gold"
                />
              </div>

              {/* Title below image */}
              <div className="text-center mt-3">
                <p className="text-sm font-bold text-dark tracking-wider">{item.title}</p>
                <p className="text-text-mid text-[0.9rem] mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal for Image Preview */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-lg flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={galleryItems.find(i => i.id === selectedImage)?.image || "/img1.jpg"}
                  alt="Gallery preview"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 text-center bg-gradient-to-t from-cream to-white">
                <h3 className="font-serif text-xl text-dark mb-2">
                  {galleryItems.find(i => i.id === selectedImage)?.title}
                </h3>
                <p className="text-text-mid text-sm">
                  {galleryItems.find(i => i.id === selectedImage)?.description}
                </p>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="mt-4 px-6 py-2 bg-gold text-white rounded-full text-sm hover:bg-gold/80 transition-colors"
                >
                  Close ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};