import H1 from "./componants/H1";
const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center font-audio  items-center">
      <H1 content="Loading...." noWrap={true} />
    </div>
  );
};

export default Loading;
