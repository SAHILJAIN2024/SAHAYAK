"use client";

import { useScroll } from "framer-motion";

export default function useScrollProgress() {

    const { scrollYProgress } = useScroll();

    return scrollYProgress;

}