interface contentProp {
  content: string;
  noWrap: boolean;
}
const HugeText: React.FC<contentProp> = ({ content, noWrap }) => {
  return (
    <h1
      className={`font-audio text-4xl md:leading-none uppercase  md:text-[132px] md:p-10 ${
        noWrap ? "whitespace-nowrap" : ""
      }`}
    >
      {content}
    </h1>
  );
};

export default HugeText;
