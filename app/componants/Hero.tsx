"use client";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import Link from "next/link";
import H3 from "./H3";
import HugeText from "./HugeText";
import Paragraph from "./Paragraph";
const Hero = () => {
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
    <section className="h-screen flex flex-col justify-center items-center">
      <motion.div
        variants={containerVars}
        initial="initial"
        animate="open"
        exit="initial"
      >
        <div className="overflow-hidden text-center">
          <H3 content="Hi! It's Ibtihel Ben Salah" />
          <HugeText content="Front__End" noWrap={true} />
          <HugeText content="developer" noWrap={true} />
        </div>
      </motion.div>
      <div className="flex justify-between items-end md:w-[1000px]">
        <div className="w-40">
          <Paragraph content="I create modern catchy websites that will capture your audience" />
        </div>
        <Link
          href={"../#contact"}
          className="py-2 px-8 text-xl rounded-full border-black border-2 border-solid"
        >
          Contact
        </Link>
      </div>
    </section>
  );
};

export default Hero;
