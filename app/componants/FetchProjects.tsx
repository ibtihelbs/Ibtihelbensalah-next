"use client";
import { useSelector } from "react-redux";

const FetchProjects = () => {
  const store = useSelector((state) => state);
  console.log(store);
  return <div>FetchProjects</div>;
};

export default FetchProjects;
