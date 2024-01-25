import Link from "next/link";
import Image from "next/image";
import H3 from "./H3";
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
    <div className=" flex flex-col items-center ">
      <Link href={`DetailWork/${_id}`} className="relative ">
        <Image
          src={image}
          alt={`Project: ${name}`}
          width={1128}
          height={500}
          className="shadow-lg  w-[80vw] hover:cursor-pointer rounded-md object-cover overflow-hidden"
        />
      </Link>

      <div
        id="details"
        className="flex  w-[80vw] justify-between md:w-[1028px]"
      >
        <div className="hidden md:block">
          <H3 content="Tech : " />
          <ul>
            {technologies.frontend.map((v, i) => (
              <li key={i}> #{v} </li>
            ))}
          </ul>
        </div>
        <H3 content={name} />
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
