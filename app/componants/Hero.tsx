"use client";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import H1 from "./H1";
import H2 from "./H2";
import Link from "next/link";
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
    <section className=" md:h-[150vh] md:pt-10  h-screen p-5 w-screen grid grid-cols-3 gap-2 md:grid-cols-12 md:gap-4 md:grid-rows-8">
      {/*
        <Spline
        scene="https://prod.spline.design/BMvF1lfrpAfRKfPN/scene.splinecode"
        className="absolute w-full h-[200vh]  -z-10"
      />  */}
      <motion.div
        initial={{ opacity: 0, transform: "translateY(-100%)" }}
        animate={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="md:col-start-2 md:col-end-4 col-span-2"
      >
        <H2 content="Hi !  I's Ibtihel ben salah" />
      </motion.div>
      <motion.div
        variants={containerVars}
        initial="initial"
        animate="open"
        exit="initial"
        className=" md:col-start-5 md:row-start-1 md:row-end-3 col-start-1 col-end-13 "
      >
        <div className="overflow-hidden">
          <HugeText noWrap={false} content="Frontend" />
        </div>
        <div className="overflow-hidden">
          <HugeText noWrap={true} content="Developer" />
        </div>
      </motion.div>
      <div className="hidden md:block md:col-start-2 md:col-end-8 md:row-start-4 self-end">
        <Paragraph content="Creating websites that..." />
        <Paragraph content="keep their attention!" />
      </div>
      <div></div>
      <div className="md:col-start-10 md:col-end-12  md:row-start-4 col-start-2 col-end-4">
        <button className=" md:py-4 md:px-8  py-2 px-4 font-bold border-black border-2 rounded-full border-solid">
          <Link href="../#contact">let's get in touch</Link>
        </button>
      </div>
      <div className="col-start-1 col-end-4 md:col-start-6 md:col-end-12 md:row-start-6">
        <H2 content="design to interface conversion" />
        <hr className="bg-black text-black" />
        <H2 content="api integration" />
        <hr className="bg-black text-black" />
        <H2 content="design and seo optimzation" />
      </div>{" "}
    </section>
  );
};

export default Hero;
