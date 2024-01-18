import { BiArrowToBottom } from "react-icons/bi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-main w-screen h-screen flex font-bold flex-col gap-8 items-center justify-center"
    >
      <div>
        <h1 className="text-6xl">let's get in touch </h1>
        <div className="flex gap-4 items-center justify-between">
          <h2 className="text-6xl">Click Bellow</h2>
          <BiArrowToBottom style={{ transform: "scale(3) rotate(50deg)" }} />
        </div>
        <ul className="text-3xl mt-5">
          <li>
            <a href="mailto:ibtihel.bensalah@outlook.fr" className="underline">
              Ibtihel.bensalah@outlook.fr
            </a>
          </li>
          {/**<li className="hover:cursor-pointer">
            <a href="./ibtihelbensalah-cv.pdf" download="ibtihelbensalah-cv">
              Download cv
            </a>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
