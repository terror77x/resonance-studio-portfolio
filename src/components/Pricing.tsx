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
              高品質でありながら完全に透明化された3つのパッケージ価格を実現しました。<br className="hidden md:block" />
              <span className="font-bold text-[var(--color-navy)]">複雑な追加費用は一切ありません。</span>
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Plan 1 */}
          <motion.div variants={item} className="flex flex-col bg-[var(--color-background)] p-8 md:p-10 rounded-3xl border border-gray-200 hover:border-[var(--color-resonance)] transition-colors duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-resonance)]/5 rounded-bl-[100px] -z-10 group-hover:bg-[var(--color-resonance)]/10 transition-colors"></div>
            
            <span className="inline-block bg-gray-100 text-gray-500 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-6 w-max">Light</span>
            
            <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2">LP・シングルページプラン</h3>
            <div className="mb-8">
              <span className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">¥98,000</span>
              <span className="text-gray-500 font-medium ml-2 text-sm">（税込）</span>
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
          <motion.div variants={item} className="flex flex-col bg-[var(--color-navy)] p-8 md:p-10 rounded-3xl border border-[var(--color-navy-light)] relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--color-resonance)] to-[var(--color-resonance-light)]"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-resonance)]/10 rounded-full blur-3xl"></div>
            
            <span className="inline-block bg-[var(--color-resonance)] text-[var(--color-navy)] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-6 w-max">Standard</span>
            
            <h3 className="text-2xl font-bold text-white mb-2">コーポレート・スタンダードプラン</h3>
            <div className="mb-8">
              <span className="text-3xl md:text-4xl font-bold text-white">¥298,000</span>
              <span className="text-gray-400 font-medium ml-2 text-sm">（税込）</span>
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

          {/* Plan 3 - Premium Custom */}
          <motion.div 
            variants={item} 
            className="flex flex-col bg-white p-8 md:p-10 rounded-3xl border-2 border-[var(--color-resonance)] shadow-2xl relative overflow-hidden group z-10"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-resonance)]/5 rounded-bl-[100px] -z-10"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[var(--color-resonance)]/10 rounded-full blur-3xl"></div>
            
            <div className="flex justify-between items-start mb-6">
              <span className="inline-block bg-[var(--color-navy)] text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">Premium</span>
            </div>
            
            <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2">プレミアム・カスタムプラン</h3>
            <div className="mb-8 flex items-baseline">
              <span className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">¥598,000</span>
              <span className="text-xl md:text-2xl font-bold text-[var(--color-navy)] ml-0.5">〜</span>
              <span className="text-gray-500 font-medium ml-2 text-sm">（税込）</span>
            </div>
            
            <p className="text-sm font-bold text-[var(--color-resonance)] mb-6">
              競合を圧倒する最先端のWEBサイトを求める企業様向け。
            </p>
            
            <ul className="space-y-4 mb-8 flex-1 text-gray-700">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-resonance)] shrink-0 mr-3" />
                <span className="font-medium">Next.js等を用いたフルスクラッチ最新技術開発</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-resonance)] shrink-0 mr-3" />
                <span>リッチなアニメーションと独自UI/UX設計</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-resonance)] shrink-0 mr-3" />
                <span>専任AIプロンプトエンジニアによる極限の作り込み</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-resonance)] shrink-0 mr-3" />
                <span>テキストベース＋必要に応じたオンラインすり合わせ</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Maintenance & Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 md:mt-24 max-w-4xl mx-auto"
        >
          <div className="bg-gray-50/50 rounded-3xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <span className="text-[var(--color-resonance)] font-bold text-xs uppercase tracking-widest mb-2 block">Optional Plan</span>
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-navy)] mb-4">Maintenance & Support<br className="md:hidden" /><span className="text-lg md:text-xl font-normal ml-0 md:ml-4 text-gray-500">（保守・運用サポート）</span></h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                「作って終わり」ではなく、公開後のちょっとしたテキスト変更や画像の差し替えなど、日々の運用をサポートします。専門知識がなくても、常に最新の情報を発信し続けることが可能です。
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-gray-500 font-bold text-sm bg-gray-100 px-2 py-1 rounded">月額</span>
                <span className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] leading-none">¥10,000<span className="text-xl md:text-2xl ml-0.5">〜</span></span>
                <span className="text-gray-400 text-xs">（税込）</span>
              </div>
            </div>

            <div className="w-full md:w-auto shrink-0 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <ul className="space-y-4 text-sm md:text-base text-gray-700">
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-resonance)] shrink-0 mr-3" />
                  <span>月2回までのテキスト・画像変更の代行</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-resonance)] shrink-0 mr-3" />
                  <span>システムの定期アップデート（月1回）</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-resonance)] shrink-0 mr-3" />
                  <span>専用フォームからの優先サポート</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100 italic">
                <p className="text-[10px] text-gray-400 text-center md:text-left leading-tight">
                  ※サーバーやドメインの契約更新、大規模なデザイン変更、システム障害の復旧対応は含まれません。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
