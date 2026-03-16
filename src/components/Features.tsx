"use client";

import { motion } from "framer-motion";
import { Clock, PenTool, LayoutTemplate } from "lucide-react";

export default function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[var(--color-resonance)] font-bold tracking-wider text-sm md:text-base uppercase mb-4 block">3 Core Strengths</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[var(--color-navy)]">
            選ばれる3つの理由
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Feature 1 */}
          <motion.div variants={item} className="flex flex-col h-full bg-white p-8 md:p-10 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-shadow duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-resonance)]/10 text-[var(--color-resonance)] flex items-center justify-center mb-8">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[var(--color-navy)] mb-4">
              圧倒的なタイムパフォーマンス
            </h3>
            <p className="text-gray-600 leading-relaxed mt-auto">
              お客様の作業は、簡単なヒアリングフォームへの回答のみ。度重なるミーティングや資料作成は一切不要です。
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div variants={item} className="flex flex-col h-full bg-white p-8 md:p-10 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-shadow duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-resonance)]/10 text-[var(--color-resonance)] flex items-center justify-center mb-8">
              <PenTool className="w-8 h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[var(--color-navy)] mb-4">
              心を動かすライティング
            </h3>
            <p className="text-gray-600 leading-relaxed mt-auto">
              いただいた情報を元に、プロのコピーライター水準で「売れる」「集客できる」文章を私たちがすべて代筆します。
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div variants={item} className="flex flex-col h-full bg-white p-8 md:p-10 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-shadow duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-resonance)]/10 text-[var(--color-resonance)] flex items-center justify-center mb-8">
              <LayoutTemplate className="w-8 h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[var(--color-navy)] mb-4">
              洗練されたモダンデザイン
            </h3>
            <p className="text-gray-600 leading-relaxed mt-auto">
              最新のAIテクノロジーとトレンドを駆使し、スマートフォンでもPCでも直感的に操作できる美しいサイトを高速で組み上げます。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
