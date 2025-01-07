import Link from "next/link";
import { VscArrowRight } from "react-icons/vsc";
import Hero from "./componants/Hero";
import Features from "./componants/Features";
import Contact from "./componants/Contact";
import Services from "./componants/Services";
import Shapes from "./componants/Shapes";
import Aboutme from "./componants/AboutMe";
import Skills from "./componants/Skills";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-14 ">
      <Hero />
      <Services />
      <Shapes />
      <Aboutme />
      <Skills />
      <Shapes />
      <Features />

      <Link
        href={"/Work"}
        className="font-cinzel  flex justify-between items-center text-4xl"
      >
        more <VscArrowRight />{" "}
      </Link>

      <Contact />
    </main>
  );
}
