import Link from "next/link";
import Image from "next/image";
import H3 from "./H3";
import H2 from "./H2";
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
    <div className="shadow-xl4 w-full max-w-[600px] h-[400px]   p-4 grid grid-cols-3 grid-row-3 gap-2 border-2 border-solid border-black rounded-2xl ">
      <Link
        href={`DetailWork/${_id}`}
        aria-label={`View details of project ${name}`}
        className="col-span-2 row-span-2 relative hover:opacity-80 hover:scale-95 transition-all"
      >
        <Image
          src={image || "/placeholder.png"}
          alt={`Project: ${name}`}
          fill
          placeholder="blur"
          blurDataURL="/placeholder.png"
          className="shadow-lg object-cover border-2 border-solid border-black rounded-2xl  overflow-hidden"
        />
      </Link>
      <div className="row-span-2">
        <H3 content="Tech:" />
        <ul className="flex gap-2 flex-wrap">
          {technologies.frontend.length > 0 ? (
            technologies.frontend.map((tech, i) => (
              <li key={i} className="px-1 py-[2px]  border-[3px] rounded-full">
                {tech}
              </li>
            ))
          ) : (
            <li>No technologies listed</li>
          )}
        </ul>
      </div>
      <div className="col-span-2">
        <H2 content={name} />
      </div>

      <div>
        <div className="hidden md:block">
          <H3 content="Links:" />
        </div>
        <div className="grid grid-cols-3">
          <ul className="grid gap-3">
            <li>
              <Link href={exploreLink} aria-label={`Explore ${name}`}>
                <FaLink className={iconClass} />
              </Link>
            </li>
            {codeLink && (
              <li>
                <Link href={codeLink} aria-label={`View code for ${name}`}>
                  <FaGithub className={iconClass} />
                </Link>
              </li>
            )}
          </ul>
          <Link
            className="col-span-2 "
            href={`DetailWork/${_id}`}
            aria-label="See details"
          >
            <Image src="/cursor.gif" alt="cursor" height={100} width={100} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
