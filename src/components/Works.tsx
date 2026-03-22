"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Works() {
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
          <span className="text-[var(--color-resonance)] font-bold tracking-wider text-sm md:text-base uppercase mb-4 block">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[var(--color-navy)] mb-6">
            Works - 制作実績・デモ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
            AIテクノロジーとプロのライティングが融合した、Resonance Studio.の制作クオリティをご覧ください。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 md:gap-24">
          {[
            {
              title: "Hair Salon Luminous（デモサイト）",
              category: "美容室・サロン",
              description: "ターゲットの心に寄り添うエモーショナルなコピーライティングと、清潔感あふれる洗練されたUIデザインを最速で実装したデモサイトです。",
              image: "/works/luminous.png",
              link: "https://demo01.resonance-studio.net/"
            },
            {
              title: "Cafe & Roastery LUA（デモサイト）",
              category: "カフェ・飲食店向け",
              description: "「温もり、洗練、リラックス」をテーマに、自家焙煎コーヒーの豊かな香りとお店の心地よい空間を伝える、飲食店様向けの洗練されたデモサイトです。",
              image: "/works/lua.png",
              link: "https://demo02.resonance-studio.net/"
            }
          ].map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-white p-6 md:p-8 rounded-[40px] shadow-[0_4px_32px_rgba(0,0,0,0.04)] border border-gray-100 ${
                index % 2 !== 0 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image Side */}
              <div className={`relative aspect-[16/10] overflow-hidden rounded-[32px] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] ${
                index % 2 !== 0 ? "lg:order-2" : ""
              }`}>
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              </div>

              {/* Content Side */}
              <div className={`space-y-6 lg:px-4 ${
                index % 2 !== 0 ? "lg:order-1" : ""
              }`}>
                <div className="space-y-2">
                  <span className="inline-block px-4 py-1.5 bg-[var(--color-resonance)]/10 text-[var(--color-resonance)] text-sm font-bold rounded-full">
                    {work.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-navy)]">
                    {work.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {work.description}
                </p>

                <div className="pt-4">
                  <a
                    href={work.link}
                    className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-navy)] text-white font-bold rounded-2xl hover:bg-[var(--color-resonance)] hover:text-[var(--color-navy)] transition-all duration-300 group/btn"
                  >
                    <span>デモサイトを見る</span>
                    <ExternalLink className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
