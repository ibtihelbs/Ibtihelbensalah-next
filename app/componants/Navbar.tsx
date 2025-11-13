"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";

// ---------------------
// NAV ITEMS
// ---------------------
const NAV_LINKS = [
  { name: "Home", link: "/" },
  { name: "Work", link: "/Work" },
  { name: "Blog", link: "/Blog" },
  { name: "Contact", link: "/#contact" },
];

// ---------------------
// DESKTOP NAVBAR
// ---------------------
const NavbarDesktop = () => (
  <ul className="hidden md:flex gap-6 font-cinzel text-lg">
    {NAV_LINKS.map((item, i) => (
      <li key={i}>
        <Link href={item.link}>{item.name}</Link>
      </li>
    ))}
  </ul>
);

// ---------------------
// MOBILE NAVBAR
// ---------------------
interface NavbarMobileProps {
  isMenuOpen: boolean;
  handleMenuToggle: () => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
  isMenuOpen,
  handleMenuToggle,
}) => {
  const easeIn: Transition["ease"] = [0.12, 0, 0.39, 0];
  const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

  const menuVariants: Variants = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5, ease: easeIn },
    },
    exit: {
      scaleY: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  const staggerVariants: Variants = {
    initial: {
      transition: { staggerChildren: 0.09, staggerDirection: -1 },
    },
    animate: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants: Variants = {
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: easeOut },
    },
  };

  return (
    <div className="font-cinzel md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={handleMenuToggle}
        aria-label="open menu"
        className="text-3xl"
      >
        <TiThMenu />
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed right-0 top-0 origin-top w-full h-screen bg-main text-black p-6 flex flex-col justify-between z-50"
          >
            {/* Close Button */}
            <button
              aria-label="close menu"
              className="text-3xl self-end"
              onClick={handleMenuToggle}
            >
              <IoClose />
            </button>

            {/* Menu Items */}
            <motion.ul
              variants={staggerVariants}
              initial="initial"
              animate="animate"
              exit="initial"
              className="flex flex-col gap-6 items-center text-4xl"
            >
              {NAV_LINKS.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  onClick={handleMenuToggle}
                  className="overflow-hidden"
                >
                  <Link href={item.link}>{item.name}</Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* Footer (Email) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.4 } }}
              className="text-center text-sm mt-auto pb-4"
            >
              <a href="mailto:ibtihel.bensalah@outlook.fr">
                ibtihel.bensalah@outlook.fr
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ---------------------
// MAIN NAVBAR COMPONENT
// ---------------------
const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className="flex justify-between items-center w-full fixed top-0 left-0 z-30 md:py-6 md:px-10 px-5 bg-transparent">
      <Link
        href="/"
        className="font-cinzel text-xl tracking-wide hover:opacity-80 transition"
      >
        Ibtihel
      </Link>
      <NavbarDesktop />
      <NavbarMobile
        isMenuOpen={isMenuOpen}
        handleMenuToggle={handleMenuToggle}
      />
    </nav>
  );
};

export default Navbar;
