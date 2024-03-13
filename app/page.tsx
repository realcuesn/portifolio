"use client";
import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Work from "@/components/work";

export default function Home() {
  return (
    <main className="w-full">
      <Hero></Hero>
      <About></About>
      <Work></Work>
      <Footer></Footer>
    </main>
  );
}
