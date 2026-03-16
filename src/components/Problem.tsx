"use client";

import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[var(--color-background)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[var(--color-navy)] leading-tight">
            WEBサイト作りに、<br />
            本業の時間を奪われていませんか？
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 relative"
        >
          {/* Subtle accent line */}
          <div className="absolute top-0 left-8 right-8 h-1 bg-[var(--color-resonance)] rounded-b-md opacity-20"></div>
          
          <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
            <p>
              お店の経営、サービスの提供、顧客への対応。<br />
              あなたは毎日、本来やるべき業務で忙しいはずです。
            </p>
            <p>
              それなのに「WEBサイトを作ろう」と思い立った瞬間、<br className="hidden md:block" />
              長時間のヒアリング、よく分からないIT用語の説明、終わらない修正のやり取りに時間を奪われていませんか？
            </p>
            <p className="text-xl md:text-2xl font-bold text-[var(--color-navy)] pt-6 flex items-center gap-4">
              <span className="block w-8 h-[2px] bg-[var(--color-resonance)]"></span>
              Resonance Studio.は、そんなWEB制作の「常識」を捨てました。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
