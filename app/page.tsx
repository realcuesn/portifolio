"use client";
import About from "@/components/about";
import Hero from "@/components/hero";
import Work from "@/components/work";

export default function Home() {
  return (
    <main className="w-full">
      <Hero></Hero>
      <About></About>
      <Work></Work>
    </main>
  );
}
