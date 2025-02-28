'use client';

import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductList from "@/components/Product";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <ProductList />
      <Footer />
    </main>
  );
}
