import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Works from "@/components/Works";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] overflow-hidden">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Works />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
