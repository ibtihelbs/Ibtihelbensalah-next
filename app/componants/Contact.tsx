"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import H2 from "./H2";
import Paragraph from "./Paragraph";
const Contact = () => {
  return (
    <section id="contact" className=" md:h-screen w-screen">
      <div className="flex w-[1000px]"></div>
      <div className="flex font-bold flex-col md:gap-8 items-center md:h-[80vh] justify-center">
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
          <ul className="text-3xl hidden md:block mt-5">
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
      </div>
    </section>
  );
};

export default Contact;
