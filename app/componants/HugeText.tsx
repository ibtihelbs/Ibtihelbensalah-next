interface contentProp {
  content: string;
  noWrap: boolean;
}
const HugeText: React.FC<contentProp> = ({ content, noWrap }) => {
  return (
    <h1
      className={`font-audio text-5xl md:leading-none uppercase  md:text-[136px] p-10 ${
        noWrap ? "whitespace-nowrap" : ""
      }`}
    >
      {content}
    </h1>
  );
};

export default HugeText;
