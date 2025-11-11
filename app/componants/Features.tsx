"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { usePathname } from "next/navigation";
import HugeText from "./HugeText";
import H3 from "./H3";
//p
type ProjectData = {
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
};

const Features: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const params = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ProjectData[]>("./data.json");
        const data = response.data;
        if (params === "/Work") {
          setProjects(
            data.sort((a, b) => {
              return a.id - b.id;
            })
          );
        } else {
          setProjects(
            data
              .sort((a, b) => {
                return a.id - b.id;
              })
              .slice(0, 4)
          );
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  return (
    <section className="md:py-6 md:px-16 p-4">
      {params !== "/Work" ? (
        <div className="grid grid-cols-5 mb-12">
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
        <div className="grid grid-cols-5 mb-12">
          <div>
            <div className="line-hr">
              <H3 content="Portfolio" />
            </div>
          </div>
          <div className="md:col-span-4 col-span-2 grid grid-cols-1">
            <HugeText content="Selected__" noWrap={false} />
            <div className="text-end">
              <HugeText content="__Projects" noWrap={false} />
            </div>
          </div>
        </div>
      )}
      <div className=" grid med:grid-cols-2 gap-8">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          projects.map((project, i) => (
            <div key={i} className="flex justify-center">
              <Card {...project} />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Features;
