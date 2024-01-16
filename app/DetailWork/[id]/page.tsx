"use client";
import { useParams } from "next/navigation";
const page = () => {
  const params = useParams();
  console.log(params);
  return <div>{params.id}</div>;
};

export default page;
