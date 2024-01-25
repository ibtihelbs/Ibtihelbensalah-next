interface contentProp {
  content: string;
}
const H3: React.FC<contentProp> = ({ content }) => {
  return (
    <h3 className=" text-xl font-bold leading-[1] md:text-2xl">{content}</h3>
  );
};

export default H3;
