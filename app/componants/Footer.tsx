"use client";
import { FaGithub, FaLinkedin, FaBehance, FaInstagram } from "react-icons/fa";
import Paragraph from "./Paragraph";
import { usePathname } from "next/navigation";
const Footer: React.FC = () => {
  const pathName = usePathname();
  return (
    <footer className=" flex items-center justify-center p-9 w-full">
      <div className="grid gap-5">
        <a
          className={`underline ${
            pathName == "/" ? "hidden" : "block"
          } hover:no-underline text-center`}
          href="mailto:ibtihel.bensalah@outlook.fr"
        >
          <Paragraph content="ibtihel.bensalah@outlook.fr" />
        </a>
        <ul className="flex justify-evenly">
          <li>
            <a
              href="https://linkedin.com/in/ibtihel-ben-salah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl md:text-4xl" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ibtihelbs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl md:text-4xl" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/ibtihelfrontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl md:text-4xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/ibtihelbs1?log_shim_removal=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance className="text-2xl md:text-4xl" />
            </a>
          </li>
        </ul>
        <p className="text-center font-bold">
          © 2024 ibtihel ben salah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
