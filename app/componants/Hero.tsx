"use client";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import H1 from "./H1";
import H2 from "./H2";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="relative h-screen w-screen ">
      {/**
      <Spline scene="https://prod.spline.design/BMvF1lfrpAfRKfPN/scene.splinecode" />
   * 
   */}
      <motion.div
        className="w-4/5 max-w-[900px] absolute  top-1/2 left-1/2 md:z-10 "
        initial={{ opacity: 0, transform: "translate(-100%, -100%)" }}
        whileInView={{ opacity: 1, transform: "translate(-50%, -50%)" }}
        transition={{ duration: 2 }}
      >
        <H2 content="Frontend developer" />
        <H1
          noWrap={false}
          content="Creating websites that  keeps your audience"
        />
        <H1 noWrap={false} content="Interested and invested." />

        <button className="mt-4 py-4 px-8  font-bold border-black border-2 rounded-full border-solid">
          <Link href="../#contact">let's get in touch</Link>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
