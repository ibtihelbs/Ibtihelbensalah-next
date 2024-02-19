"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { usePathname } from "next/navigation";
import HugeText from "./HugeText";
import H3 from "./H3";
interface ProjectData {
  name: string;
  image: string;
  description: string;
  technologies: { frontend: string[]; backend: string[] };
  contributions: string;
  exploreLink: string;
  key: number;
  _id: string;
  id: number;
  codeLink: string;
}

const Features: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const params = usePathname();
  console.log(params);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ProjectData[]>(
          "https://server-portfolio-guad.onrender.com/api/projects"
        );
        const data = response.data;
        if (params == "/Work") {
          setProjects(data.reverse());
        } else {
          setProjects(data.reverse().slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setProjects]);
  return (
    <section className="py-4">
      {params !== "/Work" ? (
        <div className="grid grid-cols-5 mb-12 ">
          <div>
            <div className="line-hr">
              <H3 content="Portfolio" />
            </div>
          </div>
          <div className="md:col-span-4 col-span-2 grid grid-cols-1">
            <HugeText content="Latest__" noWrap={false} />
            <div className="text-end">
              <HugeText content="__work" noWrap={false} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="grid gap-8">
        {projects.map((project, i) => (
          <div key={i} className="flex justify-center">
            <Card {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
