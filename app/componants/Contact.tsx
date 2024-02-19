"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import H1 from "./H1";
import Paragraph from "./Paragraph";
const Contact = () => {
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
    <section id="contact" className=" md:h-screen w-screen">
      <div className="flex w-[1000px]"></div>
      <div className="flex font-bold flex-col md:gap-8 items-center md:h-[80vh] justify-center">
        <div className="line-vr-after"></div>

        <div>
          <div className="flex gap-4 items-center mt-[-20px] justify-between relative">
            <motion.div
              variants={containerVars}
              initial="initial"
              whileInView="open"
            >
              <H1 noWrap={false} content="Click Bellow &" />

              <H1 noWrap={false} content="send an email" />
            </motion.div>
            <Image
              src={"/shape-45.png"}
              alt="click"
              width={100}
              height={100}
              className="rotate-[-135deg] mt-8"
            />
          </div>
          <ul className="text-4xl text-center hidden md:block mt-5">
            <li>
              <a
                href="mailto:ibtihel.bensalah@outlook.fr"
                className="underline"
              >
                <Paragraph content="Ibtihel.bensalah@outlook.fr" />
              </a>
            </li>
            {/**<li className="hover:cursor-pointer">
            <a href="./ibtihelbensalah-cv.pdf" download="ibtihelbensalah-cv">
              Download cv
            </a>
          </li> */}
          </ul>
        </div>
        <div className="line-vr-before"></div>
      </div>
    </section>
  );
};

export default Contact;
