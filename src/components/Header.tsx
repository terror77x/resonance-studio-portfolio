"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
            isScrolled ? "text-[var(--color-navy)]" : "text-white"
          }`}>
            Resonance Studio.
          </span>
        </div>

        {/* CTA Button */}
        <div className="flex items-center">
          <a
            href="https://forms.gle/c5trw8g5KDkuAf8fA"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${
              isScrolled
                ? "bg-[var(--color-resonance)] text-[var(--color-navy)] shadow-md hover:shadow-lg hover:bg-[var(--color-resonance-light)]"
                : "bg-white text-[var(--color-navy)] shadow-lg hover:shadow-xl hover:bg-gray-50"
            }`}
          >
            ご相談・ご依頼はこちら
          </a>
        </div>
      </div>
    </header>
  );
}
