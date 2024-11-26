interface contentProp {
  content: string;
  noWrap: boolean;
}
const H1: React.FC<contentProp> = ({ content, noWrap }) => {
  return (
    <h1
      className={`font-audio text-2xl md:text-5xl ${
        noWrap ? "whitespace-nowrap" : ""
      }`}
    >
      {content}
    </h1>
  );
};

export default H1;
