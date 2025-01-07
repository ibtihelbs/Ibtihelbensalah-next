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
    <section className="h-screen flex flex-col justify-center items-center md:gap-0 gap-8 ">
      <motion.div
        variants={containerVars}
        initial="initial"
        whileInView="open"
        exit="initial"
      >
        <div className="overflow-hidden text-center">
          <H3 content="Hi! It's Ibtihel Ben Salah" />
          <HugeText content="Front__End" noWrap={true} />
          <HugeText content="developer" noWrap={true} />
        </div>
      </motion.div>
      <div className="flex md:flex-row md:justify-between  md:items-end flex-col items-center w-full">
        <div className="w-40 md:text-start text-center">
          <Paragraph content="I create modern catchy websites that will capture your audience" />
        </div>
        <Link
          href={"../#contact"}
          className="bg-accent py-2 px-8 text-xl rounded-full border-black border-2 border-solid"
        >
          Contact
        </Link>
      </div>
    </section>
  );
};

export default Hero;
