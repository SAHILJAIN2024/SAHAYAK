"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const stats = [
  { num: "∞",     label: "Agent types" },
  { num: "0ms",   label: "Cold start"  },
  { num: "Any",   label: "Domain"      },
  { num: "99.9%", label: "Uptime"      },
];

const avatars = [
  { letter: "A", bg: "from-violet-700 to-violet-400" },
  { letter: "B", bg: "from-cyan-700 to-cyan-400"    },
  { letter: "C", bg: "from-pink-700 to-pink-400"    },
  { letter: "D", bg: "from-yellow-600 to-yellow-300"},
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Track scroll progress over the 200vh height track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Clamped transformations: Text stays exactly at 0% translation at the absolute top (0)
  // Animation kicks off dynamically between 0.05 and 0.7 scroll progress
  const xSah = useTransform(scrollYProgress, [0, 0.05, 0.7], ["0%", "0%", "-120%"]);
  const xYak = useTransform(scrollYProgress, [0, 0.05, 0.7], ["0%", "0%", "120%"]);
  
  // Clean dismissal transitions for the peripheral copy text
  const yTopContent = useTransform(scrollYProgress, [0, 0.5], ["0%", "-150%"]);
  const opacityTopContent = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  
  // Background layer animations: Stays completely transparent (0) until scroll hits 10%
  const robotScale = useTransform(scrollYProgress, [0, 0.1, 0.7], [0.85, 0.85, 1.05]);
  const robotBgOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4], [0, 0, 1]);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-[#07070f]">
      {/* Sticky Viewport Frame */}
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        
        {/* Radial glows & Ambient Grids */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 70% 60% at 50% 40%, rgba(124,58,237,0.13) 0%, transparent 70%),
                radial-gradient(ellipse 40% 30% at 20% 80%, rgba(34,211,238,0.06) 0%, transparent 60%),
                radial-gradient(ellipse 40% 30% at 80% 80%, rgba(236,72,153,0.05) 0%, transparent 60%)
              `,
            }}
          />
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px",
              maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
            }}
          />
        </div>

        {/* ── BACKGROUND LAYER: GLOW BEHIND LOGO (Fades in on scroll) ── */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          style={{ scale: robotScale, opacity: robotBgOpacity }}
        >
          <div className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-violet-500/10 blur-[120px] absolute" />
        </motion.div>

        {/* ── FOREGROUND LAYER: CONTENT ── */}
        <div className="relative z-20 flex flex-col items-center w-full max-w-5xl selection:bg-violet-500/30">
          
          {/* Eyebrow Header Container */}
          <motion.div 
            className="flex flex-col items-center text-center w-full"
            style={{ y: yTopContent, opacity: opacityTopContent }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_6px_#a855f7] animate-pulse" />
              <span
                className="text-[10px] tracking-[0.22em] uppercase text-violet-400/85"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                Agentic Intelligence Platform
              </span>
            </motion.div>
          </motion.div>

          {/* Centered Splitting Big Logo */}
          <div className="w-full flex justify-center items-center select-none my-4 overflow-visible py-4">
            <div 
              className="flex font-bold tracking-[-0.05em] leading-none text-center justify-center items-center"
              style={{ fontSize: "clamp(60px, 15vw, 180px)" }}
            >
              {/* SAH - Moves Left */}
              <motion.span 
                className="text-white block pr-[0.01em]" 
                style={{ x: xSah, display: "inline-block" }}
              >
                SAH
              </motion.span>
              
              {/* YAK - Moves Right */}
              <motion.span 
                className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent block pl-[0.01em]" 
                style={{ x: xYak, display: "inline-block" }}
              >
                YAK
              </motion.span>
            </div>
          </div>

          {/* Subtitle & Actions Group */}
          <motion.div
            className="flex flex-col items-center text-center w-full mt-4"
            style={{ 
              y: useTransform(scrollYProgress, [0, 0.5], ["0%", "150%"]), 
              opacity: opacityTopContent 
            }}
          >
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-white/60 leading-[1.8] mb-8 px-4 max-w-2xl text-center"
              style={{ fontSize: "clamp(14px, 1.2vw, 18px)" }}
            >
              Dynamically creates expert agents, executes workflows, validates
              results, and delivers intelligent solutions across every domain —
              autonomously.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex gap-3 flex-wrap justify-center mb-10"
            >
              <button
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                  boxShadow: "0 0 28px rgba(124,58,237,0.45), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                Get started
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button 
  className="inline-flex items-center px-8 py-3.5 rounded-full text-[15px] font-medium text-white/60 border border-white/10 bg-white/5 transition-all duration-200 hover:border-violet-500/40 hover:text-white hover:bg-violet-500/8" 
  onClick={() => router.push("../loginsignup")} // Added leading slash
>
  Documentation
</button>
            </motion.div>

            {/* Stats pill row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap md:flex-nowrap rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden mb-8"
            >
              {stats.map((s, i) => (
                <div key={s.label} className="relative flex flex-col items-center gap-1 px-8 py-4 min-w-[120px]">
                  {i !== 0 && <div className="hidden md:block absolute left-0 top-[20%] h-[60%] w-px bg-white/10" />}
                  <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Mono', monospace" }}>
                    {s.num}
                  </span>
                  <span className="text-[9px] tracking-[0.22em] uppercase text-white/40" style={{ fontFamily: "'Space Mono', monospace" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex items-center gap-2.5"
            >
              <div className="flex">
                {avatars.map((a, i) => (
                  <div
                    key={a.letter}
                    className={`w-6 h-6 rounded-full border-2 border-[#07070f] flex items-center justify-center text-[10px] font-semibold bg-gradient-to-br ${a.bg}`}
                    style={{ marginLeft: i === 0 ? 0 : "-8px" }}
                  >
                    {a.letter}
                  </div>
                ))}
              </div>
              <span className="text-[12px] text-white/40">
                Trusted by <span className="text-white/70 font-semibold">2,400+</span> teams worldwide
              </span>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll hint indicator */}
        <motion.div
          style={{ opacity: opacityTopContent }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
        >
          <div className="w-5 h-8 rounded-full border border-white/12 flex items-start justify-center pt-1.5">
            <div
              className="w-0.5 h-1.5 rounded-full bg-white/35"
              style={{ animation: "scroll-bounce 1.8s ease-in-out infinite" }}
            />
          </div>
          <span className="text-[8px] tracking-[0.3em] uppercase text-white/15" style={{ fontFamily: "'Space Mono', monospace" }}>
            Scroll
          </span>
        </motion.div>

        <style>{`
          @keyframes scroll-bounce {
            0%,100% { transform: translateY(0); opacity: 1; }
            60%      { transform: translateY(10px); opacity: 0.2; }
          }
        `}</style>
      </section>
    </div>
  );
}