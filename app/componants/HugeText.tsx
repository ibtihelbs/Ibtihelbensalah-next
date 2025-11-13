"use client";
import { motion, Variants } from "framer-motion";

interface ContentProps {
  content: string;
  noWrap?: boolean;
}

const animateText: Variants = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1] as [number, number, number, number],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1] as [number, number, number, number],
      duration: 0.7,
    },
  },
};

const HugeText: React.FC<ContentProps> = ({ content, noWrap }) => {
  return (
    <motion.h1
      variants={animateText}
      className={`font-cinzel text-4xl sm:text-5xl md:leading-none uppercase md:text-8xl lg:text-[150px] ${
        noWrap ? "whitespace-nowrap" : ""
      }`}
    >
      {content}
    </motion.h1>
  );
};

export default HugeText;
