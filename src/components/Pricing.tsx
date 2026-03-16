"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-white relative">
      {/* Decorative subtle background */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[var(--color-resonance)] font-bold tracking-wider text-sm md:text-base uppercase mb-4 block">Pricing</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[var(--color-navy)] mb-8">
            お見積もりを待つ時間は、<br className="md:hidden" />もう不要です。
          </h2>
          <div className="max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed text-left md:text-center">
            <p className="mb-4">
              「要件を伝えないと金額が分からない」「オプションでどんどん高くなるのでは？」<br className="hidden md:block" />
              そんな不安と、見積もりを待つ時間はビジネスのスピードを落とします。
            </p>
            <p>
              Resonance Studio.は、AIテクノロジーによる徹底的な効率化により、<br className="hidden md:block" />
              高品質でありながら完全に透明化された2つのパッケージ価格を実現しました。<br className="hidden md:block" />
              <span className="font-bold text-[var(--color-navy)]">複雑な追加費用は一切ありません。</span>
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Plan 1 */}
          <motion.div variants={item} className="flex flex-col bg-[var(--color-background)] p-8 md:p-10 rounded-3xl border border-gray-200 hover:border-[var(--color-resonance)] transition-colors duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-resonance)]/5 rounded-bl-[100px] -z-10 group-hover:bg-[var(--color-resonance)]/10 transition-colors"></div>
            
            <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2">LP・シングルページプラン</h3>
            <div className="mb-8">
              <span className="text-4xl md:text-5xl font-bold text-[var(--color-navy)]">¥98,000</span>
              <span className="text-gray-500 font-medium ml-2">（税込）</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1 text-gray-700">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-resonance)] shrink-0 mr-3" />
                <span>スマートフォン対応の縦長1ページ完結型サイト</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-resonance)] shrink-0 mr-3" />
                <span>サービス紹介や、名刺代わりのWEBサイトに最適です。</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-resonance)] shrink-0 mr-3" />
                <span>専用フォーム回答後、最短3営業日で納品。</span>
              </li>
            </ul>
          </motion.div>

          {/* Plan 2 */}
          <motion.div variants={item} className="flex flex-col bg-[var(--color-navy)] p-8 md:p-10 rounded-3xl border border-[var(--color-navy-light)] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--color-resonance)] to-[var(--color-resonance-light)]"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-resonance)]/20 rounded-full blur-3xl group-hover:bg-[var(--color-resonance)]/30 transition-colors"></div>
            
            <span className="inline-block bg-[var(--color-resonance)] text-[var(--color-navy)] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-6 w-max">Standard</span>
            
            <h3 className="text-2xl font-bold text-white mb-2">コーポレート・スタンダードプラン</h3>
            <div className="mb-8">
              <span className="text-4xl md:text-5xl font-bold text-white">¥298,000</span>
              <span className="text-gray-400 font-medium ml-2">（税込）</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1 text-gray-200">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-resonance-light)] shrink-0 mr-3" />
                <span>トップページ＋下層ページ（会社概要、事業内容、お問い合わせなど計5ページ程度）</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-resonance-light)] shrink-0 mr-3" />
                <span>本格的な企業サイト、店舗の総合サイトに最適です。</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-resonance-light)] shrink-0 mr-3" />
                <span>専用フォーム回答後、最短1週間で納品。</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
