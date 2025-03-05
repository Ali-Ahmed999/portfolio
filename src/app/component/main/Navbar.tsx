import React from "react";
import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";
import { BiPencil } from "react-icons/bi"; // Feather pen icon

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Navbar Title with Logo */}
        <div className="flex items-center gap-2 hidden sm:flex">
          <BiPencil className="text-3xl text-purple-500" /> {/* Feather Pen Icon */}
          <span className="font-bold ml-3 text-gray-300 text-[20px]">Hafiz Ali Ahmed</span>
        </div>

     {/* Navbar Links */}
     <div className="w-[600px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="#about-me">
              <span className="cursor-pointer">About me</span>
            </Link>
            <Link href="#skills">
              <span className="cursor-pointer">Skills</span>
            </Link>
            <Link href="#projects">
              <span className="cursor-pointer">Projects</span>
            </Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-5 hidden sm:flex">
          <Link href="https://github.com/Ali-Ahmed999" target="_blank" aria-label="GitHub">
            <RxGithubLogo className="text-3xl text-gray-300 hover:text-gray-500 cursor-pointer" />
          </Link>
          <Link href="https://www.linkedin.com/in/hafiz-ali-ahmed-9537b4292" target="_blank" aria-label="LinkedIn">
            <RxLinkedinLogo className="text-3xl text-gray-300 hover:text-blue-500 cursor-pointer" />
          </Link>
          <Link href="https://twitter.com/HafizAliAhmed9" target="_blank" aria-label="Twitter">
            <RxTwitterLogo className="text-3xl text-gray-300 hover:text-blue-400 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
