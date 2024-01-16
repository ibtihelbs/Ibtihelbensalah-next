import React from "react";
import Search from "./Search";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const Nav = [
    { name: "Home", link: "/" },
    { name: "Work", link: "/Work" },
    { name: "Blog", link: "/Blog" },
    { name: "Contact", link: "/Contact" },
  ];
  return (
    <nav className="flex md:justify-between absolute z-10 w-full">
      <Search />
      <Link href={"/"}>
        <h1>ibs</h1>
      </Link>
      <ul className="flex md:flex-row md:gap-4  font-bold flex-col justify-around items-center absolute h-screen w-screen z-1500 r-0 bg-white ">
        <li className="float-right">
          {" "}
          <IoIosClose width={50} className="bg-red-500" />{" "}
        </li>
        {Nav.map((v, i) => (
          <li key={i}>
            <Link
              className="flex justify-center items-center h-3 "
              href={v.link}
            >
              {" "}
              {v.name}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
