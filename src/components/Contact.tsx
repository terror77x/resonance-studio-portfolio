"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[var(--color-navy)] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-r from-[var(--color-resonance)] to-[var(--color-resonance-light)] blur-[100px] rounded-[100%]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-8">
            最小の負担で、<br className="md:hidden" />最大の共鳴を。
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12">
            あなたのビジネスのオンライン拠点、私たちに丸投げしてみませんか？
          </p>

          <a
            href="#"
            className="group inline-flex items-center justify-center px-8 md:px-12 py-5 md:py-6 text-lg md:text-xl font-bold text-[var(--color-navy)] bg-white hover:bg-gray-50 transition-all duration-300 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:-translate-y-1"
          >
            ご相談・ご依頼はこちら
            <svg 
              className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
