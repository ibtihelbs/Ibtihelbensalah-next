"use client";
import { motion, useScroll } from "framer-motion";
const aboutMe = [
  {
    title: "About Me",
    paragraph:
      "Hello there! 👋 I'm [Your Name], a passionate frontend developer and graphic design enthusiast based [Your Location or 'Worldwide']. My journey in the digital realm is a fusion of creativity, innovation, and a relentless pursuit of turning ideas into captivating experiences.",
  },
  {
    title: "Frontend Alchemist 🚀",
    paragraph:
      "As a frontend alchemist, I specialize in the art of turning designs into interactive magic. With a keen eye for detail and a love for clean, elegant code, I thrive on creating seamless and delightful user experiences. My journey began with a fascination for how a few lines of code could shape digital landscapes.",
  },
  {
    title: "Graphic Design Wizard 🎨",
    paragraph:
      "Being a graphic design wizard complements my frontend skills. I believe in the power of visual storytelling, where aesthetics and functionality dance together. From conceptualizing visually stunning interfaces to crafting unique brand identities, I bring a holistic approach to every project.",
  },
  {
    title: "Tech Enthusiast 🌐",
    paragraph:
      "Beyond the pixels and lines of code, I am a tech enthusiast always exploring the latest trends and innovations. Whether it's experimenting with new frontend frameworks, diving into backend solutions, or staying updated on design principles, I thrive on the ever-evolving nature of technology.",
  },
  {
    title: "Let's Collaborate 🤝",
    paragraph:
      "I am on a mission to create digital delight beyond the screen. Whether you're a startup in need of a captivating web presence or a fellow creative ready to embark on a collaborative journey, let's connect. Your vision combined with my skills can bring ideas to life in ways that resonate and captivate. Feel free to explore my portfolio, and don't hesitate to reach out. I'm excited to see where our creative journey takes us!",
  },
];

const About = () => {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  return (
    <motion.div
      className="h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeIn" }}
    >
      {aboutMe.map((item, i) => (
        <motion.div key={i}>
          <h1> {item.title} </h1>
          <p> {item.paragraph} </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default About;
{
  /**
        [Connect with Me] | [Explore My Portfolio] */
}
