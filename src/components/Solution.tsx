"use client";

import { motion } from "framer-motion";

export default function Solution() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[var(--color-navy)] text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-resonance)] rounded-full blur-[120px] opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--color-resonance-light)] rounded-full blur-[100px] opacity-10 pointer-events-none -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <span className="text-[var(--color-resonance)] font-bold tracking-wider text-sm md:text-base uppercase mb-4 block">Our Solution</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading leading-tight">
            最新AI × 独自フローが生み出す<br className="hidden md:block" />
            「丸投げできる安心感」
          </h2>
        </motion.div>

        <div className="space-y-12 text-base md:text-lg text-gray-300 leading-relaxed font-sans">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="mb-6">
              私たちはお客様の負担を、<span className="text-white font-semibold">専用フォームに入力する「最初の5分」だけに圧縮</span>しました。
            </p>
            <p>
              「本当にそれだけで、ちゃんとしたものができるの？」と思われるかもしれません。<br />
              だからこそ、私たちの技術のすべてを注ぎ込みます。<br />
              あなたがスマートフォンから入力した「想い」や「強み」の断片を、私たちが文脈を読み解き、魅力的な言葉に変え、美しいデザインへと昇華させます。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="p-8 md:p-10 bg-[#12223a] rounded-2xl border border-[#1e3458]"
          >
            <p className="italic text-lg md:text-xl text-[var(--color-resonance-light)] mb-6 font-serif">
              「どうせAIが作ったような、無機質なサイトになるんでしょ？」
            </p>
            <p>
              決してそんなことは言わせません。<br />
              あなたのビジネスの熱量が、画面越しにターゲットの心へ<span className="text-[var(--color-resonance)] font-bold text-xl px-1">「共鳴（Resonance）」</span>する。<br />
              そんな、体温を感じるWEBサイトをお約束します。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
