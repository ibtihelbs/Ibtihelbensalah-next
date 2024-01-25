import Link from "next/link";
import { VscArrowRight } from "react-icons/vsc";

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
      <Link
        href={"/Work"}
        className="font-audio  flex justify-between items-center text-4xl"
      >
        more <VscArrowRight />{" "}
      </Link>
      <Contact />
    </main>
  );
}
