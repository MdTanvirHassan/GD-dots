import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import NavBanner from "./NavBanner";
import NavLogo from "../public/assets/GD-Dots.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("transparent");
  const [linkColor, setLinkColor] = useState("#ffffff");
  // const [position, setPosition] = useState('fixed')
  const [navBanner, setNavBanner] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 40) {
        setShadow(true);
        setNavBg("#ffffff");
        setNavBanner(false);
        setLinkColor("#000000");
      } else {
        setShadow(false);
        setNavBg("transparent");
        setNavBanner(true);
        setLinkColor("#ffffff");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      <div className={navBanner ? " w-full z-10" : "fixed w-full -top-96"}>
        <NavBanner />
      </div>

      <div
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? "fixed w-full h-20 shadow-md shadow-gray-400 z-[100] ease-in-out duration-300"
            : "fixed w-full h-20 z-[100]"
        }>
        <div className="flex justify-between items-center w-full h-full px-1 2xl:px-16">
          <Link href="/">
            <div className="mx-20 flex space-x-2"
                style={{ backgroundColor: `${shadow}` }}>
              <Image
                src={NavLogo}
                alt="/"
                width="140"
                height="40"
                className={
                  shadow
                    ? "cursor-pointer bg-gray-200 px-1 py-2 rounded-md"
                    : "cursor-pointer"
                }
              />
              {/* <h3
                className="text-white font-bold text-xl"
                style={{ color: `${linkColor}` }}>
                GD-dots
              </h3> */}
            </div>
          </Link>
          <div>
            <ul
              style={{ color: `${linkColor}` }}
              className="hidden md:flex space-x-8 mx-10">
              <li className="ml-7 text-sm uppercase ">
                <Link href="/">Home</Link>
              </li>
              <li className="ml-7 text-sm uppercase ">
                <Link href="/#company">Company</Link>
              </li>
              <li className="ml-7 text-sm uppercase ">
                <Link href="/#services">Services</Link>
              </li>
              <li className="ml-7 text-sm uppercase ">
                <Link href="/#blogs">Blogs</Link>
              </li>

              <li className="ml-7 text-sm uppercase ">
                <Link href="/#newsletter">Contact</Link>
              </li>
              <li className="ml-7 text-sm uppercase ">
                <Link href="/search">
                  <BsSearch className="text-lg" />
                </Link>
              </li>
            </ul>
            {/* Hamburger Icon */}
            <div
              style={{ color: `${linkColor}` }}
              onClick={handleNav}
              className="md:hidden rounded-full bg-gray-600 p-2">
              <AiOutlineMenu size={25} className="text-white" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }>
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <div className={
                  shadow
                    ? "cursor-pointer bg-gray-200 px-1 py-2 rounded-md"
                    : "cursor-pointer"
                }>
                    <Image src={NavLogo} width="140" height="40" alt="/" />
                  </div>
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ">
                  <AiOutlineClose className="text-black" />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/#company">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Company
                  </li>
                </Link>
                <Link href="/#services">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Services
                  </li>
                </Link>
                <Link href="/#blogs">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Blogs
                  </li>
                </Link>

                <Link href="/#contact">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
                <Link href="/#search">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Search
                  </li>
                </Link>
              </ul>
              <div className="pt-32"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
