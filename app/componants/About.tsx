"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import H1 from "./H1";
import Link from "next/link";
import H2 from "./H2";
import Paragraph from "./Paragraph";

interface SectionDetails {
  subtitle: string;
  description: string;
}

interface Section {
  title: string;
  details?: SectionDetails[];
  description?: string;
}

const sections: Section[] = [
  { title: "" },
  { title: "" },
  { title: "" },
  { title: "" },
  {
    title: "High Fidelity and User-Centric Design",
    details: [
      {
        subtitle: "High Fidelity",
        description:
          "Striving for pixel-perfect designs that closely match the envisioned user interface. This involves attention to detail, ensuring that the end product aligns with the design specifications.",
      },
      {
        subtitle: "User-Centric Design",
        description:
          "Prioritizing the user experience by creating interfaces that are intuitive, visually appealing, and contribute to a positive overall interaction with the application.",
      },
    ],
  },
  {
    title: "Frontend Development",
    details: [
      {
        subtitle: "Performance Optimization",
        description:
          "Ensuring that web applications are optimized for speed and efficiency. This involves minimizing load times, reducing unnecessary requests, and overall enhancing the performance of the user interface.",
      },
      {
        subtitle: "Responsive Design",
        description:
          "Creating interfaces that seamlessly adapt to various devices and screen sizes. This contributes to a consistent and enjoyable user experience across different platforms.",
      },
    ],
  },
  {
    title: "Design Phase",
    details: [
      {
        subtitle: "Strategic Design",
        description:
          "Applying design principles strategically to contribute to higher conversion rates. This may involve creating clear calls-to-action, optimizing the user flow, and using visual elements to guide users toward desired actions.",
      },
      {
        subtitle: "User Psychology",
        description:
          "Understanding user behavior and psychology to influence their decision-making positively. Implementing design elements that resonate with your target audience and encourage them to take the desired actions.",
      },
    ],
  },
  {
    title: "Backend Development",
    details: [
      {
        subtitle: "Robust Systems",
        description:
          "Developing a strong and reliable backend architecture that can handle various functionalities, scale with the growth of the application, and ensure smooth operations.",
      },
      {
        subtitle: "Efficiency",
        description:
          "Optimizing backend code for efficiency and resource utilization, ensuring that the application runs smoothly and responds quickly to user requests.",
      },
      {
        subtitle: "Security",
        description:
          "Implementing robust security measures to protect sensitive data, prevent unauthorized access, and ensure the overall integrity of the system.",
      },
    ],
  },
  {
    title: "Holistic Approach",
    description:
      "Commitment to delivering high-quality, end-to-end solutions. By combining design precision, frontend performance, strategic design thinking, and robust backend development, you contribute to creating web applications that excel in both form and function.",
  },
];
const About: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-45%"]);

  return (
    <section ref={targetRef} className={`relative h-[200vh]`}>
      <div className="sticky top-0 flex h-screen overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className=" h-screen w-screen flex items-center justify-center"
            >
              <div className="w-[80%]">
                <H1 content={section.title} />
                {section.details?.map((val, key) => (
                  <div key={key}>
                    <H2 content={val.subtitle} />
                    <Paragraph content={val.description} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <Link href={"/"}> [Connect with Me] | [Explore My Portfolio]</Link>
    </section>
  );
};

export default About;
