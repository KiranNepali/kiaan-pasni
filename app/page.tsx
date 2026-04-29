// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useInView,
//   AnimatePresence,
// } from "framer-motion";

// export default function HomePage() {
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     guests: "",
//     message: "",
//   });

//   const heroRef = useRef<HTMLElement>(null);
//   const riceContainerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   const { scrollYProgress } = useScroll();
//   const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
//   const lotusY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

//   const storyRef = useRef(null);
//   const isStoryInView = useInView(storyRef, { once: true, amount: 0.2 });

//   // --- Particle Animation (Canvas) ---
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let W = window.innerWidth;
//     let H = window.innerHeight;
//     let particles: any[] = [];
//     let animationFrameId: number;

//     const resize = () => {
//       W = canvas.width = window.innerWidth;
//       H = canvas.height = window.innerHeight;
//     };
//     window.addEventListener("resize", resize);
//     resize();

//     class Particle {
//       x: number;
//       y: number;
//       r: number;
//       vx: number;
//       vy: number;
//       alpha: number;
//       pulse: number;
//       color: string;
//       constructor() {
//         this.reset();
//       }
//       reset() {
//         this.x = Math.random() * W;
//         this.y = Math.random() * H;
//         this.r = Math.random() * 2 + 0.5;
//         this.vx = (Math.random() - 0.5) * 0.3;
//         this.vy = (Math.random() - 0.5) * 0.3;
//         this.alpha = Math.random() * 0.5 + 0.1;
//         this.pulse = Math.random() * Math.PI * 2;
//         this.color = ["#c9994a", "#f7c5c0", "#d4847a", "#e8c97a"][
//           Math.floor(Math.random() * 4)
//         ];
//       }
//       draw() {
//         if (!ctx) return;
//         this.pulse += 0.02;
//         const a = this.alpha * (0.6 + 0.4 * Math.sin(this.pulse));
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
//         ctx.fillStyle = this.color;
//         ctx.globalAlpha = a;
//         ctx.fill();
//         ctx.globalAlpha = 1;
//         this.x += this.vx;
//         this.y += this.vy;
//         if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
//       }
//     }

//     for (let i = 0; i < 80; i++) particles.push(new Particle());

//     const animate = () => {
//       if (!ctx) return;
//       ctx.clearRect(0, 0, W, H);
//       particles.forEach((p) => p.draw());
//       animationFrameId = requestAnimationFrame(animate);
//     };
//     animate();

//     return () => {
//       window.removeEventListener("resize", resize);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   // --- Rice Grains Animation ---
//   useEffect(() => {
//     const container = riceContainerRef.current;
//     if (!container) return;

//     container.innerHTML = "";
//     for (let i = 0; i < 30; i++) {
//       const grain = document.createElement("div");
//       grain.className = "rice-grain";
//       const size = 4 + Math.random() * 8;
//       grain.style.cssText = `
//         left: ${Math.random() * 100}%;
//         width: ${size * 0.4}px;
//         height: ${size}px;
//         animation-duration: ${6 + Math.random() * 10}s;
//         animation-delay: ${Math.random() * 15}s;
//         transform: rotate(${Math.random() * 60 - 30}deg);
//       `;
//       container.appendChild(grain);
//     }
//   }, []);

//   // --- Scroll Reveal Observer ---
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.12 },
//     );

//     const elements = document.querySelectorAll(".reveal");
//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   // --- Floating Orbs ---
//   useEffect(() => {
//     const hero = heroRef.current;
//     if (!hero) return;

//     for (let i = 0; i < 8; i++) {
//       const orb = document.createElement("div");
//       orb.className = "floating-orb";
//       const size = 80 + Math.random() * 200;
//       orb.style.cssText = `
//         position: absolute;
//         width: ${size}px;
//         height: ${size}px;
//         background: radial-gradient(circle, rgba(247,197,192,0.12) 0%, rgba(232,200,122,0.04) 100%);
//         border-radius: 50%;
//         top: ${Math.random() * 100}%;
//         left: ${Math.random() * 100}%;
//         animation: floatOrb ${15 + Math.random() * 20}s ease-in-out infinite;
//         animation-delay: ${Math.random() * 5}s;
//         pointer-events: none;
//         z-index: 0;
//       `;
//       hero.appendChild(orb);
//     }
//   }, []);

//   const submitRSVP = () => {
//     if (!formData.name.trim() || !formData.guests) {
//       alert("Please fill in your name and number of guests 🌸");
//       return;
//     }
//     setShowSuccess(true);
//   };

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
//   ) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//   };

//   return (
//     <>
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes floatY {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-12px);
//           }
//         }
//         @keyframes floatOrb {
//           0%,
//           100% {
//             transform: translateY(0px) translateX(0px) rotate(0deg);
//           }
//           33% {
//             transform: translateY(-40px) translateX(30px) rotate(120deg);
//           }
//           66% {
//             transform: translateY(30px) translateX(-25px) rotate(240deg);
//           }
//         }
//         @keyframes spinSlow {
//           from {
//             transform: rotate(0);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         @keyframes scrollPulse {
//           0%,
//           100% {
//             opacity: 1;
//             transform: scaleY(1);
//           }
//           50% {
//             opacity: 0.4;
//             transform: scaleY(0.7);
//           }
//         }
//         @keyframes riceFloat {
//           0% {
//             opacity: 0;
//             transform: translateY(100vh) rotate(0deg);
//           }
//           10% {
//             opacity: 0.8;
//           }
//           90% {
//             opacity: 0.8;
//           }
//           100% {
//             opacity: 0;
//             transform: translateY(-10vh) rotate(360deg);
//           }
//         }
//         @keyframes bounce {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-8px);
//           }
//         }
//         @keyframes shimmer {
//           0%,
//           100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
//         @keyframes slowZoom {
//           0% {
//             transform: scale(1);
//           }
//           100% {
//             transform: scale(1.1);
//           }
//         }

//         .rice-grain {
//           position: absolute;
//           background: linear-gradient(135deg, #f5e6c8, #e8c97a);
//           border-radius: 50%;
//           opacity: 0;
//           animation: riceFloat linear infinite;
//           pointer-events: none;
//           z-index: 1;
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//         }

//         .reveal {
//           opacity: 0;
//           transform: translateY(40px);
//           transition:
//             opacity 0.7s ease,
//             transform 0.7s ease;
//         }
//         .reveal.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         .reveal-delay-1 {
//           transition-delay: 0.1s;
//         }
//         .reveal-delay-2 {
//           transition-delay: 0.2s;
//         }
//         .reveal-delay-3 {
//           transition-delay: 0.3s;
//         }

//         .gallery-frame:nth-child(2) {
//           transform: rotate(1.5deg);
//         }
//         .gallery-frame:nth-child(4) {
//           transform: rotate(-1deg);
//         }
//         .gallery-frame:nth-child(6) {
//           transform: rotate(0.8deg);
//         }

//         .rsvp-success {
//           display: none;
//         }
//         .rsvp-success.show {
//           display: block;
//           animation: fadeInUp 0.5s ease;
//         }
//       `}</style>

//       {/* Fixed Background Elements */}
//       <div
//         className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
//         style={{
//           backgroundImage: `
//             repeating-linear-gradient(45deg, #c9994a 0, #c9994a 1px, transparent 1px, transparent 8px),
//             repeating-linear-gradient(-45deg, #d4847a 0, #d4847a 1px, transparent 1px, transparent 8px),
//             repeating-linear-gradient(90deg, #c9994a 0, #c9994a 1px, transparent 1px, transparent 16px)
//           `,
//         }}
//       />
//       <canvas
//         ref={canvasRef}
//         className="fixed inset-0 pointer-events-none z-0"
//       />

//       {/* HERO SECTION - EXACTLY as original */}
//       <section
//         ref={heroRef}
//         className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 overflow-hidden"
//         style={{
//           background:
//             "radial-gradient(ellipse 80% 70% at 50% 30%, #fde8e4 0%, #fdf6ef 55%, #f3e8d8 100%)",
//         }}
//       >
//         {/* Rice Container */}
//         <div
//           ref={riceContainerRef}
//           className="absolute inset-0 pointer-events-none z-0"
//         />

//         {/* Animated Background Layer */}
//         <div className="absolute inset-0 pointer-events-none z-0">
//           <div
//             className="absolute inset-0"
//             style={{
//               background: `
//                 radial-gradient(ellipse at 30% 20%, rgba(247,197,192,0.4) 0%, transparent 50%),
//                 radial-gradient(ellipse at 70% 70%, rgba(232,200,122,0.2) 0%, transparent 50%),
//                 repeating-radial-gradient(circle at 50% 50%, rgba(201,153,74,0.05) 0px, rgba(201,153,74,0.05) 2px, transparent 2px, transparent 8px)
//               `,
//               animation: "slowZoom 20s ease-in-out infinite alternate",
//             }}
//           />
//           <div
//             className="absolute inset-0 opacity-20"
//             style={{
//               backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" opacity="0.05"><path fill="none" stroke="%23c9994a" stroke-width="0.5" d="M20,20 L80,20 M20,40 L80,40 M20,60 L80,60 M20,80 L80,80 M40,20 L40,80 M60,20 L60,80"/><circle cx="50" cy="50" r="30" stroke="%23d4847a" stroke-width="0.5" fill="none"/></svg>')`,
//               backgroundSize: "60px 60px",
//             }}
//           />
//         </div>

//         {/* Lotus with Framer Motion */}
//         <motion.div
//           style={{ y: lotusY }}
//           animate={{
//             // y: [0, -12, 0],
//             rotate: 360,
//           }}
//           transition={{
//             // y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//             rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//           }}
//           className="relative z-10 mb-6"
//         >
//           <svg
//             width="100"
//             height="100"
//             viewBox="0 0 120 120"
//             fill="none"
//             overflow="visible"
//             xmlns="http://www.w3.org/2000/svg"
//             className="drop-shadow-lg transition-all duration-300 pb-1.5"
//             style={{ filter: "drop-shadow(0 8px 20px rgba(201,153,74,0.3))" }}
//           >
//             <defs>
//               <radialGradient id="lg1" cx="50%" cy="50%" r="50%">
//                 <stop offset="0%" stopColor="#f7c5c0" />
//                 <stop offset="100%" stopColor="#e8c97a" />
//               </radialGradient>
//             </defs>

//             {/* Petals */}
//             <ellipse
//               cx="60"
//               cy="42"
//               rx="12"
//               ry="28"
//               fill="url(#lg1)"
//               opacity=".9"
//               transform="rotate(0 60 70)"
//             />
//             <ellipse
//               cx="60"
//               cy="42"
//               rx="12"
//               ry="28"
//               fill="url(#lg1)"
//               opacity=".8"
//               transform="rotate(45 60 70)"
//             />
//             <ellipse
//               cx="60"
//               cy="42"
//               rx="12"
//               ry="28"
//               fill="url(#lg1)"
//               opacity=".7"
//               transform="rotate(90 60 70)"
//             />
//             <ellipse
//               cx="60"
//               cy="42"
//               rx="12"
//               ry="28"
//               fill="url(#lg1)"
//               opacity=".8"
//               transform="rotate(135 60 70)"
//             />
//             <ellipse
//               cx="60"
//               cy="42"
//               rx="12"
//               ry="28"
//               fill="url(#lg1)"
//               opacity=".9"
//               transform="rotate(180 60 70)"
//             />
//             <ellipse
//               cx="60"
//               cy="42"
//               rx="12"
//               ry="28"
//               fill="url(#lg1)"
//               opacity=".8"
//               transform="rotate(225 60 70)"
//             />
//             <ellipse
//               cx="60"
//               cy="42"
//               rx="12"
//               ry="28"
//               fill="url(#lg1)"
//               opacity=".7"
//               transform="rotate(270 60 70)"
//             />
//             <ellipse
//               cx="60"
//               cy="42"
//               rx="12"
//               ry="28"
//               fill="url(#lg1)"
//               opacity=".8"
//               transform="rotate(315 60 70)"
//             />

//             {/* Bottom partial arc (instead of full circle) */}
//             <circle
//               cx="60"
//               cy="70"
//               r="14"
//               fill="none"
//               stroke="#e8c97a"
//               strokeWidth="4"
//               strokeDasharray="70 40"
//               strokeLinecap="round"
//               opacity=".9"
//             />

//             {/* Inner core */}
//             <circle cx="60" cy="70" r="8" fill="#c9994a" />
//             <circle cx="60" cy="70" r="4" fill="#f7c5c0" />
//           </svg>
//         </motion.div>

//         {/* Hero Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 1 }}
//           className="relative z-10 inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-gold/25 rounded-full px-5 py-1.5 text-xs tracking-wider uppercase text-gold font-medium mb-6 hover:bg-white/80 hover:border-gold transition-all duration-300"
//         >
//           ✦ Pasni Ceremony ✦
//         </motion.div>

//         {/* Hero Name */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 1 }}
//           className="relative z-10 font-serif text-[clamp(4rem,12vw,9rem)] font-light leading-[0.9] text-dark tracking-[-0.02em]"
//         >
//           Kiaan
//           <motion.span
//   animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
//   transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//   className="block italic text-[clamp(2rem,6vw,4.5rem)] tracking-wider font-light bg-clip-text text-transparent"
//   style={{ 
//     backgroundImage: "linear-gradient(to right, #f7c5c0, #e8c97a)",
//     backgroundSize: "200% auto"
//   }}
// >
//   Raut
// </motion.span>
//         </motion.h1>

//         {/* Hero Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.45, duration: 1 }}
//           className="relative z-10 font-['Satisfy',cursive] text-[clamp(1.1rem,3vw,1.6rem)] text-gold mt-5 mb-2"
//         >
//           A Baby's First Rice Journey
//         </motion.p>

//         {/* Hero Tagline */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.55, duration: 1 }}
//           className="relative z-10 text-sm text-text-light tracking-[0.08em]"
//         >
//           invites you to share in a moment of pure joy
//         </motion.p>

//         {/* Hero Divider */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.65, duration: 1 }}
//           className="relative z-10 flex items-center gap-4 my-10"
//         >
//           <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#e8c97a] to-transparent" />
//           <motion.span
//             animate={{ scale: [1, 0.9, 1], opacity: [1, 0.6, 1] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="text-[#e8c97a] text-xl"
//           >
//             ❀
//           </motion.span>
//           <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#e8c97a] to-transparent" />
//         </motion.div>

//         {/* Hero Date */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.75, duration: 1 }}
//           className="relative z-10 text-[0.95rem] text-text-mid tracking-[0.1em] bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full"
//         >
//           Saturday, 14th June 2025 &nbsp;·&nbsp; Kathmandu, Nepal
//         </motion.p>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2, duration: 1 }}
//           onClick={() =>
//             document
//               .getElementById("story")
//               ?.scrollIntoView({ behavior: "smooth" })
//           }
//           className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-light text-[0.7rem] tracking-[0.12em] uppercase z-10 cursor-pointer hover:text-gold transition-all duration-300 hover:-translate-y-1"
//         >
//           <div className="w-px h-10 bg-gradient-to-b from-[#e8c97a] to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]" />
//           scroll
//         </motion.div>
//       </section>

//       {/* MANDALA DIVIDER - STORY SECTION */}
//       <section
//         className="relative z-10 py-12 bg-gradient-to-b from-cream via-blush-light to-cream"
//         id="story"
//       >
//         <div className="flex items-center justify-center gap-8 px-4 max-w-7xl mx-auto">
//           <div className="flex-1 max-w-[200px] h-px bg-gradient-to-r from-transparent via-[#e8c97a]/40 to-transparent" />
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             whileHover={{ rotate: 360, transition: { duration: 3 } }}
//           >
//             <svg
//               width="60"
//               height="60"
//               viewBox="0 0 100 100"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <circle
//                 cx="50"
//                 cy="50"
//                 r="48"
//                 stroke="#c9994a"
//                 strokeWidth=".5"
//                 opacity=".3"
//               />
//               <circle
//                 cx="50"
//                 cy="50"
//                 r="38"
//                 stroke="#d4847a"
//                 strokeWidth=".5"
//                 opacity=".4"
//               />
//               <circle
//                 cx="50"
//                 cy="50"
//                 r="28"
//                 stroke="#c9994a"
//                 strokeWidth=".8"
//                 opacity=".5"
//               />
//               <circle cx="50" cy="50" r="10" fill="#f7c5c0" opacity=".6" />
//               <g stroke="#c9994a" strokeWidth=".5" opacity=".5">
//                 <line x1="50" y1="2" x2="50" y2="98" />
//                 <line x1="2" y1="50" x2="98" y2="50" />
//                 <line x1="15" y1="15" x2="85" y2="85" />
//                 <line x1="85" y1="15" x2="15" y2="85" />
//               </g>
//               <g fill="#c9994a" opacity=".6">
//                 <circle cx="50" cy="12" r="2" />
//                 <circle cx="88" cy="50" r="2" />
//                 <circle cx="50" cy="88" r="2" />
//                 <circle cx="12" cy="50" r="2" />
//                 <circle cx="71" cy="21" r="1.5" />
//                 <circle cx="79" cy="71" r="1.5" />
//                 <circle cx="29" cy="79" r="1.5" />
//                 <circle cx="21" cy="29" r="1.5" />
//               </g>
//             </svg>
//           </motion.div>
//           <div className="flex-1 max-w-[200px] h-px bg-gradient-to-r from-transparent via-[#e8c97a]/40 to-transparent" />
//         </div>

//         <div className="reveal text-center mt-8">
//           <p className="section-label-inline text-gold text-xs tracking-[0.25em] uppercase font-medium mb-2">
//             ✦ His little milestones ✦
//           </p>
//           <h2 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-light text-dark mb-4">
//             My <em className="italic text-rose not-italic">Journey</em>
//           </h2>
//           <p className="max-w-[520px] mx-auto text-text-mid text-[0.95rem] leading-relaxed">
//             From the very first breath to this golden milestone — every moment
//             has been a blessing worth celebrating.
//           </p>
//         </div>

//         {/* Story Timeline Cards */}
//         <div className="max-w-6xl mx-auto mt-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             {
//               icon: "🌅",
//               month: "March 2024",
//               title: "I Arrived",
//               text: "A tiny miracle wrapped in warmth, I came into this world and filled our home with light, laughter, and love we never knew possible.",
//             },
//             {
//               icon: "🌱",
//               month: "Now · 6 Months",
//               title: "I Grew",
//               text: "With each sunrise I discovered something new — a smile, a giggle, curious eyes wide open to the beauty of the world around me.",
//             },
//             {
//               icon: "🍚",
//               month: "June 2025",
//               title: "First Rice",
//               text: "Now comes the sacred moment — the first grain of rice touches my lips, blessed by family, tradition, and the prayers of those who love me.",
//             },
//           ].map((item, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1, duration: 0.7 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -6 }}
//               className="bg-white/65 backdrop-blur-xl border border-white/80 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
//             >
//               <div className="absolute inset-0  bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
//               <motion.div
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-blush to-warm rounded-full flex items-center justify-center text-[1.8rem] shadow-md"
//               >
//                 {item.icon}
//               </motion.div>
//               <p className="text-[0.7rem] tracking-[0.15em] uppercase text-gold font-medium mb-1">
//                 {item.month}
//               </p>
//               <h3 className="font-serif text-[1.4rem] font-normal text-dark mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-[0.85rem] text-text-mid leading-relaxed">
//                 {item.text}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* EVENT DETAILS SECTION */}
//       <section className="relative z-10 py-20 px-6 bg-cream" id="details">
//         <div className="reveal text-center">
//           <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-2">
//             ✦ Mark your calendar ✦
//           </p>
//           <h2 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-light text-dark">
//             Event <em className="italic text-rose">Details</em>
//           </h2>
//         </div>

//         <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             {
//               icon: "📅",
//               label: "Date",
//               value: "14th June\n2025",
//               sub: "Saturday · Auspicious Tithi",
//             },
//             {
//               icon: "🕙",
//               label: "Time",
//               value: "10:00 AM\nOnwards",
//               sub: "Ceremony begins at 10:30 AM",
//             },
//             {
//               icon: "📍",
//               label: "Venue",
//               value: "Raut\nResidence",
//               sub: "Baneshwor-10, Kathmandu",
//             },
//             {
//               icon: "🎊",
//               label: "Dress Code",
//               value: "Traditional\nAttire",
//               sub: "Daura Suruwal · Lehenga · Sari",
//             },
//             {
//               icon: "🍽️",
//               label: "Feast",
//               value: "Grand\nBhoj",
//               sub: "Traditional Nepali lunch follows",
//             },
//             {
//               icon: "🙏",
//               label: "Blessing",
//               value: "Tika &\nAshirwad",
//               sub: "Bring your warmest blessings",
//             },
//           ].map((item, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -4 }}
//               className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gold/10 relative overflow-hidden group"
//             >
//               <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blush via-[#e8c97a]-light to-blush" />
//               <motion.div
//                 whileHover={{ scale: 1.05, rotate: 3 }}
//                 className="w-14 h-14 bg-gradient-to-br from-[#fdecea] to-[#fdf6ef] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-5 border border-blush/50"
//               >
//                 {item.icon}
//               </motion.div>
//               <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold font-medium mb-2">
//                 {item.label}
//               </p>
//               <p className="font-serif text-[1.5rem] font-normal text-dark leading-tight mb-1 whitespace-pre-line">
//                 {item.value}
//               </p>
//               <p className="text-[0.8rem] text-text-light">{item.sub}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* CULTURAL SECTION */}
//       <section className="relative z-10 py-20 px-6 bg-gradient-to-br from-[#3d2c2c] via-[#5c3a3a] to-[#3d2c2c] text-white text-center overflow-hidden">
//         <div className="absolute inset-0 pointer-events-none">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `
//               repeating-linear-gradient(45deg, rgba(201,153,74,0.08) 0, rgba(201,153,74,0.08) 1px, transparent 1px, transparent 10px),
//               repeating-linear-gradient(-45deg, rgba(201,153,74,0.04) 0, rgba(201,153,74,0.04) 1px, transparent 1px, transparent 10px)
//             `,
//             }}
//           />
//         </div>

//         <div className="relative z-10 max-w-4xl mx-auto">
//           <div className="reveal">
//             <p className="text-gold-light text-xs tracking-[0.25em] uppercase font-medium mb-2">
//               ✦ Our sacred tradition ✦
//             </p>
//             <h2 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-light text-white">
//               What is <em className="italic text-blush">Pasni?</em>
//             </h2>
//           </div>

//           <motion.blockquote
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             whileHover={{ x: 5 }}
//             className="max-w-2xl mx-auto my-10 font-serif text-[clamp(1.1rem,3vw,1.4rem)] italic leading-relaxed text-white/85 border-l-3 border-gold pl-8 text-left"
//           >
//             When a child first tastes rice,
//             <br />
//             the universe expands a little —<br />
//             ancestors smile from above,
//             <br />
//             and the earth receives a new soul
//             <em className="block text-sm opacity-70 not-italic mt-2">
//               ready to feast upon its beauty.
//             </em>
//           </motion.blockquote>

//           <p className="max-w-2xl mx-auto text-[0.9rem] leading-relaxed text-white/60">
//             Pasni (पस्नी), meaning "rice feeding," is one of the most cherished
//             Hindu rites of passage — the Annaprashan ceremony. When a baby is
//             six months old, the family gathers to offer the child their first
//             taste of cooked rice, symbolizing the transition from milk to solid
//             food, and welcoming them into the full richness of life.
//           </p>

//           <div className="flex flex-wrap justify-center gap-8 mt-12">
//             {[
//               { symbol: "🍚", name: "Annaprashan" },
//               { symbol: "🔴", name: "Tika" },
//               { symbol: "🪔", name: "Deepa" },
//               { symbol: "🌸", name: "Phool" },
//               { symbol: "🎵", name: "Mantra" },
//               { symbol: "👶", name: "Kiaan" },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: idx * 0.1, type: "spring" }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//                 className="flex flex-col items-center gap-2"
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.15 }}
//                   className="w-16 h-16 bg-white/10 border border-gold/30 rounded-full flex items-center justify-center text-2xl backdrop-blur-md"
//                 >
//                   {item.symbol}
//                 </motion.div>
//                 <span className="text-[0.65rem] tracking-[0.15em] uppercase text-white/50">
//                   {item.name}
//                 </span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* GALLERY SECTION */}
//       <section className="relative z-10 py-20 px-6 bg-blush-light" id="gallery">
//         <div className="reveal text-center">
//           <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-2">
//             ✦ Little moments, big memories ✦
//           </p>
//           <h2 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-light text-dark">
//             Our <em className="italic text-rose">Gallery</em>
//           </h2>
//         </div>

//         <div className="max-w-6xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-3 gap-5">
//           {[
//             {
//               icon: "👶",
//               text: "First day home",
//               bg: "linear-gradient(135deg,#fdecea,#f7c5c0)",
//             },
//             {
//               icon: "😄",
//               text: "First smile",
//               bg: "linear-gradient(135deg,#fdf6ef,#f3e8d8)",
//             },
//             {
//               icon: "🌸",
//               text: "Bath time joy",
//               bg: "linear-gradient(135deg,#f3e8d8,#e8c97a55)",
//             },
//             {
//               icon: "💤",
//               text: "Sweet dreams",
//               bg: "linear-gradient(135deg,#fdecea,#d4847a33)",
//             },
//             {
//               icon: "🍃",
//               text: "Garden morning",
//               bg: "linear-gradient(135deg,#b8c9b233,#fdf6ef)",
//             },
//             {
//               icon: "🎀",
//               text: "Ready for Pasni!",
//               bg: "linear-gradient(135deg,#e8c97a33,#fdecea)",
//             },
//           ].map((item, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: idx * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.04, rotate: idx % 2 === 0 ? 1 : -1 }}
//               className="rounded-2xl overflow-hidden aspect-square bg-white shadow-md border-3 border-white cursor-pointer group"
//             >
//               <div
//                 className="w-full h-full flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:brightness-95"
//                 style={{ background: item.bg }}
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   className="text-[2.5rem] opacity-50 group-hover:opacity-80 transition-all"
//                 >
//                   {item.icon}
//                 </motion.div>
//                 <p className="text-[0.7rem] text-text-light tracking-[0.1em] text-center px-4">
//                   {item.text}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//         <p className="text-center mt-8 text-[0.8rem] text-text-light italic">
//           ✦ Replace placeholders with your little one's precious photos ✦
//         </p>
//       </section>

//       {/* RSVP SECTION */}
//       <section className="relative z-10 py-20 px-6 pb-28 bg-cream" id="rsvp">
//         <div className="reveal text-center">
//           <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-2">
//             ✦ We'd love to see you ✦
//           </p>
//           <h2 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-light text-dark">
//             RSVP <em className="italic text-rose">Here</em>
//           </h2>
//           <p className="text-text-mid text-[0.9rem] mt-2">
//             Please respond by 1st June 2025
//           </p>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           whileHover={{ y: -5 }}
//           className="max-w-lg mx-auto mt-12 bg-white rounded-[28px] p-10 shadow-xl border border-blush/40 relative overflow-hidden"
//         >
//           <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blush via-[#e8c97a]-light to-rose via-blush" />

//           {!showSuccess ? (
//             <>
//               <motion.span
//                 animate={{ y: [0, -8, 0] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="block text-5xl text-center mb-4"
//               >
//                 🌸
//               </motion.span>
//               <p className="text-text-mid text-[0.9rem] leading-relaxed text-center mb-8">
//                 Kiaan can't wait to receive your blessings on his first rice
//                 journey! Let us know you'll be there — your presence means the
//                 world to our family. 💛
//               </p>
//               <div className="space-y-5">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-[0.75rem] font-medium text-text-mid tracking-[0.05em] mb-1"
//                   >
//                     Your Name
//                   </label>
//                   <input
//                     id="name"
//                     type="text"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="e.g. Priya Auntie &amp; family"
//                     className="w-full px-4 py-3 border-2 border-gold/20 rounded-xl font-sans text-[0.9rem] text-dark bg-cream outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,153,74,0.1)] transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="block text-[0.75rem] font-medium text-text-mid tracking-[0.05em] mb-1"
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     id="phone"
//                     type="tel"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     placeholder="+977 98XXXXXXXX"
//                     className="w-full px-4 py-3 border-2 border-gold/20 rounded-xl font-sans text-[0.9rem] text-dark bg-cream outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,153,74,0.1)] transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="guests"
//                     className="block text-[0.75rem] font-medium text-text-mid tracking-[0.05em] mb-1"
//                   >
//                     Number of Guests
//                   </label>
//                   <select
//                     id="guests"
//                     value={formData.guests}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border-2 border-gold/20 rounded-xl font-sans text-[0.9rem] text-dark bg-cream outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,153,74,0.1)] transition-all appearance-none"
//                   >
//                     <option value="">Select…</option>
//                     <option>Just me (1)</option>
//                     <option>2 guests</option>
//                     <option>3–4 guests</option>
//                     <option>5+ guests</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-[0.75rem] font-medium text-text-mid tracking-[0.05em] mb-1"
//                   >
//                     A Blessing for Kiaan (optional)
//                   </label>
//                   <input
//                     id="message"
//                     type="text"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     placeholder="e.g. Dheeray ramro hoos! 🌟"
//                     className="w-full px-4 py-3 border-2 border-gold/20 rounded-xl font-sans text-[0.9rem] text-dark bg-cream outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,153,74,0.1)] transition-all"
//                   />
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.02, y: -2 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={submitRSVP}
//                   className="w-full py-4 bg-gradient-to-r from-rose to-gold text-white rounded-xl font-sans font-medium text-base cursor-pointer mt-2 shadow-md hover:shadow-lg transition-all relative overflow-hidden group"
//                 >
//                   <span className="relative z-10">🙏 &nbsp; Count Me In!</span>
//                   <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
//                 </motion.button>
//               </div>
//             </>
//           ) : (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="text-center py-8"
//             >
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 0.5 }}
//                 className="text-5xl mb-4"
//               >
//                 🎉
//               </motion.div>
//               <div className="font-serif text-[1.6rem] text-dark mb-2">
//                 Shuva Kamnaa!
//               </div>
//               <p className="text-text-mid text-[0.9rem]">
//                 Thank you for RSVPing. Kiaan and our family can't wait to
//                 celebrate with you. See you on June 14th! 🌸
//               </p>
//             </motion.div>
//           )}
//         </motion.div>
//       </section>

//       {/* FOOTER */}
//       <footer className="relative z-10 py-8 text-center bg-dark text-white/40 text-[0.75rem] tracking-[0.1em]">
//         Made with{" "}
//         <motion.span
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           className="text-gold inline-block"
//         >
//           ❤️
//         </motion.span>{" "}
//         for little Kiaan &nbsp;·&nbsp; Pasni 2025 &nbsp;·&nbsp; Raut Family
//       </footer>

//       <style jsx>{`
//         .section-label-inline::before,
//         .section-label-inline::after {
//           content: "✦";
//           color: #d4847a;
//           margin: 0 0.5rem;
//           opacity: 0.6;
//         }
//         .border-l-3 {
//           border-left-width: 3px;
//         }
//         .border-3 {
//           border-width: 3px;
//         }
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         .hover\\:animate-spin-slow:hover {
//           animation: spin-slow 8s linear infinite;
//         }
//       `}</style>
//     </>
//   );
// }




// app/page.tsx

'use client';

import { HeroSection } from '@/components/hero/HeroSection';
import { StorySection } from '@/components/story/StorySection';
import { EventDetails } from '@/components/events/EventDetails';
import { CulturalSection } from '@/components/cultural/CulturalSection';
import { GallerySection } from '@/components/gallery/GallerySection';
import { RSVPSection } from '@/components/rsvp/RSVPSection';
import { Footer } from '@/components/footer/Footer';
import { ParticleCanvas } from '@/components/shared/ParticleCanvas';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HomePage() {
  useScrollReveal();

  return (
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
      <ParticleCanvas />

      <HeroSection />
      <StorySection />
      <EventDetails />
      <CulturalSection />
      <GallerySection />
      <RSVPSection />
      <Footer />
    </>
  );
}