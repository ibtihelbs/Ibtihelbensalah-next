"use client";
import Card from "./Card";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
const projects = [
  {
    id: 1,
    name: "Project 1",
    image: "/url-to-project-1-image.jpg",
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
    image: "/url-to-project-2-image.jpg",
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
    image: "/url-to-project-3-image.jpg",
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
{
  /**${
              project.id == 1 || 3
                ? " col-span-2 "
                : project.id == 2
                ? "row-span-5"
                : null
            } */
}
const Features: React.FC = () => {
  const ref = useRef(null);
  const isInview = useInView(ref);
  useEffect(() => {
    console.log(isInview);
  }, [isInview]);
  return (
    <motion.div ref={ref}>
      <div className="grid grid-rows-5 grid-cols-3 gap-4 h-screen bg-orange-400 w-screen">
        <h1 className={`col-span-3 bg-blue-500`}>Latest Projects</h1>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${
              project.id == 1
                ? "col-span-2 row-span-2"
                : project.id == 2
                ? "row-span-3"
                : project.id == 3
                ? "col-span-2 row-span-3"
                : ""
            } bg-red-500`}
          >
            <div>{project.id}</div>
            <Card {...project} />
          </div>
        ))}
        <div>
          <Link href={"/Work"}>more</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
