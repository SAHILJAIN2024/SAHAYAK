"use client";

import { motion } from "framer-motion";

export default function MissionManifesto() {
  return (
    <section
      id="mission"
      className="relative py-40 px-8 bg-black"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >

          <p className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tight text-center">

            WE ARE REPLACING

            <br />

            <span className="text-zinc-800">
              FRAGMENTED SOFTWARE
            </span>

            <br />

            WITH THE

            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">

              INTELLIGENCE LAYER.

            </span>

          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mt-24">

          <div className="border-l border-violet-500 pl-8">
            <p className="text-zinc-400 text-lg leading-relaxed">

              SAHAYAK transforms fragmented tools into a unified
              ecosystem powered by dynamic agents and contextual memory.

            </p>
          </div>

          <div className="border-l border-zinc-800 pl-8">
            <p className="text-zinc-400 text-lg leading-relaxed">

              From understanding problems to executing solutions,
              SAHAYAK becomes the intelligence layer for the future.

            </p>
          </div>

        </div>
      </div>
    </section>
  );
}