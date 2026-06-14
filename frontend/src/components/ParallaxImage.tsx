"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  src: string;
  title: string;
  direction: number;
}

export default function ParallaxImage({
  src,
  title,
  direction,
}: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [80 * direction, -80 * direction]
  );

  return (
    <div
      ref={ref}
      className="relative h-[30vh] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ x }}
        className="flex items-center gap-10"
      >
        <div className="w-[350px] h-[220px] rounded-3xl overflow-hidden border border-white/10">

          <img
            src={src}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
          />

        </div>

        <h2 className="text-7xl font-black text-white/10 uppercase">

          {title}

        </h2>

      </motion.div>
    </div>
  );
}