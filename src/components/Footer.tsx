"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 bg-[var(--color-navy)] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.p 
          className="text-gray-500 text-sm md:text-base tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          &copy; {new Date().getFullYear()} Resonance Studio. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
