"use client";
import Card from "./Card";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { VscArrowRight } from "react-icons/vsc";

import Link from "next/link";
const projects = [
  {
    id: 1,
    name: "Project 1",
    image: "/portfolio/1.gif",
    description:
      "A brief overview of Project 1, highlighting its purpose, features, and your role in its development.",
    technologies: {
      frontend: ["Technology 1", "Technology 2"],
      backend: ["Technology 3", "Technology 4"],
    },
    contributions:
      "Describe your key contributions or responsibilities in Project 1. Highlight any challenges overcome or unique solutions implemented.",
    exploreLink: "URL-to-explore-Project-1",
  },
  {
    id: 2,
    name: "Project 2",
    image: "/portfolio/2.gif",

    description:
      "A brief overview of Project 2, highlighting its purpose, features, and your role in its development.",
    technologies: {
      frontend: ["Technology A", "Technology B"],
      backend: ["Technology C", "Technology D"],
    },
    contributions:
      "Describe your key contributions or responsibilities in Project 2. Highlight any challenges overcome or unique solutions implemented.",
    exploreLink: "URL-to-explore-Project-2",
  },
  {
    id: 3,
    name: "Project 3",
    image: "/portfolio/3.gif",
    description:
      "A brief overview of Project 3, highlighting its purpose, features, and your role in its development.",
    technologies: {
      frontend: ["Technology X", "Technology Y"],
      backend: ["Technology Z"],
    },
    contributions:
      "Describe your key contributions or responsibilities in Project 3. Highlight any challenges overcome or unique solutions implemented.",
    exploreLink: "URL-to-explore-Project-3",
  },
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
const Features: React.FC = () => {
  const ref = useRef(null);
  const isInview = useInView(ref);
  useEffect(() => {
    console.log(isInview);
  }, [isInview]);
  return (
    <motion.div ref={ref}>
      <div className="grid grid-rows-5 p-6 grid-cols-3 gap-4 h-screen  w-screen">
        <h1 className={`text-4xl font-audio col-span-3 `}>Latest Projects</h1>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className={`${
              project.id == 1
                ? "col-span-2 row-span-2"
                : project.id == 2
                ? "row-span-4"
                : project.id == 3
                ? "col-span-2 row-span-3"
                : ""
            } `}
            initial="hidden"
            whileInView="visible"
            variants={variants}
          >
            <Card {...project} />
          </motion.div>
        ))}
        <div>
          <Link
            href={"/Work"}
            className="font-audio  flex justify-between items-center text-4xl"
          >
            more <VscArrowRight />{" "}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
