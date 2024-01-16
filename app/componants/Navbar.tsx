"use client";
import React, { useState } from "react";
import Search from "./Search";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
const Nav = [
  { name: "Home", link: "/" },
  { name: "Work", link: "/Work" },
  { name: "Blog", link: "/Blog" },
  { name: "Contact", link: "/Contact" },
];

const NavbarDesktop = () => {
  return (
    <ul className="none hidden md:flex gap-4">
      {Nav.map((item, i) => (
        <li>
          <Link href={item.link}> {item.name} </Link>
        </li>
      ))}
    </ul>
  );
};

const NavbarMobile = () => {
  return (
    <div>
      <ul className="md:none md:hidden visible flex flex-col gap-4">
        {Nav.map((item, i) => (
          <li>
            <Link href={item.link}> {item.name} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between absolute z-10 w-full bg-transparent">
      <Search />
      <Link href={"/"}>
        <h1 className="cursor-pointer text-xl font-bold">ibs</h1>
      </Link>
      <NavbarDesktop />
      <NavbarMobile />
    </nav>
  );
};

export default Navbar;
