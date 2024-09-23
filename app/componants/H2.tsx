interface contentProp {
  content: string;
}
const H2: React.FC<contentProp> = ({ content }) => {
  return (
    <h2 className="font-audio capitalize italic text-[16px] sm:text-2xl leading-[1] md:text-3xl">
      {content}
    </h2>
  );
};

export default H2;
