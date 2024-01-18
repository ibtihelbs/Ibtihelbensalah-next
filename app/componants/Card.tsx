import Link from "next/link";
import Image from "next/image";
interface CardProps {
  id: number;
  name: string;
  image: string; // Image URL or placeholder image URL
  description: string;
  technologies: {
    frontend: string[];
    backend: string[];
  };
  contributions: string;
  exploreLink: string;
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  image,
  description,
  technologies,
  contributions,
  exploreLink,
}) => {
  return (
    <div className="relative  mb-8 bg-white h-full shadow-lg rounded-md overflow-hidden">
      <Image
        src={image}
        alt={`Project: ${name}`}
        fill
        className="h-full top-0 w-full origin-top object-cover"
      />
    </div>
  );
};

export default Card;
