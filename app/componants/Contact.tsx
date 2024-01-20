"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import H1 from "./H1";
import H2 from "./H2";
const Contact = () => {
  return (
    <section id="contact" className="bg-main h-screen">
      <div className=" flex">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex bg-pink-700"
        >
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
        </motion.div>
        <motion.div
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex bg-grey-600 "
          initial={{ x: "0%" }}
          animate={{ x: "100%" }}
        >
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
        </motion.div>
      </div>
      <div className="flex font-bold flex-col gap-8 items-center h-[80vh] justify-center">
        <div>
          <div className="flex gap-4 items-center mt-[-20px] justify-between relative">
            <div>
              <H2 content="Click Bellow &" />

              <H2 content="send an email" />
            </div>
            <Image
              src={"/shape-45.png"}
              alt="click"
              width={100}
              height={100}
              className="rotate-[-135deg] mt-8"
            />
          </div>
          <ul className="text-3xl mt-5">
            <li>
              <a
                href="mailto:ibtihel.bensalah@outlook.fr"
                className="underline"
              >
                Ibtihel.bensalah@outlook.fr
              </a>
            </li>
            {/**<li className="hover:cursor-pointer">
            <a href="./ibtihelbensalah-cv.pdf" download="ibtihelbensalah-cv">
              Download cv
            </a>
          </li> */}
          </ul>
        </div>
      </div>
      <div className=" flex">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex bg-pink-700"
        >
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
        </motion.div>
        <motion.div
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex bg-grey-600 "
          initial={{ x: "0%" }}
          animate={{ x: "100%" }}
        >
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
          <H1 noWrap={true} content={" let's get in touch - "} />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
