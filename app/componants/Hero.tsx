"use client";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import H1 from "./H1";
import H2 from "./H2";
import Link from "next/link";
import HugeText from "./HugeText";
const Hero = () => {
  return (
    <section className=" h-[200vh] w-screen grid grid-cols-12 gap-4 grid-rows-8">
      {/*
        <Spline
        scene="https://prod.spline.design/BMvF1lfrpAfRKfPN/scene.splinecode"
        className="absolute w-full h-[200vh]  -z-10"
      /> 

        */}
      <div className="col-start-2 col-end-4 ">
        <H1 noWrap={false} content="Hi !  I's Ibtihel ben salah" />
      </div>
      <div className="col-start-4  row-start-1">
        <HugeText noWrap={false} content="Frontend developer" />
      </div>
      <div className="col-start-2  col-end-8 row-start-4">
        <H1 noWrap={false} content="Creating websites that..." />
        <H1 noWrap={false} content="keep their attention!" />
      </div>
      <div></div>
      <div className="col-start-10 col-end-12  row-start-4 ">
        <button className=" py-4 px-8  font-bold border-black border-2 rounded-full border-solid">
          <Link href="../#contact">let's get in touch</Link>
        </button>
      </div>
      <div className="col-start-6 col-end-12 row-start-6">
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
