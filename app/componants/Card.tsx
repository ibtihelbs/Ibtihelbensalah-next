import Link from "next/link";
import Image from "next/image";
import H3 from "./H3";

import { FaGithub, FaLink } from "react-icons/fa";

type CardProps = {
  _id: string;
  id: number;
  name: string;
  image: string;
  description: string;
  technologies: {
    frontend: string[];
    backend?: string[];
  };
  exploreLink: string;
  codeLink?: string;
};

const Card: React.FC<CardProps> = ({
  _id,
  name,
  image,
  technologies,
  exploreLink,
  codeLink,
}) => {
  const iconClass = "text-2xl md:text-4xl";

  return (
    <div
      className="shadow-xl4  w-full max-w-[600px] h-[400px] p-4 grid grid-cols-3 grid-row-5 gap-2 border-2 border-solid border-black rounded-2xl"
      role="region"
      aria-labelledby={`card-title-${_id}`}
    >
      {/* Project Image */}
      <Link
        href={`DetailWork/${_id}`}
        aria-label={`View details of project ${name}`}
        title={`View details of ${name}`}
        className="col-span-2 row-span-4 relative hover:opacity-80 hover:scale-95 transition-all"
      >
        <Image
          src={image}
          alt={`Image of the project: ${name}`}
          fill
          sizes="(max-width: 768px) 330px, 33px"
          className="shadow-lg object-cover border-2 border-solid border-black rounded-2xl overflow-hidden"
        />
      </Link>

      {/* Technologies */}
      <div className="row-span-2 grid gap-2">
        <H3 content="Tech:" />
        <ul
          className="flex gap-1 items-start flex-wrap"
          aria-label="Technologies used"
        >
          {technologies.frontend.length > 0 ? (
            technologies.frontend.map((tech, i) => (
              <li
                key={i}
                className=" px-2 text-ellipsis overflow-hidden border-black text-[12px] border rounded-full"
              >
                {tech}
              </li>
            ))
          ) : (
            <li>No technologies listed</li>
          )}
        </ul>
      </div>

      {/* Project Name */}
      <div className="col-span-2 border-[3px] border-black rounded-2xl p-3">
        <H3 content={name} />
      </div>

      {/* Links Section */}
      <div>
        <div className="hidden md:block">
          <H3 content="Links:" />
        </div>
        <div className="grid grid-cols-3">
          <ul className="grid gap-3">
            {/* Explore Link */}
            <li>
              <Link
                href={exploreLink}
                aria-label={`Explore project ${name}`}
                title={`Explore ${name}`}
              >
                <FaLink className={iconClass} />
              </Link>
            </li>
            {/* Code Link */}
            {codeLink && (
              <li>
                <Link
                  href={codeLink}
                  aria-label={`View source code for ${name}`}
                  title={`Source code for ${name}`}
                >
                  <FaGithub className={iconClass} />
                </Link>
              </li>
            )}
          </ul>
          {/* Cursor Image Link */}
          <Link
            className="col-span-2"
            href={`DetailWork/${_id}`}
            aria-label={`See more details for project ${name}`}
            title={`More details about ${name}`}
          >
            <Image
              src="/cursor.gif"
              alt="Animated cursor icon indicating clickable area"
              height={100}
              width={100}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
