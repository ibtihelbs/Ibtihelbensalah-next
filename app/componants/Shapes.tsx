import Image from "next/image";

const Shapes = () => {
  return (
    <div className="relative animate-spin-slow w-[200px] md:w-[500px]">
      <Image
        width={500}
        height={500}
        src={"/shapes/shape-63.png"}
        alt="shape"
      />
    </div>
  );
};

export default Shapes;
