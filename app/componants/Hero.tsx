"use client";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import H1 from "./H1";
import H2 from "./H2";
import Link from "next/link";
import HugeText from "./HugeText";
const Hero = () => {
  return (
    <section className=" md:h-[200vh]  h-screen p-5 w-screen grid grid-cols-3 gap-2 md:grid-cols-12 md:gap-4 md:grid-rows-8">
      {/*
        <Spline
        scene="https://prod.spline.design/BMvF1lfrpAfRKfPN/scene.splinecode"
        className="absolute w-full h-[200vh]  -z-10"
      /> 

        */}
      <div className="md:col-start-2 md:col-end-4 col-span-2">
        <H1 noWrap={false} content="Hi !  I's Ibtihel ben salah" />
      </div>
      <div className="md:col-start-4  md:row-start-1 col-start-1">
        <HugeText noWrap={false} content="Frontend developer" />
      </div>
      <div className="hidden md:block md:col-start-2 md:col-end-8 md:row-start-4">
        <H1 noWrap={false} content="Creating websites that..." />
        <H1 noWrap={false} content="keep their attention!" />
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
