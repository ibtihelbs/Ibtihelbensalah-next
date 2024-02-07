import H1 from "./componants/H1";
const Loading = () => {
  return (
    <div className="h-screen flex justify-center bg-red-500 items-center">
      <H1 content="Loading...." noWrap={true} />
    </div>
  );
};

export default Loading;
