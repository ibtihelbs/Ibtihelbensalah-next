"use client";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
const liners = [
  "",
  "User-Centric  Interface",
  "Performant Web Solutions",
  "Modern Webcrafting",
];

const variants: any = {
  visible: (i: number) => ({
    opacity: 1,
    transform: "translate(0)",
    transition: {
      delay: i * 1,
    },
  }),
  hidden: { opacity: 0, transform: "translate(100%)" },
};

const Hero = () => {
  return (
    <section className="relative h-screen w-screen ">
      <Spline scene="https://prod.spline.design/BMvF1lfrpAfRKfPN/scene.splinecode" />
      <motion.div
        className="w-4/5 max-w-lg absolute  top-1/2 left-1/2 md:z-10 "
        initial={{ opacity: 0, transform: "translateY(-100%)" }}
        whileInView={{ opacity: 1, transform: "translate(-50%, -50%)" }}
        transition={{ duration: 2 }}
      >
        <h3>Hi! it's IBTIHEL BEN SALAH</h3>
        <h1 className="text-[35px] leading-[20px] mt-4 mb-4   md:text-[80px]  md:leading-[50px] md:mt-5 md:mb-5 ">
          Frontend Developer
        </h1>
        {liners.map((v, i) => (
          <motion.h2
            className="text-[15px] leading-[10px] mt-2 md:text-[40px] md:leading-[45px] md:m-3 italic"
            custom={i}
            key={i}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            {v}
          </motion.h2>
        ))}
        <button className="mt-4 py-4 px-8 bg-green-400 font-bold border-black border-2 rounded-full border-solid">
          Explore My Work
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
