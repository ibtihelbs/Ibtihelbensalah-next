"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import H1 from "./H1";
import H3 from "./H3";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaGithub, FaLink } from "react-icons/fa";

interface ProjectData {
  _id: string;
  id: number;
  name: string;
  image: string;
  description: string;
  technologies: {
    frontend: string[];
    backend: string[];
    _id: string;
  };
  contributions: string;
  exploreLink: string;
  codeLink: string;
  __v: number;
}

const Details = () => {
  const [singleData, setSingleData] = useState<ProjectData>();
  const param = useParams().id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://server-portfolio-guad.onrender.com/api/projects/find/${param}`
        );
        const data = response.data;
        setSingleData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="h-auto md:h-screen flex items-center">
      {singleData && (
        <div className=" grid items-center gap-4 grid-cols-1 md:grid-cols-2 md:gap-8 p-8  md:p-14 md:py-20">
          <div className="grid gap-4">
            <Image
              src={singleData.image}
              alt={singleData.name}
              width={800}
              height={500}
              className="rounded-lg md:rounded-md h-[50vh] object-cover"
            />
            <div className="hidden md:block">
              <H3 content="Description" />
              <p>{singleData.description}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8">
            <H1 noWrap={false} content={singleData.name} />

            <div>
              <hr />
              <H3 content="Contributions" />
              <p>{singleData.contributions}</p>
            </div>
            <div className="flex justify-between">
              <div>
                <hr />
                <H3 content="Technologie" />
                {singleData.technologies.frontend.map((v, i) => (
                  <span
                    className="text-[8px]  border-solid border-black px-2 py-1 rounded-full border-[1px]"
                    key={i}
                  >
                    # {v}{" "}
                  </span>
                ))}
                <br />
                {singleData.technologies.backend.map((v, i) => (
                  <span
                    className="text-[8px]  border-solid border-black px-2 py-1 rounded-full border-[1px]"
                    key={i}
                  >
                    #{v}
                  </span>
                ))}
              </div>
              <div>
                <H3 content="Links" />
                <ul className="flex justify-between">
                  <li>
                    <Link
                      title="live link"
                      href={
                        singleData.exploreLink.includes("https://")
                          ? singleData.exploreLink
                          : `https://${singleData.exploreLink}`
                      }
                    >
                      <FaLink />
                    </Link>
                  </li>{" "}
                  <hr />
                  <li>
                    <Link href={`${singleData.codeLink}`}>
                      <FaGithub />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Details;
