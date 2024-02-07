import Link from "next/link";
import Image from "next/image";
import H3 from "./H3";
import H2 from "./H2";
import { FaGithub, FaLink } from "react-icons/fa";
interface CardProps {
  key: number;
  _id: string;
  id: number;
  name: string;
  image: string;
  description: string;
  technologies: {
    frontend: string[];
    backend: string[];
  };
  contributions: string;
  exploreLink: string;
  codeLink: string;
}

const Card: React.FC<CardProps> = ({
  _id,
  id,
  name,
  image,
  description,
  technologies,
  contributions,
  exploreLink,
  codeLink,
}) => {
  return (
    <div className=" shadow-xl4 w-[80vw] flex flex-col items-center  md:p-4  gap-2 border-2 border-solid border-black  rounded-[50px]">
      <Link
        href={`DetailWork/${_id}`}
        className="cursor w-full md:h-96 h-40 relative hover:opacity-80 hover:scale-95 transition-all "
      >
        <Image
          src={image}
          alt={`Project: ${name}`}
          fill
          className="shadow-lg   hover:cursor-pointer object-cover border-2 border-solid border-black  rounded-[50px] overflow-hidden"
        />
      </Link>

      <div
        id="details"
        className="flex  md:px-12 md:py-6  p-2  w-full justify-between"
      >
        <div className="hidden md:block">
          <H3 content="Tech : " />
          <ul>
            {technologies.frontend.map((v, i) => (
              <li key={i}> #{v} </li>
            ))}
          </ul>
        </div>
        <H2 content={name} />
        <div>
          <div className="hidden md:block">
            <H3 content="Links:" />
          </div>
          <ul className="flex flex-col md:flex-row justify-between">
            <li>
              <Link href={exploreLink}>
                <FaLink />
              </Link>
            </li>
            <li>
              <Link href={exploreLink}>
                {" "}
                <FaGithub />{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
