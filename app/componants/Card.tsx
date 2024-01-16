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
    <div className=" mx-auto mb-8 bg-white shadow-lg rounded-md overflow-hidden">
      <Image
        src={image}
        alt={`Project: ${name}`}
        className="w-full h-full object-cover"
        fill
      />
    </div>
  );
};

export default Card;
