"use client";
import { motion } from "framer-motion";
import HugeText from "./HugeText";
import Paragraph from "./Paragraph";
import About from "./About";
const AboutMe = () => {
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        variants={containerVars}
        initial="initial"
        whileInView="open"
        exit="initial"
      >
        <div className="overflow-hidden">
          <HugeText content="Shortly__" noWrap={false} />
          <HugeText content="About_Me" noWrap={false} />
        </div>
      </motion.div>
      <div className="max-w-xl text-center">
        <Paragraph
          content="
          Hello again! I'm a React/Next.js developer based in Tunisia. I'm a very object-oriented person, always staying up-to-date with tools and technologies that save time and help me deliver responsive, performant, and engaging interfaces. I'm open to working on backend JavaScript solutions. When I'm not coding, I enjoy drawing and painting."
        />
      </div>
      <div className="line-vr-before"></div>
      <motion.div
        variants={containerVars}
        initial="initial"
        whileInView="open"
        exit="initial"
      >
        <div className="overflow-hidden ">
          <HugeText content="Why_does" noWrap={false} />
          <HugeText content="It_matter" noWrap={false} />
        </div>
      </motion.div>
      <div className="line-vr-after"></div>
      <About />
    </div>
  );
};

export default AboutMe;
