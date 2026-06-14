"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Book a Ticket",
    description: "Autonomously navigates flight, train, or event platforms to secure the best seats and fares based on your preferences.",
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-3-12h.008v.008H13.5V6zm0 6h.008v.008H13.5V12zm0 6h.008v.008H13.5V18zM6 18h12A2.25 2.25 0 0020.25 15.75V8.25A2.25 2.25 0 0018 6H6a2.25 2.25 0 00-2.25 2.25v7.5A2.25 2.25 0 006 18z" />
      </svg>
    ),
    badge: "Transactional"
  },
  {
    title: "Create a Trip Itinerary",
    description: "Dynamically maps out optimized schedules, stays, and curated destinations down to the hour, tailored perfectly to your pacing.",
    icon: (
      <svg className="w-6 h-6 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.996 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    badge: "Planning"
  },
  {
    title: "Analyze Data for Insights",
    description: "Ingests complex datasets, parses variables, visualizes correlations, and surfaces tactical breakthroughs completely autonomously.",
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v5.25C7.5 18.996 6.996 19.5 6.375 19.5h-2.25A1.125 1.125 0 013 18.375v-5.25zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125v-9.75zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v14.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    badge: "Cognitive"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    // cast ease to any to satisfy framer-motion TypeScript definitions for cubic bezier arrays
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
  }
};

export default function FinalTransformation() {
  return (
    <section id="features" className="py-32 relative overflow-hidden bg-[#050505]">
      {/* Structural Ambient Background Details */}
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-500/5 blur-[140px] rounded-full pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-semibold tracking-[0.3em] uppercase bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Autonomous Capabilities
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Complex Workflows, Handled.
          </h3>
          
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-xs text-violet-300">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              SAHAYAK AGENTIC OS ONLINE
            </span>
          </div>
        </motion.div>

        {/* Features Interactive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative group rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-8 overflow-hidden transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.04]"
            >
              {/* Soft glow hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent pointer-events-none" />

              {/* Icon & Badge row */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <span className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-white/50 font-mono">
                  {feature.badge}
                </span>
              </div>

              {/* Text Description */}
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-200">
                {feature.title}
              </h4>
              <p className="text-sm leading-relaxed text-white/60">
                {feature.description}
              </p>

              {/* Bottom accent lines */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}