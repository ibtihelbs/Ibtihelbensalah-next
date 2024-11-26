import React from "react";
import HugeText from "./HugeText";

const Skills: React.FC = () => {
  const skillData = [
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "framer motion",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "Firebase"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Figma", "VS Code"],
    },
  ];

  return (
    <section
      className="p-6 max-w-4xl mx-auto grid gap-6 items-center"
      aria-labelledby="skills-section-title"
    >
      <HugeText content="Skills____" noWrap={false} />

      <div className="grid gap-6 md:grid-cols-2">
        {skillData.map((category, index) => (
          <div
            key={index}
            className="border-2 border-solid border-black  p-4 shadow-xl4 rounded-2xl"
          >
            <h3
              className="text-xl font-semibold mb-3"
              id={`skills-category-${index}`}
            >
              {category.title}
            </h3>
            <ul
              aria-labelledby={`skills-category-${index}`}
              className="flex flex-wrap gap-2"
            >
              {category.skills.map((skill, i) => (
                <li
                  key={i}
                  className="bg-black text-white text-sm font-medium px-3 py-1 rounded-full"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
