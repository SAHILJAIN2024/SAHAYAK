"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { features } from "../data/features";

export default function CognitiveCapabilities() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const rect = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - rect.left);
    mouseY.set(clientY - rect.top);
  }

  return (
    <section
      id="capabilities"
      className="relative py-32 px-8 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Grid */}

      <div className="absolute inset-0 opacity-20">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="flex justify-between items-end mb-24">

          <div>

            <h2 className="text-7xl md:text-9xl font-black leading-none tracking-tight">

              COGNITIVE

              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">

                CAPABILITIES

              </span>

            </h2>

          </div>

          <p className="max-w-xs text-zinc-500 uppercase text-xs tracking-[0.3em]">
            THE NEXT EVOLUTION OF AGENTIC AI SYSTEMS
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="relative p-10 rounded-[2rem] border border-white/5 bg-zinc-900/30 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition"
                style={{
                  background: useTransform(
                    [mouseX, mouseY],
                    ([x, y]) =>
                      `radial-gradient(500px circle at ${x}px ${y}px,
                      rgba(168,85,247,.15),
                      transparent 40%)`
                  ),
                }}
              />

              <div className="relative z-10">

                <div className="w-14 h-14 rounded-2xl border border-white/10 bg-black flex items-center justify-center mb-8">

                  0{index + 1}

                </div>

                <h3 className="text-2xl font-bold mb-5">
                  {feature.title}
                </h3>

                <p className="text-zinc-500 leading-relaxed">
                  {feature.description}
                </p>

              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}