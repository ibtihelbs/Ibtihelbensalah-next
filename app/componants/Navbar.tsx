"use client";
import React, { useState } from "react";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

import { AnimatePresence, motion } from "framer-motion";
const Nav = [
  { name: "Home", link: "/" },
  { name: "Work", link: "/Work" },
  { name: "Blog", link: "/Blog" },
  { name: "Contact", link: "../#contact" },
];

const NavbarDesktop = () => {
  return (
    <ul className=" hidden md:visible md:flex gap-4">
      {Nav.map((item, i) => (
        <li key={i}>
          <Link href={item.link}> {item.name} </Link>
        </li>
      ))}
    </ul>
  );
};

interface NavbarMobileProps {
  isMenuOpen: boolean;
  handleMenuToggle: () => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
  isMenuOpen,
  handleMenuToggle,
}) => {
  const varMenu = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerVar = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    animate: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <div className="font-cinzel visible md:hidden ">
      <button onClick={handleMenuToggle} aria-label="menu button">
        <TiThMenu />{" "}
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            variants={varMenu}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`
        } absolute right-0 top-0 origin-top flex flex-col justify-between gap-4 w-full h-screen  bg-main`}
          >
            <li>
              <button
                aria-label="menu-btn"
                className="float-right"
                onClick={handleMenuToggle}
              >
                <IoClose />
              </button>
            </li>
            <motion.ul
              variants={staggerVar}
              initial="initial"
              animate="animate"
              exit="initial"
              className="flex flex-col gap-2 items-center text-4xl"
            >
              {Nav.map((item, i) => (
                <div className="overflow-hidden" key={i}>
                  <li onClick={handleMenuToggle}>
                    <Link href={item.link}> {item.name} </Link>
                  </li>
                </div>
              ))}
            </motion.ul>
            <li className="text-center">
              <a href="mailto:ibtihel.bensalah@outlook.fr">
                ibtihel.bensalah@outlook.fr
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between w-screen absolute z-10  md:py-6 md:px-10 px-5 bg-transparent">
      ..
      <NavbarDesktop />
      <NavbarMobile
        handleMenuToggle={handleMenuToggle}
        isMenuOpen={isMenuOpen}
      />
    </nav>
  );
};

export default Navbar;
