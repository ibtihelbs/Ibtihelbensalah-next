import Image from "next/image";
import Hero from "./componants/Hero";
import About from "./componants/About";
import Features from "./componants/Features";
import Contact from "./componants/Contact";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <About />
      <Features />
      <Contact />
    </main>
  );
}
