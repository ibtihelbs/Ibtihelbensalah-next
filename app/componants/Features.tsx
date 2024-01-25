"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { usePathname } from "next/navigation";

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
    <section className="w-screen">
      <div className="grid gap-8">
        {projects.map((project, i) => (
          <div key={i}>
            <Card {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
