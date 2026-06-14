"use client";

import { useScroll } from "framer-motion";

export default function useRobotController() {

  const { scrollYProgress } = useScroll();

  return {
    scrollYProgress
  };
}