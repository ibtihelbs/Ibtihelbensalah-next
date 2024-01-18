import { FaGithub, FaLinkedin, FaBehance, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-main md:h-screen flex items-center justify-center w-full">
      <div className="grid gap-5">
        <a
          className="underline text-2xl md:text-4xl hover:no-underline text-center font-audio"
          href="mailto:ibtihel.bensalah@outlook.fr"
        >
          ibtihel.bensalah@outlook.fr
        </a>
        <hr className="bg-black h-1 border-none" />
        <ul className="flex justify-between p-6 mb-4">
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
        <hr className="bg-black h-1 border-none" />
        <p className="text-center font-bold">
          © 2024 ibtihel ben salah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
