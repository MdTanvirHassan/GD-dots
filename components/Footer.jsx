import Image from 'next/image'
import React from "react";
import Link from "next/link";
import Logo from '../public/assets/GD-Dots.png'

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white shadow-lg border-t-2">
        <div className="container grid md:grid-cols-3 gap-20 px-5 py-12 mx-auto  md:items-center lg:items-start ">

          <div className="mx-auto text-center md:text-left">
            <Link href={"/"}>
              <div className="flex font-medium items-center md:justify-start justify-center text-white cursor-pointer">
                <Image src={Logo} alt=".." width={140} height={40}/>
                {/* <span className="ml-3 text-xl text-white"> GD dots</span> */}
              </div>
            </Link>
            <p className="mt-2 px- text-sm text-gray-300 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              alias, placeat ut consectetur ducimus architecto tenetur suscipit
              exercitationem corporis excepturi.
            </p>
          </div>

          <div className="-mb-10 md:mt-0 mt-10 md:px-24 md:text-left ustify-center items-center text-center">
            <div className="w-full j px-4 ">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Privacy & Terms
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-300 text-sm hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 text-sm hover:text-gray-800">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 text-sm hover:text-gray-800">
                    Payment Systems
                  </a>
                </li>
              </nav>
            </div>
            </div>

            <div className="w-full justify-center items-center text-center md:text-start md:items-baseline md:justify-end md:pl-36 py-10 sm:py-0">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Quick Links
              </h2>
              <nav className="list-none mb-10">
                <Link href={"/contact"}>
                  <li>
                    <div className="text-gray-300 text-sm hover:text-gray-800 cursor-pointer">
                      Contact Us
                    </div>
                  </li>
                </Link>
                <li>
                  <a className="text-gray-300 text-sm hover:text-gray-800">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 text-sm hover:text-gray-800">
                    Return Policy
                  </a>
                </li>
              </nav>
            </div>
          
        </div>

        <hr className="text-white mx-20" />
        <div className="bg-black">
          <div className="container m-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row text-center justify-center items-center">
            <p className="text-white text-sm text-center tracking-widest space-x-36 sm:text-left">
              © Copyright 2023 || GD Dots || All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
