const page = () => {
  return (
    <div className="relative h-screen w-screen">
      <div
        style={{ transform: "translate(-50%,-50%)" }}
        className="w-4/5 max-w-[800px] absolute  top-1/2 left-1/2 md:z-10"
      >
        <div>
          <h3>no posts yet ....</h3>
          <h1 className="text-4xl italic">Thank you for checking, though.</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
