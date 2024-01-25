"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import H1 from "./H1";
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
  {
    title: "High engagement",
    details: [
      {
        subtitle: "Fast website",
        description:
          "40% of online users leave a website if it takes more than three seconds to load, and 47% of online shoppers expect an online retail web page to load in under two seconds          ",
      },
    ],
  },
  {
    title: "Accross all devices",
    details: [
      {
        subtitle: "Responsive Website",
        description:
          "In today's fast-paced digital landscape, losing your potential customers' attention due to slow, boring, or confusing interfaces is a risk you can't afford.",
      },
    ],
  },
  {
    title: "High Fidelity",
    details: [
      {
        subtitle: "Design file = interface",
        description:
          "In today's fast-paced digital landscape, losing your potential customers' attention due to slow, boring, or confusing interfaces is a risk you can't afford.",
      },
    ],
  },
];

const About: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className={`relative h-[150vh] w-screen`}>
      <div className="sticky top-0 flex h-screen overflow-hidden">
        {
          <motion.div style={{ x }} className="flex gap-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className=" h-screen w-screen flex items-center justify-center"
              >
                <div className="w-[80%]">
                  <H1 content={section.title} noWrap={false} />
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
        }
      </div>
    </section>
  );
};

export default About;
