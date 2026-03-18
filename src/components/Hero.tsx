"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--color-navy)] text-white pt-20 pb-16 px-6">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-resonance)] rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight tracking-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block sm:whitespace-nowrap">WEB制作の「めんどくさい」</span>
          <span className="block text-[var(--color-resonance-light)] sm:whitespace-nowrap mt-2 md:mt-4">すべて引き受けます。</span>
        </motion.h1>

        <motion.p 
          className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          あなたは<span className="text-white font-semibold">5分、スマホで質問に答えるだけ</span>。<br className="hidden sm:block" />
          長時間の打ち合わせも、専門用語の確認も不要です。<br className="hidden sm:block" />
          本業に集中している間に、あなたのビジネスを勝たせるWEBサイトをお届けします。
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a
            href="https://forms.gle/c5trw8g5KDkuAf8fA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-sm md:text-base font-bold text-[var(--color-navy)] bg-[var(--color-resonance)] hover:bg-[var(--color-resonance-light)] transition-colors rounded-full shadow-[0_0_20px_rgba(230,126,34,0.3)]"
          >
            ご相談・ご依頼はこちら
          </a>
        </motion.div>
      </div>
    </section>
  );
}
