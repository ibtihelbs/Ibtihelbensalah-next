"use client";
import { motion } from "framer-motion";
interface contentProp {
  content: string;
  noWrap: boolean;
}
const HugeText: React.FC<contentProp> = ({ content, noWrap }) => {
  const animateText = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };
  return (
    <motion.h1
      variants={animateText}
      className={`font-audio text-4xl  md:leading-none uppercase md:text-8xl lg:text-[150px]  ${
        noWrap ? "whitespace-nowrap" : ""
      }`}
    >
      {content}
    </motion.h1>
  );
};

export default HugeText;
