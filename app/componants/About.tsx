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
  {
    title: "High engagement",
    details: [
      {
        subtitle: "lo",
        description:
          "40% of online users leave a website if it takes more than three seconds to load, and 47% of online shoppers expect an online retail web page to load in under two seconds          ",
      },
      {
        subtitle: "SEO ",
        description:
          " Slow websites can also negatively impact SEO, as search engines like Google consider fast load speed as a positive ranking factor. ",
      },
    ],
  },
  {
    title:
      "Get Your Message Across: Transforming Designs into Impactful Digital Experiences",
    details: [
      {
        subtitle: "Get Your Message Across",
        description:
          "In today's fast-paced digital landscape, losing your potential customers' attention due to slow, boring, or confusing interfaces is a risk you can't afford.",
      },
      {
        subtitle: "Transforming Designs",
        description:
          "Reach out to us, and let us craft a website tailored to the short attention spans of today's audience—fast, captivating, and accessible on all devices.",
      },
    ],
  },
  {
    title: "Your website is everywhere",
    details: [
      {
        subtitle: "Get Your Message Across",
        description:
          "In today's fast-paced digital landscape, losing your potential customers' attention due to slow, boring, or confusing interfaces is a risk you can't afford.",
      },
      {
        subtitle: "Transforming Designs",
        description:
          "Reach out to us, and let us craft a website tailored to the short attention spans of today's audience—fast, captivating, and accessible on all devices.",
      },
    ],
  },
];

const About: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);

  return (
    <section ref={targetRef} className={`relative h-[150vh] `}>
      <div className="sticky top-0 flex h-screen overflow-hidden">
        <h1>hhihihi</h1>
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
      <Link href={"/"}> [Connect with Me] | [Explore My Portfolio]</Link>
    </section>
  );
};

export default About;
