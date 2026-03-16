import type { Metadata } from "next";
import { Noto_Sans_JP, Playfair_Display } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resonance Studio. | WEB制作の「めんどくさい」をすべて引き受けます",
  description: "最小の負担で、最大の共鳴を。あなたのビジネスを勝たせるWEBサイトをお届けします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
