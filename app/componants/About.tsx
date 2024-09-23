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
          "40% of online users leave a website if it takes more than three seconds to load, and 47% of online shoppers expect an online retail web page to load in under two seconds.",
      },
    ],
  },
  {
    title: "Accross all devices",
    details: [
      {
        subtitle: "Responsive Website",
        description:
          "A responsive website is essential for capturing user attention, especially with most users accessing websites via mobile. Neglecting mobile users can harm engagement and SEO. Responsive design ensures optimal user experience across devices, reducing bounce rates and facilitating social sharing. Ultimately, it leads to higher conversion rates.",
      },
    ],
  },
  {
    title: "Settle Animation",
    details: [
      {
        subtitle: " boosting engagement ",
        description:
          "Settled web animations are crucial for boosting engagement by subtly enhancing user experience without overwhelming them. They guide focus, convey information effectively, and improve retention rates. Unlike flashy animations, settled ones create a professional aesthetic, fostering trust with users and encouraging exploration on websites.",
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
                <motion.div
                  initial={{ transform: "scale(.8)" }}
                  animate={{ transform: "scale(1.2)" }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                  exit={{ transform: "scale(1)" }}
                  className="w-[50%] grid gap-4"
                >
                  <H1 content={section.title} noWrap={false} />
                  {section.details?.map((val, key) => (
                    <div key={key} className="grid gap-2">
                      <H2 content={val.subtitle} />
                      <Paragraph content={val.description} />
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
          </motion.div>
        }
      </div>
    </section>
  );
};

export default About;
