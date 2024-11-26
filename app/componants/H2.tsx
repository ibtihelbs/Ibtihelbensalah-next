interface contentProp {
  content: string;
}
const H2: React.FC<contentProp> = ({ content }) => {
  return (
    <h2 className="font-audio capitalize  text-[16px] md:text-2xl leading-[1] ">
      {content}
    </h2>
  );
};

export default H2;
