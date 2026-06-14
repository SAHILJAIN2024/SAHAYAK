"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/components/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-black text-2xl tracking-tight"
        >
          SAHAYAK
          <span className="text-violet-400">.</span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-10 text-sm text-zinc-400">

          <a
            href="#mission"
            className="hover:text-white transition"
          >
            Mission
          </a>

          <a
            href="#capabilities"
            className="hover:text-white transition"
          >
            Capabilities
          </a>

          <a
            href="#architecture"
            className="hover:text-white transition"
          >
            Architecture
          </a>

        </nav>

        <button 
          className="px-6 py-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition font-semibold"
          onClick={() => router.push("/loginsignup")}
        >
          Launch
        </button>

      </div>
    </header>
  );
}