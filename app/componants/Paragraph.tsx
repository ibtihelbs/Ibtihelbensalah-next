interface contentProp {
  content: string;
}
const Paragraph: React.FC<contentProp> = ({ content }) => {
  return <p className=" md:text-xl text-[16px] ">{content}</p>;
};

export default Paragraph;
